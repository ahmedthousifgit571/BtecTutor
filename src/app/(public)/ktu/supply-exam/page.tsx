import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuSupplyExamContent } from "@/lib/content/ktu-supply-exam";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuSupplyExamContent.seo.title,
  description: ktuSupplyExamContent.seo.description,
  keywords: [
    ktuSupplyExamContent.seo.primaryKeyword,
    ...ktuSupplyExamContent.seo.secondaryKeywords,
    ...(ktuSupplyExamContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/supply-exam",
});

export default function KtuSupplyExamLandingPage() {
  return <KtuSupplyExamPage content={ktuSupplyExamContent} />;
}
