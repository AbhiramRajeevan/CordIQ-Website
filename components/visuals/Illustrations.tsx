"use client";

import { motion } from "framer-motion";

/** Central hub connecting to spoke nodes — represents "one partner, full stack" */
export function NetworkHub({ size = 260 }: { size?: number }) {
  const c = size / 2;
  const nodes = [
    { x: c - 70, y: c - 50, color: "#F5822E" },
    { x: c + 80, y: c - 60, color: "#8B5CF6" },
    { x: c - 85, y: c + 50, color: "#34D399" },
    { x: c + 75, y: c + 65, color: "#F5822E" },
  ];
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      animate={{ rotate: 360 }}
      transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
      style={{ transformOrigin: "center" }}
    >
      <defs>
        <linearGradient id="lineGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#F5822E" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0.7" />
        </linearGradient>
        <radialGradient id="hubGrad" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#8B5CF6" />
          <stop offset="100%" stopColor="#4C2E8F" />
        </radialGradient>
      </defs>
      {nodes.map((n, i) => (
        <path
          key={i}
          d={`M${c},${c} L${n.x},${n.y}`}
          stroke="url(#lineGrad)"
          strokeWidth="1.4"
          strokeDasharray="4 6"
          fill="none"
        />
      ))}
      <circle cx={c} cy={c} r={size * 0.1} fill="url(#hubGrad)" />
      {nodes.map((n, i) => (
        <circle key={i} cx={n.x} cy={n.y} r="8" fill="rgb(var(--color-bg1))" stroke={n.color} strokeWidth="2" />
      ))}
    </motion.svg>
  );
}

/** Browser mockup with a pulsing "click" cursor — represents web builds */
export function BrowserMock() {
  return (
    <div className="glass-card w-[280px] rounded-2xl overflow-hidden">
      <div className="flex gap-1.5 px-4 py-3 border-b border-line">
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
        <span className="w-2 h-2 rounded-full bg-line" />
      </div>
      <div className="p-5 flex flex-col gap-2.5">
        <div className="h-2.5 rounded-full bg-hi/5 w-3/5" />
        <div className="h-2.5 rounded-full bg-hi/5 w-4/5" />
        <div className="h-2.5 rounded-full bg-hi/5 w-2/5" />
        <div className="relative h-16 rounded-xl mt-1.5 border border-line bg-gradient-to-br from-orange/20 to-violet/20">
          <motion.span
            className="absolute right-6 -bottom-1.5 w-3.5 h-3.5 rounded-full border-2 border-orange"
            animate={{ scale: [1, 1.6, 1], opacity: [1, 0, 1] }}
            transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
          />
        </div>
      </div>
    </div>
  );
}

/** Pulsing signal rings around a camera glyph — represents CCTV / networking */
export function CctvPulse() {
  const rings = [120, 190, 260];
  return (
    <div className="relative w-[280px] h-[280px] flex items-center justify-center">
      {rings.map((r, i) => (
        <motion.span
          key={r}
          className="absolute rounded-full border border-violetSoft"
          style={{ width: r, height: r }}
          animate={{ opacity: [0.6, 0], scale: [0.85, 1.05] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeOut", delay: i * 0.6 }}
        />
      ))}
      <div className="glass-card relative z-10 w-16 h-16 rounded-2xl flex items-center justify-center text-2xl">
        ◉
      </div>
    </div>
  );
}

/** Support ticket card — represents AMC / on-call support */
export function SupportCard() {
  return (
    <div className="glass-card w-[280px] rounded-2xl p-6 flex flex-col gap-3.5">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange/20 to-violet/20 border border-line flex items-center justify-center text-lg flex-shrink-0">
          ☎
        </div>
        <div>
          <div className="font-display font-semibold text-sm">Ticket #128</div>
          <div className="text-xs text-low">Printer offline — Reception</div>
        </div>
      </div>
      <span className="inline-flex items-center gap-2 font-mono text-xs text-green border border-green/30 bg-green/10 px-3 py-1.5 rounded-full w-fit">
        <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#34D399]" />
        Resolved on-site
      </span>
    </div>
  );
}

/** Floating status card used in the hero */
export function StatusChip({
  label,
  value,
  dot = true,
  color = "text-hi",
}: {
  label: string;
  value: string;
  dot?: boolean;
  color?: string;
}) {
  return (
    <div className="glass-card rounded-xl px-4 py-3">
      <div className="font-mono text-[10.5px] uppercase tracking-wide text-low mb-1">{label}</div>
      <div className={`font-display font-semibold text-[15px] flex items-center gap-2 ${color}`}>
        {dot && <span className="w-1.5 h-1.5 rounded-full bg-green shadow-[0_0_8px_#34D399]" />}
        {value}
      </div>
    </div>
  );
}
