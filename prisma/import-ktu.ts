/**
 * One-off / re-runnable importer for KTU subject data.
 *
 * Reads `public/KTU_2019_Subject_Pages - Btechtutor.xlsx` (only the
 * "KTU 2019 Subject Pages" sheet; the "Instructions" and "Summary" sheets are
 * ignored) and upserts Course + Subject rows.
 *
 * Run with: npm run db:import-ktu
 */
import path from "path";
import * as XLSX from "xlsx";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

const WORKBOOK = path.join(
  process.cwd(),
  "public",
  "KTU_2019_Subject_Pages - Btechtutor.xlsx"
);
const SHEET = "KTU 2019 Subject Pages";

interface Row {
  Scheme: string;
  Branch: string;
  "Branch Name": string;
  Semester: string;
  "Subject Code": string;
  "Subject Name": string;
  "Key Topics": string;
  "Page URL": string;
  "Meta Title": string;
  "Meta Description": string;
}

function parseSemester(value: string): number | null {
  const match = String(value).match(/\d+/);
  return match ? parseInt(match[0], 10) : null;
}

async function main() {
  const workbook = XLSX.readFile(WORKBOOK);
  const sheet = workbook.Sheets[SHEET];
  if (!sheet) {
    throw new Error(`Sheet "${SHEET}" not found in ${WORKBOOK}`);
  }

  const rows = XLSX.utils.sheet_to_json<Row>(sheet, { defval: "" });
  console.log(`Read ${rows.length} rows from "${SHEET}".`);

  // Cache courses so we only upsert each (scheme+branch) once.
  const courseIdByKey = new Map<string, string>();
  let courseCount = 0;
  let subjectCount = 0;

  for (const row of rows) {
    const scheme = String(row.Scheme).trim(); // "2019-scheme"
    const branch = String(row.Branch).trim().toLowerCase(); // "eee"
    const branchName = String(row["Branch Name"]).trim() || branch.toUpperCase();
    const code = String(row["Subject Code"]).trim(); // "MAT101"
    const name = String(row["Subject Name"]).trim();

    if (!scheme || !branch || !code || !name) {
      console.warn("Skipping incomplete row:", row);
      continue;
    }

    const courseKey = `${scheme}::${branch}`;
    let courseId = courseIdByKey.get(courseKey);

    if (!courseId) {
      const courseSlug = `ktu-${scheme}-${branch}`; // ktu-2019-scheme-eee
      const course = await prisma.course.upsert({
        where: { slug: courseSlug },
        update: {
          scheme,
          branch,
          department: branch,
          title: `${branchName} — KTU ${scheme}`,
        },
        create: {
          slug: courseSlug,
          scheme,
          branch,
          department: branch,
          title: `${branchName} — KTU ${scheme}`,
        },
        select: { id: true },
      });
      courseId = course.id;
      courseIdByKey.set(courseKey, courseId);
      courseCount++;
    }

    const subjectSlug = code.toLowerCase(); // "mat101"
    await prisma.subject.upsert({
      where: { courseId_slug: { courseId, slug: subjectSlug } },
      update: {
        title: name,
        code,
        keyTopics: String(row["Key Topics"]).trim() || null,
        semester: parseSemester(row.Semester),
        seoTitle: String(row["Meta Title"]).trim() || null,
        seoDesc: String(row["Meta Description"]).trim() || null,
      },
      create: {
        courseId,
        slug: subjectSlug,
        title: name,
        code,
        keyTopics: String(row["Key Topics"]).trim() || null,
        semester: parseSemester(row.Semester),
        seoTitle: String(row["Meta Title"]).trim() || null,
        seoDesc: String(row["Meta Description"]).trim() || null,
      },
    });
    subjectCount++;
  }

  console.log(
    `Done. Upserted ${courseCount} course(s) and ${subjectCount} subject(s).`
  );
}

main()
  .catch((err) => {
    console.error(err);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
