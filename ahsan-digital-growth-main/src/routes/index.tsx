import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import caseStudiesVisual from "@/assets/case-studies-visual.png";
import { Hero } from "@/components/site/Hero";
import { Services } from "@/components/site/Services";
import { Skills } from "@/components/site/Skills";
import { CtaBand } from "@/components/site/CtaBand";

const TITLE = "Muhammad Ahsan — Digital Marketing Strategist & Paid Ads Specialist";
const DESCRIPTION =
  "Muhammad Ahsan helps businesses grow through data-driven digital marketing, Meta and Google paid ads, lead generation and performance strategy.";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESCRIPTION },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESCRIPTION },
      { property: "og:type", content: "profile" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESCRIPTION },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          name: "Muhammad Ahsan",
          jobTitle: "Digital Marketing Strategist & Paid Ads Specialist",
          email: "mailto:a751ahsan@gmail.com",
          telephone: "+92 324 6858170",
          description: DESCRIPTION,
          knowsAbout: [
            "Meta Ads",
            "Google Ads",
            "TikTok Ads",
            "LinkedIn Ads",
            "Lead Generation",
            "SEO",
          ],
        }),
      },
    ],
  }),
});

function Index() {
  return (
    <>
      <Hero />
      <Services />
      <section className="bg-background py-20 lg:py-28">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold tracking-[0.2em] text-primary uppercase">
                Selected work
              </p>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">
                Case studies with the strategy and the numbers
              </h2>
              <p className="mt-4 text-base text-muted-foreground">
                Lead generation, e-commerce scaling and B2B demand programs — each documented from
                goal to result.
              </p>
              <Link
                to="/portfolio"
                className="mt-6 inline-flex items-center gap-2 rounded-full bg-gradient-brand px-6 py-3 text-sm font-semibold text-primary-foreground shadow-[var(--shadow-elegant)] transition-transform hover:scale-[1.03]"
              >
                View portfolio <ArrowRight className="size-4" />
              </Link>
            </div>
            <div className="relative">
              <img
                src={caseStudiesVisual}
                alt="Digital marketing analytics dashboard showing campaign performance metrics and growth charts"
                width={1024}
                height={768}
                loading="lazy"
                className="w-full rounded-2xl shadow-[var(--shadow-card)] transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          </div>
        </div>
      </section>
      <Skills />
      <CtaBand />
    </>
  );
}
