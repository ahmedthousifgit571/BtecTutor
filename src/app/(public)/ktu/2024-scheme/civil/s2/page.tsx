import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS2_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS2_2024Content.seo.title,
  description: ktuCivilS2_2024Content.seo.description,
  keywords: [
    ktuCivilS2_2024Content.seo.primaryKeyword,
    ...ktuCivilS2_2024Content.seo.secondaryKeywords,
    ...(ktuCivilS2_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/civil/s2",
});

export default function KtuCivilS2_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS2_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Civil", url: "/ktu/2024-scheme/civil" },
        { name: "S2", url: "/ktu/2024-scheme/civil/s2" },
      ]}
    />
  );
}
