import type { Metadata } from "next";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { generateMeta } from "@/lib/seo";
import { Breadcrumb } from "@/components/seo/Breadcrumb";
import { LeadForm } from "@/components/sections/LeadForm";
import { SITE_CONFIG } from "@/lib/constants";

export const metadata: Metadata = generateMeta({
  title: "Contact Us — Get in Touch with BTEC Tutor",
  description:
    "Contact BTEC Tutor for GATE and KTU coaching enquiries. Visit our centers in Kochi, Trivandrum, or Calicut, or reach us by phone and email.",
  canonicalUrl: "/contact",
});

const contactInfo = [
  {
    icon: <Mail className="h-5 w-5" />,
    label: "Email",
    value: SITE_CONFIG.email,
    href: `mailto:${SITE_CONFIG.email}`,
  },
  {
    icon: <Phone className="h-5 w-5" />,
    label: "Phone",
    value: SITE_CONFIG.phone,
    href: `tel:${SITE_CONFIG.phone}`,
  },
  {
    icon: <MapPin className="h-5 w-5" />,
    label: "Address",
    value: "Kochi, Kerala, India",
    href: null,
  },
  {
    icon: <Clock className="h-5 w-5" />,
    label: "Hours",
    value: "Mon - Sat, 9:00 AM - 7:00 PM",
    href: null,
  },
];

export default function ContactPage() {
  return (
    <div className="pt-24 pb-16">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Breadcrumb items={[{ name: "Contact", url: "/contact" }]} className="mb-8" />

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Info */}
          <div>
            <h1 className="text-fluid-3xl font-bold text-gray-900 mb-4">
              Get in <span className="gradient-text-dark">Touch</span>
            </h1>
            <p className="text-lg text-gray-500 mb-10">
              Have questions about our coaching programs? We&apos;d love to hear from
              you. Fill out the form or reach us through the contact details
              below.
            </p>

            <div className="space-y-6">
              {contactInfo.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="rounded-xl bg-brand-orange/5 p-3 text-brand-orange shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm font-medium text-gray-900">{item.label}</p>
                    {item.href ? (
                      <a
                        href={item.href}
                        className="text-sm text-gray-500 hover:text-brand-orange transition-colors"
                      >
                        {item.value}
                      </a>
                    ) : (
                      <p className="text-sm text-gray-500">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Centers */}
            <div className="mt-12">
              <h2 className="text-lg font-bold text-gray-900 mb-4">Our Centers</h2>
              <div className="grid sm:grid-cols-3 gap-4">
                {["Kochi", "Trivandrum", "Calicut"].map((city) => (
                  <div
                    key={city}
                    className="rounded-xl border border-gray-100 bg-white p-4 text-center"
                  >
                    <MapPin className="h-5 w-5 text-brand-orange mx-auto mb-2" />
                    <p className="text-sm font-medium text-gray-900">{city}</p>
                    <p className="text-xs text-gray-400">Kerala</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Form */}
          <div>
            <LeadForm variant="card" />
          </div>
        </div>
      </div>
    </div>
  );
}
