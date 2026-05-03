import type { FaqContent } from "@/lib/content/faq";

export interface SixReasonsItem {
  title: string;
  description: string;
}

export interface SixReasonsContent {
  badgeLabel: string;
  heading: string;
  headingHighlight: string;
  items: SixReasonsItem[];
}

export interface WhyUsPageExtraContent {
  sixReasons: SixReasonsContent;
  faq: FaqContent;
}

export const whyUsPageContent: WhyUsPageExtraContent = {
  sixReasons: {
    badgeLabel: "Why BTechTutor",
    heading: "Six Reasons Students Choose",
    headingHighlight: "BTechTutor",
    items: [
      {
        title: "We Actually Teach — Not Just Share Files",
        description:
          "Notes and question paper downloads are useful. But they are not coaching. At BTechTutor, live faculty explain concepts, answer questions in real time, and adjust their teaching based on what each student actually needs. There is a real difference between reading a PDF and having someone break a concept down until it genuinely clicks for you.",
      },
      {
        title: "One-to-One Coaching Nobody Else Offers",
        description:
          "No other KTU coaching platform in Kerala offers structured one-to-one personal tuition as a proper core service the way BTechTutor does. When a student has a backlog, a subject dragging their CGPA down, or simply learns better with personal attention — one-to-one coaching at BTechTutor is the most direct path to improvement.",
      },
      {
        title: "The Most Complete KTU 2024 Scheme Coverage",
        description:
          "BTechTutor covers all eleven CS sub-branches of the KTU 2024 scheme — a level of depth no competitor has matched. If you are on the new scheme in any CS or AI branch, BTechTutor is one of the very few platforms with coaching built specifically for your syllabus.",
      },
      {
        title: "One Platform from First Year to Career",
        description:
          "A student can start at BTechTutor in the first semester of BTech and stay all the way to a PSU job or ISRO selection. KTU coaching, GATE preparation, ISRO coaching, and Engineering PSC — all on one platform. That matters when your goals change over four to six years.",
      },
      {
        title: "Transparent Fees, No Hidden Surprises",
        description:
          "Our fee structure is published on the website. No locked pricing that only appears after a sales call. No registration fees before you even know if we are the right fit. What you see is what you pay.",
      },
      {
        title: "Results With Real Names Behind Them",
        description:
          "Any coaching institute can claim success. BTechTutor publishes real names, real colleges, and real CGPA scores. Roshan Roy at 8.9 in GCE Thrissur. Nihila K at 8.32 in GEC Kannur. 800+ GATE selections. These are verifiable — and that transparency is how we have maintained trust over fifteen years.",
      },
    ],
  },
  faq: {
    badgeLabel: "FAQs",
    heading: "Frequently Asked",
    headingHighlight: "Questions",
    ctaHeading: "Still have questions?",
    ctaDescription:
      "If you have any questions, just reach out to us on WhatsApp. Our team responds within 24 hours.",
    ctaButtonLabel: "Chat on WhatsApp",
    ctaWhatsAppNumber: "+919895006772",
    items: [
      {
        question: "Which is the best online KTU coaching in Kerala?",
        answer:
          "BTechTutor is one of the most established platforms for KTU coaching in Kerala — not just for notes but for actual teaching. Live coaching, one-to-one sessions, and structured preparation for both semester exams and competitive exams like GATE and ISRO. If you want to see it for yourself, just reach out and we will connect you with the right faculty for your subject.",
      },
      {
        question: "How is BTechTutor different from KTU Notes?",
        answer:
          "KTU Notes is a study material platform. PDFs, question papers, downloads. That is useful if you can study independently. BTechTutor is a coaching platform — live faculty, one-to-one sessions, video classes, and doubt clearing. If you need someone to explain things and help you through difficult concepts, that is what BTechTutor is built for.",
      },
      {
        question: "How is BTechTutor different from KTU Special?",
        answer:
          "KTU Special is primarily a community resource for notes and downloads. BTechTutor is focused on active teaching and personal coaching. Both serve different needs. If you just need notes, KTU Special works fine. If you need a teacher who understands your specific problem and works with you until you understand — that is what BTechTutor does.",
      },
      {
        question: "Is online coaching actually effective for KTU?",
        answer:
          "For most students, yes — and in many cases more effective than offline group classes. You get to pick faculty for specific subjects, there is no commuting time, and the schedule is flexible. For students who are struggling, one-to-one online sessions at BTechTutor consistently produce better outcomes than group offline coaching because the teaching adapts to the individual.",
      },
      {
        question: "Can BTechTutor help me improve my CGPA?",
        answer:
          "Yes, this is one of the most common reasons students join. We identify which subjects are pulling your CGPA down and work specifically on those. It is about building genuine understanding, not just exam shortcuts. Roshan Roy went to 8.9 at GCE Thrissur. Nihila K reached 8.32 at GEC Kannur. Both are BTechTutor students.",
      },
      {
        question: "Does BTechTutor work for students from all Kerala engineering colleges?",
        answer:
          "Yes. The coaching follows the KTU syllabus, which is standard across all affiliated colleges, government, aided, and private. GCE Thrissur, Model Engineering College, Mar Athanasius, or any other KTU college — the preparation is fully applicable.",
      },
      {
        question: "Why should I choose BTechTutor over free YouTube coaching?",
        answer:
          "YouTube is great when you are self-motivated and have time to search, compile, and manage your own learning. It stops working when you have a specific doubt, a deadline approaching, and nobody answers your question. BTechTutor gives you a teacher who responds to your exact question, adjusts when you do not understand, and tracks your progress. That is something no channel can do.",
      },
    ],
  },
};
