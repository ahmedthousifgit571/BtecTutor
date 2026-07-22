import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS1_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS1_2019Content.seo.title,
  description: ktuItS1_2019Content.seo.description,
  keywords: [
    ktuItS1_2019Content.seo.primaryKeyword,
    ...ktuItS1_2019Content.seo.secondaryKeywords,
    ...(ktuItS1_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it/s1",
});

export default function KtuItS1Page() {
  return (
    <KtuSemesterPage
      content={ktuItS1_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
        { name: "S1", url: "/ktu/2019-scheme/it/s1" },
      ]}
    />
  );
}
