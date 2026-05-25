import type { Metadata } from "next";
import { KtuEngineeringMathsPage } from "@/components/sections/KtuEngineeringMathsPage";
import { ktuEngineeringMathsContent } from "@/lib/content/ktu-engineering-maths";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEngineeringMathsContent.seo.title,
  description: ktuEngineeringMathsContent.seo.description,
  keywords: [
    ktuEngineeringMathsContent.seo.primaryKeyword,
    ...ktuEngineeringMathsContent.seo.secondaryKeywords,
    ...(ktuEngineeringMathsContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/engineering-mathematics",
});

export default function KtuEngineeringMathsLandingPage() {
  return <KtuEngineeringMathsPage content={ktuEngineeringMathsContent} />;
}
