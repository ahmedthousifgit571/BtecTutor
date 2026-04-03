import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, BookOpen } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Badge } from "@/components/ui/Badge";
import { KTU_SCHEMES, KTU_DEPARTMENTS } from "@/lib/constants";

interface Props {
  params: { scheme: string; department: string };
}

export async function generateStaticParams() {
  const params: { scheme: string; department: string }[] = [];
  for (const scheme of KTU_SCHEMES) {
    for (const dept of KTU_DEPARTMENTS) {
      params.push({ scheme, department: dept.slug });
    }
  }
  return params;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dept = KTU_DEPARTMENTS.find((d) => d.slug === params.department);
  if (!dept) return {};

  return generateMeta({
    title: `KTU ${params.scheme} — ${dept.title} Subjects & Study Materials`,
    description: `Complete study materials for KTU ${params.scheme} scheme ${dept.title}. Notes, previous year questions, and video lectures for all semesters.`,
    keywords: [`KTU ${params.scheme}`, `KTU ${dept.title}`, `KTU ${dept.shortTitle} notes`],
    canonicalUrl: `/ktu/${params.scheme}/${params.department}`,
  });
}

export default async function KtuDepartmentPage({ params }: Props) {
  const dept = KTU_DEPARTMENTS.find((d) => d.slug === params.department);
  if (!dept || !KTU_SCHEMES.includes(params.scheme as (typeof KTU_SCHEMES)[number])) {
    notFound();
  }

  const course = await prisma.course.findFirst({
    where: { scheme: params.scheme, department: params.department },
    include: { subjects: { orderBy: { semester: "asc" } } },
  });

  const subjectsBySemester = course?.subjects.reduce<Record<number, typeof course.subjects>>(
    (acc, subject) => {
      const sem = subject.semester || 0;
      if (!acc[sem]) acc[sem] = [];
      acc[sem].push(subject);
      return acc;
    },
    {}
  );

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[
            { name: `KTU ${params.scheme}`, url: `/ktu/${params.scheme}` },
            { name: dept.shortTitle, url: `/ktu/${params.scheme}/${params.department}` },
          ]}
          className="mb-8"
        />

        <div className="flex flex-wrap items-center gap-3 mb-4">
          <Badge variant="violet" className="!bg-brand-orange/10 !text-brand-orange">
            KTU {params.scheme}
          </Badge>
          <Badge variant="sky" className="!bg-accent-sky/10 !text-accent-sky">
            {dept.shortTitle}
          </Badge>
        </div>

        <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
          {dept.title}
        </h1>
        <p className="text-lg text-gray-500 mb-12 max-w-2xl">
          {course?.description ||
            `Access study materials, notes, and previous year questions for KTU ${params.scheme} scheme ${dept.title}.`}
        </p>

        {subjectsBySemester &&
          Object.entries(subjectsBySemester)
            .sort(([a], [b]) => Number(a) - Number(b))
            .map(([semester, subjects]) => (
              <div key={semester} className="mb-10">
                <h2 className="text-lg font-bold text-gray-900 mb-4">
                  {Number(semester) > 0 ? `Semester ${semester}` : "General"}
                </h2>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {subjects.map((subject) => (
                    <Link
                      key={subject.id}
                      href={`/ktu/${params.scheme}/${params.department}/${subject.slug}`}
                      className="group rounded-xl border border-gray-100 bg-white p-5 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                    >
                      <div className="flex items-start justify-between mb-2">
                        <BookOpen className="h-5 w-5 text-brand-orange" />
                      </div>
                      <h3 className="font-semibold text-gray-900 group-hover:text-brand-orange transition-colors">
                        {subject.title}
                      </h3>
                      <span className="inline-flex items-center gap-1 text-xs text-brand-orange mt-3 group-hover:gap-1.5 transition-all">
                        Study Now <ArrowRight className="h-3 w-3" />
                      </span>
                    </Link>
                  ))}
                </div>
              </div>
            ))}
      </div>
    </div>
  );
}
