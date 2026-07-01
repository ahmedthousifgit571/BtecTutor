import Link from "next/link";
import {
  ArrowRight,
  ArrowUpRight,
  BookOpen,
  CheckCircle2,
  Compass,
  Download,
  GraduationCap,
  Layers,
  Mail,
  Phone,
  Rocket,
  Sparkles,
  Table as TableIcon,
  Target,
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
import { type IsroPageContent } from "@/lib/content/isro-pages";
import { buildWhatsAppLink } from "@/lib/utils";

interface IsroContentPageProps {
  content: IsroPageContent;
  path: string;
}

const branchAccentRotation = [
  "from-brand-orange/80 to-amber-400/80",
  "from-indigo-500/80 to-sky-400/80",
  "from-emerald-500/80 to-teal-400/80",
  "from-rose-500/80 to-orange-400/80",
];

export function IsroContentPage({ content, path }: IsroContentPageProps) {
  const isHub = content.slug === "";
  const breadcrumbItems = [
    { name: "ISRO", url: "/isro" },
    ...(isHub ? [] : [{ name: content.seo.h1, url: path }]),
  ];

  const h1Parts = content.seo.h1.split(" — ");
  const hasMainAndSubTitle = h1Parts.length > 1;
  const phoneDigits = content.contact?.phone.replace(/[^0-9]/g, "") ?? "";

  return (
    <div className="bg-white pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={breadcrumbItems} className="mb-8" />

        <section className="relative mb-10 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-6 shadow-[0_35px_70px_-40px_rgba(0,0,0,0.8)] sm:p-8 lg:p-10">
          <div className="pointer-events-none absolute inset-0">
            <div className="absolute -left-20 top-0 h-72 w-72 rounded-full bg-brand-orange/10 blur-3xl" />
            <div className="absolute -right-12 top-14 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl" />
          </div>

          <div className="relative grid grid-cols-1 items-start gap-8 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <Badge variant="violet" className="mb-4 !bg-brand-orange/15 !text-brand-orange">
                <Rocket className="mr-1.5 h-3.5 w-3.5" />
                ISRO Scientist/Engineer
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
                  title: "Exam-focused Syllabus",
                  subtitle: "Part A technical + Part B aptitude coverage",
                  icon: <Layers className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "Free PYQs & Mocks",
                  subtitle: "10+ years of ISRO papers and pattern mocks",
                  icon: <BookOpen className="h-4 w-4 text-brand-orange" />,
                },
                {
                  title: "GATE-to-ISRO Edge",
                  subtitle: "70-85% syllabus overlap, leveraged fully",
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

        {content.introduction && (
          <section className="mb-10 rounded-3xl border border-gray-100 bg-white p-7 md:p-9 shadow-sm">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3 border-b border-gray-100 pb-4">
              <div className="flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                  <Sparkles className="h-4 w-4" />
                </span>
                <h2 className="text-xl font-semibold text-gray-900">Overview</h2>
              </div>
              <span className="inline-flex items-center rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                ISRO Preparation
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
                <h2 className="text-2xl font-bold text-gray-900">Branch-wise ISRO Coaching</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Pick your discipline and explore the ISRO syllabus, PYQs, and preparation strategy
                  for it in detail.
                </p>
              </div>
            </div>

            <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
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

                    <h3 className="mb-3 text-lg font-semibold text-gray-900 transition-colors group-hover:text-brand-orange">
                      {branch.title}
                    </h3>
                    <p className="mb-5 text-sm leading-relaxed text-gray-600">{branch.description}</p>

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

        {content.tables?.map((table) => (
          <section
            key={table.heading}
            className="mb-10 rounded-3xl border border-gray-100 bg-white p-6 shadow-sm md:p-8"
          >
            <div className="mb-5 flex items-center gap-3 border-b border-gray-100 pb-4">
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/10 text-brand-orange">
                <TableIcon className="h-4 w-4" />
              </span>
              <h2 className="text-xl font-semibold text-gray-900">{table.heading}</h2>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse text-left text-sm">
                <thead>
                  <tr>
                    {table.columns.map((col) => (
                      <th
                        key={col}
                        className="whitespace-nowrap border-b border-gray-200 bg-brand-orange/5 px-4 py-3 text-xs font-semibold uppercase tracking-wide text-brand-orange"
                      >
                        {col}
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {table.rows.map((row, rowIndex) => (
                    <tr
                      key={row.join("|")}
                      className={rowIndex % 2 === 0 ? "bg-white" : "bg-gray-50/60"}
                    >
                      {row.map((cell, cellIndex) => (
                        <td
                          key={cellIndex}
                          className={`border-b border-gray-100 px-4 py-3 align-top leading-relaxed ${
                            cellIndex === 0
                              ? "font-semibold text-gray-900"
                              : "text-gray-600"
                          }`}
                        >
                          {cell}
                        </td>
                      ))}
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>
        ))}

        {content.additionalSections && (
          <section className="mb-12 space-y-6">
            {content.additionalSections.map((section, index) => (
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
            ))}
          </section>
        )}

        {content.resources && content.resources.length > 0 && (
          <section className="relative mb-12 overflow-hidden rounded-3xl border border-white/10 bg-charcoal p-7 md:p-9 shadow-[0_30px_60px_-40px_rgba(0,0,0,0.8)]">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -right-16 top-0 h-64 w-64 rounded-full bg-brand-orange/10 blur-3xl" />
              <div className="absolute -left-10 bottom-0 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl" />
            </div>

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl bg-brand-orange/15 text-brand-orange">
                  <Download className="h-4 w-4" />
                </span>
                <div>
                  <h2 className="text-xl font-bold text-white">ISRO Resources</h2>
                  <p className="text-sm text-white/60">Notes, PYQs, mocks, and video classes.</p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
                {content.resources.map((resource) => (
                  <div
                    key={resource.resource}
                    className="flex items-center justify-between gap-3 rounded-2xl border border-white/10 bg-white/[0.04] p-4"
                  >
                    <div>
                      <p className="text-sm font-semibold text-white">{resource.resource}</p>
                      <p className="text-xs text-white/55">{resource.type}</p>
                    </div>
                    <span
                      className={`shrink-0 rounded-full px-3 py-1 text-xs font-bold ${
                        resource.access === "FREE"
                          ? "bg-emerald-500/15 text-emerald-300"
                          : "bg-brand-orange/20 text-brand-orange"
                      }`}
                    >
                      {resource.access}
                    </span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-xs text-white/45">
                Download and enrolment links are shared by the team — reach out on WhatsApp or call to
                get access.
              </p>
            </div>
          </section>
        )}

        {content.internalLinks && content.internalLinks.length > 0 && (
          <section className="relative mb-12 overflow-hidden rounded-3xl border border-brand-orange/20 bg-gradient-to-br from-brand-orange/5 via-white to-indigo-50/50 p-7 md:p-9 shadow-sm">
            <div className="pointer-events-none absolute -right-10 top-0 h-40 w-40 rounded-full bg-brand-orange/15 blur-3xl" />
            <h2 className="mb-1 text-xl font-semibold text-gray-900">Related ISRO Pages</h2>
            <p className="mb-5 text-sm text-gray-600">
              Continue exploring branch-wise coaching, syllabus, and resources.
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
                Preparing for the{" "}
                <span className="text-brand-orange">ISRO Scientist/Engineer exam?</span>
              </h2>
              <p className="text-sm leading-relaxed text-white/70 sm:text-base">
                Get expert guidance from BTechTutor. Share your branch and target, and we will map out
                a preparation plan for you.
              </p>

              {content.contact && (
                <div className="mt-5 flex flex-col gap-2 text-sm text-white/80 sm:flex-row sm:gap-6">
                  <span className="inline-flex items-center gap-2">
                    <Phone className="h-4 w-4 text-brand-orange" />
                    {content.contact.phone}
                  </span>
                  <span className="inline-flex items-center gap-2">
                    <Mail className="h-4 w-4 text-brand-orange" />
                    {content.contact.email}
                  </span>
                </div>
              )}
            </div>

            <div className="flex flex-col gap-3 sm:flex-row lg:justify-end">
              {content.ctaLabel && content.ctaHref && (
                <Link
                  href={content.ctaHref}
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-brand-orange px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:bg-brand-orange-dark hover:shadow-lg hover:shadow-brand-orange/30"
                >
                  {content.ctaLabel}
                  <ArrowRight className="h-4 w-4" />
                </Link>
              )}
              <a
                href={buildWhatsAppLink(
                  phoneDigits || "919895006772",
                  `Hi BTechTutor! I need more information about "${content.seo.h1}". Could you please provide that?`
                )}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-white/20 px-5 py-3 text-sm font-semibold text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-brand-orange/50 hover:text-brand-orange"
              >
                Chat on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {content.faqs.length > 0 && (
          <section>
            <div className="mb-6 flex flex-wrap items-end justify-between gap-3">
              <div>
                <span className="mb-2 inline-flex items-center gap-2 rounded-full bg-brand-orange/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-brand-orange">
                  FAQ
                </span>
                <h2 className="text-2xl font-bold text-gray-900">Frequently Asked Questions</h2>
                <p className="mt-1 max-w-2xl text-sm text-gray-500">
                  Quick answers to questions ISRO aspirants most often ask.
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
