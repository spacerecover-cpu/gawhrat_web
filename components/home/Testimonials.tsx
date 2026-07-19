import { Star } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { testimonials } from "@/lib/data";
import { cn } from "@/lib/utils";

function Stars({ count }: { count: number }) {
  return (
    <div className="flex gap-1" aria-label={`${count} out of 5 stars`}>
      {Array.from({ length: count }).map((_, i) => (
        <Star key={i} className="size-4 fill-amber-400 text-amber-400" strokeWidth={0} />
      ))}
    </div>
  );
}

function Avatar({ initials, dark }: { initials: string; dark?: boolean }) {
  return (
    <span
      className={cn(
        "flex size-11 shrink-0 items-center justify-center rounded-full font-display text-[13px] font-semibold",
        dark ? "bg-white/10 text-accent-300 ring-1 ring-white/15" : "bg-navy-950 text-accent-300"
      )}
    >
      {initials}
    </span>
  );
}

export function Testimonials() {
  const [featured, ...rest] = testimonials;

  return (
    <section className="bg-white py-24 md:py-32">
      <Container>
        <SectionHeading
          title="Fleets that stopped worrying about compliance"
          lede="Sample reviews shown for layout. Final quotes will come from GAWHRAT's clients."
        />

        <div className="mt-14 grid gap-5 lg:grid-cols-[1.35fr_1fr]">
          {/* Featured quote */}
          <Reveal amount={0.2}>
            <figure className="relative flex h-full flex-col justify-between overflow-hidden rounded-3xl bg-navy-950 p-9 text-white shadow-lift md:p-12">
              <div
                className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-glow/10 blur-[90px]"
                aria-hidden="true"
              />
              <div className="relative">
                <Stars count={featured.stars} />
                <blockquote className="mt-6 font-display text-xl font-medium leading-snug tracking-tight md:text-2xl">
                  "{featured.quote}"
                </blockquote>
              </div>
              <figcaption className="relative mt-9 flex items-center gap-4">
                <Avatar initials={featured.initials} dark />
                <div>
                  <p className="text-[14.5px] font-semibold">{featured.name}</p>
                  <p className="text-[12.5px] text-white/55">{featured.role}</p>
                </div>
              </figcaption>
            </figure>
          </Reveal>

          {/* Stacked quotes */}
          <div className="flex flex-col gap-5">
            {rest.map((t, i) => (
              <Reveal key={t.name} delay={0.08 + i * 0.08} amount={0.2} className="h-full">
                <figure className="flex h-full flex-col justify-between rounded-3xl bg-mist p-8 ring-1 ring-line">
                  <div>
                    <Stars count={t.stars} />
                    <blockquote className="mt-4 text-[14.5px] leading-relaxed text-ink">
                      "{t.quote}"
                    </blockquote>
                  </div>
                  <figcaption className="mt-6 flex items-center gap-3.5">
                    <Avatar initials={t.initials} />
                    <div>
                      <p className="text-[13.5px] font-semibold text-ink">{t.name}</p>
                      <p className="text-[12px] text-steel">{t.role}</p>
                    </div>
                  </figcaption>
                </figure>
              </Reveal>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
