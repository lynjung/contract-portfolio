"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SOCIAL_LINKS } from "@/lib/constants";
import { SPRING } from "@/lib/animation";

export default function Contact() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-60px" });

  return (
    <section
      ref={ref}
      id="contact"
      className="w-full max-w-4xl mx-auto px-6 md:px-8 py-16 md:py-24"
    >
      <motion.div
        initial={{ opacity: 0, y: 16 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={SPRING.smooth}
      >
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary mb-8">
          Let&apos;s work together
        </h2>
        <p className="text-text-secondary text-base leading-relaxed mb-6 max-w-md">
          Open to design engineering, frontend, and product design roles —
          or just a good conversation about the craft.
        </p>

        <a
          href="mailto:lynssjung@gmail.com"
          className="inline-block text-base text-text-primary hover:text-accent transition-colors mb-6"
        >
          lynssjung@gmail.com
        </a>

        <div className="flex items-center gap-2 text-sm text-text-muted">
          {SOCIAL_LINKS.filter((l) => l.icon !== "email").map((link, i) => (
            <span key={link.label} className="flex items-center gap-2">
              {i > 0 && <span aria-hidden="true">/</span>}
              <a
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-text-primary hover:text-accent transition-colors"
              >
                {link.label}
              </a>
            </span>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
