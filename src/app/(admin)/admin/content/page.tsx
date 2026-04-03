import Link from "next/link";
import { prisma } from "@/lib/prisma";
import { FileText, ExternalLink } from "lucide-react";

export default async function ContentPage() {
  const courses = await prisma.course.findMany({
    include: { subjects: { orderBy: { semester: "asc" } } },
    orderBy: { title: "asc" },
  });

  return (
    <div>
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Content CMS</h1>
      </div>

      <div className="space-y-6">
        {courses.map((course) => (
          <div key={course.id} className="rounded-xl border border-gray-100 bg-white">
            <div className="p-5 border-b border-gray-100">
              <h2 className="text-lg font-semibold text-gray-900">{course.title}</h2>
              <p className="text-sm text-gray-400">{course.slug}</p>
            </div>
            <div className="divide-y divide-gray-50">
              {course.subjects.map((subject) => (
                <div key={subject.id} className="p-4 flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <FileText className="h-4 w-4 text-gray-400" />
                    <div>
                      <p className="text-sm font-medium text-gray-900">{subject.title}</p>
                      <p className="text-xs text-gray-400">/{subject.slug}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    {subject.semester && (
                      <span className="text-xs bg-brand-orange/10 text-brand-orange rounded-full px-2 py-0.5">
                        Sem {subject.semester}
                      </span>
                    )}
                    <Link
                      href={`/gate-coaching/${course.branch}/${subject.slug}`}
                      className="text-xs text-gray-400 hover:text-brand-orange"
                    >
                      <ExternalLink className="h-3.5 w-3.5" />
                    </Link>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
