import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS6_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS6_2019Content.seo.title,
  description: ktuEceS6_2019Content.seo.description,
  keywords: [
    ktuEceS6_2019Content.seo.primaryKeyword,
    ...ktuEceS6_2019Content.seo.secondaryKeywords,
    ...(ktuEceS6_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece/s6",
});

export default function KtuEceS6Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS6_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
        { name: "S6", url: "/ktu/2019-scheme/ece/s6" },
      ]}
    />
  );
}
