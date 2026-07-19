import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { IndustriesCarousel } from "./IndustriesCarousel";

export function Industries() {
  return (
    <section className="overflow-hidden bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Built for the fleets that keep Oman moving"
          lede="From concession roads to school runs, the requirements differ. The discipline behind them does not."
        />
        <Reveal delay={0.1} amount={0.15} className="mt-4">
          <IndustriesCarousel />
        </Reveal>
      </Container>
    </section>
  );
}
