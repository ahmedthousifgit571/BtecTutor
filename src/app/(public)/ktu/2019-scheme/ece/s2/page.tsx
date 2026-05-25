import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS2_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS2_2019Content.seo.title,
  description: ktuEceS2_2019Content.seo.description,
  keywords: [
    ktuEceS2_2019Content.seo.primaryKeyword,
    ...ktuEceS2_2019Content.seo.secondaryKeywords,
    ...(ktuEceS2_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece/s2",
});

export default function KtuEceS2Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS2_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
        { name: "S2", url: "/ktu/2019-scheme/ece/s2" },
      ]}
    />
  );
}
