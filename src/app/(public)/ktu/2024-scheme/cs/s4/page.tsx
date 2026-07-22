import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS4_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS4_2024Content.seo.title,
  description: ktuCsS4_2024Content.seo.description,
  keywords: [
    ktuCsS4_2024Content.seo.primaryKeyword,
    ...ktuCsS4_2024Content.seo.secondaryKeywords,
    ...(ktuCsS4_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/cs/s4",
});

export default function KtuCsS4_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS4_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "CS", url: "/ktu/2024-scheme/cs" },
        { name: "S4", url: "/ktu/2024-scheme/cs/s4" },
      ]}
    />
  );
}
