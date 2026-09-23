"use client";

import { useEffect, useState } from "react";

export default function ArchDiagram({
  nodes,
  accent = "#c9a96a",
}: {
  nodes: string[];
  accent?: string;
}) {
  const [active, setActive] = useState(0);

  useEffect(() => {
    const t = setInterval(
      () => setActive((a) => (a + 1) % nodes.length),
      1400
    );
    return () => clearInterval(t);
  }, [nodes.length]);

  return (
    <div className="flex flex-col items-center">
      {nodes.map((n, i) => (
        <div key={n} className="flex flex-col items-center w-full max-w-sm">
          <div
            className={`w-full text-center px-6 py-4 border font-mono text-[11px] md:text-xs tracking-[0.22em] uppercase transition-all duration-700 ${
              i === active ? "text-ivory" : "text-ivory-dim"
            }`}
            style={{
              borderColor:
                i === active ? accent : "rgba(242,237,226,0.09)",
              background:
                i === active ? `${accent}12` : "transparent",
              boxShadow:
                i === active ? `0 0 30px ${accent}22` : "none",
            }}
          >
            {n}
          </div>
          {i < nodes.length - 1 && (
            <div className="relative h-8 w-px bg-line overflow-hidden my-0.5">
              <div
                className="absolute left-0 w-px h-2 arch-pulse"
                style={{
                  background: accent,
                  animationDelay: `${i * 0.2}s`,
                }}
              />
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
