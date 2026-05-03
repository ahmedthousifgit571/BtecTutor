import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { StickyCTA } from "@/components/layout/StickyCTA";
import { WhatsAppButton } from "@/components/layout/WhatsAppButton";
import { JsonLd } from "@/components/seo/JsonLd";
import { buildOrganizationSchema } from "@/lib/seo";
import { LenisProvider } from "@/components/providers/LenisProvider";
import { ScrollProgressBar } from "@/components/ui/ScrollProgressBar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <LenisProvider>
      <JsonLd data={buildOrganizationSchema()} />
      <ScrollProgressBar />
      <Navbar />
      <main className="min-h-screen pt-20 lg:pt-0">{children}</main>
      <Footer />
      <StickyCTA />
      <WhatsAppButton />
    </LenisProvider>
  );
}

