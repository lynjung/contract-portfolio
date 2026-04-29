"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { NAV_ITEMS } from "@/lib/constants";
import { SPRING } from "@/lib/animation";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 100);
    window.addEventListener("scroll", handler, { passive: true });
    return () => window.removeEventListener("scroll", handler);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-background border-b border-border-subtle"
          : "bg-background border-b border-border-subtle"
      }`}
    >
      <div className="max-w-4xl mx-auto px-6 md:px-8 flex items-center justify-between h-14">
        <a href="#" className="text-text-primary leading-none" style={{ fontFamily: "var(--font-pinyon)", fontSize: "2rem" }}>
          L<span style={{ color: "oklch(80% 0.08 355)" }}>J</span>
        </a>

        {/* Desktop nav with animated underlines */}
        <div className="hidden md:flex items-center gap-8">
          {NAV_ITEMS.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="group relative text-[13px] text-text-muted hover:text-text-primary transition-colors"
            >
              {item.label}
              <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-accent group-hover:w-full transition-all duration-300 ease-out" />
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative w-8 h-8 flex items-center justify-center -mr-1"
          aria-label="Toggle menu"
        >
          <span
            className={`absolute block w-4 h-px bg-text-primary transition-all duration-200 ${
              mobileOpen ? "rotate-45" : "-translate-y-[3px]"
            }`}
          />
          <span
            className={`absolute block w-4 h-px bg-text-primary transition-all duration-200 ${
              mobileOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute block w-4 h-px bg-text-primary transition-all duration-200 ${
              mobileOpen ? "-rotate-45" : "translate-y-[3px]"
            }`}
          />
        </button>
      </div>

      {/* Mobile menu with staggered springs */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={SPRING.snappy}
            className="md:hidden bg-background/95 backdrop-blur-xl border-b border-border-subtle overflow-hidden"
          >
            <div className="max-w-4xl mx-auto px-6 py-4 flex flex-col gap-4">
              {NAV_ITEMS.map((item, i) => (
                <motion.a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    setMobileOpen(false);
                    setTimeout(() => {
                      document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
                    }, 150);
                  }}
                  initial={{ opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ ...SPRING.smooth, delay: i * 0.06 }}
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  {item.label}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
