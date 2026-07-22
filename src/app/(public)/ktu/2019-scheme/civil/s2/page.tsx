import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS2_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS2_2019Content.seo.title,
  description: ktuCivilS2_2019Content.seo.description,
  keywords: [
    ktuCivilS2_2019Content.seo.primaryKeyword,
    ...ktuCivilS2_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS2_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s2",
});

export default function KtuCivilS2Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS2_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S2", url: "/ktu/2019-scheme/civil/s2" },
      ]}
    />
  );
}
