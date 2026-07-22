import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS2_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS2_2019Content.seo.title,
  description: ktuCsS2_2019Content.seo.description,
  keywords: [
    ktuCsS2_2019Content.seo.primaryKeyword,
    ...ktuCsS2_2019Content.seo.secondaryKeywords,
    ...(ktuCsS2_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs/s2",
});

export default function KtuCsS2Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS2_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
        { name: "S2", url: "/ktu/2019-scheme/cs/s2" },
      ]}
    />
  );
}
