"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import SplitText from "@/components/ui/SplitText";
import oneToOneImage from "@/assets/oneToOne.png";
import {
  oneToOneTuitionContent,
  type OneToOneTuitionContent,
} from "@/lib/content/one-to-one-tuition";

interface OneToOneTuitionProps {
  content?: OneToOneTuitionContent;
}

export function OneToOneTuition({ content = oneToOneTuitionContent }: OneToOneTuitionProps) {
  return (
    <section className="bg-charcoal py-20 border-b border-white/5">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center mb-12">
          <Badge variant="violet" className="mb-4 !bg-brand-orange/10 !text-brand-orange">
            {content.badgeLabel}
          </Badge>
          <SplitText
            text={content.heading}
            tag="h2"
            className="text-fluid-3xl font-bold text-brand-orange"
            delay={50}
            duration={1.25}
            ease="power3.out"
            splitType="chars"
            from={{ opacity: 0, y: 40 }}
            to={{ opacity: 1, y: 0 }}
            threshold={0.1}
            rootMargin="-100px"
            textAlign="center"
          />
          <p
            className="mt-3 font-semibold text-white text-balance"
            style={{ fontSize: "clamp(1rem, 2.6vw, 2rem)" }}
          >
            {content.tagline}
          </p>
          <p className="mt-5 text-xl md:text-2xl font-semibold text-white/85 leading-relaxed text-balance">
            {content.subheading}
          </p>
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="float-none md:float-right md:ml-8 md:mb-5 mb-6 w-full md:w-[340px] lg:w-[380px]">
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.03]">
              <Image
                src={oneToOneImage}
                alt="One-to-one tuition with dedicated tutor"
                className="h-auto w-full object-cover"
                priority={false}
              />
            </div>
          </div>
          {content.bodyParagraphs.map((paragraph) => (
            <p key={paragraph} className="mb-5 text-base leading-8 text-white/60 md:text-lg last:mb-0">
              {paragraph}
            </p>
          ))}
          <div className="clear-both" />
        </div>

        <div className="mx-auto mt-12 max-w-5xl">
          <h3 className="text-2xl font-semibold text-white mb-6">{content.differentiatorsHeading}</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {content.differentiators.map((item) => (
              <div
                key={item.title}
                className="group rounded-2xl border border-white/10 bg-white/[0.03] p-6 hover:border-brand-orange/40 hover:bg-white/[0.05] hover:-translate-y-1 transition-all duration-300"
              >
                <h4 className="text-lg font-semibold text-white mb-2 group-hover:text-brand-orange transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm leading-relaxed text-white/55">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="mt-10 text-center">
          <Link
            href={content.cta.href}
            className="inline-flex items-center gap-2 rounded-lg bg-brand-orange px-7 py-3 text-base font-medium text-white shadow-lg shadow-brand-orange/25 hover:bg-brand-orange-dark hover:shadow-brand-orange/40 transition-all duration-300"
          >
            {content.cta.label}
            <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
