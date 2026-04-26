import { cn } from "@/lib/utils";
import { LeadForm } from "@/components/sections/LeadForm";
import type { LeadFormContent } from "@/lib/content/lead-form";
import type { ReactNode } from "react";
import Image from "next/image";
import getInTouchImage from "@/assets/getInTouch.png";

export interface GetInTouchSectionProps {
  /** "dark" renders on charcoal bg; "light" renders on white/transparent bg */
  theme?: "dark" | "light";
  /** Section-level heading — supports a ReactNode so callers can embed <span> highlights */
  heading: ReactNode;
  /** Short paragraph below the heading */
  description?: string;
  /** Optional bullet features shown below the description */
  features?: string[];
  /** Arbitrary extra content rendered below features (e.g. contact cards) */
  children?: ReactNode;
  /** Override the default LeadForm content (title, labels, etc.) */
  formContent?: LeadFormContent;
  /** Pre-select a course in the form dropdown */
  defaultCourse?: string;
  /** Submit button label override */
  submitLabel?: string;
  /** Extra classes on the outer <section> */
  className?: string;
  /** HTML id for anchor linking (e.g. #get-in-touch) */
  id?: string;
  /** "full" = standalone section with py; "compact" = no outer padding (for embedding) */
  layout?: "full" | "compact";
  /** "side" = 2-col grid (default); "stacked" = form below text */
  orientation?: "side" | "stacked";
  /** Show decorative illustration under left content */
  showIllustration?: boolean;
}

export function GetInTouchSection({
  theme = "dark",
  heading,
  description,
  features,
  children,
  formContent,
  defaultCourse,
  submitLabel,
  className,
  id = "get-in-touch",
  layout = "full",
  orientation = "side",
  showIllustration,
}: GetInTouchSectionProps) {
  const isDark = theme === "dark";
  const shouldShowIllustration = showIllustration ?? isDark;

  const mergedFormContent: LeadFormContent | undefined =
    formContent || submitLabel
      ? {
          ...(formContent ?? {
            title: "Get in Touch",
            subtitle: "Fill in your details and we'll reach out",
            successTitle: "Thank You!",
            successMessage:
              "We've received your enquiry and will get back to you shortly.",
            submitLabel: "Submit Enquiry",
            courseOptions: [
              "GATE ECE",
              "GATE EEE",
              "GATE Instrumentation",
              "KTU CSE",
              "KTU Mechanical",
              "KTU Civil",
            ],
          }),
          ...(submitLabel ? { submitLabel } : {}),
        }
      : undefined;

  return (
    <section
      id={id}
      className={cn(
        isDark ? "bg-charcoal" : "bg-white",
        layout === "full" && "py-20 sm:py-24",
        className
      )}
    >
      <div
        className={cn(
          "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8",
          orientation === "stacked" && "max-w-4xl"
        )}
      >
        {/* Decorative accent bar */}
        {layout === "full" && (
          <div className="mb-10 flex items-center gap-3">
            <span className="h-1 w-10 rounded-full bg-brand-orange" />
            <span
              className={cn(
                "text-sm font-semibold uppercase tracking-wider",
                isDark ? "text-brand-orange" : "text-brand-orange"
              )}
            >
              Get in Touch
            </span>
          </div>
        )}

        <div
          className={cn(
            orientation === "side"
              ? "grid lg:grid-cols-2 gap-12 lg:gap-16 items-start"
              : "flex flex-col gap-10"
          )}
        >
          {/* Left / Top — text content */}
          <div className="flex flex-col gap-6">
            <h2
              className={cn(
                "text-fluid-3xl font-bold leading-tight",
                isDark ? "text-white" : "text-gray-900"
              )}
            >
              {heading}
            </h2>

            {description && (
              <p
                className={cn(
                  "text-lg leading-relaxed max-w-xl",
                  isDark ? "text-white/50" : "text-gray-500"
                )}
              >
                {description}
              </p>
            )}

            {features && features.length > 0 && (
              <ul className="space-y-3">
                {features.map((item) => (
                  <li
                    key={item}
                    className={cn(
                      "flex items-center gap-3 text-sm",
                      isDark ? "text-white/60" : "text-gray-600"
                    )}
                  >
                    <span className="h-2 w-2 rounded-full bg-brand-orange shrink-0" />
                    {item}
                  </li>
                ))}
              </ul>
            )}

            {children}

            {orientation === "side" && shouldShowIllustration && (
              <div
                className={cn(
                  "relative mt-2 hidden p-4 lg:block"
                )}
              >
                <Image
                  src={getInTouchImage}
                  alt="Get in touch with BTechTutor"
                  className="mx-auto h-auto max-h-[360px] w-full max-w-[440px] object-contain xl:max-h-[400px]"
                  priority={false}
                />
              </div>
            )}
          </div>

          {/* Right / Bottom — lead form */}
          <div
            className={cn(
              isDark
                ? "rounded-2xl border border-white/10 bg-white/[0.04] p-1 backdrop-blur-md"
                : "rounded-2xl border border-gray-100 bg-white p-1 shadow-xl shadow-black/5"
            )}
          >
            <LeadForm
              variant="card"
              theme={isDark ? "dark" : "light"}
              defaultCourse={defaultCourse}
              content={mergedFormContent}
              className={cn(
                "!shadow-none !border-0",
                isDark ? "!bg-transparent" : "!bg-white"
              )}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
