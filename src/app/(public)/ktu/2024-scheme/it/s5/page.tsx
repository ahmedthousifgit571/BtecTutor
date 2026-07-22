import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS5_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS5_2024Content.seo.title,
  description: ktuItS5_2024Content.seo.description,
  keywords: [
    ktuItS5_2024Content.seo.primaryKeyword,
    ...ktuItS5_2024Content.seo.secondaryKeywords,
    ...(ktuItS5_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it/s5",
});

export default function KtuItS5_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuItS5_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
        { name: "S5", url: "/ktu/2024-scheme/it/s5" },
      ]}
    />
  );
}
