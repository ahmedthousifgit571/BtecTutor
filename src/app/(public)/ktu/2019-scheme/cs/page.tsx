import type { Metadata } from "next";
import { KtuDepartmentHubPage } from "@/components/sections/KtuDepartmentHubPage";
import { ktuCs2019Content } from "@/lib/content/ktu-department-hub";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuCs2019Content.seo.title,
  description: ktuCs2019Content.seo.description,
  keywords: [
    ktuCs2019Content.seo.primaryKeyword,
    ...ktuCs2019Content.seo.secondaryKeywords,
    ...(ktuCs2019Content.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/2019-scheme/cs",
});

export default function KtuCs2019Page() {
  return (
    <KtuDepartmentHubPage
      content={ktuCs2019Content}
      breadcrumbItems={[
        { name: "KTU", url: "/ktu" },
        { name: "2019 Scheme", url: "/ktu/2019" },
        { name: "CS", url: "/ktu/2019-scheme/cs" },
      ]}
    />
  );
}
