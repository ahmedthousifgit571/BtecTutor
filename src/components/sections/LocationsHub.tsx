"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowUpRight, MapPin, GraduationCap, Users, Award, Globe2 } from "lucide-react";
import {
  ktuLocationPages,
  gateLocationPages,
  type LocationPageContent,
} from "@/lib/content/location-pages";

const MotionLink = motion.create(Link);

const cardVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.06, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  }),
};

function LocationCard({
  location,
  index,
}: {
  location: LocationPageContent;
  index: number;
}) {
  const isGate = location.category === "gate";

  return (
    <MotionLink
      href={location.path}
      custom={index}
      variants={cardVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-40px" }}
      className="group relative overflow-hidden rounded-2xl border border-gray-200/70 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-transparent hover:shadow-[0_20px_50px_-12px_rgba(255,107,43,0.28)]"
    >
      {/* hover gradient wash */}
      <div
        className={`pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full blur-2xl opacity-0 transition-opacity duration-500 group-hover:opacity-100 ${
          isGate ? "bg-brand-sky/25" : "bg-brand-orange/25"
        }`}
      />

      <div className="relative flex items-start justify-between">
        <span
          className={`inline-flex h-12 w-12 items-center justify-center rounded-xl shadow-sm transition-transform duration-300 group-hover:scale-110 ${
            isGate
              ? "bg-gradient-to-br from-brand-sky to-sky-500 text-white"
              : "bg-gradient-to-br from-brand-orange to-amber-500 text-white"
          }`}
        >
          {isGate ? <GraduationCap className="h-6 w-6" /> : <MapPin className="h-6 w-6" />}
        </span>
        <ArrowUpRight
          className={`h-5 w-5 -translate-y-0.5 translate-x-0.5 text-gray-300 transition-all duration-300 group-hover:translate-x-0 group-hover:translate-y-0 ${
            isGate ? "group-hover:text-brand-sky" : "group-hover:text-brand-orange"
          }`}
        />
      </div>

      <h3 className="relative mt-5 text-lg font-bold text-gray-900">
        {location.navLabel}
      </h3>
      <p className="relative mt-1.5 text-sm leading-relaxed text-gray-500">
        {location.navTagline}
      </p>

      <span
        className={`relative mt-5 inline-flex items-center gap-1 text-sm font-semibold ${
          isGate ? "text-brand-sky" : "text-brand-orange"
        }`}
      >
        View details
        <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
      </span>

      {/* bottom accent line */}
      <span
        className={`pointer-events-none absolute bottom-0 left-0 h-1 w-0 rounded-full transition-all duration-500 group-hover:w-full ${
          isGate
            ? "bg-gradient-to-r from-brand-sky to-sky-400"
            : "bg-gradient-to-r from-brand-orange to-amber-400"
        }`}
      />
    </MotionLink>
  );
}

const stats = [
  { icon: Users, value: "5,000+", label: "Students coached" },
  { icon: Award, value: "100+", label: "Expert faculty" },
  { icon: Globe2, value: "8+", label: "Regions served" },
];

export function LocationsHub() {
  return (
    <div className="bg-white pb-20">
      {/* ── Hero band ── */}
      <section className="relative overflow-hidden bg-brand-navy pt-28 pb-16 sm:pb-20">
        <div className="absolute inset-0 bg-hero-gradient" />
        <div className="pointer-events-none absolute -left-24 top-10 h-72 w-72 rounded-full bg-brand-orange/20 blur-[100px]" />
        <div className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-brand-sky/10 blur-[100px]" />
        {/* dotted grid texture */}
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "radial-gradient(circle, #ffffff 1px, transparent 1px)",
            backgroundSize: "26px 26px",
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="max-w-3xl"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium text-white/80 backdrop-blur">
              <MapPin className="h-3.5 w-3.5 text-brand-orange" />
              Where We Teach
            </span>

            <h1 className="mt-6 text-fluid-3xl font-bold leading-[1.1] text-white">
              KTU &amp; GATE Coaching,{" "}
              <span
                style={{
                  background: "linear-gradient(135deg, #FF6B2B, #FFAB40)",
                  WebkitBackgroundClip: "text",
                  backgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                right where you are
              </span>
            </h1>

            <p className="mt-5 text-lg leading-relaxed text-white/70">
              BTechTutor is fully online, so wherever you are in Kerala or the Gulf,
              you get the same expert faculty, notes, and live coaching. Pick your
              location to see how we help students in your area.
            </p>
          </motion.div>

          {/* stat chips */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.15, ease: "easeOut" }}
            className="mt-10 flex flex-wrap gap-3"
          >
            {stats.map((s) => (
              <div
                key={s.label}
                className="flex items-center gap-3 rounded-xl border border-white/10 bg-white/5 px-4 py-3 backdrop-blur"
              >
                <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-brand-orange/15 text-brand-orange">
                  <s.icon className="h-4 w-4" />
                </span>
                <div className="leading-tight">
                  <div className="text-base font-bold text-white">{s.value}</div>
                  <div className="text-xs text-white/50">{s.label}</div>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ── Cards ── */}
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mt-14 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-orange/10 text-brand-orange">
            <MapPin className="h-4 w-4" />
          </span>
          <h2 className="text-xl font-bold text-gray-900">KTU Coaching Locations</h2>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {ktuLocationPages.map((location, i) => (
            <LocationCard key={location.path} location={location} index={i} />
          ))}
        </div>

        <div className="mt-16 flex items-center gap-3">
          <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-brand-sky/10 text-brand-sky">
            <GraduationCap className="h-4 w-4" />
          </span>
          <h2 className="text-xl font-bold text-gray-900">GATE Coaching</h2>
        </div>
        <div className="mt-6 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {gateLocationPages.map((location, i) => (
            <LocationCard key={location.path} location={location} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
