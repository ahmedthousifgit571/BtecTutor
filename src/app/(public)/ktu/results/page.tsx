import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuResultsContent } from "@/lib/content/ktu-results";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuResultsContent.seo.title,
  description: ktuResultsContent.seo.description,
  keywords: [
    ktuResultsContent.seo.primaryKeyword,
    ...ktuResultsContent.seo.secondaryKeywords,
    ...(ktuResultsContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/results",
});

export default function KtuResultsLandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuResultsContent}
      breadcrumbLabel="Results"
      breadcrumbUrl="/ktu/results"
    />
  );
}
