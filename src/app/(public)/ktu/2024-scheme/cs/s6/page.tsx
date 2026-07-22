import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS6_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS6_2024Content.seo.title,
  description: ktuCsS6_2024Content.seo.description,
  keywords: [
    ktuCsS6_2024Content.seo.primaryKeyword,
    ...ktuCsS6_2024Content.seo.secondaryKeywords,
    ...(ktuCsS6_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/cs/s6",
});

export default function KtuCsS6_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS6_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "CS", url: "/ktu/2024-scheme/cs" },
        { name: "S6", url: "/ktu/2024-scheme/cs/s6" },
      ]}
    />
  );
}
