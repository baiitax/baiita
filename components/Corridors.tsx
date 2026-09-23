import Reveal from "./Reveal";

export default function Corridors() {
  return (
    <section className="py-28 lg:py-40 hairline-t bg-ink-2 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Global / African Positioning</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            Strategic Corridors, Not Random Markets.
          </h2>
          <p className="mt-8 max-w-2xl text-ivory-dim leading-relaxed">
            The work concentrates on a deliberate intersection: African supply,
            African technology, GCC demand and the cross-border infrastructure
            connecting them.
          </p>
        </Reveal>

        <Reveal delay={120}>
          <div className="mt-16 card p-8 lg:p-14 relative">
            <svg
              viewBox="0 0 800 360"
              className="w-full h-auto"
              role="img"
              aria-label="Strategic corridor map: Nigeria, Niger, Saudi Arabia and the GCC"
            >
              {/* corridor lines */}
              <path
                d="M170 250 C 190 170, 200 150, 215 120"
                fill="none"
                stroke="rgba(58,157,120,0.5)"
                strokeWidth="1.2"
                className="corridor-path"
              />
              <path
                d="M170 250 C 330 140, 480 120, 600 140"
                fill="none"
                stroke="rgba(201,169,106,0.55)"
                strokeWidth="1.2"
                className="corridor-path"
              />
              <path
                d="M215 120 C 360 80, 500 90, 600 140"
                fill="none"
                stroke="rgba(201,169,106,0.35)"
                strokeWidth="1"
                className="corridor-path"
                style={{ animationDelay: "0.8s" }}
              />
              <path
                d="M600 140 C 650 170, 670 190, 690 220"
                fill="none"
                stroke="rgba(159,182,217,0.45)"
                strokeWidth="1"
                className="corridor-path"
                style={{ animationDelay: "1.2s" }}
              />

              {/* nodes */}
              {[
                { x: 170, y: 250, label: "NIGERIA", sub: "Supply · Technology", c: "#3a9d78" },
                { x: 215, y: 120, label: "NIGER", sub: "Corridor Partner", c: "#3a9d78" },
                { x: 600, y: 140, label: "SAUDI ARABIA", sub: "Demand · Market Entry", c: "#c9a96a" },
                { x: 690, y: 220, label: "GCC", sub: "Expansion Corridors", c: "#9fb6d9" },
              ].map((n) => (
                <g key={n.label}>
                  <circle cx={n.x} cy={n.y} r="22" fill="none" stroke={n.c} strokeOpacity="0.18" />
                  <circle cx={n.x} cy={n.y} r="10" fill="none" stroke={n.c} strokeOpacity="0.4" />
                  <circle cx={n.x} cy={n.y} r="4" fill={n.c} />
                  <text
                    x={n.x}
                    y={n.y + 44}
                    textAnchor="middle"
                    fill="#f2ede2"
                    fontSize="13"
                    fontFamily="IBM Plex Mono, monospace"
                    letterSpacing="3"
                  >
                    {n.label}
                  </text>
                  <text
                    x={n.x}
                    y={n.y + 62}
                    textAnchor="middle"
                    fill="#7d786c"
                    fontSize="10"
                    fontFamily="IBM Plex Mono, monospace"
                    letterSpacing="1.5"
                  >
                    {n.sub}
                  </text>
                </g>
              ))}
            </svg>

            <div className="mt-8 grid sm:grid-cols-4 gap-px bg-line">
              {[
                "African Supply",
                "African Technology",
                "GCC Demand",
                "Cross-Border Infrastructure",
              ].map((t) => (
                <div
                  key={t}
                  className="bg-ink-2 px-4 py-3 font-mono text-[10px] tracking-[0.2em] uppercase text-ivory-dim text-center"
                >
                  {t}
                </div>
              ))}
            </div>
            <p className="mt-6 text-[11px] text-mute font-mono tracking-wide">
              Corridors represent strategic focus and market intelligence — not
              physical offices or claimed operations.
            </p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
