import { createFileRoute } from "@tanstack/react-router";
import { PageHeader } from "@/components/site/PageHeader";
import { Certifications } from "@/components/site/Certifications";
import { CtaBand } from "@/components/site/CtaBand";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/certifications")({
  head: () =>
    pageMeta(
      "Certifications — Muhammad Ahsan",
      "Google Ads, Meta Blueprint, HubSpot and Google Digital Garage certifications held by Muhammad Ahsan.",
    ),
  component: CertificationsPage,
});

function CertificationsPage() {
  return (
    <>
      <PageHeader
        eyebrow="Certifications"
        title="Verified, platform-certified expertise"
        description="Certifications from the platforms I run campaigns on, with verification links you can check."
      />
      <Certifications heading={false} />
      <CtaBand />
    </>
  );
}
