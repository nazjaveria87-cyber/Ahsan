import { createFileRoute } from "@tanstack/react-router";
import { Contact } from "@/components/site/Contact";
import { pageMeta } from "@/components/site/seo";

export const Route = createFileRoute("/contact")({
  head: () =>
    pageMeta(
      "Contact Muhammad Ahsan — Let's Grow Your Business Together",
      "Get in touch by email, phone or WhatsApp to discuss paid advertising, lead generation and marketing strategy for your business.",
    ),
  component: ContactPage,
});

function ContactPage() {
  return (
    <div className="pt-20">
      <Contact />
    </div>
  );
}
