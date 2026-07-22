import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS7_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS7_2019Content.seo.title,
  description: ktuCivilS7_2019Content.seo.description,
  keywords: [
    ktuCivilS7_2019Content.seo.primaryKeyword,
    ...ktuCivilS7_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS7_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s7",
});

export default function KtuCivilS7Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS7_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S7", url: "/ktu/2019-scheme/civil/s7" },
      ]}
    />
  );
}
