type Project = {
  title: string;
  blurb: string;
  tech: string[];
  href?: string;  // live/demo
  repo?: string;  // github
};

const projects: Project[] = [
  {
    title: "Sheryl Trading System (J.O.K.R.)",
    blurb:
      "Portfolio optimization with K‑Means reallocation; Flask dashboard + AWS DynamoDB; integrated with Alpaca API and Dockerized for EC2.",
    tech: ["Python", "scikit‑learn", "Flask", "AWS DynamoDB", "Alpaca", "Docker"],
    repo: "https://github.com/samparsa9/Sheryl",
  },
  {
    title: "ML Algorithms Scratchpad",
    blurb:
      "Learning repo implementing core ML techniques from scratch to build intuition and control over strategies.",
    tech: ["Python", "NumPy", "Pandas"],
    repo: "https://github.com/samparsa9/ML-Algos",
  },
  {
    title: "Flappy Bird",
    blurb:
      "Arcade clone focused on game loop basics, input handling, and collision detection.",
    tech: ["JavaScript", "HTML5 Canvas", "CSS"],
    repo: "https://github.com/casillasalejandro22/Flappy-Bird",
  },
];

export default function ProjectsPage() {
  return (
    <section className="py-6 sm:py-10">
      <h1 className="text-3xl font-bold mb-6">Projects</h1>

      <div className="grid gap-5 sm:grid-cols-2">
        {projects.map((p) => (
          <article key={p.title} className="card">
            <h2 className="text-xl font-semibold">{p.title}</h2>
            <p className="mt-2 text-sm opacity-80">{p.blurb}</p>

            <ul className="mt-3 flex flex-wrap gap-2 text-xs">
              {p.tech.map((t) => (
                <li key={t} className="rounded-full border px-2 py-1 bg-white/70 dark:bg-white/10">
                  {t}
                </li>
              ))}
            </ul>

            <div className="mt-4 flex gap-3">
              {p.href && (
                <a
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  Live
                </a>
              )}
              {p.repo && (
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-primary"
                >
                  GitHub
                </a>
              )}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
