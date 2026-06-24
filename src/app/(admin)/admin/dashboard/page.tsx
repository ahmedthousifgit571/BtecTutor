import Link from "next/link";
import { prisma } from "@/lib/prisma";
import {
  GraduationCap,
  MessageSquare,
  Users,
  ArrowUpRight,
} from "lucide-react";

async function getStats() {
  const [totalSubjects, newEnquiries, recentEnquiries] = await Promise.all([
    prisma.subject.count(),
    prisma.enquiry.count({ where: { status: "NEW" } }),
    prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 6 }),
  ]);

  return { totalSubjects, newEnquiries, recentEnquiries };
}

const STATUS_STYLES: Record<string, string> = {
  NEW: "bg-emerald-50 text-emerald-600 ring-emerald-200",
  CONTACTED: "bg-amber-50 text-amber-600 ring-amber-200",
  CLOSED: "bg-gray-100 text-gray-500 ring-gray-200",
};

function initials(name: string) {
  return name
    .trim()
    .split(/\s+/)
    .slice(0, 2)
    .map((p) => p[0]?.toUpperCase())
    .join("");
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    {
      label: "Total Subjects",
      value: stats.totalSubjects,
      Icon: GraduationCap,
      chip: "bg-brand-orange/10 text-brand-orange",
      href: "/admin/ktu-notes",
    },
    {
      label: "New Enquiries",
      value: stats.newEnquiries,
      Icon: MessageSquare,
      chip: "bg-emerald-100 text-emerald-600",
      href: "/admin/enquiries",
    },
  ];

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">Dashboard</h1>
        <p className="mt-1 text-sm text-gray-500">
          Overview of your content and student activity.
        </p>
      </div>

      <div className="mb-8 grid gap-4 sm:grid-cols-2">
        {cards.map((card) => (
          <Link
            key={card.label}
            href={card.href}
            className="group rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:-translate-y-0.5 hover:shadow-md"
          >
            <div className="flex items-start justify-between">
              <span
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${card.chip}`}
              >
                <card.Icon className="h-5 w-5" />
              </span>
              <ArrowUpRight className="h-4 w-4 text-gray-300 transition-colors group-hover:text-brand-orange" />
            </div>
            <p className="mt-4 text-3xl font-bold tracking-tight text-gray-900">
              {card.value}
            </p>
            <p className="text-sm text-gray-500">{card.label}</p>
          </Link>
        ))}
      </div>

      {/* Recent Enquiries */}
      <div className="rounded-2xl border border-gray-100 bg-white shadow-sm">
        <div className="flex items-center justify-between border-b border-gray-100 px-5 py-4">
          <h2 className="flex items-center gap-2 text-base font-semibold text-gray-900">
            <Users className="h-5 w-5 text-gray-400" />
            Recent Enquiries
          </h2>
          <Link
            href="/admin/enquiries"
            className="text-xs font-medium text-brand-orange hover:underline"
          >
            View all
          </Link>
        </div>
        <div className="divide-y divide-gray-50">
          {stats.recentEnquiries.map((enquiry) => (
            <div
              key={enquiry.id}
              className="flex items-center gap-4 px-5 py-3.5 transition-colors hover:bg-gray-50/60"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-brand-orange/15 to-amber-100 text-xs font-bold text-brand-orange">
                {initials(enquiry.name) || "?"}
              </span>
              <div className="min-w-0 flex-1">
                <p className="truncate text-sm font-medium text-gray-900">
                  {enquiry.name}
                </p>
                <p className="truncate text-xs text-gray-400">{enquiry.email}</p>
              </div>
              {enquiry.course && (
                <span className="hidden rounded-md bg-gray-100 px-2 py-1 text-xs font-medium text-gray-500 sm:block">
                  {enquiry.course}
                </span>
              )}
              <span
                className={`rounded-full px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wide ring-1 ${
                  STATUS_STYLES[enquiry.status] ?? STATUS_STYLES.CLOSED
                }`}
              >
                {enquiry.status}
              </span>
              <span className="hidden w-20 text-right text-xs text-gray-300 md:block">
                {new Date(enquiry.createdAt).toLocaleDateString()}
              </span>
            </div>
          ))}
          {stats.recentEnquiries.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">No enquiries yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
