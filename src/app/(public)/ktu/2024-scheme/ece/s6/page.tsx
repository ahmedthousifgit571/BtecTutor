import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS6_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS6_2024Content.seo.title,
  description: ktuEceS6_2024Content.seo.description,
  keywords: [
    ktuEceS6_2024Content.seo.primaryKeyword,
    ...ktuEceS6_2024Content.seo.secondaryKeywords,
    ...(ktuEceS6_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/ece/s6",
});

export default function KtuEceS6_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS6_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "ECE", url: "/ktu/2024-scheme/ece" },
        { name: "S6", url: "/ktu/2024-scheme/ece/s6" },
      ]}
    />
  );
}
