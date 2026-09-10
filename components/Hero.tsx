"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { CordIQVisual } from "./visuals/CordIQVisual";
import { ArrowIcon, WhatsAppIcon } from "./visuals/Icons";

export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const visualY = useTransform(scrollYProgress, [0, 1], [0, 110]);
  const contentY = useTransform(scrollYProgress, [0, 1], [0, 55]);

  return (
    <section ref={ref} className="relative min-h-[92vh] pt-[110px] pb-20 overflow-hidden">
      {/* hero-grid's mask-image was previously on the <section> itself — a CSS
          mask affects an element's ENTIRE rendered output, not just its own
          background-image, so every child (including the stats row sitting
          near the bottom of this tall section) was being faded out along
          with the decorative grid pattern. Isolated to its own layer so only
          the grid fades, never the actual content. */}
      <div className="absolute inset-0 pointer-events-none hero-grid" aria-hidden="true" />
      <div className="absolute inset-0 pointer-events-none" aria-hidden="true">
        <div className="absolute -top-32 right-[8%] w-[520px] h-[520px] rounded-full bg-violet/20 blur-[110px]" />
        <div className="absolute top-[30%] -left-40 w-[440px] h-[440px] rounded-full bg-orange/10 blur-[120px]" />
      </div>

      <div className="max-w-[1240px] mx-auto px-6 md:px-8 grid lg:grid-cols-[1fr_0.9fr] gap-10 items-center min-h-[680px]">
        <motion.div style={{ y: contentY }} className="relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-orange/10 px-3.5 py-2 font-mono text-[10px] tracking-[.13em] uppercase text-orange mb-7">
            Pune · On-site & remote · Trusted IT partner
          </div>

          <h1 className="font-display font-bold tracking-[-0.045em] text-[clamp(40px,5.6vw,68px)] leading-[1.05] max-w-[760px]">
            Reliable <span className="text-orange">IT, Web, CCTV &amp; AMC</span> solutions for growing businesses in Pune
          </h1>

          <p className="mt-7 max-w-[620px] text-[17px] md:text-[18px] leading-[1.7] text-mid">
            From websites and custom software to office networks, CCTV, hosting and IT support — CordIQ helps businesses set up, secure and maintain the technology they depend on.
          </p>

          <div className="mt-9 flex flex-wrap items-center gap-3">
            <a href="/contact" className="group inline-flex items-center gap-2 rounded-full bg-gradient-to-br from-orange to-orangeDim text-bg0 px-6 py-3.5 text-sm font-semibold shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)] hover:-translate-y-0.5 transition-transform">
              Get a Free Quote
              <ArrowIcon className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </a>
            <a href="https://wa.me/917248962559" className="inline-flex items-center gap-2 rounded-full border border-line bg-black/[0.025] px-6 py-3.5 text-sm font-semibold text-mid hover:text-hi hover:border-violetSoft transition-colors">
              <WhatsAppIcon className="w-4 h-4" />
              WhatsApp Us
            </a>
          </div>

          <div className="mt-14 grid grid-cols-3 max-w-[560px] border-t border-line pt-5 gap-5">
            <div><div className="font-display text-xl font-semibold" style={{ color: "rgb(var(--color-hi))" }}>IT + Web</div><div className="mt-1 text-xs" style={{ color: "rgb(var(--color-mid))" }}>One partner, full stack</div></div>
            <div><div className="font-display text-xl font-semibold" style={{ color: "rgb(var(--color-hi))" }}>On-site</div><div className="mt-1 text-xs" style={{ color: "rgb(var(--color-mid))" }}>Pune & PCMC support</div></div>
            <div><div className="font-display text-xl font-semibold" style={{ color: "rgb(var(--color-hi))" }}>UK &amp; India</div><div className="mt-1 text-xs" style={{ color: "rgb(var(--color-mid))" }}>Clients served</div></div>
          </div>
        </motion.div>

        <motion.div style={{ y: visualY }} className="relative flex items-center justify-center min-h-[520px]">
          <div className="absolute inset-0 rounded-full bg-violet/10 blur-[90px]" />
          <CordIQVisual />
        </motion.div>
      </div>
    </section>
  );
}
