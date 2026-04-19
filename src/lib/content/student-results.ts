export interface StudentResult {
  name: string;
  cgpa: string;
  college: string;
}

export interface StudentResultsContent {
  badgeLabel: string;
  headline: string;
  headlineHighlight: string;
  subtitle: string;
  results: StudentResult[];
}

export const studentResultsContent: StudentResultsContent = {
  badgeLabel: "Student Results",
  headline: "Results That Speak for",
  headlineHighlight: "Themselves",
  subtitle:
    "Real students. Real colleges. Real CGPA scores. Not testimonials we made up.",
  results: [
    {
      name: "Roshan Roy",
      cgpa: "8.9",
      college: "Government College of Engineering, Thrissur",
    },
    {
      name: "Abhay Arackal",
      cgpa: "8.8",
      college: "Model College of Engineering, Thrikkakkara",
    },
    {
      name: "Abhinav K M",
      cgpa: "8.3",
      college: "Mar Athanasius College of Engineering",
    },
    {
      name: "Nihila K",
      cgpa: "8.32",
      college: "Government Engineering College Kannur",
    },
    {
      name: "Sofya Anez K A",
      cgpa: "6.68",
      college: "Gregorian Institute of Technology",
    },
  ],
};
