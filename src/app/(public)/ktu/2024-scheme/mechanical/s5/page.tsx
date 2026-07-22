import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS5_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS5_2024Content.seo.title,
  description: ktuMechanicalS5_2024Content.seo.description,
  keywords: [
    ktuMechanicalS5_2024Content.seo.primaryKeyword,
    ...ktuMechanicalS5_2024Content.seo.secondaryKeywords,
    ...(ktuMechanicalS5_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/mechanical/s5",
});

export default function KtuMechanicalS5_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS5_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Mechanical", url: "/ktu/2024-scheme/mechanical" },
        { name: "S5", url: "/ktu/2024-scheme/mechanical/s5" },
      ]}
    />
  );
}
