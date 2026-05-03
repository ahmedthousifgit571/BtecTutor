import type { Metadata } from "next";
import { PlayCircle } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { GetInTouchSection } from "@/components/sections/GetInTouchSection";

export const metadata: Metadata = generateMeta({
  title: "Get Started — Book Your Demo Class",
  description:
    "Get started with BTEC Tutor by booking a demo class. Experience our teaching methodology, interact with faculty, and choose the right coaching plan.",
  canonicalUrl: "/get-started",
});

export default function GetStartedPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Get Started", url: "/get-started" }]} className="mb-8" />

        <GetInTouchSection
          theme="light"
          layout="compact"
          heading={
            <>
              Experience Our <span className="gradient-text-dark">Teaching</span> First
            </>
          }
          description="Not sure if our coaching is right for you? Attend a free demo class and experience our methodology firsthand. No commitments, no pressure — just great teaching."
          features={[
            "Interactive session with expert faculty",
            "Experience our structured teaching methodology",
            "Get personalized preparation roadmap",
            "Access sample study materials",
            "Q&A session with current toppers",
          ]}
          submitLabel="Book Demo"
        >
          <div className="inline-flex items-center gap-2 rounded-full bg-brand-orange/5 px-4 py-2 -mt-2 -order-1">
            <PlayCircle className="h-4 w-4 text-brand-orange" />
            <span className="text-sm font-medium text-brand-orange">Free Demo Available</span>
          </div>

          <div className="rounded-xl bg-surface-muted p-6">
            <p className="text-sm font-medium text-gray-900 mb-1">Next Demo Session</p>
            <p className="text-sm text-gray-500">
              Every Saturday, 10:00 AM — Available both online and at our centers
            </p>
          </div>
        </GetInTouchSection>
      </div>
    </div>
  );
}
