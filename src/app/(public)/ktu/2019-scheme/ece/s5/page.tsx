import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS5_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS5_2019Content.seo.title,
  description: ktuEceS5_2019Content.seo.description,
  keywords: [
    ktuEceS5_2019Content.seo.primaryKeyword,
    ...ktuEceS5_2019Content.seo.secondaryKeywords,
    ...(ktuEceS5_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece/s5",
});

export default function KtuEceS5Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS5_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
        { name: "S5", url: "/ktu/2019-scheme/ece/s5" },
      ]}
    />
  );
}
