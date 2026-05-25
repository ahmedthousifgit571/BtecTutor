import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS1_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS1_2019Content.seo.title,
  description: ktuEeeS1_2019Content.seo.description,
  keywords: [
    ktuEeeS1_2019Content.seo.primaryKeyword,
    ...ktuEeeS1_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS1_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s1",
});

export default function KtuEeeS1Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS1_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S1", url: "/ktu/2019-scheme/eee/s1" },
      ]}
    />
  );
}
