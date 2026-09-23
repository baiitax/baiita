"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const gapTypes = [
  {
    name: "Operational Gaps",
    desc: "Where manual processes slow a company down.",
  },
  {
    name: "Technology Gaps",
    desc: "Where existing software does not match actual business operations.",
  },
  {
    name: "Information Gaps",
    desc: "Where decision-makers cannot see what is happening.",
  },
  {
    name: "Market Gaps",
    desc: "Where customers have demand but supply is fragmented.",
  },
  {
    name: "Infrastructure Gaps",
    desc: "Where businesses lack the rails needed to transact efficiently.",
  },
  {
    name: "Financial Gaps",
    desc: "Where payment, liquidity, settlement or reconciliation creates friction.",
  },
  {
    name: "Communication Gaps",
    desc: "Where teams, customers, suppliers and management operate without a unified information layer.",
  },
  {
    name: "Export Gaps",
    desc: "Where producers have supply but cannot reliably access international buyers.",
  },
  {
    name: "Automation Gaps",
    desc: "Where people repeatedly perform processes that software should handle.",
  },
  {
    name: "Product Gaps",
    desc: "Where a business has an opportunity but lacks the digital product required to capture it.",
  },
];

export default function GapStrategist() {
  const [hovered, setHovered] = useState<number | null>(null);

  return (
    <section className="py-28 lg:py-40 hairline-t bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Business-Gap Strategist</p>
          <h2 className="h-display text-4xl md:text-6xl">
            The Gap Is
            <span className="italic text-gold-bright"> the Opportunity.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-ivory-dim leading-relaxed">
            Every engagement begins with the same discipline: finding the gap
            no one is looking at. Ten categories of gap show up again and again
            across markets, industries and systems — and each one is a design
            brief in disguise.
          </p>
        </Reveal>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-5 gap-px bg-line">
          {gapTypes.map((g, i) => (
            <Reveal
              key={g.name}
              delay={i * 40}
              className="bg-ink-2"
            >
              <div
                onMouseEnter={() => setHovered(i)}
                onMouseLeave={() => setHovered(null)}
                className="relative p-6 lg:p-7 h-full min-h-[190px] flex flex-col justify-between group cursor-default transition-colors hover:bg-ink-3"
              >
                <span
                  className={`font-mono text-[10px] transition-colors ${
                    hovered === i ? "text-gold" : "text-mute"
                  }`}
                >
                  {String(i + 1).padStart(2, "0")}
                </span>
                <div>
                  <h3 className="font-display text-lg mb-2 text-ivory">
                    {g.name}
                  </h3>
                  <p className="text-xs text-ivory-dim leading-relaxed">
                    {g.desc}
                  </p>
                </div>
                <div
                  className={`absolute bottom-0 left-0 h-px bg-gold transition-all duration-500 ${
                    hovered === i ? "w-full" : "w-0"
                  }`}
                />
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
