"use client";

import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";
import { projects } from "@/data/projects";
import { SPRING } from "@/lib/animation";

export default function Projects() {
  const [featured, ...rest] = projects;

  return (
    <section id="projects" className="w-full max-w-4xl mx-auto px-6 md:px-8 py-20 md:py-32">
      {/* Large editorial heading */}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={SPRING.smooth}
        className="text-3xl md:text-5xl font-light tracking-tight text-text-primary mb-16"
      >
        Work
      </motion.h2>

      {/* Featured project — editorial row, not a card */}
      {featured && (
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={SPRING.smooth}
          className="mb-12"
        >
          <ProjectCard project={featured} featured />
        </motion.div>
      )}

      {/* Remaining projects — grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        {rest.map((project, i) => (
          <motion.div
            key={project.title}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              ...SPRING.smooth,
              delay: i * 0.1,
            }}
          >
            <ProjectCard project={project} />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
