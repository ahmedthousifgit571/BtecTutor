import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS6_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS6_2024Content.seo.title,
  description: ktuMechanicalS6_2024Content.seo.description,
  keywords: [
    ktuMechanicalS6_2024Content.seo.primaryKeyword,
    ...ktuMechanicalS6_2024Content.seo.secondaryKeywords,
    ...(ktuMechanicalS6_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/mechanical/s6",
});

export default function KtuMechanicalS6_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS6_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Mechanical", url: "/ktu/2024-scheme/mechanical" },
        { name: "S6", url: "/ktu/2024-scheme/mechanical/s6" },
      ]}
    />
  );
}
