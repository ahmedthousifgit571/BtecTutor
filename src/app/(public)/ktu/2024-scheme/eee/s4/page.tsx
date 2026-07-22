import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS4_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS4_2024Content.seo.title,
  description: ktuEeeS4_2024Content.seo.description,
  keywords: [
    ktuEeeS4_2024Content.seo.primaryKeyword,
    ...ktuEeeS4_2024Content.seo.secondaryKeywords,
    ...(ktuEeeS4_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/eee/s4",
});

export default function KtuEeeS4_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS4_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "EEE", url: "/ktu/2024-scheme/eee" },
        { name: "S4", url: "/ktu/2024-scheme/eee/s4" },
      ]}
    />
  );
}
