import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuPreviousYearPapersContent } from "@/lib/content/ktu-previous-year-papers";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuPreviousYearPapersContent.seo.title,
  description: ktuPreviousYearPapersContent.seo.description,
  keywords: [
    ktuPreviousYearPapersContent.seo.primaryKeyword,
    ...ktuPreviousYearPapersContent.seo.secondaryKeywords,
    ...(ktuPreviousYearPapersContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/previous-year-papers",
});

export default function KtuPreviousYearPapersLandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuPreviousYearPapersContent}
      breadcrumbLabel="Previous Year Papers"
      breadcrumbUrl="/ktu/previous-year-papers"
    />
  );
}
