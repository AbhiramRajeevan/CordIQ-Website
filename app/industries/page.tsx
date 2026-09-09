import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { industries } from "@/lib/industries-data";
import { IndustryIcon, ArrowIcon } from "@/components/visuals/Icons";

export const metadata: Metadata = {
  title: "Industries We Serve | CordIQ — IT in Pune",
  description:
    "IT solutions tailored to schools & colleges, clinics & diagnostic labs, offices & SMEs, and real estate & facilities in Pune — one accountable technology partner.",
};

export default function IndustriesIndex() {
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

      <main className="pt-[150px] pb-[100px]">
        <div className="max-w-[1180px] mx-auto px-8">
          <div className="flex items-center gap-2 text-xs text-low font-mono mb-8">
            <Link href="/" className="hover:text-mid transition-colors">Home</Link>
            <span>/</span>
            <span className="text-mid">Industries</span>
          </div>

          <Reveal className="max-w-[640px] mb-14">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">Industries</span>
            <h1 className="font-display font-bold text-[clamp(30px,4vw,46px)] mb-4">
              Built for the way Pune businesses actually run
            </h1>
            <p className="text-mid text-[16.5px] leading-relaxed">
              The same core services, tailored to the real-world needs of each sector — one
              accountable technology partner either way.
            </p>
          </Reveal>

          <RevealStagger className="grid sm:grid-cols-2 gap-4">
            {industries.map((i) => {
              const Icon = IndustryIcon[i.icon];
              return (
                <RevealItem key={i.slug}>
                  <Link
                    href={`/industries/${i.slug}`}
                    className="group h-full flex flex-col bg-bg1 border border-line rounded-card p-7 hover:border-orangeDim hover:bg-bg2 hover:-translate-y-1 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center mb-5 text-orange">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="font-mono text-[11px] text-low uppercase tracking-wide mb-1.5">{i.tag}</span>
                    <h2 className="text-base font-semibold mb-2">{i.navLabel}</h2>
                    <p className="text-[13.5px] text-mid leading-relaxed mb-5 flex-1">{i.teaserBody}</p>
                    <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange">
                      Learn more <ArrowIcon className="group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Link>
                </RevealItem>
              );
            })}
          </RevealStagger>
        </div>
      </main>

      <Footer />
    </>
  );
}
