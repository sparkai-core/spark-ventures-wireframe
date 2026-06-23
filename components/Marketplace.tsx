"use client";

import { useState, useEffect } from "react";
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

const VISIBLE_COUNT = 3;
const CARD_WIDTH = 360;
const TOTAL_COPIES = 5;

export default function Marketplace({
  eyebrow = "Marketplace",
  title = "AI Products.",
}: {
  eyebrow?: string;
  title?: string;
}) {
  const [filter, setFilter] = useState("All Systems");
  const [hovered, setHovered] = useState<string | null>(null);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filtered =
    filter === "All Systems"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === filter);

  // Loop-aware position counter — wraps via modulo so the displayed
  // range is always 01-15 even though currentIndex itself never wraps.
  const pos = ((currentIndex % filtered.length) + filtered.length) % filtered.length;
  const displayEnd = Math.min(pos + VISIBLE_COUNT, filtered.length);

  // Reset to the middle of the looped track whenever the filter changes
  // so we have plenty of buffer on both sides for prev/next navigation.
  useEffect(() => {
    setCurrentIndex(Math.floor(filtered.length * (TOTAL_COPIES / 2)));
  }, [filter, filtered.length]);

  // Infinite-loop navigation: currentIndex just keeps incrementing /
  // decrementing forever. The track below contains TOTAL_COPIES copies
  // of the product list, so there is always content to show — no jump,
  // no disabled state, true circular motion.
  const next = () => setCurrentIndex((i) => i + 1);
  const prev = () => setCurrentIndex((i) => i - 1);

  return (
    <section id="marketplace" className="bg-white py-20 md:py-32">
        <div className="mx-auto max-w-6xl px-6">
          <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8">
            <div>
              <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
                {eyebrow}
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight">
                {title}
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

          {/* Manual carousel — 3 cards visible at a time, prev/next arrows */}
          <div className="relative">
            {/* Prev arrow */}
            <button
              onClick={prev}
              aria-label="Previous products"
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-white border border-navy text-navy flex items-center justify-center font-bold text-lg hover:bg-navy hover:text-white transition"
            >
              ←
            </button>

            {/* Viewport */}
            <div className="overflow-hidden border border-line mx-12">
              <div
                className="flex transition-transform duration-300 ease-out"
                style={{ transform: `translateX(-${currentIndex * CARD_WIDTH}px)` }}
              >
                {Array.from({ length: TOTAL_COPIES }, () => filtered)
                  .flat()
                  .map((p, i) => {
                    const isHover = hovered === p.id;
                    return (
                      <article
                        key={`${i}-${p.id}`}
                        onMouseEnter={() => setHovered(p.id)}
                        onMouseLeave={() => setHovered(null)}
                        className={`group bg-white p-6 transition-all relative shrink-0 w-[360px] border-r border-line min-h-[280px] ${
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
            </div>

            {/* Next arrow */}
            <button
              onClick={next}
              aria-label="Next products"
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 size-10 bg-white border border-navy text-navy flex items-center justify-center font-bold text-lg hover:bg-navy hover:text-white transition"
            >
              →
            </button>
          </div>

          {/* Position indicator (loop-aware — always shows 01-15) */}
          <div className="mt-6 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest text-ink-muted">
            <span>
              {String(pos + 1).padStart(2, "0")}-
              {String(displayEnd).padStart(2, "0")}{" "}
              / {String(filtered.length).padStart(2, "0")}
            </span>
          </div>
        </div>
      </section>
  );
}
