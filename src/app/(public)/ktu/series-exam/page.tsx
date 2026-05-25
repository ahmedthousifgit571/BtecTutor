import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuSeriesExamContent } from "@/lib/content/ktu-series-exam";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuSeriesExamContent.seo.title,
  description: ktuSeriesExamContent.seo.description,
  keywords: [
    ktuSeriesExamContent.seo.primaryKeyword,
    ...ktuSeriesExamContent.seo.secondaryKeywords,
    ...(ktuSeriesExamContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/series-exam",
});

export default function KtuSeriesExamLandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuSeriesExamContent}
      breadcrumbLabel="Series Exam"
      breadcrumbUrl="/ktu/series-exam"
    />
  );
}
