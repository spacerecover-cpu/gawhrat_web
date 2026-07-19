import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} collects, uses and protects personal and fleet data.`,
  robots: { index: true, follow: true },
};

const sections = [
  {
    h: "1. Who we are",
    body: [
      `${site.name} ("GAWHRAT", "we", "us") is a fleet technology company registered in the Sultanate of Oman, providing speed limiter installation and certification, IVMS and fleet management services. This policy explains how we handle personal data on this website and in our services.`,
    ],
  },
  {
    h: "2. Data we collect",
    body: [
      "Website enquiries: name, company, phone number, email address and the details you include in a message or quote request.",
      "Service data: vehicle details (plate, chassis, class), installation and calibration records, and certificates issued for your vehicles.",
      "Platform data: for fleet management and IVMS clients, vehicle positions, trips, driving events, fuel and maintenance records collected by devices installed under your service agreement.",
      "Technical data: basic, non-identifying analytics such as pages visited and approximate region, used to improve the website.",
    ],
  },
  {
    h: "3. How we use data",
    body: [
      "To respond to enquiries, prepare quotes and deliver contracted services.",
      "To issue and track certificates, schedule renewals and provide support.",
      "To operate the fleet platform on behalf of the client that owns the fleet.",
      "To meet legal and regulatory obligations applicable in Oman.",
      "We do not sell personal data, and we do not share fleet data with third parties except as required to deliver the service or by law.",
    ],
  },
  {
    h: "4. Fleet data ownership",
    body: [
      "Tracking and monitoring data collected from a client's vehicles belongs to that client. We process it only to provide the contracted service. Clients may request export of their data at any time, and deletion after contract end, subject to record-keeping obligations.",
    ],
  },
  {
    h: "5. Storage and security",
    body: [
      "Data is stored on secured systems with access limited to staff who need it to do their jobs. We use encryption in transit, access controls and routine backups. No system is perfectly secure, but we treat fleet and personal data with the care we would demand for our own.",
    ],
  },
  {
    h: "6. Retention",
    body: [
      "Enquiry data is kept as long as needed to handle the enquiry and reasonable follow-up. Service and certificate records are kept for the periods required by regulation and good practice. Platform data is retained per the client agreement.",
    ],
  },
  {
    h: "7. Your rights",
    body: [
      `You may request a copy of the personal data we hold about you, ask us to correct it, or ask us to delete it where no legal obligation requires retention. Contact us at ${site.email} and we will respond promptly.`,
    ],
  },
  {
    h: "8. Cookies",
    body: [
      "This website uses only essential and basic analytics cookies. It does not run advertising trackers. Embedded maps are loaded from Google and are subject to Google's own policies.",
    ],
  },
  {
    h: "9. Changes and contact",
    body: [
      `We may update this policy as our services evolve; the latest version will always be published on this page. Questions are welcome at ${site.email} or ${site.phone}.`,
    ],
  },
];

export default function PrivacyPage() {
  return (
    <>
      <PageHeader
        compact
        tone="cyan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Privacy Policy", href: "/privacy" },
        ]}
        title="Privacy Policy"
        lede="Last updated: July 2026"
      />
      <section className="bg-white py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-2xl">
            {sections.map((s) => (
              <div key={s.h} className="mb-10 last:mb-0">
                <h2 className="mb-3 font-display text-xl font-semibold tracking-tight text-ink">
                  {s.h}
                </h2>
                {s.body.map((p, i) => (
                  <p key={i} className="mb-3 text-[14.5px] leading-[1.8] text-steel">
                    {p}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </Container>
      </section>
    </>
  );
}
