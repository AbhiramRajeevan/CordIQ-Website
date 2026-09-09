import { Reveal, RevealItem, RevealStagger } from "./Reveal";
import { WarningIcon, PuzzleIcon, LockIcon } from "./visuals/Icons";

const cards = [
  {
    icon: WarningIcon,
    title: "Things break at the worst time",
    body: "A dead switch, a down server, an offline camera — and no reliable number to call. We run preventive AMC so issues get caught early, with fast on-site response when they aren't.",
  },
  {
    icon: PuzzleIcon,
    title: "Too many disconnected vendors",
    body: "Web, hosting, networking, CCTV and support spread across five suppliers means five invoices and zero accountability. We bring it under one professional partner.",
  },
  {
    icon: LockIcon,
    title: "No plan, no documentation",
    body: "Undocumented passwords, tangled cabling, no backups. We set things up properly, document them, and hand you a maintenance plan you actually understand.",
  },
];

export function Problem() {
  return (
    <section id="why" className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-[60px]">
          <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">
            Why businesses call us
          </span>
          <h2 className="font-display font-bold text-[clamp(26px,3vw,38px)] mb-3.5">
            Too many vendors, too much downtime, no one owns the full picture.
          </h2>
          <p className="text-mid text-base leading-relaxed">
            Most growing businesses juggle a website developer, a CCTV installer, a networking
            contractor and a &ldquo;computer guy&rdquo; — and when something breaks, nobody&apos;s fully
            accountable. We fix that by being the one call you need to make.
          </p>
        </Reveal>

        <RevealStagger className="grid md:grid-cols-3 gap-5">
          {cards.map((c) => (
            <RevealItem key={c.title}>
              <div className="h-full bg-bg1 border border-line rounded-card p-7 hover:border-violetSoft hover:-translate-y-1 transition-all">
                <div className="w-11 h-11 rounded-xl bg-orange/10 flex items-center justify-center mb-4">
                  <c.icon className="w-5 h-5 text-orange" />
                </div>
                <h3 className="text-lg font-semibold mb-2.5">{c.title}</h3>
                <p className="text-mid text-[14.5px] leading-relaxed">{c.body}</p>
              </div>
            </RevealItem>
          ))}
        </RevealStagger>
      </div>
    </section>
  );
}
