import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS6_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS6_2019Content.seo.title,
  description: ktuCivilS6_2019Content.seo.description,
  keywords: [
    ktuCivilS6_2019Content.seo.primaryKeyword,
    ...ktuCivilS6_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS6_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s6",
});

export default function KtuCivilS6Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS6_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S6", url: "/ktu/2019-scheme/civil/s6" },
      ]}
    />
  );
}
