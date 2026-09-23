import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function CtaBand({
  title = "Ready to grow your business?",
  text = "Tell me your goals and I'll come back with an honest view of what paid media can do for you.",
}: {
  title?: string;
  text?: string;
}) {
  return (
    <section className="bg-secondary/60 px-5 py-16 lg:px-8 lg:py-20">
      <div className="mx-auto flex max-w-7xl flex-col items-start gap-6 rounded-[1.75rem] border border-border bg-card p-8 shadow-[var(--shadow-card)] lg:flex-row lg:items-center lg:justify-between lg:p-10">
        <div>
          <h2 className="font-display text-2xl font-bold sm:text-3xl">{title}</h2>
          <p className="mt-2 max-w-xl text-sm text-muted-foreground">{text}</p>
        </div>
        <Link
          to="/contact"
          className="inline-flex shrink-0 items-center gap-2 rounded-full bg-gradient-brand px-7 py-3.5 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
        >
          Book Consultation <ArrowRight className="size-4" />
        </Link>
      </div>
    </section>
  );
}
