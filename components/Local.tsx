import { Reveal } from "./Reveal";
import { QuoteForm } from "./QuoteForm";

const stats = [
  ["Pune", "Head base & on-site coverage"],
  ["6 days", "Mon–Sat support window"],
  ["Fast", "Response on AMC calls"],
];

export function Local() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="grid lg:grid-cols-[1.1fr_1fr] gap-10 items-start" y={20}>
          <div>
            <span className="inline-flex items-center rounded-full bg-orange/10 px-3.5 py-1.5 font-mono text-[10px] tracking-[.13em] uppercase text-orange mb-5">
              Local to Pune
            </span>
            <h3 className="text-[28px] md:text-[32px] font-display font-bold leading-tight mb-4">On-site support across Pune &amp; PCMC</h3>
            <p className="text-mid text-[15px] leading-relaxed mb-9">
              Being local means we show up — whether it&apos;s a camera offline, a network down, or a
              lab that needs setting up before term begins. Backed by remote support for software
              and web work.
            </p>
            <div className="grid grid-cols-2 gap-x-6 gap-y-7">
              {stats.map(([b, s]) => (
                <div key={b}>
                  <b className="block font-display text-2xl text-hi">{b}</b>
                  <span className="text-xs text-mid">{s}</span>
                </div>
              ))}
            </div>
          </div>
          <QuoteForm serviceName="General Enquiry" />
        </Reveal>
      </div>
    </section>
  );
}
