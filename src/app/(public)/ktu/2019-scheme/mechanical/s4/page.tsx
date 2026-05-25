import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS4_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS4_2019Content.seo.title,
  description: ktuMechanicalS4_2019Content.seo.description,
  keywords: [
    ktuMechanicalS4_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS4_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS4_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s4",
});

export default function KtuMechanicalS4Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS4_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S4", url: "/ktu/2019-scheme/mechanical/s4" },
      ]}
    />
  );
}
