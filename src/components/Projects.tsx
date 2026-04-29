"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { SPRING } from "@/lib/animation";

export default function Projects() {
  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
      {/* Large editorial heading */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={SPRING.smooth}
        className="mb-16"
      >
        <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">Selected Work</p>
        <h2 className="text-3xl md:text-5xl font-light tracking-tight text-text-primary">
          Projects
        </h2>
      </motion.div>

      {/* All projects — editorial rows */}
      <div className="flex flex-col gap-12">
        {projects.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ ...SPRING.smooth, delay: i * 0.08 }}
          >
            <ProjectCard project={project} featured index={i} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
