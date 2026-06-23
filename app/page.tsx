import {
  TRUST_LAYER_STATS,
  TRADITIONAL_PATH,
  SPARK_PATH,
  STACK,
  PARTNERSHIPS,
  PERSONAS,
  SEQUENCE,
  NETWORK_NODES,
} from "@/lib/data";
import FAQ from "@/components/FAQ";
import TrackRecord from "@/components/TrackRecord";
import FeaturedProductsPreview from "@/components/FeaturedProductsPreview";
import Marketplace from "@/components/Marketplace";

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
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-navy/5 bg-white/85 px-4 py-3 backdrop-blur-md md:px-8 gap-4">
      <div className="flex items-center gap-3">
        {/* Logo */}
        <a href="#top" className="flex items-center gap-2">
          <SparkLogo />
          <span className="font-mono text-xs font-bold tracking-tighter uppercase text-navy">
            Start-up in a Box<sup className="text-[7px]">™</sup>
          </span>
        </a>
      </div>
      <div className="hidden md:flex items-center gap-8 font-mono text-[10px] uppercase tracking-widest text-navy/60">
        <a href="/products" className="hover:text-navy">Products</a>
        <a href="#how" className="hover:text-navy">How It Works</a>
        <a href="#models" className="hover:text-navy">Partner</a>
        <a href="#cases" className="hover:text-navy">Results</a>
        <a href="#faq" className="hover:text-navy">FAQ</a>
      </div>
      <a
        href="#cta"
        className="bg-navy text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-blue transition-colors"
      >
        Book a Call
      </a>
    </nav>
  );
}

// ===================== HERO =====================
function Hero() {
  return (
    <section id="top" className="relative overflow-hidden bg-navy pt-14 pb-12 text-white md:pt-24 md:pb-20">
      <div className="absolute inset-0 grid-bg opacity-60 pointer-events-none" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-blue/40 to-transparent" />

      <div className="relative mx-auto max-w-6xl px-6 text-center">
        {/* Live badge */}
        <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 mb-8 animate-fade-up-1">
          <span className="size-2 rounded-full bg-emerald animate-node-pulse" />
          <span className="font-mono text-[10px] uppercase tracking-[0.18em] text-emerald">
            15 AI businesses launched · Applications open
          </span>
        </div>

        {/* Headline */}
        <h1 className="text-balance text-5xl md:text-7xl font-extrabold leading-[1.02] tracking-tight animate-fade-up-2">
          Launch an AI Software Business in 30 Days
        </h1>

        {/* Sub */}
        <p className="mx-auto max-w-2xl text-base md:text-lg text-white/60 mt-6 animate-fade-up-3">
          Pick a product that already works. We give you the tech, the sales system, and the operational
          setup. You take it to market. <span className="text-white">You own the company.</span>
        </p>

        {/* Founder Briefing Video */}
        <div className="relative mx-auto mt-14 mb-10 max-w-4xl animate-fade-up-4">
          <div className="relative aspect-video border border-white/15 bg-white/[0.02] overflow-hidden group">
            <div className="absolute inset-0 grid-bg opacity-40" />
            <div className="absolute inset-0 flex flex-col items-center justify-center">
              <div className="size-20 rounded-full border-2 border-white/40 flex items-center justify-center group-hover:border-blue group-hover:bg-blue/10 transition-all">
                <span className="text-3xl text-white ml-1">▶</span>
              </div>
              <span className="font-mono text-[10px] uppercase tracking-widest text-white/60 mt-6">
                Founder Briefing
              </span>
              <span className="font-mono text-[9px] uppercase tracking-widest text-white/30 mt-2">
                How Start-up in a Box Works · 16:9
              </span>
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-px overflow-hidden">
              <div className="h-px w-1/2 bg-blue animate-ticker" />
            </div>
          </div>
        </div>

        {/* Flow Diagram */}
        <div className="relative mx-auto mb-12 max-w-3xl animate-fade-up-4">
          <div className="grid gap-2 md:grid-cols-5 md:items-stretch">
            <div className="relative border border-white/15 bg-white/[0.02] p-4 text-left">
              <div className="text-sm font-bold tracking-tight">What you know</div>
              <div className="font-mono text-[10px] text-white/50 mt-1">Expertise</div>
            </div>
            <div className="hidden md:flex items-center justify-center text-2xl text-white/40 font-bold">
              →
            </div>
            <div className="relative border border-blue/60 bg-blue/5 p-4 text-left">
              <div className="text-sm font-bold tracking-tight">Spark Infrastructure</div>
              <div className="font-mono text-[10px] text-white/50 mt-1">Product · GTM · Ops · Growth</div>
              <div className="absolute inset-x-0 bottom-0 h-px overflow-hidden">
                <div className="h-px w-1/2 bg-blue animate-ticker" />
              </div>
            </div>
            <div className="hidden md:flex items-center justify-center text-2xl text-white/40 font-bold">
              →
            </div>
            <div className="relative border border-white/15 bg-white/[0.02] p-4 text-left">
              <div className="text-sm font-bold tracking-tight">A company you own</div>
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
            Book a Call
          </a>
          <a
            href="/products"
            className="border border-white/20 px-6 py-4 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            Browse the Products
          </a>
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
              The Case
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
              Building from scratch is a bet most people lose.
            </h2>
          </div>
          <p className="max-w-md text-sm md:text-base text-ink-muted">
            The average funded startup takes 18 months to ship something customers will pay for. Most
            don&rsquo;t make it. We&rsquo;ve already built the product. The sales system is already working.
            You skip straight to the part where you&rsquo;re selling.
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
    <section id="how" className="bg-paper py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="mb-12 md:mb-16">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
            The Comparison
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
            Two paths. One costs you two years.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {/* Traditional Path */}
          <div className="border border-line bg-white p-6 md:p-8">
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-red-500">
                Path / A
              </span>
              <span className="font-mono text-[10px] text-ink-muted">12–24 MO · HIGH RISK</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
              Traditional
            </h3>
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
            <p className="mt-6 text-xs text-ink-muted leading-relaxed">
              Find a dev team → Build for 12 months → Raise money → Find customers → Run out of runway.
              18–24 months. Most never reach revenue.
            </p>
          </div>

          {/* Spark Path */}
          <div className="border-2 border-emerald bg-white p-6 md:p-8 shadow-xl shadow-emerald/5 relative">
            <div className="absolute -top-3 left-6 bg-emerald px-2 py-0.5 font-mono text-[10px] font-bold uppercase tracking-widest text-navy">
              Spark Route
            </div>
            <div className="flex items-center justify-between mb-3">
              <span className="font-mono text-[10px] uppercase tracking-widest text-emerald">
                Path / B
              </span>
              <span className="font-mono text-[10px] text-ink-muted">30 DAYS TO LIVE</span>
            </div>
            <h3 className="text-2xl md:text-3xl font-extrabold tracking-tight mb-6">
              Venture Infra.
            </h3>
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
            <p className="mt-6 text-xs text-ink-muted leading-relaxed">
              Pick your product → Get the full stack → Start selling in week one → First revenue by day 30.
              You skip the build phase entirely.
            </p>
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
            What You Get
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Four things every software company needs. Pre-built.
          </h2>
        </div>

        <div className="grid gap-px bg-white/10 border border-white/10 md:grid-cols-2">
          {STACK.map((s) => (
            <div
              key={s.tag}
              className="bg-navy p-6 md:p-8 group hover:bg-navy-soft transition-colors"
            >
              <div className="flex items-center justify-between mb-4">
                <span
                  className={`font-mono text-[10px] uppercase tracking-widest ${accentTextClass[s.accent]}`}
                >
                  [ {s.tag} ]
                </span>
                <span className="font-mono text-[10px] text-white/30">{s.index}</span>
              </div>
              <h3 className="text-2xl font-extrabold tracking-tight mb-3">{s.title}</h3>
              <p className="text-sm text-white/60 mb-6 leading-relaxed">{s.body}</p>
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
            Your Options
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            Two ways in. Both get you a real business.
          </h2>
        </div>

        <div className="grid gap-4 md:grid-cols-2">
          {PARTNERSHIPS.map((p) => {
            const isPrimary = p.variant === "primary";
            return (
              <div
                key={p.tag}
                className="relative border border-line bg-white p-6 md:p-8 flex flex-col"
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
                    <span className="font-mono text-[10px] uppercase tracking-widest bg-navy text-white px-2 py-0.5">
                      ★ Recommended
                    </span>
                  )}
                </div>
                <h3 className="text-2xl font-extrabold tracking-tight">{p.title}</h3>
                <p className="text-xs uppercase font-mono tracking-widest mt-1 text-ink-muted">
                  {p.subtitle}
                </p>

                <div className="mt-6 mb-2">
                  <div className="text-3xl font-extrabold tracking-tight">{p.price}</div>
                  <div className="font-mono text-[10px] uppercase tracking-widest mt-1 text-ink-muted">
                    {p.priceSub}
                  </div>
                </div>

                <p className="mt-6 text-sm leading-relaxed text-ink-muted">
                  {p.body}
                </p>

                <button
                  className="w-full py-2 mt-auto border border-navy text-navy bg-white text-xs font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition"
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
            Who This Is For
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            This works if you know something.
          </h2>
          <p className="mt-5 max-w-3xl text-base text-ink-muted">
            You don&rsquo;t need a tech background. You need domain knowledge &mdash; an industry you
            understand well enough to close a room. The consultants, executives, and operators who do
            best here all had that in common.
          </p>
        </div>

        <div className="grid gap-px bg-line border border-line md:grid-cols-2 lg:grid-cols-4">
          {PERSONAS.map((p) => (
            <div
              key={p.id}
              className="bg-white p-6 md:p-8 group hover:bg-paper transition"
            >
              <div className="flex items-center gap-2 mb-6">
                <span className="text-lg text-navy">{p.symbol}</span>
                <h3 className="text-lg font-extrabold tracking-tight">{p.title}</h3>
              </div>
              <div className="space-y-4">
                <p className="text-sm text-navy leading-relaxed">{p.who}</p>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-red-500 mb-1">
                    Problem
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.problem}</p>
                </div>
                <div>
                  <div className="font-mono text-[9px] uppercase tracking-widest text-emerald mb-1">
                    What changed
                  </div>
                  <p className="text-sm text-ink-muted leading-relaxed">{p.change}</p>
                </div>
              </div>
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
            The First 30 Days
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-3xl">
            What actually happens from day one.
          </h2>
        </div>

        <div className="relative">
          <ol className="grid grid-cols-1 md:grid-cols-6 gap-8 md:gap-4">
            {SEQUENCE.map((s) => (
              <li key={s.step} className="relative">
                <div className="size-12 rounded-full border-2 border-blue flex items-center justify-center mb-4 bg-navy">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-blue">
                    {s.step}
                  </span>
                </div>
                <h3 className="text-base font-extrabold tracking-tight mb-1">{s.title}</h3>
                <p className="text-sm text-white/60 leading-relaxed">{s.subtitle}</p>
              </li>
            ))}
          </ol>
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
            The Network
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">You&rsquo;re not doing this alone.</h2>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-white/60 mt-4">
            Spark sits at the centre of a connected network of founders, operators, partners, and
            customers &mdash; all building in the same direction.
          </p>
          <p className="mx-auto max-w-2xl text-sm md:text-base text-white/60 mt-4">
            When you join, you plug into the whole thing. Shared knowledge, shared relationships,
            shared momentum.
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
                <div className="flex flex-col items-center animate-orbit">
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
          ● Applications open. 2026 cohort.
        </div>
        <h2 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-[1.02]">
          You know your industry. We know how to build software companies inside it.
        </h2>
        <p className="mx-auto max-w-xl text-base text-white/60 mt-6">
          That combination is the whole point.
        </p>
        <div className="flex flex-col md:flex-row gap-3 justify-center mt-10">
          <a
            href="#"
            className="bg-blue px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-blue/90 transition"
          >
            Book a Call
          </a>
          <a
            href="/products"
            className="border border-white/20 px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-white/5 transition"
          >
            Browse the Products
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
          <div className="md:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <SparkLogo size="size-5" dot="size-1.5" />
              <span className="font-mono text-xs font-bold uppercase tracking-tighter">
            Start-up in a Box<sup className="text-[7px]">™</sup>
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
                Browse Products
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                How It Works
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Portfolio
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Apply
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
                Team
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Infrastructure
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Careers
              </li>
            </ul>
          </div>

          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-white/30 mb-4">
              Legal
            </div>
            <ul className="space-y-3">
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Privacy Policy
              </li>
              <li className="text-xs font-bold uppercase tracking-widest hover:text-blue transition cursor-pointer">
                Terms
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-white/10">
          <span className="font-mono text-[10px] uppercase tracking-widest text-white/40">
            © 2026 Start-up in a Box. All rights reserved.
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
      <TrackRecord />
      <PartnershipPaths />
      <FounderProfile />
      <SequenceSection />
      <Marketplace eyebrow="Marketplace" title="Choose your AI venture." />
      <NetworkSection />
      <FAQ />
      <FeaturedProductsPreview />
      <CTASection />
      <Footer />
    </main>
  );
}
