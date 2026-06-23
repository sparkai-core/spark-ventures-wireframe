"use client";

import { useState } from "react";
import { FAQ_ITEMS } from "@/lib/data";

export default function FAQ() {
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" className="bg-white py-20 md:py-32 border-t border-line">
      <div className="mx-auto max-w-3xl px-6">
        <div className="mb-12">
          <div className="font-mono text-[10px] uppercase tracking-widest text-blue mb-3">
            Honest Answers
          </div>
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
            The questions worth asking before you sign.
          </h2>
        </div>

        <div className="border-t border-line">
          {FAQ_ITEMS.map((item, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className="border-b border-line">
                <button
                  onClick={() => setOpen(isOpen ? null : i)}
                  className="w-full flex items-center gap-6 py-5 text-left group"
                >
                  <span className="font-mono text-[10px] uppercase tracking-widest text-ink-muted w-10 shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="flex-1 text-base md:text-lg font-bold tracking-tight">
                    {item.q}
                  </span>
                  <span
                    className={`font-mono text-lg transition-transform ${
                      isOpen ? "rotate-45" : ""
                    }`}
                  >
                    +
                  </span>
                </button>
                {isOpen && (
                  <div className="pl-16 pr-6 pb-6 text-sm text-ink-muted animate-fade-in">
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
