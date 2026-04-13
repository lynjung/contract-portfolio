"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import AsciiVideoHero from "./AsciiVideoHero";
import TextReveal from "./TextReveal";
import { SPRING } from "@/lib/animation";
import type { ColorMode } from "@/ascii/renderer";

const TIMING = {
  nameReveal: 0.4,
  roleReveal: 0.9,
  scrollHint: 1.4,
};

const COLOR_CYCLE: ColorMode[] = [
  "mono",
  "source",
  "matrix",
  "amber",
  "neon",
  "ice",
];

export default function Hero() {
  const ref = useRef<HTMLElement>(null);
  const [stage, setStage] = useState(0);
  const [density, setDensity] = useState(100);
  const [colorIndex, setColorIndex] = useState(0);
  const [showControls, setShowControls] = useState(false);

  const colorMode = COLOR_CYCLE[colorIndex % COLOR_CYCLE.length]!;

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const y = useTransform(scrollYProgress, [0, 0.8], [0, -40]);

  const onVideoReady = useCallback(() => {
    setShowControls(true);
    const timers: NodeJS.Timeout[] = [];
    timers.push(setTimeout(() => setStage(1), TIMING.nameReveal * 1000));
    timers.push(setTimeout(() => setStage(2), TIMING.roleReveal * 1000));
    timers.push(setTimeout(() => setStage(3), TIMING.scrollHint * 1000));
    return () => timers.forEach(clearTimeout);
  }, []);

  const onLoop = useCallback(() => {
    setColorIndex((prev) => prev + 1);
  }, []);

  useEffect(() => {
    const fallback = setTimeout(() => {
      setStage((prev) => (prev === 0 ? 1 : prev));
    }, 3000);
    return () => clearTimeout(fallback);
  }, []);

  useEffect(() => {
    if (stage !== 1) return;
    const timers: NodeJS.Timeout[] = [];
    timers.push(
      setTimeout(
        () => setStage(2),
        (TIMING.roleReveal - TIMING.nameReveal) * 1000,
      ),
    );
    timers.push(
      setTimeout(
        () => setStage(3),
        (TIMING.scrollHint - TIMING.nameReveal) * 1000,
      ),
    );
    return () => timers.forEach(clearTimeout);
  }, [stage]);

  return (
    <motion.section
      ref={ref}
      style={{ opacity, y }}
      className="h-screen pt-14 flex flex-col items-center justify-center overflow-hidden px-6 md:px-8 relative"
    >
      {/* ASCII video */}
      <div className="max-h-[60vh] flex items-center justify-center">
        <AsciiVideoHero
          src="/portfolio_video.mp4"
          fps={12}
          density={density}
          colorMode={colorMode}
          onReady={onVideoReady}
          onLoop={onLoop}
        />
      </div>

      {/* Density slider — between video and name */}
      {showControls && (
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.4 }}
          className="mt-5 group"
        >
          <div className="relative px-4 py-2 rounded-full bg-surface border border-border hover:border-text-muted/30 transition-all duration-200 cursor-pointer shadow-[0_1px_3px_rgba(0,0,0,0.04)] hover:shadow-[0_2px_8px_rgba(0,0,0,0.06)] active:scale-[0.98]">
            <input
              type="range"
              min={40}
              max={200}
              value={density}
              onChange={(e) => setDensity(Number(e.target.value))}
              className="w-28 h-[3px] appearance-none bg-border rounded-full cursor-pointer
                [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:w-3
                [&::-webkit-slider-thumb]:h-3 [&::-webkit-slider-thumb]:rounded-full
                [&::-webkit-slider-thumb]:bg-text-primary [&::-webkit-slider-thumb]:border-0
                [&::-webkit-slider-thumb]:shadow-[0_0_0_3px_rgba(0,0,0,0.06)]
                [&::-webkit-slider-thumb]:transition-shadow [&::-webkit-slider-thumb]:duration-150
                [&::-webkit-slider-thumb]:hover:shadow-[0_0_0_5px_rgba(0,0,0,0.1)]
                [&::-webkit-slider-thumb]:active:shadow-[0_0_0_6px_rgba(0,0,0,0.12)]"
            />
          </div>
        </motion.div>
      )}

      {/* Name + title */}
      <div className="pt-6 md:pt-8 text-center shrink-0">
        {stage >= 1 ? (
          <TextReveal
            text="Lyn Jung"
            as="h1"
            charLevel
            className="text-5xl md:text-7xl font-black tracking-tight text-text-primary justify-center uppercase leading-none [text-shadow:0_2px_8px_oklch(88%_0.05_355/0.7)]"
          />
        ) : (
          <h1 className="text-5xl md:text-7xl font-black tracking-tight text-text-primary uppercase leading-none opacity-0">
            Lyn Jung
          </h1>
        )}

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={
            stage >= 2 ? { opacity: 1, y: 0 } : { opacity: 0, y: 16 }
          }
          transition={SPRING.smooth}
          className="mt-3 text-sm md:text-base text-text-secondary font-light"
        >
          Design &amp; Frontend Engineer
        </motion.p>
      </div>

    </motion.section>
  );
}
