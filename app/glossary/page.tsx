import type { Metadata } from "next";
import Link from "next/link";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { CtaBand } from "@/components/ui/CtaBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { pageMeta } from "@/lib/seo";
import { heroImages } from "@/lib/data";
import { site } from "@/lib/site";

const PATH = "/glossary";

export const metadata: Metadata = pageMeta({
  title: "Fleet Compliance Glossary (Oman)",
  description:
    "Plain-English definitions of speed limiter, IVMS, ROP, Mulkiya, GSO 1711, PDO, OPAL, geofencing, telematics and other fleet-compliance terms used in Oman.",
  path: PATH,
});

/* Grouped, definitional "X is Y" content — accurate and generic (no fabricated
   specifics). Highly extractable for AI answer engines and search snippets. */
const groups = [
  {
    heading: "Speed limiters & certification",
    terms: [
      { term: "Speed limiter", def: "A device that electronically caps a vehicle's maximum speed by regulating the fuel or drive-by-wire system, so the vehicle cannot exceed a set limit regardless of the road's posted speed. Also called a speed governor." },
      { term: "Speed limiter certificate", def: "The official document issued after a limiter is fitted and calibrated, recording the vehicle, the device and the calibrated limit. In Oman it is required at ROP inspection and Mulkiya (registration) renewal." },
      { term: "Calibration", def: "Setting a speed limiter to the maximum speed permitted for the vehicle's class and verifying it against real wheel speed. Heavy commercial vehicles in Oman are typically limited to 80 km/h." },
      { term: "GSO 1711 / 1625 / 1626", def: "Gulf Standardization Organization (GSO) technical standards for speed-limiting devices on motor vehicles, which Oman's speed limiter requirement follows." },
      { term: "ROP (Royal Oman Police)", def: "The authority responsible for traffic regulation, vehicle registration and road-safety enforcement in the Sultanate of Oman." },
      { term: "Mulkiya", def: "The Omani vehicle registration document. Renewing it requires the vehicle to meet inspection requirements, which for in-scope commercial vehicles includes a valid speed limiter certificate." },
    ],
  },
  {
    heading: "IVMS & oil-and-gas compliance",
    terms: [
      { term: "IVMS (In-Vehicle Monitoring System)", def: "A system that records how a vehicle is actually driven — speed, harsh acceleration, braking and cornering, seatbelt use, idling and night driving — with each event attached to an identified driver." },
      { term: "PDO (Petroleum Development Oman)", def: "Oman's largest oil and gas operator. PDO requires its contractors to run IVMS to a published specification as a condition of driving on its roads." },
      { term: "OPAL", def: "The Omani oil-and-gas industry body whose road-safety standard is widely referenced in contractor requirements across the sector's supply chain." },
      { term: "Driver scoring", def: "Converting thousands of recorded driving events into a per-driver score or league table, so supervisors can recognise safe drivers and coach the rest — and evidence the process at audit." },
      { term: "Harsh event", def: "A harsh acceleration, braking or cornering event where force exceeds a set threshold — a leading indicator of collision risk that IVMS records." },
      { term: "Journey management", def: "Planning, authorising and monitoring trips to control road-safety risk, a common requirement on oil and gas contracts." },
    ],
  },
  {
    heading: "Fleet tracking & telematics",
    terms: [
      { term: "Telematics", def: "The combination of GPS tracking and onboard vehicle data used to monitor location, driving and vehicle health, and to report on a fleet." },
      { term: "Geofencing", def: "Virtual boundaries drawn on a map that trigger an alert when a vehicle enters or leaves an area — used for sites, routes, depots and restricted zones." },
      { term: "CAN bus", def: "A vehicle's internal data network. Telematics can read fuel level, odometer and engine data from it for accurate monitoring." },
      { term: "Idling", def: "Time with the engine running but the vehicle stationary. Excessive idling wastes fuel and adds engine wear, and is a monitored IVMS event." },
      { term: "Trip replay", def: "Reconstructing a vehicle's journey from logged GPS positions, used to verify routes, settle disputes and investigate incidents." },
    ],
  },
];

const definedTermSet = {
  "@context": "https://schema.org",
  "@type": "DefinedTermSet",
  "@id": `${site.url}${PATH}#glossary`,
  name: "Fleet Compliance Glossary (Oman)",
  url: `${site.url}${PATH}`,
  hasDefinedTerm: groups.flatMap((g) =>
    g.terms.map((t) => ({
      "@type": "DefinedTerm",
      name: t.term,
      description: t.def,
      inDefinedTermSet: `${site.url}${PATH}#glossary`,
    }))
  ),
};

export default function GlossaryPage() {
  return (
    <>
      <PageHeader
        image={heroImages.faq}
        tone="cyan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Glossary", href: PATH },
        ]}
        title="Fleet compliance glossary for Oman"
        lede="Plain-English definitions of the speed limiter, IVMS and fleet-tracking terms that come up when you run commercial vehicles in Oman."
      />

      <article className="bg-white py-24 md:py-32">
        <Container>
          <div className="mx-auto max-w-3xl space-y-16">
            {groups.map((g, gi) => (
              <Reveal key={g.heading} delay={gi * 0.05} amount={0.1}>
                <h2 className="mb-7 font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
                  {g.heading}
                </h2>
                <dl className="space-y-4">
                  {g.terms.map((t) => (
                    <div
                      key={t.term}
                      className="rounded-2xl border border-line bg-white p-6 transition-colors hover:border-accent-600/25"
                    >
                      <dt className="font-display text-[16.5px] font-semibold tracking-tight text-ink">
                        {t.term}
                      </dt>
                      <dd className="mt-2 text-[14.5px] leading-relaxed text-steel">{t.def}</dd>
                    </div>
                  ))}
                </dl>
              </Reveal>
            ))}

            <p className="text-[14px] leading-relaxed text-steel-soft">
              Need any of these applied to your fleet? See{" "}
              <Link href="/services/speed-limiter/oman-regulations" className="font-medium text-accent-700 underline-offset-2 hover:underline">
                speed limiter regulations
              </Link>{" "}
              and{" "}
              <Link href="/services/ivms/pdo-opal-requirements" className="font-medium text-accent-700 underline-offset-2 hover:underline">
                PDO &amp; OPAL IVMS requirements
              </Link>
              , or{" "}
              <Link href="/contact" className="font-medium text-accent-700 underline-offset-2 hover:underline">
                talk to our team
              </Link>
              .
            </p>
          </div>
        </Container>
      </article>

      <CtaBand
        title="Turn the jargon into a compliant fleet"
        lede="Tell us what you run and where. We will translate the requirements into a clear plan and price."
      />

      <JsonLd data={definedTermSet} />
    </>
  );
}
