import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS2_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS2_2019Content.seo.title,
  description: ktuItS2_2019Content.seo.description,
  keywords: [
    ktuItS2_2019Content.seo.primaryKeyword,
    ...ktuItS2_2019Content.seo.secondaryKeywords,
    ...(ktuItS2_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it/s2",
});

export default function KtuItS2Page() {
  return (
    <KtuSemesterPage
      content={ktuItS2_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
        { name: "S2", url: "/ktu/2019-scheme/it/s2" },
      ]}
    />
  );
}
