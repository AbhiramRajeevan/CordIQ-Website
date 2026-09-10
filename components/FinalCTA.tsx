import { Reveal } from "./Reveal";
import { WhatsAppIcon } from "./visuals/Icons";

export function FinalCTA() {
  return (
    <section id="contact" className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal
          className="text-center py-20 px-8 md:px-12 rounded-3xl border border-line bg-bg1"
          y={20}
        >
          <div
            className="relative"
            style={{
              backgroundImage:
                "radial-gradient(600px 260px at 50% 0%, rgba(245,130,46,0.12), transparent 70%)",
            }}
          >
            <h2 className="font-display font-bold text-[clamp(26px,3.4vw,40px)] mb-4">
              Let&apos;s sort out your technology — properly.
            </h2>
            <p className="text-mid max-w-[480px] mx-auto mb-8 text-[15.5px]">
              Book a free 15-minute consultation. We&apos;ll understand your needs and send a written
              proposal before any work begins.
            </p>
            <div className="flex gap-3.5 justify-center flex-wrap mb-10">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0 shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)] hover:-translate-y-0.5 transition-transform"
              >
                Book a Consultation
              </a>
              <a
                href="https://wa.link/m2qc5a"
                className="inline-flex items-center gap-2 px-5 py-3 rounded-full text-sm font-semibold border border-line bg-black/[0.025] hover:bg-black/[0.045] hover:border-low transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
                WhatsApp
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
