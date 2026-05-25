import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS7_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS7_2019Content.seo.title,
  description: ktuEceS7_2019Content.seo.description,
  keywords: [
    ktuEceS7_2019Content.seo.primaryKeyword,
    ...ktuEceS7_2019Content.seo.secondaryKeywords,
    ...(ktuEceS7_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece/s7",
});

export default function KtuEceS7Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS7_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
        { name: "S7", url: "/ktu/2019-scheme/ece/s7" },
      ]}
    />
  );
}
