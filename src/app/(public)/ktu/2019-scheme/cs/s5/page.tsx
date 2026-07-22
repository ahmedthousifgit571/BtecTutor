import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS5_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS5_2019Content.seo.title,
  description: ktuCsS5_2019Content.seo.description,
  keywords: [
    ktuCsS5_2019Content.seo.primaryKeyword,
    ...ktuCsS5_2019Content.seo.secondaryKeywords,
    ...(ktuCsS5_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs/s5",
});

export default function KtuCsS5Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS5_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
        { name: "S5", url: "/ktu/2019-scheme/cs/s5" },
      ]}
    />
  );
}
