import { randomUUID } from "crypto";
import { NextResponse } from "next/server";
import type { Prisma } from "@prisma/client";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { uploadKtuDoc, deleteKtuDoc } from "@/lib/supabase";
import { parseNotesFiles } from "@/lib/ktu-types";

const SINGLE_DOC_FIELD: Record<string, "questionPaperUrl" | "syllabusFileUrl"> = {
  questionPaper: "questionPaperUrl",
  syllabus: "syllabusFileUrl",
};

const MAX_BYTES = 20 * 1024 * 1024; // 20 MB

export async function POST(
  request: Request,
  { params }: { params: { id: string } }
) {
  // Auth (the /api/* routes are not covered by the /admin middleware).
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const formData = await request.formData();
    const file = formData.get("file");
    const docType = String(formData.get("docType") || "");

    if (docType !== "notes" && !SINGLE_DOC_FIELD[docType]) {
      return NextResponse.json(
        { error: "Invalid docType. Use notes | questionPaper | syllabus." },
        { status: 400 }
      );
    }
    if (!(file instanceof File) || file.size === 0) {
      return NextResponse.json({ error: "No file provided." }, { status: 400 });
    }
    if (file.type !== "application/pdf") {
      return NextResponse.json({ error: "Only PDF files are allowed." }, { status: 400 });
    }
    if (file.size > MAX_BYTES) {
      return NextResponse.json({ error: "File exceeds the 20 MB limit." }, { status: 400 });
    }

    const subject = await prisma.subject.findUnique({
      where: { id: params.id },
      select: { id: true, notesFiles: true },
    });
    if (!subject) {
      return NextResponse.json({ error: "Subject not found." }, { status: 404 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());

    if (docType === "notes") {
      const fileId = randomUUID();
      const filePath = `${subject.id}/notes/${fileId}.pdf`;
      const url = await uploadKtuDoc(filePath, buffer, "application/pdf");

      const existing = parseNotesFiles(subject.notesFiles);
      const notesFiles = [
        ...existing,
        { id: fileId, name: file.name, url, path: filePath },
      ];

      await prisma.subject.update({
        where: { id: subject.id },
        data: { notesFiles: notesFiles as unknown as Prisma.InputJsonValue },
      });

      return NextResponse.json({ success: true, notesFiles });
    }

    const field = SINGLE_DOC_FIELD[docType];
    const filePath = `${subject.id}/${docType}.pdf`;
    const url = await uploadKtuDoc(filePath, buffer, "application/pdf");

    await prisma.subject.update({
      where: { id: subject.id },
      data: { [field]: url },
    });

    return NextResponse.json({ success: true, url, field });
  } catch (error) {
    console.error("KTU notes upload error:", error);
    const message =
      error instanceof Error ? error.message : "Upload failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}

export async function DELETE(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const docType = String(body.docType || "");

    const subject = await prisma.subject.findUnique({
      where: { id: params.id },
      select: { id: true, notesFiles: true },
    });
    if (!subject) {
      return NextResponse.json({ error: "Subject not found." }, { status: 404 });
    }

    if (docType === "notes") {
      const fileId = String(body.fileId || "");
      const existing = parseNotesFiles(subject.notesFiles);
      const target = existing.find((f) => f.id === fileId);
      if (!target) {
        return NextResponse.json({ error: "File not found." }, { status: 404 });
      }

      await deleteKtuDoc(target.path);
      const notesFiles = existing.filter((f) => f.id !== fileId);

      await prisma.subject.update({
        where: { id: subject.id },
        data: { notesFiles: notesFiles as unknown as Prisma.InputJsonValue },
      });

      return NextResponse.json({ success: true, notesFiles });
    }

    if (!SINGLE_DOC_FIELD[docType]) {
      return NextResponse.json(
        { error: "Invalid docType. Use notes | questionPaper | syllabus." },
        { status: 400 }
      );
    }

    const field = SINGLE_DOC_FIELD[docType];
    const filePath = `${subject.id}/${docType}.pdf`;
    await deleteKtuDoc(filePath);

    await prisma.subject.update({
      where: { id: subject.id },
      data: { [field]: null },
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("KTU notes delete error:", error);
    const message =
      error instanceof Error ? error.message : "Delete failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
