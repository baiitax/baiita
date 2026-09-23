import Link from "next/link";

export default function Footer() {
  return (
    <footer className="hairline-t bg-ink-2">
      {/* final CTA */}
      <div className="mx-auto max-w-7xl px-6 lg:px-10 py-28 lg:py-36 text-center">
        <p className="kicker mb-8">The Final Question</p>
        <h2 className="h-display text-4xl md:text-6xl max-w-3xl mx-auto">
          Have a problem worth
          <span className="italic text-gold-bright"> solving?</span>
        </h2>
        <p className="mt-8 text-ivory-dim max-w-xl mx-auto leading-relaxed">
          There is a gap somewhere in your business. Let&rsquo;s understand it
          — and design the system that closes it.
        </p>
        <div className="mt-12 flex flex-wrap justify-center gap-4">
          <Link href="/#contact" className="btn btn-gold">
            Start a Conversation
          </Link>
          <Link href="/#projects" className="btn btn-ghost">
            Explore the Work
          </Link>
          <Link href="/#contact" className="btn btn-text">
            Request a Consultation →
          </Link>
        </div>
      </div>

      {/* executive footer */}
      <div className="hairline-t">
        <div className="mx-auto max-w-7xl px-6 lg:px-10 py-16 grid md:grid-cols-3 gap-12">
          <div>
            <p className="font-display text-2xl tracking-tight">
              MUJAHEED BAITA
            </p>
            <ul className="mt-5 space-y-1.5 font-mono text-[11px] tracking-[0.2em] uppercase text-mute">
              <li>Technology Strategist</li>
              <li>Systems Architect</li>
              <li>Export Market Strategist</li>
              <li>Venture Builder</li>
            </ul>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              Navigation
            </p>
            <nav className="grid grid-cols-2 gap-y-2.5 gap-x-8 text-sm text-ivory-dim">
              <Link href="/#about" className="hover:text-gold transition-colors">About</Link>
              <Link href="/#expertise" className="hover:text-gold transition-colors">Expertise</Link>
              <Link href="/#projects" className="hover:text-gold transition-colors">Projects</Link>
              <Link href="/#venture-lab" className="hover:text-gold transition-colors">Venture Lab</Link>
              <Link href="/#thinking" className="hover:text-gold transition-colors">Strategy</Link>
              <Link href="/#projects" className="hover:text-gold transition-colors">Case Studies</Link>
              <Link href="/#contact" className="hover:text-gold transition-colors">Contact</Link>
            </nav>
          </div>
          <div>
            <p className="font-mono text-[10px] tracking-[0.3em] uppercase text-gold mb-5">
              Corridors of Focus
            </p>
            <p className="text-sm text-ivory-dim leading-relaxed">
              Nigeria ↔ Niger ↔ Saudi Arabia ↔ GCC
              <br />
              African supply · African technology · GCC demand · Cross-border
              infrastructure
            </p>
          </div>
        </div>
        <div className="hairline-t">
          <div className="mx-auto max-w-7xl px-6 lg:px-10 py-6 flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mute">
              © {new Date().getFullYear()} Mujaheed Baita — Digital Headquarters
            </p>
            <p className="font-mono text-[10px] tracking-[0.2em] uppercase text-mute">
              Never exaggerated. Never fabricated. Clearly classified.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
