export interface Project {
  title: string;
  description: string;
  tags: string[];
  image?: string;
  liveUrl?: string;
  githubUrl?: string;
  caseStudyUrl?: string;
}

export const projects: Project[] = [
  {
    title: "GT Movies Store",
    image: "/projects/gt-movies-store.png",
    description:
      "A full-stack movie store built with Django where users can browse and search movies, manage a shopping cart, purchase titles, track orders, and create, edit, delete, and report movie reviews.",
    tags: ["Django", "Python", "SQLite", "Bootstrap"],
    liveUrl: "https://lynjung0804.pythonanywhere.com/",
    githubUrl: "https://github.com/lynjung/moviesstore",
    caseStudyUrl: "/projects/gt-movies-store",
  },
  {
    title: "Mount",
    image: "/projects/mountmoney.png",
    description:
      "A mobile-first finance app for international students managing accounts in both KRW and USD. Features live exchange rate conversion, an interactive monthly calendar, customizable account theming, and AI-powered budget recommendations via Google Gemini.",
    tags: ["React", "Vite", "Gemini API", "PWA"],
    liveUrl: "https://mountmoney.vercel.app",
    githubUrl: "https://github.com/lynjung/mount",
  },
  {
    title: "Studyflow",
    image: "/projects/studyflow.png",
    description:
      "A full-stack study planning app to organize subjects, schedule sessions, track progress with analytics, and stay focused with a built-in Pomodoro timer.",
    tags: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "Tailwind"],
    liveUrl: "https://studyfloow.vercel.app",
    githubUrl: "https://github.com/lynjung/studyflow",
  },
];
