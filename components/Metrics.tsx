import Reveal from "./Reveal";

const domains = [
  "Technology",
  "Business Systems",
  "Fintech",
  "Export",
  "Real Estate",
  "Automation",
  "Venture Building",
];

const markets = ["Nigeria", "Niger", "Saudi Arabia", "GCC", "Africa"];

const languagesExplored = ["English", "French", "Hausa"];
const currenciesExplored = ["NGN", "XOF", "SAR (research)"];

export default function Metrics() {
  return (
    <section className="py-28 lg:py-40 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Thinking Dashboard</p>
          <h2 className="h-display text-4xl md:text-5xl max-w-3xl">
            The Shape of the Practice.
          </h2>
          <p className="mt-6 text-sm text-mute font-mono tracking-wide max-w-xl">
            CONCEPTUAL AREAS — NOT VANITY STATISTICS. NO INVENTED NUMBERS.
          </p>
        </Reveal>

        <div className="mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-line">
          <Reveal className="bg-ink">
            <div className="p-8 h-full">
              <p className="metric-num">{String(domains.length).padStart(2, "0")}</p>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mt-2 mb-6">
                Domains
              </p>
              <ul className="space-y-1.5">
                {domains.map((d) => (
                  <li key={d} className="text-sm text-ivory-dim flex items-center gap-3">
                    <span className="w-2 h-px bg-gold/60" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={80} className="bg-ink">
            <div className="p-8 h-full">
              <p className="metric-num">{String(markets.length).padStart(2, "0")}</p>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald mt-2 mb-6">
                Markets Studied
              </p>
              <ul className="space-y-1.5">
                {markets.map((d) => (
                  <li key={d} className="text-sm text-ivory-dim flex items-center gap-3">
                    <span className="w-2 h-px bg-emerald/60" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={160} className="bg-ink">
            <div className="p-8 h-full">
              <p className="metric-num">{String(languagesExplored.length).padStart(2, "0")}</p>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mt-2 mb-6">
                Product Languages Explored
              </p>
              <ul className="space-y-1.5">
                {languagesExplored.map((d) => (
                  <li key={d} className="text-sm text-ivory-dim flex items-center gap-3">
                    <span className="w-2 h-px bg-gold/60" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
          <Reveal delay={240} className="bg-ink">
            <div className="p-8 h-full">
              <p className="metric-num">{String(currenciesExplored.length).padStart(2, "0")}</p>
              <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-emerald mt-2 mb-6">
                Currencies in System Design
              </p>
              <ul className="space-y-1.5">
                {currenciesExplored.map((d) => (
                  <li key={d} className="text-sm text-ivory-dim flex items-center gap-3">
                    <span className="w-2 h-px bg-emerald/60" />
                    {d}
                  </li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
