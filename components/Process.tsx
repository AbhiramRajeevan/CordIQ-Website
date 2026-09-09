import { Reveal } from "./Reveal";
import { ProcessTimeline } from "./ProcessTimeline";

const steps = [
  { n: "01", title: "Discover", body: "A short call or site visit to understand your requirement, scale and budget." },
  { n: "02", title: "Proposal", body: "A written proposal with scope, timeline and transparent pricing — before any work begins." },
  { n: "03", title: "Deliver", body: "We execute on-site or remotely, with regular updates and proper documentation." },
  { n: "04", title: "Support", body: "Ongoing AMC and support, so your systems keep running long after go-live." },
];

export function Process() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-[60px]">
          <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">How we work</span>
          <h2 className="font-display font-bold text-[clamp(26px,3vw,38px)] mb-3.5">A clear, four-step process</h2>
          <p className="text-mid text-base leading-relaxed">
            From first call to ongoing support — no surprises along the way.
          </p>
        </Reveal>
        <ProcessTimeline steps={steps} />
      </div>
    </section>
  );
}
