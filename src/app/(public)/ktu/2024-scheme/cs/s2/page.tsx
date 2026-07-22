import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS2_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS2_2024Content.seo.title,
  description: ktuCsS2_2024Content.seo.description,
  keywords: [
    ktuCsS2_2024Content.seo.primaryKeyword,
    ...ktuCsS2_2024Content.seo.secondaryKeywords,
    ...(ktuCsS2_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/cs/s2",
});

export default function KtuCsS2_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS2_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "CS", url: "/ktu/2024-scheme/cs" },
        { name: "S2", url: "/ktu/2024-scheme/cs/s2" },
      ]}
    />
  );
}
