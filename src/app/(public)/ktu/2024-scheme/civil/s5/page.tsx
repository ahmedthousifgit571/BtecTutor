import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS5_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS5_2024Content.seo.title,
  description: ktuCivilS5_2024Content.seo.description,
  keywords: [
    ktuCivilS5_2024Content.seo.primaryKeyword,
    ...ktuCivilS5_2024Content.seo.secondaryKeywords,
    ...(ktuCivilS5_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/civil/s5",
});

export default function KtuCivilS5_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS5_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Civil", url: "/ktu/2024-scheme/civil" },
        { name: "S5", url: "/ktu/2024-scheme/civil/s5" },
      ]}
    />
  );
}
