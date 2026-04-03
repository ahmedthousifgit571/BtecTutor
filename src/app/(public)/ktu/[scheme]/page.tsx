import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Code, Wrench, Building2 } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { KTU_SCHEMES, KTU_DEPARTMENTS } from "@/lib/constants";

interface Props {
  params: { scheme: string };
}

export async function generateStaticParams() {
  return KTU_SCHEMES.map((s) => ({ scheme: s }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  if (!KTU_SCHEMES.includes(params.scheme as (typeof KTU_SCHEMES)[number])) return {};

  return generateMeta({
    title: `KTU ${params.scheme} Scheme — Study Materials & Notes`,
    description: `Access complete KTU ${params.scheme} scheme study materials, notes, previous year questions, and video lectures for all departments.`,
    canonicalUrl: `/ktu/${params.scheme}`,
  });
}

const iconMap: Record<string, React.ReactNode> = {
  "computer-science": <Code className="h-8 w-8" />,
  mechanical: <Wrench className="h-8 w-8" />,
  civil: <Building2 className="h-8 w-8" />,
};

export default function KtuSchemePage({ params }: Props) {
  if (!KTU_SCHEMES.includes(params.scheme as (typeof KTU_SCHEMES)[number])) {
    notFound();
  }

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb
          items={[{ name: `KTU ${params.scheme}`, url: `/ktu/${params.scheme}` }]}
          className="mb-8"
        />

        <div className="max-w-3xl mb-16">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            KTU {params.scheme} Scheme
          </h1>
          <p className="text-lg text-gray-500">
            Browse study materials, notes, and previous year questions organized
            by department for the KTU {params.scheme} scheme.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {KTU_DEPARTMENTS.map((dept) => (
            <Link
              key={dept.slug}
              href={`/ktu/${params.scheme}/${dept.slug}`}
              className="group rounded-2xl border border-gray-100 bg-white p-8 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
            >
              <div className="rounded-2xl bg-brand-orange/5 p-4 w-fit text-brand-orange mb-6 group-hover:bg-brand-orange/10 transition-colors">
                {iconMap[dept.slug] || <Code className="h-8 w-8" />}
              </div>
              <h2 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-brand-orange transition-colors">
                {dept.shortTitle}
              </h2>
              <p className="text-sm text-gray-500 mb-6">{dept.title}</p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-brand-orange group-hover:gap-2 transition-all">
                View Subjects <ArrowRight className="h-4 w-4" />
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
