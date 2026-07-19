import type { Metadata } from "next";
import Link from "next/link";
import {
  AlertTriangle,
  ArrowUpRight,
  BadgeCheck,
  CalendarClock,
  FileCheck2,
  Gavel,
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
  PILLAR SCAFFOLD — "Speed Limiter Regulations in Oman".

  This is the topic-cluster hub for the speed-limiter service. It is built to be
  the definitive, answer-first reference for regulatory queries (which vehicles,
  what speeds, the certificate, penalties) — deliberately distinct from the
  operator-narrative blog post at /blog/speed-limiter-rules-oman-fleet-guide,
  which links UP to this page.

  IMPORTANT — no unverified facts are published:
  · Every specific regulatory figure (categories, mandated km/h, decree / GSO
    numbers, certificate validity, penalties in OMR, black points) is rendered
    through <Pending>, a visually obvious placeholder. Those figures are NOT
    asserted in any schema.
  · The page is set to noindex (below) until the figures are verified against
    Royal Oman Police / GSO sources, so Google never indexes placeholder legal
    content. The FAQ / HowTo / Article schema contains only verified, generic
    statements that already appear elsewhere on the site.

  GO-LIVE CHECKLIST (once the client returns the verified figures):
  1. Replace every <Pending> with the confirmed value.
  2. Remove the <Pending> component, the ScaffoldNotice banner and this block.
  3. Set `robots` to index and add descriptive schema for the confirmed specifics.
  4. Add the route to app/sitemap.ts.
  5. Re-angle the blog post to reference this pillar and add reciprocal links.
*/

const PATH = "/services/speed-limiter/oman-regulations";
const LAST_UPDATED = "2026-07-19";

export const metadata: Metadata = {
  title: "Speed Limiter Regulations in Oman: Rules, Speeds & Certification",
  description:
    "A clear guide to Oman's speed limiter law: which commercial vehicles need a limiter, the permitted speeds by class, the certificate required at registration and inspection, renewal and penalties.",
  alternates: { canonical: PATH },
  // Kept out of the index until every figure below is verified. Flip to index
  // once the ROP / GSO specifics are confirmed (see go-live checklist above).
  robots: { index: false, follow: true },
};

/** A clearly-marked slot for a figure awaiting verification. Never used in schema. */
function Pending({
  children,
  block = false,
}: {
  children: React.ReactNode;
  block?: boolean;
}) {
  const Tag = block ? "div" : "span";
  return (
    <Tag
      title="Awaiting verified figure — to be confirmed against Royal Oman Police / GSO sources before this page is published."
      className={cn(
        "gap-1.5 rounded-md border border-dashed border-amber-400 bg-amber-50 font-medium text-amber-700",
        block
          ? "flex px-3 py-2 text-[13px]"
          : "inline-flex items-center px-2 py-0.5 align-middle text-[12px]"
      )}
    >
      <span aria-hidden="true" className="size-1.5 shrink-0 rounded-full bg-amber-500" />
      {children}
    </Tag>
  );
}

const toc = [
  { id: "vehicles", label: "Which vehicles need a limiter" },
  { id: "limits", label: "Permitted speeds by class" },
  { id: "legal", label: "The legal basis" },
  { id: "certificate", label: "The certificate" },
  { id: "penalties", label: "Penalties" },
  { id: "ivms", label: "Limiters vs IVMS (PDO / OPAL)" },
  { id: "faq", label: "FAQ" },
];

/* Categories are shown with their verified-generic status; the authoritative
   threshold / permitted speed for each sits in <Pending> until confirmed. */
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

/* Verified-generic Q&A — identical text is emitted to FAQ schema, so it must
   contain no unverified specifics (those live in the tables as <Pending>). */
const pillarFaqs = [
  {
    category: "Regulation",
    q: "Are speed limiters a legal requirement in Oman?",
    a: "Yes. Royal Oman Police regulations require speed limiting devices on defined commercial vehicle categories, such as heavy goods vehicles and buses. The exact categories and permitted speeds are set by the regulator and updated from time to time, so operators should confirm the current rule for each vehicle class before registration.",
  },
  {
    category: "Regulation",
    q: "How do I get a speed limiter certificate in Oman?",
    a: "An approved device is installed and calibrated to the permitted limit for the vehicle class, road-tested, and an official certificate is issued recording the vehicle, the device and the calibrated limit. That certificate is then presented at registration, renewal and inspection.",
  },
  {
    category: "Regulation",
    q: "Is a speed limiter certificate needed to renew vehicle registration (Mulkiya)?",
    a: "Yes. For vehicles in scope, a valid speed limiter certificate is part of the documentation checked at registration and periodic inspection. If it is missing, expired or does not match the vehicle, registration or inspection can be held up.",
  },
  {
    category: "Regulation",
    q: "How often must the limiter be recalibrated and the certificate renewed?",
    a: "Certificates are issued for a fixed validity period and must be renewed before they lapse. Recalibration is carried out at renewal, or sooner if the vehicle's configuration changes. We track expiry dates for our clients and remind them before renewal is due.",
  },
  {
    category: "Regulation",
    q: "Does fitting a speed limiter also satisfy IVMS or PDO / OPAL requirements?",
    a: "No. A speed limiter physically caps the vehicle's top speed, while an In-Vehicle Monitoring System (IVMS) records how the vehicle is actually driven. Oil and gas operators such as PDO, and the OPAL road-safety standard, generally require both.",
  },
  {
    category: "Regulation",
    q: "What happens if an in-scope vehicle has no compliant limiter?",
    a: "Operating an in-scope commercial vehicle without a compliant, certified limiter can lead to fines, penalty points and delays at registration or inspection until the vehicle is brought into compliance.",
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
    name: "Registration & inspection",
    text: "The certificate is presented at vehicle registration, renewal and periodic inspection as proof the vehicle is limited.",
  },
  {
    icon: RefreshCw,
    name: "Renewal tracked",
    text: "Before the certificate lapses it is renewed and the limiter re-verified, so the vehicle is never caught out of date.",
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
        lede="Which commercial vehicles must be limited, the permitted speeds by class, the certificate needed at registration and inspection, and the penalties for getting it wrong — in plain English."
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
            {/* Scaffold notice — remove at go-live (see file header). */}
            <div className="mb-10 flex items-start gap-3 rounded-2xl border border-dashed border-amber-400 bg-amber-50 px-5 py-4">
              <AlertTriangle
                className="mt-0.5 size-5 shrink-0 text-amber-500"
                strokeWidth={1.9}
              />
              <p className="text-[13.5px] leading-relaxed text-amber-800">
                <strong className="font-semibold">Draft for review.</strong> Figures
                shown in amber are placeholders awaiting confirmation against Royal Oman
                Police and GSO sources. Until they are verified this page is set to{" "}
                <em>noindex</em>, so search engines will not list it — the regulatory
                specifics are only published once they are confirmed.
              </p>
            </div>

            {/* Answer-first summary — snippet & AI-answer bait */}
            <Reveal>
              <div className="rounded-3xl bg-navy-950 p-7 text-white shadow-lift md:p-9">
                <span className="text-[11px] font-semibold uppercase tracking-[0.18em] text-accent-300">
                  Quick answer
                </span>
                <p className="mt-4 text-[16px] leading-[1.8] text-white/85">
                  In Oman, the Royal Oman Police require speed limiting devices on defined
                  commercial vehicle categories — principally heavy goods vehicles and
                  buses. The limiter must be calibrated to the permitted speed for the
                  vehicle class and certified; that certificate is checked at registration
                  and periodic inspection, and must be renewed before it expires.
                </p>
                <dl className="mt-7 grid gap-px overflow-hidden rounded-2xl bg-white/10 sm:grid-cols-2">
                  {[
                    {
                      k: "Who must comply",
                      v: <Pending>Vehicle categories — to confirm</Pending>,
                    },
                    {
                      k: "Permitted speeds",
                      v: <Pending>km/h by class — to confirm</Pending>,
                    },
                    {
                      k: "Certificate validity",
                      v: <Pending>Validity period — to confirm</Pending>,
                    },
                    {
                      k: "Penalty for non-compliance",
                      v: <Pending>Fine / points — to confirm</Pending>,
                    },
                  ].map((row) => (
                    <div key={row.k} className="bg-navy-950 p-4">
                      <dt className="text-[11.5px] font-medium uppercase tracking-[0.12em] text-white/45">
                        {row.k}
                      </dt>
                      <dd className="mt-2">{row.v}</dd>
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
                      <span className="group-hover:underline underline-offset-4">
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
              an operator&rsquo;s own safety policy. Because categories and thresholds are
              updated periodically, we confirm the current rule for each vehicle class
              before any work begins.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[560px] border-collapse overflow-hidden rounded-2xl text-left ring-1 ring-line">
                <thead>
                  <tr className="bg-mist text-[12px] uppercase tracking-[0.1em] text-steel">
                    <th className="px-5 py-3.5 font-semibold">Vehicle category</th>
                    <th className="px-5 py-3.5 font-semibold">Typical examples</th>
                    <th className="px-5 py-3.5 font-semibold">Requirement</th>
                    <th className="px-5 py-3.5 font-semibold">Permitted top speed</th>
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
                      <td className="px-5 py-4">
                        <Pending>km/h — to confirm</Pending>
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
              Permitted speeds by vehicle class
            </h2>
            <p className={lead}>
              The limiter is calibrated to the maximum speed permitted for the vehicle&rsquo;s
              class, not the road&rsquo;s posted limit. The table below lists the mandated
              ceiling for each class; these are the figures a technician calibrates to and
              an inspector checks against.
            </p>

            <div className="mt-8 overflow-x-auto">
              <table className="w-full min-w-[420px] border-collapse overflow-hidden rounded-2xl text-left ring-1 ring-line">
                <thead>
                  <tr className="bg-mist text-[12px] uppercase tracking-[0.1em] text-steel">
                    <th className="px-5 py-3.5 font-semibold">Vehicle class</th>
                    <th className="px-5 py-3.5 font-semibold">Mandated top speed</th>
                  </tr>
                </thead>
                <tbody className="text-[14px]">
                  {[
                    "Heavy goods vehicles",
                    "Buses & coaches",
                    "Tankers / hazardous loads",
                    "Light commercial",
                  ].map((cls) => (
                    <tr key={cls} className="border-t border-line">
                      <td className="px-5 py-4 font-medium text-ink">{cls}</td>
                      <td className="px-5 py-4">
                        <Pending>km/h — to confirm</Pending>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          {/* ---------------- Legal basis ---------------- */}
          <section className="mx-auto mt-16 max-w-3xl">
            <h2 id="legal" className={h2}>
              The legal basis
            </h2>
            <p className={lead}>
              Speed-limiter requirements in Oman sit within Royal Oman Police traffic
              regulations, alongside the Gulf-wide technical standards that define how a
              limiting device must perform. The specific instrument and standard reference
              are listed here once confirmed, so operators can cite the exact source.
            </p>
            <div className="mt-7 space-y-3">
              {[
                { icon: Gavel, k: "Governing regulation / decree", v: "Instrument & year — to confirm" },
                { icon: ScrollText, k: "Technical standard (GSO)", v: "Standard number — to confirm" },
                { icon: BadgeCheck, k: "Issuing / approving authority", v: "Authority name — to confirm" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="flex flex-wrap items-center gap-x-4 gap-y-2 rounded-2xl border border-line bg-white p-4"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-accent-500/10 text-accent-700">
                    <row.icon className="size-4.5" strokeWidth={1.75} />
                  </span>
                  <span className="text-[14px] font-medium text-ink">{row.k}</span>
                  <span className="ml-auto">
                    <Pending>{row.v}</Pending>
                  </span>
                </div>
              ))}
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
              the calibrated limit, and it is what an official checks at registration and
              inspection. Here is how it is issued and kept current.
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

            <div className="mt-6 grid gap-3 sm:grid-cols-2">
              <div className="rounded-2xl border border-line bg-mist/60 p-5">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-steel">
                  Official certificate name
                </p>
                <div className="mt-2">
                  <Pending block>Certificate name — to confirm</Pending>
                </div>
              </div>
              <div className="rounded-2xl border border-line bg-mist/60 p-5">
                <p className="text-[12px] font-medium uppercase tracking-[0.12em] text-steel">
                  Validity &amp; renewal
                </p>
                <div className="mt-2">
                  <Pending block>Validity period — to confirm</Pending>
                </div>
              </div>
            </div>
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
              traffic offence. Beyond the fine, the practical cost is downtime: a vehicle
              can be held at inspection or registration until it is brought into
              compliance. The current penalties are listed below once confirmed.
            </p>
            <div className="mt-7 grid gap-3 sm:grid-cols-2">
              {[
                { icon: ShieldAlert, k: "Fine", v: "Amount in OMR — to confirm" },
                { icon: AlertTriangle, k: "Black points", v: "Points — to confirm" },
              ].map((row) => (
                <div
                  key={row.k}
                  className="rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex size-9 items-center justify-center rounded-xl bg-amber-100 text-amber-600">
                    <row.icon className="size-4.5" strokeWidth={1.75} />
                  </span>
                  <p className="mt-3 text-[12px] font-medium uppercase tracking-[0.12em] text-steel">
                    {row.k}
                  </p>
                  <div className="mt-2">
                    <Pending block>{row.v}</Pending>
                  </div>
                </div>
              ))}
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
                className="mt-4 inline-flex items-center gap-1.5 text-[14px] font-semibold text-accent-700 hover:underline underline-offset-4"
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
          </section>
        </Container>
      </article>

      <CtaBand
        title="Get a straight answer on what your fleet needs"
        lede="Send us your vehicle list. We'll confirm which vehicles need limiting, the permitted speeds, and schedule installation and certification around your operations."
      />

      {/* Verified-generic schema only — no <Pending> figure is asserted here. */}
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
            "The process to fit, calibrate and certify a speed limiter for a commercial vehicle in Oman, and keep the certificate valid at registration and inspection.",
          steps: certificateSteps.map((s) => ({ name: s.name, text: s.text })),
        })}
      />
    </>
  );
}
