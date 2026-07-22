import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS1_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS1_2024Content.seo.title,
  description: ktuCivilS1_2024Content.seo.description,
  keywords: [
    ktuCivilS1_2024Content.seo.primaryKeyword,
    ...ktuCivilS1_2024Content.seo.secondaryKeywords,
    ...(ktuCivilS1_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/civil/s1",
});

export default function KtuCivilS1_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS1_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Civil", url: "/ktu/2024-scheme/civil" },
        { name: "S1", url: "/ktu/2024-scheme/civil/s1" },
      ]}
    />
  );
}
