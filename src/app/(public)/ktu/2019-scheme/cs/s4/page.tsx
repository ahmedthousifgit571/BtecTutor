import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS4_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS4_2019Content.seo.title,
  description: ktuCsS4_2019Content.seo.description,
  keywords: [
    ktuCsS4_2019Content.seo.primaryKeyword,
    ...ktuCsS4_2019Content.seo.secondaryKeywords,
    ...(ktuCsS4_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs/s4",
});

export default function KtuCsS4Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS4_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
        { name: "S4", url: "/ktu/2019-scheme/cs/s4" },
      ]}
    />
  );
}
