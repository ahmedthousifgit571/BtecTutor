import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS4_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS4_2024Content.seo.title,
  description: ktuCivilS4_2024Content.seo.description,
  keywords: [
    ktuCivilS4_2024Content.seo.primaryKeyword,
    ...ktuCivilS4_2024Content.seo.secondaryKeywords,
    ...(ktuCivilS4_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/civil/s4",
});

export default function KtuCivilS4_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS4_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Civil", url: "/ktu/2024-scheme/civil" },
        { name: "S4", url: "/ktu/2024-scheme/civil/s4" },
      ]}
    />
  );
}
