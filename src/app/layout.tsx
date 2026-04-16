import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "600"],
  display: "swap",
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  metadataBase: new URL(
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000"
  ),
  title: {
    default: "BTEC Tutor — GATE & KTU Coaching in Kerala",
    template: "%s | BTEC Tutor",
  },
  description:
    "Kerala's premier coaching institute for GATE and KTU exam preparation. Expert faculty, comprehensive study materials, and proven results.",
  keywords: [
    "GATE coaching Kerala",
    "KTU coaching",
    "engineering coaching",
    "GATE preparation",
    "KTU exam preparation",
  ],
  openGraph: {
    type: "website",
    locale: "en_IN",
    siteName: "BTEC Tutor",
  },
  twitter: {
    card: "summary_large_image",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable}`}>
      <body className="font-sans antialiased">{children}</body>
    </html>
  );
}
