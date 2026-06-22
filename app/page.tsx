import {
  HERO_STATS,
  TRUST_LAYER_STATS,
  TRADITIONAL_PATH,
  SPARK_PATH,
  STACK,
  PARTNERSHIPS,
  PERSONAS,
  SEQUENCE,
  CASE_STUDIES,
  NETWORK_NODES,
} from "@/lib/data";
import Marketplace from "@/components/Marketplace";
import FAQ from "@/components/FAQ";

// Spark Ventures™ logo: navy square + pulsing blue dot
function SparkLogo({ size = "size-6", dot = "size-2" }: { size?: string; dot?: string }) {
  return (
    <div className={`${size} bg-navy flex items-center justify-center`}>
      <div className={`${dot} bg-blue animate-pulse`} />
    </div>
  );
}

// ===================== NAVBAR =====================
function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-navy/5 bg-white/85 px-4 py-3 backdrop-blur-md md:px-8">
      <a href="#top" className="flex items-center gap-2">
        <SparkLogo />
        <span className="font-mono text-xs font-bold tracking-tighter uppercase text-navy">
          Spark Ventures<sup className="text-[7px]">™</sup>
        </span>
      </a>
      <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-navy/60">
        <a href="#marketplace" className="hover:text-navy">Marketplace</a>
        <a href="#infrastructure" className="hover:text-navy">Infrastructure</a>
        <a href="#models" className="hover:text-navy">Partner</a>
        <a href="#cases" className="hover:text-navy">Cases</a>
        <a href="#faq" className="hover:text-navy">FAQ</a>
      </div>
      <a
        href="#cta"
        className="bg-navy text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-blue transition-colors"
      >
        Book Strategy
      </a>
    </nav>
  );
}

// ===================== HERO =====================
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-14 pb-20 text-white md:pt-24 md:pb-32">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-8 animate-fade-up-1">
          <span className="size-2 rounded-full bg-emerald animate-node-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald">
            AI Venture Infrastructure™ · Live
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-balance text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight animate-fade-up-2">
          Launch an AI Software <br className="hidden md:block" />
          Business in <span className="text-blue">30 Days</span>
        </h1>

        {/* Sub */}
        <p className="mx-auto max-w-xl text-base md:text-lg text-white/60 mt-6 animate-fade-up-3">
          Choose from proven AI products. Get product, technology, GTM systems, operational support and
          growth infrastructure.{" "}
          <span className="text-white">Own the company. Keep the upside.</span>
        </p>

        {/* Flow Diagram */}
        <div className="relative mx-auto mt-14 mb-12 max-w-3xl animate-fade-up-4">
          <div className="grid gap-2 md:grid-cols-5 md:items-stretch">
            <div className="relative border border-white/15 bg-white/[0.02] p-4 text-left">
              <div className="font-mono text-[9px] uppercase tracking-widest mb-2 text-gold">Input</div>
              <div className="text-sm font-bold tracking-tight">Founder</div>
              <div className="font-mono text-[10px] text-white/50 mt-1">Expertise</div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/40 to-white/10" />
            </div>
            <div className="relative border border-blue/60 bg-blue/5 p-4 text-left">
              <div className="font-mono text-[9px] uppercase tracking-widest mb-2 text-blue">Rail</div>
              <div className="text-sm font-bold tracking-tight">Spark Infrastructure</div>
              <div className="font-mono text-[10px] text-white/50 mt-1">Product · GTM · Ops · Growth</div>
              <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                <div className="h-px w-1/2 bg-blue animate-ticker" />
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center">
              <div className="h-px w-full bg-gradient-to-r from-white/10 via-white/40 to-white/10" />
            </div>
            <div className="relative border border-white/15 bg-white/[0.02] p-4 text-left">
              <div className="font-mono text-[9px] uppercase tracking-widest mb-2 text-emerald">Output</div>
              <div className="text-sm font-bold tracking-tight">Venture</div>
              <div className="font-mono text-[10px] text-white/50 mt-1">Revenue · Equity</div>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex flex-col gap-3 px-4 md:flex-row md:justify-center md:px-0 animate-fade-up-4">
          <a
            href="#cta"
            className="bg-blue px-6 py-4 text-xs font-bold uppercase tracking-widest ring-1 ring-white/10 hover:bg-blue/90 transition"
          >
            Book Founder Strategy Session
          </a>
          <a
            href="#marketplace"
            className="border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            Browse AI Ventures
          </a>
        </div>

        {/* Stats */}
        <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/10 border border-white/10">
          {HERO_STATS.map((s) => (
            <div key={s.label} className="bg-navy px-4 py-5 text-left">
              <div className="font-mono text-[9px] uppercase tracking-widest text-white/40 mb-2">{s.label}</div>
              <div className="text-2xl md:text-3xl font-extrabold tracking-tight">{s.value}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 01: TRUST LAYER =====================
function TrustLayer() {
  return (
    <section className="border-y border-line bg-white py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
              [ 01 ] Trust Layer
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
              Why build from scratch?
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-ink-muted">
            Traditional founders spend 12–24 months building before finding customers. Our founders launch in
            weeks on battle-tested software and GTM systems.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-px bg-line border border-line">
          {TRUST_LAYER_STATS.map((s) => (
            <div key={s.label} className="bg-white p-6 md:p-8">
              <div className="text-3xl md:text-4xl font-extrabold tracking-tight">{s.value}</div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mt-2">
                {s.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 02: METHODOLOGY =====================
function Methodology() {
  return (
    <section className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
            [ 02 ] Methodology
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
            Most startups die before revenue.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Traditional Path */}
          <div className="border border-line bg-white p-6 md:p-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-red-500">
                Traditional Startup
              </h3>
              <span className="font-mono text-[10px] text-ink-muted">PATH/A</span>
            </div>
            <ol className="space-y-2">
              {TRADITIONAL_PATH.map((s) => (
                <li
                  key={s.step}
                  className="flex items-center gap-3 border-b border-line py-3 text-sm text-ink-muted line-through"
                >
                  <span className="font-mono text-[10px] text-ink-muted/60">0{s.step}</span>
                  {s.label}
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-bold text-red-500 text-sm">12–24 Months</span>
              <span className="font-mono text-[10px] uppercase text-red-500">High Failure Risk</span>
            </div>
          </div>

          {/* Spark Path */}
          <div className="border-2 border-emerald bg-white p-6 md:p-8 shadow-xl shadow-emerald/5 relative">
            <div className="absolute -top-3 left-6 bg-emerald px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-navy">
              Spark Model
            </div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="font-mono text-[10px] uppercase tracking-widest text-emerald">
                Venture Infrastructure
              </h3>
              <span className="font-mono text-[10px] text-ink-muted">PATH/B</span>
            </div>
            <ol className="space-y-2">
              {SPARK_PATH.map((s) => (
                <li
                  key={s.step}
                  className="flex items-center gap-3 border-b border-line py-3 text-sm font-bold text-navy"
                >
                  <span className="font-mono text-[10px] text-emerald">0{s.step}</span>
                  {s.label}
                </li>
              ))}
            </ol>
            <div className="mt-6 flex items-center justify-between">
              <span className="font-bold text-emerald text-sm">30 Days to Live</span>
              <span className="font-mono text-[10px] uppercase text-emerald">Proven Foundation</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 03: STACK =====================
const accentTextClass: Record<string, string> = {
  blue: "text-blue",
  emerald: "text-emerald",
  gold: "text-gold",
};
const accentDotClass: Record<string, string> = {
  blue: "bg-blue",
  emerald: "bg-emerald",
  gold: "bg-gold",
};

function StackSection() {
  return (
    <section
      id="infrastructure"
      className="bg-navy py-20 md:py-32 text-white relative overflow-hidden"
    >
      <div className="absolute inset-0 grid-bg opacity-40 pointer-events-none" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald mb-3">
            [ 03 ] Stack
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Everything required to build an AI company.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2">
          {STACK.map((s) => (
            <div
              key={s.tag}
              className="bg-navy p-6 md:p-8 group hover:bg-navy-soft transition-colors"
            >
              <div className="flex items-center justify-between mb-6">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${accentTextClass[s.accent]}`}
                >
                  [ {s.tag} ]
                </span>
                <span className="font-mono text-[10px] text-white/30">{s.index}</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-6">{s.title}</h3>
              <ul className="space-y-2">
                {s.items.map((it) => (
                  <li
                    key={it}
                    className="flex items-center gap-3 border-t border-white/5 py-3 text-sm text-white/70"
                  >
                    <span className={`size-1 ${accentDotClass[s.accent]}`} />
                    {it}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 05: PARTNERSHIP PATHS =====================
function PartnershipPaths() {
  return (
    <section id="models" className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">
            [ 05 ] Partnership Paths
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Multiple ways to partner.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {PARTNERSHIPS.map((p) => {
            const isPrimary = p.variant === "primary";
            return (
              <div
                key={p.tag}
                className={`relative border p-6 md:p-8 ${
                  isPrimary
                    ? "border-blue bg-navy text-white shadow-2xl shadow-blue/10"
                    : "border-line bg-white"
                }`}
              >
                <div className="flex items-center justify-between mb-6">
                  <span
                    className={`font-mono text-[10px] uppercase tracking-widest ${
                      isPrimary ? "text-blue" : "text-ink-muted"
                    }`}
                  >
                    [ {p.tag} ]
                  </span>
                  {p.recommended && (
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-blue text-white px-2 py-0.5">
                      Recommended
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">{p.title}</h3>
                <p
                  className={`text-xs uppercase font-mono tracking-widest mt-1 ${
                    isPrimary ? "text-white/50" : "text-ink-muted"
                  }`}
                >
                  {p.subtitle}
                </p>

                <div className="mt-6 mb-2">
                  <div className="text-3xl font-extrabold tracking-tight">{p.price}</div>
                  <div
                    className={`font-mono text-[10px] uppercase tracking-widest mt-1 ${
                      isPrimary ? "text-white/60" : "text-ink-muted"
                    }`}
                  >
                    {p.priceSub}
                  </div>
                </div>

                <ul className="my-8 space-y-2">
                  {p.items.map((it) => (
                    <li
                      key={it}
                      className={`flex items-center gap-3 border-t py-3 text-sm ${
                        isPrimary ? "border-white/10 text-white/80" : "border-line text-navy"
                      }`}
                    >
                      <span className={`size-1 ${isPrimary ? "bg-blue" : "bg-emerald"}`} />
                      {it}
                    </li>
                  ))}
                </ul>

                <button
                  className={`w-full py-3 text-xs font-bold uppercase tracking-widest transition ${
                    isPrimary
                      ? "bg-blue text-white hover:bg-blue/90"
                      : "border border-navy text-navy hover:bg-navy hover:text-white"
                  }`}
                >
                  {p.button}
                </button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 06: FOUNDER PROFILE =====================
function FounderProfile() {
  return (
    <section className="bg-white py-20 md:py-32 border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
            [ 06 ] Founder Profile
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">Who this is for.</h2>
        </div>

        <div className="grid gap-px bg-line border border-line md:grid-cols-2 lg:grid-cols-3">
          {PERSONAS.map((p) => (
            <div
              key={p.id}
              className="bg-white p-6 md:p-8 group hover:bg-paper transition"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                  [ {p.id} ]
                </span>
                <span className="size-2 bg-navy group-hover:bg-blue transition-colors" />
              </div>
              <h3 className="text-xl font-extrabold tracking-tight mb-3">{p.title}</h3>
              <p className="text-sm text-ink-muted">{p.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 07: SEQUENCE =====================
function SequenceSection() {
  return (
    <section className="bg-navy py-20 md:py-32 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald mb-3">
            [ 07 ] Sequence
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            From idea to revenue in 30 days.
          </h2>
        </div>

        <div className="relative">
          <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-white/10" />
          <ol className="space-y-10 md:space-y-16">
            {SEQUENCE.map((s, i) => {
              const flip = i % 2 === 1;
              return (
                <li
                  key={s.step}
                  className={`relative md:grid md:grid-cols-2 md:gap-12 ${
                    flip ? "md:[&>:first-child]:order-2" : ""
                  }`}
                >
                  <div className="pl-12 md:pl-0 md:text-right">
                    <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-2">
                      Step {s.step}
                    </div>
                    <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{s.title}</h3>
                  </div>
                  <div className="pl-12 md:pl-12 mt-3 md:mt-0 relative">
                    <span className="absolute left-2 md:left-0 top-1.5 size-4 -translate-x-1/2 md:-translate-x-1/2 rounded-full bg-blue ring-4 ring-navy" />
                    <p className="text-sm md:text-base text-white/60 max-w-md">{s.body}</p>
                  </div>
                </li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 08: PORTFOLIO =====================
function Portfolio() {
  return (
    <section id="cases" className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
            [ 08 ] Portfolio
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Venture launch stories.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {CASE_STUDIES.map((c) => (
            <article
              key={c.id}
              className="border border-line bg-white p-6 md:p-8 group hover:border-navy/30 transition"
            >
              <div className="flex items-center justify-between mb-6">
                <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                  [ {c.id} ]
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest text-emerald">
                  ● Live
                </span>
              </div>
              <div className="text-sm font-mono uppercase tracking-widest text-ink-muted mb-1">
                {c.founder}
              </div>
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl md:text-3xl font-extrabold tracking-tight">→</span>
                <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight">{c.name}</h3>
              </div>
              <p className="text-sm text-ink-muted mb-6">{c.body}</p>
              <div className="grid grid-cols-2 gap-px bg-line border border-line">
                <div className="bg-white p-4">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
                    Revenue
                  </div>
                  <div className="text-lg font-extrabold tracking-tight mt-1">{c.revenue}</div>
                </div>
                <div className="bg-white p-4">
                  <div className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">
                    Timeline
                  </div>
                  <div className="text-lg font-extrabold tracking-tight mt-1">{c.timeline}</div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

// ===================== SECTION 09: NETWORK =====================
function NetworkSection() {
  return (
    <section className="bg-navy py-20 md:py-32 text-white relative overflow-hidden">
      <div className="absolute inset-0 grid-bg opacity-30" />
      <div className="relative mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16 text-center">
          <div className="font-mono text-[10px] uppercase tracking-widest text-gold mb-3">
            [ 09 ] Network
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">More than a product.</h2>
          <p className="mx-auto max-w-md text-sm md:text-base text-white/60 mt-4">
            A connected network of founders, operators, partners, investors and advisors — wired through
            Spark Ventures infrastructure.
          </p>
        </div>

        <div className="relative mx-auto aspect-square w-full max-w-md">
          {/* Concentric circles */}
          <div className="absolute inset-8 rounded-full border border-white/10" />
          <div className="absolute inset-16 rounded-full border border-white/10" />
          <div className="absolute inset-24 rounded-full border border-white/5" />

          {/* Orbit nodes */}
          <div
            className="absolute inset-0"
            style={{ animation: "orbit 24s linear infinite reverse" }}
          >
            {NETWORK_NODES.map((n) => (
              <div
                key={n.label}
                className="absolute -translate-x-1/2 -translate-y-1/2"
                style={{ left: `${n.x}%`, top: `${n.y}%` }}
              >
                <div className="flex flex-col items-center">
                  <div className={`size-3 ${accentDotClass[n.color]} ring-4 ring-navy`} />
                  <span className="font-mono text-[9px] uppercase tracking-widest text-white/70 mt-2 whitespace-nowrap">
                    {n.label}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Center hub */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="relative">
              <div className="absolute inset-0 size-20 -m-2 rounded-full bg-blue/20 blur-xl animate-pulse" />
              <div className="relative size-16 bg-navy border border-blue/40 flex flex-col items-center justify-center">
                <div className="size-2 bg-blue rounded-full mb-1 animate-node-pulse" />
                <div className="font-mono text-[8px] uppercase tracking-widest text-blue">Spark</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ===================== CTA =====================
function CTASection() {
  return (
    <section
      id="cta"
      className="bg-navy py-24 md:py-40 text-white relative overflow-hidden border-t border-white/10"
    >
      <div className="absolute inset-0 grid-bg opacity-40" />
      <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-blue/10 blur-3xl" />

      <div className="relative mx-auto max-w-3xl px-6 text-center">
        <div className="font-mono text-[10px] uppercase tracking-widest text-emerald mb-6">
          ● Applications Open · 2026 Cohort
        </div>
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
          You already have <br className="hidden md:block" />
          the expertise. <span className="text-blue">We provide the infrastructure.</span>
        </h2>
        <p className="mx-auto max-w-xl text-base text-white/60 mt-6">
          Launch an AI software company without spending years building products from scratch.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-10">
          <a
            href="#"
            className="bg-blue px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-blue/90 transition"
          >
            Book Founder Strategy Session
          </a>
          <a
            href="#marketplace"
            className="border border-white/20 px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            Browse Venture Portfolio
          </a>
        </div>
      </div>
    </section>
  );
}

// ===================== FOOTER =====================
function Footer() {
  return (
    <footer className="bg-navy text-white border-t border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="grid gap-12 md:grid-cols-4">
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <SparkLogo size="size-5" dot="size-1.5" />
              <span className="font-mono text-xs font-bold uppercase tracking-tighter">
                Spark Ventures<sup className="text-[7px]">™</sup>
              </span>
            </div>
            <p className="text-sm text-white/50 max-w-sm">
              AI Venture Infrastructure™ for the next generation of industry operators, executives and
              founders.
            </p>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">
              Venture
            </div>
            <ul className="space-y-3">
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Marketplace
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Portfolio
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Methodology
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Network
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">
              Studio
            </div>
            <ul className="space-y-3">
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                About
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Cohorts
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Contact
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Press
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            © 2026 Spark Ventures · AI Venture Infrastructure™
          </span>
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            Mission Console v2.6
          </span>
        </div>
      </div>
    </footer>
  );
}

// ===================== MAIN PAGE =====================
export default function Page() {
  return (
    <main className="bg-white text-navy">
      <Navbar />
      <Hero />
      <TrustLayer />
      <Methodology />
      <StackSection />
      <Marketplace />
      <PartnershipPaths />
      <FounderProfile />
      <SequenceSection />
      <Portfolio />
      <NetworkSection />
      <FAQ />
      <CTASection />
      <Footer />
    </main>
  );
}
