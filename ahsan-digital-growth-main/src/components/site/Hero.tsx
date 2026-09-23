import { Link } from "@tanstack/react-router";
import { ArrowRight, ArrowUpRight, MousePointerClick, TrendingUp, Users } from "lucide-react";
import profile from "@/assets/profile.jpg";
import { Counter } from "./Counter";

const chartPoints = [18, 26, 22, 38, 34, 48, 44, 62, 58, 76, 82, 96];

function GrowthChart() {
  const max = Math.max(...chartPoints);
  const width = 300;
  const height = 110;
  const step = width / (chartPoints.length - 1);
  const coords = chartPoints.map((p, i) => [i * step, height - (p / max) * (height - 12)] as const);
  const line = coords.map(([x, y], i) => `${i === 0 ? "M" : "L"}${x.toFixed(1)},${y.toFixed(1)}`).join(" ");
  const area = `${line} L${width},${height} L0,${height} Z`;

  return (
    <div className="glass-panel rounded-2xl p-5">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-xs font-medium tracking-wide text-navy-foreground/60 uppercase">
            Campaign growth
          </p>
          <p className="mt-1 font-display text-2xl font-bold text-navy-foreground">+186%</p>
        </div>
        <span className="inline-flex items-center gap-1 rounded-full bg-accent/15 px-2.5 py-1 text-xs font-semibold text-accent">
          <TrendingUp className="size-3.5" /> 12 mo
        </span>
      </div>
      <svg
        viewBox={`0 0 ${width} ${height}`}
        className="mt-4 w-full"
        role="img"
        aria-label="Campaign growth trending upward over twelve months"
      >
        <defs>
          <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="var(--cyan)" stopOpacity="0.45" />
            <stop offset="100%" stopColor="var(--cyan)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="heroLine" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="var(--primary)" />
            <stop offset="100%" stopColor="var(--cyan)" />
          </linearGradient>
        </defs>
        <path d={area} fill="url(#heroArea)" />
        <path d={line} fill="none" stroke="url(#heroLine)" strokeWidth="3" strokeLinecap="round" />
      </svg>
    </div>
  );
}

function MetricCard({
  icon: Icon,
  label,
  value,
  delta,
}: {
  icon: typeof Users;
  label: string;
  value: string;
  delta: string;
}) {
  return (
    <div className="glass-panel rounded-2xl p-4">
      <Icon className="size-5 text-accent" />
      <p className="mt-3 font-display text-xl font-bold text-navy-foreground">{value}</p>
      <p className="text-xs text-navy-foreground/60">{label}</p>
      <p className="mt-2 text-xs font-semibold text-accent">{delta}</p>
    </div>
  );
}

export function Hero() {
  return (
    <section className="surface-navy relative overflow-hidden">
      <div className="grid-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto grid max-w-7xl gap-14 px-5 pt-32 pb-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-center lg:px-8 lg:pt-40 lg:pb-28">
        <div className="animate-rise-in">
          <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-wide text-navy-foreground/80 uppercase">
            <span className="size-1.5 rounded-full bg-accent" />
            Available for new projects
          </span>

          <h1 className="mt-6 font-display text-4xl leading-[1.08] font-extrabold text-navy-foreground sm:text-5xl lg:text-6xl">
            I Help Businesses Grow Through{" "}
            <span className="text-gradient-brand">Digital Marketing</span>
          </h1>

          <p className="mt-6 font-display text-xl font-semibold text-navy-foreground">
            Muhammad Ahsan
          </p>
          <p className="text-sm font-medium text-accent">
            Digital Marketing Strategist &amp; Paid Ads Specialist
          </p>

          <p className="mt-5 max-w-xl text-base leading-relaxed text-navy-foreground/70">
            I create and optimize data-driven digital marketing campaigns that help businesses
            generate leads, increase visibility and grow online.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              to="/portfolio"
              className="inline-flex items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
            >
              View My Work <ArrowRight className="size-4" />
            </Link>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 px-7 py-3.5 text-sm font-semibold text-navy-foreground transition-colors hover:bg-white/10"
            >
              Let&apos;s Work Together <ArrowUpRight className="size-4" />
            </Link>
          </div>

          <div className="mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8">
            <Counter to={3} suffix="+" label="Years Experience" />
            <Counter to={100} suffix="+" label="Campaigns Managed" />
            <Counter to={50} suffix="+" label="Projects Completed" />
          </div>
        </div>

        <div className="relative">
          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5">
            <img
              src={profile}
              alt="Muhammad Ahsan, Digital Marketing Strategist"
              width={1024}
              height={1280}
              className="h-full w-full object-cover"
            />
            <div
              className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-navy to-transparent"
              aria-hidden="true"
            />
          </div>

          <div className="mt-4 grid gap-4 sm:grid-cols-2 lg:absolute lg:-right-4 lg:-bottom-10 lg:mt-0 lg:w-[22rem] lg:grid-cols-1">
            <div className="animate-float-soft">
              <GrowthChart />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <MetricCard icon={Users} label="Leads generated" value="12.4k" delta="+38% MoM" />
              <MetricCard
                icon={MousePointerClick}
                label="Avg. click rate"
                value="4.7%"
                delta="+1.9 pts"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
