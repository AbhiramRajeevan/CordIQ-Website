import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal } from "@/components/Reveal";
import { QuoteForm } from "@/components/QuoteForm";
import { ClockIcon, MapPinIcon, MailIcon, WhatsAppIcon } from "@/components/visuals/Icons";

export const metadata: Metadata = {
  title: "Contact CordIQ | IT Company in Pune — Call or WhatsApp",
  description:
    "Contact CordIQ in Pune for IT, web, CCTV, networking and AMC. Call, WhatsApp or request a free quote — written proposal before any work starts.",
};

const contactMethods = [
  { label: "WhatsApp", value: "Chat with us now", href: "https://wa.me/917248962559", icon: WhatsAppIcon },
  { label: "Email", value: "info@cordiq.in", href: "mailto:info@cordiq.in", icon: MailIcon },
];

export default function ContactPage() {
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
            <span className="text-mid">Contact</span>
          </div>

          <Reveal className="mb-14 max-w-[640px]">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">Contact</span>
            <h1 className="font-display font-bold text-[clamp(30px,4.4vw,48px)] leading-[1.08] mb-5">
              Tell us what you need
            </h1>
            <p className="text-mid text-[16.5px] leading-relaxed">
              Call, WhatsApp or send the form below. We reply fast — and you&apos;ll get a written
              proposal before any work starts.
            </p>
          </Reveal>

          <div className="max-w-[640px] mx-auto flex flex-col gap-3.5">
            <Reveal className="flex flex-col gap-3.5">
              {contactMethods.map((c) => (
                <a
                  key={c.label}
                  href={c.href}
                  className="flex items-center gap-3.5 rounded-xl border border-line bg-bg1 px-5 py-4 hover:border-orangeDim transition-colors"
                >
                  <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center text-orange flex-shrink-0">
                    <c.icon className="w-4 h-4" />
                  </span>
                  <span>
                    <span className="block font-mono text-[10.5px] uppercase tracking-wide text-low">{c.label}</span>
                    <span className="block text-[14.5px] font-semibold text-hi mt-0.5">{c.value}</span>
                  </span>
                </a>
              ))}

              <div className="flex items-center gap-3.5 rounded-xl border border-line bg-bg1 px-5 py-4">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center text-orange flex-shrink-0">
                  <MapPinIcon className="w-4 h-4" />
                </span>
                <span>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wide text-low">Service area</span>
                  <span className="block text-[14.5px] font-semibold text-hi mt-0.5">Pune, Pimpri-Chinchwad & surrounding areas — on-site & remote</span>
                </span>
              </div>

              <div className="flex items-center gap-3.5 rounded-xl border border-line bg-bg1 px-5 py-4">
                <span className="w-10 h-10 rounded-lg bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center text-orange flex-shrink-0">
                  <ClockIcon className="w-4 h-4" />
                </span>
                <span>
                  <span className="block font-mono text-[10.5px] uppercase tracking-wide text-low">Hours</span>
                  <span className="block text-[14.5px] font-semibold text-hi mt-0.5">Mon–Sat, 9:30am – 7:00pm</span>
                </span>
              </div>
            </Reveal>

            <Reveal delay={0.1} className="rounded-xl bg-bg1 px-6 py-6 mt-2">
              <h2 className="font-semibold text-[15.5px] mb-1.5">Prefer a callback?</h2>
              <p className="text-mid text-sm leading-relaxed">
                Send the form and we&apos;ll call you back, usually the same working day.
              </p>
            </Reveal>

            <Reveal delay={0.15} className="mt-6">
              <QuoteForm serviceName="General Enquiry" />
            </Reveal>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
