import { Briefcase, Check, Gauge, Target, TrendingUp, type LucideIcon } from "lucide-react";
import { EXPERTISE_DASHBOARD, TIMELINE } from "./data";

const ICONS: Record<string, LucideIcon> = { Target, Gauge, TrendingUp };

export function Experience() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1.05fr_0.95fr] lg:items-start">
          <div>
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Professional timeline
            </p>
            <ol className="mt-8 space-y-6 border-l border-border pl-8">
              {TIMELINE.map((item, index) => (
                <li key={item.period} className="relative">
                  <span
                    className="absolute top-1 -left-[2.6rem] inline-flex size-8 items-center justify-center rounded-full bg-gradient-brand text-primary-foreground ring-4 ring-background"
                    aria-hidden="true"
                  >
                    <Briefcase className="size-4" />
                  </span>
                  <div className="lift-on-hover rounded-2xl border border-border bg-card p-6 shadow-[var(--shadow-card)]">
                    <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                      {item.period}
                      {index === 0 && (
                        <span className="ml-2 rounded-full bg-accent/15 px-2 py-0.5 text-[0.65rem] text-accent-foreground">
                          Current
                        </span>
                      )}
                    </p>
                    <h3 className="mt-2 font-display text-lg font-semibold">{item.role}</h3>
                    <p className="text-sm font-medium text-muted-foreground">{item.org}</p>
                    <ul className="mt-4 grid gap-2 sm:grid-cols-2">
                      {item.points.map((point) => (
                        <li
                          key={point}
                          className="flex items-center gap-2 text-sm text-muted-foreground"
                        >
                          <Check className="size-4 shrink-0 text-primary" />
                          {point}
                        </li>
                      ))}
                    </ul>
                  </div>
                </li>
              ))}
            </ol>
          </div>

          <div className="surface-navy relative overflow-hidden rounded-[1.75rem] p-7 lg:sticky lg:top-28 lg:p-8">
            <div className="grid-glow pointer-events-none absolute inset-0 opacity-50" aria-hidden="true" />
            <div className="relative">
              <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">
                Marketing expertise dashboard
              </p>
              <h2 className="mt-2 font-display text-xl font-semibold text-navy-foreground">
                How the work is organised
              </h2>

              <div className="mt-6 space-y-4">
                {EXPERTISE_DASHBOARD.map((card) => {
                  const Icon = ICONS[card.icon] ?? Target;
                  return (
                    <article
                      key={card.title}
                      className="glass-panel rounded-2xl p-5 transition-colors hover:border-accent/40"
                    >
                      <div className="flex items-center gap-3">
                        <span className="inline-flex size-10 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground">
                          <Icon className="size-5" />
                        </span>
                        <h3 className="font-display text-base font-semibold text-navy-foreground">
                          {card.title}
                        </h3>
                      </div>
                      <ul className="mt-4 flex flex-wrap gap-2">
                        {card.items.map((item) => (
                          <li
                            key={item}
                            className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-xs font-medium text-navy-foreground/80"
                          >
                            {item}
                          </li>
                        ))}
                      </ul>
                    </article>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
