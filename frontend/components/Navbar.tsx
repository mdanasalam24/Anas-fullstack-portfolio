
"use client";

import { useState } from "react";
import { Menu, X, ArrowUpRight } from "lucide-react";

const navigationLinks = [
  { name: "Home", href: "#home" },
  { name: "About", href: "#about" },
  { name: "Technology", href: "#technology" },
  { name: "Experience", href: "#experience" },
  { name: "Projects", href: "#projects" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-slate-950/90 backdrop-blur-xl">

      <div className="mx-auto flex max-w-7xl items-center justify-between px-5 py-3 sm:px-6 lg:px-10">

        {/* BRAND */}
        <a
          href="#home"
          onClick={closeMenu}
          className="text-lg font-bold tracking-tight text-white sm:text-xl"
        >
          ANAS ALAM<span className="text-cyan-400"></span>
        </a>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden items-center gap-6 lg:flex xl:gap-8">
          {navigationLinks.map((link) => (
            <a
              key={link.name}
              href={link.href}
              className="text-sm font-medium text-slate-400 transition-colors duration-300 hover:text-cyan-400"
            >
              {link.name}
            </a>
          ))}
        </div>

        {/* DESKTOP CONTACT */}
        <a
          href="#contact"
          className="hidden items-center gap-2 rounded-full border border-cyan-400/40 px-5 py-2 text-sm font-medium text-cyan-300 transition duration-300 hover:bg-cyan-400 hover:text-slate-950 lg:inline-flex"
        >
          Let's Talk
          <ArrowUpRight size={16} />
        </a>

        {/* MOBILE MENU BUTTON */}
        <button
          type="button"
          onClick={() => setMenuOpen((previous) => !previous)}
          aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-navigation"
          className="flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 text-white transition hover:border-cyan-400/40 hover:text-cyan-400 lg:hidden"
        >
          {menuOpen ? <X size={21} /> : <Menu size={21} />}
        </button>

      </div>

      {/* MOBILE NAVIGATION */}
      <div
        id="mobile-navigation"
        aria-hidden={!menuOpen}
        className={`
          overflow-hidden border-t border-white/10 bg-slate-950
          transition-all duration-300 ease-in-out lg:hidden
          ${
            menuOpen
              ? "max-h-[480px] opacity-100"
              : "max-h-0 border-transparent opacity-0"
          }
        `}
      >
        <div className="px-5 py-3 sm:px-6">

          <div className="flex flex-col">
            {navigationLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                tabIndex={menuOpen ? 0 : -1}
                onClick={closeMenu}
                className="flex items-center justify-between border-b border-white/[0.06] py-3 text-sm font-medium text-slate-300 transition duration-300 hover:pl-2 hover:text-cyan-400"
              >
                <span>{link.name}</span>
                <ArrowUpRight size={15} className="text-slate-600" />
              </a>
            ))}
          </div>

          <a
            href="#contact"
            tabIndex={menuOpen ? 0 : -1}
            onClick={closeMenu}
            className="mt-4 flex w-full items-center justify-center gap-2 rounded-xl bg-cyan-400 px-5 py-3 text-sm font-bold text-slate-950 transition duration-300 hover:bg-cyan-300"
          >
            Let's Talk
            <ArrowUpRight size={16} />
          </a>

        </div>
      </div>

    </nav>
  );
}
