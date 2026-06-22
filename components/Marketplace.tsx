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

export default function Marketplace() {
  const [filter, setFilter] = useState("All Systems");

  const visible =
    filter === "All Systems"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  return (
    <section id="marketplace" className="bg-white py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-10">
          <div>
            <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
              [ 04 ] Marketplace
            </div>
            <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
              Choose your AI venture.
            </h2>
          </div>
          <div className="font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            Ref Index · SV-2026 · {String(visible.length).padStart(2, "0")} / {String(PRODUCTS.length).padStart(2, "0")}
          </div>
        </div>

        <div className="flex gap-2 overflow-x-auto pb-6 scrollbar-hide mb-2 -mx-6 px-6">
          {MARKETPLACE_FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setFilter(f)}
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
          {visible.map((p) => (
            <article
              key={p.id}
              className="group bg-white p-5 md:p-6 hover:bg-paper transition-colors relative"
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
              <p className="text-sm text-ink-muted mb-6 min-h-[2.5rem]">{p.description}</p>
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
              <div className="mt-5 flex items-center justify-between font-mono text-[10px] uppercase tracking-widest">
                <span className="text-ink-muted">Review Thesis</span>
                <span className="text-navy group-hover:text-blue transition">→</span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
