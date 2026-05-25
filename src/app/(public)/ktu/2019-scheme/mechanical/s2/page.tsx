import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS2_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS2_2019Content.seo.title,
  description: ktuMechanicalS2_2019Content.seo.description,
  keywords: [
    ktuMechanicalS2_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS2_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS2_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s2",
});

export default function KtuMechanicalS2Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS2_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S2", url: "/ktu/2019-scheme/mechanical/s2" },
      ]}
    />
  );
}
