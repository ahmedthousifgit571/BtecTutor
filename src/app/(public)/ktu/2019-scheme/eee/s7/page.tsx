import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS7_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS7_2019Content.seo.title,
  description: ktuEeeS7_2019Content.seo.description,
  keywords: [
    ktuEeeS7_2019Content.seo.primaryKeyword,
    ...ktuEeeS7_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS7_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s7",
});

export default function KtuEeeS7Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS7_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S7", url: "/ktu/2019-scheme/eee/s7" },
      ]}
    />
  );
}
