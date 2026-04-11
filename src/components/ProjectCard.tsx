"use client";

import { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useMotionTemplate } from "framer-motion";
import type { Project } from "@/data/projects";
import { SPRING } from "@/lib/animation";

const TILT = {
  maxDeg: 4,
  spring: { stiffness: 300, damping: 20 },
};

const SPOTLIGHT = {
  size: 300,
  opacity: 0.06,
};

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({
  project,
  featured = false,
}: ProjectCardProps) {
  // Magnetic hover — only for grid cards, not featured
  const cardRef = useRef<HTMLDivElement>(null);
  const [hovered, setHovered] = useState(false);

  const rawRotateX = useMotionValue(0);
  const rawRotateY = useMotionValue(0);
  const spotlightX = useMotionValue(50);
  const spotlightY = useMotionValue(50);

  const rotateX = useSpring(rawRotateX, TILT.spring);
  const rotateY = useSpring(rawRotateY, TILT.spring);

  const spotlightBg = useMotionTemplate`radial-gradient(${SPOTLIGHT.size}px circle at ${spotlightX}% ${spotlightY}%, rgba(255,255,255,${SPOTLIGHT.opacity}), transparent)`;

  function handleMouseMove(e: React.MouseEvent) {
    if (featured) return;
    const card = cardRef.current;
    if (!card) return;

    const rect = card.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width;
    const y = (e.clientY - rect.top) / rect.height;

    rawRotateX.set(-(y * 2 - 1) * TILT.maxDeg);
    rawRotateY.set((x * 2 - 1) * TILT.maxDeg);
    spotlightX.set(x * 100);
    spotlightY.set(y * 100);
  }

  function handleMouseLeave() {
    rawRotateX.set(0);
    rawRotateY.set(0);
    setHovered(false);
  }

  /* ── Featured: editorial row layout, not a card ── */
  if (featured) {
    return (
      <div className="border-b border-border pb-12">
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] gap-8 md:gap-16 items-start">
          <div>
            <h3 className="text-2xl md:text-3xl font-normal tracking-tight mb-3">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm leading-relaxed mb-4 max-w-sm">
              {project.description}
            </p>
            <div className="flex items-center gap-4">
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-primary hover:text-accent transition-colors"
                >
                  View Project &rarr;
                </a>
              )}
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-text-muted hover:text-text-primary transition-colors"
                >
                  Source
                </a>
              )}
            </div>
          </div>
          <div className="text-sm font-mono text-text-muted">
            {project.tags.join(", ")}
          </div>
        </div>
      </div>
    );
  }

  /* ── Grid card: magnetic hover, softer rounding ── */
  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformPerspective: 800,
        boxShadow: hovered
          ? "var(--shadow-card-hover)"
          : "var(--shadow-card)",
      }}
      transition={SPRING.smooth}
      className="group relative rounded-lg bg-background overflow-hidden"
    >
      {/* Spotlight overlay */}
      <motion.div
        className="pointer-events-none absolute inset-0 z-10 rounded-lg"
        style={{ background: spotlightBg }}
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.2 }}
      />

      {/* Thumbnail */}
      <div className="bg-surface flex items-center justify-center text-text-muted text-xs aspect-[16/10] rounded-t-lg">
        Thumbnail
      </div>

      {/* Content */}
      <div className="p-5">
        <h3 className="font-medium tracking-tight mb-1.5 text-base">
          {project.title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed mb-4">
          {project.description}
        </p>

        <p className="text-[11px] font-mono text-text-muted mb-4">
          {project.tags.join(", ")}
        </p>

        <div className="flex items-center gap-4">
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs font-medium text-text-primary hover:text-accent transition-colors"
            >
              View Project &rarr;
            </a>
          )}
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xs text-text-muted hover:text-text-primary transition-colors"
            >
              Source
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
