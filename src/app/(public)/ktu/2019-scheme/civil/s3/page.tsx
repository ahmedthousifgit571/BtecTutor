import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCivilS3_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivilS3_2019Content.seo.title,
  description: ktuCivilS3_2019Content.seo.description,
  keywords: [
    ktuCivilS3_2019Content.seo.primaryKeyword,
    ...ktuCivilS3_2019Content.seo.secondaryKeywords,
    ...(ktuCivilS3_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil/s3",
});

export default function KtuCivilS3Page() {
  return (
    <KtuSemesterPage
      content={ktuCivilS3_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
        { name: "S3", url: "/ktu/2019-scheme/civil/s3" },
      ]}
    />
  );
}
