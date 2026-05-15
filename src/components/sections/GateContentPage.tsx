import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  GraduationCap,
  Layers,
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
import { gatePagesContent, type GatePageContent } from "@/lib/content/gate-pages";

interface GateContentPageProps {
  content: GatePageContent;
  path: string;
}

const branchAccentRotation = [
  "from-brand-orange/80 to-amber-400/80",
  "from-indigo-500/80 to-sky-400/80",
  "from-emerald-500/80 to-teal-400/80",
  "from-rose-500/80 to-orange-400/80",
];

export function GateContentPage({ content, path }: GateContentPageProps) {
  const getSeries = (slug: string, pageNumber: number) => {
    if (slug === "ece" || slug.startsWith("ece-") || slug.startsWith("ece/")) return "ece";
    if (slug === "eee" || slug.startsWith("eee-") || slug.startsWith("eee/")) return "eee";
    if (
      slug === "instrumentation" ||
      slug.startsWith("instrumentation-") ||
      slug.startsWith("instrumentation/")
    )
      return "instrumentation";
    if (pageNumber <= 10) return "gate";
    return "other";
  };

  const currentSeries = getSeries(content.slug, content.pageNumber);
  const seriesPages = gatePagesContent.filter(
    (page) => getSeries(page.slug, page.pageNumber) === currentSeries
  );
  const pageSwitchNav = seriesPages.map((page, index) => ({
    label: `Page ${index + 1}`,
    href: page.pageNumber === 1 ? "/gate" : `/gate/${page.slug}`,
    pageNumber: page.pageNumber,
  }));
  const currentSeriesPageNumber =
    pageSwitchNav.findIndex((item) => item.pageNumber === content.pageNumber) + 1;

  const breadcrumbItems = [
    { name: "GATE", url: "/gate" },
    ...(content.pageNumber === 1
      ? []
      : [{ name: content.seo.h1, url: path }]),
  ];

  const hasMainContent =
    Boolean(content.introduction?.length) ||
    Boolean(content.branches?.length) ||
    Boolean(content.includes?.length) ||
    Boolean(content.audiences?.length) ||
    Boolean(content.additionalSections?.length);
  const h1Parts = content.seo.h1.split(" — ");
  const hasMainAndSubTitle = h1Parts.length > 1;

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        <div className="mb-8 flex flex-wrap gap-2 rounded-2xl border border-gray-100 bg-white p-3 shadow-sm">
          {pageSwitchNav.map((item) => (
            <Link
              key={item.pageNumber}
              href={item.href}
              className={`rounded-lg border px-3 py-1.5 text-sm font-medium transition-all duration-300 ${
                path === item.href
                  ? "border-brand-orange bg-brand-orange text-white shadow-lg shadow-brand-orange/25"
                  : "border-gray-200 bg-white text-gray-700 hover:-translate-y-0.5 hover:border-brand-orange/40 hover:text-brand-orange"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -right-12 top-14 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge variant="violet" className="mb-4 !bg-brand-orange/15 !text-brand-orange">
                {currentSeriesPageNumber > 0 ? `Page ${currentSeriesPageNumber}` : content.navLabel}
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
              {content.heroSubheading && (
                <p className="max-w-3xl text-base leading-relaxed text-white/70 sm:text-lg">
                  {content.heroSubheading}
                </p>
              )}

              {content.ctaLabel && content.ctaHref && (
                <div className="mt-7">
                  <Link
                    href={content.ctaHref}
                    className="inline-flex items-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark"
                  >
                    {content.ctaLabel}
                    <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              )}
            </div>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-3 lg:grid-cols-1">
              {[
                {
                  title: "Structured Plan",
                  subtitle: "Topic-first, exam-focused preparation",
                  icon: <Layers className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Smart Practice",
                  subtitle: "PYQs + mock analysis that improves scores",
                  icon: <BookOpen className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Target Outcomes",
                  subtitle: "NIT, PSU, and rank goals with guidance",
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

        {!hasMainContent && (
          <section className="rounded-2xl border border-gray-100 bg-white p-8 mb-12 shadow-sm">
            <p className="text-gray-600 leading-relaxed text-base">
              This page is reserved for upcoming GATE content. Share the copy and this page
              will be updated in the same structured format.
            </p>
          </section>
        )}

        {content.introduction && (
          <section className="mb-10 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Sparkles className="h-4 w-4" />
                </span>
                <h2 className="text-xl font-semibold text-gray-900">Introduction</h2>
              </div>
              <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                GATE Strategy
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
        )}

        {content.branches && (
          <section className="mb-12">
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  <Compass className="h-3.5 w-3.5" />
                  Branches
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Branches We Cover</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Choose your discipline and explore subject-wise GATE preparation tailored to
                  what the exam actually tests.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {content.branches.map((branch, index) => {
                const accent = branchAccentRotation[index % branchAccentRotation.length];
                return (
                  <article
                    key={branch.title}
                    className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-brand-orange/30 hover:shadow-xl hover:shadow-brand-orange/10"
                  >
                    <div className={`pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r ${accent}`} />

                    <div className="mb-5 flex items-center justify-between">
                      <span className="inline-flex h-11 w-11 items-center justify-center rounded-2xl bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                        <GraduationCap className="h-5 w-5" />
                      </span>
                      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gray-400">
                        {String(index + 1).padStart(2, "0")} / {String(content.branches!.length).padStart(2, "0")}
                      </span>
                    </div>

                    <h3 className="mb-3 text-lg font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                      {branch.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-600">
                      {branch.description}
                    </p>

                    <Link
                      href={branch.ctaHref}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange/10 px-3 py-1.5 text-sm font-medium text-brand-orange transition-all duration-300 hover:gap-2 hover:bg-brand-orange hover:text-white"
                    >
                      {branch.ctaLabel}
                      <ArrowUpRight className="h-3.5 w-3.5" />
                    </Link>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {content.inclusionHeading && content.includes && (
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
                    {content.inclusionHeading}
                  </h2>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
                {content.includes.map((item) => {
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
        )}

        {content.audienceHeading && content.audiences && (
          <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Users className="h-4 w-4" />
                </span>
                <h2 className="text-xl font-semibold text-gray-900">{content.audienceHeading}</h2>
              </div>
              <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Built For
              </span>
            </div>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
              {content.audiences.map((item, index) => {
                const [first, ...rest] = item.split(" — ");
                const title = rest.length ? first : "";
                const detail = rest.length ? rest.join(" — ") : item;
                return (
                  <article
                    key={item}
                    className="group rounded-2xl border border-gray-100 bg-gray-50/60 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/30 hover:bg-white hover:shadow-md"
                  >
                    <div className="mb-3 flex items-center gap-3">
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange transition-colors group-hover:bg-brand-orange group-hover:text-white">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                      {title && <p className="text-sm font-semibold text-gray-900">{title}</p>}
                    </div>
                    <p className="text-sm leading-relaxed text-gray-600">{detail}</p>
                  </article>
                );
              })}
            </div>
          </section>
        )}

        {content.whyHeading && content.whyParagraphs && (
          <section className="mb-12">
            <div className="grid grid-cols-1 gap-6 lg:grid-cols-[1.4fr_1fr]">
              <div className="rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
                <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  Why BTechTutor
                </span>
                <h2 className="mb-4 text-2xl font-bold text-gray-900">{content.whyHeading}</h2>
                <div className="space-y-4">
                  {content.whyParagraphs.map((paragraph) => (
                    <p key={paragraph} className="text-base leading-8 text-gray-600">
                      {paragraph}
                    </p>
                  ))}
                </div>
              </div>

              <aside className="relative overflow-hidden rounded-3xl bg-charcoal p-7 md:p-9 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
                <div className="pointer-events-none absolute -right-10 -top-10 h-48 w-48 rounded-full bg-brand-orange/15 blur-3xl" />
                <div className="relative">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-white/50">
                    Track record
                  </p>
                  <p className="mt-2 text-5xl font-extrabold text-brand-orange">800+</p>
                  <p className="mt-2 text-sm text-white/70">
                    GATE selections from BTechTutor students across ECE, EEE, and Instrumentation.
                  </p>

                  <div className="mt-6 space-y-3">
                    {[
                      "Faculty are GATE specialists, not generalists.",
                      "Coaching adapts to each student's level and target.",
                      "One-to-one sessions for focused subjects.",
                    ].map((line) => (
                      <div key={line} className="flex items-start gap-2.5">
                        <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                        <p className="text-sm leading-relaxed text-white/75">{line}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </aside>
            </div>
          </section>
        )}

        {content.additionalSections && (
          <section className="mb-12 space-y-6">
            {content.additionalSections.map((section, index) => {
              const isReadyToStart = section.heading.trim().toLowerCase() === "ready to start?";

              if (isReadyToStart) {
                return (
                  <article
                    key={section.heading}
                    className="relative overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-9 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]"
                  >
                    <div className="pointer-events-none absolute inset-0">
                      <div className="absolute -right-12 top-0 h-56 w-56 rounded-full bg-brand-orange/20 blur-3xl" />
                      <div className="absolute -left-8 bottom-0 h-48 w-48 rounded-full bg-indigo-500/15 blur-3xl" />
                    </div>

                    <div className="relative">
                      <div className="mb-5 flex items-center gap-3 border-b border-white/15 pb-4">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange text-sm font-semibold text-white">
                          {String(index + 1).padStart(2, "0")}
                        </span>
                        <h2 className="text-xl font-semibold text-white">{section.heading}</h2>
                      </div>

                      {section.paragraphs && (
                        <div className="mb-4 space-y-4">
                          {section.paragraphs.map((paragraph) => (
                            <p key={paragraph} className="text-base leading-8 text-white/80">
                              {paragraph}
                            </p>
                          ))}
                        </div>
                      )}

                      {section.bullets && (
                        <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                          {section.bullets.map((bullet) => (
                            <li
                              key={bullet}
                              className="flex items-start gap-3 rounded-xl border border-white/15 bg-white/[0.05] p-3.5 text-sm leading-relaxed text-white/85"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                    </div>
                  </article>
                );
              }

              return (
                <article
                  key={section.heading}
                  className="rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm"
                >
                  <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
                    <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-sm font-semibold text-brand-orange">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h2 className="text-xl font-semibold text-gray-900">{section.heading}</h2>
                  </div>

                  {section.paragraphs && (
                    <div className="mb-4 space-y-4">
                      {section.paragraphs.map((paragraph) => (
                        <p key={paragraph} className="text-base leading-8 text-gray-600">
                          {paragraph}
                        </p>
                      ))}
                    </div>
                  )}

                  {section.bullets && (
                    <ul className="grid grid-cols-1 gap-3 md:grid-cols-2">
                      {section.bullets.map((bullet) => (
                        <li
                          key={bullet}
                          className="flex items-start gap-3 rounded-xl border border-gray-100 bg-gray-50/60 p-3.5 text-sm leading-relaxed text-gray-700"
                        >
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </article>
              );
            })}
          </section>
        )}

        {content.internalLinks && content.internalLinks.length > 0 && (
          <section className="relative mb-12 overflow-hidden rounded-3xl border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-white to-indigo-50/50 p-7 md:p-9 shadow-sm">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
            <h2 className="mb-1 text-xl font-semibold text-gray-900">Related Pages</h2>
            <p className="mb-5 text-sm text-gray-600">
              Continue exploring branch-specific GATE coaching and resources.
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

        {content.ctaLabel && content.ctaHref && (
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
                  Get Started with{" "}
                  <span className="text-brand-orange">a Plan That Fits You</span>
                </h2>
                <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                  Speak to the team, share your branch and target year, and we will match
                  you with the right GATE coaching plan.
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
                  href="https://wa.me/919895006772"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:text-brand-orange"
                >
                  Chat on WhatsApp
                </a>
              </div>
            </div>
          </section>
        )}

        {content.faqs.length > 0 && (
          <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  FAQ
                </span>
                <h2 className="text-2xl font-bold text-gray-900">
                  Frequently Asked Questions
                </h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Quick answers to questions students most often ask before enrolling.
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
      <JsonLd
        data={buildCourseSchema({
          name: content.seo.h1,
          description: content.seo.description,
          url: path,
        })}
      />
    </div>
  );
}
