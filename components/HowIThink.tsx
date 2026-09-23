"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const steps = [
  {
    n: "01",
    t: "Observe",
    d: "Understand the real business before proposing technology.",
  },
  {
    n: "02",
    t: "Deconstruct",
    d: "Break complicated processes into systems, actors, data and transactions.",
  },
  {
    n: "03",
    t: "Identify the Gap",
    d: "Find the friction that creates cost, risk, inefficiency or lost opportunity.",
  },
  {
    n: "04",
    t: "Architect",
    d: "Design the operational and technical structure required.",
  },
  {
    n: "05",
    t: "Build",
    d: "Turn the architecture into usable technology.",
  },
  {
    n: "06",
    t: "Automate",
    d: "Remove unnecessary manual processes.",
  },
  {
    n: "07",
    t: "Connect",
    d: "Create relationships between customers, businesses, financial institutions, markets and systems.",
  },
  {
    n: "08",
    t: "Measure",
    d: "Build intelligence around performance and outcomes.",
  },
  {
    n: "09",
    t: "Scale",
    d: "Design the system so it can expand beyond the original use case.",
  },
];

export default function HowIThink() {
  const [active, setActive] = useState(0);

  return (
    <section id="thinking" className="py-28 lg:py-40 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Strategic Mindset</p>
          <h2 className="h-display text-4xl md:text-6xl">How I Think</h2>
        </Reveal>

        <div className="mt-16 grid lg:grid-cols-12 gap-12">
          {/* step list */}
          <div className="lg:col-span-5">
            {steps.map((s, i) => (
              <button
                key={s.n}
                onMouseEnter={() => setActive(i)}
                onClick={() => setActive(i)}
                className={`w-full text-left flex items-center gap-6 py-4 hairline-b transition-all group ${
                  active === i ? "" : "opacity-50 hover:opacity-80"
                }`}
              >
                <span
                  className={`font-mono text-xs transition-colors ${
                    active === i ? "text-gold" : "text-mute"
                  }`}
                >
                  {s.n}
                </span>
                <span
                  className={`font-display text-xl md:text-2xl transition-colors ${
                    active === i ? "text-ivory" : "text-ivory-dim"
                  }`}
                >
                  {s.t}
                </span>
                <span
                  className={`ml-auto font-mono transition-all ${
                    active === i ? "text-gold translate-x-0" : "text-mute -translate-x-2 opacity-0"
                  }`}
                >
                  →
                </span>
              </button>
            ))}
          </div>

          {/* active card */}
          <div className="lg:col-span-7">
            <div className="card p-10 lg:p-14 lg:sticky lg:top-28 min-h-[320px] flex flex-col justify-between relative overflow-hidden">
              <span
                className="absolute -top-10 -right-6 font-display text-[180px] leading-none text-ivory/[0.04] select-none"
                aria-hidden
              >
                {steps[active].n}
              </span>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold">
                Step {steps[active].n} of 09
              </p>
              <div>
                <h3 className="font-display text-4xl md:text-5xl mb-6">
                  {steps[active].t}
                </h3>
                <p className="text-lg text-ivory-dim leading-relaxed max-w-lg">
                  {steps[active].d}
                </p>
              </div>
              <div className="mt-10 flex gap-1.5">
                {steps.map((_, i) => (
                  <div
                    key={i}
                    className={`h-px flex-1 transition-colors duration-500 ${
                      i <= active ? "bg-gold" : "bg-line"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
