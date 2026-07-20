import type { Metadata } from "next";
import { pageMeta } from "@/lib/seo";
import { PageHeader } from "@/components/layout/PageHeader";
import { Container } from "@/components/ui/Container";
import { ContactSection } from "@/components/home/ContactSection";
import { JsonLd } from "@/components/seo/JsonLd";
import { localBusinessSchema } from "@/lib/schema";
import { heroImages } from "@/lib/data";
import { site } from "@/lib/site";

const nextSteps = [
  {
    title: "We reply within one working day",
    blurb:
      "Usually much sooner. Call or WhatsApp for an answer in minutes during working hours, Sunday to Thursday.",
  },
  {
    title: "We confirm requirements and quote",
    blurb:
      "Send your vehicle list and we confirm exactly what each vehicle needs — speed limiters, IVMS or tracking — with a clear price.",
  },
  {
    title: "We schedule around your operations",
    blurb:
      "Installation is batched by route and rest day, on-site anywhere in Oman, so vehicles keep working while we fit them.",
  },
];

export const metadata: Metadata = pageMeta({
  title: "Contact Us | Request a Quote",
  description: `Request a quote for speed limiters, IVMS or fleet management in Oman. Call ${site.phone}, WhatsApp us or send the form and we reply within one working day.`,
  path: "/contact",
});

export default function ContactPage() {
  return (
    <>
      <PageHeader
        compact
        image={heroImages.contact}
        tone="cyan"
        crumbs={[
          { label: "Home", href: "/" },
          { label: "Contact", href: "/contact" },
        ]}
        title="Let's get your fleet sorted"
        lede="Quotes, rollouts, audits or a live demo with your own routes. One working day to a reply, usually much less."
      />
      <ContactSection />

      <section className="bg-mist py-20 md:py-24">
        <Container>
          <div className="mx-auto max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-ink md:text-3xl">
              What happens after you get in touch
            </h2>
            <ol className="mt-8 space-y-4">
              {nextSteps.map((s, i) => (
                <li
                  key={s.title}
                  className="flex gap-4 rounded-2xl border border-line bg-white p-5"
                >
                  <span className="flex size-9 shrink-0 items-center justify-center rounded-xl bg-navy-950 font-mono text-[13px] font-semibold text-accent-300">
                    {i + 1}
                  </span>
                  <div>
                    <h3 className="font-display text-[15.5px] font-semibold tracking-tight text-ink">
                      {s.title}
                    </h3>
                    <p className="mt-1.5 text-[13.5px] leading-relaxed text-steel">{s.blurb}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </Container>
      </section>

      <JsonLd data={localBusinessSchema} />
    </>
  );
}
