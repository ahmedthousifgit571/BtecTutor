import { NextResponse } from "next/server";
import { Prisma, EnquiryStatus } from "@prisma/client";
import { prisma } from "@/lib/prisma";

const ALLOWED_STATUSES: EnquiryStatus[] = ["NEW", "CONTACTED", "CLOSED"];

function isEnquiryStatus(value: unknown): value is EnquiryStatus {
  return typeof value === "string" && (ALLOWED_STATUSES as string[]).includes(value);
}

export async function PATCH(
  request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const body = await request.json();
    const { status } = body ?? {};

    if (!isEnquiryStatus(status)) {
      return NextResponse.json(
        { error: `Invalid status. Allowed: ${ALLOWED_STATUSES.join(", ")}` },
        { status: 400 }
      );
    }

    const updated = await prisma.enquiry.update({
      where: { id: params.id },
      data: { status },
      select: { id: true, status: true, updatedAt: true },
    });

    return NextResponse.json({ success: true, enquiry: updated });
  } catch (error) {
    if (
      error instanceof Prisma.PrismaClientKnownRequestError &&
      error.code === "P2025"
    ) {
      return NextResponse.json({ error: "Enquiry not found" }, { status: 404 });
    }

    console.error("Enquiry status update error:", error);
    return NextResponse.json(
      { error: "Failed to update enquiry" },
      { status: 500 }
    );
  }
}
