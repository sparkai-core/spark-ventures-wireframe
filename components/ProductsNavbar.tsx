// Spark Ventures™ logo: navy square + pulsing blue dot
function SparkLogo({ size = "size-6", dot = "size-2" }: { size?: string; dot?: string }) {
  return (
    <div className={`${size} bg-navy flex items-center justify-center`}>
      <div className={`${dot} bg-blue animate-pulse`} />
    </div>
  );
}

// Products-page navigation: ← Home pill on the left, active Products pill in the centre
export default function ProductsNavbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-navy/5 bg-white/85 px-4 py-3 backdrop-blur-md md:px-8 gap-4">
      <div className="flex items-center gap-3">
        {/* ← Home pill — keeps users from getting stranded */}
        <a
          href="/"
          className="flex items-center gap-1 border border-line px-3 py-1.5 rounded-full font-mono text-[10px] uppercase tracking-widest text-ink-muted hover:border-navy/40 hover:text-navy transition"
        >
          ← Home
        </a>
        {/* Vertical separator */}
        <div className="w-px h-4 bg-line" />
        {/* Logo */}
        <a href="/" className="flex items-center gap-2">
          <SparkLogo />
          <span className="font-mono text-xs font-bold tracking-tighter uppercase text-navy">
            Spark Ventures<sup className="text-[7px]">™</sup>
          </span>
        </a>
      </div>

      <div className="hidden md:flex items-center gap-1 font-mono text-[10px] uppercase tracking-widest">
        {/* Active page pill */}
        <span className="bg-navy text-white px-3 py-1 rounded-full font-bold">
          Products
        </span>
        <a
          href="/#how"
          className="text-ink-muted hover:text-navy px-3 py-1 transition"
        >
          How It Works
        </a>
        <a
          href="/#models"
          className="text-ink-muted hover:text-navy px-3 py-1 transition"
        >
          Partner
        </a>
        <a
          href="/#cases"
          className="text-ink-muted hover:text-navy px-3 py-1 transition"
        >
          Results
        </a>
        <a
          href="/#faq"
          className="text-ink-muted hover:text-navy px-3 py-1 transition"
        >
          FAQ
        </a>
      </div>

      <a
        href="/#cta"
        className="bg-navy text-white px-4 py-2 text-[10px] font-bold uppercase tracking-widest hover:bg-blue transition-colors"
      >
        Book a Call
      </a>
    </nav>
  );
}