export interface AboutHeroContent {
  headlinePrefix: string;
  highlightedName: string;
  headlineSuffix: string;
}

export interface AboutStoryContent {
  sectionTitle: string;
  paragraphs: string[];
}

export interface AboutMissionContent {
  sectionTitle: string;
  statement: string;
}

export interface AboutBelief {
  title: string;
  description: string;
  icon: string;
}

export interface AboutBeliefsContent {
  sectionTitle: string;
  beliefs: AboutBelief[];
}

export interface AboutStat {
  value: string;
  label: string;
  icon: string;
}

export interface AboutStatsContent {
  sectionTitle: string;
  stats: AboutStat[];
}

export interface AboutFounderContent {
  sectionTitle: string;
  name: string;
  paragraphs: string[];
}

export interface AboutFaqItem {
  question: string;
  answer: string;
}

export interface AboutFaqContent {
  sectionTitle: string;
  items: AboutFaqItem[];
}

export interface AboutPageContent {
  meta: {
    title: string;
    description: string;
    keywords: string[];
  };
  hero: AboutHeroContent;
  story: AboutStoryContent;
  mission: AboutMissionContent;
  beliefs: AboutBeliefsContent;
  stats: AboutStatsContent;
  founder: AboutFounderContent;
  faq: AboutFaqContent;
}

export const aboutPageContent: AboutPageContent = {
  meta: {
    title: "About Us | Kerala's Trusted Engineering Coaching Platform",
    description:
      "Learn about BTechTutor — Kerala's most trusted online coaching platform for KTU BTech and GATE. 15+ years, 5,000+ students, GATE-qualified faculty.",
    keywords: [
      "about BTechTutor",
      "Kerala engineering coaching",
      "KTU coaching platform",
      "GATE coaching Kerala",
      "online engineering tuition Kerala",
    ],
  },
  hero: {
    headlinePrefix: "About",
    highlightedName: "BTechTutor",
    headlineSuffix: "— 15 Years of Helping Kerala's Engineering Students",
  },
  story: {
    sectionTitle: "Our Story",
    paragraphs: [
      "BTechTutor started with a simple observation: too many engineering students in Kerala were failing subjects not because they lacked ability, but because they lacked access to the right kind of teaching.",
      "Engineering colleges are under pressure to complete the syllabus. Large coaching centres are under pressure to fill batches. In both environments, the individual student gets lost. The one who understands gets bored. The one who is struggling never gets the chance to raise their hand.",
      "We built BTechTutor to fix that problem, not by replacing the classroom, but by giving every student access to focused, personalised support for any subject, at any level, on any schedule.",
      "That was fifteen years ago. Since then, more than five thousand students across Kerala have come to BTechTutor for help with KTU subjects, GATE preparation, supply exams, and competitive engineering exams. Some came to us with backlogs. Some came to improve a CGPA that was already good. Some came with a goal — ISRO, PSU job, government posting — and needed a clear path to get there.",
      "Every one of them got a teacher who actually focused on them.",
    ],
  },
  mission: {
    sectionTitle: "Our Mission",
    statement:
      "To make high-quality engineering coaching accessible to every student in Kerala and beyond — without requiring them to be in a specific city, attend a specific batch, or learn at someone else's pace.",
  },
  beliefs: {
    sectionTitle: "What We Believe",
    beliefs: [
      {
        title: "Clarity Over Complexity",
        description:
          "Every student can understand every subject — if it is explained clearly and at the right pace.",
        icon: "Lightbulb",
      },
      {
        title: "Personalised Teaching Wins",
        description:
          "Personalised teaching produces better results — than any group class, every time.",
        icon: "UserCheck",
      },
      {
        title: "Geography Should Not Be a Barrier",
        description:
          "A student in Kannur deserves the same teacher as a student in Kochi.",
        icon: "Globe",
      },
      {
        title: "Transparency Builds Trust",
        description:
          "That is why our fees are published, our faculty are listed, and you can speak to our team before committing.",
        icon: "ShieldCheck",
      },
    ],
  },
  stats: {
    sectionTitle: "By the Numbers",
    stats: [
      {
        value: "5,000+",
        label: "Students coached across Kerala and abroad",
        icon: "GraduationCap",
      },
      {
        value: "15+",
        label: "Years of engineering coaching experience",
        icon: "Clock",
      },
      {
        value: "100+",
        label: "Expert faculty members across all departments",
        icon: "Users",
      },
      {
        value: "All Depts",
        label: "EEE, ECE, CS, IT, Civil, Mechanical",
        icon: "Layers",
      },
      {
        value: "2 Schemes",
        label: "KTU 2019 and 2024, all semesters, all subjects",
        icon: "BookOpen",
      },
      {
        value: "800+",
        label: "GATE selections from BTechTutor students",
        icon: "Award",
      },
    ],
  },
  founder: {
    sectionTitle: "Who Runs BTechTutor?",
    name: "Princy Antony",
    paragraphs: [
      "I am Princy Antony. My B.Tech journey began with failure — 56 backlogs. But I refused to stay there. I cleared every paper and went on to secure GATE All India Ranks 90 and 120. I have also qualified three times for the Engineering Services Examination in Electrical, and I continue to write GATE every year to stay sharp, disciplined, and exam-ready.",
      "BTechTutor is built on this transformation. I don't believe in \"weak students\" — only in wrong strategies and lack of direction. My mission is simple: eliminate fear, build clarity, and turn struggling students into confident rank holders. I didn't just study success — I lived it. And I believe, with the right guidance, any student can do the same.",
    ],
  },
  faq: {
    sectionTitle: "Frequently Asked Questions",
    items: [
      {
        question: "What is BTechTutor?",
        answer:
          "BTechTutor is an online engineering coaching platform based in Kerala, India, founded by Princy Antony. The platform has been helping KTU BTech students and GATE aspirants for over fifteen years, with a team of 100+ subject specialist faculty members and a track record of 5,000+ students coached.",
      },
      {
        question: "Is BTechTutor a genuine coaching platform?",
        answer:
          "Yes. BTechTutor is a registered coaching platform operating in Kerala with real faculty, real student results, and a transparent fee structure. Student testimonials, CGPA results, and faculty details are published on the website. Prospective students can speak to our team and verify the teaching quality before making any payment.",
      },
      {
        question: "Where is BTechTutor located?",
        answer:
          "BTechTutor operates as an online coaching platform accessible from anywhere in India and abroad. The team is based in Kerala and primarily serves KTU students across Kerala cities including Kochi, Trivandrum, Thrissur, Kozhikode, Kannur, and Palakkad. Indian students in UAE, Dubai, and Gulf countries also regularly access BTechTutor coaching.",
      },
    ],
  },
};
