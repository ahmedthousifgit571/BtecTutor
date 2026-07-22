import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS6_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS6_2019Content.seo.title,
  description: ktuItS6_2019Content.seo.description,
  keywords: [
    ktuItS6_2019Content.seo.primaryKeyword,
    ...ktuItS6_2019Content.seo.secondaryKeywords,
    ...(ktuItS6_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it/s6",
});

export default function KtuItS6Page() {
  return (
    <KtuSemesterPage
      content={ktuItS6_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
        { name: "S6", url: "/ktu/2019-scheme/it/s6" },
      ]}
    />
  );
}
