import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS1_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS1_2019Content.seo.title,
  description: ktuCivilS1_2019Content.seo.description,
  keywords: [
    ktuCivilS1_2019Content.seo.primaryKeyword,
    ...ktuCivilS1_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS1_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s1",
});

export default function KtuCivilS1Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS1_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S1", url: "/ktu/2019-scheme/civil/s1" },
      ]}
    />
  );
}
