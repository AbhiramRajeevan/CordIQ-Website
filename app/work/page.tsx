import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { projects } from "@/lib/work-data";
import { WhatsAppIcon } from "@/components/visuals/Icons";

export const metadata: Metadata = {
  title: "Our Work & Case Studies | CordIQ, Pune",
  description:
    "Selected work from CordIQ — AI-powered contract management, complete office IT setup, and an HRMS platform for a UK-based client. IT and software delivered in Pune.",
};

export default function WorkPage() {
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
            <span className="text-mid">Work</span>
          </div>

          <Reveal className="max-w-[700px] mb-16">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">Selected work</span>
            <h1 className="font-display font-bold text-[clamp(30px,4.4vw,48px)] leading-[1.08] mb-5">
              Projects we&apos;ve delivered
            </h1>
            <p className="text-mid text-[16.5px] leading-relaxed">
              A snapshot of recent work across software and IT infrastructure, for clients in
              India and the UK. Client identities kept confidential on request.
            </p>
          </Reveal>

          <div className="flex flex-col gap-6 mb-24">
            {projects.map((p) => (
              <Reveal key={p.n}>
                <article className="rounded-3xl border border-line bg-bg1/70 p-7 md:p-9">
                  <span className="font-mono text-[10px] tracking-[.14em] text-orange uppercase">{p.type}</span>
                  <h2 className="mt-3 font-display font-semibold text-[clamp(22px,2.5vw,30px)] leading-tight max-w-[680px]">
                    {p.title}
                  </h2>
                  <div className="mt-7 grid sm:grid-cols-3 gap-6">
                    <div>
                      <h3 className="font-mono text-[10.5px] uppercase tracking-wide text-low mb-2">Problem</h3>
                      <p className="text-[14px] text-mid leading-relaxed">{p.problem}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-[10.5px] uppercase tracking-wide text-low mb-2">Solution</h3>
                      <p className="text-[14px] text-mid leading-relaxed">{p.solution}</p>
                    </div>
                    <div>
                      <h3 className="font-mono text-[10.5px] uppercase tracking-wide text-low mb-2">Outcome</h3>
                      <p className="text-[14px] text-mid leading-relaxed">{p.outcome}</p>
                    </div>
                  </div>
                  <div className="mt-6 pt-6 border-t border-line flex flex-wrap items-center gap-2">
                    <span className="font-mono text-[10.5px] uppercase tracking-wide text-low mr-1">Services used</span>
                    {p.tags.map((t) => (
                      <span key={t} className="rounded-full border border-line px-3.5 py-1.5 text-[12.5px] font-mono font-medium text-mid">
                        {t}
                      </span>
                    ))}
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal className="text-center py-16 px-8 md:px-12 rounded-3xl border border-line bg-bg1" y={20}>
            <div
              style={{
                backgroundImage: "radial-gradient(600px 260px at 50% 0%, rgba(245,130,46,0.12), transparent 70%)",
              }}
            >
              <h2 className="font-display font-bold text-[clamp(24px,3vw,34px)] mb-4">
                Want results like these?
              </h2>
              <p className="text-mid max-w-[460px] mx-auto mb-8 text-[15px]">
                Tell us what you&apos;re trying to achieve. We&apos;ll send a written proposal
                before any work begins.
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
