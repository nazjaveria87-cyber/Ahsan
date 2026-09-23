import { Award, BarChart3, Rocket, Users } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { TIMELINE } from "./data";

const ACHIEVEMENTS = [
  { icon: Rocket, title: "100+ campaigns", text: "Planned, launched and optimized across four ad platforms." },
  { icon: BarChart3, title: "Data-first decisions", text: "Every budget move backed by performance reporting." },
  { icon: Users, title: "12k+ leads", text: "Delivered for service, e-commerce and B2B businesses." },
  { icon: Award, title: "Certified specialist", text: "Google, Meta and HubSpot certified practitioner." },
];

export function About() {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        <div className="grid gap-14 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
          <div className="relative">
            <div className="overflow-hidden rounded-[2rem] border border-border shadow-[var(--shadow-card)]">
              <img
                src={profile}
                alt="Portrait of Muhammad Ahsan"
                width={1024}
                height={1280}
                loading="lazy"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="absolute -right-4 -bottom-6 hidden rounded-2xl bg-gradient-brand px-6 py-5 text-primary-foreground shadow-[var(--shadow-elegant)] sm:block">
              <p className="font-display text-3xl font-bold">3+</p>
              <p className="text-xs tracking-wide uppercase opacity-90">Years in performance marketing</p>
            </div>
          </div>

          <div>
            <h2 className="font-display text-2xl font-bold sm:text-3xl">Personal introduction</h2>
            <p className="mt-5 text-base leading-relaxed text-muted-foreground">
              I am Muhammad Ahsan, a Digital Marketing Strategist helping businesses scale through
              performance marketing. I specialize in creating data-driven advertising campaigns,
              improving online visibility and generating quality leads through modern digital
              strategies.
            </p>

            <h3 className="mt-10 font-display text-xl font-semibold">Career highlights</h3>
            <div className="mt-5 grid gap-4 sm:grid-cols-2">
              {ACHIEVEMENTS.map((item) => (
                <div
                  key={item.title}
                  className="lift-on-hover rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
                >
                  <item.icon className="size-5 text-primary" />
                  <h3 className="mt-3 text-sm font-semibold">{item.title}</h3>
                  <p className="mt-1 text-sm text-muted-foreground">{item.text}</p>
                </div>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-border bg-secondary/60 p-6">
              <h3 className="font-display text-xl font-semibold">Marketing philosophy</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Marketing works when it is measured. I start with the numbers that matter to the
                business, test deliberately instead of guessing, and keep budget behind what is
                proven to work. No vanity metrics, no hidden reporting.
              </p>
            </div>

            <ol className="mt-10 space-y-6 border-l border-border pl-6">
              {TIMELINE.map((item) => (
                <li key={item.period} className="relative">
                  <span
                    className="absolute top-1.5 -left-[1.9rem] size-3 rounded-full bg-gradient-brand ring-4 ring-background"
                    aria-hidden="true"
                  />
                  <p className="text-xs font-semibold tracking-wide text-primary uppercase">
                    {item.period}
                  </p>
                  <p className="mt-1 font-semibold">
                    {item.role} — <span className="text-muted-foreground">{item.org}</span>
                  </p>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </div>
    </section>
  );
}
