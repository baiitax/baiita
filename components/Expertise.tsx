"use client";

import { useState } from "react";
import Reveal from "./Reveal";

const matrix: Record<
  string,
  { intro: string; items: string[]; statement?: string }
> = {
  "Technology & Software": {
    intro:
      "Full-cycle product and platform engineering — from data model to portal.",
    items: [
      "Full-stack web application development",
      "Product architecture",
      "Web application architecture",
      "Frontend engineering",
      "Backend architecture",
      "Database design",
      "API architecture",
      "Authentication systems",
      "Role-based access control",
      "Dashboard development",
      "Admin systems",
      "Customer portals",
      "Business portals",
      "Developer portals",
      "Workflow automation",
      "Business process automation",
      "System integrations",
      "Data architecture",
      "Transaction systems",
      "Financial system architecture",
      "Operational systems",
      "AI-assisted product workflows",
      "Digital transformation",
      "Technical product strategy",
    ],
  },
  "Business Systems": {
    intro:
      "The strongest differentiator: redesigning the system around the business, not the task.",
    statement:
      "I don't only automate tasks. I redesign the system around the business.",
    items: [
      "Business process mapping",
      "Business-gap identification",
      "Workflow analysis",
      "Operational architecture",
      "Process automation",
      "Internal systems design",
      "Business intelligence",
      "Management dashboards",
      "Data-driven decision systems",
      "Customer journey mapping",
      "Agent/merchant workflows",
      "Compliance workflows",
      "Financial workflows",
      "Inventory workflows",
      "Approval workflows",
      "Settlement workflows",
      "Reconciliation systems",
      "Reporting systems",
      "Performance monitoring",
      "Operational intelligence",
    ],
  },
  "Strategy & Markets": {
    intro:
      "Strategic-level operation: from opportunity identification to market entry.",
    items: [
      "Business strategy",
      "Market-entry strategy",
      "Export strategy",
      "Product strategy",
      "Digital transformation strategy",
      "Opportunity identification",
      "Business-gap analysis",
      "Commercial modelling",
      "Venture architecture",
      "Market intelligence",
      "Cross-border commerce",
      "Partnership development",
    ],
  },
};

export default function Expertise() {
  const keys = Object.keys(matrix);
  const [tab, setTab] = useState(keys[0]);
  const cur = matrix[tab];

  return (
    <section id="expertise" className="py-28 lg:py-40 hairline-t bg-ink-2">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Expertise Matrix</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            Operating at Both the Strategic and the Technical Level.
          </h2>
        </Reveal>

        <Reveal delay={100}>
          <div className="mt-14 flex flex-wrap gap-3">
            {keys.map((k) => (
              <button
                key={k}
                onClick={() => setTab(k)}
                className={`font-mono text-[11px] tracking-[0.2em] uppercase px-5 py-3 border transition-all ${
                  tab === k
                    ? "border-gold/60 text-gold-bright bg-gold/[0.06]"
                    : "border-line text-ivory-dim hover:border-line-strong"
                }`}
              >
                {k}
              </button>
            ))}
          </div>
        </Reveal>

        <div className="mt-10">
          <p className="text-ivory-dim max-w-2xl">{cur.intro}</p>
          {cur.statement && (
            <blockquote className="mt-6 border-l-2 border-gold pl-6 font-display text-2xl md:text-3xl italic text-gold-bright max-w-2xl">
              “{cur.statement}”
            </blockquote>
          )}
          <div className="mt-10 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-px bg-line">
            {cur.items.map((item, i) => (
              <div
                key={item}
                className="bg-ink-2 p-5 group hover:bg-ink-3 transition-colors"
              >
                <span className="font-mono text-[9px] text-mute block mb-2 group-hover:text-gold transition-colors">
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className="text-sm text-ivory-dim group-hover:text-ivory transition-colors">
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
