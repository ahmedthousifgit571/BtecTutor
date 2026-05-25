import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS3_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS3_2019Content.seo.title,
  description: ktuEceS3_2019Content.seo.description,
  keywords: [
    ktuEceS3_2019Content.seo.primaryKeyword,
    ...ktuEceS3_2019Content.seo.secondaryKeywords,
    ...(ktuEceS3_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece/s3",
});

export default function KtuEceS3Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS3_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
        { name: "S3", url: "/ktu/2019-scheme/ece/s3" },
      ]}
    />
  );
}
