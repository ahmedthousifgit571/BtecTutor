import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuRevaluationContent } from "@/lib/content/ktu-revaluation";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuRevaluationContent.seo.title,
  description: ktuRevaluationContent.seo.description,
  keywords: [
    ktuRevaluationContent.seo.primaryKeyword,
    ...ktuRevaluationContent.seo.secondaryKeywords,
    ...(ktuRevaluationContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/revaluation",
});

export default function KtuRevaluationLandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuRevaluationContent}
      breadcrumbLabel="Revaluation"
      breadcrumbUrl="/ktu/revaluation"
    />
  );
}
