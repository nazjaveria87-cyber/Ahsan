import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Portfolio } from "@/components/site/Portfolio";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/portfolio")({
  head: () =>
    pageMeta(
      "Portfolio & Case Studies — Muhammad Ahsan",
      "Sample case studies showing the goal, strategy, platforms, creative approach and results behind each marketing campaign.",
    ),
  component: PortfolioPage,
});

function PortfolioPage() {
  return (
    <>
      <PageHeader
        eyebrow="Portfolio & case studies"
        title="Campaigns, strategy and the numbers behind them"
        description="How each project was planned, executed and measured. Sample projects shown — replaceable with live client work."
      />
      <Portfolio heading={false} />
      <CtaBand />
    </>
  );
}
