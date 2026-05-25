import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuEce2019Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEce2019Content.seo.title,
  description: ktuEce2019Content.seo.description,
  keywords: [
    ktuEce2019Content.seo.primaryKeyword,
    ...ktuEce2019Content.seo.secondaryKeywords,
    ...(ktuEce2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/ece",
});

export default function KtuEce2019Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuEce2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "ECE", url: "/ktu/2019-scheme/ece" },
      ]}
    />
  );
}
