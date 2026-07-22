import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuEceS3_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEceS3_2024Content.seo.title,
  description: ktuEceS3_2024Content.seo.description,
  keywords: [
    ktuEceS3_2024Content.seo.primaryKeyword,
    ...ktuEceS3_2024Content.seo.secondaryKeywords,
    ...(ktuEceS3_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/ece/s3",
});

export default function KtuEceS3_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuEceS3_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "ECE", url: "/ktu/2024-scheme/ece" },
        { name: "S3", url: "/ktu/2024-scheme/ece/s3" },
      ]}
    />
  );
}
