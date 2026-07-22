import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuEce2024Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuEce2024Content.seo.title,
  description: ktuEce2024Content.seo.description,
  keywords: [
    ktuEce2024Content.seo.primaryKeyword,
    ...ktuEce2024Content.seo.secondaryKeywords,
    ...(ktuEce2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/ece",
});

export default function KtuEce2024Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuEce2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "ECE", url: "/ktu/2024-scheme/ece" },
      ]}
    />
  );
}
