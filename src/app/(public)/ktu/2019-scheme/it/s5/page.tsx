import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS5_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS5_2019Content.seo.title,
  description: ktuItS5_2019Content.seo.description,
  keywords: [
    ktuItS5_2019Content.seo.primaryKeyword,
    ...ktuItS5_2019Content.seo.secondaryKeywords,
    ...(ktuItS5_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it/s5",
});

export default function KtuItS5Page() {
  return (
    <KtuSemesterPage
      content={ktuItS5_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
        { name: "S5", url: "/ktu/2019-scheme/it/s5" },
      ]}
    />
  );
}
