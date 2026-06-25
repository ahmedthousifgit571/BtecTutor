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
  XCircle,
} from "lucide-react";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import {
  buildBreadcrumbSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "@/lib/seo";
import type { KtuMathsContent } from "@/lib/content/ktu-engineering-maths";
import { buildWhatsAppLink } from "@/lib/utils";

interface KtuEngineeringMathsPageProps {
  content: KtuMathsContent;
}

const semesterAccents = [
  "from-brand-orange/80 to-amber-400/80",
  "from-indigo-500/80 to-sky-400/80",
  "from-emerald-500/80 to-teal-400/80",
  "from-rose-500/80 to-orange-400/80",
];

export function KtuEngineeringMathsPage({ content }: KtuEngineeringMathsPageProps) {
  const breadcrumbItems = [
    { name: "KTU", url: "/ktu" },
    { name: "Engineering Mathematics", url: "/ktu/engineering-mathematics" },
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
                Engineering Mathematics
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
                  title: "M1 to M4",
                  subtitle: "All 4 Engineering Maths subjects covered",
                  icon: <BookOpen className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Notes & PYQs",
                  subtitle: "Free module-wise notes and previous year papers",
                  icon: <Layers className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Supply Coaching",
                  subtitle: "Targeted backlog preparation for Maths subjects",
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
              <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              KTU Maths
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

        {/* Semester Overview */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-7">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Semester Guide
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white">
                {content.semesterOverviewHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {content.semesters.map((item, index) => {
                const accent = semesterAccents[index % semesterAccents.length];
                return (
                  <div
                    key={item.code}
                    className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:bg-white/[0.06]"
                  >
                    <div
                      className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
                    />
                    <p className="text-2xl font-extrabold text-brand-orange">{item.code}</p>
                    <p className="mt-0.5 text-xs font-semibold uppercase tracking-wide text-white/50">
                      {item.semester}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-white/65">{item.topics}</p>
                  </div>
                );
              })}
            </div>

            {content.semesterOverviewNote && (
              <p className="mt-5 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm text-white/55">
                <span className="font-semibold text-white/75">Note: </span>
                {content.semesterOverviewNote}
              </p>
            )}
          </div>
        </section>

        {/* High-Weightage Topics */}
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Target className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{content.highWeightageHeading}</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              Focus Areas
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {content.highWeightageTopics.map((topic) => {
              const [first, ...rest] = topic.split(" — ");
              const title = rest.length ? first : "";
              const detail = rest.length ? rest.join(" — ") : topic;
              return (
                <div
                  key={topic}
                  className="rounded-2xl border border-gray-100 bg-gray-50/60 p-4 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:bg-white hover:shadow-md"
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      {title && (
                        <p className="text-sm font-semibold text-gray-900">{title}</p>
                      )}
                      <p className={`text-sm leading-relaxed text-gray-600 ${title ? "mt-1" : ""}`}>
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* Why Students Fail */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-7">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Common Mistakes
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white">
                {content.whyFailHeading}
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {content.whyFailBullets.map((bullet, index) => (
                <div
                  key={bullet}
                  className={`rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:bg-white/[0.06] ${
                    index === content.whyFailBullets.length - 1 &&
                    content.whyFailBullets.length % 2 !== 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                      <XCircle className="h-4 w-4" />
                    </span>
                    <p className="text-sm leading-relaxed text-white/75">{bullet}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* What BTechTutor Offers */}
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <BookOpen className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{content.offersHeading}</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              Resources
            </span>
          </div>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {content.offers.map((item, index) => {
              const [first, ...rest] = item.split(" — ");
              const title = rest.length ? first : "";
              const detail = rest.length ? rest.join(" — ") : item;
              return (
                <div
                  key={item}
                  className={`rounded-2xl border border-gray-100 bg-gray-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:bg-white hover:shadow-md ${
                    index === content.offers.length - 1 && content.offers.length % 2 !== 0
                      ? "md:col-span-2"
                      : ""
                  }`}
                >
                  <div className="flex items-start gap-3">
                    <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
                      <CheckCircle2 className="h-4 w-4" />
                    </span>
                    <div>
                      {title && (
                        <p className="text-sm font-semibold text-gray-900">{title}</p>
                      )}
                      <p className={`text-sm leading-relaxed text-gray-600 ${title ? "mt-1" : ""}`}>
                        {detail}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
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
                One-to-one coaching is available for all Engineering Mathematics subjects — M1, M2,
                M3, and M4. Call or WhatsApp to get a personalised study plan.
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
                  Common questions about KTU Engineering Mathematics coaching and preparation.
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
