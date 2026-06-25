import type { Metadata } from "next";
import { FileText, ClipboardList, BookOpen, ExternalLink, Link2 } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { KtuSearchBar } from "@/components/sections/KtuSearchBar";
import { parseNotesFiles } from "@/lib/ktu-types";

export const dynamic = "force-dynamic";

export const metadata: Metadata = {
  title: "Search KTU Notes, Question Papers & Syllabus | BTEC Tutor",
  description:
    "Search KTU subjects by code or name and download notes, previous year question papers, and syllabus.",
  robots: { index: false, follow: true },
};

interface Props {
  searchParams: { q?: string };
}

async function searchSubjects(q: string) {
  return prisma.subject.findMany({
    where: {
      course: { scheme: { not: null } },
      OR: [
        { code: { contains: q, mode: "insensitive" } },
        { title: { contains: q, mode: "insensitive" } },
        { keyTopics: { contains: q, mode: "insensitive" } },
      ],
    },
    include: { course: { select: { scheme: true, branch: true } } },
    orderBy: [{ semester: "asc" }, { code: "asc" }],
    take: 60,
  });
}

const SINGLE_DOC_BUTTONS = [
  { key: "questionPaperUrl", label: "Question Papers", icon: ClipboardList },
  { key: "syllabusFileUrl", label: "Syllabus", icon: BookOpen },
  { key: "courseLink", label: "Course Link", icon: Link2 },
] as const;

export default async function KtuSearchPage({ searchParams }: Props) {
  const q = (searchParams.q || "").trim();
  const results = q ? await searchSubjects(q) : [];

  return (
    <div className="bg-white pt-24 pb-16 min-h-screen">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "KTU", url: "/ktu" },
            { name: "Search", url: "/ktu/search" },
          ]}
          className="mb-6"
        />

        <h1 className="text-fluid-2xl font-bold text-gray-900 mb-4">
          Search KTU Study Materials
        </h1>
        <KtuSearchBar defaultValue={q} className="max-w-2xl mb-8" />

        {q && (
          <p className="text-sm text-gray-500 mb-5">
            {results.length} result{results.length === 1 ? "" : "s"} for{" "}
            <span className="font-semibold text-gray-700">“{q}”</span>
          </p>
        )}

        {q && results.length === 0 && (
          <div className="rounded-xl border border-gray-100 bg-gray-50 p-8 text-center text-gray-500">
            No subjects found. Try a subject code (e.g. <b>PHT100</b>) or a topic.
          </div>
        )}

        <div className="space-y-4">
          {results.map((s) => (
            <div
              key={s.id}
              className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm"
            >
              <div className="flex flex-wrap items-center gap-2 mb-1.5">
                <span className="font-mono text-sm font-semibold text-brand-orange">
                  {s.code}
                </span>
                <Badge className="!bg-gray-100 !text-gray-600">
                  {s.course.branch?.toUpperCase()}
                </Badge>
                {s.semester && (
                  <Badge className="!bg-gray-100 !text-gray-600">S{s.semester}</Badge>
                )}
                <Badge className="!bg-gray-100 !text-gray-600">
                  {s.course.scheme}
                </Badge>
              </div>
              <h2 className="text-base font-semibold text-gray-900">{s.title}</h2>
              {s.keyTopics && (
                <p className="mt-1 text-sm text-gray-500 line-clamp-2">{s.keyTopics}</p>
              )}

              <div className="mt-4 flex flex-wrap gap-2.5">
                {(() => {
                  const notesFiles = parseNotesFiles(s.notesFiles);
                  if (notesFiles.length === 0) {
                    return (
                      <span
                        className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-300"
                        title="Not uploaded yet"
                      >
                        <FileText className="h-4 w-4" />
                        KTU Notes
                      </span>
                    );
                  }
                  return notesFiles.map((f) => (
                    <a
                      key={f.id}
                      href={f.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange/10 px-3.5 py-2 text-sm font-medium text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                    >
                      <FileText className="h-4 w-4" />
                      {notesFiles.length > 1 ? f.name : "KTU Notes"}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ));
                })()}

                {SINGLE_DOC_BUTTONS.map(({ key, label, icon: Icon }) => {
                  const url = s[key];
                  return url ? (
                    <a
                      key={key}
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 rounded-lg bg-brand-orange/10 px-3.5 py-2 text-sm font-medium text-brand-orange transition-colors hover:bg-brand-orange hover:text-white"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                      <ExternalLink className="h-3.5 w-3.5" />
                    </a>
                  ) : (
                    <span
                      key={key}
                      className="inline-flex items-center gap-1.5 rounded-lg bg-gray-50 px-3.5 py-2 text-sm font-medium text-gray-300"
                      title="Not uploaded yet"
                    >
                      <Icon className="h-4 w-4" />
                      {label}
                    </span>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {!q && (
          <p className="text-sm text-gray-500">
            Type a subject code or name above to find notes, question papers, and syllabus.
          </p>
        )}
      </div>
    </div>
  );
}
