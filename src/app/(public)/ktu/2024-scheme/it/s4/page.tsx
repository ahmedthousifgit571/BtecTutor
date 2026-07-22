import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS4_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS4_2024Content.seo.title,
  description: ktuItS4_2024Content.seo.description,
  keywords: [
    ktuItS4_2024Content.seo.primaryKeyword,
    ...ktuItS4_2024Content.seo.secondaryKeywords,
    ...(ktuItS4_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it/s4",
});

export default function KtuItS4_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuItS4_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
        { name: "S4", url: "/ktu/2024-scheme/it/s4" },
      ]}
    />
  );
}
