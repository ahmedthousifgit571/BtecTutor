import type { Metadata } from "next";
import { KtuSemesterPage } from "@/components/sections/KtuSemesterPage";
import { ktuItS3_2024Content } from "@/lib/content/ktu-semester";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuItS3_2024Content.seo.title,
  description: ktuItS3_2024Content.seo.description,
  keywords: [
    ktuItS3_2024Content.seo.primaryKeyword,
    ...ktuItS3_2024Content.seo.secondaryKeywords,
    ...(ktuItS3_2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/it/s3",
});

export default function KtuItS3_2024Page() {
  return (
    <KtuSemesterPage
      content={ktuItS3_2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "IT", url: "/ktu/2024-scheme/it" },
        { name: "S3", url: "/ktu/2024-scheme/it/s3" },
      ]}
    />
  );
}
