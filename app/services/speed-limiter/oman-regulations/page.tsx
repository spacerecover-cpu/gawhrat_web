import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  FileCheck2,
  Gauge,
  RefreshCw,
  ScrollText,
  ShieldAlert,
  Wrench,
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
  Pillar page — "Speed Limiter Regulations in Oman". The topic-cluster hub for
  the speed-limiter service: an answer-first, schema-rich regulatory reference
  that the service page and blog post link into. Kept deliberately distinct in
  angle from /blog/speed-limiter-rules-oman-fleet-guide to avoid cannibalisation.

  Every regulatory statement here is verified: the 80 km/h heavy-vehicle limit,
  the GSO 1711 / 1625 / 1626 standards, and the certificate required at ROP
  inspection and Mulkiya renewal. Where an exact figure is not yet confirmed
  from an authoritative source — notably the specific fines and penalty points,
  which are set by the ROP traffic offence schedule — the page describes the
  requirement generically rather than stating an unverified number.
*/

const PATH = "/services/speed-limiter/oman-regulations";
const LAST_UPDATED = "2026-07-19";

export const metadata: Metadata = {
  title: "Speed Limiter Regulations in Oman: Rules, Speeds & Certification",
  description:
    "Oman's speed limiter rules explained: which commercial vehicles need a limiter, the 80 km/h limit for heavy vehicles, GSO 1711 / 1625 / 1626 compliance, and the certificate required at ROP inspection and Mulkiya renewal.",
  alternates: { canonical: PATH },
};

const gsoStandards = ["GSO 1711", "GSO 1625", "GSO 1626"];

const toc = [
  { id: "vehicles", label: "Which vehicles need a limiter" },
  { id: "limits", label: "Permitted speeds" },
  { id: "legal", label: "Legal basis & standards" },
  { id: "certificate", label: "The certificate" },
  { id: "penalties", label: "Penalties" },
  { id: "ivms", label: "Limiters vs IVMS (PDO / OPAL)" },
  { id: "faq", label: "FAQ" },
];

const vehicleRows = [
  {
    category: "Heavy goods vehicles",
    examples: "Tractor units, rigids, tippers, tankers",
    status: "Required",
  },
  {
    category: "Buses & coaches",
    examples: "Passenger, staff, school and university transport",
    status: "Required",
  },
  {
    category: "Light commercial",
    examples: "Vans and pickups",
    status: "By contract / policy",
  },
  {
    category: "Plant & specialist",
    examples: "Site and specialist vehicles",
    status: "By contract / policy",
  },
];

const certificateSteps = [
  {
    icon: Wrench,
    name: "Install & calibrate",
    text: "An approved limiter is fitted and calibrated to the permitted speed for the vehicle class, then road-verified against real wheel speed.",
  },
  {
    icon: FileCheck2,
    name: "Certificate issued",
    text: "You receive the official certificate recording the vehicle, the device and the calibrated limit, stored digitally against the chassis number.",
  },
  {
    icon: BadgeCheck,
    name: "Inspection & Mulkiya renewal",
    text: "The certificate is presented at ROP inspection and Mulkiya (registration) renewal as proof the vehicle is limited.",
  },
  {
    icon: RefreshCw,
    name: "Renewal tracked",
    text: "Before the certificate lapses it is renewed and the limiter re-verified, so the vehicle is never caught out of date.",
  },
];

/* Verified-generic Q&A — the same text is emitted to FAQ schema. */
const pillarFaqs = [
  {
    category: "Regulation",
    q: "Are speed limiters a legal requirement in Oman?",
    a: "Yes. The Royal Oman Police (ROP) require speed limiter compliance for applicable commercial vehicles, such as heavy goods vehicles and buses. Heavy commercial vehicles are typically limited to 80 km/h, and the limiting device must meet the Gulf GSO standards (GSO 1711, GSO 1625 and GSO 1626).",
  },
  {
    category: "Regulation",
    q: "What speed are heavy vehicles limited to in Oman?",
    a: "Heavy commercial vehicles are typically limited to 80 km/h. The limiter is calibrated to the maximum speed permitted for the vehicle's class and road-verified, so the vehicle cannot exceed it regardless of the road's posted limit.",
  },
  {
    category: "Regulation",
    q: "How do I get a speed limiter certificate in Oman?",
    a: "An approved device is installed and calibrated to the permitted limit for the vehicle class, road-tested, and an official certificate is issued recording the vehicle, the device and the calibrated limit. That certificate is then presented at inspection and registration renewal.",
  },
  {
    category: "Regulation",
    q: "Is a speed limiter certificate needed to renew vehicle registration (Mulkiya)?",
    a: "Yes. For vehicles in scope, a valid speed limiter certificate is required at ROP inspection and Mulkiya (registration) renewal. If it is missing, expired or does not match the vehicle, registration or inspection can be held up.",
  },
  {
    category: "Regulation",
    q: "Which GSO standards apply to speed limiters in Oman?",
    a: "Compliance follows the Gulf Standardization Organization standards GSO 1711, GSO 1625 and GSO 1626, which cover speed-limiting devices for motor vehicles. An approved installer fits and calibrates equipment that conforms to these standards.",
  },
  {
    category: "Regulation",
    q: "Does fitting a speed limiter also satisfy IVMS or PDO / OPAL requirements?",
    a: "No. A speed limiter physically caps the vehicle's top speed, while an In-Vehicle Monitoring System (IVMS) records how the vehicle is actually driven. Oil and gas operators such as PDO, and the OPAL road-safety standard, generally require both.",
  },
  {
    category: "Regulation",
    q: "What happens if an in-scope vehicle has no compliant limiter?",
    a: "Operating an in-scope commercial vehicle without a compliant, certified limiter is a traffic offence and the vehicle can be held at inspection or Mulkiya renewal until it is brought into compliance. The specific fine and penalty points are set out in the ROP traffic offence schedule.",
  },
];

const h2 =
  "scroll-mt-28 font-display text-[26px] font-semibold tracking-tight text-ink md:text-[32px]";
const lead = "mt-5 text-[15.5px] leading-[1.85] text-steel";

export default function OmanRegulationsPage() {
  return (
    <>
      <PageHeader
        compact
        image={heroImages.speedLimiter}
        tone="teal"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/services" },
          { label: "Speed Limiters", href: "/services/speed-limiter" },
          { label: "Oman Regulations", href: PATH },
        ]}
        title="Speed limiter regulations in Oman"
        lede="Which commercial vehicles must be limited, the permitted speeds, the GSO standards that apply, and the certificate needed at inspection and Mulkiya renewal — in plain English."
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
            {/* Answer-first summary — snippet & AI-answer bait */}
            <Reveal>
              <div className="rounded-3xl bg-navy-950 p-7 text-white shadow-lift md:p-9">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Quick answer
                </span>
                <p className="mt-4 text-[16px] leading-[1.8] text-white/85">
                  In Oman, the Royal Oman Police require speed limiter compliance for
                  applicable commercial vehicles — principally heavy goods vehicles and
                  buses. Heavy commercial vehicles are typically limited to 80 km/h, using
                  a device that meets the GSO standards. The resulting certificate is
                  checked at inspection and Mulkiya (registration) renewal, and must be
                  kept valid.
                </p>
                <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
                  {[
                    { k: "Who must comply", v: "Heavy trucks, buses & applicable commercial vehicles" },
                    { k: "Heavy-vehicle limit", v: "Typically 80 km/h" },
                    { k: "Standards", v: "GSO 1711 / 1625 / 1626" },
                    { k: "Certificate", v: "Required at inspection & Mulkiya renewal" },
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

          {/* ---------------- Which vehicles ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="vehicles" className={h2}>
              Which vehicles need a speed limiter?
            </h2>
            <p className={lead}>
              Oman&rsquo;s requirement targets commercial vehicles whose size or use makes
              excessive speed most dangerous. Heavy goods vehicles and buses are in scope;
              other categories are commonly required to be limited by a client contract or
              an operator&rsquo;s own safety policy. Because requirements are updated from
              time to time, we confirm the current rule for each vehicle class before any
              work begins.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[520px] border-collapse overflow-hidden rounded-2xl text-left ring-1 ring-line">
                <thead>
                  <tr className="bg-mist text-[12px] uppercase tracking-[0.1em] text-steel">
                    <th className="px-5 py-3.5 font-semibold">Vehicle category</th>
                    <th className="px-5 py-3.5 font-semibold">Typical examples</th>
                    <th className="px-5 py-3.5 font-semibold">Requirement</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {vehicleRows.map((r) => (
                    <tr key={r.category} className="border-t border-line align-top">
                      <td className="px-5 py-4 font-medium text-ink">{r.category}</td>
                      <td className="px-5 py-4 text-steel">{r.examples}</td>
                      <td className="px-5 py-4">
                        <span
                          className={cn(
                            "inline-flex rounded-full px-2.5 py-0.5 text-[12px] font-semibold",
                            r.status === "Required"
                              ? "bg-accent-500/12 text-accent-700"
                              : "bg-navy-100 text-navy-700"
                          )}
                        >
                          {r.status}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="mt-4 text-[13px] leading-relaxed text-steel-soft">
              Not sure which of your vehicles are in scope?{" "}
              <Link
                href="/contact"
                className="font-medium text-accent-700 underline-offset-2 hover:underline"
              >
                Send us your vehicle list
              </Link>{" "}
              and we&rsquo;ll confirm the requirement for each one.
            </p>
          </section>

          {/* ---------------- Permitted speeds ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="limits" className={h2}>
              Permitted speeds
            </h2>
            <p className={lead}>
              A speed limiter is calibrated to the maximum speed permitted for the
              vehicle&rsquo;s class — not the road&rsquo;s posted limit. For heavy
              commercial vehicles that ceiling is typically 80 km/h.
            </p>

            <div className="mt-8 flex flex-col items-start gap-6 rounded-3xl bg-navy-950 p-8 text-white shadow-lift sm:flex-row sm:items-center md:p-10">
              <span className="flex size-14 shrink-0 items-center justify-center rounded-2xl bg-accent-400/12 text-accent-300">
                <Gauge className="size-7" strokeWidth={1.6} />
              </span>
              <div>
                <div className="flex items-baseline gap-2 font-display font-semibold tracking-tight">
                  <span className="text-5xl md:text-6xl">80</span>
                  <span className="text-xl text-accent-300 md:text-2xl">km/h</span>
                </div>
                <p className="mt-2 text-[14px] leading-relaxed text-white/65">
                  The typical maximum for heavy commercial vehicles under ROP requirements.
                  Other classes are calibrated to the limit set for their category — we
                  confirm the exact figure for each vehicle before installation.
                </p>
              </div>
            </div>
          </section>

          {/* ---------------- Legal basis & standards ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="legal" className={h2}>
              The legal basis and standards
            </h2>
            <p className={lead}>
              Speed limiting in Oman is required under Royal Oman Police traffic
              regulations for applicable commercial vehicles. The limiting device itself
              must conform to the Gulf technical standards for speed-limiting equipment —
              the standards an approved installer calibrates and certifies against.
            </p>
            <div className="mt-7 rounded-3xl border border-line bg-mist/60 p-6">
              <div className="flex items-center gap-2.5 text-[12px] font-semibold uppercase tracking-[0.14em] text-accent-700">
                <ScrollText className="size-4" strokeWidth={1.9} />
                Applicable GSO standards
              </div>
              <div className="mt-4 flex flex-wrap gap-2.5">
                {gsoStandards.map((s) => (
                  <span
                    key={s}
                    className="inline-flex items-center gap-2 rounded-xl border border-line bg-white px-4 py-2.5 font-mono text-[14px] font-medium text-ink"
                  >
                    <BadgeCheck className="size-4 text-accent-600" strokeWidth={1.9} />
                    {s}
                  </span>
                ))}
              </div>
              <p className="mt-4 text-[13px] leading-relaxed text-steel">
                Gulf Standardization Organization standards covering speed-limiting devices
                for motor vehicles, which Oman&rsquo;s requirement follows.
              </p>
            </div>
          </section>

          {/* ---------------- Certificate ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="certificate" className={h2}>
              The speed limiter certificate
            </h2>
            <p className={lead}>
              Fitting the device is only half the job. The certificate is the document that
              actually keeps a vehicle on the road: it records the vehicle, the device and
              the calibrated limit, and it is what an official checks at inspection and
              Mulkiya renewal. It is valid for a fixed period and must be renewed before it
              lapses. Here is how it is issued and kept current.
            </p>

            <ol className="mt-8 space-y-3">
              {certificateSteps.map((s, i) => (
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
                        {i + 1}/{certificateSteps.length}
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

          {/* Inline conversion card */}
          <section className="mx-auto mt-14 max-w-3xl">
            <div className="flex flex-col items-start gap-5 rounded-3xl border border-line bg-mist/60 p-7 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <h3 className="font-display text-[18px] font-semibold tracking-tight text-ink">
                  Need vehicles limited and certified?
                </h3>
                <p className="mt-1.5 text-[14px] leading-relaxed text-steel">
                  We install, calibrate and certify the same day, and track every renewal
                  for you.
                </p>
              </div>
              <Button href="/services/speed-limiter#certification" className="shrink-0">
                Our certification service
              </Button>
            </div>
          </section>

          {/* ---------------- Penalties ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="penalties" className={h2}>
              Penalties for non-compliance
            </h2>
            <p className={lead}>
              Running an in-scope vehicle without a compliant, certified limiter is a
              traffic offence. Beyond any fine, the practical cost is downtime: a vehicle
              can be held at inspection or Mulkiya renewal until it is brought into
              compliance, which is far more expensive than staying current.
            </p>
            <div className="mt-7 flex items-start gap-3.5 rounded-2xl border border-line bg-white p-5">
              <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy-950 text-accent-300">
                <ShieldAlert className="size-5" strokeWidth={1.7} />
              </span>
              <p className="text-[14px] leading-relaxed text-steel">
                The specific fine and any penalty points are set out in the Royal Oman
                Police traffic offence schedule. We keep client vehicles compliant and
                certificates current so the question never arises — the reliable way to
                avoid a penalty is to never be exposed to one.
              </p>
            </div>
          </section>

          {/* ---------------- Limiters vs IVMS ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="ivms" className={h2}>
              Speed limiters vs IVMS (PDO &amp; OPAL)
            </h2>
            <p className={lead}>
              A speed limiter and an In-Vehicle Monitoring System are often confused, but
              they do different jobs. A limiter physically <em>prevents</em> the vehicle
              from exceeding its permitted speed. IVMS <em>records</em> how the vehicle is
              driven — speed, harsh braking, seatbelt use, night driving — so behaviour can
              be reviewed and coached. Oil and gas operators such as PDO, and the OPAL
              road-safety standard, generally require both.
            </p>
            <div className="mt-7 rounded-2xl border border-line bg-white p-6">
              <p className="text-[14px] leading-relaxed text-steel">
                If you are mobilising for a PDO or OPAL contract, fitting a limiter alone is
                not enough — you will also need monitoring configured to the operator&rsquo;s
                specification.
              </p>
              <Link
                href="/services/ivms"
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-700 underline-offset-4 hover:underline"
              >
                Read about our IVMS service
                <ArrowUpRight className="size-4" strokeWidth={2} />
              </Link>
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

            <p className="mt-8 text-[12.5px] leading-relaxed text-steel-soft">
              This guide is provided for general information and reflects how the process
              works in practice. Requirements are set by the Royal Oman Police and updated
              from time to time — we confirm the current rule for your specific vehicles
              before any work.
            </p>
          </section>
        </Container>
      </article>

      <CtaBand
        title="Get a straight answer on what your fleet needs"
        lede="Send us your vehicle list. We'll confirm which vehicles need limiting, the permitted speeds, and schedule installation and certification around your operations."
      />

      <JsonLd
        data={articlePageSchema({
          headline: "Speed Limiter Regulations in Oman",
          description: metadata.description as string,
          path: PATH,
          image: heroImages.speedLimiter,
          datePublished: LAST_UPDATED,
          dateModified: LAST_UPDATED,
        })}
      />
      <JsonLd data={faqSchema(pillarFaqs)} />
      <JsonLd
        data={howToSchema({
          name: "How to get a speed limiter certificate in Oman",
          description:
            "The process to fit, calibrate and certify a speed limiter for a commercial vehicle in Oman, and keep the certificate valid at inspection and Mulkiya renewal.",
          steps: certificateSteps.map((s) => ({ name: s.name, text: s.text })),
        })}
      />
    </>
  );
}
