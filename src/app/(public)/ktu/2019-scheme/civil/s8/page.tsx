import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS8_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS8_2019Content.seo.title,
  description: ktuCivilS8_2019Content.seo.description,
  keywords: [
    ktuCivilS8_2019Content.seo.primaryKeyword,
    ...ktuCivilS8_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS8_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s8",
});

export default function KtuCivilS8Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS8_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S8", url: "/ktu/2019-scheme/civil/s8" },
      ]}
    />
  );
}
