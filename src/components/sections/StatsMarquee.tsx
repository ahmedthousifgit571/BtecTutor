import { statsContent, type StatItem } from "@/lib/content/stats";

interface StatsMarqueeProps {
  stats?: StatItem[];
}

export function StatsMarquee({ stats = statsContent }: StatsMarqueeProps) {
  const duplicatedStats = [...stats, ...stats];

  return (
    <section className="bg-charcoal py-6 border-y border-white/5 overflow-hidden">
      <div className="flex animate-marquee [animation-duration:16s] md:[animation-duration:30s]">
        {duplicatedStats.map((stat, i) => (
          <div
            key={`${stat.label}-${i}`}
            className="stat-item flex items-center gap-3 px-8 shrink-0"
          >
            <span className="text-xl font-bold text-brand-orange">{stat.value}</span>
            <span className="text-sm text-white/40 whitespace-nowrap">{stat.label}</span>
            <span className="text-white/10 ml-4">|</span>
          </div>
        ))}
      </div>
    </section>
  );
}
