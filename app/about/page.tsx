import type { Metadata } from "next";
import Image from "next/image";
import { Award, Eye, HandshakeIcon, ShieldCheck } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Button } from "@/components/ui/Button";
import { Counter } from "@/components/ui/Counter";
import { ProcessTimeline } from "@/components/home/ProcessTimeline";
import { images, stats } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About Us",
  description: `${site.name} is an Oman-based fleet technology company delivering speed limiter installation and certification, IVMS and cloud fleet management for commercial fleets.`,
};

const values = [
  {
    icon: ShieldCheck,
    title: "Compliance without shortcuts",
    blurb: "Every installation is documented, calibrated and certified the way inspectors expect to find it.",
  },
  {
    icon: Eye,
    title: "Transparency",
    blurb: "Clear quotes, honest timelines and reports that show reality, not a sales version of it.",
  },
  {
    icon: Award,
    title: "Workmanship",
    blurb: "Clean wiring, tested hardware and installs we are happy to have inspected.",
  },
  {
    icon: HandshakeIcon,
    title: "Long relationships",
    blurb: "Renewals, audits and expansions mean we succeed only when clients stay for years.",
  },
];

export default function AboutPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "About", href: "/about" },
        ]}
        title="The team behind safer fleets in Oman"
        lede="GAWHRAT JARNAN TRAD S.P.C is a Muscat-based technology company with one focus: commercial vehicles that are safe, compliant and fully visible to the people who run them."
      />

      {/* Story */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                title="From installation bay to operations room"
                lede="We started where the work is physical: fitting and calibrating speed limiters that had to pass inspection the same day."
              />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-steel">
                <p>
                  That discipline shaped everything since. As clients asked for IVMS to win oil
                  and gas contracts, then for tracking, fuel and maintenance tools, we grew into
                  a full fleet technology partner without losing the workshop mentality:
                  do the job properly, document it, and stand behind it.
                </p>
                <p>
                  Today we serve logistics operators, contractors, schools, government entities
                  and rental companies across Oman, from single vehicles to rollouts of
                  hundreds, with hardware, software and support under one roof.
                </p>
              </div>
              <div className="mt-9">
                <Button href="/contact" variant="primary">
                  Work with us
                </Button>
              </div>
            </Reveal>
            <Reveal delay={0.12} amount={0.15}>
              <div className="bezel shadow-lift">
                <div className="relative aspect-[4/3.4]">
                  <Image
                    src={images.about}
                    alt="Commercial truck maintained and certified by the GAWHRAT team"
                    fill
                    sizes="(min-width: 1024px) 45vw, 92vw"
                    className="object-cover"
                  />
                </div>
              </div>
            </Reveal>
          </div>

          {/* Figures are representative; confirm final numbers with GAWHRAT */}
          <Reveal>
            <dl className="mt-24 grid grid-cols-2 gap-y-10 rounded-3xl bg-navy-950 px-8 py-12 text-white md:grid-cols-4 md:px-14">
              {stats.map((s) => (
                <div key={s.label} className="text-center">
                  <dd className="font-mono text-3xl font-semibold tracking-tight md:text-4xl">
                    <Counter value={s.value} suffix={s.suffix} />
                  </dd>
                  <dt className="mt-2 text-[12px] font-medium uppercase tracking-[0.14em] text-white/45">
                    {s.label}
                  </dt>
                </div>
              ))}
            </dl>
          </Reveal>
        </Container>
      </section>

      {/* Values */}
      <section className="bg-mist py-24 md:py-32">
        <Container>
          <SectionHeading
            title="What we hold ourselves to"
            lede="Four commitments that decide how we quote, install, report and support."
          />
          <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {values.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.07} amount={0.3} className="h-full">
                <div className="h-full rounded-3xl bg-white p-8 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-navy-950 text-accent-300">
                    <v.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <h3 className="mt-5 font-display text-[17px] font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2.5 text-[13.5px] leading-relaxed text-steel">{v.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      <ProcessTimeline dark />
    </>
  );
}
