export type Step = { n: string; title: string; body: string };

export function ProcessSteps({ steps }: { steps: Step[] }) {
  return (
    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
      {steps.map((s) => (
        <div key={s.n}>
          <div className="w-9 h-9 rounded-lg bg-hi text-orange flex items-center justify-center font-display font-bold text-[15px]">
            {s.n}
          </div>
          <h3 className="mt-4 text-[18px] font-semibold">{s.title}</h3>
          <p className="mt-2 text-mid text-[14.5px] leading-relaxed">{s.body}</p>
        </div>
      ))}
    </div>
  );
}
