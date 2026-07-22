import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS2_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS2_2024Content.seo.title,
  description: ktuEeeS2_2024Content.seo.description,
  keywords: [
    ktuEeeS2_2024Content.seo.primaryKeyword,
    ...ktuEeeS2_2024Content.seo.secondaryKeywords,
    ...(ktuEeeS2_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/eee/s2",
});

export default function KtuEeeS2_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS2_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "EEE", url: "/ktu/2024-scheme/eee" },
        { name: "S2", url: "/ktu/2024-scheme/eee/s2" },
      ]}
    />
  );
}
