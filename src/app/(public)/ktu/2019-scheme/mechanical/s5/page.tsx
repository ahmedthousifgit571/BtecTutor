import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS5_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS5_2019Content.seo.title,
  description: ktuMechanicalS5_2019Content.seo.description,
  keywords: [
    ktuMechanicalS5_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS5_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS5_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s5",
});

export default function KtuMechanicalS5Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS5_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S5", url: "/ktu/2019-scheme/mechanical/s5" },
      ]}
    />
  );
}
