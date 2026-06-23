"use client";

import { useState } from "react";
import { MARKETPLACE_FILTERS, PRODUCTS, type ProductStatus, type ProductAccent } from "@/lib/data";

const statusColor: Record<ProductStatus, string> = {
  Available: "text-emerald",
  Scaling: "text-blue",
  Enterprise: "text-gold",
};

const dotColor: Record<ProductAccent, string> = {
  emerald: "bg-emerald",
  blue: "bg-blue",
  gold: "bg-gold",
};

const PAGE_SIZE = 6;

export default function Marketplace() {
  const [filter, setFilter] = useState("All Systems");
  const [shown, setShown] = useState(PAGE_SIZE);
  const [hovered, setHovered] = useState<string | null>(null);

  const filtered =
    filter === "All Systems"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  const visible = filtered.slice(0, shown);
  const hasMore = shown < filtered.length;

  const onFilterChange = (f: string) => {
    setFilter(f);
    setShown(PAGE_SIZE);
  };

  return (
    <>
      <section id="marketplace" className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
                [ // ] Marketplace
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                AI Products.
              </h1>
              <p className="mt-5 max-w-2xl text-base md:text-lg text-ink-muted">
                Pick the market you know. We built the software for it. Every product below is
                live, tested, and ready to take to customers.
              </p>
            </div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted text-right whitespace-nowrap">
              Ref Index · SV-2026
              <br />
              {String(filtered.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
            </div>
          </div>

          <div className="flex flex-wrap gap-2 mb-10">
            {MARKETPLACE_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => onFilterChange(f)}
                className={`shrink-0 border px-4 py-1.5 font-mono text-[10px] uppercase tracking-widest transition ${
                  filter === f
                    ? "border-navy bg-navy text-white"
                    : "border-line text-ink-muted hover:border-navy/40"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          <div className="grid gap-px bg-line border border-line md:grid-cols-2 lg:grid-cols-3">
            {visible.map((p) => {
              const isHover = hovered === p.id;
              return (
                <article
                  key={p.id}
                  onMouseEnter={() => setHovered(p.id)}
                  onMouseLeave={() => setHovered(null)}
                  className={`group bg-white p-6 transition-all relative min-h-[280px] ${
                    isHover ? "shadow-xl shadow-navy/10" : ""
                  }`}
                  style={isHover ? { borderColor: "#2b2b2b" } : undefined}
                >
                  <div className="flex items-start justify-between mb-5">
                    <div>
                      <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted mb-1">
                        [{p.id}] · {p.category}
                      </div>
                      <h3 className="text-xl font-extrabold tracking-tight">{p.name}</h3>
                    </div>
                    <span className={`font-mono text-[9px] uppercase tracking-widest ${statusColor[p.status]}`}>
                      ● {p.status}
                    </span>
                  </div>
                  <p className="text-sm text-ink-muted mb-6 min-h-[3.5rem]">
                    {isHover ? p.benefit : p.description}
                  </p>
                  <div className="grid grid-cols-3 gap-px bg-line border border-line">
                    <div className="bg-white p-3">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">Market</div>
                      <div className="text-xs font-bold text-navy mt-1">{p.market}</div>
                    </div>
                    <div className="bg-white p-3">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">Launch</div>
                      <div className="text-xs font-bold text-navy mt-1">{p.launch}</div>
                    </div>
                    <div className="bg-white p-3">
                      <div className="font-mono text-[9px] uppercase tracking-widest text-ink-muted">Model</div>
                      <div className="text-xs font-bold text-navy mt-1">{p.model}</div>
                    </div>
                  </div>
                  {isHover ? (
                    <div className="mt-5 pt-5 border-t border-line">
                      <a
                        href="#cta"
                        className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-blue transition-colors"
                      >
                        Book a Call <span>→</span>
                      </a>
                    </div>
                  ) : (
                    <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                      <span className="text-ink-muted">Review Thesis</span>
                      <span className="text-navy group-hover:text-blue transition">→</span>
                    </div>
                  )}
                </article>
              );
            })}
          </div>

          <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
            <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
              Showing {String(visible.length).padStart(2, "0")} of {String(filtered.length).padStart(2, "0")} products
            </span>
            {hasMore && (
              <button
                onClick={() => setShown((n) => n + PAGE_SIZE)}
                className="border border-navy text-navy px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition"
              >
                Load More
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Page Bottom CTA — products page */}
      <section id="cta" className="bg-navy py-24 md:py-32 text-white relative overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 grid-bg opacity-40" />
        <div className="absolute -top-1/2 left-1/2 -translate-x-1/2 size-[600px] rounded-full bg-blue/10 blur-3xl" />
        <div className="relative mx-auto max-w-3xl px-6 text-center">
          <div className="font-mono text-[10px] uppercase tracking-widest text-emerald mb-6">
            ● Ready to start?
          </div>
          <h2 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-[1.02]">
            Seen something that fits?
          </h2>
          <p className="mx-auto max-w-xl text-base text-white/60 mt-6">
            Book a call and we&rsquo;ll walk you through the right product for your market.
          </p>
          <div className="flex flex-col md:flex-row gap-3 justify-center mt-10">
            <a
              href="#"
              className="bg-blue px-8 py-5 text-xs font-bold uppercase tracking-widest hover:bg-blue/90 transition"
            >
              Book a Call &rarr;
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
