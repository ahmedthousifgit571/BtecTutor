import type { Metadata } from "next";
import { KtuSupplyExamPage } from "@/components/sections/KtuSupplyExamPage";
import { ktuTimetableContent } from "@/lib/content/ktu-timetable";
import { generateMeta } from "@/lib/seo";

export const metadata: Metadata = generateMeta({
  title: ktuTimetableContent.seo.title,
  description: ktuTimetableContent.seo.description,
  keywords: [
    ktuTimetableContent.seo.primaryKeyword,
    ...ktuTimetableContent.seo.secondaryKeywords,
    ...(ktuTimetableContent.seo.lsiKeywords ?? []),
  ],
  canonicalUrl: "/ktu/exam-timetable",
});

export default function KtuTimetableLandingPage() {
  return (
    <KtuSupplyExamPage
      content={ktuTimetableContent}
      breadcrumbLabel="Exam Timetable"
      breadcrumbUrl="/ktu/exam-timetable"
    />
  );
}
