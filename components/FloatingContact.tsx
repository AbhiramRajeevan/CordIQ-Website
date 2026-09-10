import { WhatsAppIcon, PhoneIcon } from "./visuals/Icons";

export function FloatingContact() {
  return (
    <>
      {/* Mobile: full-width sticky action bar, replaces the corner buttons —
          a small floating circle is easy to miss on a phone; a bar anchored
          to the bottom edge isn't. */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 z-40 grid grid-cols-3 border-t border-line">
        <a
          href="tel:+917248962559"
          className="flex items-center justify-center gap-2 py-3.5 bg-bg0 text-orange font-semibold text-sm border-r border-line"
        >
          <PhoneIcon className="w-4 h-4" />
          Call
        </a>
        <a
          href="https://wa.link/m2qc5a"
          className="flex items-center justify-center gap-2 py-3.5 bg-[#25D366] text-[#0B2E13] font-semibold text-sm"
        >
          <WhatsAppIcon className="w-4 h-4" />
          WhatsApp
        </a>
        <a
          href="/contact"
          className="flex items-center justify-center py-3.5 bg-gradient-to-br from-orange to-orangeDim text-bg0 font-semibold text-sm"
        >
          Get Quote
        </a>
      </div>

      {/* Desktop: stacked corner FABs, unchanged. */}
      <div className="hidden md:flex fixed bottom-6 right-6 z-40 flex-col gap-3">
        <a
          href="https://wa.link/m2qc5a"
          aria-label="Chat on WhatsApp"
          title="Chat on WhatsApp"
          className="w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-transform"
        >
          <WhatsAppIcon className="w-6 h-6" />
        </a>
        <a
          href="tel:+917248962559"
          aria-label="Call CordIQ"
          title="Call CordIQ"
          className="w-14 h-14 rounded-full bg-gradient-to-br from-orange to-orangeDim text-bg0 flex items-center justify-center shadow-[0_8px_24px_-6px_rgba(0,0,0,0.35)] hover:-translate-y-0.5 transition-transform"
        >
          <PhoneIcon className="w-6 h-6" />
        </a>
      </div>
    </>
  );
}
