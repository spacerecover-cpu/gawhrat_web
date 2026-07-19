import { Phone } from "lucide-react";
import { Container } from "./Container";
import { Reveal } from "./Reveal";
import { Button } from "./Button";
import { site } from "@/lib/site";

export function CtaBand({
  title = "Ready to make your fleet compliant?",
  lede = "Tell us what you run and where. We will come back with a clear plan and price.",
}: {
  title?: string;
  lede?: string;
}) {
  return (
    <section className="bg-white py-24 md:py-28">
      <Container>
        <Reveal amount={0.3}>
          <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 px-8 py-14 text-white shadow-lift md:px-16 md:py-16">
            <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
            <div
              className="pointer-events-none absolute -right-24 -top-32 size-80 rounded-full bg-glow/12 blur-[100px]"
              aria-hidden="true"
            />
            <div className="relative flex flex-col items-start justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-xl">
                <h2 className="font-display text-3xl font-semibold tracking-tight text-balance md:text-4xl">
                  {title}
                </h2>
                <p className="mt-4 text-[15px] leading-relaxed text-white/65">{lede}</p>
              </div>
              <div className="flex flex-wrap gap-4">
                <Button href="/contact" variant="inverse">
                  Request a Quote
                </Button>
                <Button href={`tel:${site.phoneHref}`} variant="ghost-dark" icon={Phone}>
                  {site.phone}
                </Button>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
