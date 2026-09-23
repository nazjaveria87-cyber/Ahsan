export function PageHeader({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="surface-navy relative overflow-hidden pt-32 pb-16 lg:pt-40 lg:pb-20">
      <div className="grid-glow pointer-events-none absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
        <p className="text-xs font-semibold tracking-[0.2em] text-accent uppercase">{eyebrow}</p>
        <h1 className="mt-3 max-w-3xl font-display text-4xl leading-tight font-extrabold text-navy-foreground sm:text-5xl">
          {title}
        </h1>
        <p className="mt-5 max-w-2xl text-base leading-relaxed text-navy-foreground/70">
          {description}
        </p>
      </div>
    </section>
  );
}
