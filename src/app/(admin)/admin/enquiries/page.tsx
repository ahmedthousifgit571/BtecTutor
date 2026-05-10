import { prisma } from "@/lib/prisma";
import { Mail, Phone } from "lucide-react";
import { formatDate } from "@/lib/utils";
import { EnquiryActions } from "@/components/admin/EnquiryActions";

export const dynamic = "force-dynamic";

export default async function AdminEnquiriesPage() {
  // Status enum order in the DB is NEW, CONTACTED, CLOSED, so ordering by
  // status ascending naturally surfaces the rows that still need action first.
  const [enquiries, statusCounts] = await Promise.all([
    prisma.enquiry.findMany({
      orderBy: [{ status: "asc" }, { createdAt: "desc" }],
    }),
    prisma.enquiry.groupBy({
      by: ["status"],
      _count: { _all: true },
    }),
  ]);

  const counts = {
    NEW: 0,
    CONTACTED: 0,
    CLOSED: 0,
  };
  for (const row of statusCounts) {
    counts[row.status] = row._count._all;
  }

  return (
    <div>
      <div className="flex flex-wrap items-center justify-between gap-3 mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
        <div className="flex items-center gap-3 text-xs text-gray-500">
          <span>
            <span className="font-semibold text-amber-600">{counts.NEW}</span> new
          </span>
          <span className="text-gray-300">·</span>
          <span>
            <span className="font-semibold text-sky-600">{counts.CONTACTED}</span>{" "}
            contacted
          </span>
          <span className="text-gray-300">·</span>
          <span>
            <span className="font-semibold text-gray-600">{counts.CLOSED}</span>{" "}
            closed
          </span>
          <span className="text-gray-300">·</span>
          <span>{enquiries.length} total</span>
        </div>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white">
        <div className="divide-y divide-gray-50">
          {enquiries.map((enquiry) => (
            <div key={enquiry.id} className="p-4">
              <div className="flex items-start justify-between gap-4 mb-3">
                <div>
                  <p className="text-sm font-medium text-gray-900">{enquiry.name}</p>
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 mt-1">
                    <span className="flex items-center gap-1 text-xs text-gray-400">
                      <Mail className="h-3 w-3" />
                      {enquiry.email}
                    </span>
                    {enquiry.phone && (
                      <span className="flex items-center gap-1 text-xs text-gray-400">
                        <Phone className="h-3 w-3" />
                        {enquiry.phone}
                      </span>
                    )}
                  </div>
                </div>
                <div className="text-right shrink-0">
                  {enquiry.course && (
                    <span className="text-xs bg-brand-orange/10 text-brand-orange rounded-full px-2 py-0.5">
                      {enquiry.course}
                    </span>
                  )}
                  <p className="text-xs text-gray-300 mt-1">
                    {formatDate(enquiry.createdAt)}
                  </p>
                </div>
              </div>

              {enquiry.message && (
                <p className="text-sm text-gray-500 mb-3 whitespace-pre-line">
                  {enquiry.message}
                </p>
              )}

              <EnquiryActions enquiry={enquiry} />
            </div>
          ))}
          {enquiries.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">
              No enquiries yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
