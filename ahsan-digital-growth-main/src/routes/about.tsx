import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { About } from "@/components/site/About";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/about")({
  head: () =>
    pageMeta(
      "About Muhammad Ahsan — Digital Marketing Strategist",
      "Muhammad Ahsan helps businesses scale through performance marketing, data-driven advertising campaigns and quality lead generation.",
    ),
  component: AboutPage,
});

function AboutPage() {
  return (
    <>
      <PageHeader
        eyebrow="About"
        title="Performance marketing built on strategy, not guesswork"
        description="A short introduction to how I work, what I care about and the results I aim for on every account."
      />
      <About />
      <CtaBand />
    </>
  );
}
