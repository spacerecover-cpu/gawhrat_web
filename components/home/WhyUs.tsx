import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { whyUs } from "@/lib/data";

export function WhyUs() {
  return (
    <section className="bg-mist py-24 md:py-32">
      <Container>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.45fr] lg:gap-20">
          <div className="lg:sticky lg:top-28 lg:self-start">
            <SectionHeading
              title="Why fleets across Oman choose GAWHRAT"
              lede="Compliance work is unforgiving: a missed certificate or a failed audit stops vehicles. We built our service around never letting that happen."
            />
            <Reveal delay={0.1}>
              <div className="mt-8">
                <Button href="/about" variant="primary">
                  More about us
                </Button>
              </div>
            </Reveal>
          </div>

          <div className="grid gap-4 sm:grid-cols-2">
            {whyUs.map((item, i) => (
              <Reveal key={item.title} delay={(i % 2) * 0.08} amount={0.3}>
                <div className="group h-full rounded-3xl bg-white p-7 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-navy-950 text-accent-300 transition-transform duration-500 group-hover:scale-105">
                    <item.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold tracking-tight text-ink">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel">{item.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
