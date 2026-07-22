import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS5_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS5_2019Content.seo.title,
  description: ktuCivilS5_2019Content.seo.description,
  keywords: [
    ktuCivilS5_2019Content.seo.primaryKeyword,
    ...ktuCivilS5_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS5_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s5",
});

export default function KtuCivilS5Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS5_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S5", url: "/ktu/2019-scheme/civil/s5" },
      ]}
    />
  );
}
