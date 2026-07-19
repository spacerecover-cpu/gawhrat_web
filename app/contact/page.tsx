import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { images } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact Us | Request a Quote",
  description: `Request a quote for speed limiters, IVMS or fleet management in Oman. Call ${site.phone}, WhatsApp us or send the form and we reply within one working day.`,
};

export default function ContactPage() {
  return (
    <>
      <PageHeader
        compact
        image={images.government}
        tone="cyan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        title="Let's get your fleet sorted"
        lede="Quotes, rollouts, audits or a live demo with your own routes. One working day to a reply, usually much less."
      />
      <ContactSection />
      <JsonLd data={localBusinessSchema} />
    </>
  );
}
