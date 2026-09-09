import { Reveal } from "./Reveal";
import { CheckIcon } from "./visuals/Icons";

const points = [
  "Written proposal before any work starts",
  "Pune on-site support available",
  "Software + Hardware under one roof",
  "Fast response, direct access to the team",
];

export function TrustBar() {
  return (
    <section className="border-y border-line bg-bg1">
      <Reveal y={16} className="max-w-[1180px] mx-auto px-6 md:px-8 py-6">
        <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3.5 text-center">
          {points.map((p) => (
            <div key={p} className="inline-flex items-center gap-2">
              <CheckIcon className="flex-shrink-0" />
              <span className="text-[14.5px] font-semibold text-mid">{p}</span>
            </div>
          ))}
        </div>
      </Reveal>
    </section>
  );
}
