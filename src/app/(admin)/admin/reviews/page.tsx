import { prisma } from "@/lib/prisma";
import { Star } from "lucide-react";

export default async function AdminReviewsPage() {
  const reviews = await prisma.review.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Reviews</h1>
      </div>

      <div className="rounded-xl border border-gray-100 bg-white">
        <div className="divide-y divide-gray-50">
          {reviews.map((review) => (
            <div key={review.id} className="p-4">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <p className="text-sm font-medium text-gray-900">{review.studentName}</p>
                  {review.course && (
                    <p className="text-xs text-gray-400">{review.course}</p>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <div className="flex gap-0.5">
                    {Array.from({ length: 5 }).map((_, i) => (
                      <Star
                        key={i}
                        className={`h-3 w-3 ${
                          i < review.rating
                            ? "text-amber-400 fill-amber-400"
                            : "text-gray-200"
                        }`}
                      />
                    ))}
                  </div>
                  <span
                    className={`text-xs rounded-full px-2 py-0.5 ${
                      review.approved
                        ? "bg-green-50 text-green-600"
                        : "bg-amber-50 text-amber-600"
                    }`}
                  >
                    {review.approved ? "Approved" : "Pending"}
                  </span>
                </div>
              </div>
              <p className="text-sm text-gray-600 line-clamp-2">{review.content}</p>
            </div>
          ))}
          {reviews.length === 0 && (
            <div className="p-8 text-center text-sm text-gray-400">No reviews yet</div>
          )}
        </div>
      </div>
    </div>
  );
}
