export interface ServeLocation {
  number: string;
  label: string;
}

export interface WhereWeServeContent {
  badgeLabel: string;
  headingHighlight: string;
  headingSuffix: string;
  paragraphs: string[];
  locations: ServeLocation[];
  image: {
    src: string;
    alt: string;
  };
}

export const whereWeServeContent: WhereWeServeContent = {
  badgeLabel: "Where We Serve",
  headingHighlight: "Serving KTU Students Across Kerala",
  headingSuffix: "— and Beyond",
  paragraphs: [
    "BTechTutor started in Kerala, and our roots are here. But online coaching means geography no longer limits who we can help.",
    "Whether you are in Kochi, Trivandrum, Thrissur, Kozhikode, Kannur, Palakkad, or any corner of Kerala, you can access the same expert faculty, the same quality notes, and the same live coaching sessions from your phone or laptop.",
    "We also serve Indian engineering students in the UAE, Dubai, Abu Dhabi, Qatar, and other Gulf countries. Our flexible scheduling and online-first approach make BTechTutor the natural choice for NRI students too.",
  ],
  locations: [
    { number: "01", label: "Kochi / Ernakulam" },
    { number: "02", label: "Trivandrum / Thiruvananthapuram" },
    { number: "03", label: "Thrissur" },
    { number: "04", label: "Kozhikode / Calicut" },
    { number: "05", label: "Palakkad" },
    { number: "06", label: "Kannur" },
    { number: "07", label: "All KTU-affiliated colleges across Kerala" },
    { number: "08", label: "UAE / Dubai / Abu Dhabi / Qatar — Indian students abroad" },
  ],
  image: {
    src: "/assets/whatweserveImage.png",
    alt: "BTechTutor serving students across Kerala and beyond",
  },
};
