"use client";

import { motion } from "framer-motion";

type NodeColor = "orange" | "violet" | "green";

// SVG/inline-style attributes take a CSS color string directly, so these
// route through the same CSS vars as everything else — recolors correctly
// with the light/dark toggle instead of being baked in as raw hex.
const colorVar: Record<NodeColor, string> = {
  orange: "rgb(var(--color-orange))",
  violet: "rgb(var(--color-violet))",
  green: "rgb(var(--color-green))",
};

type IconKey = "code" | "robot" | "signal" | "shield-lock" | "headset" | "server";

type ServiceNode = {
  label: string;
  color: NodeColor;
  icon: IconKey;
  subtitle: string;
  // Both the dot's own position AND the card's anchor are derived from one
  // angle per node — dot at one radius, card at a larger radius along the
  // exact same line. That guarantees the connecting line, the dot, and the
  // card all sit on one straight radial spoke with no independent
  // positioning system that could drift out of sync with another.
  angleDeg: number;
  // Diagonal nodes push outward at partial horizontal strength (cos of a
  // 60°/120° angle), but the two purely-horizontal nodes (0°/180°) push at
  // full strength — enough to bleed into the hero's text column on the left.
  // Override just those two with a shorter radius instead of shortening
  // every node's spoke to fix a problem only they have.
  cardRadiusPct?: number;
};

const services: ServiceNode[] = [
  { label: "Software", color: "orange", icon: "code", subtitle: "Websites · Applications", angleDeg: 120 },
  { label: "Automation", color: "green", icon: "robot", subtitle: "AI · Workflows · Integration", angleDeg: 60 },
  { label: "Infrastructure", color: "violet", icon: "signal", subtitle: "Networks · Systems · Wi-Fi", angleDeg: 0, cardRadiusPct: 42 },
  { label: "Support", color: "green", icon: "headset", subtitle: "AMC · Maintenance · IT Support", angleDeg: -60 },
  { label: "Security", color: "orange", icon: "shield-lock", subtitle: "CCTV · Protection · Monitoring", angleDeg: -120 },
  { label: "Business IT", color: "violet", icon: "server", subtitle: "Setup · Hosting · Support", angleDeg: 180, cardRadiusPct: 42 },
];

const DOT_RADIUS_PCT = 33;
const CARD_RADIUS_PCT = 53;
const HUB_EDGE_PCT = 12.35; // matches the SVG hub ring's 42/340 radius

function point(angleDeg: number, radiusPct: number) {
  const rad = (angleDeg * Math.PI) / 180;
  return { left: 50 + Math.cos(rad) * radiusPct, top: 50 - Math.sin(rad) * radiusPct };
}

function Icon({ icon, className }: { icon: IconKey; className?: string }) {
  const common = { fill: "none", stroke: "currentColor", strokeWidth: 1.4, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
  switch (icon) {
    case "code":
      return (
        <svg viewBox="0 0 16 16" className={className} {...common}>
          <path d="M5 4 2 8l3 4M11 4l3 4-3 4" />
          <motion.line
            x1="8" y1="4.5" x2="8" y2="11.5"
            animate={{ opacity: [1, 0, 1] }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </svg>
      );
    case "robot":
      return (
        <svg viewBox="0 0 16 16" className={className} {...common} fill="none">
          <path d="M8 4.6V2.9" />
          <motion.circle
            cx="8" cy="2.3" r="0.9" fill="currentColor" stroke="none"
            animate={{ opacity: [1, 0.3, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
          <rect x="2.8" y="4.6" width="10.4" height="8.2" rx="2.4" />
          <motion.circle
            cx="5.6" cy="8.6" r="0.85" fill="currentColor" stroke="none"
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="10.4" cy="8.6" r="0.85" fill="currentColor" stroke="none"
            animate={{ opacity: [1, 0.15, 1] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeInOut", delay: 0.15 }}
          />
        </svg>
      );
    case "signal":
      return <svg viewBox="0 0 16 16" className={className}><rect x="2" y="9" width="2" height="5" rx="0.6" fill="currentColor" /><rect x="6" y="6" width="2" height="8" rx="0.6" fill="currentColor" /><rect x="10" y="3" width="2" height="11" rx="0.6" fill="currentColor" /></svg>;
    case "shield-lock":
      return (
        <svg viewBox="0 0 16 16" className={className} {...common}>
          <motion.circle
            cx="8" cy="8" r="6.5" fill="none" strokeWidth="1"
            style={{ transformOrigin: "8px 8px" }}
            animate={{ opacity: [0, 0.4, 0], scale: [0.65, 1.15, 0.65] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: "easeOut" }}
          />
          <path d="M8 1.5l5 2v4c0 3.5-2.2 5.8-5 7-2.8-1.2-5-3.5-5-7v-4l5-2z" />
          <rect x="6.3" y="7.3" width="3.4" height="2.8" rx="0.5" />
          <path d="M6.8 7.3V6.3a1.2 1.2 0 012.4 0v1" />
        </svg>
      );
    case "headset":
      return (
        <svg viewBox="0 0 16 16" className={className} {...common}>
          <path d="M3 8.5V7a5 5 0 0110 0v1.5" />
          <rect x="1.8" y="8" width="2.6" height="4" rx="1.1" />
          <rect x="11.6" y="8" width="2.6" height="4" rx="1.1" />
          <path d="M11.6 12v.5a2 2 0 01-2 2H8.4" />
          <motion.circle
            cx="7.5" cy="14.4" r="0.85" fill="currentColor" stroke="none"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
          />
        </svg>
      );
    case "server":
      return (
        <svg viewBox="0 0 16 16" className={className} {...common}>
          <rect x="2.3" y="2.3" width="11.4" height="4.4" rx="1.1" />
          <rect x="2.3" y="9.3" width="11.4" height="4.4" rx="1.1" />
          <path d="M4.5 4.5h3M4.5 11.5h3" />
          <motion.circle
            cx="11.3" cy="4.5" r="0.75" fill="currentColor" stroke="none"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.circle
            cx="11.3" cy="11.5" r="0.75" fill="currentColor" stroke="none"
            animate={{ opacity: [1, 0.2, 1] }}
            transition={{ duration: 1.4, repeat: Infinity, ease: "easeInOut", delay: 0.4 }}
          />
        </svg>
      );
  }
}

export function CordIQVisual({ compact = false }: { compact?: boolean }) {
  return (
    <>
      {/* Below md there's no room for the floating cards (already hidden at
          this breakpoint), which left just the hub, dots and connecting
          lines with no labels — unreadable, reads as a meaningless "radar".
          Swap the whole radial diagram for a plain, legible grid instead of
          trying to cram the same layout into a narrow viewport. */}
      <div className={`relative hidden md:block ${compact ? "w-[340px] h-[340px]" : "w-full max-w-[560px] aspect-square"}`}>
        <div className="absolute inset-[8%] rounded-full border border-black/[0.07]" />
        <div className="absolute inset-[20%] rounded-full border border-black/[0.06]" />
        <div className="absolute inset-[33%] rounded-full border border-black/[0.08]" />

        <motion.div
          className="absolute inset-[5%] rounded-full"
          style={{ background: "conic-gradient(from 40deg, rgba(245,130,46,.16), transparent 20%, rgba(139,92,246,.14), transparent 58%, rgba(52,211,153,.09), transparent)" }}
          animate={{ rotate: 360 }}
          transition={{ duration: 28, repeat: Infinity, ease: "linear" }}
        />

      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 340 340" fill="none" aria-hidden="true">
        <filter id="cordiq-glow" x="-150%" y="-150%" width="400%" height="400%"><feGaussianBlur stdDeviation="5" result="blur" /><feMerge><feMergeNode in="blur" /><feMergeNode in="SourceGraphic" /></feMerge></filter>
        {services.map((s) => {
          const dot = point(s.angleDeg, DOT_RADIUS_PCT);
          const hubEdge = point(s.angleDeg, HUB_EDGE_PCT + 1);
          return (
            <path
              key={s.label}
              d={`M${(hubEdge.left / 100) * 340} ${(hubEdge.top / 100) * 340} L${(dot.left / 100) * 340} ${(dot.top / 100) * 340}`}
              stroke={colorVar[s.color]}
              strokeWidth="1"
              strokeDasharray="3 6"
              opacity=".65"
            />
          );
        })}
        <circle cx="170" cy="170" r="42" fill="rgb(var(--color-bg0))" stroke="rgb(var(--color-violetSoft))" strokeOpacity=".55" />
        <circle cx="170" cy="170" r="27" fill="rgb(var(--color-bg2))" stroke="#F5822E" strokeOpacity=".55" />
        <image href="/cordiq-logo-light.png" x="145" y="153" width="50" height="34" preserveAspectRatio="xMidYMid meet" className="dark:hidden" />
        <image href="/cordiq-logo-dark.png" x="145" y="153" width="50" height="34" preserveAspectRatio="xMidYMid meet" className="hidden dark:block" />
        {services.map((s) => {
          const dot = point(s.angleDeg, DOT_RADIUS_PCT);
          const cx = (dot.left / 100) * 340, cy = (dot.top / 100) * 340;
          return (
            <g key={`${s.label}-node`} filter="url(#cordiq-glow)">
              <circle cx={cx} cy={cy} r="7" fill="rgb(var(--color-bg0))" stroke={colorVar[s.color]} strokeWidth="1.5" />
              <circle cx={cx} cy={cy} r="2.5" fill={colorVar[s.color]} />
            </g>
          );
        })}
      </svg>

      {services.map((s) => {
        const card = point(s.angleDeg, s.cardRadiusPct ?? CARD_RADIUS_PCT);
        return (
          <div
            key={s.label}
            className="absolute -translate-x-1/2 -translate-y-1/2"
            style={{ left: `${card.left}%`, top: `${card.top}%` }}
          >
            <motion.div
              className="flex items-center gap-3 glass-card rounded-2xl p-3 pr-4 w-[212px]"
              animate={{ y: [0, s.angleDeg % 120 === 0 ? -7 : 7, 0] }}
              transition={{ duration: 5 + (s.angleDeg % 7), repeat: Infinity, ease: "easeInOut", delay: (s.angleDeg % 5) / 2 }}
            >
              <div
                className="w-10 h-10 rounded-xl border flex items-center justify-center flex-shrink-0"
                style={{ borderColor: colorVar[s.color], color: colorVar[s.color] }}
              >
                {s.icon === "signal" ? <SignalBars small /> : <Icon icon={s.icon} className="w-[18px] h-[18px]" />}
              </div>
              <div>
                <div className="font-mono text-[9px] uppercase tracking-[.12em] text-low">{s.label}</div>
                <div className="mt-1 text-sm font-semibold leading-snug">{s.subtitle}</div>
              </div>
            </motion.div>
          </div>
        );
      })}
      </div>

      <div className="grid grid-cols-2 gap-3 md:hidden">
        {services.map((s) => (
          <div key={s.label} className="glass-card rounded-2xl p-3.5 flex items-center gap-3 min-w-0">
            <div
              className="w-9 h-9 rounded-lg border flex items-center justify-center flex-shrink-0"
              style={{ borderColor: colorVar[s.color], color: colorVar[s.color] }}
            >
              {s.icon === "signal" ? <SignalBars small /> : <Icon icon={s.icon} className="w-4 h-4" />}
            </div>
            <div className="min-w-0">
              <div className="font-mono text-[8.5px] uppercase tracking-[.1em] text-low truncate">{s.label}</div>
              <div className="mt-0.5 text-[12.5px] font-semibold leading-snug break-words">{s.subtitle}</div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export function SignalBars({ small = false }: { small?: boolean }) {
  const heights = small ? [7, 11, 15, 12] : [10, 16, 22, 30, 24, 34, 28];
  return (
    <div className={`flex items-end gap-1 ${small ? "h-4" : "h-8"}`} aria-hidden="true">
      {heights.map((h, i) => (
        <motion.span
          key={i}
          className={`${small ? "w-[3px]" : "w-1"} rounded-full bg-gradient-to-t from-orange to-violet`}
          animate={{ height: [`${h}px`, `${Math.max(small ? 4 : 8, h - (small ? 4 : 7))}px`, `${h}px`] }}
          transition={{ duration: 1.6 + i * 0.08, repeat: Infinity, ease: "easeInOut", delay: i * 0.06 }}
        />
      ))}
    </div>
  );
}
