import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS6_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS6_2024Content.seo.title,
  description: ktuItS6_2024Content.seo.description,
  keywords: [
    ktuItS6_2024Content.seo.primaryKeyword,
    ...ktuItS6_2024Content.seo.secondaryKeywords,
    ...(ktuItS6_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it/s6",
});

export default function KtuItS6_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuItS6_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
        { name: "S6", url: "/ktu/2024-scheme/it/s6" },
      ]}
    />
  );
}
