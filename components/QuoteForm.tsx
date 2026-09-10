"use client";

import { useState } from "react";
import { services } from "@/lib/services-data";

export function QuoteForm({ serviceName }: { serviceName: string }) {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [service, setService] = useState(serviceName);
  const [message, setMessage] = useState("");

  // Whatever page this form is rendered on (a service page or an industry
  // page), the passed-in name is always the first/default option, so the
  // dropdown's selected value is always something meaningful — the rest of
  // CordIQ's actual services fill out the remaining choices.
  const options = [serviceName, ...services.map((s) => s.navLabel).filter((n) => n !== serviceName)];

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    const lines = [
      `Hi CordIQ, I'd like a quote for *${service}*.`,
      name ? `Name: ${name}` : null,
      phone ? `Phone: ${phone}` : null,
      message ? `Message: ${message}` : null,
    ].filter(Boolean);
    const text = encodeURIComponent(lines.join("\n"));
    window.open(`https://wa.me/918848236069?text=${text}`, "_blank");
  }

  const fieldClass =
    "w-full bg-bg0 border border-line rounded-lg px-4 py-3.5 text-[15px] placeholder:text-low focus:outline-none focus:border-orange transition-colors";
  const labelClass = "block text-sm font-semibold mb-2";

  return (
    <div className="bg-bg1 border border-line rounded-card p-8 md:p-10">
      <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3 block">
        Request a free quote
      </span>
      <h3 className="font-display font-bold text-[24px] mb-2">Written proposal before any work starts.</h3>
      <p className="text-mid text-sm mb-8">We reply fast — this opens a prefilled WhatsApp message to send.</p>

      <form onSubmit={handleSubmit} className="flex flex-col gap-5 mb-8">
        <div className="grid sm:grid-cols-2 gap-5">
          <div>
            <label className={labelClass}>Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} placeholder="Your name" className={fieldClass} />
          </div>
          <div>
            <label className={labelClass}>Phone / WhatsApp</label>
            <input value={phone} onChange={(e) => setPhone(e.target.value)} placeholder="+91" className={fieldClass} />
          </div>
        </div>
        <div>
          <label className={labelClass}>Service</label>
          <div className="relative">
            <select value={service} onChange={(e) => setService(e.target.value)} className={`${fieldClass} appearance-none pr-10`}>
              {options.map((o) => (
                <option key={o} value={o}>{o}</option>
              ))}
            </select>
            <svg width="12" height="8" viewBox="0 0 12 8" fill="none" className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-low">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
        <div>
          <label className={labelClass}>Message</label>
          <textarea
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="Briefly describe your requirement"
            rows={4}
            className={`${fieldClass} resize-none`}
          />
        </div>
        <button
          type="submit"
          className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full text-[15px] font-semibold bg-gradient-to-br from-orange to-orangeDim text-bg0 shadow-[0_8px_24px_-8px_rgba(245,130,46,0.4)] hover:-translate-y-0.5 transition-transform mt-1.5"
        >
          Send enquiry
        </button>
      </form>

      <p className="text-[13.5px] text-mid mb-2">
        Thanks! Continue in WhatsApp to send your enquiry.
      </p>
      <p className="text-xs text-low mb-6">
        Or call{" "}
        <a href="tel:+917248962559" className="text-mid hover:text-hi transition-colors">
          +91 72489 62559
        </a>{" "}
        ·{" "}
        <a href="mailto:info@cordiq.in" className="text-mid hover:text-hi transition-colors">
          info@cordiq.in
        </a>
      </p>

    </div>
  );
}
