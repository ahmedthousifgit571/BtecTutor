import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS1_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS1_2019Content.seo.title,
  description: ktuCsS1_2019Content.seo.description,
  keywords: [
    ktuCsS1_2019Content.seo.primaryKeyword,
    ...ktuCsS1_2019Content.seo.secondaryKeywords,
    ...(ktuCsS1_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs/s1",
});

export default function KtuCsS1Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS1_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
        { name: "S1", url: "/ktu/2019-scheme/cs/s1" },
      ]}
    />
  );
}
