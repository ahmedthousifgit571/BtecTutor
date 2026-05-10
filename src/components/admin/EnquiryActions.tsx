"use client";

import { useState, useTransition } from "react";
import { useRouter } from "next/navigation";
import { Loader2, Mail, MessageCircle, Phone } from "lucide-react";
import type { EnquiryStatus } from "@prisma/client";
import { cn, normalizePhoneForWa } from "@/lib/utils";

interface EnquiryActionsProps {
  enquiry: {
    id: string;
    name: string;
    email: string;
    phone: string | null;
    course: string | null;
    status: EnquiryStatus;
  };
}

const STATUS_OPTIONS: { value: EnquiryStatus; label: string }[] = [
  { value: "NEW", label: "New" },
  { value: "CONTACTED", label: "Contacted" },
  { value: "CLOSED", label: "Closed" },
];

const STATUS_PILL_STYLES: Record<EnquiryStatus, string> = {
  NEW: "bg-amber-100 text-amber-800 ring-amber-200",
  CONTACTED: "bg-sky-100 text-sky-800 ring-sky-200",
  CLOSED: "bg-gray-100 text-gray-600 ring-gray-200",
};

export function EnquiryActions({ enquiry }: EnquiryActionsProps) {
  const router = useRouter();
  const [status, setStatus] = useState<EnquiryStatus>(enquiry.status);
  const [isPending, startTransition] = useTransition();
  const [error, setError] = useState<string | null>(null);

  const waNumber = normalizePhoneForWa(enquiry.phone);
  const courseSummary = enquiry.course ? ` about ${enquiry.course}` : "";
  const waMessage = encodeURIComponent(
    `Hi ${enquiry.name}, this is BTechTutor regarding your enquiry${courseSummary}.`
  );
  const mailSubject = encodeURIComponent(
    `Re: Your enquiry${courseSummary} — BTechTutor`
  );

  async function handleStatusChange(next: EnquiryStatus) {
    if (next === status) return;
    setError(null);
    const previous = status;
    setStatus(next);

    try {
      const response = await fetch(`/api/enquiry/${enquiry.id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status: next }),
      });

      if (!response.ok) {
        const json = await response.json().catch(() => ({}));
        throw new Error(json?.error || "Failed to update status");
      }

      startTransition(() => router.refresh());
    } catch (err) {
      setStatus(previous);
      setError(err instanceof Error ? err.message : "Failed to update status");
    }
  }

  const iconButtonClass =
    "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-gray-200 text-gray-500 transition-colors hover:border-brand-orange/50 hover:bg-brand-orange/5 hover:text-brand-orange";

  return (
    <div className="flex flex-wrap items-center gap-2">
      <div className="relative inline-flex items-center">
        <select
          aria-label="Enquiry status"
          value={status}
          disabled={isPending}
          onChange={(event) =>
            handleStatusChange(event.target.value as EnquiryStatus)
          }
          className={cn(
            "appearance-none rounded-full px-3 py-1 pr-7 text-xs font-medium ring-1 ring-inset transition-colors focus:outline-none focus:ring-2 focus:ring-brand-orange/40",
            STATUS_PILL_STYLES[status],
            isPending && "opacity-60"
          )}
        >
          {STATUS_OPTIONS.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <span className="pointer-events-none absolute right-2 text-xs text-current opacity-60">
          ▾
        </span>
      </div>

      {isPending && <Loader2 className="h-3.5 w-3.5 animate-spin text-gray-400" />}
      {error && <span className="text-xs text-red-500">{error}</span>}

      <div className="ml-auto flex items-center gap-1.5">
        {enquiry.phone && (
          <>
            <a
              href={`tel:${enquiry.phone}`}
              title={`Call ${enquiry.phone}`}
              className={iconButtonClass}
            >
              <Phone className="h-4 w-4" />
            </a>
            {waNumber && (
              <a
                href={`https://wa.me/${waNumber}?text=${waMessage}`}
                target="_blank"
                rel="noopener noreferrer"
                title="Open WhatsApp"
                className={iconButtonClass}
              >
                <MessageCircle className="h-4 w-4" />
              </a>
            )}
          </>
        )}
        <a
          href={`mailto:${enquiry.email}?subject=${mailSubject}`}
          title={`Email ${enquiry.email}`}
          className={iconButtonClass}
        >
          <Mail className="h-4 w-4" />
        </a>
      </div>
    </div>
  );
}
