import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Frequently Asked Questions",
  description:
    "Answers on speed limiter rules and certificates in Oman, PDO and OPAL IVMS requirements, GPS tracking, data ownership and support.",
};

const categories = ["General", "Speed Limiters", "IVMS", "Platform"];

export default function FaqPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "FAQ", href: "/faq" },
        ]}
        title="Straight answers, before you ask"
        lede="Everything fleets ask us about regulations, certificates, IVMS specifications and the platform. If your question is missing, it is one message away."
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {categories.map((cat, i) => (
              <Reveal key={cat} delay={i * 0.05} amount={0.1}>
                <h2 className="mb-6 font-display text-2xl font-semibold tracking-tight text-ink">
                  {cat}
                </h2>
                <Accordion items={faqs.filter((f) => f.category === cat)} />
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <CtaBand
        title="Still have a question?"
        lede="Call, WhatsApp or write to us. A real person from the Muscat team answers, Sunday to Thursday."
      />
      <JsonLd data={faqSchema(faqs)} />
    </>
  );
}
