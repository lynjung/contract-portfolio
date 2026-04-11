"use client";

import { motion, type TargetAndTransition } from "framer-motion";
import { SPRING } from "@/lib/animation";

type Variant = "fade-up" | "fade-left" | "fade-right" | "scale";

const VARIANTS: Record<Variant, { initial: TargetAndTransition; whileInView: TargetAndTransition }> = {
  "fade-up": {
    initial: { opacity: 0, y: 32 },
    whileInView: { opacity: 1, y: 0 },
  },
  "fade-left": {
    initial: { opacity: 0, x: -40 },
    whileInView: { opacity: 1, x: 0 },
  },
  "fade-right": {
    initial: { opacity: 0, x: 40 },
    whileInView: { opacity: 1, x: 0 },
  },
  scale: {
    initial: { opacity: 0, scale: 0.97 },
    whileInView: { opacity: 1, scale: 1 },
  },
};

interface SectionProps {
  id?: string;
  children: React.ReactNode;
  className?: string;
  variant?: Variant;
}

export default function Section({
  id,
  children,
  className = "",
  variant = "fade-up",
}: SectionProps) {
  const v = VARIANTS[variant];

  return (
    <motion.section
      id={id}
      initial={v.initial}
      whileInView={v.whileInView}
      viewport={{ once: true, margin: "-80px" }}
      transition={SPRING.smooth}
      className={`w-full max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-28 ${className}`}
    >
      {children}
    </motion.section>
  );
}
