import { Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Facebook,
  Linkedin,
  Magnet,
  Music2,
  Search,
  Share2,
  ShoppingBag,
  Target,
  TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { SERVICES } from "./data";

const ICONS: Record<string, LucideIcon> = {
  Facebook,
  Search,
  Music2,
  Linkedin,
  Share2,
  Magnet,
  TrendingUp,
  ShoppingBag,
  Target,
};

export function Services({ heading = true }: { heading?: boolean }) {
  return (
    <section className="surface-navy relative overflow-hidden py-20 lg:py-28">
      <div className="grid-glow pointer-events-none absolute inset-0 opacity-60" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        {heading && (
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">Services</p>
            <h2 className="mt-3 font-display text-3xl font-bold text-navy-foreground sm:text-4xl">
              What I do for growing businesses
            </h2>
            <p className="mt-4 text-base text-navy-foreground/70">
              Full-funnel paid media and marketing strategy, run end to end — from research and
              setup to creative testing, optimization and clear reporting.
            </p>
          </div>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {SERVICES.map((service) => {
            const Icon = ICONS[service.icon] ?? Target;
            return (
              <article
                key={service.title}
                className="lift-on-hover glass-panel group flex flex-col rounded-2xl p-6 hover:border-accent/40"
              >
                <span className="inline-flex size-12 items-center justify-center rounded-xl bg-gradient-brand text-primary-foreground transition-transform duration-300 group-hover:scale-110">
                  <Icon className="size-5" />
                </span>
                <h3 className="mt-5 font-display text-lg font-semibold text-navy-foreground">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-navy-foreground/65">
                  {service.description}
                </p>
                <p className="mt-4 rounded-xl bg-white/5 p-3 text-sm text-accent">
                  {service.benefit}
                </p>
                <Link
                  to="/contact"
                  className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-navy-foreground transition-colors hover:text-accent"
                >
                  Start a project <ArrowRight className="size-4" />
                </Link>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
