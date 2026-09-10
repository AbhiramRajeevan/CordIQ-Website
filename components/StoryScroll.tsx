"use client";

import { motion, MotionValue, useReducedMotion, useScroll, useSpring, useTransform } from "framer-motion";
import { useRef } from "react";
import { CordIQVisual } from "./visuals/CordIQVisual";
import { WifiIcon, CloudIcon, OfficeIcon, MonitorIcon, CctvIcon, PeopleIcon, ShieldLockIcon } from "./visuals/Icons";

const slides = [
  { key: "Digital", eyebrow: "01 / DIGITAL", title: "Build the digital layer your business deserves.", copy: "High-performance websites, custom web apps, product interfaces and AI-powered workflows — designed around real business outcomes.", accent: "orange" },
  { key: "Infrastructure", eyebrow: "02 / INFRASTRUCTURE", title: "Make the technology underneath disappear.", copy: "Networks, Wi-Fi, cloud, hosting, workstations and office IT — connected properly, documented clearly and built for reliability.", accent: "violet" },
  { key: "Security", eyebrow: "03 / SECURITY", title: "See what is happening. Stay in control.", copy: "CCTV, remote monitoring and security infrastructure that gives teams visibility without creating another system to babysit.", accent: "green" },
  { key: "Continuity", eyebrow: "04 / CONTINUITY", title: "Technology is only useful when it keeps working.", copy: "Preventive maintenance and responsive support keep the systems behind your business healthy long after launch.", accent: "orange" },
];

function Visual({ index }: { index: number }) {
  if (index === 0) return <div className="relative w-[360px] h-[300px]"><div className="absolute inset-8 rounded-3xl border border-line bg-bg1/70 rotate-[-5deg]" /><div className="absolute inset-4 rounded-3xl border border-violetSoft/60 bg-bg1 shadow-2xl"><div className="h-10 border-b border-line flex items-center gap-1.5 px-4"><span className="w-2 h-2 rounded-full bg-orange"/><span className="w-2 h-2 rounded-full bg-violet"/><span className="w-2 h-2 rounded-full bg-green"/></div><div className="p-7"><div className="h-3 rounded-full bg-hi/10 w-2/3"/><div className="mt-4 h-2 rounded-full bg-hi/5 w-5/6"/><div className="mt-2 h-2 rounded-full bg-hi/5 w-1/2"/><div className="mt-7 grid grid-cols-3 gap-2"><div className="h-16 rounded-xl bg-orange/10 border border-orange/20"/><div className="h-16 rounded-xl bg-violet/10 border border-violet/20"/><div className="h-16 rounded-xl bg-green/10 border border-green/20"/></div></div></div></div>;
  if (index === 1) return <div className="relative w-[360px] h-[300px]"><div className="absolute left-1/2 top-1/2 w-24 h-24 -translate-x-1/2 -translate-y-1/2 rounded-3xl border border-violet/50 bg-violet/10 flex items-center justify-center font-display font-bold">CORE</div>{[
    { x: 52, y: 42, label: "Networks & Wi-Fi", color: "orange", Icon: WifiIcon },
    { x: 270, y: 52, label: "Cloud & Hosting", color: "violet", Icon: CloudIcon },
    { x: 285, y: 220, label: "Office IT", color: "violet", Icon: OfficeIcon },
    { x: 60, y: 230, label: "Workstations", color: "green", Icon: MonitorIcon },
  ].map(({ x, y, label, color, Icon }) => (
    <div key={label} className="absolute flex flex-col items-center gap-1.5 w-24" style={{ left: x - 26, top: y }}>
      <div className="w-11 h-11 rounded-xl glass-card flex items-center justify-center border flex-shrink-0" style={{ borderColor: `rgb(var(--color-${color}))`, color: `rgb(var(--color-${color}))` }}>
        <Icon className="w-5 h-5" />
      </div>
      <span className="font-mono text-[8.5px] uppercase tracking-[.05em] text-low text-center leading-tight">{label}</span>
    </div>
  ))}<svg className="absolute inset-0 w-full h-full" viewBox="0 0 360 300"><path d="M180 150L74 63M180 150L292 73M180 150L307 241M180 150L80 252" stroke="rgb(var(--color-violet))" strokeOpacity=".45" strokeDasharray="5 7"/></svg></div>;
  if (index === 2) return <div className="relative w-[320px] h-[300px]">
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-56 h-56 rounded-full border border-green/25 animate-pulse" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-40 h-40 rounded-full border border-dashed border-green/25" />
    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 rounded-3xl glass-card flex items-center justify-center text-green">
      <ShieldLockIcon className="w-11 h-11" />
    </div>
    {[
      { x: 30, y: 20, Icon: CctvIcon },
      { x: 234, y: 20, Icon: MonitorIcon },
      { x: 30, y: 224, Icon: PeopleIcon },
      { x: 234, y: 224, Icon: CloudIcon },
    ].map(({ x, y, Icon }, i) => (
      <div key={i} className="absolute w-14 h-14 rounded-full glass-card border border-green/40 flex items-center justify-center text-green" style={{ left: x, top: y }}>
        <Icon className="w-5 h-5" />
      </div>
    ))}
  </div>;
  return <div className="glass-card w-[340px] rounded-3xl p-6"><div className="flex items-center justify-between"><div><div className="font-mono text-[9px] text-low uppercase tracking-[.12em]">Support queue</div><div className="mt-1 font-semibold">All systems healthy</div></div><span className="w-2.5 h-2.5 rounded-full bg-green shadow-[0_0_12px_#34D399]"/></div><div className="mt-7 space-y-3">{["Network","Website","CCTV"].map((x,i)=><div key={x} className="flex items-center justify-between rounded-xl border border-line bg-bg0/50 px-3.5 py-3"><span className="text-sm">{x}</span><span className="font-mono text-[10px] text-green">{i === 0 ? "99.9%" : "ONLINE"}</span></div>)}</div></div>;
}

function StorySlide({ index, progress }: { index: number; progress: MotionValue<number> }) {
  const step = 1 / (slides.length - 1);
  const center = index * step;
  // Adjacent slides used to fade over the FULL step, so their curves overlapped
  // through most of the scroll range — at the midpoint between two slides both
  // sat around ~27% opacity at once, and with backdrop-blur glass-card panels
  // in each, that read as a smeared double-exposure ("blur") whenever the user
  // stopped scrolling anywhere that wasn't a slide's exact center pixel.
  // Narrowing the fade to just half a step makes adjacent ranges meet instead
  // of overlap: by the midpoint, both slides are down to a few % opacity
  // instead of ~27% each. This doesn't guarantee a clean rest (only scroll-snap
  // does that), but it shrinks both how far into each slide's range the overlap
  // reaches and how strong it is.
  const half = step * 0.5;
  const shoulder = half * 0.55;
  const opacity = useTransform(progress, [center - half, center - shoulder, center, center + shoulder, center + half], [0, .55, 1, .55, 0]);
  const y = useTransform(progress, [center - step, center, center + step], [90, 0, -90]);
  const scale = useTransform(progress, [center - step, center, center + step], [.92, 1, .92]);
  return <motion.div style={{ opacity, y, scale }} className="absolute inset-0 flex items-center"><div className="max-w-[1120px] mx-auto px-6 md:px-8 w-full grid md:grid-cols-2 gap-12 items-center"><div><span className="font-mono text-[10px] tracking-[.16em] text-orange uppercase">{slides[index].eyebrow}</span><h2 className="mt-5 font-display font-bold tracking-[-.035em] text-[clamp(34px,4.8vw,60px)] leading-[1.02] max-w-[620px]">{slides[index].title}</h2><p className="mt-6 text-mid text-[16px] leading-[1.75] max-w-[520px]">{slides[index].copy}</p></div><div className="flex items-center justify-center"><Visual index={index}/></div></div></motion.div>;
}

export function StoryScroll() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const reduced = useReducedMotion();
  const progress = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: .4 });
  const visualProgress = reduced ? scrollYProgress : progress;
  const active = useTransform(scrollYProgress, p => Math.min(slides.length - 1, Math.round(p * (slides.length - 1))));
  return <section id="capabilities" className="relative"><div ref={ref} className="relative h-[300vh]"><div className="sticky top-0 h-screen overflow-hidden border-y border-line bg-bg0/30"><div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_45%,rgba(139,92,246,.14),transparent_30%),radial-gradient(circle_at_20%_70%,rgba(245,130,46,.12),transparent_28%)]"/>{slides.map((_,i)=><StorySlide key={i} index={i} progress={visualProgress}/>)}<div className="absolute left-6 md:left-10 bottom-8 font-mono text-[10px] text-low tracking-[.12em] uppercase hidden md:block">CordIQ / capabilities</div><div className="absolute right-6 md:right-10 top-1/2 -translate-y-1/2 flex flex-col gap-3">{slides.map((s,i)=><StoryDot key={s.key} index={i} active={active}/>)}</div></div></div></section>;
}

function StoryDot({ index, active }: { index: number; active: MotionValue<number> }) {
  const scale = useTransform(active, v => v === index ? 1.7 : 1);
  const backgroundColor = useTransform(active, v => v === index ? "rgb(var(--color-orange))" : "rgb(var(--color-line))");
  return <motion.span style={{ scale, backgroundColor }} className="w-1.5 h-1.5 rounded-full" />;
}
