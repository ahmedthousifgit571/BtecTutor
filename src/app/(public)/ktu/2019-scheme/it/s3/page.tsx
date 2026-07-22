import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS3_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS3_2019Content.seo.title,
  description: ktuItS3_2019Content.seo.description,
  keywords: [
    ktuItS3_2019Content.seo.primaryKeyword,
    ...ktuItS3_2019Content.seo.secondaryKeywords,
    ...(ktuItS3_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/it/s3",
});

export default function KtuItS3Page() {
  return (
    <KtuSemesterPage
      content={ktuItS3_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "IT", url: "/ktu/2019-scheme/it" },
        { name: "S3", url: "/ktu/2019-scheme/it/s3" },
      ]}
    />
  );
}
