import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
  Phone,
  Sparkles,
  Target,
  Users,
} from "lucide-react";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import {
  buildBreadcrumbSchema,
  buildCourseSchema,
  buildFaqSchema,
  buildOrganizationSchema,
} from "@/lib/seo";
import type { KtuHubContent } from "@/lib/content/ktu-hub";

interface KtuHubPageProps {
  content: KtuHubContent;
  breadcrumbItems?: Array<{ name: string; url: string }>;
  pageUrl?: string;
}

const schemeAccents = [
  "from-brand-orange/80 to-amber-400/80",
  "from-indigo-500/80 to-sky-400/80",
];

const branchAccents = [
  "from-brand-orange/80 to-amber-400/80",
  "from-indigo-500/80 to-sky-400/80",
  "from-emerald-500/80 to-teal-400/80",
  "from-rose-500/80 to-orange-400/80",
  "from-violet-500/80 to-purple-400/80",
  "from-cyan-500/80 to-sky-400/80",
];

export function KtuHubPage({ content, breadcrumbItems, pageUrl }: KtuHubPageProps) {
  const resolvedBreadcrumbs = breadcrumbItems ?? [{ name: "KTU", url: "/ktu" }];
  const resolvedPageUrl = pageUrl ?? "/ktu";

  const h1Parts = content.seo.h1.split(" — ");
  const hasMainAndSubTitle = h1Parts.length > 1;

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={resolvedBreadcrumbs} className="mb-8" />

        {/* Hero */}
        <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -right-12 top-14 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge variant="violet" className="mb-4 !bg-brand-orange/15 !text-brand-orange">
                {content.heroBadge ?? "KTU Study Hub"}
              </Badge>
              <h1 className="mb-4 text-fluid-3xl font-extrabold leading-tight text-white">
                {hasMainAndSubTitle ? (
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
                  href={`https://wa.me/${content.ctaPhone.replace(/\s/g, "").replace("+", "")}`}
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
                  title: "Free Study Material",
                  subtitle: "Notes and PYQs at no cost, every subject",
                  icon: <BookOpen className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Both Schemes",
                  subtitle: "Full coverage of 2019 and 2024 KTU scheme",
                  icon: <Layers className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Personal Coaching",
                  subtitle: "One-to-one sessions at your own pace",
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
              KTU Strategy
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

        {/* What We Offer */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-7 flex items-start justify-between gap-4">
              <div>
                <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  Programme
                </span>
                <h2 className="text-2xl font-bold leading-tight text-white">
                  {content.offersHeading}
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
              {content.offers.map((item) => {
                const [first, ...rest] = item.split(" — ");
                const title = rest.length ? first : "";
                const detail = rest.length ? rest.join(" — ") : item;
                return (
                  <div
                    key={item}
                    className="rounded-2xl border border-white/10 bg-white/[0.04] p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:bg-white/[0.06]"
                  >
                    <div className="flex items-start gap-3">
                      <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                        <CheckCircle2 className="h-4 w-4" />
                      </span>
                      <div>
                        {title && (
                          <p className="text-sm font-semibold text-white">{title}</p>
                        )}
                        <p className={`text-sm leading-relaxed text-white/70 ${title ? "mt-1" : ""}`}>
                          {detail}
                        </p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Choose Your Scheme */}
        <section className="mb-12">
          <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
            <div>
              <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                <Compass className="h-3.5 w-3.5" />
                Schemes
              </span>
              <h2 className="text-2xl font-bold text-gray-900">{content.schemesHeading}</h2>
              <p className="mt-1 max-w-2xl text-sm text-gray-500">{content.schemesSubtext}</p>
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            {content.schemes.map((scheme, index) => {
              const accent = schemeAccents[index % schemeAccents.length];
              return (
                <article
                  key={scheme.title}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/10"
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`}
                  />

                  <div className="mb-5 flex items-center justify-between">
                    <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                      <GraduationCap className="h-5 w-5" />
                    </span>
                    <span className="rounded-full bg-gray-100 px-2.5 py-1 text-xs font-semibold text-gray-500">
                      {scheme.note}
                    </span>
                  </div>

                  <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand-orange">
                    {scheme.title}
                  </h3>
                  <p className="mb-5 text-sm leading-relaxed text-gray-600">{scheme.description}</p>

                  <Link
                    href={scheme.href}
                    className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange/10 px-3 py-1.5 text-sm font-medium text-brand-orange transition-all duration-300 hover:gap-2 hover:bg-brand-orange hover:text-white"
                  >
                    {scheme.ctaLabel}
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </Link>
                </article>
              );
            })}
          </div>

          {content.schemeHelperText && (
            <p className="mt-4 rounded-xl border border-gray-100 bg-gray-50/70 px-4 py-3 text-sm text-gray-600">
              <span className="font-semibold text-gray-800">Not sure? </span>
              {content.schemeHelperText}
            </p>
          )}
        </section>

        {/* Branches / Departments */}
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Users className="h-4 w-4" />
              </span>
              <div>
                <h2 className="text-xl font-semibold text-gray-900">{content.branchesHeading}</h2>
                <p className="mt-0.5 text-sm text-gray-500">{content.branchesSubtext}</p>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-3 lg:grid-cols-6">
            {content.branches.map((branch, index) => {
              const accent = branchAccents[index % branchAccents.length];
              return (
                <Link
                  key={branch.shortTitle}
                  href={branch.href}
                  className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gray-50/60 p-4 text-center transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:bg-white hover:shadow-lg hover:shadow-brand-orange/10"
                >
                  <div
                    className={`pointer-events-none absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${accent}`}
                  />
                  <p className="text-lg font-bold text-brand-orange">{branch.shortTitle}</p>
                  <p className="mt-1 text-xs leading-tight text-gray-600">{branch.title}</p>
                  <ArrowUpRight className="mx-auto mt-3 h-4 w-4 text-gray-300 transition-colors group-hover:text-brand-orange" />
                </Link>
              );
            })}
          </div>
        </section>

        {/* Why BTechTutor */}
        <section className="mb-12">
          <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
            <div className="rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Why BTechTutor
              </span>
              <h2 className="mb-4 text-2xl font-bold text-gray-900">{content.whyHeading}</h2>
              <ul className="space-y-3">
                {content.whyBullets.map((bullet) => (
                  <li key={bullet} className="flex items-start gap-3">
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-brand-orange" />
                    <p className="text-base leading-relaxed text-gray-600">{bullet}</p>
                  </li>
                ))}
              </ul>
            </div>

            <aside className="relative overflow-hidden rounded-3xl bg-charcoal p-7 md:p-9 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
              <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-orange/15 blur-3xl" />
              <div className="relative">
                <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                  Track record
                </p>
                <p className="mt-2 text-5xl font-extrabold text-brand-orange">5,000+</p>
                <p className="mt-2 text-sm text-white/70">
                  KTU students coached at BTechTutor across all branches and schemes.
                </p>

                <div className="mt-6 space-y-3">
                  {[
                    "Struggling with a subject? Get guidance early.",
                    "One call is enough to get a clear study plan.",
                    "Supply and series exam coaching available.",
                  ].map((line) => (
                    <div key={line} className="flex items-start gap-2.5">
                      <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                      <p className="text-sm leading-relaxed text-white/75">{line}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-6 space-y-2">
                  <a
                    href={`tel:${content.ctaPhone}`}
                    className="flex items-center gap-2 text-sm font-semibold text-brand-orange hover:underline"
                  >
                    <Phone className="h-4 w-4" />
                    {content.ctaPhone}
                  </a>
                  <p className="text-xs text-white/50">Call or WhatsApp — Mon to Sat, 9am–7pm</p>
                </div>
              </div>
            </aside>
          </div>
        </section>

        {/* Internal Links */}
        {content.internalLinks.length > 0 && (
          <section className="relative mb-12 overflow-hidden rounded-3xl border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-white to-indigo-50/50 p-7 md:p-9 shadow-sm">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
            <h2 className="mb-1 text-xl font-semibold text-gray-900">Related Pages</h2>
            <p className="mb-5 text-sm text-gray-600">
              Continue exploring KTU schemes, coaching options, and resources.
            </p>
            <div className="flex flex-wrap gap-3">
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
                One-to-one coaching is available for all KTU subjects. Call or WhatsApp to get a
                personalised study plan and direct doubt solving.
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
                href={`https://wa.me/${content.ctaPhone.replace(/\s/g, "").replace("+", "")}`}
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
                  Quick answers to questions KTU students most often ask before enrolling.
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

      <JsonLd data={buildBreadcrumbSchema(resolvedBreadcrumbs)} />
      {content.faqs.length > 0 && <JsonLd data={buildFaqSchema(content.faqs)} />}
      <JsonLd data={buildOrganizationSchema()} />
      <JsonLd
        data={buildCourseSchema({
          name: content.seo.h1,
          description: content.seo.description,
          url: resolvedPageUrl,
        })}
      />
    </div>
  );
}
