import type { Metadata } from "next";
import { Star, Quote } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";

export const metadata: Metadata = generateMeta({
  title: "Student Reviews — What Our Students Say",
  description:
    "Read genuine reviews from our students. See why 5,000+ engineering students trust BTEC Tutor for GATE and KTU coaching.",
  canonicalUrl: "/reviews",
});

export const revalidate = 3600;

export default async function ReviewsPage() {
  const reviews = await prisma.review
    .findMany({
      where: { approved: true },
      orderBy: { createdAt: "desc" },
    })
    .catch(() => []);

  const avgRating = reviews.length
    ? (reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length).toFixed(1)
    : "0";

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Reviews", url: "/reviews" }]} className="mb-8" />

        <div className="text-center max-w-2xl mx-auto mb-16">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            Student <span className="gradient-text-dark">Reviews</span>
          </h1>
          <div className="flex items-center justify-center gap-2 mb-4">
            <span className="text-4xl font-bold text-gray-900">{avgRating}</span>
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.round(Number(avgRating))
                      ? "text-amber-400 fill-amber-400"
                      : "text-gray-200"
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-400">({reviews.length} reviews)</span>
          </div>
          <p className="text-lg text-gray-500">
            Hear from our students about their experience at BTEC Tutor
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <div
              key={review.id}
              className="rounded-2xl border border-gray-100 bg-white p-6"
            >
              <Quote className="h-6 w-6 text-brand-orange/20 mb-3" />
              <p className="text-sm text-gray-600 leading-relaxed mb-6">
                &ldquo;{review.content}&rdquo;
              </p>
              <div className="flex items-center justify-between pt-4 border-t border-gray-50">
                <div>
                  <p className="text-sm font-semibold text-gray-900">{review.studentName}</p>
                  {review.course && (
                    <p className="text-xs text-gray-400">{review.course}</p>
                  )}
                </div>
                <div className="flex gap-0.5">
                  {Array.from({ length: 5 }).map((_, j) => (
                    <Star
                      key={j}
                      className={`h-3.5 w-3.5 ${
                        j < review.rating
                          ? "text-amber-400 fill-amber-400"
                          : "text-gray-200"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
