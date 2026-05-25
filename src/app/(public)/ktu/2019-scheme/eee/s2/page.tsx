import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS2_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS2_2019Content.seo.title,
  description: ktuEeeS2_2019Content.seo.description,
  keywords: [
    ktuEeeS2_2019Content.seo.primaryKeyword,
    ...ktuEeeS2_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS2_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s2",
});

export default function KtuEeeS2Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS2_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S2", url: "/ktu/2019-scheme/eee/s2" },
      ]}
    />
  );
}
