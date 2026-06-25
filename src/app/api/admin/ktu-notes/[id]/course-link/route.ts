import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma";
import { getSession } from "@/lib/auth";

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  const session = await getSession();
  if (!session) {
    return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  }

  try {
    const body = await request.json();
    const url = String(body.url || "").trim();

    if (url && !/^https?:\/\//i.test(url)) {
      return NextResponse.json(
        { error: "Link must start with http:// or https://" },
        { status: 400 }
      );
    }

    const subject = await prisma.subject.findUnique({
      where: { id: params.id },
      select: { id: true },
    });
    if (!subject) {
      return NextResponse.json({ error: "Subject not found." }, { status: 404 });
    }

    await prisma.subject.update({
      where: { id: subject.id },
      data: { courseLink: url || null },
    });

    return NextResponse.json({ success: true, courseLink: url || null });
  } catch (error) {
    console.error("KTU course link update error:", error);
    const message = error instanceof Error ? error.message : "Update failed.";
    return NextResponse.json({ error: message }, { status: 500 });
  }
}
