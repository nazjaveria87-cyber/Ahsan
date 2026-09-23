import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Services } from "@/components/site/Services";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/services")({
  head: () =>
    pageMeta(
      "Services — Paid Ads, SEO & Marketing Strategy | Muhammad Ahsan",
      "Meta Ads, Google Ads, TikTok Ads, LinkedIn Ads, lead generation, SEO, e-commerce marketing and marketing strategy for growing businesses.",
    ),
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <>
      <PageHeader
        eyebrow="Services"
        title="Full-funnel paid media, run end to end"
        description="From research and campaign setup to creative testing, optimization and clear reporting — each service is built around a business outcome."
      />
      <Services heading={false} />
      <CtaBand />
    </>
  );
}
