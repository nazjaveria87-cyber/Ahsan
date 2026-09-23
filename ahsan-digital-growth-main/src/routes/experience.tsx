import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Experience } from "@/components/site/Experience";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/experience")({
  head: () =>
    pageMeta(
      "Experience — Muhammad Ahsan, Paid Ads Specialist",
      "Three years managing paid advertising and digital marketing campaigns across Meta, Google, TikTok and LinkedIn.",
    ),
  component: ExperiencePage,
});

function ExperiencePage() {
  return (
    <>
      <PageHeader
        eyebrow="Experience"
        title="Three years running campaigns that have to perform"
        description="Roles, responsibilities and the areas of marketing expertise I bring to every account."
      />
      <Experience />
      <CtaBand />
    </>
  );
}
