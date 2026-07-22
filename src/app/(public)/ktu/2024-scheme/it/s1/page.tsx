import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS1_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS1_2024Content.seo.title,
  description: ktuItS1_2024Content.seo.description,
  keywords: [
    ktuItS1_2024Content.seo.primaryKeyword,
    ...ktuItS1_2024Content.seo.secondaryKeywords,
    ...(ktuItS1_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it/s1",
});

export default function KtuItS1_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuItS1_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
        { name: "S1", url: "/ktu/2024-scheme/it/s1" },
      ]}
    />
  );
}
