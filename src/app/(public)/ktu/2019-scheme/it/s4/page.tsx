import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS4_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS4_2019Content.seo.title,
  description: ktuItS4_2019Content.seo.description,
  keywords: [
    ktuItS4_2019Content.seo.primaryKeyword,
    ...ktuItS4_2019Content.seo.secondaryKeywords,
    ...(ktuItS4_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it/s4",
});

export default function KtuItS4Page() {
  return (
    <KtuSemesterPage
      content={ktuItS4_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
        { name: "S4", url: "/ktu/2019-scheme/it/s4" },
      ]}
    />
  );
}
