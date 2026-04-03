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
import { KTU_DEPARTMENTS } from "@/lib/constants";

export const revalidate = 86400;

interface Props {
  params: { scheme: string; department: string; subject: string };
}

async function getKtuSubject(scheme: string, department: string, subjectSlug: string) {
  const course = await prisma.course.findFirst({
    where: { scheme, department },
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
    where: { course: { scheme: { not: null } } },
  });

  return subjects.map((s) => ({
    scheme: s.course.scheme!,
    department: s.course.department!,
    subject: s.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const subject = await getKtuSubject(params.scheme, params.department, params.subject);
  if (!subject) return {};

  return generateMeta({
    title: subject.seoTitle || `${subject.title} — KTU ${params.scheme}`,
    description:
      subject.seoDesc ||
      `${subject.title} study materials for KTU ${params.scheme} scheme. Notes, PYQs, and video lectures.`,
    keywords: subject.seoKeywords,
    canonicalUrl: `/ktu/${params.scheme}/${params.department}/${params.subject}`,
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

export default async function KtuSubjectPage({ params }: Props) {
  const subject = await getKtuSubject(params.scheme, params.department, params.subject);
  if (!subject) notFound();

  const deptInfo = KTU_DEPARTMENTS.find((d) => d.slug === params.department);
  const syllabus = subject.syllabus as { units: SyllabusUnit[] } | null;
  const pyqs = subject.pyqs as { years: PyqYear[] } | null;
  const videoLinks = subject.videoLinks as { lectures: VideoLecture[] } | null;
  const faqs = (subject.faqs as { question: string; answer: string }[] | null) || [];

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
            Notes for {subject.title} will be available for download.
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
            title: `KTU ${year.year} — ${year.questionCount} questions`,
            content: (
              <div className="flex items-center justify-between">
                <span className="text-sm text-gray-500">
                  {year.questionCount} questions
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
          description: subject.seoDesc || `${subject.title} — KTU ${params.scheme}`,
          url: `/ktu/${params.scheme}/${params.department}/${params.subject}`,
        })}
      />

      <div className="pt-24 pb-16 bg-surface-muted min-h-screen">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <Breadcrumb
            items={[
              { name: `KTU ${params.scheme}`, url: `/ktu/${params.scheme}` },
              {
                name: deptInfo?.shortTitle || params.department,
                url: `/ktu/${params.scheme}/${params.department}`,
              },
              {
                name: subject.title,
                url: `/ktu/${params.scheme}/${params.department}/${params.subject}`,
              },
            ]}
            className="mb-8"
          />

          <div className="mb-10">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <Badge variant="violet" className="!bg-brand-orange/10 !text-brand-orange">
                KTU {params.scheme}
              </Badge>
              <Badge variant="sky" className="!bg-accent-sky/10 !text-accent-sky">
                {deptInfo?.shortTitle || params.department}
              </Badge>
              {subject.semester && (
                <Badge className="!bg-gray-100 !text-gray-600">
                  Semester {subject.semester}
                </Badge>
              )}
            </div>
            <h1 className="text-fluid-3xl font-bold text-gray-900">{subject.title}</h1>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2 space-y-12">
              <Tabs tabs={tabs} />

              {faqs.length > 0 && (
                <FAQSection faqs={faqs} title={`FAQ — ${subject.title}`} />
              )}

              {relatedSubjects.length > 0 && (
                <section>
                  <h2 className="text-xl font-bold text-gray-900 mb-4">Related Subjects</h2>
                  <div className="grid sm:grid-cols-2 gap-3">
                    {relatedSubjects.map((rel) => (
                      <Link
                        key={rel.id}
                        href={`/ktu/${params.scheme}/${params.department}/${rel.slug}`}
                        className="rounded-xl border border-gray-100 bg-white p-4 hover:shadow-sm hover:-translate-y-0.5 transition-all text-sm font-medium text-gray-900 hover:text-brand-orange"
                      >
                        {rel.title}
                      </Link>
                    ))}
                  </div>
                </section>
              )}
            </div>

            <div className="hidden lg:block">
              <div className="sticky top-24">
                <LeadForm defaultCourse={`KTU ${deptInfo?.shortTitle || params.department}`} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
