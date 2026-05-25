import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS1_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS1_2019Content.seo.title,
  description: ktuMechanicalS1_2019Content.seo.description,
  keywords: [
    ktuMechanicalS1_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS1_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS1_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s1",
});

export default function KtuMechanicalS1Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS1_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S1", url: "/ktu/2019-scheme/mechanical/s1" },
      ]}
    />
  );
}
