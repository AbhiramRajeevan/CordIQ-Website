import Link from "next/link";
import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { Reveal, RevealItem, RevealStagger } from "@/components/Reveal";
import { ProcessSteps } from "@/components/ProcessSteps";
import { FAQAccordion } from "@/components/FAQAccordion";
import { QuoteForm } from "@/components/QuoteForm";
import { services, getService } from "@/lib/services-data";
import { ServiceIcon, CheckIcon, ArrowIcon, WhatsAppIcon } from "@/components/visuals/Icons";

export function generateStaticParams() {
  return services.map((s) => ({ slug: s.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const service = getService(params.slug);
  if (!service) return {};
  return {
    title: service.metaTitle,
    description: service.metaDescription,
  };
}

export default function ServicePage({ params }: { params: { slug: string } }) {
  const service = getService(params.slug);
  if (!service) notFound();

  const Icon = ServiceIcon[service.icon];
  const related = service.related.map((slug) => getService(slug)).filter(Boolean) as typeof services;

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
          {/* breadcrumb */}
          <div className="flex items-center gap-2 text-xs text-low font-mono mb-8">
            <Link href="/" className="hover:text-mid transition-colors">Home</Link>
            <span>/</span>
            <Link href="/services" className="hover:text-mid transition-colors">Services</Link>
            <span>/</span>
            <span className="text-mid">{service.breadcrumb}</span>
          </div>

          {/* hero */}
          <Reveal className="grid md:grid-cols-[auto_1fr] gap-6 items-start mb-6">
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-orange/20 to-violet/20 border border-line flex items-center justify-center text-orange flex-shrink-0">
              <Icon className="w-7 h-7" />
            </div>
            <div>
              <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3 block">
                Service · Pune
              </span>
              <h1 className="font-display font-bold text-[clamp(28px,4vw,46px)] leading-[1.1] mb-4 max-w-[760px]">
                {service.heading}
              </h1>
              <p className="text-mid text-[16.5px] leading-relaxed max-w-[600px] mb-7">
                {service.subheading}
              </p>
              <div className="flex flex-wrap gap-3.5">
                <a
                  href={`https://wa.me/917248962559?text=${encodeURIComponent(
                    `Hi CordIQ, I'd like a quote for ${service.navLabel}.`
                  )}`}
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0 shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)] hover:-translate-y-0.5 transition-transform"
                >
                  Get a Free Quote
                </a>
                <a
                  href="https://wa.me/917248962559"
                  className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-line bg-black/[0.025] hover:bg-black/[0.045] hover:border-low transition-colors"
                >
                  <WhatsAppIcon className="w-4 h-4" />
                  WhatsApp Us
                </a>
              </div>
            </div>
          </Reveal>
        </div>

        {/* who for / problems */}
        <div className="max-w-[1180px] mx-auto px-8 grid md:grid-cols-2 gap-5 mt-16">
          <RevealItem>
            <div className="h-full bg-bg1 border border-line rounded-card p-7">
              <h2 className="text-lg font-semibold mb-4">Who it&apos;s for</h2>
              <ul className="flex flex-col gap-3">
                {service.whoFor.map((w) => (
                  <li key={w} className="flex items-start gap-2.5 text-[14.5px] text-mid leading-relaxed">
                    <CheckIcon className="flex-shrink-0 mt-0.5" />
                    {w}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
          <RevealItem>
            <div className="h-full bg-bg1 border border-line rounded-card p-7">
              <h2 className="text-lg font-semibold mb-4">Problems we solve</h2>
              <ul className="flex flex-col gap-3">
                {service.problems.map((p) => (
                  <li key={p} className="flex items-start gap-2.5 text-[14.5px] text-mid leading-relaxed">
                    <span className="w-1.5 h-1.5 rounded-full bg-orange mt-2 flex-shrink-0" />
                    {p}
                  </li>
                ))}
              </ul>
            </div>
          </RevealItem>
        </div>

        {/* what we provide */}
        <div className="max-w-[1180px] mx-auto px-8 mt-24">
          <Reveal className="max-w-[640px] mb-10">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">
              What we provide
            </span>
            <h2 className="font-display font-bold text-[clamp(24px,2.6vw,32px)]">
              Everything included in {service.navLabel.toLowerCase()}
            </h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 gap-3.5">
            {service.provide.map((item) => (
              <RevealItem key={item}>
                <div className="flex items-start gap-3 bg-bg1 border border-line rounded-xl px-5 py-4 text-[14.5px] text-mid leading-relaxed h-full">
                  <CheckIcon className="flex-shrink-0 mt-0.5" />
                  {item}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* why us */}
        <div className="max-w-[1180px] mx-auto px-8 mt-24">
          <Reveal className="max-w-[640px] mb-10">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">
              Why CordIQ
            </span>
            <h2 className="font-display font-bold text-[clamp(24px,2.6vw,32px)]">
              Why choose us for {service.navLabel.toLowerCase()}
            </h2>
          </Reveal>
          <RevealStagger className="grid sm:grid-cols-2 gap-4">
            {service.whyUs.map((w) => (
              <RevealItem key={w}>
                <div className="flex items-start gap-3 bg-bg1 border border-line rounded-xl px-6 py-5 text-[15px] text-mid leading-relaxed h-full">
                  <CheckIcon className="flex-shrink-0 mt-0.5" />
                  {w}
                </div>
              </RevealItem>
            ))}
          </RevealStagger>
        </div>

        {/* quote form */}
        <div className="max-w-[720px] mx-auto px-8 mt-24">
          <Reveal>
            <QuoteForm serviceName={service.navLabel} />
          </Reveal>
        </div>

        {/* process */}
        <div className="max-w-[1180px] mx-auto px-8 mt-24">
          <Reveal className="max-w-[640px] mb-14">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">How we work</span>
            <h2 className="font-display font-bold text-[clamp(24px,2.6vw,32px)]">Our process</h2>
          </Reveal>
          <ProcessSteps steps={service.process} />
        </div>

        {/* faq */}
        <div className="max-w-[1180px] mx-auto px-8 mt-24">
          <Reveal className="max-w-[640px] mb-10">
            <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">FAQ</span>
            <h2 className="font-display font-bold text-[clamp(24px,2.6vw,32px)]">
              {service.navLabel} — questions
            </h2>
          </Reveal>
          <Reveal>
            <FAQAccordion faqs={service.faqs} />
          </Reveal>
        </div>

        {/* related */}
        {related.length > 0 && (
          <div className="max-w-[1180px] mx-auto px-8 mt-24">
            <Reveal className="mb-8">
              <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">
                Related services
              </span>
              <h2 className="font-display font-bold text-[clamp(22px,2.4vw,28px)]">You might also need</h2>
            </Reveal>
            <RevealStagger className="grid sm:grid-cols-3 gap-4">
              {related.map((r) => {
                const RIcon = ServiceIcon[r.icon];
                return (
                  <RevealItem key={r.slug}>
                    <Link
                      href={`/services/${r.slug}`}
                      className="group h-full flex flex-col bg-bg1 border border-line rounded-card p-6 hover:border-orangeDim hover:-translate-y-1 transition-all"
                    >
                      <div className="w-9 h-9 rounded-[10px] bg-gradient-to-br from-orange/[0.16] to-violet/[0.16] border border-line flex items-center justify-center mb-4 text-orange">
                        <RIcon className="w-4 h-4" />
                      </div>
                      <h3 className="text-[15px] font-semibold mb-2">{r.navLabel}</h3>
                      <p className="text-[13px] text-mid leading-relaxed mb-3 flex-1">{r.navBlurb}</p>
                      <span className="inline-flex items-center gap-1.5 text-xs font-medium text-orange opacity-0 group-hover:opacity-100 transition-opacity">
                        Learn more <ArrowIcon />
                      </span>
                    </Link>
                  </RevealItem>
                );
              })}
            </RevealStagger>
          </div>
        )}

        {/* final cta */}
        <div className="max-w-[1180px] mx-auto px-8 mt-24">
          <Reveal
            className="text-center py-16 px-8 md:px-12 rounded-3xl border border-line bg-bg1"
            y={20}
          >
            <div
              style={{
                backgroundImage:
                  "radial-gradient(600px 260px at 50% 0%, rgba(245,130,46,0.12), transparent 70%)",
              }}
            >
              <h2 className="font-display font-bold text-[clamp(24px,3vw,34px)] mb-4">
                Get your {service.navLabel} sorted
              </h2>
              <p className="text-mid max-w-[460px] mx-auto mb-8 text-[15px]">
                Book a free 15-minute consultation. We&apos;ll send a written proposal before any work
                starts.
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
