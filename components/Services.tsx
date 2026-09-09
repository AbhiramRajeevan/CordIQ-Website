import Link from "next/link";
import { Reveal, RevealItem, RevealStagger } from "./Reveal";
import { services } from "@/lib/services-data";
import { ServiceIcon, ArrowIcon } from "./visuals/Icons";

export function Services() {
  return (
    <section id="services" className="py-32">
      <div className="max-w-[1240px] mx-auto px-6 md:px-8">
        <Reveal>
          <span className="font-mono text-[10px] tracking-[.16em] uppercase text-orange">Capabilities</span>
          <h2 className="mt-4 max-w-[760px] font-display font-bold tracking-[-.035em] text-[clamp(36px,5vw,62px)] leading-[1.02]">
            A connected technology stack, not a pile of vendors.
          </h2>
          <p className="mt-6 max-w-[650px] text-mid text-[16px] leading-[1.7]">
            From the first line of code to the network cable in the wall, CordIQ gives growing
            teams one place to build, secure and maintain their technology.
          </p>
        </Reveal>

        <RevealStagger className="mt-14 grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s) => {
            const Icon = ServiceIcon[s.icon];
            return (
              <RevealItem key={s.slug}>
                <Link
                  href={`/services/${s.slug}`}
                  className="group block h-full rounded-2xl border border-line bg-bg1/70 p-6 hover:border-violetSoft hover:-translate-y-1 transition-all"
                >
                  <span className="w-14 h-14 rounded-2xl bg-orange/10 flex items-center justify-center text-orange">
                    <Icon className="w-6 h-6" />
                  </span>
                  <h4 className="mt-6 font-semibold text-lg">{s.navLabel}</h4>
                  <p className="mt-2 text-sm text-mid leading-relaxed">{s.navBlurb}</p>
                  <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-orange">
                    Learn more
                    <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
                  </span>
                </Link>
              </RevealItem>
            );
          })}
          <RevealItem>
            <Link
              href="/services"
              className="group block h-full rounded-2xl bg-hi text-bg0 p-6 hover:-translate-y-1 transition-all"
            >
              <span className="w-14 h-14 rounded-2xl bg-bg0/10 flex items-center justify-center">
                <ArrowIcon className="w-6 h-6 transition-transform group-hover:translate-x-1" />
              </span>
              <h4 className="mt-6 font-semibold text-lg">See all services</h4>
              <p className="mt-2 text-sm opacity-70 leading-relaxed">
                AI integration, workflow automation and more — explore the full list.
              </p>
              <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold">
                View services
                <ArrowIcon className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </span>
            </Link>
          </RevealItem>
        </RevealStagger>
      </div>
    </section>
  );
}
