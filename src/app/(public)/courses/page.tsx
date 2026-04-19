import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowRight,
  ArrowLeft,
  UserCheck,
  GraduationCap,
  Target,
  RefreshCw,
  Rocket,
} from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { courseGridContent } from "@/lib/content/courses";

export const metadata: Metadata = generateMeta({
  title: "Our Courses — BTEC Tutor",
  description:
    "Explore all courses offered by BTEC Tutor — One-to-One BTech Tuition, KTU Coaching, GATE Preparation, Supply Exam Coaching, and ISRO Coaching.",
  canonicalUrl: "/courses",
});

const iconMap: Record<string, React.ReactNode> = {
  UserCheck: <UserCheck className="h-6 w-6" />,
  GraduationCap: <GraduationCap className="h-6 w-6" />,
  Target: <Target className="h-6 w-6" />,
  RefreshCw: <RefreshCw className="h-6 w-6" />,
  Rocket: <Rocket className="h-6 w-6" />,
};

export default function CoursesPage() {
  const { courses } = courseGridContent;

  return (
    <div className="bg-charcoal min-h-screen pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-sm text-white/50 hover:text-white transition-colors mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Home
        </Link>

        {/* Hero */}
        <div className="max-w-3xl mb-16">
          <h1 className="text-fluid-3xl font-bold text-white mb-6">
            Explore Our{" "}
            <span className="gradient-text">Courses</span>
          </h1>
          <p className="text-lg text-white/40 leading-relaxed">
            {courseGridContent.subtitle}
          </p>
        </div>

        {/* Course Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course) => (
            <Link
              key={course.title}
              href={course.slug}
              className="group relative rounded-2xl border border-white/10 bg-white/5 p-6 transition-all duration-300 hover:bg-white/10 hover:border-brand-orange/30 hover:-translate-y-1"
            >
              {/* Badge */}
              {course.badge && (
                <span className="absolute top-4 right-4 rounded-full bg-brand-orange/20 px-3 py-1 text-xs font-semibold text-brand-orange">
                  {course.badge}
                </span>
              )}

              {/* Icon */}
              <div className="rounded-xl bg-brand-orange/10 p-3 w-fit text-brand-orange mb-5">
                {iconMap[course.icon]}
              </div>

              {/* Title */}
              <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors">
                {course.title}
              </h2>

              {/* Tagline */}
              <p className="text-sm text-white/60 mb-3">{course.tagline}</p>

              {/* Audience */}
              <p className="text-xs text-white/30 mb-4">
                <span className="font-medium text-white/50">
                  Who it&apos;s for:
                </span>{" "}
                {course.audience}
              </p>

              {/* Features */}
              <div className="flex flex-wrap gap-2 mb-6">
                {course.features.map((feature) => (
                  <span
                    key={feature}
                    className="text-xs text-white/40 bg-white/5 border border-white/10 rounded-full px-2.5 py-1"
                  >
                    {feature}
                  </span>
                ))}
              </div>

              {/* CTA */}
              <div className="flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all">
                {course.ctaText}
                <ArrowRight className="h-3.5 w-3.5" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
