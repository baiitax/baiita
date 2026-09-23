"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const flow = ["PROBLEM", "GAP", "SYSTEM", "PRODUCT", "MARKET", "SCALE"];

export default function Hero() {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % flow.length), 1600);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col justify-center overflow-hidden">
      {/* architectural background lines */}
      <div className="absolute inset-0 pointer-events-none" aria-hidden>
        <div className="absolute left-[8%] top-0 bottom-0 w-px bg-line hidden md:block" />
        <div className="absolute right-[8%] top-0 bottom-0 w-px bg-line hidden md:block" />
        <div className="absolute left-1/2 top-0 bottom-0 w-px bg-line/50 hidden lg:block" />
        <div
          className="absolute -top-1/3 left-1/2 -translate-x-1/2 w-[900px] h-[900px] rounded-full opacity-[0.07]"
          style={{
            background:
              "radial-gradient(circle, #c9a96a 0%, transparent 62%)",
          }}
        />
        <div
          className="absolute bottom-[-30%] right-[-10%] w-[700px] h-[700px] rounded-full opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle, #3a9d78 0%, transparent 60%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl px-6 lg:px-10 w-full pt-32 pb-16">
        <p className="kicker mb-8 reveal is-visible">
          Executive Technology Strategist — Lagos · Riyadh Corridor Thinking
        </p>

        <h1 className="h-display text-[clamp(2.75rem,8vw,6.5rem)] max-w-5xl">
          I Build Systems
          <br />
          Around{" "}
          <span className="italic text-gold-bright">Opportunity.</span>
        </h1>

        <p className="mt-8 max-w-2xl text-lg md:text-xl text-ivory-dim leading-relaxed font-light">
          Technology strategist, systems architect, export-market strategist
          and venture builder focused on transforming business gaps into
          intelligent digital infrastructure.
        </p>

        <p className="mt-6 font-mono text-[11px] tracking-[0.28em] uppercase text-mute">
          Technology&ensp;•&ensp;Business Systems&ensp;•&ensp;Export
          Strategy&ensp;•&ensp;Fintech&ensp;•&ensp;Automation&ensp;•&ensp;Venture
          Architecture
        </p>

        <div className="mt-12 flex flex-wrap items-center gap-4">
          <Link href="/#contact" className="btn btn-gold">
            Work With Me →
          </Link>
          <Link href="/#projects" className="btn btn-ghost">
            Explore My Work
          </Link>
          <Link href="/#about" className="btn btn-text">
            View Strategic Profile ↓
          </Link>
        </div>

        {/* thinking-process flow */}
        <div className="mt-20 lg:mt-28">
          <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-mute mb-6">
            The Thinking Process
          </p>
          <div className="flex flex-wrap items-center gap-y-4">
            {flow.map((step, i) => (
              <div key={step} className="flex items-center">
                <div
                  className={`px-4 py-2.5 border font-mono text-[11px] md:text-xs tracking-[0.22em] transition-all duration-700 ${
                    i === active
                      ? "border-gold/60 text-gold-bright bg-gold/[0.07] shadow-[0_0_30px_rgba(201,169,106,0.12)]"
                      : i < active
                        ? "border-line-strong text-ivory-dim"
                        : "border-line text-mute"
                  }`}
                >
                  {step}
                </div>
                {i < flow.length - 1 && (
                  <div className="relative w-6 md:w-12 h-px mx-1 bg-line overflow-hidden">
                    <div
                      className={`absolute inset-y-0 left-0 bg-gold transition-all duration-700 ${
                        i < active ? "w-full" : "w-0"
                      }`}
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* scroll cue */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
        <span className="font-mono text-[9px] tracking-[0.3em] uppercase text-mute">
          Scroll
        </span>
        <div className="w-px h-10 bg-gradient-to-b from-gold/60 to-transparent" />
      </div>
    </section>
  );
}
