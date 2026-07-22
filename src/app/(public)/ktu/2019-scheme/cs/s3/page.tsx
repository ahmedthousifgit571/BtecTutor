import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuCsS3_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCsS3_2019Content.seo.title,
  description: ktuCsS3_2019Content.seo.description,
  keywords: [
    ktuCsS3_2019Content.seo.primaryKeyword,
    ...ktuCsS3_2019Content.seo.secondaryKeywords,
    ...(ktuCsS3_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs/s3",
});

export default function KtuCsS3Page() {
  return (
    <KtuSemesterPage
      content={ktuCsS3_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
        { name: "S3", url: "/ktu/2019-scheme/cs/s3" },
      ]}
    />
  );
}
