"use client";

export function FloatingObjects() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none hidden md:block"
      aria-hidden="true"
    >
      {/* Glass Chip */}
      <div
        className="float-element animate-float-chip absolute left-[8%] top-[20%] w-28 h-28 sm:w-36 sm:h-36"
        style={{ perspective: "800px" }}
      >
        <div className="relative w-full h-full glass rounded-xl" style={{ transformStyle: "preserve-3d" }}>
          <div className="absolute inset-4 border border-white/10 rounded-lg flex items-center justify-center">
            <div className="w-8 h-8 sm:w-10 sm:h-10 border border-white/20 rounded-sm bg-white/5" />
          </div>
          <div className="absolute bottom-2 left-3 right-3 flex gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-3 w-px bg-white/15" />
            ))}
          </div>
          <div className="absolute top-2 left-3 right-3 flex gap-1">
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-3 w-px bg-white/15" />
            ))}
          </div>
        </div>
      </div>

      {/* Glass Orb */}
      <div className="float-element animate-float-orb absolute left-1/2 top-[15%] -translate-x-1/2 w-32 h-32 sm:w-44 sm:h-44">
        <div className="relative w-full h-full rounded-full glass">
          <div className="absolute inset-3 rounded-full border border-white/10 bg-gradient-radial from-white/10 to-transparent" />
          <div className="absolute top-1/4 left-1/3 w-3 h-3 rounded-full bg-white/20 blur-sm" />
          <div className="absolute top-[40%] right-1/4 w-2 h-2 rounded-full bg-brand-orange/30 blur-sm" />
          <div className="absolute inset-0 rounded-full bg-gradient-to-tr from-brand-orange/5 via-transparent to-brand-sky/5" />
        </div>
      </div>

      {/* Glass Gear */}
      <div
        className="float-element animate-float-gear absolute right-[8%] top-[18%] w-24 h-24 sm:w-32 sm:h-32"
        style={{ perspective: "800px" }}
      >
        <div
          className="relative w-full h-full glass rounded-xl"
          style={{ transformStyle: "preserve-3d", transform: "rotateY(-15deg) rotateX(5deg)" }}
        >
          <div className="absolute inset-3 flex items-center justify-center">
            <div className="w-10 h-10 sm:w-14 sm:h-14 rounded-full border-2 border-white/15">
              <div className="w-full h-full rounded-full border-4 border-dashed border-white/10 animate-[spin_20s_linear_infinite]" />
            </div>
          </div>
          {Array.from({ length: 8 }).map((_, i) => (
            <div
              key={i}
              className="absolute left-1/2 top-1/2 w-1 h-3 bg-white/10 rounded-full origin-bottom"
              style={{
                transform: `translate(-50%, -100%) rotate(${i * 45}deg) translateY(-14px)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Math Symbols */}
      <div className="float-element animate-float-subtle-1 absolute left-[15%] bottom-[25%]">
        <span className="text-3xl sm:text-4xl font-light text-white/15 glass rounded-lg px-3 py-1 inline-block">
          E<sup className="text-lg">2</sup>
        </span>
      </div>

      <div className="float-element animate-float-subtle-2 absolute right-[20%] bottom-[30%]">
        <span className="text-3xl sm:text-4xl font-light text-white/15 glass rounded-lg px-3 py-1 inline-block">
          x-z
        </span>
      </div>

      <div className="float-element animate-float-subtle-3 absolute left-[35%] bottom-[15%]">
        <span className="text-2xl sm:text-3xl font-serif italic text-white/12 glass rounded-lg px-3 py-1 inline-block">
          a
        </span>
      </div>

      <div className="float-element animate-float-subtle-1 absolute right-[35%] bottom-[20%]">
        <span className="text-2xl sm:text-3xl font-light text-white/12 glass rounded-lg px-3 py-1 inline-block">
          V<sup className="text-base">2</sup>
        </span>
      </div>
    </div>
  );
}
