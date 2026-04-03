"use client";

import { useState, type FormEvent } from "react";
import { Send, CheckCircle, Loader2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

interface LeadFormProps {
  className?: string;
  variant?: "card" | "inline";
  theme?: "light" | "dark";
  defaultCourse?: string;
}

export function LeadForm({
  className,
  variant = "card",
  theme = "light",
  defaultCourse,
}: LeadFormProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const isDark = theme === "dark";

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setStatus("loading");

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name") as string,
      email: formData.get("email") as string,
      phone: formData.get("phone") as string,
      course: formData.get("course") as string,
      message: formData.get("message") as string,
    };

    try {
      const res = await fetch("/api/enquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const json = await res.json();
        throw new Error(json.error || "Something went wrong");
      }

      setStatus("success");
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "Failed to submit");
    }
  }

  if (status === "success") {
    return (
      <div
        className={cn(
          "flex flex-col items-center justify-center text-center p-8",
          variant === "card" &&
            (isDark
              ? "rounded-2xl border border-white/10 bg-white/5"
              : "rounded-2xl border border-gray-100 bg-white shadow-sm"),
          className
        )}
      >
        <CheckCircle className="h-12 w-12 text-green-500 mb-4" />
        <h3 className={cn("text-lg font-semibold", isDark ? "text-white" : "text-gray-900")}>
          Thank You!
        </h3>
        <p className={cn("mt-2 text-sm", isDark ? "text-white/50" : "text-gray-500")}>
          We&apos;ve received your enquiry and will get back to you shortly.
        </p>
      </div>
    );
  }

  const labelClass = cn("block text-sm font-medium", isDark ? "text-white/70" : "text-gray-700");
  const inputClass = cn(
    "w-full rounded-lg border px-4 py-2.5 text-sm transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/20",
    isDark
      ? "border-white/20 bg-white/5 text-white placeholder:text-white/30 focus:border-brand-orange"
      : "border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:border-brand-orange"
  );

  return (
    <div
      className={cn(
        variant === "card" &&
          (isDark
            ? "rounded-2xl border border-white/10 bg-white/5 p-6 backdrop-blur-sm"
            : "rounded-2xl border border-gray-100 bg-white p-6 shadow-sm"),
        className
      )}
    >
      {variant === "card" && (
        <div className="mb-6">
          <h3 className={cn("text-lg font-semibold", isDark ? "text-white" : "text-gray-900")}>
            Get in Touch
          </h3>
          <p className={cn("text-sm mt-1", isDark ? "text-white/50" : "text-gray-500")}>
            Fill in your details and we&apos;ll reach out
          </p>
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="space-y-1.5">
          <label htmlFor="lead-name" className={labelClass}>Full Name</label>
          <input id="lead-name" name="name" placeholder="Your name" required className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-email" className={labelClass}>Email</label>
          <input id="lead-email" name="email" type="email" placeholder="you@example.com" required className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-phone" className={labelClass}>Phone</label>
          <input id="lead-phone" name="phone" type="tel" placeholder="+91 98765 43210" className={inputClass} />
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-course" className={labelClass}>Course Interest</label>
          <select id="lead-course" name="course" defaultValue={defaultCourse || ""} className={inputClass}>
            <option value="">Select a course</option>
            <option value="GATE ECE">GATE ECE</option>
            <option value="GATE EEE">GATE EEE</option>
            <option value="GATE Instrumentation">GATE Instrumentation</option>
            <option value="KTU CSE">KTU CSE</option>
            <option value="KTU Mechanical">KTU Mechanical</option>
            <option value="KTU Civil">KTU Civil</option>
          </select>
        </div>
        <div className="space-y-1.5">
          <label htmlFor="lead-message" className={labelClass}>Message (optional)</label>
          <textarea
            id="lead-message"
            name="message"
            placeholder="Any specific requirements..."
            rows={3}
            className={cn(inputClass, "min-h-[80px] resize-y")}
          />
        </div>

        {status === "error" && (
          <p className="text-sm text-red-400">{errorMessage}</p>
        )}

        <Button
          type="submit"
          variant="primary"
          className="w-full"
          disabled={status === "loading"}
        >
          {status === "loading" ? (
            <>
              <Loader2 className="h-4 w-4 animate-spin" />
              Submitting...
            </>
          ) : (
            <>
              <Send className="h-4 w-4" />
              Submit Enquiry
            </>
          )}
        </Button>
      </form>
    </div>
  );
}
