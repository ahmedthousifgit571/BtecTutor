import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, ArrowUpRight, CheckCircle2, Quote, Sparkles } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { oneToOneCoachingPageContent } from "@/lib/content/one-to-one-coaching";

const content = oneToOneCoachingPageContent;

export const metadata: Metadata = generateMeta({
  title: content.meta.title,
  description: content.meta.description,
  canonicalUrl: content.meta.canonicalUrl,
});

const benefitCardStyles = [
  "lg:col-span-4 lg:row-span-2",
  "lg:col-span-4",
  "lg:col-span-4",
  "lg:col-span-3",
  "lg:col-span-5",
  "lg:col-span-4",
];

const highlightedBenefitCards = new Set([0, 4]);

export default function OneToOneCoachingPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-charcoal pt-28 pb-20 border-b border-white/5">
        <div className="pointer-events-none absolute inset-0">
          <div className="absolute -top-20 -left-24 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
          <div className="absolute bottom-0 right-0 h-80 w-80 rounded-full bg-violet-500/10 blur-3xl" />
        </div>
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Link
            href="/"
            className="mb-5 inline-flex items-center gap-2 rounded-lg border border-white/15 bg-white/[0.03] px-4 py-2 text-sm font-medium text-white/85 transition-all duration-300 hover:border-brand-orange/40 hover:text-brand-orange"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to Home
          </Link>
          <Breadcrumb
            items={[{ name: content.breadcrumbLabel, url: content.meta.canonicalUrl }]}
            className="mb-8 [&_*]:!text-white/70"
          />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-start">
            <div className="lg:col-span-8 max-w-4xl">
              <Badge variant="violet" className="mb-5 !bg-brand-orange/10 !text-brand-orange">
                {content.hero.badgeLabel}
              </Badge>
              <h1 className="text-fluid-3xl font-bold text-white">
                <span className="text-brand-orange">One-to-One</span> BTech Tuition
              </h1>
              <div className="mt-6 space-y-5">
                {content.hero.introParagraphs.map((paragraph) => (
                  <p key={paragraph} className="text-base md:text-lg text-white/70 leading-relaxed">
                    {paragraph}
                  </p>
                ))}
              </div>
            </div>
            <aside className="lg:col-span-4 rounded-2xl border border-white/10 bg-white/[0.04] backdrop-blur-sm p-6">
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange mb-3">
                Why students pick this
              </p>
              <ul className="space-y-3">
                {content.benefits.items.slice(0, 3).map((item) => (
                  <li key={item.title} className="flex items-start gap-2.5 text-sm text-white/70 leading-relaxed">
                    <Sparkles className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                    <span>{item.title}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-6 rounded-xl border border-white/10 bg-charcoal-light/60 p-4">
                <p className="text-sm text-white/55">
                  Private coaching, flexible timing, and subject-focused support to improve confidence fast.
                </p>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="bg-[#f7f7f8] py-20 border-b border-gray-100">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-wrap items-center justify-between gap-4">
            <h2 className="text-fluid-2xl font-bold text-gray-900">
              What Makes <span className="text-brand-orange">One-to-One</span> Coaching Different
            </h2>
            <p className="max-w-xl text-sm md:text-base text-gray-500 leading-relaxed">
              Modern one-to-one support designed for faster clarity, stronger fundamentals, and better exam outcomes.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5 auto-rows-fr">
            {content.benefits.items.map((item, index) => (
              <article
                key={item.title}
                className={`group relative overflow-hidden rounded-3xl border p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-xl ${
                  highlightedBenefitCards.has(index)
                    ? "border-brand-orange/70 bg-gradient-to-br from-brand-orange to-brand-orange-dark text-white shadow-lg shadow-brand-orange/25 hover:shadow-brand-orange/35"
                    : "border-brand-orange/45 bg-white hover:shadow-brand-orange/15 hover:border-brand-orange/70"
                } ${
                  benefitCardStyles[index] ?? "lg:col-span-4"
                }`}
              >
                <div
                  className={`absolute right-4 top-4 rounded-full p-2 ${
                    highlightedBenefitCards.has(index)
                      ? "border border-white/35 bg-white/15 text-white"
                      : "border border-brand-orange/25 bg-brand-orange/10 text-brand-orange"
                  }`}
                >
                  <ArrowUpRight className="h-4 w-4" />
                </div>
                <h3
                  className={`pr-10 text-xl font-semibold mb-3 ${
                    highlightedBenefitCards.has(index) ? "text-white" : "text-gray-900"
                  }`}
                >
                  {item.title}
                </h3>
                <p
                  className={`text-sm md:text-base leading-relaxed ${
                    highlightedBenefitCards.has(index) ? "text-white/90" : "text-gray-600"
                  }`}
                >
                  {item.description}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20 border-b border-white/5">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <h2 className="text-fluid-2xl font-bold text-white mb-5">{content.audience.title}</h2>
              <ul className="space-y-3.5">
                {content.audience.points.map((point) => (
                  <li key={point} className="flex items-start gap-3 text-white/70 leading-relaxed">
                    <CheckCircle2 className="mt-1 h-5 w-5 shrink-0 text-brand-orange" />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-7 md:p-8">
              <p className="text-sm uppercase tracking-wide text-brand-orange font-semibold mb-3">
                How It Works
              </p>
              <h2 className="text-fluid-2xl font-bold text-white mb-6">{content.steps.sectionTitle}</h2>
              <div className="space-y-5">
                {content.steps.items.map((step, index) => (
                  <div key={step.title} className="rounded-2xl border border-white/10 bg-charcoal-light/70 p-5">
                    <p className="text-xs font-semibold text-brand-orange mb-1">Step {index + 1}</p>
                    <h3 className="text-base font-semibold text-white mb-1.5">{step.title}</h3>
                    <p className="text-sm text-white/60 leading-relaxed">{step.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-charcoal py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mb-8 flex items-center gap-3">
            <Quote className="h-6 w-6 text-brand-orange" />
            <h2 className="text-fluid-2xl font-bold text-white">{content.testimonials.sectionTitle}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.testimonials.items.map((testimonial) => (
              <blockquote
                key={testimonial.student}
                className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/[0.05] to-white/[0.02] p-7"
              >
                <p className="text-white/75 leading-relaxed">"{testimonial.quote}"</p>
                <footer className="mt-4 text-sm text-brand-orange font-semibold">
                  {testimonial.student}
                </footer>
              </blockquote>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
