import { Reveal } from "./Reveal";
import { FAQAccordion } from "./FAQAccordion";

const faqs = [
  {
    q: "Do you provide on-site IT support in Pune?",
    a: "Yes. We provide on-site support across Pune and PCMC, with remote support for software and web work. AMC clients get scheduled preventive visits plus on-call breakdown support.",
  },
  {
    q: "What does a computer AMC cover?",
    a: "Desktops, laptops, printers, networking equipment and basic server support — including preventive maintenance, troubleshooting, antivirus, backups and vendor coordination. Plans are tailored to your asset count.",
  },
  {
    q: "Can you handle both software and hardware projects?",
    a: "Yes. We deliver websites and custom web applications as well as CCTV, structured network cabling, office IT setup and ongoing AMC — one partner for your full technology stack.",
  },
  {
    q: "Do you work with schools, colleges and clinics?",
    a: "Yes. We set up and maintain computer labs, smart classrooms, CCTV, networks, websites and email for schools and colleges, and secure, high-uptime IT for clinics and diagnostic labs.",
  },
  {
    q: "How do you price projects?",
    a: "After a short discovery call or site visit, we send a written proposal with clear scope, timeline and transparent pricing. No work starts until you approve it.",
  },
];

export function FAQ() {
  return (
    <section className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-[60px]">
          <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">FAQ</span>
          <h2 className="font-display font-bold text-[clamp(26px,3vw,38px)]">Common questions</h2>
        </Reveal>
        <Reveal>
          <FAQAccordion faqs={faqs} />
        </Reveal>
      </div>
    </section>
  );
}
