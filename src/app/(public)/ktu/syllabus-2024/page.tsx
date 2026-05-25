import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuSyllabus2024Content } from "@/lib/content/ktu-syllabus-2024";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuSyllabus2024Content.seo.title,
  description: ktuSyllabus2024Content.seo.description,
  keywords: [
    ktuSyllabus2024Content.seo.primaryKeyword,
    ...ktuSyllabus2024Content.seo.secondaryKeywords,
    ...(ktuSyllabus2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/syllabus-2024",
});

export default function KtuSyllabus2024LandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuSyllabus2024Content}
      breadcrumbLabel="Syllabus 2024"
      breadcrumbUrl="/ktu/syllabus-2024"
    />
  );
}
