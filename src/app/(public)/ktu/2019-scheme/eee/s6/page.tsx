import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS6_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS6_2019Content.seo.title,
  description: ktuEeeS6_2019Content.seo.description,
  keywords: [
    ktuEeeS6_2019Content.seo.primaryKeyword,
    ...ktuEeeS6_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS6_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s6",
});

export default function KtuEeeS6Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS6_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S6", url: "/ktu/2019-scheme/eee/s6" },
      ]}
    />
  );
}
