export default function Home() {
  return (
    <section className="py-10 sm:py-16">
      <div className="mx-auto max-w-3xl text-center space-y-6">
        <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
          Alejandro Casillas
        </h1>
        <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-light max-w-none text-center">
          Computer Science Major at Virginia Tech looking for full-time Software Engineering Roles.
        </p>

        <div className="flex flex-wrap justify-center gap-3">
          <a
            className="btn btn-primary"
            href="https://github.com/casillasalejandro22"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
          <a
            className="btn btn-primary"
            href="https://www.linkedin.com/in/casillasalejandro"
            target="_blank"
            rel="noopener noreferrer"
          >
            LinkedIn
          </a>
          <a className="btn btn-primary" href="/resume.pdf">
            Resume (PDF)
          </a>
        </div>

        <div className="grid sm:grid-cols-3 gap-4 pt-6">
          <div className="card">
            <p className="text-sm opacity-80">Interned at Cvent (Summer ’25), building geospatial matching diagnostics and “Match Reasons.”</p>
          </div>
          <div className="card">
            <p className="text-sm opacity-80">Projects in ML + systems: J.O.K.R. trading, ML Algos repo, Flappy Bird game.</p>
          </div>
          <div className="card">
            <p className="text-sm opacity-80">Comfortable with Python, Java, C, TypeScript; Postgres/PostGIS; Linux tooling.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
