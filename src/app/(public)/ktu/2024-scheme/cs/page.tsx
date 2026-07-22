import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuCs2024Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCs2024Content.seo.title,
  description: ktuCs2024Content.seo.description,
  keywords: [
    ktuCs2024Content.seo.primaryKeyword,
    ...ktuCs2024Content.seo.secondaryKeywords,
    ...(ktuCs2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/cs",
});

export default function KtuCs2024Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuCs2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "CS", url: "/ktu/2024-scheme/cs" },
      ]}
    />
  );
}
