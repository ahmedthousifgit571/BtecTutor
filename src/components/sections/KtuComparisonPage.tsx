import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Layers,
  Phone,
  Sparkles,
  Target,
} from "lucide-react";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "@/lib/seo";
import type { KtuComparisonContent } from "@/lib/content/ktu-comparison";
import { buildWhatsAppLink } from "@/lib/utils";

interface KtuComparisonPageProps {
  content: KtuComparisonContent;
}

export function KtuComparisonPage({ content }: KtuComparisonPageProps) {
  const breadcrumbItems = [
    { name: "KTU", url: "/ktu" },
    { name: "2019 vs 2024", url: "/ktu/2019-vs-2024" },
  ];

  const h1Parts = content.seo.h1.split(" — ");
  const hasSubTitle = h1Parts.length > 1;

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        {/* Hero */}
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -right-12 top-14 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge variant="violet" className="mb-4 !bg-brand-orange/15 !text-brand-orange">
                Scheme Comparison
              </Badge>
              <h1 className="mb-4 text-fluid-3xl font-extrabold leading-tight text-white">
                {hasSubTitle ? (
                  <>
                    <span className="text-brand-orange">{h1Parts[0]}</span>
                    <span className="text-white"> — {h1Parts.slice(1).join(" — ")}</span>
                  </>
                ) : (
                  <span className="text-brand-orange">{content.seo.h1}</span>
                )}
              </h1>
              <p className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                {content.heroSubheading}
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <Link
                  href={content.ctaHref}
                  className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark"
                >
                  {content.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href={buildWhatsAppLink(content.ctaPhone, `Hi BTechTutor! I need more information about "${content.seo.h1}". Could you please provide that?`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  <Phone className="h-4 w-4" />
                  WhatsApp
                </a>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "2019 Scheme",
                  subtitle: "160 credits across 8 semesters",
                  icon: <BookOpen className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "2024 Scheme",
                  subtitle: "170 credits with new elective options",
                  icon: <Layers className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Both Covered",
                  subtitle: "Coaching available for all subjects, both schemes",
                  icon: <Target className="h-4 w-4 text-brand-orange" />,
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="rounded-xl border border-white/10 bg-white/[0.03] p-4 backdrop-blur-sm"
                >
                  <p className="inline-flex items-center gap-2 text-sm font-semibold text-white">
                    {item.icon}
                    {item.title}
                  </p>
                  <p className="mt-1 text-xs text-white/55">{item.subtitle}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Introduction */}
        <section className="mb-10 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              2019 vs 2024
            </span>
          </div>
          <div className="space-y-5">
            {content.introduction.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-base leading-8 text-gray-600 ${
                  index === 0 ? "border-l-4 border-brand-orange/70 pl-4 text-gray-700" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>
        </section>

        {/* Quick Summary Table */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-7">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                At a Glance
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white">
                {content.summaryHeading}
              </h2>
              <p className="mt-1 text-sm text-white/55">{content.summarySubtext}</p>
            </div>

            {/* Table header */}
            <div className="mb-2 grid grid-cols-[1.6fr_1fr_1fr] gap-2 px-3">
              <span />
              <div className="rounded-lg bg-white/[0.05] px-2 py-1.5 text-center text-xs font-semibold text-white/60">
                2019 Scheme
              </div>
              <div className="rounded-lg bg-brand-orange/15 px-2 py-1.5 text-center text-xs font-semibold text-brand-orange">
                2024 Scheme
              </div>
            </div>

            {/* Rows */}
            <div className="space-y-1.5">
              {content.summary.map((row) => (
                <div
                  key={row.feature}
                  className="grid grid-cols-[1.6fr_1fr_1fr] items-center gap-2 rounded-xl border border-white/[0.06] bg-white/[0.03] px-3 py-3 transition-colors hover:bg-white/[0.05]"
                >
                  <p className="text-sm font-medium text-white/85">{row.feature}</p>
                  <p className="text-center text-sm text-white/50">{row.scheme2019}</p>
                  <div className="flex items-center justify-center gap-1.5">
                    {row.isNew && <Sparkles className="h-3 w-3 shrink-0 text-brand-orange" />}
                    <p
                      className={`text-center text-sm font-medium ${
                        row.isNew ? "text-brand-orange" : "text-white/50"
                      }`}
                    >
                      {row.scheme2024}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Detailed Sections */}
        <section className="mb-12">
          <div className="mb-6">
            <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              <BookOpen className="h-3.5 w-3.5" />
              Detailed Comparison
            </span>
            <h2 className="text-2xl font-bold text-gray-900">{content.sectionsHeading}</h2>
          </div>

          <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
            {content.sections.map((section) => (
              <article
                key={section.title}
                className="rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"
              >
                <h3 className="mb-4 text-base font-semibold text-gray-900">{section.title}</h3>
                <ul className="space-y-3">
                  {section.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-3">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                      <p className="text-sm leading-relaxed text-gray-600">{bullet}</p>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </section>

        {/* Which Scheme Am I On? */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-white to-indigo-50/50 p-7 md:p-9 shadow-sm">
          <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-orange/10 blur-3xl" />
          <h2 className="mb-1 text-xl font-semibold text-gray-900">Which Scheme Am I On?</h2>
          <p className="mb-5 text-sm text-gray-500">Check your college admission year to find out.</p>
          <div className="relative grid grid-cols-1 gap-4 sm:grid-cols-2">
            <Link
              href="/ktu/2019"
              className="group rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-md"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-gray-400">
                Admitted 2019-20 to 2023-24
              </p>
              <p className="mt-2 text-xl font-bold text-gray-900 transition-colors group-hover:text-brand-orange">
                2019 Scheme
              </p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-orange">
                Explore 2019 Scheme <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
            <Link
              href="/ktu/2024"
              className="group rounded-2xl border border-brand-orange/20 bg-brand-orange/5 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:shadow-md hover:shadow-brand-orange/10"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-brand-orange/60">
                Admitted 2024-25 or later
              </p>
              <p className="mt-2 text-xl font-bold text-gray-900">2024 Scheme</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-brand-orange">
                Explore 2024 Scheme <ArrowUpRight className="h-3.5 w-3.5" />
              </span>
            </Link>
          </div>
        </section>

        {/* Related Pages */}
        {content.internalLinks.length > 0 && (
          <section className="relative mb-12 overflow-hidden rounded-3xl border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-white to-indigo-50/50 p-7 md:p-9 shadow-sm">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
            <h2 className="mb-1 text-xl font-semibold text-gray-900">Related Pages</h2>
            <p className="mb-5 text-sm text-gray-600">
              Continue exploring KTU schemes, coaching options, and resources.
            </p>
            <div className="relative flex flex-wrap gap-3">
              {content.internalLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="group inline-flex items-center gap-1.5 rounded-xl border border-brand-orange/20 bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-800 shadow-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:bg-brand-orange hover:text-white hover:shadow-md hover:shadow-brand-orange/20"
                >
                  {item.label}
                  <ArrowUpRight className="h-3.5 w-3.5 text-gray-500 transition-colors group-hover:text-white" />
                </Link>
              ))}
            </div>
          </section>
        )}

        {/* Bottom CTA */}
        <section className="relative mb-12 overflow-hidden rounded-3xl bg-charcoal p-8 md:p-10 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-20 top-0 h-64 w-64 rounded-full bg-brand-orange/15 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-[1.3fr_1fr]">
            <div>
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Ready when you are
              </span>
              <h2 className="mb-3 text-2xl font-bold leading-tight text-white sm:text-3xl">
                Struggling with any subject?{" "}
                <span className="text-brand-orange">Get guidance early.</span>
              </h2>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                One-to-one coaching is available for all KTU subjects under both the 2019 and 2024
                schemes. Call or WhatsApp to get a personalised study plan.
              </p>
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              <Link
                href={content.ctaHref}
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
              >
                {content.ctaLabel}
                <ArrowRight className="h-4 w-4" />
              </Link>
              <a
                href={buildWhatsAppLink(content.ctaPhone, `Hi BTechTutor! I need more information about "${content.seo.h1}". Could you please provide that?`)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:text-brand-orange"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FAQ */}
        {content.faqs.length > 0 && (
          <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  FAQ
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Common questions about the difference between the two KTU schemes.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.faqs.map((faq, index) => (
                <article
                  key={faq.question}
                  className="group rounded-2xl border border-gray-100 bg-white p-6 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:shadow-md"
                >
                  <div className="mb-3 flex items-start gap-3">
                    <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-xs font-semibold text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                      Q{String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-base font-semibold text-gray-900">{faq.question}</h3>
                  </div>
                  <p className="text-sm leading-relaxed text-gray-600">{faq.answer}</p>
                </article>
              ))}
            </div>
          </section>
        )}
      </div>

      <JsonLd data={buildBreadcrumbSchema(breadcrumbItems)} />
      {content.faqs.length > 0 && <JsonLd data={buildFaqSchema(content.faqs)} />}
      <JsonLd data={buildOrganizationSchema()} />
    </div>
  );
}
