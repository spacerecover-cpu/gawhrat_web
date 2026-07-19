import type { Metadata } from "next";
import Link from "next/link";
import { pageMeta } from "@/lib/seo";
import { ArrowUpRight } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { faqs, heroImages } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Frequently Asked Questions",
  description:
    "Answers on speed limiter rules and certificates in Oman, PDO and OPAL IVMS requirements, GPS tracking, data ownership and support.",
  path: "/faq",
});

const categories = ["General", "Speed Limiters", "IVMS", "Platform"];

/* Deeper reference pages, surfaced under the matching FAQ category. */
const categoryGuides: Record<string, { label: string; href: string }> = {
  "Speed Limiters": {
    label: "Full guide: speed limiter regulations in Oman",
    href: "/services/speed-limiter/oman-regulations",
  },
  IVMS: {
    label: "Full guide: PDO & OPAL IVMS requirements",
    href: "/services/ivms/pdo-opal-requirements",
  },
};

export default function FaqPage() {
  return (
    <>
      <PageHeader
        image={heroImages.faq}
        tone="teal"
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
                {categoryGuides[cat] && (
                  <Link
                    href={categoryGuides[cat].href}
                    className="group mt-5 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-700 underline-offset-4 hover:underline"
                  >
                    {categoryGuides[cat].label}
                    <ArrowUpRight
                      className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                      strokeWidth={2}
                    />
                  </Link>
                )}
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
