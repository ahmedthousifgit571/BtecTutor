import type { Metadata } from "next";
import { generateMeta } from "@/lib/seo";
import { LocationsHub } from "@/components/sections/LocationsHub";

export const metadata: Metadata = generateMeta({
  title: "KTU & GATE Coaching Locations | BTechTutor",
  description:
    "Find BTechTutor's online KTU and GATE coaching for your city — Kochi, Trivandrum, Thrissur, Kozhikode, Palakkad, Kannur, across Kerala and the UAE.",
  keywords: [
    "KTU coaching locations",
    "KTU coaching Kerala",
    "GATE coaching Kerala",
    "online BTech tuition",
  ],
  canonicalUrl: "/ktu-coaching",
});

export default function LocationsHubPage() {
  return <LocationsHub />;
}
