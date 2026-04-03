import { prisma } from "@/lib/prisma";
import { FileText, Users, MessageSquare, Star } from "lucide-react";

async function getStats() {
  const [
    totalSubjects,
    totalPosts,
    totalEnquiries,
    pendingReviews,
    recentEnquiries,
  ] = await Promise.all([
    prisma.subject.count(),
    prisma.blogPost.count(),
    prisma.enquiry.count(),
    prisma.review.count({ where: { approved: false } }),
    prisma.enquiry.findMany({ orderBy: { createdAt: "desc" }, take: 5 }),
  ]);

  return { totalSubjects, totalPosts, totalEnquiries, pendingReviews, recentEnquiries };
}

export default async function AdminDashboard() {
  const stats = await getStats();

  const cards = [
    { label: "Total Subjects", value: stats.totalSubjects, icon: <FileText className="h-5 w-5" />, color: "text-brand-orange" },
    { label: "Blog Posts", value: stats.totalPosts, icon: <FileText className="h-5 w-5" />, color: "text-accent-sky" },
    { label: "Enquiries", value: stats.totalEnquiries, icon: <MessageSquare className="h-5 w-5" />, color: "text-emerald-500" },
    { label: "Pending Reviews", value: stats.pendingReviews, icon: <Star className="h-5 w-5" />, color: "text-amber-500" },
  ];

  return (
    <div>
      <h1 className="text-2xl font-bold text-gray-900 mb-8">Dashboard</h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        {cards.map((card) => (
          <div key={card.label} className="rounded-xl border border-gray-100 bg-white p-5">
            <div className="flex items-center justify-between mb-3">
              <span className={card.color}>{card.icon}</span>
            </div>
            <p className="text-2xl font-bold text-gray-900">{card.value}</p>
            <p className="text-sm text-gray-500">{card.label}</p>
          </div>
        ))}
      </div>

      {/* Recent Enquiries */}
      <div className="rounded-xl border border-gray-100 bg-white">
        <div className="p-5 border-b border-gray-100">
          <h2 className="text-lg font-semibold text-gray-900 flex items-center gap-2">
            <Users className="h-5 w-5 text-gray-400" />
            Recent Enquiries
          </h2>
        </div>
        <div className="divide-y divide-gray-50">
          {stats.recentEnquiries.map((enquiry) => (
            <div key={enquiry.id} className="p-4 flex items-center justify-between">
              <div>
                <p className="text-sm font-medium text-gray-900">{enquiry.name}</p>
                <p className="text-xs text-gray-400">{enquiry.email}</p>
              </div>
              <div className="text-right">
                {enquiry.course && (
                  <p className="text-xs text-brand-orange">{enquiry.course}</p>
                )}
                <p className="text-xs text-gray-300">
                  {new Date(enquiry.createdAt).toLocaleDateString()}
                </p>
              </div>
            </div>
          ))}
          {stats.recentEnquiries.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">
              No enquiries yet
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
