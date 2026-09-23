import { PROJECTS } from "./data";

export function Portfolio({ heading = true }: { heading?: boolean }) {
  return (
    <section className="surface-navy relative overflow-hidden py-20 lg:py-28">
      <div className="grid-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {heading && (
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
              Portfolio &amp; case studies
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-foreground sm:text-4xl">
              Campaigns, strategy and the numbers behind them
            </h2>
          </div>
        )}

        <div className="mt-12 space-y-8">
          {PROJECTS.map((project, index) => (
            <article
              key={project.name}
              className="glass-panel overflow-hidden rounded-[1.75rem] transition-colors duration-300 hover:border-accent/40"
            >
              <div
                className={`grid gap-0 lg:grid-cols-2 ${index % 2 === 1 ? "lg:[&>figure]:order-2" : ""}`}
              >
                <figure className="relative min-h-64 overflow-hidden">
                  <img
                    src={project.image}
                    alt={`${project.name} campaign creative`}
                    width={1200}
                    height={800}
                    loading="lazy"
                    className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                </figure>

                <div className="p-7 lg:p-10">
                  <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                    {project.industry}
                  </p>
                  <h3 className="mt-2 font-display text-2xl font-bold text-navy-foreground">
                    {project.name}
                  </h3>

                  <div className="mt-5 space-y-4 text-sm text-navy-foreground/70">
                    <p>
                      <span className="font-semibold text-navy-foreground">Business goal — </span>
                      {project.goal}
                    </p>
                    <p>
                      <span className="font-semibold text-navy-foreground">Strategy — </span>
                      {project.strategy}
                    </p>
                    <p>
                      <span className="font-semibold text-navy-foreground">
                        Creative approach —{" "}
                      </span>
                      {project.creative}
                    </p>
                  </div>

                  <ul className="mt-5 flex flex-wrap gap-2">
                    {project.platforms.map((platform) => (
                      <li
                        key={platform}
                        className="rounded-full border border-white/15 px-3 py-1 text-xs font-medium text-navy-foreground/80"
                      >
                        {platform}
                      </li>
                    ))}
                  </ul>

                  <dl className="mt-6 grid grid-cols-3 gap-3">
                    {project.results.map((result) => (
                      <div key={result.label} className="rounded-xl bg-white/5 p-3 text-center">
                        <dt className="sr-only">{result.label}</dt>
                        <dd className="font-display text-lg font-bold text-accent">
                          {result.value}
                        </dd>
                        <p className="mt-1 text-[0.7rem] text-navy-foreground/60">{result.label}</p>
                      </div>
                    ))}
                  </dl>

                  <div className="mt-6 border-t border-white/10 pt-5 text-sm text-navy-foreground/70">
                    <p>
                      <span className="font-semibold text-navy-foreground">Key learnings — </span>
                      {project.learnings}
                    </p>
                    <p className="mt-3 italic">{project.summary}</p>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
