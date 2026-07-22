import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuCivil2019Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCivil2019Content.seo.title,
  description: ktuCivil2019Content.seo.description,
  keywords: [
    ktuCivil2019Content.seo.primaryKeyword,
    ...ktuCivil2019Content.seo.secondaryKeywords,
    ...(ktuCivil2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/civil",
});

export default function KtuCivil2019Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuCivil2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "Civil", url: "/ktu/2019-scheme/civil" },
      ]}
    />
  );
}
