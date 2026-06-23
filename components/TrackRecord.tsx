const REASONS = [
  {
    title: "Operator-built",
    subtitle: "Ex-Fortune 500 AI execs, not advisors",
  },
  {
    title: "End-to-end infra",
    subtitle: "Product + GTM + Ops shipped as one system",
  },
  {
    title: "Battle-tested playbooks",
    subtitle: "Proven across 4 continents, 24 countries",
  },
  {
    title: "Aligned incentives",
    subtitle: "Spark only wins when founders win",
  },
];

export default function TrackRecord() {
  return (
    <section className="bg-white py-20 md:py-32 border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald mb-3">
            Why Spark
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
            Why Spark Ventures.
          </h2>
        </div>

        <div className="grid gap-px bg-line border border-line">
          {REASONS.map((r) => (
            <div
              key={r.title}
              className="bg-white p-6 md:p-8 group hover:bg-paper transition flex items-start gap-4"
            >
              <span className="size-2 rounded-full bg-navy mt-3 shrink-0" />
              <div>
                <h3 className="text-xl md:text-2xl font-extrabold tracking-tight">
                  {r.title}
                </h3>
                <p className="text-sm md:text-base text-ink-muted mt-1">
                  {r.subtitle}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
