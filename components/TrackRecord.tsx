const REASONS = [
  {
    label: "Operator-built",
    title: "Built by people who actually run AI businesses.",
    body: "The team didn't design this from a whiteboard. They've built and sold AI businesses themselves. Ex-Fortune 500 AI execs, not advisors.",
  },
  {
    label: "End-to-end",
    title: "Product, GTM, and ops ship as one system.",
    body: "Product, GTM, and ops aren't three things you bolt together. They're already integrated — you don't spend six months wiring them up.",
  },
  {
    label: "Battle-tested",
    title: "Same playbooks running in 24 countries.",
    body: "Proven across 24 countries, 4 continents. What works in Chicago works in Singapore. You inherit the playbook, not the experiment.",
  },
  {
    label: "Aligned",
    title: "We make money when you make money.",
    body: "Spark only wins when founders win. That's the whole model — fees, equity, and outcomes all flow from your revenue.",
  },
];

export default function TrackRecord() {
  return (
    <section className="bg-white py-20 md:py-32 border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald mb-3">
            [ 04 ] Why Spark
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
            Why Spark Ventures.
          </h2>
        </div>

        <div className="grid gap-px bg-line border border-line md:grid-cols-2">
          {REASONS.map((r) => (
            <div key={r.label} className="bg-white p-6 md:p-10 group hover:bg-paper transition">
              <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-6">
                {r.label}
              </div>
              <h3 className="text-xl md:text-2xl font-extrabold tracking-tight mb-4">
                {r.title}
              </h3>
              <p className="text-sm md:text-base text-ink-muted max-w-md">{r.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
