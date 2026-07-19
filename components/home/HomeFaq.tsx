import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/ui/Accordion";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema } from "@/lib/schema";
import { homeFaqs } from "@/lib/data";

export function HomeFaq() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title="Questions fleets ask us"
              lede="Straight answers on regulations, certificates, IVMS specs and the platform."
            />
            <Reveal delay={0.1}>
              <div className="mt-8">
                <Button href="/faq" variant="ghost">
                  View all FAQs
                </Button>
              </div>
            </Reveal>
          </div>
          <Reveal amount={0.15}>
            <Accordion items={homeFaqs} />
          </Reveal>
        </div>
      </Container>
      <JsonLd data={faqSchema(homeFaqs)} />
    </section>
  );
}
