import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS5_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS5_2019Content.seo.title,
  description: ktuEeeS5_2019Content.seo.description,
  keywords: [
    ktuEeeS5_2019Content.seo.primaryKeyword,
    ...ktuEeeS5_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS5_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s5",
});

export default function KtuEeeS5Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS5_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S5", url: "/ktu/2019-scheme/eee/s5" },
      ]}
    />
  );
}
