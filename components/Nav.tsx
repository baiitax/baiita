"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

const links = [
  { href: "/#about", label: "About" },
  { href: "/#expertise", label: "Expertise" },
  { href: "/#projects", label: "Projects" },
  { href: "/#venture-lab", label: "Venture Lab" },
  { href: "/#thinking", label: "Strategy" },
  { href: "/#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled ? "glass hairline-b" : ""
        }`}
      >
        <div className="mx-auto max-w-7xl px-6 lg:px-10 flex items-center justify-between h-[72px]">
          <Link href="/" className="flex items-baseline gap-3 group">
            <span className="font-display text-lg tracking-tight text-ivory">
              Mujaheed Baita
            </span>
            <span className="hidden sm:block font-mono text-[9px] tracking-[0.3em] uppercase text-mute group-hover:text-gold transition-colors">
              Systems · Strategy · Markets
            </span>
          </Link>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="font-mono text-[11px] tracking-[0.2em] uppercase text-ivory-dim hover:text-gold transition-colors"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/#contact" className="btn btn-gold !py-2.5 !px-5">
              Work With Me
            </Link>
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label="Menu"
          >
            <span
              className={`block w-6 h-px bg-ivory transition-transform ${
                open ? "rotate-45 translate-y-[3.5px]" : ""
              }`}
            />
            <span
              className={`block w-6 h-px bg-ivory transition-transform ${
                open ? "-rotate-45 -translate-y-[3px]" : ""
              }`}
            />
          </button>
        </div>
      </header>

      {/* mobile sheet */}
      <div
        className={`fixed inset-0 z-40 lg:hidden transition-all duration-500 ${
          open ? "visible" : "invisible"
        }`}
      >
        <div
          className={`absolute inset-0 bg-black/60 transition-opacity ${
            open ? "opacity-100" : "opacity-0"
          }`}
          onClick={() => setOpen(false)}
        />
        <div
          className={`absolute bottom-0 left-0 right-0 glass hairline-t rounded-t-2xl p-8 pb-12 transition-transform duration-500 ${
            open ? "translate-y-0" : "translate-y-full"
          }`}
        >
          <div className="w-10 h-1 rounded-full bg-ivory/20 mx-auto mb-8" />
          <nav className="flex flex-col gap-1">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={() => setOpen(false)}
                className="font-display text-2xl py-3 text-ivory hover:text-gold transition-colors hairline-b"
              >
                {l.label}
              </Link>
            ))}
            <Link
              href="/#contact"
              onClick={() => setOpen(false)}
              className="btn btn-gold justify-center mt-6"
            >
              Work With Me
            </Link>
          </nav>
        </div>
      </div>
    </>
  );
}
