import type { Metadata } from "next";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { heroImages } from "@/lib/data";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Terms of Service",
  description: `Terms governing the use of the ${site.shortName} website and services.`,
};

const sections = [
  {
    h: "1. Agreement",
    body: [
      `These terms govern your use of the ${site.shortName} website at ${site.url} and, together with any signed service agreement or quotation, the services we provide. By using the website or engaging our services you accept these terms.`,
    ],
  },
  {
    h: "2. Services",
    body: [
      "We provide speed limiter installation, calibration and certification, IVMS installation and management, GPS tracking and fleet management software, as described in the applicable quotation. Specifications, timelines and pricing are those stated in your quotation or agreement, which prevail over general website content.",
    ],
  },
  {
    h: "3. Website content",
    body: [
      "Content on this website is provided for general information. Regulatory requirements (including ROP, PDO and OPAL specifications) change from time to time; we confirm current requirements per engagement, and website summaries should not be relied on as legal advice.",
    ],
  },
  {
    h: "4. Client responsibilities",
    body: [
      "Clients are responsible for providing accurate vehicle information, making vehicles available as scheduled, using installed equipment as intended and keeping account credentials for the platform confidential. Tampering with installed limiters or monitoring devices voids related certification and warranties.",
    ],
  },
  {
    h: "5. Warranties and liability",
    body: [
      "Hardware carries the manufacturer's warranty; our installation workmanship is guaranteed as stated in your agreement. To the maximum extent permitted by law, our liability is limited to the fees paid for the affected service. Nothing in these terms limits liability that cannot be limited under Omani law.",
    ],
  },
  {
    h: "6. Platform use",
    body: [
      "Platform access is provided per active subscription. Clients own their fleet data; we own the platform and its software. Access may be suspended for non-payment or misuse after reasonable notice.",
    ],
  },
  {
    h: "7. Intellectual property",
    body: [
      "The GAWHRAT name, logo, website design and platform software are our property. You may not copy or reuse them without written permission, except for normal viewing and sharing of website links.",
    ],
  },
  {
    h: "8. Governing law",
    body: [
      "These terms are governed by the laws of the Sultanate of Oman, and disputes fall under the jurisdiction of the competent courts of Oman.",
    ],
  },
  {
    h: "9. Contact",
    body: [
      `Questions about these terms: ${site.email} or ${site.phone}.`,
    ],
  },
];

export default function TermsPage() {
  return (
    <>
      <PageHeader
        compact
        image={heroImages.terms}
        tone="sky"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Terms of Service", href: "/terms" },
        ]}
        title="Terms of Service"
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
