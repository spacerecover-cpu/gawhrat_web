import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { processSteps } from "@/lib/data";

export function ProcessTimeline({ dark = false }: { dark?: boolean }) {
  return (
    <section className={dark ? "bg-navy-950 py-24 text-white md:py-32" : "bg-mist py-24 md:py-32"}>
      <Container>
        <SectionHeading
          center
          dark={dark}
          eyebrow="How we work"
          title="From first call to certified fleet"
          lede="A fixed, documented path. You always know which stage every vehicle is at."
        />

        <div className="relative mt-16">
          {/* Connector */}
          <div
            aria-hidden="true"
            className={
              "absolute left-0 right-0 top-[27px] hidden h-px lg:block " +
              (dark
                ? "bg-gradient-to-r from-transparent via-white/20 to-transparent"
                : "bg-gradient-to-r from-transparent via-ink/15 to-transparent")
            }
          />
          <ol className="grid gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-6">
            {processSteps.map((step, i) => (
              <li key={step.title}>
                <Reveal delay={i * 0.07} amount={0.3}>
                  <div className="relative flex flex-col items-start lg:items-center lg:text-center">
                    <span
                      className={
                        "relative z-10 flex size-14 items-center justify-center rounded-2xl shadow-soft ring-1 " +
                        (dark
                          ? "bg-navy-900 ring-white/12 text-accent-300"
                          : "bg-white ring-line text-accent-600")
                      }
                    >
                      <step.icon className="size-6" strokeWidth={1.5} />
                      <span
                        className={
                          "absolute -right-1.5 -top-1.5 flex size-5 items-center justify-center rounded-full font-mono text-[9px] font-semibold " +
                          (dark ? "bg-accent-300 text-navy-950" : "bg-navy-950 text-white")
                        }
                      >
                        {i + 1}
                      </span>
                    </span>
                    <h3
                      className={
                        "mt-5 font-display text-[16px] font-semibold tracking-tight " +
                        (dark ? "text-white" : "text-ink")
                      }
                    >
                      {step.title}
                    </h3>
                    <p
                      className={
                        "mt-2 text-[13px] leading-relaxed " +
                        (dark ? "text-white/55" : "text-steel")
                      }
                    >
                      {step.blurb}
                    </p>
                  </div>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </Container>
    </section>
  );
}
