import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowUpRight,
  Armchair,
  Check,
  CircleGauge,
  Moon,
  TrendingDown,
  TrendingUp,
  Waypoints,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { Accordion } from "@/components/ui/Accordion";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { faqSchema, serviceSchema } from "@/lib/schema";
import { faqs, heroImages } from "@/lib/data";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "IVMS Installation in Oman | PDO & OPAL Aligned",
  description:
    "In-Vehicle Monitoring System installation and management aligned with PDO and OPAL specifications. Driver scoring, violation reporting and audit-ready evidence for contractors in Oman.",
};

const events = [
  { icon: CircleGauge, title: "Over-speeding", blurb: "Against posted and contractual limits" },
  { icon: TrendingUp, title: "Harsh acceleration", blurb: "Aggressive throttle events" },
  { icon: TrendingDown, title: "Harsh braking", blurb: "Late or emergency braking patterns" },
  { icon: Waypoints, title: "Harsh cornering", blurb: "Lateral force beyond thresholds" },
  { icon: Armchair, title: "Seatbelt violations", blurb: "Movement without belt engaged" },
  { icon: Moon, title: "Night driving", blurb: "Driving outside permitted hours" },
  { icon: AlarmClock, title: "Excessive idling", blurb: "Engine-on time with no movement" },
  { icon: Check, title: "Driver ID", blurb: "Every event attached to a person" },
];

const scoring = [
  { driver: "S. Al Riyami", events: 1, score: "A", trend: "steady" },
  { driver: "A. Al Balushi", events: 3, score: "B", trend: "up" },
  { driver: "M. Al Habsi", events: 7, score: "C", trend: "up" },
  { driver: "R. Al Farsi", events: 12, score: "D", trend: "down" },
];

const ivmsFaqs = faqs.filter((f) => f.category === "IVMS");

export default function IvmsPage() {
  return (
    <>
      <PageHeader
        image={heroImages.ivms}
        tone="sky"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "IVMS", href: "/services/ivms" },
        ]}
        title="IVMS that passes operator audits"
        lede="In-Vehicle Monitoring Systems installed and managed to PDO and OPAL specifications: monitored events, driver scoring and the reports auditors actually ask for."
      />

      {/* What is monitored */}
      <section className="bg-white py-24 md:py-32">
        <Container>
          <SectionHeading
            title="Every driving event that matters, recorded"
            lede="Each event is logged with time, location, vehicle and driver, then rolled into scores your HSE team can act on."
          />
          <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {events.map((e, i) => (
              <Reveal key={e.title} delay={(i % 4) * 0.05} amount={0.25} className="h-full">
                <div className="h-full rounded-3xl border border-line bg-white p-6 transition-all duration-700 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-1 hover:border-accent-600/25 hover:shadow-soft">
                  <e.icon className="size-5 text-accent-600" strokeWidth={1.5} />
                  <h3 className="mt-3.5 font-display text-[15px] font-semibold tracking-tight text-ink">
                    {e.title}
                  </h3>
                  <p className="mt-1.5 text-[12.5px] leading-relaxed text-steel">{e.blurb}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </Container>
      </section>

      {/* Scoring preview + compliance copy */}
      <section className="bg-navy-950 py-24 text-white md:py-32">
        <Container>
          <div className="grid items-center gap-14 lg:grid-cols-2 lg:gap-20">
            <Reveal>
              <SectionHeading
                dark
                eyebrow="Driver scoring"
                title="Thousands of events become five names to talk to"
                lede="Raw violation logs impress auditors but exhaust supervisors. Scoring turns them into a weekly routine: recognise the best, coach the rest."
              />
              <ul className="mt-8 space-y-3.5">
                {[
                  "League tables by driver, site or subcontractor",
                  "Repeat-offender escalation with documented follow-up",
                  "Weekly summaries emailed to HSE automatically",
                  "An evidence pack maintained for audit day",
                ].map((item) => (
                  <li key={item} className="flex items-center gap-3 text-[14.5px] text-white/75">
                    <span className="flex size-6 shrink-0 items-center justify-center rounded-full bg-accent-400/12 text-accent-300">
                      <Check className="size-3.5" strokeWidth={2.5} />
                    </span>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/services/ivms/pdo-opal-requirements"
                className="group mt-8 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-300 underline-offset-4 hover:underline"
              >
                Read the full PDO &amp; OPAL IVMS requirements guide
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
            </Reveal>

            {/* Miniature scoring table from the platform */}
            <Reveal delay={0.12} amount={0.2}>
              <div className="glass-dark overflow-hidden rounded-3xl">
                <div className="flex items-center justify-between border-b border-white/8 px-6 py-4">
                  <span className="font-display text-[14px] font-semibold">Driver scores, this week</span>
                  <span className="rounded-full bg-white/6 px-2.5 py-1 font-mono text-[10px] text-white/50">
                    128 drivers
                  </span>
                </div>
                {scoring.map((row) => (
                  <div
                    key={row.driver}
                    className="flex items-center justify-between border-b border-white/6 px-6 py-4 last:border-0"
                  >
                    <div className="flex items-center gap-3.5">
                      <span className="flex size-9 items-center justify-center rounded-full bg-white/8 font-display text-[11px] font-semibold text-white/80">
                        {row.driver.split(" ")[0][0]}
                        {row.driver.split(" ").at(-1)?.[0]}
                      </span>
                      <div>
                        <p className="text-[13.5px] font-medium">{row.driver}</p>
                        <p className="text-[11px] text-white/45">{row.events} events this week</p>
                      </div>
                    </div>
                    <span
                      className={cn(
                        "flex size-8 items-center justify-center rounded-xl font-mono text-[13px] font-bold",
                        row.score === "A" && "bg-emerald-400/15 text-emerald-300",
                        row.score === "B" && "bg-accent-400/15 text-accent-300",
                        row.score === "C" && "bg-amber-400/15 text-amber-300",
                        row.score === "D" && "bg-red-400/15 text-red-300"
                      )}
                    >
                      {row.score}
                    </span>
                  </div>
                ))}
              </div>
            </Reveal>
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="bg-mist py-24 md:py-32">
        <Container>
          <div className="grid gap-12 lg:grid-cols-[1fr_1.5fr] lg:gap-20">
            <SectionHeading
              title="IVMS questions"
              lede="What contractors ask before mobilisation, answered plainly."
            />
            <Reveal amount={0.15}>
              <Accordion items={ivmsFaqs} />
            </Reveal>
          </div>
        </Container>
      </section>

      <CtaBand
        title="Mobilising for a contract that requires IVMS?"
        lede="Start before mobilisation week. We will install, configure and stabilise the system so your first operator report is already clean."
      />

      <JsonLd
        data={serviceSchema(
          "IVMS Installation & Management",
          metadata.description as string,
          "/services/ivms"
        )}
      />
      <JsonLd data={faqSchema(ivmsFaqs)} />
    </>
  );
}
