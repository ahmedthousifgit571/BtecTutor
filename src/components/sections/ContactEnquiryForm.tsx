"use client";

import { useState, type FormEvent } from "react";
import { CheckCircle, Loader2, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";
import type { ContactPageContent } from "@/lib/content/contact-page";

interface ContactEnquiryFormProps {
  content: ContactPageContent["formContent"];
  className?: string;
  theme?: "light" | "dark";
}

export function ContactEnquiryForm({
  content,
  className,
  theme = "light",
}: ContactEnquiryFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const isDark = theme === "dark";

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const formData = new FormData(event.currentTarget);
    const fullName = String(formData.get("name") || "");
    const phone = String(formData.get("phone") || "");
    const email = String(formData.get("email") || "");
    const department = String(formData.get("department") || "");
    const semester = String(formData.get("semester") || "");
    const subject = String(formData.get("subject") || "");
    const message = String(formData.get("message") || "");

    const payload = {
      name: fullName,
      email,
      phone,
      course: `${department} | ${semester} | ${subject}`,
      message:
        `Department: ${department}\nSemester: ${semester}\nSubject/Course: ${subject}` +
        (message ? `\n\nMessage: ${message}` : ""),
    };

    try {
      const response = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const json = await response.json();
        throw new Error(json.error || "Failed to submit enquiry");
      }

      setStatus("success");
      event.currentTarget.reset();
    } catch (error) {
      setStatus("error");
      setErrorMessage(error instanceof Error ? error.message : "Failed to submit enquiry");
    }
  }

  const labelClass = cn(
    "block text-sm font-medium",
    isDark ? "text-white/80" : "text-gray-700"
  );
  const inputClass = cn(
    "w-full rounded-xl border px-4 py-2.5 text-sm transition-all duration-300 focus:border-brand-orange focus:outline-none focus:ring-2 focus:ring-brand-orange/20",
    isDark
      ? "border-white/15 bg-[#0f274e]/80 text-white placeholder:text-white/45"
      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400"
  );

  return (
    <div
      className={cn(
        isDark
          ? "rounded-2xl border border-white/10 bg-gradient-to-br from-[#0a2144]/95 via-[#0a1a35]/95 to-[#081326]/95 p-6 shadow-2xl shadow-black/50 backdrop-blur-sm sm:p-7"
          : "rounded-2xl border border-gray-100 bg-white p-6 shadow-xl shadow-black/5 sm:p-7",
        className
      )}
    >
      {status === "success" ? (
        <div className="flex min-h-[420px] flex-col items-center justify-center text-center">
          <CheckCircle className="mb-4 h-12 w-12 text-green-500" />
          <h2 className={cn("text-xl font-semibold", isDark ? "text-white" : "text-gray-900")}>
            {content.successTitle}
          </h2>
          <p className={cn("mt-2 max-w-sm text-sm leading-relaxed", isDark ? "text-white/60" : "text-gray-500")}>
            {content.successMessage}
          </p>
        </div>
      ) : (
        <>
          <div className="mb-6">
            <h2 className={cn("text-xl font-semibold", isDark ? "text-white" : "text-gray-900")}>
              {content.title}
            </h2>
            <p className={cn("mt-1 text-sm", isDark ? "text-white/55" : "text-gray-500")}>
              {content.subtitle}
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1.5">
              <label htmlFor="contact-full-name" className={labelClass}>
                Full Name
              </label>
              <input
                id="contact-full-name"
                name="name"
                required
                placeholder="Enter your full name"
                className={inputClass}
              />
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="contact-phone" className={labelClass}>
                  Phone Number
                </label>
                <input
                  id="contact-phone"
                  name="phone"
                  type="tel"
                  required
                  placeholder="+91 98950 06772"
                  className={inputClass}
                />
              </div>
              <div className="space-y-1.5">
                <label htmlFor="contact-email" className={labelClass}>
                  Email Address
                </label>
                <input
                  id="contact-email"
                  name="email"
                  type="email"
                  required
                  placeholder="you@example.com"
                  className={inputClass}
                />
              </div>
            </div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="space-y-1.5">
                <label htmlFor="contact-department" className={labelClass}>
                  Department
                </label>
                <select id="contact-department" name="department" required className={inputClass}>
                  <option value="" className={isDark ? "bg-charcoal text-white" : "bg-white text-gray-900"}>
                    Select department
                  </option>
                  {content.departmentOptions.map((department) => (
                    <option key={department} value={department} className={isDark ? "bg-charcoal text-white" : "bg-white text-gray-900"}>
                      {department}
                    </option>
                  ))}
                </select>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="contact-semester" className={labelClass}>
                  Semester
                </label>
                <select id="contact-semester" name="semester" required className={inputClass}>
                  <option value="" className={isDark ? "bg-charcoal text-white" : "bg-white text-gray-900"}>
                    Select semester
                  </option>
                  {content.semesterOptions.map((semester) => (
                    <option key={semester} value={semester} className={isDark ? "bg-charcoal text-white" : "bg-white text-gray-900"}>
                      {semester}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-subject" className={labelClass}>
                Subject or course you need help with
              </label>
              <input
                id="contact-subject"
                name="subject"
                required
                placeholder="Eg: Signals and Systems, GATE ECE, Control Systems"
                className={inputClass}
              />
            </div>

            <div className="space-y-1.5">
              <label htmlFor="contact-message" className={labelClass}>
                Message (optional)
              </label>
              <textarea
                id="contact-message"
                name="message"
                rows={4}
                placeholder="Share any extra details or urgency."
                className={cn(inputClass, "min-h-[104px] resize-y")}
              />
            </div>

            {status === "error" && <p className="text-sm text-red-500">{errorMessage}</p>}

            <Button
              type="submit"
              variant="primary"
              className={cn(
                "w-full",
                isDark &&
                  "bg-brand-orange shadow-[0_12px_28px_-14px_rgba(255,107,43,0.95)] hover:bg-brand-orange-dark hover:shadow-[0_18px_36px_-16px_rgba(255,107,43,0.9)]"
              )}
              disabled={status === "loading"}
            >
              {status === "loading" ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending...
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  {content.submitLabel}
                </>
              )}
            </Button>
          </form>
        </>
      )}
    </div>
  );
}
