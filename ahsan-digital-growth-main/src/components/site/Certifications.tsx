import { ExternalLink } from "lucide-react";
import { CERTIFICATIONS } from "./data";

export function Certifications({ heading = true }: { heading?: boolean }) {
  return (
    <section className="bg-background py-20 lg:py-28">
      <div className="mx-auto max-w-7xl px-5 lg:px-8">
        {heading && (
          <div className="max-w-2xl">
            <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
              Certifications
            </p>
            <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
              Verified, platform-certified expertise
            </h2>
          </div>
        )}

        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {CERTIFICATIONS.map((cert) => (
            <article
              key={cert.title}
              className="lift-on-hover flex flex-col rounded-2xl border border-border bg-card p-5 shadow-[var(--shadow-card)]"
            >
             <div className="flex aspect-4/3 items-center justify-center overflow-hidden rounded-xl border border-border bg-secondary">
  <img
    src={cert.img}
    alt={cert.title}
    className="h-full w-full object-contain"
  />
</div>
              <h3 className="mt-5 font-display text-base font-semibold">{cert.title}</h3>
              <p className="mt-1 text-sm text-muted-foreground">
                {cert.org} · {cert.year}
              </p>
              <a
                href={cert.verifyUrl}
                className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-primary transition-colors hover:text-accent"
              >
                Verify certificate <ExternalLink className="size-3.5" />
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
