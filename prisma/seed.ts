import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

function buildFaqs(subjectTitle: string) {
  return [
    {
      question: `What is ${subjectTitle}?`,
      answer: `${subjectTitle} is a core engineering subject covering fundamental concepts, theories, and practical applications essential for GATE and KTU examinations.`,
    },
    {
      question: `Is ${subjectTitle} important for GATE?`,
      answer: `Yes, ${subjectTitle} carries significant weightage in GATE. Questions from this subject appear regularly and mastering it can significantly boost your score.`,
    },
    {
      question: `How to prepare ${subjectTitle} for KTU exams?`,
      answer: `Focus on understanding core concepts, practice previous year questions, solve numerical problems, and use our structured notes and video lectures for comprehensive preparation.`,
    },
    {
      question: `What are the best books for ${subjectTitle}?`,
      answer: `We recommend standard textbooks along with our curated study materials. Our notes are specifically designed to cover the KTU and GATE syllabus comprehensively.`,
    },
    {
      question: `Are mock tests available for ${subjectTitle}?`,
      answer: `Yes, we provide chapter-wise and full-length mock tests for ${subjectTitle}. These tests are designed to simulate the actual exam pattern and difficulty level.`,
    },
  ];
}

function buildSyllabus(subjectTitle: string) {
  return {
    units: [
      {
        title: "Unit 1: Introduction & Fundamentals",
        topics: [
          `Introduction to ${subjectTitle}`,
          "Basic concepts and definitions",
          "Historical background and applications",
          "Mathematical foundations",
        ],
      },
      {
        title: "Unit 2: Core Principles",
        topics: [
          "Fundamental theorems",
          "Analysis techniques",
          "Problem-solving methodologies",
          "Standard procedures",
        ],
      },
      {
        title: "Unit 3: Advanced Concepts",
        topics: [
          "Advanced analysis",
          "Design methodologies",
          "Optimization techniques",
          "Modern applications",
        ],
      },
      {
        title: "Unit 4: Applications & Practice",
        topics: [
          "Real-world applications",
          "Case studies",
          "Industry practices",
          "Emerging trends",
        ],
      },
    ],
  };
}

const gateBranches = [
  {
    branch: "ece",
    title: "GATE ECE Coaching",
    description:
      "Comprehensive GATE Electronics and Communication Engineering coaching with expert faculty, detailed study materials, and mock tests.",
    subjects: [
      {
        title: "Network Theory",
        slug: "network-theory",
        semester: 3,
      },
      {
        title: "Signals and Systems",
        slug: "signals-and-systems",
        semester: 4,
      },
      {
        title: "Digital Electronics",
        slug: "digital-electronics",
        semester: 3,
      },
    ],
  },
  {
    branch: "eee",
    title: "GATE EEE Coaching",
    description:
      "Expert GATE Electrical and Electronics Engineering coaching covering all topics with structured study plans and practice tests.",
    subjects: [
      {
        title: "Electric Circuits",
        slug: "electric-circuits",
        semester: 3,
      },
      {
        title: "Power Systems",
        slug: "power-systems",
        semester: 5,
      },
      {
        title: "Control Systems",
        slug: "control-systems",
        semester: 5,
      },
    ],
  },
  {
    branch: "instrumentation",
    title: "GATE Instrumentation Coaching",
    description:
      "Focused GATE Instrumentation Engineering coaching with experienced faculty and comprehensive question banks.",
    subjects: [
      {
        title: "Transducers",
        slug: "transducers",
        semester: 4,
      },
      {
        title: "Process Control",
        slug: "process-control",
        semester: 6,
      },
      {
        title: "Analog Electronics",
        slug: "analog-electronics",
        semester: 3,
      },
    ],
  },
];

const ktuDepartments = [
  {
    department: "computer-science",
    title: "Computer Science & Engineering",
    subjects: [
      {
        title: "Data Structures",
        slug: "data-structures",
        semester: 3,
      },
      {
        title: "Operating Systems",
        slug: "operating-systems",
        semester: 5,
      },
      {
        title: "Database Management Systems",
        slug: "database-management-systems",
        semester: 5,
      },
    ],
  },
  {
    department: "mechanical",
    title: "Mechanical Engineering",
    subjects: [
      {
        title: "Thermodynamics",
        slug: "thermodynamics",
        semester: 3,
      },
      {
        title: "Fluid Mechanics",
        slug: "fluid-mechanics",
        semester: 4,
      },
      {
        title: "Machine Design",
        slug: "machine-design",
        semester: 6,
      },
    ],
  },
  {
    department: "civil",
    title: "Civil Engineering",
    subjects: [
      {
        title: "Structural Analysis",
        slug: "structural-analysis",
        semester: 5,
      },
      {
        title: "Geotechnical Engineering",
        slug: "geotechnical-engineering",
        semester: 5,
      },
      {
        title: "Surveying",
        slug: "surveying",
        semester: 3,
      },
    ],
  },
];

const blogPosts = [
  {
    title: "How to Crack GATE 2025: A Complete Strategy Guide",
    slug: "how-to-crack-gate-2025-strategy-guide",
    excerpt:
      "A comprehensive guide covering preparation strategies, time management, and key tips for cracking GATE examination.",
    tags: ["GATE", "Strategy", "Preparation"],
    author: "Dr. Rajesh Kumar",
  },
  {
    title: "KTU 2024 Scheme: Everything You Need to Know",
    slug: "ktu-2024-scheme-everything-you-need-to-know",
    excerpt:
      "Complete breakdown of the KTU 2024 scheme changes, new subjects, and how to prepare effectively.",
    tags: ["KTU", "2024 Scheme", "Updates"],
    author: "Prof. Anil Menon",
  },
  {
    title: "Top 10 Mistakes Students Make in GATE Preparation",
    slug: "top-10-mistakes-gate-preparation",
    excerpt:
      "Avoid these common pitfalls during GATE preparation to maximize your score and rank.",
    tags: ["GATE", "Tips", "Common Mistakes"],
    author: "Dr. Rajesh Kumar",
  },
  {
    title: "Best Study Resources for KTU Engineering Students",
    slug: "best-study-resources-ktu-engineering",
    excerpt:
      "Curated list of the best textbooks, online resources, and study materials for KTU students.",
    tags: ["KTU", "Resources", "Study Materials"],
    author: "Prof. Lakshmi Nair",
  },
  {
    title: "Understanding the GATE Exam Pattern and Marking Scheme",
    slug: "understanding-gate-exam-pattern-marking-scheme",
    excerpt:
      "Detailed explanation of the GATE exam structure, question types, marking scheme, and how to approach each section.",
    tags: ["GATE", "Exam Pattern", "Guide"],
    author: "Dr. Rajesh Kumar",
  },
];

const locations = [
  {
    city: "Kochi",
    slug: "kochi",
    seoTitle: "Best GATE & KTU Coaching in Kochi | BTEC Tutor",
    seoDesc:
      "Join Kerala's top-rated GATE and KTU coaching center in Kochi. Expert faculty, proven results, and comprehensive study materials.",
  },
  {
    city: "Trivandrum",
    slug: "trivandrum",
    seoTitle: "Best GATE & KTU Coaching in Trivandrum | BTEC Tutor",
    seoDesc:
      "Premier GATE and KTU coaching institute in Trivandrum. Start your preparation with experienced faculty and structured programs.",
  },
  {
    city: "Calicut",
    slug: "calicut",
    seoTitle: "Best GATE & KTU Coaching in Calicut | BTEC Tutor",
    seoDesc:
      "Top-quality GATE and KTU coaching classes in Calicut. Personalized attention, mock tests, and guaranteed improvement.",
  },
];

const reviews = [
  { name: "Akhil Menon", rating: 5, content: "Best coaching center in Kerala for GATE preparation. The faculty explains concepts so clearly that even the toughest topics become easy.", course: "GATE ECE" },
  { name: "Sreelakshmi R", rating: 5, content: "Joined for KTU semester coaching and my grades improved dramatically. The notes and PYQ solutions were invaluable.", course: "KTU CSE" },
  { name: "Mohammed Faisal", rating: 4, content: "Great study materials and mock tests. The online platform is well-organized and easy to use.", course: "GATE EEE" },
  { name: "Anjali Krishnan", rating: 5, content: "The faculty at BTEC Tutor are genuinely passionate about teaching. Got AIR under 500 in GATE thanks to their guidance.", course: "GATE ECE" },
  { name: "Vishnu Prasad", rating: 5, content: "Excellent coaching for instrumentation. The practical approach to problem-solving sets BTEC apart from other institutes.", course: "GATE Instrumentation" },
  { name: "Divya Nair", rating: 4, content: "Very helpful for KTU 2024 scheme preparation. The syllabus-wise notes saved me during exam time.", course: "KTU ME" },
  { name: "Arjun Raj", rating: 5, content: "Mock tests are very close to the actual GATE pattern. The detailed solutions helped me understand my weak areas.", course: "GATE ECE" },
  { name: "Pooja Suresh", rating: 5, content: "Best investment I made for my engineering career. The confidence I gained here helped me crack GATE with a great score.", course: "GATE EEE" },
  { name: "Rahul Krishnan", rating: 4, content: "Good faculty, well-structured course material, and regular doubt-clearing sessions. Highly recommended for GATE aspirants.", course: "GATE Instrumentation" },
  { name: "Meera Thomas", rating: 5, content: "The PYQ analysis sessions were incredibly helpful. Faculty breaks down each question and teaches the approach, not just the answer.", course: "KTU CE" },
];

const facultyMembers = [
  {
    name: "Dr. Rajesh Kumar",
    bio: "Ph.D. in Electronics Engineering with 15+ years of teaching experience. Specializes in Network Theory and Signals & Systems. Former GATE topper with AIR 12.",
    specialization: "Electronics & Communication",
    sortOrder: 1,
  },
  {
    name: "Prof. Anil Menon",
    bio: "M.Tech from IIT Madras with 12 years of coaching experience. Expert in Power Systems and Control Systems. Has mentored 500+ students who cleared GATE.",
    specialization: "Electrical Engineering",
    sortOrder: 2,
  },
  {
    name: "Prof. Lakshmi Nair",
    bio: "M.Tech in Instrumentation with 10 years of teaching experience. Known for making complex concepts simple. Published 20+ research papers.",
    specialization: "Instrumentation Engineering",
    sortOrder: 3,
  },
];

async function main() {
  console.log("Seeding database...");

  // Clear existing data
  await prisma.mockTest.deleteMany();
  await prisma.subject.deleteMany();
  await prisma.course.deleteMany();
  await prisma.blogPost.deleteMany();
  await prisma.locationPage.deleteMany();
  await prisma.review.deleteMany();
  await prisma.faculty.deleteMany();
  await prisma.enquiry.deleteMany();

  // Seed GATE courses and subjects
  for (const branch of gateBranches) {
    const course = await prisma.course.create({
      data: {
        title: branch.title,
        slug: `gate-${branch.branch}`,
        branch: branch.branch,
        description: branch.description,
        seoTitle: `${branch.title} | BTEC Tutor Kerala`,
        seoDesc: branch.description,
        seoKeywords: [
          `GATE ${branch.branch.toUpperCase()} coaching`,
          `GATE ${branch.branch.toUpperCase()} Kerala`,
          "GATE preparation",
        ],
      },
    });

    for (const subject of branch.subjects) {
      await prisma.subject.create({
        data: {
          courseId: course.id,
          title: subject.title,
          slug: subject.slug,
          semester: subject.semester,
          syllabus: buildSyllabus(subject.title),
          faqs: buildFaqs(subject.title),
          pyqs: {
            years: [
              { year: 2024, pdfUrl: "#", questionCount: 15 },
              { year: 2023, pdfUrl: "#", questionCount: 12 },
              { year: 2022, pdfUrl: "#", questionCount: 14 },
            ],
          },
          videoLinks: {
            lectures: [
              { title: `${subject.title} - Introduction`, url: "#", duration: "45 min" },
              { title: `${subject.title} - Core Concepts`, url: "#", duration: "60 min" },
            ],
          },
          seoTitle: `${subject.title} for GATE ${branch.branch.toUpperCase()} | Notes, PYQs & Mock Tests`,
          seoDesc: `Complete ${subject.title} study material for GATE ${branch.branch.toUpperCase()}. Includes syllabus, notes, previous year questions, mock tests, and video lectures.`,
          seoKeywords: [
            subject.title,
            `${subject.title} GATE`,
            `${subject.title} notes`,
            `${subject.title} PYQ`,
          ],
        },
      });
    }
  }

  // Seed KTU courses and subjects for both schemes
  for (const scheme of ["2019", "2024"]) {
    for (const dept of ktuDepartments) {
      const course = await prisma.course.create({
        data: {
          title: `KTU ${scheme} - ${dept.title}`,
          slug: `ktu-${scheme}-${dept.department}`,
          scheme,
          department: dept.department,
          description: `KTU ${scheme} scheme ${dept.title} study materials, notes, and previous year questions.`,
          seoTitle: `KTU ${scheme} ${dept.title} | BTEC Tutor`,
          seoDesc: `Complete study materials for KTU ${scheme} scheme ${dept.title}. Notes, PYQs, and exam preparation resources.`,
          seoKeywords: [
            `KTU ${scheme} ${dept.department}`,
            `KTU ${dept.title}`,
            "KTU notes",
          ],
        },
      });

      for (const subject of dept.subjects) {
        await prisma.subject.create({
          data: {
            courseId: course.id,
            title: subject.title,
            slug: subject.slug,
            semester: subject.semester,
            syllabus: buildSyllabus(subject.title),
            faqs: buildFaqs(subject.title),
            pyqs: {
              years: [
                { year: 2024, pdfUrl: "#", questionCount: 10 },
                { year: 2023, pdfUrl: "#", questionCount: 10 },
              ],
            },
            videoLinks: {
              lectures: [
                { title: `${subject.title} - Module 1`, url: "#", duration: "50 min" },
                { title: `${subject.title} - Module 2`, url: "#", duration: "55 min" },
              ],
            },
            seoTitle: `${subject.title} - KTU ${scheme} ${dept.title} | Notes & PYQs`,
            seoDesc: `${subject.title} study material for KTU ${scheme} scheme ${dept.title}. Download notes, previous year questions, and access video lectures.`,
            seoKeywords: [
              subject.title,
              `${subject.title} KTU`,
              `KTU ${scheme} ${subject.title}`,
            ],
          },
        });
      }
    }
  }

  // Seed blog posts
  for (const post of blogPosts) {
    await prisma.blogPost.create({
      data: {
        title: post.title,
        slug: post.slug,
        content: {
          type: "doc",
          content: [
            {
              type: "paragraph",
              content: [{ type: "text", text: post.excerpt }],
            },
            {
              type: "heading",
              attrs: { level: 2 },
              content: [{ type: "text", text: "Introduction" }],
            },
            {
              type: "paragraph",
              content: [
                {
                  type: "text",
                  text: "This is a detailed guide that will help you understand the key concepts and strategies needed for success. Read on to learn more about effective preparation techniques.",
                },
              ],
            },
          ],
        },
        excerpt: post.excerpt,
        tags: post.tags,
        author: post.author,
        seoTitle: `${post.title} | BTEC Tutor Blog`,
        seoDesc: post.excerpt,
        seoKeywords: post.tags,
        publishedAt: new Date(),
      },
    });
  }

  // Seed location pages
  for (const loc of locations) {
    await prisma.locationPage.create({
      data: {
        city: loc.city,
        slug: loc.slug,
        content: {
          heroTitle: `Best GATE & KTU Coaching in ${loc.city}`,
          heroSubtitle: `Join Kerala's top-rated coaching institute in ${loc.city}. Expert faculty, comprehensive study materials, and proven track record.`,
          features: [
            "Experienced GATE-qualified faculty",
            "Comprehensive study materials & notes",
            "Regular mock tests & performance analysis",
            "Personalized doubt-clearing sessions",
            "Flexible batch timings",
          ],
        },
        seoTitle: loc.seoTitle,
        seoDesc: loc.seoDesc,
        seoKeywords: [
          `coaching in ${loc.city}`,
          `GATE coaching ${loc.city}`,
          `KTU coaching ${loc.city}`,
        ],
      },
    });
  }

  // Seed reviews
  for (const review of reviews) {
    await prisma.review.create({
      data: {
        studentName: review.name,
        rating: review.rating,
        content: review.content,
        course: review.course,
        approved: true,
      },
    });
  }

  // Seed faculty
  for (const faculty of facultyMembers) {
    await prisma.faculty.create({
      data: {
        name: faculty.name,
        bio: faculty.bio,
        specialization: faculty.specialization,
        sortOrder: faculty.sortOrder,
      },
    });
  }

  console.log("Seeding completed successfully!");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
