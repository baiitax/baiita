"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const gaps = [
  {
    gap: "Operations break down between departments",
    solution: "Workflow systems with clear states, owners and handoffs",
  },
  {
    gap: "Money leaks through unreconciled transactions",
    solution: "Ledger-first architecture with automated reconciliation",
  },
  {
    gap: "Information is lost between teams and tools",
    solution: "A unified data layer every actor reads from",
  },
  {
    gap: "Customers experience friction at every touchpoint",
    solution: "Journey-mapped products designed around real behaviour",
  },
  {
    gap: "Employees repeat work software should handle",
    solution: "Process automation targeted at the highest-cost loops",
  },
  {
    gap: "Markets are underserved but supply is fragmented",
    solution: "Transaction infrastructure that aggregates and verifies",
  },
  {
    gap: "Systems exist but refuse to communicate",
    solution: "Integration architecture and API rails between them",
  },
];

const lens = [
  "What the business is trying to achieve",
  "Where operations break down",
  "Where money leaks",
  "Where information is lost",
  "Where customers experience friction",
  "Where employees perform repetitive work",
  "Where markets are underserved",
  "Where opportunities are hidden",
  "Where existing systems fail to communicate",
  "Where technology can create leverage",
];

export default function Intro() {
  const [i, setI] = useState(0);

  return (
    <section id="about" className="relative py-28 lg:py-40 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <div className="grid lg:grid-cols-12 gap-14">
          <div className="lg:col-span-5">
            <Reveal>
              <p className="kicker mb-6">Strategic Profile</p>
              <h2 className="h-display text-4xl md:text-5xl">
                I Don&rsquo;t Start With Technology.
                <br />
                <span className="italic text-gold-bright">
                  I Start With the Gap.
                </span>
              </h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="mt-8 text-ivory-dim leading-relaxed">
                Most technology fails because it was designed before the
                business was understood. My approach inverts that. I study how
                a business actually operates — its money flows, its workflows,
                its markets, its people — until the gap becomes visible. Only
                then is technology introduced, as the mechanism that closes it.
              </p>
              <p className="mt-5 text-ivory-dim leading-relaxed">
                Technology is my tool. Business systems are my language.
                Markets are my laboratory.
              </p>
            </Reveal>
            <Reveal delay={200}>
              <ul className="mt-10 grid grid-cols-1 gap-0">
                {lens.map((l, idx) => (
                  <li
                    key={l}
                    className="flex items-center gap-4 py-2.5 hairline-b text-sm text-ivory-dim"
                  >
                    <span className="font-mono text-[10px] text-gold/70 w-6">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                    {l}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>

          {/* Gap → Solution interactive */}
          <div className="lg:col-span-7 lg:pl-10">
            <Reveal delay={150}>
              <div className="card p-8 lg:p-10 sticky top-28">
                <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-mute mb-8">
                  Interactive — Gap → Solution System
                </p>

                <div className="space-y-px">
                  {gaps.map((g, idx) => (
                    <button
                      key={g.gap}
                      onMouseEnter={() => setI(idx)}
                      onClick={() => setI(idx)}
                      className={`w-full text-left px-5 py-4 border transition-all duration-300 ${
                        i === idx
                          ? "border-gold/50 bg-gold/[0.06]"
                          : "border-line hover:border-line-strong"
                      }`}
                    >
                      <div className="flex items-center justify-between gap-4">
                        <span
                          className={`text-sm transition-colors ${
                            i === idx ? "text-ivory" : "text-ivory-dim"
                          }`}
                        >
                          {g.gap}
                        </span>
                        <span
                          className={`font-mono text-xs transition-all ${
                            i === idx ? "text-gold rotate-0" : "text-mute -rotate-90"
                          }`}
                        >
                          →
                        </span>
                      </div>
                      <div
                        className={`grid transition-all duration-500 ${
                          i === idx
                            ? "grid-rows-[1fr] opacity-100 mt-3"
                            : "grid-rows-[0fr] opacity-0"
                        }`}
                      >
                        <div className="overflow-hidden">
                          <p className="text-sm text-emerald flex items-start gap-3">
                            <span className="font-mono text-[10px] tracking-[0.2em] uppercase border border-emerald-dim px-2 py-0.5 mt-0.5 shrink-0">
                              System
                            </span>
                            {g.solution}
                          </p>
                        </div>
                      </div>
                    </button>
                  ))}
                </div>

                <p className="mt-8 text-xs text-mute leading-relaxed font-mono tracking-wide">
                  FROM OPERATIONAL PROBLEMS TO DIGITAL INFRASTRUCTURE — SYSTEMS
                  DESIGNED AROUND HOW BUSINESSES ACTUALLY WORK.
                </p>
              </div>
            </Reveal>
          </div>
        </div>
      </div>
    </section>
  );
}
