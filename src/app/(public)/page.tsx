import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Hero } from "@/components/sections/Hero";
import { StatsMarquee } from "@/components/sections/StatsMarquee";
import { CourseGrid } from "@/components/sections/CourseGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { LeadForm } from "@/components/sections/LeadForm";

export const metadata: Metadata = {
  title: "BTEC Tutor — Kerala's Best GATE & KTU Coaching Institute",
  description:
    "Join Kerala's top-rated GATE and KTU coaching institute. Expert faculty, 5,000+ successful students, 92% success rate. Comprehensive study materials, mock tests, and personalized guidance.",
  keywords: [
    "GATE coaching Kerala",
    "KTU coaching",
    "GATE preparation",
    "KTU exam preparation",
    "engineering coaching Kerala",
    "GATE ECE coaching",
    "GATE EEE coaching",
    "best coaching institute Kerala",
  ],
};

async function getHomePageData() {
  const [reviews, blogPosts] = await Promise.all([
    prisma.review
      .findMany({
        where: { approved: true },
        orderBy: { createdAt: "desc" },
        take: 10,
      })
      .catch(() => []),
    prisma.blogPost
      .findMany({
        where: { publishedAt: { not: null } },
        orderBy: { publishedAt: "desc" },
        take: 3,
        select: {
          id: true,
          title: true,
          slug: true,
          excerpt: true,
          tags: true,
          publishedAt: true,
        },
      })
      .catch(() => []),
  ]);

  return { reviews, blogPosts };
}

export default async function HomePage() {
  const { reviews, blogPosts } = await getHomePageData();

  return (
    <>
      <Hero />
      <StatsMarquee />
      <CourseGrid />
      <WhyUs />

      {reviews.length > 0 && <TestimonialCarousel reviews={reviews} />}

      {blogPosts.length > 0 && <BlogPreview posts={blogPosts} />}

      {/* CTA Section */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-fluid-3xl font-bold text-white mb-4">
                Ready to Start Your{" "}
                <span className="gradient-text">Journey?</span>
              </h2>
              <p className="text-lg text-white/40 mb-6">
                Take the first step towards cracking GATE or acing your KTU
                exams. Our expert faculty is ready to guide you every step of
                the way.
              </p>
              <ul className="space-y-3">
                {[
                  "Personalized study plans",
                  "Access to 1,200+ study materials",
                  "Regular mock tests & performance tracking",
                  "One-on-one doubt clearing sessions",
                ].map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-3 text-sm text-white/50"
                  >
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <LeadForm variant="card" theme="dark" />
          </div>
        </div>
      </section>
    </>
  );
}
