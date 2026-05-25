import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuMechanicalS3_2019Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuMechanicalS3_2019Content.seo.title,
  description: ktuMechanicalS3_2019Content.seo.description,
  keywords: [
    ktuMechanicalS3_2019Content.seo.primaryKeyword,
    ...ktuMechanicalS3_2019Content.seo.secondaryKeywords,
    ...(ktuMechanicalS3_2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/mechanical/s3",
});

export default function KtuMechanicalS3Page() {
  return (
    <KtuSemesterPage
      content={ktuMechanicalS3_2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Mechanical", url: "/ktu/2019-scheme/mechanical" },
        { name: "S3", url: "/ktu/2019-scheme/mechanical/s3" },
      ]}
    />
  );
}
