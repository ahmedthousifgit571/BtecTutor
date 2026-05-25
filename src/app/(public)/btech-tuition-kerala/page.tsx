import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { btechTuitionKeralaContent } from "@/lib/content/btech-tuition-kerala";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: btechTuitionKeralaContent.seo.title,
  description: btechTuitionKeralaContent.seo.description,
  keywords: [
    btechTuitionKeralaContent.seo.primaryKeyword,
    ...btechTuitionKeralaContent.seo.secondaryKeywords,
    ...(btechTuitionKeralaContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/btech-tuition-kerala",
});

export default function BtechTuitionKeralaLandingPage() {
  return (
    <KtuSupplyExamPage
      content={btechTuitionKeralaContent}
      breadcrumbLabel="BTech Tuition Kerala"
      breadcrumbUrl="/btech-tuition-kerala"
    />
  );
}
