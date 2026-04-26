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
import { WhereWeServe } from "@/components/sections/WhereWeServe";
import { FAQHome } from "@/components/sections/FAQHome";
import { SubjectPageExplainer } from "@/components/sections/SubjectPageExplainer";
import { StudentResults } from "@/components/sections/StudentResults";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";
import { ctaSectionContent } from "@/lib/content/cta-section";

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

      <GetInTouchSection
        theme="dark"
        heading={
          <>
            <span className="text-brand-orange">{ctaOrangeLine}</span>{" "}
            {ctaRemainingHeadline}
          </>
        }
        description={ctaSectionContent.subtitle}
        features={ctaSectionContent.features.length > 0 ? ctaSectionContent.features : undefined}
        submitLabel="Book My Session — Talk to Our Team"
      />
    </>
  );
}
