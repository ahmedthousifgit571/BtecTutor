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
import type { KtuCgpaContent } from "@/lib/content/ktu-cgpa";
import { buildWhatsAppLink } from "@/lib/utils";

interface KtuCgpaPageProps {
  content: KtuCgpaContent;
}

function gradeChipClass(grade: string): string {
  if (grade === "O") return "bg-brand-orange text-white";
  if (grade === "A+" || grade === "A") return "bg-brand-orange/15 text-brand-orange";
  if (grade === "B+" || grade === "B") return "bg-indigo-100 text-indigo-700";
  if (grade === "C" || grade === "P") return "bg-gray-100 text-gray-600";
  return "bg-red-50 text-red-500";
}

export function KtuCgpaPage({ content }: KtuCgpaPageProps) {
  const breadcrumbItems = [
    { name: "KTU", url: "/ktu" },
    { name: "CGPA Calculator", url: "/ktu/cgpa" },
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
                CGPA Calculator
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
                  title: "Grade Table",
                  subtitle: "All KTU grades with points and percentage ranges",
                  icon: <BookOpen className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Both Schemes",
                  subtitle: "Official formulas for 2019 and 2024 KTU schemes",
                  icon: <Layers className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Official Formula",
                  subtitle: "As per KTU Academic Council order, June 2023",
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

        {/* KTU Grading Scale */}
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Sparkles className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{content.gradingScaleHeading}</h2>
            </div>
            <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              10-Point Scale
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-gray-100">
            {/* Table header */}
            <div className="grid grid-cols-[3rem_1fr_5rem_8rem] gap-3 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Grade</span>
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Description</span>
              <span className="text-center text-xs font-semibold uppercase tracking-wide text-gray-400">Points</span>
              <span className="text-right text-xs font-semibold uppercase tracking-wide text-gray-400">Percentage</span>
            </div>
            {content.gradingScale.map((row, index) => (
              <div
                key={row.grade}
                className={`grid grid-cols-[3rem_1fr_5rem_8rem] items-center gap-3 px-4 py-3 ${
                  index !== content.gradingScale.length - 1 ? "border-b border-gray-100" : ""
                }`}
              >
                <span
                  className={`inline-flex h-8 w-8 items-center justify-center rounded-lg text-xs font-bold ${gradeChipClass(row.grade)}`}
                >
                  {row.grade}
                </span>
                <span className="text-sm text-gray-700">{row.label}</span>
                <span
                  className={`text-center text-sm font-semibold ${
                    row.points > 0 ? "text-brand-orange" : "text-red-400"
                  }`}
                >
                  {row.points}
                </span>
                <span className="text-right text-sm text-gray-500">{row.range}</span>
              </div>
            ))}
          </div>
        </section>

        {/* SGPA Calculation */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-6">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Step 1
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white">{content.sgpaHeading}</h2>
              <p className="mt-2 text-sm text-white/60">{content.sgpaDefinition}</p>
            </div>

            <div className="mb-5 rounded-xl border border-brand-orange/25 bg-brand-orange/10 px-5 py-3">
              <p className="font-mono text-sm font-semibold text-brand-orange">
                {content.sgpaFormula}
              </p>
            </div>

            <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/40">
              Example
            </p>
            <div className="overflow-hidden rounded-2xl border border-white/10">
              <div className="grid grid-cols-[1fr_7rem_5rem_5rem] gap-3 border-b border-white/10 bg-white/[0.04] px-4 py-2.5">
                <span className="text-xs font-semibold text-white/40">Subject</span>
                <span className="text-xs font-semibold text-white/40">Grade</span>
                <span className="text-center text-xs font-semibold text-white/40">Credits</span>
                <span className="text-right text-xs font-semibold text-white/40">Total</span>
              </div>
              {content.sgpaExampleSubjects.map((sub) => (
                <div
                  key={sub.label}
                  className="grid grid-cols-[1fr_7rem_5rem_5rem] items-center gap-3 border-b border-white/[0.06] px-4 py-3 last:border-0"
                >
                  <span className="text-sm text-white/80">{sub.label}</span>
                  <span className="text-sm text-white/60">{sub.grade}</span>
                  <span className="text-center text-sm text-white/60">{sub.credits}</span>
                  <span className="text-right text-sm font-semibold text-brand-orange">{sub.product}</span>
                </div>
              ))}
            </div>

            <p className="mt-4 rounded-xl border border-brand-orange/20 bg-white/[0.03] px-4 py-3 font-mono text-sm font-semibold text-brand-orange">
              {content.sgpaExampleSummary}
            </p>
          </div>
        </section>

        {/* CGPA Calculation */}
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6">
            <span className="mb-3 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
              Step 2
            </span>
            <h2 className="text-2xl font-bold text-gray-900">{content.cgpaHeading}</h2>
            <p className="mt-2 text-sm text-gray-500">{content.cgpaDefinition}</p>
          </div>

          <div className="mb-5 rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-5 py-3">
            <p className="font-mono text-sm font-semibold text-brand-orange">
              {content.cgpaFormula}
            </p>
          </div>

          <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
            Example
          </p>
          <div className="overflow-hidden rounded-2xl border border-gray-100">
            <div className="grid grid-cols-[1fr_6rem_6rem_6rem] gap-3 border-b border-gray-100 bg-gray-50/80 px-4 py-2.5">
              <span className="text-xs font-semibold uppercase tracking-wide text-gray-400">Semester</span>
              <span className="text-center text-xs font-semibold uppercase tracking-wide text-gray-400">SGPA</span>
              <span className="text-center text-xs font-semibold uppercase tracking-wide text-gray-400">Credits</span>
              <span className="text-right text-xs font-semibold uppercase tracking-wide text-gray-400">Total</span>
            </div>
            {content.cgpaExampleSemesters.map((sem) => (
              <div
                key={sem.label}
                className="grid grid-cols-[1fr_6rem_6rem_6rem] items-center gap-3 border-b border-gray-100 px-4 py-3 last:border-0"
              >
                <span className="text-sm font-medium text-gray-700">{sem.label}</span>
                <span className="text-center text-sm text-gray-600">{sem.sgpa}</span>
                <span className="text-center text-sm text-gray-600">{sem.credits}</span>
                <span className="text-right text-sm font-semibold text-brand-orange">{sem.product}</span>
              </div>
            ))}
          </div>

          <p className="mt-4 rounded-xl border border-brand-orange/20 bg-brand-orange/5 px-4 py-3 font-mono text-sm font-semibold text-brand-orange">
            {content.cgpaExampleSummary}
          </p>
        </section>

        {/* CGPA to Percentage */}
        <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-10 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative">
            <div className="mb-6">
              <span className="mb-3 inline-flex items-center gap-2 rounded-full border border-brand-orange/30 bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                Step 3
              </span>
              <h2 className="text-2xl font-bold leading-tight text-white">
                {content.percentageHeading}
              </h2>
            </div>

            <div className="mb-6 rounded-2xl border border-brand-orange/30 bg-brand-orange/10 px-6 py-5 text-center">
              <p className="font-mono text-2xl font-extrabold text-brand-orange">
                {content.percentageFormula}
              </p>
              <p className="mt-2 text-xs text-white/55">{content.percentageNote}</p>
            </div>

            <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
              {content.percentageExamples.map((ex) => (
                <div
                  key={ex.cgpa}
                  className="rounded-2xl border border-white/10 bg-white/[0.04] p-4 text-center"
                >
                  <p className="text-xs font-semibold uppercase tracking-wide text-white/40">
                    CGPA
                  </p>
                  <p className="mt-1 text-3xl font-extrabold text-white">{ex.cgpa}</p>
                  <p className="mt-1 text-xs text-white/40">equals</p>
                  <p className="mt-1 text-xl font-bold text-brand-orange">{ex.percentage}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Degree Classification + Important Notes */}
        <section className="mb-12 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
          <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
            <div className="flex items-center gap-3">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <Target className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{content.degreeClassHeading}</h2>
            </div>
          </div>

          <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2">
            {content.degreeClasses.map((dc, index) => (
              <div
                key={dc.classification}
                className={`rounded-2xl border p-5 ${
                  index === 0
                    ? "border-brand-orange/30 bg-brand-orange/5"
                    : "border-gray-100 bg-gray-50/60"
                }`}
              >
                <p
                  className={`text-sm font-bold ${
                    index === 0 ? "text-brand-orange" : "text-gray-900"
                  }`}
                >
                  {dc.classification}
                </p>
                <p className="mt-1 text-sm text-gray-600">{dc.range}</p>
              </div>
            ))}
          </div>

          <div className="border-t border-gray-100 pt-6">
            <h3 className="mb-4 text-base font-semibold text-gray-900">
              {content.importantNotesHeading}
            </h3>
            <ul className="space-y-3">
              {content.importantNotes.map((note) => (
                <li key={note} className="flex items-start gap-3">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-brand-orange" />
                  <p className="text-sm leading-relaxed text-gray-600">{note}</p>
                </li>
              ))}
            </ul>
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
                  Common questions about KTU CGPA, SGPA, and percentage calculation.
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
