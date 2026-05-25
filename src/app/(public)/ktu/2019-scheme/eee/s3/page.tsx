import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEeeS3_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEeeS3_2019Content.seo.title,
  description: ktuEeeS3_2019Content.seo.description,
  keywords: [
    ktuEeeS3_2019Content.seo.primaryKeyword,
    ...ktuEeeS3_2019Content.seo.secondaryKeywords,
    ...(ktuEeeS3_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/eee/s3",
});

export default function KtuEeeS3Page() {
  return (
    <KtuSemesterPage
      content={ktuEeeS3_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "EEE", url: "/ktu/2019-scheme/eee" },
        { name: "S3", url: "/ktu/2019-scheme/eee/s3" },
      ]}
    />
  );
}
