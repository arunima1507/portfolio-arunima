"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import Image from "next/image";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Education", href: "#education" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Journey", href: "#journey" },
  { label: "Beyond Code", href: "#beyond-code" },
  { label: "Contact", href: "#contact" },
];

// Matches the mobile menu's exit animation duration (in ms)
const MENU_CLOSE_DELAY = 300;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToSection = (href: string) => {
    const el = document.querySelector(href);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleNavClick = (href: string) => {
    if (menuOpen) {
      // Mobile: close the menu first, then scroll once the
      // collapse animation + layout shift has settled.
      setMenuOpen(false);
      window.setTimeout(() => {
        scrollToSection(href);
      }, MENU_CLOSE_DELAY);
    } else {
      // Desktop: no menu to close, scroll immediately.
      scrollToSection(href);
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 md:left-20 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-[#070B17]/80 backdrop-blur-md border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.3)]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 h-16 flex items-center justify-between">
        <a
          href="#"
          className="text-sm font-semibold tracking-wide text-white/90 hover:text-cyan-300 transition-colors
          "
        >
          <Image
            src="/arunimanavbarsign1.png"
            alt="Arunima Pathak"
            width={220}
            height={60}
            priority
            className="h-10 w-auto object-contain hover:opacity-90 transition-opacity duration-300"
          />
        </a>

        {/* Desktop menu */}
        <nav className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNavClick(link.href)}
              className="relative text-sm text-white/70 hover:text-white transition-colors group"
            >
              {link.label}
              <span className="absolute -bottom-1 left-0 w-0 h-px bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </button>
          ))}
        </nav>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-cyan-300 transition-colors"
          onClick={() => setMenuOpen((p) => !p)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="md:hidden bg-[#070B17]/95 backdrop-blur-md border-b border-white/10 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-4 gap-4">
              {NAV_LINKS.map((link) => (
                <button
                  key={link.href}
                  onClick={() => handleNavClick(link.href)}
                  className="text-left text-sm text-white/70 hover:text-cyan-300 transition-colors py-1"
                >
                  {link.label}
                </button>
              ))}
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}