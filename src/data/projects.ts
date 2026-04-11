export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Project One",
    description:
      "A brief description of this project and what it does. Replace with your actual project details.",
    tags: ["React", "TypeScript", "Tailwind"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Two",
    description:
      "Another project showcase. Describe the problem it solves and the technologies used.",
    tags: ["Next.js", "Framer Motion", "Design"],
    liveUrl: "#",
    githubUrl: "#",
  },
  {
    title: "Project Three",
    description:
      "A third project to round out the grid. Add as many as you need.",
    tags: ["Node.js", "GraphQL", "UI/UX"],
    liveUrl: "#",
  },
];
