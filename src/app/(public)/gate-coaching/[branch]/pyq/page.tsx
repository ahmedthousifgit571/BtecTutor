import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { Download, FileText } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { GATE_BRANCHES } from "@/lib/constants";

interface Props {
  params: { branch: string };
}

export async function generateStaticParams() {
  return GATE_BRANCHES.map((b) => ({ branch: b.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const branch = GATE_BRANCHES.find((b) => b.slug === params.branch);
  if (!branch) return {};

  return generateMeta({
    title: `GATE ${branch.shortTitle} Previous Year Questions`,
    description: `Download GATE ${branch.shortTitle} previous year question papers with solutions. Year-wise PYQs for all ${branch.title} subjects.`,
    canonicalUrl: `/gate-coaching/${branch.slug}/pyq`,
  });
}

export default async function PYQPage({ params }: Props) {
  const branchInfo = GATE_BRANCHES.find((b) => b.slug === params.branch);
  if (!branchInfo) notFound();

  const course = await prisma.course.findFirst({
    where: { branch: params.branch, scheme: null },
    include: { subjects: { orderBy: { semester: "asc" } } },
  });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "GATE Coaching", url: "/gate-coaching" },
            { name: `GATE ${branchInfo.shortTitle}`, url: `/gate-coaching/${params.branch}` },
            { name: "Previous Year Questions", url: `/gate-coaching/${params.branch}/pyq` },
          ]}
          className="mb-8"
        />

        <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
          GATE {branchInfo.shortTitle} — Previous Year Questions
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl">
          Access year-wise previous year question papers with detailed solutions for all {branchInfo.title} subjects.
        </p>

        <div className="space-y-6">
          {course?.subjects.map((subject) => {
            const pyqs = subject.pyqs as { years: { year: number; pdfUrl: string; questionCount: number }[] } | null;
            return (
              <div key={subject.id} className="rounded-xl border border-gray-100 bg-white p-6">
                <div className="flex items-center justify-between mb-4">
                  <Link
                    href={`/gate-coaching/${params.branch}/${subject.slug}`}
                    className="text-lg font-semibold text-gray-900 hover:text-brand-orange transition-colors"
                  >
                    {subject.title}
                  </Link>
                </div>
                {pyqs?.years.map((year) => (
                  <div key={year.year} className="flex items-center justify-between py-2 border-t border-gray-50">
                    <div className="flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-sm text-gray-600">GATE {year.year}</span>
                      <span className="text-xs text-gray-400">({year.questionCount} questions)</span>
                    </div>
                    <a
                      href={year.pdfUrl}
                      className="inline-flex items-center gap-1 text-sm text-brand-orange hover:underline"
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download
                    </a>
                  </div>
                ))}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
