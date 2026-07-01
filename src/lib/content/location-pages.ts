export interface LocationOffer {
  title: string;
  description: string;
}

export interface LocationFaq {
  question: string;
  answer: string;
}

export interface LocationPageContent {
  /** URL slug used in the route, e.g. "kochi" */
  slug: string;
  /** Full canonical path, e.g. "/ktu-coaching/kochi" */
  path: string;
  /** "ktu" pages live under /ktu-coaching/[location]; "gate" pages are standalone */
  category: "ktu" | "gate";
  /** Short label shown on the locations hub card */
  navLabel: string;
  /** One-line tagline for the hub card */
  navTagline: string;
  /** City name used for LocalBusiness schema */
  city: string;

  metaTitle: string;
  metaDescription: string;
  keywords: string[];

  h1: string;
  intro: string[];

  offersHeading: string;
  offers: LocationOffer[];

  whyHeading: string;
  whyBullets: string[];

  howToStart: string[];

  faqs: LocationFaq[];

  ctaHeading: string;
  ctaSubtext: string;
}

const WHATSAPP_NUMBER = "919895006772";
const WHATSAPP_DISPLAY = "+91 98950 06772";
const SUPPORT_EMAIL = "help.btechtutorkerala@gmail.com";

export const LOCATION_CONTACT = {
  whatsappNumber: WHATSAPP_NUMBER,
  whatsappDisplay: WHATSAPP_DISPLAY,
  email: SUPPORT_EMAIL,
};

const KTU_OFFERS: LocationOffer[] = [
  {
    title: "KTU 2019 Scheme — All Branches",
    description:
      "EEE, ECE, CS, IT, Civil, and Mechanical Engineering. Complete subject coverage from S1 to S8 including notes, video classes, previous year papers, and live coaching for every semester.",
  },
  {
    title: "KTU 2024 Scheme — All Branches",
    description:
      "Full coverage of the 2024 scheme across all six main branches. Includes all 11 CS specialisation sub-branches including CS with AI, CS with Data Science, CS with IoT, CS with Cyber Security, and more.",
  },
  {
    title: "One-to-One Personal Tuition",
    description:
      "For students who need more than a group class. A dedicated faculty member who teaches only you, at your pace and on your schedule. The most effective way to clear a backlog or improve a falling CGPA.",
  },
];

const HOW_TO_START: string[] = [
  "WhatsApp us at +91 98950 06772 or fill the contact form on the website",
  "Tell us your department, semester, and the subject you need help with",
  "We match you with the right faculty member for your subject and schedule",
  "Enroll and start learning on your own schedule",
];

const RESULTS_BULLET =
  "Real results. Roshan Roy achieved 8.9 CGPA at Government College of Engineering Thrissur. Nihila K achieved 8.32 CGPA at Government Engineering College Kannur.";

export const locationPages: LocationPageContent[] = [
  // 1. Kerala (KTU)
  {
    slug: "kerala",
    path: "/ktu-coaching/kerala",
    category: "ktu",
    navLabel: "Kerala",
    navTagline: "Online BTech tuition for every student, every district",
    city: "Kerala",
    metaTitle: "KTU Coaching Kerala | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for the best KTU coaching in Kerala? Join BTechTutor for expert online BTech tuition for all KTU branches. 5,000+ students coached. Enroll today.",
    keywords: ["KTU coaching Kerala", "online BTech tuition", "KTU tuition Kerala"],
    h1: "KTU Coaching in Kerala — Online BTech Tuition for Every Student, Every District",
    intro: [
      "If you are a KTU BTech student across Kerala, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15 plus years of experience, 5,000 plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer",
    offers: KTU_OFFERS,
    whyHeading: "Why Students Across Kerala Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Kochi, Trivandrum, Thrissur, Kozhikode, Kannur, Palakkad, and every other district and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students across Kerala?",
        answer:
          "Yes, BTechTutor is fully online. Students from every district in Kerala can join live classes, access notes, watch recorded sessions, and get doubt clearing support from any phone or laptop.",
      },
      {
        question: "Does BTechTutor cover both KTU 2019 and 2024 scheme?",
        answer:
          "Yes, both schemes are fully covered. Whether you are on the 2019 scheme or the new 2024 scheme, all your subjects are available on BTechTutor.",
      },
      {
        question: "Which branches does BTechTutor cover for KTU students?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering. All branches, all semesters, both KTU 2019 and 2024 scheme.",
      },
      {
        question: "Can I get one-to-one coaching through BTechTutor?",
        answer:
          "Yes. BTechTutor offers One-to-One personal tuition where a dedicated faculty member teaches only you, at your chosen time and pace. This is especially helpful for clearing backlogs or improving CGPA.",
      },
      {
        question: "How many students from Kerala have been coached by BTechTutor?",
        answer:
          "BTechTutor has coached 5,000 plus KTU engineering students across Kerala. Students from all districts and all branches have benefited from the coaching.",
      },
      {
        question: "Does BTechTutor provide notes and study material for KTU?",
        answer:
          "Yes, all enrolled students get access to structured notes, previous year question papers, video lectures, and subject-wise resources for their specific branch and semester.",
      },
      {
        question: "Can I join BTechTutor if I have a KTU backlog?",
        answer:
          "Absolutely. One-to-One personal tuition at BTechTutor is specifically designed for students who need focused help, including those preparing for supply or improvement exams.",
      },
      {
        question: "How do I start with BTechTutor?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form on the website. Tell us your department, semester, and subject. We will match you with the right faculty.",
      },
    ],
    ctaHeading: "Ready to Get Started Across Kerala?",
    ctaSubtext:
      "Join thousands of KTU students across Kerala already learning with BTechTutor.",
  },

  // 2. Kochi (KTU)
  {
    slug: "kochi",
    path: "/ktu-coaching/kochi",
    category: "ktu",
    navLabel: "Kochi & Ernakulam",
    navTagline: "Expert online BTech tuition",
    city: "Kochi",
    metaTitle: "KTU Coaching in Kochi | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for KTU coaching in Kochi? BTechTutor offers online BTech tuition for all KTU branches under the 2019 & 2024 schemes. Expert faculty. Join today.",
    keywords: ["KTU coaching Kochi", "BTech tuition Ernakulam", "KTU coaching Ernakulam"],
    h1: "KTU Coaching in Kochi and Ernakulam — Expert Online BTech Tuition",
    intro: [
      "If you are a KTU BTech student in Kochi and Ernakulam, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15 plus years of experience, 5,000 plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer?",
    offers: KTU_OFFERS,
    whyHeading: "Why Students In Kochi and Ernakulam Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Kochi, Ernakulam, Kakkanad, Aluva, Perumbavoor, and surrounding areas and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students in Kochi and Ernakulam?",
        answer:
          "Yes, BTechTutor is fully online. Students in Kochi, Ernakulam, Kakkanad, Aluva, and all surrounding areas can attend live classes and access study material from any device.",
      },
      {
        question: "Does BTechTutor cover both KTU 2019 and 2024 scheme for Kochi students?",
        answer:
          "Yes, both schemes are fully covered for students in Kochi and Ernakulam. All six branches and all semesters from S1 to S8 are available.",
      },
      {
        question: "Can KTU students in Kochi attend evening or weekend classes?",
        answer:
          "Yes, BTechTutor offers flexible scheduling. Morning, evening, and weekend slots are available so you can attend classes around your college timetable or work schedule.",
      },
      {
        question: "Is one-to-one coaching available for students in Kochi?",
        answer:
          "Yes. BTechTutor offers One-to-One personal tuition for students in Kochi and Ernakulam. A dedicated faculty member teaches only you at your chosen time and pace.",
      },
      {
        question: "Does BTechTutor help with KTU supply exams for Kochi students?",
        answer:
          "Yes. Many students in Kochi use BTechTutor specifically for supply exam preparation. One-to-One coaching sessions are the most effective for targeted backlog clearing.",
      },
      {
        question: "Which KTU branches does BTechTutor cover for students in Kochi?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering for students in Kochi and Ernakulam under both KTU 2019 and 2024 scheme.",
      },
      {
        question: "Does BTechTutor provide KTU notes and previous year papers for Kochi students?",
        answer:
          "Yes. Enrolled students get access to structured notes, PYQs, and video lectures for their specific branch and semester under both KTU schemes.",
      },
      {
        question: "How do Kochi students enroll in BTechTutor?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form on the website. Mention your department, semester, and subjects.",
      },
    ],
    ctaHeading: "Ready to Get Started In Kochi and Ernakulam?",
    ctaSubtext:
      "Join thousands of KTU students in Kochi and Ernakulam already learning with BTechTutor.",
  },

  // 3. Trivandrum (KTU)
  {
    slug: "trivandrum",
    path: "/ktu-coaching/trivandrum",
    category: "ktu",
    navLabel: "Trivandrum",
    navTagline: "Online BTech tuition for Thiruvananthapuram",
    city: "Trivandrum",
    metaTitle: "KTU Coaching in Trivandrum | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for KTU coaching in Trivandrum? BTechTutor offers online BTech tuition for all KTU branches under the 2019 & 2024 schemes. Expert faculty. Enroll today.",
    keywords: [
      "KTU coaching Trivandrum",
      "BTech tuition Thiruvananthapuram",
      "KTU coaching Thiruvananthapuram",
    ],
    h1: "KTU Coaching in Trivandrum and Thiruvananthapuram — Online BTech Tuition",
    intro: [
      "If you are a KTU BTech student in Trivandrum and Thiruvananthapuram, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15 plus years of experience, 5,000 plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer?",
    offers: KTU_OFFERS,
    whyHeading: "Why Students In Trivandrum and Thiruvananthapuram Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Trivandrum, Thiruvananthapuram, Kazhakkoottam, Technopark area, Neyyattinkara, and surrounding areas and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students in Trivandrum?",
        answer:
          "Yes, BTechTutor is fully online. Students in Trivandrum, Thiruvananthapuram, Kazhakkoottam, and all surrounding areas can join live classes and access notes from any device.",
      },
      {
        question: "Does BTechTutor cover both KTU 2019 and 2024 scheme for Trivandrum students?",
        answer:
          "Yes, both schemes are fully covered for students in Trivandrum. All six branches and all semesters are available.",
      },
      {
        question: "Which branches does BTechTutor offer coaching for in Trivandrum?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering for KTU students in Trivandrum under both 2019 and 2024 scheme.",
      },
      {
        question: "Can I attend BTechTutor classes while studying at a college in Trivandrum?",
        answer:
          "Yes. Classes are fully online and flexible. You can schedule sessions around your college timetable. Morning, evening, and weekend slots are available.",
      },
      {
        question: "Does BTechTutor help KTU students in Trivandrum clear backlogs?",
        answer:
          "Yes. One-to-One personal tuition at BTechTutor is specifically designed for focused subject help, making it very effective for students preparing for supply or improvement exams.",
      },
      {
        question: "Is one-to-one coaching available for Trivandrum students?",
        answer:
          "Yes. BTechTutor offers One-to-One personal coaching for students in Trivandrum. A dedicated faculty member works only with you at your pace and schedule.",
      },
      {
        question: "Does BTechTutor provide KTU notes for Trivandrum students?",
        answer:
          "Yes. All enrolled students get access to structured notes, previous year question papers, and video lectures for their specific branch and semester under both KTU schemes.",
      },
      {
        question: "How do I enroll in BTechTutor from Trivandrum?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form. Share your branch, semester, and subjects. We will match you with the right faculty.",
      },
    ],
    ctaHeading: "Ready to Get Started In Trivandrum and Thiruvananthapuram?",
    ctaSubtext:
      "Join thousands of KTU students in Trivandrum and Thiruvananthapuram already learning with BTechTutor.",
  },

  // 4. Thrissur (KTU)
  {
    slug: "thrissur",
    path: "/ktu-coaching/thrissur",
    category: "ktu",
    navLabel: "Thrissur",
    navTagline: "Online BTech tuition for all branches",
    city: "Thrissur",
    metaTitle: "KTU Coaching in Thrissur | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for KTU coaching in Thrissur? BTechTutor offers online BTech tuition for all KTU branches under the 2019 & 2024 schemes. Expert faculty.",
    keywords: ["KTU coaching Thrissur", "BTech tuition Thrissur"],
    h1: "KTU Coaching in Thrissur — Online BTech Tuition for All Branches",
    intro: [
      "If you are a KTU BTech student in Thrissur, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15 plus years of experience, 5,000 plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer?",
    offers: KTU_OFFERS,
    whyHeading: "Why Students In Thrissur Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Thrissur, Irinjalakuda, Chalakudy, Kodungallur, Guruvayur, and surrounding areas and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students in Thrissur?",
        answer:
          "Yes, BTechTutor is fully online. Students in Thrissur, Irinjalakuda, Chalakudy, Guruvayur, and all surrounding areas can join live classes and access study material from any device.",
      },
      {
        question: "Which KTU branches does BTechTutor cover for Thrissur students?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering for students in Thrissur. Both KTU 2019 and 2024 scheme are fully available.",
      },
      {
        question: "Does BTechTutor cover KTU 2024 scheme for students in Thrissur?",
        answer:
          "Yes, both KTU 2019 and 2024 scheme are fully covered. All six branches and all semesters are available for students in Thrissur.",
      },
      {
        question: "Can I get one-to-one coaching from BTechTutor in Thrissur?",
        answer:
          "Yes. One-to-One personal tuition is available for students in Thrissur. A dedicated faculty member will teach only you at your chosen time and pace.",
      },
      {
        question: "Does BTechTutor help students in Thrissur with KTU supply exams?",
        answer:
          "Yes. BTechTutor is widely used by students in Thrissur for supply exam preparation. One-to-One sessions allow focused revision on specific subjects to help clear backlogs faster.",
      },
      {
        question: "What time slots are available for Thrissur students?",
        answer:
          "BTechTutor offers morning, evening, and weekend slots. You can choose a timing that works around your college schedule or personal commitments.",
      },
      {
        question: "Are KTU notes and previous year papers available for Thrissur students?",
        answer:
          "Yes. All enrolled students get access to subject-wise notes, previous year question papers, and video lectures for their specific branch and semester.",
      },
      {
        question: "How do I start with BTechTutor from Thrissur?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form on the website. Tell us your branch, semester, and subject. We will match you with the right faculty.",
      },
    ],
    ctaHeading: "Ready to Get Started In Thrissur?",
    ctaSubtext:
      "Join thousands of KTU students in Thrissur already learning with BTechTutor.",
  },

  // 5. Kozhikode (KTU)
  {
    slug: "kozhikode",
    path: "/ktu-coaching/kozhikode",
    category: "ktu",
    navLabel: "Kozhikode & Calicut",
    navTagline: "Expert online BTech tuition",
    city: "Kozhikode",
    metaTitle: "KTU Coaching in Kozhikode | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for KTU coaching in Kozhikode? BTechTutor offers online BTech tuition for all KTU branches under the 2019 & 2024 schemes. Expert faculty. Enroll today.",
    keywords: ["KTU coaching Kozhikode", "BTech tuition Calicut", "KTU coaching Calicut"],
    h1: "KTU Coaching in Kozhikode and Calicut — Expert Online BTech Tuition",
    intro: [
      "If you are a KTU BTech student in Kozhikode and Calicut, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15 plus years of experience, 5,000 plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer?",
    offers: KTU_OFFERS,
    whyHeading: "Why Students In Kozhikode and Calicut Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Kozhikode, Calicut, Malappuram, Manjeri, Tirur, and surrounding areas and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students in Kozhikode and Calicut?",
        answer:
          "Yes, BTechTutor is fully online. Students in Kozhikode, Calicut, Malappuram, and all surrounding areas can attend live classes and access notes from any device.",
      },
      {
        question: "Which KTU branches does BTechTutor offer in Kozhikode?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering for students in Kozhikode. Both KTU 2019 and 2024 scheme are fully covered.",
      },
      {
        question: "Does BTechTutor cover KTU 2024 scheme for Kozhikode students?",
        answer:
          "Yes, both KTU 2019 and 2024 scheme are covered. All six branches and all CS specialisation sub-branches under 2024 scheme are available for students in Kozhikode.",
      },
      {
        question: "Can Kozhikode students attend BTechTutor evening or weekend classes?",
        answer:
          "Yes. BTechTutor offers flexible scheduling with morning, evening, and weekend slots to fit around your college timetable or work schedule.",
      },
      {
        question: "Is one-to-one coaching available for students in Kozhikode?",
        answer:
          "Yes. BTechTutor offers One-to-One personal tuition for Kozhikode students. A dedicated faculty member works only with you at your chosen time and pace.",
      },
      {
        question: "Does BTechTutor help KTU students in Kozhikode clear supply exams?",
        answer:
          "Yes. Many students in Kozhikode use BTechTutor for supply exam preparation. One-to-One sessions are the fastest way to target specific subjects and clear backlogs.",
      },
      {
        question: "Does BTechTutor provide KTU notes for Kozhikode students?",
        answer:
          "Yes. Enrolled students get access to structured notes, PYQs, and video lectures for their specific branch and semester under both KTU schemes.",
      },
      {
        question: "How do I join BTechTutor from Kozhikode?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form. Share your branch, semester, and the subjects you need help with.",
      },
    ],
    ctaHeading: "Ready to Get Started In Kozhikode and Calicut?",
    ctaSubtext:
      "Join thousands of KTU students in Kozhikode and Calicut already learning with BTechTutor.",
  },

  // 6. Palakkad (KTU)
  {
    slug: "palakkad",
    path: "/ktu-coaching/palakkad",
    category: "ktu",
    navLabel: "Palakkad",
    navTagline: "Online BTech tuition for all branches",
    city: "Palakkad",
    metaTitle: "KTU Coaching in Palakkad | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for KTU coaching in Palakkad? BTechTutor offers online BTech tuition for all KTU branches under the 2019 & 2024 schemes. Expert faculty. Enroll today.",
    keywords: ["KTU coaching Palakkad", "BTech tuition Palakkad"],
    h1: "KTU Coaching in Palakkad — Online BTech Tuition for All Branches",
    intro: [
      "If you are a KTU BTech student in Palakkad, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15 plus years of experience, 5,000 plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer?",
    offers: KTU_OFFERS,
    whyHeading: "Why Students In Palakkad Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Palakkad, Ottapalam, Shoranur, Mannarkkad, Chittur, and surrounding areas and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students in Palakkad?",
        answer:
          "Yes, BTechTutor is fully online. Students in Palakkad, Ottapalam, Shoranur, Mannarkkad, and all surrounding areas can join live classes and access study material from any device.",
      },
      {
        question: "Which KTU branches does BTechTutor cover for Palakkad students?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering for students in Palakkad. Both KTU 2019 and 2024 scheme are fully available.",
      },
      {
        question: "Does BTechTutor cover KTU 2024 scheme for Palakkad students?",
        answer:
          "Yes, both KTU 2019 and 2024 scheme are fully covered for students in Palakkad. All six main branches and CS specialisation sub-branches are available.",
      },
      {
        question: "Can I attend BTechTutor classes from Palakkad around my college schedule?",
        answer:
          "Yes. BTechTutor offers morning, evening, and weekend slots. You can schedule sessions around your college timetable with no conflict.",
      },
      {
        question: "Is one-to-one coaching available for students in Palakkad?",
        answer:
          "Yes. One-to-One personal tuition is available for Palakkad students. A dedicated faculty member will work only with you at your pace and preferred timing.",
      },
      {
        question: "Does BTechTutor help students in Palakkad with KTU supply exams?",
        answer:
          "Yes. BTechTutor is commonly used for supply exam preparation in Palakkad. One-to-One sessions allow targeted revision of specific subjects to clear backlogs effectively.",
      },
      {
        question: "Does BTechTutor provide KTU notes and PYQs for Palakkad students?",
        answer:
          "Yes. Enrolled students get access to structured notes, previous year question papers, and video lectures for their specific branch and semester.",
      },
      {
        question: "How do I enroll in BTechTutor from Palakkad?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form. Tell us your branch, semester, and subject.",
      },
    ],
    ctaHeading: "Ready to Get Started In Palakkad?",
    ctaSubtext:
      "Join thousands of KTU students in Palakkad already learning with BTechTutor.",
  },

  // 7. Kannur (KTU)
  {
    slug: "kannur",
    path: "/ktu-coaching/kannur",
    category: "ktu",
    navLabel: "Kannur",
    navTagline: "Expert online BTech tuition for all branches",
    city: "Kannur",
    metaTitle: "KTU Coaching in Kannur | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Looking for KTU coaching in Kannur? BTechTutor offers online BTech tuition for all KTU branches under the 2019 & 2024 schemes. Expert faculty. Enroll today.",
    keywords: ["KTU coaching Kannur", "BTech tuition Kannur"],
    h1: "KTU Coaching in Kannur — Expert Online BTech Tuition for All Branches",
    intro: [
      "If you are a KTU BTech student in Kannur, you already know how competitive it gets. Backlogs, CGPA pressure, supply exams, and the constant challenge of keeping up with a syllabus that does not slow down for anyone.",
      "BTechTutor is Kerala's most trusted online coaching platform for KTU engineering students. With 15-plus years of experience, 5,000-plus students coached, and expert faculty who know the KTU system inside out, BTechTutor is built specifically for students like you.",
    ],
    offersHeading: "What We Offer?",
    offers: KTU_OFFERS,
    whyHeading: "Why Students In Kannur Choose BTechTutor?",
    whyBullets: [
      "5,000 plus KTU students coached from Kannur, Thalassery, Payyannur, Iritty, Mattannur, and surrounding areas and beyond.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are available.",
      "100 plus expert faculty. Each teacher specialises in specific KTU subjects.",
      "Fully online and fully flexible. Morning, evening, or weekend. You choose the time.",
      RESULTS_BULLET,
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Is BTechTutor available for KTU students in Kannur?",
        answer:
          "Yes, BTechTutor is fully online. Students in Kannur, Thalassery, Payyannur, and all surrounding areas can attend live classes and access study material from any device.",
      },
      {
        question: "Which KTU branches does BTechTutor cover for Kannur students?",
        answer:
          "BTechTutor covers EEE, ECE, CS, IT, Civil, and Mechanical Engineering for KTU students in Kannur. Both 2019 and 2024 scheme are fully covered.",
      },
      {
        question: "Does BTechTutor cover KTU 2024 scheme for students in Kannur?",
        answer:
          "Yes, both KTU 2019 and 2024 scheme are available for students in Kannur. All branches and all CS specialisation sub-branches under the 2024 scheme are included.",
      },
      {
        question: "Can I attend BTechTutor classes from Kannur in the evenings or weekends?",
        answer:
          "Yes. BTechTutor offers flexible scheduling with morning, evening, and weekend slots so you can attend classes without disrupting your college routine.",
      },
      {
        question: "Is one-to-one coaching available for Kannur students?",
        answer:
          "Yes. BTechTutor offers One-to-One personal tuition for students in Kannur. A dedicated faculty member will work only with you at your chosen time and pace.",
      },
      {
        question: "Does BTechTutor help students in Kannur with KTU backlog subjects?",
        answer:
          "Yes. One-to-One sessions at BTechTutor are specifically useful for backlog and supply exam preparation. Many students in Kannur have cleared difficult subjects through focused one-to-one coaching.",
      },
      {
        question: "Does BTechTutor provide KTU notes and previous year papers for Kannur students?",
        answer:
          "Yes. All enrolled students get access to subject-wise notes, PYQs, and video lectures for their specific branch and semester under both KTU schemes.",
      },
      {
        question: "How do I join BTechTutor from Kannur?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form. Share your branch, semester, and subjects.",
      },
    ],
    ctaHeading: "Ready to Get Started In Kannur?",
    ctaSubtext:
      "Join thousands of KTU students in Kannur already learning with BTechTutor.",
  },

  // 8. UAE (KTU)
  {
    slug: "uae",
    path: "/ktu-coaching/uae",
    category: "ktu",
    navLabel: "UAE & Gulf",
    navTagline: "Online BTech tuition for Indian students abroad",
    city: "UAE",
    metaTitle: "KTU Coaching in UAE | Online BTech Tuition | BTechTutor",
    metaDescription:
      "Online KTU coaching for Indian students in the UAE and Gulf. BTechTutor offers expert BTech tuition for all KTU branches under the 2019 & 2024 schemes.",
    keywords: ["KTU coaching UAE", "KTU coaching Dubai", "BTech tuition Gulf", "NRI KTU coaching"],
    h1: "KTU Coaching for Indian Students in UAE and Gulf — Online BTech Tuition",
    intro: [
      "For Indian engineering students in UAE, Dubai, Abu Dhabi, Qatar, Oman, Bahrain, and other Gulf countries, KTU exams do not get easier just because you are abroad. The syllabus is the same. The pressure is the same. Finding the right coaching is what is different.",
      "BTechTutor is a fully online coaching platform with Kerala faculty who understand the KTU system inside out. No travel required. No time zone problems. Just expert teaching at your schedule and your pace.",
    ],
    offersHeading: "What We Offer?",
    offers: [
      {
        title: "KTU 2019 and 2024 Scheme — All Branches",
        description:
          "EEE, ECE, CS, IT, Civil, and Mechanical Engineering. Subject notes, video classes, PYQ solutions, and live coaching for every semester from S1 to S8.",
      },
      {
        title: "KTU 2024 Scheme — CS Specialisations",
        description:
          "All 11 CS specialisation branches covered including CS with AI, CS with Data Science, CS with IoT, CS with Cyber Security, and more.",
      },
      {
        title: "One-to-One Personal Tuition",
        description:
          "For NRI students who need more than a group class. A dedicated faculty member who teaches only you, at the time slot that works in your time zone.",
      },
    ],
    whyHeading:
      "Why Students In the UAE, Dubai, Abu Dhabi, Qatar and Gulf Countries Choose BTechTutor?",
    whyBullets: [
      "Flexible timing that works across Gulf time zones. Sessions are scheduled around where you are.",
      "Kerala faculty who know KTU. Teachers who have spent years teaching KTU subjects and know exactly what the university expects.",
      "Both KTU 2019 and 2024 scheme covered. Whichever scheme you are on, your subjects are here.",
      "One-to-One option for NRI students. If group classes do not fit your schedule, a dedicated tutor is available only for you.",
    ],
    howToStart: HOW_TO_START,
    faqs: [
      {
        question: "Can Indian students in UAE join BTechTutor for KTU coaching?",
        answer:
          "Yes, BTechTutor is a fully online platform. Students in UAE, Dubai, Abu Dhabi, Qatar, Oman, Bahrain, and all Gulf countries can enroll and attend live classes from any device.",
      },
      {
        question: "Does BTechTutor cover both KTU 2019 and 2024 scheme for NRI students?",
        answer:
          "Yes, both KTU 2019 and 2024 scheme are fully covered. All branches including EEE, ECE, CS, IT, Civil, and Mechanical are available along with all CS 2024 specialisation sub-branches.",
      },
      {
        question: "What time do BTechTutor classes happen for students in the UAE?",
        answer:
          "BTechTutor offers flexible scheduling. Sessions can be arranged to fit Gulf time zones including early morning, evening, or weekend slots depending on what works for you.",
      },
      {
        question: "Is one-to-one coaching available for NRI students in the UAE?",
        answer:
          "Yes. BTechTutor offers One-to-One personal tuition for NRI students. A dedicated faculty member will teach only you at your chosen time in a time zone that suits you.",
      },
      {
        question: "Is the teaching in Malayalam or English at BTechTutor?",
        answer:
          "BTechTutor teaches primarily in a mix of Malayalam and English, which is familiar and comfortable for most Kerala engineering students studying abroad.",
      },
      {
        question: "Does BTechTutor provide KTU notes and study material for UAE students?",
        answer:
          "Yes. Enrolled NRI students get full access to structured notes, previous year question papers, and video lectures for their specific branch and semester, accessible from anywhere in the world.",
      },
      {
        question: "Can a student in UAE use BTechTutor to prepare for KTU supply exams?",
        answer:
          "Yes. Many NRI students use BTechTutor specifically for supply exam preparation. One-to-One sessions are especially effective for targeted backlog clearing from abroad.",
      },
      {
        question: "How do NRI students in UAE enroll in BTechTutor?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form on the website. Mention that you are an NRI student in the Gulf and share your branch, semester, and time zone preference. We will arrange a class.",
      },
    ],
    ctaHeading: "Studying KTU from the Gulf? We Are Here for You.",
    ctaSubtext:
      "WhatsApp us and share your department, semester, and time zone. We will match you with the right faculty.",
  },

  // 9. GATE Kerala
  {
    slug: "kerala",
    path: "/gate-coaching/kerala",
    category: "gate",
    navLabel: "GATE Coaching in Kerala",
    navTagline: "Online prep for ECE, EEE & Instrumentation",
    city: "Kerala",
    metaTitle: "GATE Coaching in Kerala | Online Preparation | BTechTutor",
    metaDescription:
      "Looking for GATE coaching in Kerala? BTechTutor offers online coaching for ECE, EEE, and Instrumentation. Expert faculty, mock tests, PYQ analysis & results.",
    keywords: [
      "GATE coaching Kerala",
      "GATE ECE coaching",
      "GATE EEE coaching",
      "GATE Instrumentation coaching",
    ],
    h1: "GATE Coaching in Kerala — Online Preparation for ECE, EEE and Instrumentation Engineering",
    intro: [
      "Kerala has produced some of India's top GATE rankers. Strong preparation does not happen by accident. It takes subject depth, consistent practice, and the right guidance. BTechTutor has been delivering exactly that to engineering students across Kerala for over 15 years.",
      "Whether you are a fresh BTech graduate targeting a PSU job, a working professional looking to upgrade, or a student aiming for an M.Tech at IIT or NIT, BTechTutor's online GATE coaching gives you the structure, the faculty, and the resources to get there.",
    ],
    offersHeading: "What We Offer?",
    offers: [
      {
        title: "GATE ECE — Electronics and Communication Engineering",
        description:
          "Subject-wise deep dive into Networks, Signals and Systems, Control Systems, Analog Circuits, Digital Electronics, Electromagnetics, Communications, and VLSI. Taught by faculty who know the GATE pattern inside out.",
      },
      {
        title: "GATE EEE — Electrical and Electronics Engineering",
        description:
          "Complete coverage of Power Systems, Machines, Power Electronics, Control Systems, Analog and Digital Electronics, and Electromagnetic Fields. All topics mapped to the GATE syllabus and exam weightage.",
      },
      {
        title: "GATE Instrumentation Engineering",
        description:
          "Specialised coaching for Instrumentation covering Measurement, Sensors, Signal Conditioning, Control Systems, Analog and Digital Circuits. One of the few Kerala coaching platforms that treats Instrumentation as a serious stream.",
      },
    ],
    whyHeading: "Why Students Across Kerala Choose BTechTutor?",
    whyBullets: [
      "800 plus GATE selections. Students who secured PSU jobs and M.Tech admissions at IITs and NITs.",
      "Subject-wise classes with the depth each GATE topic deserves. Not generic crash courses.",
      "Previous Year Paper analysis in every class connecting theory to how GATE actually tests it.",
      "Mock tests that mirror the actual GATE exam. Regular full-length and sectional tests throughout preparation.",
      "One-to-one doubt clearing sessions available for every student.",
      "Flexible scheduling for both working professionals and college students.",
    ],
    howToStart: [
      "WhatsApp us at +91 98950 06772 or fill the contact form on the website.",
      "Tell us your department, semester, and the subject you need help with.",
      "We match you with the right faculty member for your subject and schedule.",
      "Enroll and start learning on your own schedule.",
    ],
    faqs: [
      {
        question: "Does BTechTutor offer GATE coaching for all branches?",
        answer:
          "BTechTutor currently offers GATE coaching for ECE, EEE, and Instrumentation Engineering. All three streams are available for students across Kerala.",
      },
      {
        question: "Is GATE coaching at BTechTutor fully online?",
        answer:
          "Yes. All GATE coaching at BTechTutor is fully online. Students from any district in Kerala can attend live classes, access recorded sessions, and download notes from any device.",
      },
      {
        question: "How many students from Kerala have cleared GATE through BTechTutor?",
        answer:
          "BTechTutor has 800 plus GATE selections to date. These are students who secured PSU jobs or M.Tech admissions at IITs and NITs after coaching with BTechTutor.",
      },
      {
        question: "Can working professionals in Kerala join GATE coaching at BTechTutor?",
        answer:
          "Yes. BTechTutor offers flexible scheduling designed for working professionals. Early morning, late evening, and weekend slots are available to fit around your job.",
      },
      {
        question: "Does BTechTutor provide previous year GATE papers and mock tests?",
        answer:
          "Yes. All GATE coaching students at BTechTutor get access to previous year question papers with solutions, subject-wise practice sets, and full-length mock tests that mirror the actual GATE exam pattern.",
      },
      {
        question: "How is BTechTutor different from other GATE coaching centres in Kerala?",
        answer:
          "BTechTutor is fully online with no travel required. The coaching is subject-wise and in-depth rather than generic crash courses. Faculty are experienced GATE specialists and one-to-one doubt-clearing sessions are available for every student.",
      },
      {
        question: "Which PSUs can I target after clearing GATE?",
        answer:
          "After clearing GATE, students can apply to PSUs like BHEL, NTPC, BSNL, ONGC, Power Grid, IOCL, and many others through their GATE score. BTechTutor prepares you for the GATE exam and can guide you on which PSUs to target based on your score.",
      },
      {
        question: "Is one-to-one doubt clearing available for GATE students in Kerala?",
        answer:
          "Yes. If any concept does not click during a group session, one-to-one doubt clearing is available. Your understanding comes first and BTechTutor faculty make sure no student is left behind.",
      },
      {
        question: "How do I start GATE coaching at BTechTutor in Kerala?",
        answer:
          "WhatsApp us at +91 98950 06772 or fill the contact form on btechtutor.com. Choose your stream, enroll when you are ready.",
      },
    ],
    ctaHeading: "Ready to Start Your GATE Preparation?",
    ctaSubtext:
      "Join hundreds of GATE aspirants across Kerala already preparing with BTechTutor.",
  },
];

/** KTU location pages, used for the /ktu-coaching hub and dynamic route params. */
export const ktuLocationPages = locationPages.filter((p) => p.category === "ktu");

/** GATE location pages, listed on the hub alongside KTU locations. */
export const gateLocationPages = locationPages.filter((p) => p.category === "gate");

export function getKtuLocation(slug: string): LocationPageContent | undefined {
  return ktuLocationPages.find((p) => p.slug === slug);
}

export function getGateLocation(slug: string): LocationPageContent | undefined {
  return gateLocationPages.find((p) => p.slug === slug);
}
