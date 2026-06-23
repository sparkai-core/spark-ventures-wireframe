"use client";

import { useState } from "react";
import { PRODUCTS, type ProductAccent } from "@/lib/data";

const dotColor: Record<ProductAccent, string> = {
  emerald: "bg-emerald",
  blue: "bg-blue",
  gold: "bg-gold",
};

export default function FeaturedProductsPreview() {
  const [hovered, setHovered] = useState<string | null>(null);
  const items = PRODUCTS.filter((p) => ["SC-01", "MK-03", "RC-04"].includes(p.id));

  return (
    <section className="bg-paper py-20 md:py-32 border-y border-line">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
              [ 04 ] Featured Products
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight max-w-2xl">
              Pick the market you know.
            </h2>
          </div>
          <p className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            15 products total · hover to preview · click to view details
          </p>
        </div>

        <div className="grid gap-px bg-line border border-line md:grid-cols-3">
          {items.map((p) => {
            const isHover = hovered === p.id;
            return (
              <article
                key={p.id}
                onMouseEnter={() => setHovered(p.id)}
                onMouseLeave={() => setHovered(null)}
                className={`bg-white p-6 md:p-8 transition-all relative ${
                  isHover ? "shadow-xl shadow-navy/5 -translate-y-0.5" : ""
                }`}
                style={isHover ? { borderColor: "#2b2b2b" } : undefined}
              >
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
                    [{p.id}] · {p.category}
                  </span>
                  <span className="font-mono text-[10px] uppercase tracking-widest text-emerald">
                    ● Available
                  </span>
                </div>
                <h3 className="text-xl font-extrabold tracking-tight mb-4">{p.name}</h3>
                <p className="text-sm text-ink-muted mb-6 min-h-[2.5rem]">
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
                {isHover && (
                  <div className="mt-6 pt-5 border-t border-line">
                    <a
                      href="/products"
                      className="inline-flex items-center gap-2 bg-navy text-white px-4 py-2 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-blue transition-colors"
                    >
                      Book a Call <span>→</span>
                    </a>
                  </div>
                )}
              </article>
            );
          })}
        </div>

        <div className="mt-10 flex flex-col md:flex-row items-center justify-between gap-4">
          <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            + 12 more →
          </span>
          <a
            href="/products"
            className="border border-navy text-navy px-6 py-3 font-mono text-[10px] font-bold uppercase tracking-widest hover:bg-navy hover:text-white transition"
          >
            Browse All Products
          </a>
        </div>
      </div>
    </section>
  );
}
