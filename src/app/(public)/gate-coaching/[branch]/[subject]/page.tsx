import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import {
  BookOpen,
  FileText,
  ClipboardCheck,
  PlayCircle,
  Download,
  ExternalLink,
} from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta, buildCourseSchema } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { JsonLd } from "@/components/seo/JsonLd";
import { Badge } from "@/components/ui/Badge";
import { Tabs } from "@/components/ui/Tabs";
import { Accordion } from "@/components/ui/Accordion";
import { FAQSection } from "@/components/sections/FAQ";
import { LeadForm } from "@/components/sections/LeadForm";
import { GATE_BRANCHES } from "@/lib/constants";

export const revalidate = 86400;

interface Props {
  params: { branch: string; subject: string };
}

async function getSubject(branch: string, subjectSlug: string) {
  const course = await prisma.course.findFirst({
    where: { branch, scheme: null },
  });
  if (!course) return null;

  return prisma.subject.findUnique({
    where: { courseId_slug: { courseId: course.id, slug: subjectSlug } },
    include: { course: true },
  });
}

export async function generateStaticParams() {
  const subjects = await prisma.subject.findMany({
    include: { course: true },
    where: { course: { scheme: null } },
  });

  return subjects.map((s) => ({
    branch: s.course.branch!,
    subject: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subject = await getSubject(params.branch, params.subject);
  if (!subject) return {};

  return generateMeta({
    title: subject.seoTitle || `${subject.title} — GATE ${params.branch.toUpperCase()}`,
    description:
      subject.seoDesc ||
      `Complete ${subject.title} study material for GATE ${params.branch.toUpperCase()}. Syllabus, notes, PYQs, mock tests, and video lectures.`,
    keywords: subject.seoKeywords,
    canonicalUrl: subject.canonicalUrl || `/gate-coaching/${params.branch}/${params.subject}`,
  });
}

interface SyllabusUnit {
  title: string;
  topics: string[];
}

interface PyqYear {
  year: number;
  pdfUrl: string;
  questionCount: number;
}

interface VideoLecture {
  title: string;
  url: string;
  duration: string;
}

export default async function SubjectPage({ params }: Props) {
  const subject = await getSubject(params.branch, params.subject);
  if (!subject) notFound();

  const branchInfo = GATE_BRANCHES.find((b) => b.slug === params.branch);
  const syllabus = subject.syllabus as { units: SyllabusUnit[] } | null;
  const pyqs = subject.pyqs as { years: PyqYear[] } | null;
  const videoLinks = subject.videoLinks as { lectures: VideoLecture[] } | null;
  const faqs = (subject.faqs as { question: string; answer: string }[] | null) || [];

  // Fetch related subjects from same course
  const relatedSubjects = await prisma.subject.findMany({
    where: { courseId: subject.courseId, id: { not: subject.id } },
    take: 6,
    orderBy: { semester: "asc" },
  });

  const tabs = [
    {
      id: "syllabus",
      label: "Syllabus",
      icon: <BookOpen className="h-4 w-4" />,
      content: syllabus ? (
        <div className="space-y-4">
          {syllabus.units.map((unit, i) => (
            <div key={i} className="rounded-xl border border-gray-100 bg-white p-5">
              <h3 className="font-semibold text-gray-900 mb-3">{unit.title}</h3>
              <ul className="space-y-2">
                {unit.topics.map((topic, j) => (
                  <li key={j} className="flex items-start gap-2 text-sm text-gray-600">
                    <span className="h-1.5 w-1.5 rounded-full bg-brand-orange mt-1.5 shrink-0" />
                    {topic}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Syllabus will be available soon.</p>
      ),
    },
    {
      id: "notes",
      label: "Notes",
      icon: <FileText className="h-4 w-4" />,
      content: (
        <div className="rounded-xl border border-gray-100 bg-white p-8 text-center">
          <FileText className="h-12 w-12 text-brand-orange/30 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Study Notes</h3>
          <p className="text-sm text-gray-500 mb-6">
            Comprehensive notes for {subject.title} will be available for download.
          </p>
          <button
            disabled
            className="inline-flex items-center gap-2 rounded-lg bg-brand-orange/10 px-4 py-2.5 text-sm font-medium text-brand-orange"
          >
            <Download className="h-4 w-4" />
            Download Notes (Coming Soon)
          </button>
        </div>
      ),
    },
    {
      id: "pyqs",
      label: "PYQs",
      icon: <ClipboardCheck className="h-4 w-4" />,
      content: pyqs ? (
        <Accordion
          items={pyqs.years.map((year) => ({
            id: `pyq-${year.year}`,
            title: `GATE ${year.year} — ${year.questionCount} questions`,
            content: (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {year.questionCount} questions from GATE {year.year}
                </span>
                <a
                  href={year.pdfUrl}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-brand-orange hover:underline"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download PDF
                </a>
              </div>
            ),
          }))}
        />
      ) : (
        <p className="text-gray-500">Previous year questions coming soon.</p>
      ),
    },
    {
      id: "mock-test",
      label: "Mock Test",
      icon: <ClipboardCheck className="h-4 w-4" />,
      content: (
        <div className="rounded-xl border border-gray-100 bg-white p-8 text-center">
          <ClipboardCheck className="h-12 w-12 text-accent-sky/30 mx-auto mb-4" />
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Mock Tests</h3>
          <p className="text-sm text-gray-500 mb-6">
            Practice with GATE-pattern mock tests for {subject.title}.
          </p>
          <Link
            href={`/gate-coaching/${params.branch}/mock-test`}
            className="inline-flex items-center gap-2 rounded-lg bg-accent-sky px-4 py-2.5 text-sm font-medium text-white hover:bg-accent-sky/90 transition-colors"
          >
            Start Mock Test
            <ExternalLink className="h-3.5 w-3.5" />
          </Link>
        </div>
      ),
    },
    {
      id: "videos",
      label: "Video Lectures",
      icon: <PlayCircle className="h-4 w-4" />,
      content: videoLinks ? (
        <div className="space-y-3">
          {videoLinks.lectures.map((video, i) => (
            <a
              key={i}
              href={video.url}
              className="flex items-center justify-between rounded-xl border border-gray-100 bg-white p-4 hover:shadow-sm transition-shadow"
            >
              <div className="flex items-center gap-3">
                <PlayCircle className="h-8 w-8 text-brand-orange shrink-0" />
                <div>
                  <p className="text-sm font-medium text-gray-900">{video.title}</p>
                  <p className="text-xs text-gray-400">{video.duration}</p>
                </div>
              </div>
              <ExternalLink className="h-4 w-4 text-gray-300" />
            </a>
          ))}
        </div>
      ) : (
        <p className="text-gray-500">Video lectures coming soon.</p>
      ),
    },
  ];

  return (
    <>
      <JsonLd
        data={buildCourseSchema({
          name: subject.title,
          description:
            subject.seoDesc || `${subject.title} for GATE ${params.branch.toUpperCase()}`,
          url: `/gate-coaching/${params.branch}/${params.subject}`,
        })}
      />

      <div className="pt-24 pb-16 bg-surface-muted min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: "GATE Coaching", url: "/gate-coaching" },
              {
                name: `GATE ${branchInfo?.shortTitle || params.branch.toUpperCase()}`,
                url: `/gate-coaching/${params.branch}`,
              },
              {
                name: subject.title,
                url: `/gate-coaching/${params.branch}/${params.subject}`,
              },
            ]}
            className="mb-8"
          />

          {/* Hero */}
          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="violet" className="!bg-brand-orange/10 !text-brand-orange">
                GATE {branchInfo?.shortTitle || params.branch.toUpperCase()}
              </Badge>
              {subject.semester && (
                <Badge variant="sky" className="!bg-accent-sky/10 !text-accent-sky">
                  Semester {subject.semester}
                </Badge>
              )}
            </div>
            <h1 className="text-fluid-3xl font-bold text-gray-900">{subject.title}</h1>
          </div>

          {/* Main Content + Sidebar */}
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Content */}
            <div className="lg:col-span-2 space-y-12">
              <Tabs tabs={tabs} />

              {/* FAQ */}
              {faqs.length > 0 && (
                <FAQSection
                  faqs={faqs}
                  title={`Frequently Asked Questions — ${subject.title}`}
                />
              )}

              {/* Related Subjects */}
              {relatedSubjects.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Related Subjects</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relatedSubjects.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/gate-coaching/${params.branch}/${rel.slug}`}
                        className="rounded-xl border border-gray-100 bg-white p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all text-sm font-medium text-gray-900 hover:text-brand-orange"
                      >
                        {rel.title}
                        {rel.semester && (
                          <span className="text-xs text-gray-400 ml-2">
                            Sem {rel.semester}
                          </span>
                        )}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            {/* Sticky Sidebar */}
            <div className="hidden lg:block">
              <div className="sticky top-24">
                <LeadForm
                  defaultCourse={`GATE ${branchInfo?.shortTitle || params.branch.toUpperCase()}`}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
