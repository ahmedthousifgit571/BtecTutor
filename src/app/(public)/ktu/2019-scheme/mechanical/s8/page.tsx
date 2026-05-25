import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS8_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS8_2019Content.seo.title,
  description: ktuMechanicalS8_2019Content.seo.description,
  keywords: [
    ktuMechanicalS8_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS8_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS8_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s8",
});

export default function KtuMechanicalS8Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS8_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S8", url: "/ktu/2019-scheme/mechanical/s8" },
      ]}
    />
  );
}
