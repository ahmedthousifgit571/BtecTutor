import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuCivil2024Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivil2024Content.seo.title,
  description: ktuCivil2024Content.seo.description,
  keywords: [
    ktuCivil2024Content.seo.primaryKeyword,
    ...ktuCivil2024Content.seo.secondaryKeywords,
    ...(ktuCivil2024Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2024-scheme/civil",
});

export default function KtuCivil2024Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuCivil2024Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2024 Scheme", url: "/ktu/2024" },
        { name: "Civil", url: "/ktu/2024-scheme/civil" },
      ]}
    />
  );
}
