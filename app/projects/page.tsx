import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import Image from "next/image";
import { Check } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { heroImages, projects } from "@/lib/data";

export const metadata: Metadata = pageMeta({
  title: "Projects & Case Studies",
  description:
    "Representative fleet projects across Oman: speed limiter rollouts, IVMS compliance deployments, school bus tracking and construction fleet control.",
  path: "/projects",
});

export default function ProjectsPage() {
  const [featured, ...rest] = projects;

  return (
    <>
      <PageHeader
        image={heroImages.projects}
        tone="teal"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Projects", href: "/projects" },
        ]}
        title="Work we can point to"
        lede="Representative engagements from across Oman, anonymised for client confidentiality. Scale, timeline and outcome, without the marketing gloss."
      />

      <section className="bg-white py-24 md:py-32">
        <Container>
          {/* Featured project */}
          <Reveal amount={0.15}>
            <article className="grid overflow-hidden rounded-[2rem] bg-navy-950 text-white shadow-lift lg:grid-cols-[1.1fr_0.9fr]">
              <div className="relative min-h-[280px] lg:min-h-0">
                <Image
                  src={featured.image}
                  alt={featured.title}
                  fill
                  sizes="(min-width: 1024px) 55vw, 92vw"
                  className="object-cover opacity-75"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-navy-950/60" />
              </div>
              <div className="flex flex-col justify-center p-9 md:p-12">
                <span className="w-fit rounded-full bg-accent-400/12 px-3.5 py-1.5 text-[11px] font-semibold uppercase tracking-[0.16em] text-accent-300">
                  {featured.sector}
                </span>
                <h2 className="mt-5 font-display text-2xl font-semibold tracking-tight md:text-3xl">
                  {featured.title}
                </h2>
                <p className="mt-4 text-[14.5px] leading-relaxed text-white/65">{featured.summary}</p>
                <dl className="mt-7 grid grid-cols-3 gap-4 border-t border-white/10 pt-6">
                  {featured.scope.map((s) => (
                    <div key={s.label}>
                      <dd className="font-mono text-[15px] font-semibold text-white">{s.value}</dd>
                      <dt className="mt-1 text-[10.5px] uppercase tracking-[0.14em] text-white/40">
                        {s.label}
                      </dt>
                    </div>
                  ))}
                </dl>
                <p className="mt-6 flex items-start gap-2.5 text-[13.5px] font-medium text-accent-300">
                  <Check className="mt-0.5 size-4 shrink-0" strokeWidth={2.5} />
                  {featured.outcome}
                </p>
              </div>
            </article>
          </Reveal>

          {/* Remaining projects */}
          <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {rest.map((p, i) => (
              <Reveal key={p.slug} delay={(i % 3) * 0.07} amount={0.2} className="h-full">
                <article className="flex h-full flex-col overflow-hidden rounded-[2rem] bg-white ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-lift">
                  <div className="relative h-48 bg-navy-950">
                    <Image
                      src={p.image}
                      alt={p.title}
                      fill
                      sizes="(min-width: 1024px) 30vw, (min-width: 768px) 46vw, 92vw"
                      className="object-cover opacity-85"
                    />
                    <span className="absolute left-5 top-5 rounded-full bg-navy-950/80 px-3 py-1.5 text-[10.5px] font-semibold uppercase tracking-[0.14em] text-accent-300 backdrop-blur-sm">
                      {p.sector}
                    </span>
                  </div>
                  <div className="flex flex-1 flex-col p-7">
                    <h3 className="font-display text-[17px] font-semibold leading-snug tracking-tight text-ink">
                      {p.title}
                    </h3>
                    <p className="mt-2.5 flex-1 text-[13.5px] leading-relaxed text-steel">
                      {p.summary}
                    </p>
                    <dl className="mt-5 grid grid-cols-3 gap-3 border-t border-line pt-5">
                      {p.scope.map((s) => (
                        <div key={s.label}>
                          <dd className="font-mono text-[12.5px] font-semibold text-ink">{s.value}</dd>
                          <dt className="mt-0.5 text-[9.5px] uppercase tracking-[0.12em] text-steel-soft">
                            {s.label}
                          </dt>
                        </div>
                      ))}
                    </dl>
                    <p className="mt-4 flex items-start gap-2 text-[12.5px] font-medium text-accent-700">
                      <Check className="mt-0.5 size-3.5 shrink-0" strokeWidth={2.5} />
                      {p.outcome}
                    </p>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal>
            <p className="mt-10 text-center text-[13px] text-steel-soft">
              Details shown are representative engagements. Client names available on request,
              with permission.
            </p>
          </Reveal>
        </Container>
      </section>

      <CtaBand
        title="Planning a rollout like these?"
        lede="Whether it is 5 vehicles or 500, the plan starts the same way: a vehicle list and a conversation."
      />
    </>
  );
}
