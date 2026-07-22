import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS8_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS8_2024Content.seo.title,
  description: ktuMechanicalS8_2024Content.seo.description,
  keywords: [
    ktuMechanicalS8_2024Content.seo.primaryKeyword,
    ...ktuMechanicalS8_2024Content.seo.secondaryKeywords,
    ...(ktuMechanicalS8_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/mechanical/s8",
});

export default function KtuMechanicalS8_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS8_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Mechanical", url: "/ktu/2024-scheme/mechanical" },
        { name: "S8", url: "/ktu/2024-scheme/mechanical/s8" },
      ]}
    />
  );
}
