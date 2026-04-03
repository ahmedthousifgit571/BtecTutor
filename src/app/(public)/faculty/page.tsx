import type { Metadata } from "next";
import { User } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { Badge } from "@/components/ui/Badge";

export const metadata: Metadata = generateMeta({
  title: "Our Faculty — Expert GATE & KTU Coaches",
  description:
    "Meet the expert faculty at BTEC Tutor. GATE-qualified professors with decades of teaching experience dedicated to your success.",
  canonicalUrl: "/faculty",
});

export default async function FacultyPage() {
  const faculty = await prisma.faculty
    .findMany({ orderBy: { sortOrder: "asc" } })
    .catch(() => []);

  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Faculty", url: "/faculty" }]} className="mb-8" />

        <div className="max-w-3xl mb-16">
          <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
            Our <span className="gradient-text-dark">Faculty</span>
          </h1>
          <p className="text-lg text-gray-500">
            Learn from the best. Our faculty members are GATE-qualified
            professionals with extensive industry and teaching experience.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faculty.map((member) => (
            <div
              key={member.id}
              className="rounded-2xl border border-gray-100 bg-white overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="h-48 bg-gradient-to-br from-brand-orange/10 to-brand-sky/10 flex items-center justify-center">
                {member.photo ? (
                  // eslint-disable-next-line @next/next/no-img-element
                  <img
                    src={member.photo}
                    alt={member.name}
                    className="h-full w-full object-cover"
                  />
                ) : (
                  <User className="h-16 w-16 text-brand-orange/30" />
                )}
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900">{member.name}</h3>
                {member.specialization && (
                  <Badge variant="violet" className="mt-2 !bg-brand-orange/10 !text-brand-orange">
                    {member.specialization}
                  </Badge>
                )}
                {member.bio && (
                  <p className="mt-3 text-sm text-gray-500 leading-relaxed">
                    {member.bio}
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
