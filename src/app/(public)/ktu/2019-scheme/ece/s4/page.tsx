import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS4_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS4_2019Content.seo.title,
  description: ktuEceS4_2019Content.seo.description,
  keywords: [
    ktuEceS4_2019Content.seo.primaryKeyword,
    ...ktuEceS4_2019Content.seo.secondaryKeywords,
    ...(ktuEceS4_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece/s4",
});

export default function KtuEceS4Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS4_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
        { name: "S4", url: "/ktu/2019-scheme/ece/s4" },
      ]}
    />
  );
}
