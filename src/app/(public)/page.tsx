import type { Metadata } from "next";
import { prisma } from "@/lib/prisma";
import { Hero } from "@/components/sections/Hero";
import { StatsMarquee } from "@/components/sections/StatsMarquee";
import { OneToOneTuition } from "@/components/sections/OneToOneTuition";
import { CourseGrid } from "@/components/sections/CourseGrid";
import { WhyUs } from "@/components/sections/WhyUs";
import { TestimonialCarousel } from "@/components/sections/TestimonialCarousel";
import { BlogPreview } from "@/components/sections/BlogPreview";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { WhyStudentsTrust } from "@/components/sections/WhyStudentsTrust";
import { LeadForm } from "@/components/sections/LeadForm";
import { WhereWeServe } from "@/components/sections/WhereWeServe";
import { FAQHome } from "@/components/sections/FAQHome";
import { SubjectPageExplainer } from "@/components/sections/SubjectPageExplainer";
import { StudentResults } from "@/components/sections/StudentResults";
import { ctaSectionContent } from "@/lib/content/cta-section";
import { leadFormContent } from "@/lib/content/lead-form";

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
  const ctaOrangeLine = "Ready to Clear Your Exams?";
  const ctaRemainingHeadline = ctaSectionContent.headline.startsWith(ctaOrangeLine)
    ? ctaSectionContent.headline.slice(ctaOrangeLine.length).trimStart()
    : ctaSectionContent.headline;

  return (
    <>
      <Hero />
      <StatsMarquee />
      <OneToOneTuition />
      <WhyUs />
      <CourseGrid />
      <HowItWorks />
      <WhyStudentsTrust />
      <SubjectPageExplainer />
      <StudentResults />

      <TestimonialCarousel reviews={reviews} />

      <WhereWeServe />

      <FAQHome />

      <BlogPreview posts={blogPosts} />

      {/* CTA Section */}
      <section className="bg-charcoal py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-fluid-3xl font-bold text-white mb-4">
                {ctaSectionContent.headline.startsWith(ctaOrangeLine) ? (
                  <>
                    <span className="text-brand-orange">{ctaOrangeLine}</span>{" "}
                    {ctaRemainingHeadline}
                  </>
                ) : (
                  ctaSectionContent.headline
                )}
                {ctaSectionContent.highlightedWord ? (
                  <>
                    {" "}
                    <span className="gradient-text">{ctaSectionContent.highlightedWord}</span>
                  </>
                ) : null}
              </h2>
              <p className="text-lg text-white/40 mb-6">
                {ctaSectionContent.subtitle}
              </p>
              {ctaSectionContent.features.length > 0 ? (
                <ul className="space-y-3">
                  {ctaSectionContent.features.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-3 text-sm text-white/50"
                    >
                      <span className="h-1.5 w-1.5 rounded-full bg-brand-orange shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
            <LeadForm
              variant="card"
              theme="dark"
              content={{
                ...leadFormContent,
                submitLabel: "Book My Session — Talk to Our Team",
              }}
            />
          </div>
        </div>
      </section>
    </>
  );
}
