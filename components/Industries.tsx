import { Reveal, RevealItem, RevealStagger } from "./Reveal";
import Link from "next/link";
import { industries } from "@/lib/industries-data";
import { IndustryIcon, ArrowIcon } from "./visuals/Icons";

export function Industries() {
  return (
    <section id="industries" className="py-[120px]">
      <div className="max-w-[1180px] mx-auto px-8">
        <Reveal className="max-w-[640px] mb-[60px]">
          <span className="font-mono text-xs uppercase tracking-wide text-orange mb-3.5 block">Industries we serve</span>
          <h2 className="font-display font-bold text-[clamp(26px,3vw,38px)] mb-3.5">
            Built for the way Pune businesses actually run
          </h2>
          <p className="text-mid text-base leading-relaxed">
            The same core services, tailored to the real-world needs of each sector.
          </p>
        </Reveal>

        <RevealStagger className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {industries.map((it) => {
            const Icon = IndustryIcon[it.icon];
            return (
            <RevealItem key={it.slug}>
              <Link
                href={`/industries/${it.slug}`}
                className="group h-full min-h-[180px] flex flex-col justify-between bg-gradient-to-b from-bg1 to-bg0 border border-line rounded-card p-6 hover:border-violetSoft hover:-translate-y-1 transition-all"
              >
                <div>
                  <span className="w-9 h-9 rounded-lg bg-orange/10 flex items-center justify-center text-orange mb-3">
                    <Icon className="w-[18px] h-[18px]" />
                  </span>
                  <span className="font-mono text-[11px] text-low uppercase tracking-wide">{it.tag}</span>
                </div>
                <div>
                  <h3 className="text-[16.5px] font-semibold mb-2 mt-6">{it.navLabel}</h3>
                  <p className="text-[13.5px] text-mid leading-relaxed">{it.teaserBody}</p>
                  <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                    Explore
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </div>
              </Link>
            </RevealItem>
            );
          })}
        </RevealStagger>
      </div>
    </section>
  );
}
