import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS8_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS8_2019Content.seo.title,
  description: ktuEeeS8_2019Content.seo.description,
  keywords: [
    ktuEeeS8_2019Content.seo.primaryKeyword,
    ...ktuEeeS8_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS8_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s8",
});

export default function KtuEeeS8Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS8_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S8", url: "/ktu/2019-scheme/eee/s8" },
      ]}
    />
  );
}
