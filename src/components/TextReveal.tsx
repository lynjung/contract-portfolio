"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { SPRING } from "@/lib/animation";

/* ─────────────────────────────────────────────────────────
 * ANIMATION STORYBOARD
 *
 *    0ms   waiting for scroll into view
 *  +delay  first word/char springs in (opacity 0→1, y 12→0)
 *  +stagger each subsequent word/char follows
 * ───────────────────────────────────────────────────────── */

const REVEAL = {
  offsetY: 12,
  staggerWords: 0.04,
  staggerChars: 0.025,
  spring: SPRING.smooth,
};

interface TextRevealProps {
  text: string;
  as?: "h1" | "h2" | "h3" | "p" | "span";
  delay?: number;
  className?: string;
  charLevel?: boolean;
  once?: boolean;
}

export default function TextReveal({
  text,
  as: Tag = "p",
  delay = 0,
  className = "",
  charLevel = false,
  once = true,
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once, margin: "-60px" });

  const words = text.split(" ");

  return (
    <Tag
      ref={ref as unknown as React.Ref<HTMLHeadingElement>}
      className={`${className}`}
      style={{ display: "flex", flexWrap: "wrap" }}
    >
      {words.map((word, wordIndex) => {
        const wordDelay =
          delay + (charLevel ? 0 : wordIndex * REVEAL.staggerWords);

        return (
          <span key={wordIndex} style={{ display: "inline-flex", overflow: "visible" }}>
            {charLevel ? (
              word.split("").map((char, charIndex) => {
                const totalCharsBefore = words
                  .slice(0, wordIndex)
                  .reduce((sum, w) => sum + w.length, 0);
                const charDelay =
                  delay +
                  (totalCharsBefore + charIndex) * REVEAL.staggerChars;

                return (
                  <motion.span
                    key={charIndex}
                    initial={{ opacity: 0, y: REVEAL.offsetY }}
                    animate={
                      isInView
                        ? { opacity: 1, y: 0 }
                        : { opacity: 0, y: REVEAL.offsetY }
                    }
                    transition={{ ...REVEAL.spring, delay: charDelay }}
                    style={{ display: "inline-block" }}
                  >
                    {char}
                  </motion.span>
                );
              })
            ) : (
              <motion.span
                initial={{ opacity: 0, y: REVEAL.offsetY }}
                animate={
                  isInView
                    ? { opacity: 1, y: 0 }
                    : { opacity: 0, y: REVEAL.offsetY }
                }
                transition={{ ...REVEAL.spring, delay: wordDelay }}
                style={{ display: "inline-block" }}
              >
                {word}
              </motion.span>
            )}
            {wordIndex < words.length - 1 && (
              <span style={{ display: "inline-block", width: "0.3em" }} />
            )}
          </span>
        );
      })}
    </Tag>
  );
}
