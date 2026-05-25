import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS6_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS6_2019Content.seo.title,
  description: ktuMechanicalS6_2019Content.seo.description,
  keywords: [
    ktuMechanicalS6_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS6_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS6_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s6",
});

export default function KtuMechanicalS6Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS6_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S6", url: "/ktu/2019-scheme/mechanical/s6" },
      ]}
    />
  );
}
