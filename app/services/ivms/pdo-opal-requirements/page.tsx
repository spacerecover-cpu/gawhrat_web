import type { Metadata } from "next";
import Link from "next/link";
import {
  AlarmClock,
  ArrowUpRight,
  Armchair,
  BadgeCheck,
  CalendarClock,
  ClipboardCheck,
  Fingerprint,
  Gauge,
  Moon,
  Radar,
  ShieldCheck,
  SlidersHorizontal,
  TriangleAlert,
} from "lucide-react";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { Accordion } from "@/components/ui/Accordion";
import { Button } from "@/components/ui/Button";
import { JsonLd } from "@/components/seo/JsonLd";
import { articlePageSchema, faqSchema, howToSchema } from "@/lib/schema";
import { heroImages } from "@/lib/data";
import { cn, formatDate } from "@/lib/utils";

/*
  Pillar page — "PDO & OPAL IVMS Requirements in Oman". The topic-cluster hub for
  the IVMS service, aimed at oil-and-gas contractors. Distinct in angle from the
  IVMS service page (product/capability) and the blog post (narrative), which
  both link into it.

  Content is kept at the same generic-verified level the rest of the site uses:
  operators such as PDO require IVMS to their published specification and OPAL
  sets sector road-safety expectations. No operator-specific specification
  numbers, thresholds or clause references are invented — where a detail would be
  operator-specific it is described generically ("to the operator's published
  specification").
*/

const PATH = "/services/ivms/pdo-opal-requirements";
const LAST_UPDATED = "2026-07-19";

export const metadata: Metadata = {
  title: "PDO & OPAL IVMS Requirements in Oman: A Contractor's Guide",
  description:
    "What PDO and OPAL actually require from a contractor's In-Vehicle Monitoring System in Oman: the driving events it must record, the management that passes an audit, and how to be audit-ready before mobilisation.",
  alternates: { canonical: PATH },
};

const toc = [
  { id: "what", label: "What IVMS is (and isn't)" },
  { id: "who", label: "Who requires IVMS" },
  { id: "events", label: "What IVMS must record" },
  { id: "manage", label: "Recording isn't enough" },
  { id: "audit", label: "Getting audit-ready" },
  { id: "findings", label: "Common audit findings" },
  { id: "faq", label: "FAQ" },
];

const monitoredEvents = [
  { icon: Gauge, event: "Over-speeding", why: "Against posted and contractual limits on concession roads" },
  { icon: Radar, event: "Harsh acceleration, braking & cornering", why: "The aggressive-driving pattern behind most incidents" },
  { icon: Armchair, event: "Seatbelt violations", why: "Movement while the belt is not engaged" },
  { icon: Moon, event: "Night / out-of-hours driving", why: "Driving outside the permitted window" },
  { icon: AlarmClock, event: "Excessive idling", why: "Engine-on time with no movement — fuel and wear" },
  { icon: Fingerprint, event: "Driver identification", why: "Every event attached to a person, not just a plate" },
];

const auditSteps = [
  {
    icon: ShieldCheck,
    name: "Install to specification",
    text: "Devices installed and tested against the operator's published IVMS specification, so the hardware itself is never the finding.",
  },
  {
    icon: SlidersHorizontal,
    name: "Configure the rules",
    text: "Speed zones, permitted hours and event thresholds set for the concession roads you actually run — matched to the operator's spec.",
  },
  {
    icon: Fingerprint,
    name: "Enforce driver ID",
    text: "Driver identification enforced so every event attaches to a named person, which is what turns data into accountability.",
  },
  {
    icon: CalendarClock,
    name: "Schedule the reporting",
    text: "Weekly violation and driver-scoring reports delivered to HSE automatically, on a defined and documented schedule.",
  },
  {
    icon: ClipboardCheck,
    name: "Maintain the evidence pack",
    text: "A running record of violations, coaching and escalation kept up to date, so audit day is a download rather than a scramble.",
  },
];

const auditFindings = [
  {
    finding: "Violations nobody reviews",
    fix: "A defined weekly review with drivers scored, coached and escalated — and the follow-up documented.",
  },
  {
    finding: "Events attached to plates, not people",
    fix: "Driver ID enforced so accountability is unambiguous and coaching lands on the right person.",
  },
  {
    finding: "Configuration that doesn't match the spec",
    fix: "Zones, hours and thresholds configured to the operator's published specification, not left on defaults.",
  },
  {
    finding: "Gaps in the data",
    fix: "Devices maintained and monitored for health, so there are no unexplained silent periods in the record.",
  },
];

/* Verified-generic Q&A — the same text is emitted to FAQ schema. */
const pillarFaqs = [
  {
    category: "IVMS",
    q: "What do PDO and OPAL require from a contractor's IVMS?",
    a: "Operators such as PDO require contractors to run an In-Vehicle Monitoring System that meets their published specification and to actively manage it — recording key driving events, reviewing violations, scoring drivers and keeping evidence. OPAL road-safety standards set expectations across the sector's supply chain. In practice, both the system and the process around it are assessed.",
  },
  {
    category: "IVMS",
    q: "Is IVMS mandatory to win oil and gas contracts in Oman?",
    a: "For most oil and gas work in Oman, yes. Operators including PDO require contractors to run IVMS to their specification as a condition of working on their roads, so it is effectively a prerequisite for mobilisation rather than an optional extra.",
  },
  {
    category: "IVMS",
    q: "Which driving events must an IVMS record?",
    a: "The core monitored events are over-speeding against posted and contractual limits, harsh acceleration, braking and cornering, seatbelt violations, excessive idling, and night or out-of-hours driving — each logged with time, location and driver identification.",
  },
  {
    category: "IVMS",
    q: "Why do IVMS systems fail operator audits?",
    a: "The most common finding is not a missing device — it is a system that records violations nobody reviews. Operators expect a working process: violations reviewed on a schedule, drivers scored and coached, repeat offenders escalated, and all of it documented. Recording without management is what fails.",
  },
  {
    category: "IVMS",
    q: "How long before mobilisation should IVMS be installed?",
    a: "Install and stabilise the system before mobilisation week, not during it. Fitting IVMS while paperwork is still in progress lets drivers get used to it and means the first report an operator sees is already clean, instead of turning mobilisation into an emergency.",
  },
  {
    category: "IVMS",
    q: "What is the difference between a speed limiter and IVMS?",
    a: "A speed limiter physically caps the vehicle's top speed; IVMS records how the vehicle is actually driven so behaviour can be reviewed and coached. They are complementary — oil and gas operators generally require both.",
  },
];

const h2 =
  "scroll-mt-28 font-display text-[26px] font-semibold tracking-tight text-ink md:text-[32px]";
const lead = "mt-5 text-[15.5px] leading-[1.85] text-steel";

export default function PdoOpalRequirementsPage() {
  return (
    <>
      <PageHeader
        compact
        image={heroImages.ivms}
        tone="sky"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "IVMS", href: "/services/ivms" },
          { label: "PDO & OPAL Requirements", href: PATH },
        ]}
        title="PDO & OPAL IVMS requirements in Oman"
        lede="What operators actually expect from a contractor's In-Vehicle Monitoring System — the events it must record, the management that passes an audit, and how to be ready before mobilisation."
      >
        <Reveal delay={0.1}>
          <div className="mt-8 flex flex-wrap items-center gap-4 text-[13px] font-medium text-white/55">
            <span className="rounded-full bg-accent-400/12 px-3.5 py-1.5 font-semibold text-accent-300">
              Compliance reference
            </span>
            <span className="inline-flex items-center gap-1.5">
              <CalendarClock className="size-4" strokeWidth={1.75} />
              Last updated {formatDate(LAST_UPDATED)}
            </span>
          </div>
        </Reveal>
      </PageHeader>

      <article className="bg-white py-16 md:py-20">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Answer-first summary */}
            <Reveal>
              <div className="rounded-3xl bg-navy-950 p-7 text-white shadow-lift md:p-9">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Quick answer
                </span>
                <p className="mt-4 text-[16px] leading-[1.8] text-white/85">
                  Oil and gas operators in Oman, including PDO, require contractors to run
                  an In-Vehicle Monitoring System to their published specification, and OPAL
                  road-safety standards reinforce it across the supply chain. The system
                  must record the key driving events — and, just as importantly, those
                  events must be reviewed, scored and acted on. Recording without management
                  is what fails audits.
                </p>
                <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
                  {[
                    { k: "Who requires it", v: "PDO & oil-and-gas operators; OPAL sets sector standards" },
                    { k: "What it monitors", v: "Speed, harsh events, seatbelt, night driving, idling" },
                    { k: "The real test", v: "Not just recording — reviewing, scoring, escalating" },
                    { k: "What passes audit", v: "A documented process and an evidence pack" },
                  ].map((row) => (
                    <div key={row.k} className="bg-navy-950 p-4">
                      <dt className="text-[11.5px] font-medium uppercase tracking-[0.12em] text-white/45">
                        {row.k}
                      </dt>
                      <dd className="mt-1.5 text-[14px] font-medium text-white/90">{row.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>

            {/* Table of contents */}
            <nav
              aria-label="On this page"
              className="mt-10 rounded-3xl border border-line bg-mist/60 p-6"
            >
              <p className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-700">
                On this page
              </p>
              <ol className="mt-4 grid gap-x-6 gap-y-2.5 sm:grid-cols-2">
                {toc.map((t, i) => (
                  <li key={t.id}>
                    <a
                      href={`#${t.id}`}
                      className="group flex items-baseline gap-2.5 text-[14.5px] text-ink transition-colors hover:text-accent-700"
                    >
                      <span className="font-mono text-[12px] text-steel-soft">
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <span className="underline-offset-4 group-hover:underline">
                        {t.label}
                      </span>
                    </a>
                  </li>
                ))}
              </ol>
            </nav>
          </div>

          {/* ---------------- What IVMS is ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="what" className={h2}>
              What IVMS is (and isn&rsquo;t)
            </h2>
            <p className={lead}>
              An In-Vehicle Monitoring System records how a vehicle is driven — speed, harsh
              acceleration and braking, seatbelt use, night driving and route history — and
              attaches every event to a named driver. It is the evidence layer of a fleet
              safety programme.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-steel">
              It is not a speed limiter. A limiter physically <em>prevents</em> a vehicle
              from exceeding its permitted speed; IVMS <em>records</em> behaviour so it can
              be reviewed and coached. Operators generally require both.{" "}
              <Link
                href="/services/speed-limiter/oman-regulations"
                className="font-medium text-accent-700 underline-offset-2 hover:underline"
              >
                See our guide to speed limiter regulations in Oman
              </Link>
              .
            </p>
          </section>

          {/* ---------------- Who requires IVMS ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="who" className={h2}>
              Who requires IVMS in Oman
            </h2>
            <p className={lead}>
              IVMS is standard equipment for contractors working with oil and gas operators.
              Operators such as PDO require it as a condition of driving on their roads, and
              the OPAL road-safety standard sets expectations across the sector&rsquo;s
              supply chain. For a contractor, the practical position is simple: if you are
              bidding for this work, assume IVMS to the operator&rsquo;s specification is a
              prerequisite, not an optional extra.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-steel">
              The requirement trips up contractors not because the technology is exotic, but
              because the system is installed without being configured, managed and reported
              the way auditors expect.
            </p>
          </section>

          {/* ---------------- What IVMS must record ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="events" className={h2}>
              What IVMS must record
            </h2>
            <p className={lead}>
              Specifications differ in detail between operators, but the core monitored
              events are consistent. Each is logged with time, location, vehicle and driver.
            </p>
            <div className="mt-8 grid gap-3 sm:grid-cols-2">
              {monitoredEvents.map((e) => (
                <div
                  key={e.event}
                  className="flex gap-3.5 rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-700">
                    <e.icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="font-display text-[14.5px] font-semibold tracking-tight text-ink">
                      {e.event}
                    </h3>
                    <p className="mt-1 text-[12.5px] leading-relaxed text-steel">{e.why}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- Recording isn't enough ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="manage" className={h2}>
              Recording isn&rsquo;t enough
            </h2>
            <p className={lead}>
              The most common audit finding is not a missing device. It is a system that
              records violations nobody reviews. Operator standards expect a working process,
              not just a working sensor: violations reviewed on a defined schedule, drivers
              ranked and coached, repeat offenders escalated, and every step documented.
            </p>
            <p className="mt-4 text-[15.5px] leading-[1.85] text-steel">
              This is why driver scoring and league tables matter. They convert thousands of
              raw events into a short list of names a supervisor can act on, and they produce
              the paper trail an auditor wants to see.
            </p>
          </section>

          {/* Inline conversion card */}
          <section className="mx-auto mt-14 max-w-3xl">
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-line bg-mist/60 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-[18px] font-semibold tracking-tight text-ink">
                  Mobilising for a PDO or OPAL contract?
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-steel">
                  We install, configure and manage IVMS to operator specifications — and
                  keep the evidence pack audit-ready.
                </p>
              </div>
              <Button href="/services/ivms" className="shrink-0">
                Our IVMS service
              </Button>
            </div>
          </section>

          {/* ---------------- Getting audit-ready ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="audit" className={h2}>
              Getting audit-ready
            </h2>
            <p className={lead}>
              A clean audit is built, not improvised. This is the sequence we use to take a
              contractor from &ldquo;IVMS installed&rdquo; to &ldquo;audit is a
              non-event&rdquo;.
            </p>
            <ol className="mt-8 space-y-3">
              {auditSteps.map((s, i) => (
                <li
                  key={s.name}
                  className="flex gap-4 rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex size-10 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-accent-300">
                    <s.icon className="size-5" strokeWidth={1.6} />
                  </span>
                  <div>
                    <h3 className="flex items-center gap-2 font-display text-[15.5px] font-semibold tracking-tight text-ink">
                      <span className="font-mono text-[12px] text-steel-soft">
                        {i + 1}/{auditSteps.length}
                      </span>
                      {s.name}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-steel">
                      {s.text}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          {/* ---------------- Common audit findings ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="findings" className={h2}>
              Common audit findings — and how to avoid them
            </h2>
            <p className={lead}>
              Most findings are variations on the same theme: the data exists but the process
              around it doesn&rsquo;t. Here are the ones we see most, and what closes them.
            </p>
            <div className="mt-8 space-y-3">
              {auditFindings.map((f) => (
                <div
                  key={f.finding}
                  className="grid gap-3 rounded-2xl border border-line bg-white p-5 sm:grid-cols-[1fr_1.4fr] sm:gap-5"
                >
                  <div className="flex items-start gap-2.5">
                    <TriangleAlert
                      className="mt-0.5 size-4.5 shrink-0 text-amber-500"
                      strokeWidth={1.9}
                    />
                    <span className="text-[14px] font-semibold text-ink">{f.finding}</span>
                  </div>
                  <div className="flex items-start gap-2.5 sm:border-l sm:border-line sm:pl-5">
                    <BadgeCheck
                      className="mt-0.5 size-4.5 shrink-0 text-accent-600"
                      strokeWidth={1.9}
                    />
                    <span className="text-[13.5px] leading-relaxed text-steel">{f.fix}</span>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* ---------------- FAQ ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="faq" className={cn(h2, "mb-8")}>
              Frequently asked questions
            </h2>
            <Reveal amount={0.1}>
              <Accordion items={pillarFaqs} />
            </Reveal>

            <div className="mt-8 rounded-2xl border border-line bg-mist/60 p-5">
              <Link
                href="/services/speed-limiter/oman-regulations"
                className="group inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-700 underline-offset-4 hover:underline"
              >
                Related: speed limiter regulations in Oman
                <ArrowUpRight
                  className="size-4 transition-transform duration-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                  strokeWidth={2}
                />
              </Link>
            </div>
          </section>
        </Container>
      </article>

      <CtaBand
        title="Mobilising for a contract that requires IVMS?"
        lede="Start before mobilisation week. We'll install, configure and stabilise the system to the operator's specification so your first report is already clean."
      />

      <JsonLd
        data={articlePageSchema({
          headline: "PDO & OPAL IVMS Requirements in Oman",
          description: metadata.description as string,
          path: PATH,
          image: heroImages.ivms,
          datePublished: LAST_UPDATED,
          dateModified: LAST_UPDATED,
        })}
      />
      <JsonLd data={faqSchema(pillarFaqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to make a contractor IVMS audit-ready in Oman",
          description:
            "The steps to install, configure, manage and evidence an In-Vehicle Monitoring System so it meets PDO and OPAL operator expectations at audit.",
          steps: auditSteps.map((s) => ({ name: s.name, text: s.text })),
        })}
      />
    </>
  );
}
