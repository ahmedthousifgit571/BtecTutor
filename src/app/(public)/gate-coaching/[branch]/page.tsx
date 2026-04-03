import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen, FileText, ClipboardCheck } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
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
    title: `GATE ${branch.shortTitle} Coaching — ${branch.title}`,
    description: `Complete GATE ${branch.shortTitle} coaching with expert faculty. Access study materials, notes, PYQs, mock tests, and video lectures for all ${branch.title} subjects.`,
    keywords: [`GATE ${branch.shortTitle}`, `GATE ${branch.slug} coaching`, `GATE ${branch.title}`],
    canonicalUrl: `/gate-coaching/${branch.slug}`,
  });
}

export default async function BranchPage({ params }: Props) {
  const branchInfo = GATE_BRANCHES.find((b) => b.slug === params.branch);
  if (!branchInfo) notFound();

  const course = await prisma.course.findFirst({
    where: { branch: params.branch, scheme: null },
    include: {
      subjects: { orderBy: { semester: "asc" } },
    },
  });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "GATE Coaching", url: "/gate-coaching" },
            { name: `GATE ${branchInfo.shortTitle}`, url: `/gate-coaching/${params.branch}` },
          ]}
          className="mb-8"
        />

        <div className="max-w-3xl mb-12">
          <Badge variant="violet" className="mb-4 !bg-brand-orange/10">
            GATE {branchInfo.shortTitle}
          </Badge>
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            {branchInfo.title}
          </h1>
          <p className="text-lg text-gray-500">
            {course?.description ||
              `Comprehensive coaching for GATE ${branchInfo.shortTitle}. Expert faculty, detailed study materials, and structured preparation plans.`}
          </p>
        </div>

        {/* Quick Links */}
        <div className="flex flex-wrap gap-3 mb-12">
          <Link
            href={`/gate-coaching/${params.branch}/pyq`}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <FileText className="h-4 w-4 text-brand-orange" />
            Previous Year Questions
          </Link>
          <Link
            href={`/gate-coaching/${params.branch}/mock-test`}
            className="inline-flex items-center gap-2 rounded-lg border border-gray-200 px-4 py-2.5 text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ClipboardCheck className="h-4 w-4 text-accent-sky" />
            Mock Tests
          </Link>
        </div>

        {/* Subject Grid */}
        <h2 className="text-xl font-bold text-gray-900 mb-6">All Subjects</h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
          {course?.subjects.map((subject) => (
            <Link
              key={subject.id}
              href={`/gate-coaching/${params.branch}/${subject.slug}`}
              className="group rounded-xl border border-gray-100 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
            >
              <div className="flex items-start justify-between mb-3">
                <BookOpen className="h-5 w-5 text-brand-orange" />
                {subject.semester && (
                  <Badge variant="violet" className="!bg-brand-orange/10 !text-brand-orange">
                    Sem {subject.semester}
                  </Badge>
                )}
              </div>
              <h3 className="font-semibold text-gray-900 mb-1 group-hover:text-brand-orange transition-colors">
                {subject.title}
              </h3>
              <span className="inline-flex items-center gap-1 text-xs text-brand-orange mt-2 group-hover:gap-1.5 transition-all">
                Study Now <ArrowRight className="h-3 w-3" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
