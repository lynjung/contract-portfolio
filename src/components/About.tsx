"use client";

import { useRef } from "react";
import Image from "next/image";
import { motion, useInView } from "framer-motion";
import { SPRING } from "@/lib/animation";

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD — Editorial
 *
 *    0ms   section scrolls into view
 *  100ms   photo fades in (opacity + slight scale)
 *  300ms   bio text fades in
 *  600ms   skills line fades in
 * ───────────────────────────────────────────────────────── */

export default function About() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section
      ref={ref}
      id="about"
      className="w-full max-w-6xl mx-auto px-6 md:px-8 py-28 md:py-40"
    >
      <div className="grid grid-cols-1 md:grid-cols-[1.2fr_1fr] gap-10 md:gap-20 items-start">
        {/* Photo — editorial, minimal chrome */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ ...SPRING.gentle, delay: 0.1 }}
          className="relative aspect-[4/5] bg-surface overflow-hidden rounded-sm"
        >
          <Image
            src="/bio.jpg"
            alt="Lyn Jung"
            fill
            className="object-cover object-top"
            sizes="(max-width: 768px) 100vw, 50vw"
          />
        </motion.div>

        {/* Bio — no heading, editorial voice */}
        <div className="md:pt-8">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ ...SPRING.smooth, delay: 0.3 }}
            className="space-y-5 text-text-secondary text-base leading-relaxed max-w-prose"
          >
            <p>
              I&apos;m a design and frontend engineer studying at Georgia Tech,
              where I bring a creative and strategic eye to every interface I
              build.
            </p>
            <p>
              I care about the details — clean layouts, intentional interactions,
              and code that&apos;s as meticulous as the design it brings to life.
            </p>
          </motion.div>

          {/* Skills — inline text, not pills */}
          <motion.p
            initial={{ opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ ...SPRING.smooth, delay: 0.6 }}
            className="mt-10 text-sm font-mono text-text-muted leading-relaxed"
          >
            React, TypeScript, Next.js, Tailwind CSS, Framer Motion, Figma
          </motion.p>
        </div>
      </div>
    </section>
  );
}
