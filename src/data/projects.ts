export interface Project {
  title: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Studyflow",
    description:
      "A full-stack study planning app to organize subjects, schedule sessions, track progress with analytics, and stay focused with a built-in Pomodoro timer.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    liveUrl: "https://studyfloow.vercel.app",
    githubUrl: "https://github.com/lynjung/studyflow",
  },
];
