import type { Metadata } from "next";
import { KtuComparisonPage } from "@/components/sections/KtuComparisonPage";
import { ktuComparisonContent } from "@/lib/content/ktu-comparison";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuComparisonContent.seo.title,
  description: ktuComparisonContent.seo.description,
  keywords: [
    ktuComparisonContent.seo.primaryKeyword,
    ...ktuComparisonContent.seo.secondaryKeywords,
    ...(ktuComparisonContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-vs-2024",
});

export default function KtuComparisonLandingPage() {
  return <KtuComparisonPage content={ktuComparisonContent} />;
}
