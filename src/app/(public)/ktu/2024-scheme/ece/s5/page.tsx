import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS5_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS5_2024Content.seo.title,
  description: ktuEceS5_2024Content.seo.description,
  keywords: [
    ktuEceS5_2024Content.seo.primaryKeyword,
    ...ktuEceS5_2024Content.seo.secondaryKeywords,
    ...(ktuEceS5_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/ece/s5",
});

export default function KtuEceS5_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS5_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "ECE", url: "/ktu/2024-scheme/ece" },
        { name: "S5", url: "/ktu/2024-scheme/ece/s5" },
      ]}
    />
  );
}
