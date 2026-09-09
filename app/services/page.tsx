import Link from "next/link";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { services } from "@/lib/services-data";
import { ServiceIcon, ArrowIcon } from "@/components/visuals/Icons";

export const metadata: Metadata = {
  title: "Services | CordIQ — IT, Web, CCTV, Networking & AMC in Pune",
  description:
    "Website development, web apps, UI/UX, domain & hosting, CCTV, IT networking, computer AMC and office IT setup — one accountable partner in Pune.",
};

export default function ServicesIndex() {
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
            <span className="text-mid">Services</span>
          </div>

          <Reveal className="max-w-[640px] mb-14">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">Services</span>
            <h1 className="font-display font-bold text-[clamp(30px,4vw,46px)] mb-4">
              Everything your business needs to run online and on-site
            </h1>
            <p className="text-mid text-[16.5px] leading-relaxed">
              Eight core services, delivered to a professional standard and backed by ongoing
              support across Pune — one accountable partner instead of five vendors.
            </p>
          </Reveal>

          <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((s) => {
              const Icon = ServiceIcon[s.icon];
              return (
                <RevealItem key={s.slug}>
                  <Link
                    href={`/services/${s.slug}`}
                    className="group h-full flex flex-col bg-bg1 border border-line rounded-card p-7 hover:border-orangeDim hover:bg-bg2 hover:-translate-y-1 transition-all"
                  >
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center mb-5 text-orange">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h2 className="text-base font-semibold mb-2">{s.navLabel}</h2>
                    <p className="text-[13.5px] text-mid leading-relaxed mb-5 flex-1">{s.subheading}</p>
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
