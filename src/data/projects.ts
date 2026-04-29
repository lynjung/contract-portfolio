export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
}

export const projects: Project[] = [
  {
    title: "Studyflow",
    image: "/projects/studyflow.png",
    description:
      "A full-stack study planning app to organize subjects, schedule sessions, track progress with analytics, and stay focused with a built-in Pomodoro timer.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    liveUrl: "https://studyfloow.vercel.app",
    githubUrl: "https://github.com/lynjung/studyflow",
  },
  {
    title: "Mount Money",
    image: "/projects/mountmoney.png",
    description:
      "A mobile-first finance app for international students managing accounts in both KRW and USD. Features live exchange rate conversion, an interactive monthly calendar, customizable account theming, and AI-powered budget recommendations via Google Gemini.",
    tags: ["React", "Vite", "Gemini API", "PWA"],
    liveUrl: "https://mountmoney.vercel.app",
    githubUrl: "https://github.com/lynjung/mount",
  },
];
