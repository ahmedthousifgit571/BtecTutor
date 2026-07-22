import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS3_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS3_2024Content.seo.title,
  description: ktuCivilS3_2024Content.seo.description,
  keywords: [
    ktuCivilS3_2024Content.seo.primaryKeyword,
    ...ktuCivilS3_2024Content.seo.secondaryKeywords,
    ...(ktuCivilS3_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/civil/s3",
});

export default function KtuCivilS3_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS3_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Civil", url: "/ktu/2024-scheme/civil" },
        { name: "S3", url: "/ktu/2024-scheme/civil/s3" },
      ]}
    />
  );
}
