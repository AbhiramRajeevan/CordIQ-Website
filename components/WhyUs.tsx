import { Reveal, RevealItem, RevealStagger } from "./Reveal";

const bullets = [
  "Written proposal before any work starts",
  "Transparent, upfront pricing",
  "On-site support across Pune",
  "Software + hardware, in-house",
  "Documentation handed over, always",
];

const cards = [
  { idx: "01", title: "One partner, full stack", body: "Website, web app, hosting, network, CCTV and AMC — handled together, so nothing falls between vendors." },
  { idx: "02", title: "Proactive, not reactive", body: "AMC plans with scheduled preventive maintenance catch issues before they become downtime." },
  { idx: "03", title: "Business-first thinking", body: "We translate technology into outcomes — uptime, security, leads — not jargon and over-engineering." },
];

export function WhyUs() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8 grid lg:grid-cols-[0.9fr_1.1fr] gap-14 items-start">
        <Reveal>
          <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">Why CordIQ</span>
          <h2 className="font-display font-bold text-[clamp(26px,3vw,38px)]">A serious IT partner — not a one-off freelancer</h2>
          <p className="text-mid text-[15.5px] leading-relaxed mt-3.5">
            We combine software capability with real on-ground IT and hardware experience, so one
            accountable team covers your whole technology stack.
          </p>
          <div className="flex flex-col gap-3.5 mt-7">
            {bullets.map((b) => (
              <div key={b} className="flex items-center gap-3 text-[14.5px] text-mid">
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="flex-shrink-0">
                  <circle cx="8" cy="8" r="7" stroke="#34D399" />
                  <path d="M5 8l2 2 4-4" stroke="#34D399" strokeWidth="1.4" />
                </svg>
                {b}
              </div>
            ))}
          </div>
        </Reveal>

        <RevealStagger className="flex flex-col gap-4">
          {cards.map((c) => (
            <RevealItem key={c.idx}>
              <div className="bg-bg1 border border-line rounded-card p-6 flex gap-5 items-start hover:border-orangeDim transition-colors">
                <span className="font-display font-bold text-xl text-orange flex-shrink-0">{c.idx}</span>
                <div>
                  <h3 className="text-base font-semibold mb-1.5">{c.title}</h3>
                  <p className="text-sm text-mid leading-relaxed">{c.body}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
