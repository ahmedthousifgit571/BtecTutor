import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS7_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS7_2019Content.seo.title,
  description: ktuMechanicalS7_2019Content.seo.description,
  keywords: [
    ktuMechanicalS7_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS7_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS7_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s7",
});

export default function KtuMechanicalS7Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS7_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S7", url: "/ktu/2019-scheme/mechanical/s7" },
      ]}
    />
  );
}
