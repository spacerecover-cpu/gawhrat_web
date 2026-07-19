import type { Metadata } from "next";
import { BadgeCheck, Bus, CircleGauge, SlidersHorizontal, Truck, Wrench } from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { GaugeVisual } from "@/components/mockups/GaugeVisual";
import { CertificateVisual } from "@/components/mockups/CertificateVisual";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { faqs } from "@/lib/data";

export const metadata: Metadata = {
  title: "Speed Limiter Installation & Certification in Oman",
  description:
    "Professional speed limiter installation, calibration and official certification for trucks and buses in Oman. ROP-compliant, same-day certificates, fleet rollouts without downtime.",
};

const vehicleTypes = [
  { icon: Truck, title: "Heavy trucks", blurb: "Tractor units, rigids and tippers limited to the permitted class speed." },
  { icon: Bus, title: "Buses & coaches", blurb: "Passenger and staff transport, including school and university fleets." },
  { icon: Wrench, title: "Plant & specialist", blurb: "Site and specialist vehicles limited to contract requirements." },
  { icon: CircleGauge, title: "Light commercial", blurb: "Vans and pickups where contracts or policy demand limiting." },
];

const steps = [
  {
    icon: Wrench,
    title: "Install",
    blurb: "The limiter is fitted to the fuel or drive-by-wire system with clean, protected wiring.",
  },
  {
    icon: SlidersHorizontal,
    title: "Calibrate",
    blurb: "We set the device to your permitted limit and verify it against real wheel speed.",
  },
  {
    icon: BadgeCheck,
    title: "Certify",
    blurb: "You leave with the official certificate used at registration and inspection.",
  },
];

const slFaqs = faqs.filter((f) => f.category === "Speed Limiters");

export default function SpeedLimiterPage() {
  return (
    <>
      <PageHeader
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Speed Limiters", href: "/services/speed-limiter" },
        ]}
        title="Speed limiter installation, calibration and certification"
        lede="ROP-compliant limiting for trucks, buses and commercial vehicles across Oman. Fitted by certified technicians, calibrated to your permitted speed and certified the same day."
      />

      {/* Overview */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                title="Limiting that passes inspection the first time"
                lede="A speed limiter is only as good as its calibration and its paperwork. We treat all three parts of the job with the same seriousness."
              />
              <div className="mt-6 space-y-5 text-[15px] leading-relaxed text-steel">
                <p>
                  Our technicians install electronic limiters suited to your vehicle's fuel and
                  control system, calibrate them to the limit permitted for the vehicle class
                  and road-verify the result. Every step is recorded against the chassis
                  number.
                </p>
                <p>
                  For fleets, we plan rollouts in batches around your routes and rest days, so
                  compliance never takes vehicles out of service. Renewals are tracked for you
                  and scheduled before certificates lapse.
                </p>
              </div>
            </Reveal>
            <Reveal delay={0.12} amount={0.15}>
              <div className="relative overflow-hidden rounded-[2rem] bg-navy-950 p-10 shadow-lift md:p-14">
                <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
                <GaugeVisual className="relative mx-auto max-w-[320px]" />
                <p className="relative mt-6 text-center text-[12.5px] font-medium uppercase tracking-[0.16em] text-white/40">
                  Calibrated and road-verified before handover
                </p>
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* Vehicle types */}
      <section className="bg-mist py-24 md:py-32">
        <Container>
          <SectionHeading
            title="Vehicles we limit"
            lede="Requirements differ by class and contract. We confirm the current rule for each vehicle before any work starts."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {vehicleTypes.map((v, i) => (
              <Reveal key={v.title} delay={i * 0.06} amount={0.3} className="h-full">
                <div className="h-full rounded-3xl bg-white p-7 ring-1 ring-line transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:shadow-soft">
                  <v.icon className="size-6 text-accent-600" strokeWidth={1.5} />
                  <h3 className="mt-4 font-display text-[16px] font-semibold tracking-tight text-ink">
                    {v.title}
                  </h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-steel">{v.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>

          {/* Three-step rail */}
          <div className="mt-20 grid gap-5 md:grid-cols-3">
            {steps.map((s, i) => (
              <Reveal key={s.title} delay={i * 0.08} amount={0.3}>
                <div className="relative rounded-3xl bg-navy-950 p-8 text-white">
                  <span className="flex size-11 items-center justify-center rounded-2xl bg-accent-400/12 text-accent-300">
                    <s.icon className="size-5" strokeWidth={1.5} />
                  </span>
                  <span className="absolute right-7 top-7 font-mono text-[12px] font-semibold text-white/30">
                    {i + 1} / 3
                  </span>
                  <h3 className="mt-5 font-display text-lg font-semibold tracking-tight">{s.title}</h3>
                  <p className="mt-2 text-[13.5px] leading-relaxed text-white/60">{s.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Certification */}
      <section id="certification" className="bg-white py-24 md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal amount={0.2} className="order-2 lg:order-1">
              <div className="flex justify-center">
                <CertificateVisual className="rotate-[-1.5deg]" />
              </div>
            </Reveal>
            <Reveal delay={0.08} className="order-1 lg:order-2">
              <SectionHeading
                title="The certificate that keeps vehicles on the road"
                lede="Issued on completion, recorded against the chassis and tracked to renewal."
              />
              <ul className="mt-8 space-y-4">
                {[
                  "Records vehicle, device, calibrated limit and issue date",
                  "Accepted for registration, renewal and inspection checks",
                  "Stored digitally, so a lost paper copy is never a crisis",
                  "Expiry reminders sent before renewal is due",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] text-ink/85">
                    <BadgeCheck className="mt-0.5 size-5 shrink-0 text-accent-600" strokeWidth={1.75} />
                    {item}
                  </li>
                ))}
              </ul>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <SectionHeading
              title="Speed limiter questions"
              lede="The rules change from time to time. These answers reflect how the process works in practice."
            />
            <Reveal amount={0.15}>
              <Accordion items={slFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Need vehicles limited and certified?"
        lede="Send us your vehicle list. We will confirm requirements and schedule installation around your operations."
      />

      <JsonLd
        data={serviceSchema(
          "Speed Limiter Installation & Certification",
          metadata.description as string,
          "/services/speed-limiter"
        )}
      />
      <JsonLd data={faqSchema(slFaqs)} />
    </>
  );
}
