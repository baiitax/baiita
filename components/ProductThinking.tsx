"use client";

import { useEffect, useState } from "react";
import Reveal from "./Reveal";

const cycle = [
  { t: "Find", d: "Find an underserved need." },
  { t: "Frame", d: "Define the problem." },
  { t: "Model", d: "Understand economics and workflows." },
  { t: "Architect", d: "Design the system." },
  { t: "Build", d: "Develop the product." },
  { t: "Automate", d: "Reduce friction." },
  { t: "Connect", d: "Integrate the ecosystem." },
  { t: "Scale", d: "Expand the infrastructure." },
];

export default function ProductThinking() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % cycle.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="py-28 lg:py-40 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Product Thinking</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            The Product Lifecycle, as a Discipline.
          </h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-2 gap-14 items-center">
          {/* vertical rail */}
          <div className="relative pl-8">
            <div className="absolute left-[11px] top-3 bottom-3 w-px bg-line" />
            {cycle.map((c, i) => (
              <button
                key={c.t}
                onClick={() => setActive(i)}
                className="relative flex items-start gap-6 py-3.5 w-full text-left group"
              >
                <span
                  className={`absolute -left-8 top-[22px] w-[7px] h-[7px] rounded-full border transition-all duration-500 ${
                    i === active
                      ? "bg-gold border-gold scale-125 shadow-[0_0_12px_rgba(201,169,106,0.5)]"
                      : i < active
                        ? "bg-gold/40 border-gold/40"
                        : "bg-ink border-line-strong"
                  }`}
                  style={{ transform: "translateX(8px)" }}
                />
                <span
                  className={`font-display text-2xl md:text-3xl transition-colors duration-500 ${
                    i === active ? "text-gold-bright" : "text-ivory-dim/60"
                  }`}
                >
                  {c.t}
                </span>
                <span
                  className={`text-sm mt-2 transition-opacity duration-500 hidden md:block ${
                    i === active ? "text-ivory-dim opacity-100" : "opacity-0"
                  }`}
                >
                  {c.d}
                </span>
              </button>
            ))}
          </div>

          {/* big display */}
          <div className="card p-10 lg:p-16 relative overflow-hidden min-h-[300px] flex flex-col justify-center">
            <span
              className="absolute top-6 right-8 font-mono text-[10px] tracking-[0.3em] text-mute"
              aria-hidden
            >
              {String(active + 1).padStart(2, "0")} / 08
            </span>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-4">
              Current Phase
            </p>
            <h3 className="font-display text-5xl md:text-7xl mb-6">
              {cycle[active].t}
            </h3>
            <p className="text-lg text-ivory-dim">{cycle[active].d}</p>
            <div className="mt-10 flex gap-1.5">
              {cycle.map((_, i) => (
                <div
                  key={i}
                  className={`h-[3px] flex-1 transition-colors duration-500 ${
                    i === active ? "bg-gold" : i < active ? "bg-gold/30" : "bg-line"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
