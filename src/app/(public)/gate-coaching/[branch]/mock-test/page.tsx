import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ClipboardCheck, Clock, BookOpen } from "lucide-react";
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
    title: `GATE ${branch.shortTitle} Mock Tests`,
    description: `Practice GATE ${branch.shortTitle} mock tests designed to match the actual exam pattern. Timed tests with instant results.`,
    canonicalUrl: `/gate-coaching/${branch.slug}/mock-test`,
  });
}

export default async function MockTestPage({ params }: Props) {
  const branchInfo = GATE_BRANCHES.find((b) => b.slug === params.branch);
  if (!branchInfo) notFound();

  const course = await prisma.course.findFirst({
    where: { branch: params.branch, scheme: null },
    include: {
      subjects: {
        include: { mockTests: true },
        orderBy: { semester: "asc" },
      },
    },
  });

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: "GATE Coaching", url: "/gate-coaching" },
            { name: `GATE ${branchInfo.shortTitle}`, url: `/gate-coaching/${params.branch}` },
            { name: "Mock Tests", url: `/gate-coaching/${params.branch}/mock-test` },
          ]}
          className="mb-8"
        />

        <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
          GATE {branchInfo.shortTitle} Mock Tests
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl">
          Take subject-wise mock tests to assess your preparation. Each test follows the GATE exam pattern.
        </p>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {course?.subjects.map((subject) => (
            <div
              key={subject.id}
              className="rounded-xl border border-gray-100 bg-white p-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="rounded-lg bg-accent-sky/10 p-2">
                  <ClipboardCheck className="h-5 w-5 text-accent-sky" />
                </div>
                <h3 className="font-semibold text-gray-900">{subject.title}</h3>
              </div>

              <div className="flex items-center gap-4 text-sm text-gray-400 mb-6">
                <span className="flex items-center gap-1">
                  <BookOpen className="h-3.5 w-3.5" />
                  {subject.mockTests.length || 0} tests
                </span>
                <span className="flex items-center gap-1">
                  <Clock className="h-3.5 w-3.5" />
                  60 min each
                </span>
              </div>

              <button
                disabled={subject.mockTests.length === 0}
                className="w-full rounded-lg bg-accent-sky/10 px-4 py-2.5 text-sm font-medium text-accent-sky hover:bg-accent-sky/20 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {subject.mockTests.length > 0 ? "Start Test" : "Coming Soon"}
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
