import { WhatsAppIcon, PhoneIcon } from "./visuals/Icons";

export function FloatingContact() {
  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col gap-3">
      <a
        href="https://wa.me/917248962559"
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
  );
}
