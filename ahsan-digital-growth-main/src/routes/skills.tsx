import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Skills } from "@/components/site/Skills";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/skills")({
  head: () =>
    pageMeta(
      "Skills & Tools — Muhammad Ahsan",
      "Paid advertising, marketing strategy, analytics and the platform tools behind every campaign I manage.",
    ),
  component: SkillsPage,
});

function SkillsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Skills & Tools"
        title="The capabilities behind every campaign"
        description="Grouped by discipline rather than percentages — this is the work I do day to day and the platforms I do it in."
      />
      <Skills heading={false} />
      <CtaBand />
    </>
  );
}
