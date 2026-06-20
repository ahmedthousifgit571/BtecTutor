import { prisma } from "@/lib/prisma";
import { KtuNotesManager } from "@/components/admin/KtuNotesManager";
import type { KtuSubjectLite } from "@/components/admin/KtuNotesRow";
import { parseNotesFiles } from "@/lib/ktu-types";

export const dynamic = "force-dynamic";

export default async function KtuNotesAdminPage() {
  const subjects = await prisma.subject.findMany({
    where: { course: { scheme: { not: null } } },
    include: { course: { select: { scheme: true, branch: true } } },
    orderBy: [{ semester: "asc" }, { code: "asc" }],
  });

  const data: KtuSubjectLite[] = subjects.map((s) => ({
    id: s.id,
    code: s.code,
    title: s.title,
    semester: s.semester,
    branch: s.course.branch,
    scheme: s.course.scheme,
    notesFiles: parseNotesFiles(s.notesFiles),
    questionPaperUrl: s.questionPaperUrl,
    syllabusFileUrl: s.syllabusFileUrl,
  }));

  return (
    <div>
      <div className="mb-6">
        <h1 className="text-2xl font-bold tracking-tight text-gray-900">KTU Notes</h1>
        <p className="mt-1 text-sm text-gray-500">
          Upload Notes, Question Papers, and Syllabus (PDF) for each subject.
        </p>
      </div>
      <KtuNotesManager subjects={data} />
    </div>
  );
}
