import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS4_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS4_2019Content.seo.title,
  description: ktuEeeS4_2019Content.seo.description,
  keywords: [
    ktuEeeS4_2019Content.seo.primaryKeyword,
    ...ktuEeeS4_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS4_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s4",
});

export default function KtuEeeS4Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS4_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S4", url: "/ktu/2019-scheme/eee/s4" },
      ]}
    />
  );
}
