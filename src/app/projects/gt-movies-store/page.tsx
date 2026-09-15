import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";

export const metadata: Metadata = {
  title: "GT Movies Store | Lyn Jung",
  description: "A full-stack Django movie store built for coursework at Georgia Tech.",
};

const features = [
  "User registration, login, and logout",
  "Browse movie listings and view movie details",
  "Search movies by title",
  "Add movies and quantities to a shopping cart",
  "Purchase items and view previous orders",
  "Create, edit, and delete personal reviews",
  "View reviews from other users",
  "Report inappropriate reviews",
  "Django admin management for users, movies, reviews, and orders",
  "Responsive desktop/mobile interface",
];

const architecture = [
  ["Frontend", "Django Templates, HTML, CSS, Bootstrap"],
  ["Backend", "Python, Django"],
  ["Database", "SQLite, Django ORM"],
  ["Authentication", "Django Authentication"],
  ["Deployment", "PythonAnywhere"],
  ["Version Control", "Git, GitHub"],
];

const sectionHeading =
  "text-2xl md:text-3xl font-semibold tracking-tight text-accent-brown mb-6";

export default function GTMoviesStoreCaseStudy() {
  return (
    <main className="w-full max-w-4xl mx-auto px-6 md:px-8 py-10 md:py-16">
      <Link
        href="/#projects"
        className="inline-block text-sm text-text-muted hover:text-text-primary transition-colors mb-16"
      >
        &larr; Back to Projects
      </Link>

      <header className="mb-20 md:mb-28">
        <p className="text-[11px] font-mono text-text-muted uppercase tracking-widest mb-3">
          Full-Stack Django Web Application
        </p>
        <h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-accent-brown mb-5">
          GT Movies Store
        </h1>
        <p className="text-sm font-mono text-text-muted mb-6">
          Django, Python, SQLite, Bootstrap
        </p>
        <div className="flex items-center gap-5 mb-10">
          <a
            href="https://lynjung0804.pythonanywhere.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-primary hover:text-accent transition-colors"
          >
            Live Site &rarr;
          </a>
          <a
            href="https://github.com/lynjung/moviesstore"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-text-muted hover:text-text-primary transition-colors"
          >
            GitHub
          </a>
        </div>
        <div className="relative aspect-[16/10] rounded-lg overflow-hidden bg-surface shadow-card">
          <Image
            src="/projects/gt-movies-store.png"
            alt="GT Movies Store movie browsing interface"
            fill
            priority
            className="object-cover object-center"
            sizes="(max-width: 896px) 100vw, 832px"
          />
        </div>
      </header>

      <div className="space-y-20 md:space-y-28">
        <section>
          <h2 className={sectionHeading}>Overview</h2>
          <p className="max-w-2xl text-text-secondary leading-relaxed">
            GT Movies Store is a full-stack movie shopping application developed as part of my coursework at Georgia Tech. I built the application with Django and followed the project from local development through database integration, authentication, shopping functionality, reviews, and deployment.
          </p>
        </section>

        <section>
          <h2 className={sectionHeading}>Core Features</h2>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-3 max-w-3xl">
            {features.map((feature) => (
              <li key={feature} className="flex gap-3 text-sm text-text-secondary leading-relaxed border-b border-border-subtle pb-3">
                <span className="text-accent" aria-hidden="true">✦</span>
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className={sectionHeading}>Development Process</h2>
          <div className="space-y-5 max-w-2xl text-text-secondary leading-relaxed">
            <p>I developed the project incrementally while working through Django&apos;s core architecture. I began with reusable templates and static assets, then replaced hard-coded movie data with Django models and SQLite. I added authentication and connected user accounts to reviews and orders. From there, I implemented cart sessions, purchases, review management, and reporting.</p>
            <p>Much of the project involved debugging the connections between views, URLs, templates, models, and deployment configuration. I worked through issues involving Django template syntax, media paths, migrations, authentication, static files, database configuration, and deployment on PythonAnywhere.</p>
            <p>Before deployment, I tested each required user workflow, including account creation, searching, cart actions, purchases, order history, review CRUD operations, reporting, logout, and Django admin functionality.</p>
          </div>
        </section>

        <section>
          <h2 className={sectionHeading}>Technical Architecture</h2>
          <dl className="max-w-2xl border-t border-border">
            {architecture.map(([label, value]) => (
              <div key={label} className="grid grid-cols-1 sm:grid-cols-[10rem_1fr] gap-1 sm:gap-6 py-4 border-b border-border-subtle">
                <dt className="text-[11px] font-mono text-text-muted uppercase tracking-widest">{label}</dt>
                <dd className="text-sm text-text-secondary">{value}</dd>
              </div>
            ))}
          </dl>
        </section>

        <section>
          <h2 className={sectionHeading}>What I Learned</h2>
          <p className="max-w-2xl text-text-secondary leading-relaxed">
            This project gave me my first complete experience building and deploying a database-backed Django application. I became much more comfortable tracing a feature across models, views, URLs, templates, and database migrations instead of treating each file separately. I also gained practical experience debugging a deployed application rather than only running it locally.
          </p>
        </section>

      </div>

      <div className="mt-20 md:mt-28 pt-8 border-t border-border-subtle">
        <Link href="/#projects" className="text-sm text-text-primary hover:text-accent transition-colors">
          &larr; Back to Projects
        </Link>
      </div>
    </main>
  );
}
