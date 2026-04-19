import type { Metadata } from "next";
import {
  Lightbulb,
  UserCheck,
  Globe,
  ShieldCheck,
  GraduationCap,
  Clock,
  Users,
  Layers,
  BookOpen,
  Award,
  Quote,
} from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { FAQSection } from "@/components/sections/FAQ";
import { aboutPageContent } from "@/lib/content/about";

const content = aboutPageContent;

export const metadata: Metadata = generateMeta({
  title: content.meta.title,
  description: content.meta.description,
  keywords: content.meta.keywords,
  canonicalUrl: "/about",
});

const beliefIconMap: Record<string, React.ReactNode> = {
  Lightbulb: <Lightbulb className="h-6 w-6" />,
  UserCheck: <UserCheck className="h-6 w-6" />,
  Globe: <Globe className="h-6 w-6" />,
  ShieldCheck: <ShieldCheck className="h-6 w-6" />,
};

const statIconMap: Record<string, React.ReactNode> = {
  GraduationCap: <GraduationCap className="h-7 w-7" />,
  Clock: <Clock className="h-7 w-7" />,
  Users: <Users className="h-7 w-7" />,
  Layers: <Layers className="h-7 w-7" />,
  BookOpen: <BookOpen className="h-7 w-7" />,
  Award: <Award className="h-7 w-7" />,
};

export default function AboutPage() {
  return (
    <>
      {/* ─── Hero ─── */}
      <section className="bg-white pt-28 pb-16">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[{ name: "About", url: "/about" }]}
            className="mb-8"
          />
          <div className="max-w-3xl">
            <h1
              className="text-fluid-3xl font-bold text-gray-900 mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {content.hero.headlinePrefix}{" "}
              <span className="gradient-text-dark">
                {content.hero.highlightedName}
              </span>{" "}
              {content.hero.headlineSuffix}
            </h1>
          </div>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="bg-white pb-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-fluid-2xl font-bold text-gray-900 mb-8"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {content.story.sectionTitle}
          </h2>
          <div className="max-w-3xl space-y-6">
            {content.story.paragraphs.map((paragraph, i) => (
              <p
                key={i}
                className={`text-lg leading-relaxed ${
                  i === content.story.paragraphs.length - 1
                    ? "font-semibold text-gray-900"
                    : "text-gray-600"
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Our Mission ─── */}
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2
              className="text-fluid-2xl font-bold text-white mb-6"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {content.mission.sectionTitle}
            </h2>
            <div className="relative">
              <Quote className="absolute -top-4 -left-2 h-10 w-10 text-brand-orange/20 rotate-180" />
              <p className="text-xl leading-relaxed text-white/70 italic pl-8">
                {content.mission.statement}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── What We Believe ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-fluid-2xl font-bold text-gray-900 mb-12 text-center"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {content.beliefs.sectionTitle}
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {content.beliefs.beliefs.map((belief) => (
              <div
                key={belief.title}
                className="group rounded-2xl border border-gray-100 bg-white p-7 hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className="rounded-xl bg-brand-orange/5 p-3 text-brand-orange w-fit mb-4 group-hover:bg-brand-orange/10 transition-colors">
                  {beliefIconMap[belief.icon]}
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {belief.title}
                </h3>
                <p className="text-sm text-gray-500 leading-relaxed">
                  {belief.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── By the Numbers ─── */}
      <section className="relative bg-charcoal py-20 overflow-hidden">
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-brand-orange/[0.06] rounded-full blur-3xl" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-violet-500/[0.04] rounded-full blur-3xl" />
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <h2
            className="text-fluid-2xl font-bold text-white mb-12 text-center"
            style={{ fontFamily: "var(--font-poppins)" }}
          >
            {content.stats.sectionTitle}
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
            {content.stats.stats.map((stat) => (
              <div
                key={stat.label}
                className="group rounded-2xl border border-white/[0.08] bg-white/[0.04] backdrop-blur-sm p-6 text-center hover:border-brand-orange/30 transition-colors duration-300"
              >
                <div className="flex justify-center mb-4">
                  <div className="rounded-xl bg-brand-orange/10 p-3 text-brand-orange group-hover:bg-brand-orange/20 transition-colors">
                    {statIconMap[stat.icon]}
                  </div>
                </div>
                <p
                  className="text-3xl md:text-4xl font-bold text-white mb-2"
                  style={{ fontFamily: "var(--font-poppins)" }}
                >
                  {stat.value}
                </p>
                <p className="text-sm text-white/50 leading-relaxed">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Who Runs BTechTutor ─── */}
      <section className="bg-white py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto">
            <h2
              className="text-fluid-2xl font-bold text-gray-900 mb-8"
              style={{ fontFamily: "var(--font-poppins)" }}
            >
              {content.founder.sectionTitle}
            </h2>
            <div className="rounded-2xl border border-gray-100 bg-gradient-to-br from-brand-cream to-white p-8 md:p-10">
              <p className="text-brand-orange font-semibold text-lg mb-6">
                {content.founder.name}
              </p>
              <div className="space-y-5">
                {content.founder.paragraphs.map((paragraph, i) => (
                  <p
                    key={i}
                    className="text-base leading-relaxed text-gray-700"
                  >
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── FAQ ─── */}
      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <FAQSection
            faqs={content.faq.items}
            title={content.faq.sectionTitle}
            variant="dark"
          />
        </div>
      </section>
    </>
  );
}
