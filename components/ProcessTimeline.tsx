"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import type { Step } from "./ProcessSteps";

// The landing page's original vertical scroll-linked timeline — kept as its
// own component so the landing page never changes when ProcessSteps (used
// on service pages) does. These two must stay independent.
export function ProcessTimeline({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start 0.8", "end 0.5"],
  });
  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  return (
    <div ref={ref} className="relative">
      <div className="absolute top-[26px] left-[26px] bottom-[26px] w-px bg-line" />
      <motion.div
        style={{ height: lineHeight }}
        className="absolute top-[26px] left-[26px] w-px bg-gradient-to-b from-orange to-violet"
      />
      <div className="flex flex-col gap-11 relative">
        {steps.map((s) => (
          <div key={s.n} className="grid grid-cols-[52px_1fr] gap-5.5 items-start">
            <div className="w-[52px] h-[52px] rounded-full bg-bg1 border border-line flex items-center justify-center font-display font-bold text-[17px] relative z-[2] flex-shrink-0">
              {s.n}
            </div>
            <div>
              <h3 className="text-[19px] font-semibold mb-2">{s.title}</h3>
              <p className="text-mid text-[14.5px] leading-relaxed max-w-[520px]">{s.body}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
