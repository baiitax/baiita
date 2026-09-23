import Link from "next/link";
import Reveal from "./Reveal";
import { caseStudies, statusBadgeClass } from "@/lib/projects";

const exposure = [
  { domain: "Fintech & Financial Infrastructure", project: "KoriePay" },
  { domain: "Cross-Border Trade", project: "MASAR" },
  { domain: "Real Estate & Property Technology", project: "KGM Real Estate" },
  {
    domain: "Cinematic Property Media Technology",
    project: "KGM Cinematic Studio OS",
  },
  { domain: "Agriculture & Export Finance", project: "Pluck Agro Allied" },
  {
    domain: "Digital Business Systems",
    project: "Automation & operational-system concepts",
  },
  {
    domain: "Public / Digital Information Systems",
    project: "NEIS-related research & architecture exploration",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-28 lg:py-40 hairline-t">
      <div className="mx-auto max-w-7xl px-6 lg:px-10">
        <Reveal>
          <p className="kicker mb-6">Exposure &amp; Flagship Work</p>
          <h2 className="h-display text-4xl md:text-6xl max-w-4xl">
            Domains Explored.
            <br />
            Systems <span className="italic text-gold-bright">Designed.</span>
          </h2>
          <p className="mt-8 max-w-2xl text-ivory-dim leading-relaxed">
            This portfolio is presented as an exposure framework built on
            actual project domains — never inflated into claimed achievements.
            Every project carries an honest status: concept, research,
            architecture, prototype, development or live.
          </p>
        </Reveal>

        {/* exposure strip */}
        <Reveal delay={100}>
          <div className="mt-14 hairline divide-y divide-[rgba(242,237,226,0.09)]">
            {exposure.map((e, i) => (
              <div
                key={e.domain}
                className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 px-6 py-4 hover:bg-ink-2 transition-colors"
              >
                <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute">
                  {String(i + 1).padStart(2, "0")} — {e.domain}
                </span>
                <span className="text-sm text-ivory-dim">{e.project}</span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* flagship cards */}
        <div className="mt-20 grid md:grid-cols-2 gap-px bg-line">
          {caseStudies.map((p, i) => (
            <Reveal key={p.slug} delay={(i % 2) * 80} className="bg-ink">
              <Link
                href={`/work/${p.slug}`}
                className="group block p-8 lg:p-12 h-full relative overflow-hidden hover:bg-ink-2 transition-colors"
              >
                <div
                  className="absolute top-0 left-0 right-0 h-px opacity-0 group-hover:opacity-100 transition-opacity"
                  style={{ background: p.accent }}
                />
                <div className="flex items-start justify-between gap-4 mb-8">
                  <span className="font-mono text-[10px] tracking-[0.25em] uppercase text-mute">
                    {p.domain}
                  </span>
                  <span className={`badge ${statusBadgeClass[p.status]}`}>
                    {p.status}
                  </span>
                </div>
                <h3 className="font-display text-3xl lg:text-4xl mb-3 group-hover:text-gold-bright transition-colors">
                  {p.name}
                </h3>
                <p className="font-mono text-[11px] tracking-[0.15em] uppercase text-ivory-dim mb-6">
                  {p.tagline}
                </p>
                <p className="text-sm text-ivory-dim leading-relaxed line-clamp-4">
                  {p.summary}
                </p>
                <div className="mt-8 flex items-center gap-3 font-mono text-[11px] tracking-[0.2em] uppercase text-mute group-hover:text-gold transition-colors">
                  Open Case Study
                  <span className="inline-block transition-transform group-hover:translate-x-2">
                    →
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
