// Maps URL paths to a prefilled WhatsApp enquiry message, used by global
// elements (footer CTA, floating button) that render on every page and
// don't have access to a specific page's content object.
// More specific paths must come before their parent paths since lookup
// is by longest-prefix match.
const ROUTE_MESSAGES: Array<{ prefix: string; message: string }> = [
  { prefix: "/ktu/2019-vs-2024", message: "Hi BTechTutor! I'm trying to decide between the KTU 2019 and 2024 scheme. Could you help me understand the difference?" },
  { prefix: "/ktu/supply-exam", message: "Hi BTechTutor! I need supply exam coaching for KTU. Could you share more details?" },
  { prefix: "/ktu/series-exam", message: "Hi BTechTutor! I need series exam coaching for KTU. Could you share more details?" },
  { prefix: "/ktu/engineering-mathematics", message: "Hi BTechTutor! I need help with KTU Engineering Mathematics. Could you share more details?" },
  { prefix: "/ktu/cgpa", message: "Hi BTechTutor! I have a question about KTU CGPA calculation. Could you help me?" },
  { prefix: "/ktu/exam-timetable", message: "Hi BTechTutor! I need the latest KTU exam timetable. Could you help me?" },
  { prefix: "/ktu/results", message: "Hi BTechTutor! I need help regarding KTU results. Could you share more details?" },
  { prefix: "/ktu/revaluation", message: "Hi BTechTutor! I need information about KTU revaluation. Could you help me?" },
  { prefix: "/ktu/previous-year-papers", message: "Hi BTechTutor! I need KTU previous year question papers. Could you share more details?" },
  { prefix: "/ktu/notes-free", message: "Hi BTechTutor! I need free KTU notes. Could you share more details?" },
  { prefix: "/ktu/syllabus-2019", message: "Hi BTechTutor! I need the KTU 2019 scheme syllabus. Could you share more details?" },
  { prefix: "/ktu/syllabus-2024", message: "Hi BTechTutor! I need the KTU 2024 scheme syllabus. Could you share more details?" },
  { prefix: "/ktu/2019", message: "Hi BTechTutor! I need more information about the KTU 2019 scheme coaching. Could you help me?" },
  { prefix: "/ktu/2024", message: "Hi BTechTutor! I need more information about the KTU 2024 scheme coaching. Could you help me?" },
  { prefix: "/ktu/search", message: "Hi BTechTutor! I'm looking for a specific KTU subject. Could you help me find it?" },
  { prefix: "/ktu", message: "Hi BTechTutor! I need more information about your KTU coaching. Could you share the details?" },
  { prefix: "/gate-coaching", message: "Hi BTechTutor! I need more information about your GATE coaching. Could you please provide that?" },
  { prefix: "/gate", message: "Hi BTechTutor! I need more information about your GATE coaching. Could you please provide that?" },
  { prefix: "/btech-tuition-kerala", message: "Hi BTechTutor! I need more information about BTech tuition in Kerala. Could you share more details?" },
  { prefix: "/one-to-one-coaching", message: "Hi BTechTutor! I'm interested in one-to-one coaching. Could you share more details?" },
  { prefix: "/coaching-in", message: "Hi BTechTutor! I'm looking for coaching near me. Could you share more details?" },
  { prefix: "/courses", message: "Hi BTechTutor! I'd like to know more about the courses you offer. Could you share the details?" },
  { prefix: "/fees", message: "Hi BTechTutor! I'd like to know about your fee structure. Could you share the details?" },
  { prefix: "/faculty", message: "Hi BTechTutor! I'd like to know more about your faculty. Could you share more details?" },
  { prefix: "/about", message: "Hi BTechTutor! I'd like to know more about BTechTutor. Could you share more details?" },
  { prefix: "/why-us", message: "Hi BTechTutor! I'd like to know why I should choose BTechTutor. Could you share more details?" },
  { prefix: "/reviews", message: "Hi BTechTutor! I saw your reviews and would like to know more about your coaching. Could you help me?" },
  { prefix: "/blog", message: "Hi BTechTutor! I read your blog and would like to know more about your coaching. Could you help me?" },
  { prefix: "/contact", message: "Hi BTechTutor! I'd like to get in touch regarding your coaching. Could you help me?" },
  { prefix: "/free-demo", message: "Hi BTechTutor! I'd like to book a demo class. Could you help me?" },
  { prefix: "/get-started", message: "Hi BTechTutor! I'd like to get started with your coaching. Could you help me?" },
];

const DEFAULT_MESSAGE =
  "Hi BTechTutor! I'm interested in your GATE/KTU coaching programs. Could you share more details about the courses, fees, and upcoming batches?";

export function getWhatsAppMessageForPath(pathname: string): string {
  const match = ROUTE_MESSAGES.find((route) => pathname.startsWith(route.prefix));
  return match ? match.message : DEFAULT_MESSAGE;
}
