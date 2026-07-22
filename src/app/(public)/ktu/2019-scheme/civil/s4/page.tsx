import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS4_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS4_2019Content.seo.title,
  description: ktuCivilS4_2019Content.seo.description,
  keywords: [
    ktuCivilS4_2019Content.seo.primaryKeyword,
    ...ktuCivilS4_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS4_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s4",
});

export default function KtuCivilS4Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS4_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S4", url: "/ktu/2019-scheme/civil/s4" },
      ]}
    />
  );
}
