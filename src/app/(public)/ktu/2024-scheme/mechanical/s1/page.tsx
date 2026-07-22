import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS1_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS1_2024Content.seo.title,
  description: ktuMechanicalS1_2024Content.seo.description,
  keywords: [
    ktuMechanicalS1_2024Content.seo.primaryKeyword,
    ...ktuMechanicalS1_2024Content.seo.secondaryKeywords,
    ...(ktuMechanicalS1_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/mechanical/s1",
});

export default function KtuMechanicalS1_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS1_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Mechanical", url: "/ktu/2024-scheme/mechanical" },
        { name: "S1", url: "/ktu/2024-scheme/mechanical/s1" },
      ]}
    />
  );
}
