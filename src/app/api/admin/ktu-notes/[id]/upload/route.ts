import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";
import { uploadKtuDoc } from "@/lib/supabase";

const DOC_FIELD: Record<string, "notesUrl" | "questionPaperUrl" | "syllabusFileUrl"> = {
  notes: "notesUrl",
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
    const field = DOC_FIELD[docType];

    if (!field) {
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
      select: { id: true },
    });
    if (!subject) {
      return NextResponse.json({ error: "Subject not found." }, { status: 404 });
    }

    const buffer = Buffer.from(await file.arrayBuffer());
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
