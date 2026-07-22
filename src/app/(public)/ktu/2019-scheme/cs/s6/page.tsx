import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS6_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS6_2019Content.seo.title,
  description: ktuCsS6_2019Content.seo.description,
  keywords: [
    ktuCsS6_2019Content.seo.primaryKeyword,
    ...ktuCsS6_2019Content.seo.secondaryKeywords,
    ...(ktuCsS6_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs/s6",
});

export default function KtuCsS6Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS6_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
        { name: "S6", url: "/ktu/2019-scheme/cs/s6" },
      ]}
    />
  );
}
