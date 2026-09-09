import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { CheckIcon, WhatsAppIcon } from "@/components/visuals/Icons";

export const metadata: Metadata = {
  title: "About CordIQ | IT Company in Pune",
  description:
    "CordIQ is a Pune-based IT company combining software and hardware expertise — websites, web apps, CCTV, networking, office setup and AMC — for businesses across Pune.",
};

const atAGlance = [
  "Pune-based — on-site support across Pune & PCMC",
  "Software + hardware expertise in one team",
  "Clients served in India and the UK",
  "Written proposals and transparent pricing",
  "Preventive AMC, not just firefighting",
  "Direct access to the people doing the work",
];

const values = [
  { title: "Accountability", body: "One partner who owns the outcome — no finger-pointing between vendors." },
  { title: "Honesty", body: "Clear scope, transparent pricing and realistic timelines. No jargon, no surprises." },
  { title: "Reliability", body: "We show up — on-site when it matters and proactively before things break." },
];

export default function AboutPage() {
  return (
    <>
      <div
        className="fixed inset-0 -z-20"
        style={{
          background:
            "radial-gradient(560px 420px at 82% 8%, rgba(139,92,246,0.16), transparent 65%), radial-gradient(480px 400px at 30% 55%, rgba(217,70,239,0.06), transparent 70%), radial-gradient(420px 360px at 10% 30%, rgba(245,130,46,0.10), transparent 70%), rgb(var(--color-bg0))",
        }}
      />
      <div
        className="fixed inset-0 -z-10 opacity-[0.35] pointer-events-none bg-grid"
        style={{
          maskImage: "radial-gradient(700px 500px at 70% 0%, black, transparent 75%)",
          WebkitMaskImage: "radial-gradient(700px 500px at 70% 0%, black, transparent 75%)",
        }}
      />

      <Navbar />

      <main className="pt-[150px] pb-[80px]">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex items-center gap-2 text-xs text-low font-mono mb-8">
            <Link href="/" className="hover:text-mid transition-colors">Home</Link>
            <span>/</span>
            <span className="text-mid">About</span>
          </div>

          <Reveal className="max-w-[780px] mb-16">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">About us</span>
            <h1 className="font-display font-bold text-[clamp(30px,4.4vw,48px)] leading-[1.08] mb-5">
              A serious IT partner for growing businesses in Pune
            </h1>
            <p className="text-mid text-[16.5px] leading-relaxed">
              CordIQ combines real software capability with hands-on IT and hardware experience —
              so you get one accountable team for your entire technology stack.
            </p>
          </Reveal>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-10 mb-24">
            <Reveal>
              <h2 className="text-xl font-semibold mb-4">Who we are</h2>
              <p className="text-mid text-[15px] leading-[1.75] mb-5">
                We&apos;re a Pune-based IT solutions company serving businesses across India and the
                UK. Unlike a single freelancer or a hardware-only shop, we cover both sides of
                modern business technology: the <b className="text-hi font-semibold">software</b> —
                websites, web applications, UI/UX and automation — and the{" "}
                <b className="text-hi font-semibold">infrastructure</b> — networking, CCTV, office
                setup and ongoing AMC.
              </p>
              <p className="text-mid text-[15px] leading-[1.75] mb-8">
                That combination matters. When the same team understands your website, your network
                and your hardware, problems get solved faster and nothing falls between vendors.
              </p>

              <h3 className="text-lg font-semibold mb-3">How we work</h3>
              <p className="text-mid text-[15px] leading-[1.75]">
                We start every engagement with a clear, written proposal — scope, timeline and
                transparent pricing — before any work begins. We document what we build, hand it
                over properly, and stay on through AMC so your systems keep running.
              </p>
            </Reveal>

            <Reveal delay={0.1}>
              <div className="bg-bg1 border border-line rounded-card p-7">
                <h3 className="text-base font-semibold mb-4">At a glance</h3>
                <ul className="flex flex-col gap-3 mb-7">
                  {atAGlance.map((a) => (
                    <li key={a} className="flex items-start gap-2.5 text-[14.5px] text-mid leading-relaxed">
                      <CheckIcon className="flex-shrink-0 mt-0.5" />
                      {a}
                    </li>
                  ))}
                </ul>
                <a
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 w-full px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0 shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)] hover:-translate-y-0.5 transition-transform"
                >
                  Work with us
                </a>
              </div>
            </Reveal>
          </div>

          <Reveal className="max-w-[640px] mb-10">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">What we value</span>
            <h2 className="font-display font-bold text-[clamp(24px,2.6vw,32px)]">The way we do business</h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-3 gap-4 mb-24">
            {values.map((v) => (
              <RevealItem key={v.title}>
                <div className="h-full bg-bg1 border border-line rounded-card p-6">
                  <h3 className="text-[16.5px] font-semibold mb-2">{v.title}</h3>
                  <p className="text-[14px] text-mid leading-relaxed">{v.body}</p>
                </div>
              </RevealItem>
            ))}
          </RevealStagger>

          <Reveal className="text-center py-16 px-8 md:px-12 rounded-3xl border border-line bg-bg1" y={20}>
            <div
              style={{
                backgroundImage: "radial-gradient(600px 260px at 50% 0%, rgba(245,130,46,0.12), transparent 70%)",
              }}
            >
              <h2 className="font-display font-bold text-[clamp(24px,3vw,34px)] mb-4">
                Let&apos;s build something reliable.
              </h2>
              <p className="text-mid max-w-[460px] mx-auto mb-8 text-[15px]">
                Book a free 15-minute consultation with the team that will actually do the work.
              </p>
              <div className="flex gap-3.5 justify-center flex-wrap">
                <a
                  href="/contact"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0 shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)] hover:-translate-y-0.5 transition-transform"
                >
                  Get a Free Quote
                </a>
                <a
                  href="https://wa.me/917248962559"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-line bg-black/[0.025] hover:bg-black/[0.045] hover:border-low transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp
                </a>
              </div>
            </div>
          </Reveal>
        </div>
      </main>

      <Footer />
    </>
  );
}
