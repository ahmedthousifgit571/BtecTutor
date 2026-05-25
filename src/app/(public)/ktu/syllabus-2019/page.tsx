import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuSyllabus2019Content } from "@/lib/content/ktu-syllabus-2019";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuSyllabus2019Content.seo.title,
  description: ktuSyllabus2019Content.seo.description,
  keywords: [
    ktuSyllabus2019Content.seo.primaryKeyword,
    ...ktuSyllabus2019Content.seo.secondaryKeywords,
    ...(ktuSyllabus2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/syllabus-2019",
});

export default function KtuSyllabus2019LandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuSyllabus2019Content}
      breadcrumbLabel="Syllabus 2019"
      breadcrumbUrl="/ktu/syllabus-2019"
    />
  );
}
