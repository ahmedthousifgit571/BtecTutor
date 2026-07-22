import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS2_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS2_2024Content.seo.title,
  description: ktuItS2_2024Content.seo.description,
  keywords: [
    ktuItS2_2024Content.seo.primaryKeyword,
    ...ktuItS2_2024Content.seo.secondaryKeywords,
    ...(ktuItS2_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it/s2",
});

export default function KtuItS2_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuItS2_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
        { name: "S2", url: "/ktu/2024-scheme/it/s2" },
      ]}
    />
  );
}
