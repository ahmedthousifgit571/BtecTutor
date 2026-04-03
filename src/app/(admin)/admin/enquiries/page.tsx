import { prisma } from "@/lib/prisma";
import { Mail, Phone } from "lucide-react";
import { formatDate } from "@/lib/utils";

export default async function AdminEnquiriesPage() {
  const enquiries = await prisma.enquiry.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Enquiries</h1>
        <span className="text-sm text-gray-400">{enquiries.length} total</span>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white">
        <div className="divide-y divide-gray-50">
          {enquiries.map((enquiry) => (
            <div key={enquiry.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{enquiry.name}</p>
                  <div className="flex items-center gap-3 mt-1">
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
                <div className="text-right">
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
                <p className="text-sm text-gray-500 mt-2">{enquiry.message}</p>
              )}
            </div>
          ))}
          {enquiries.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">No enquiries yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
