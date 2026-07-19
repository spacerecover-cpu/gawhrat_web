import { Mail, MapPin, MessageCircle, Phone } from "lucide-react";
import { Container } from "@/components/ui/Container";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { Reveal } from "@/components/ui/Reveal";
import { QuoteForm } from "@/components/forms/QuoteForm";
import { site } from "@/lib/site";

const channels = [
  { icon: Phone, label: "Call us", value: site.phone, href: `tel:${site.phoneHref}` },
  { icon: MessageCircle, label: "WhatsApp", value: "Chat with the team", href: site.whatsapp, external: true },
  { icon: Mail, label: "Email", value: site.email, href: `mailto:${site.email}` },
  { icon: MapPin, label: "Visit", value: `${site.address.city}, ${site.address.country}`, href: site.mapLink, external: true },
];

export function ContactSection({ withMap = true }: { withMap?: boolean }) {
  return (
    <section id="contact" className="bg-white py-24 md:py-32">
      <Container>
        <div className="grid gap-12 lg:grid-cols-[1fr_1.15fr] lg:gap-16">
          <div>
            <SectionHeading
              title="Talk to our team"
              lede="Quotes, site surveys, fleet rollouts or a platform demo with your own routes on the map."
            />
            <Reveal delay={0.1}>
              <div className="mt-10 grid gap-3 sm:grid-cols-2">
                {channels.map((c) => (
                  <a
                    key={c.label}
                    href={c.href}
                    {...(c.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                    className="group rounded-2xl border border-line bg-white p-5 transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:-translate-y-0.5 hover:border-accent-600/30 hover:shadow-soft"
                  >
                    <c.icon className="size-5 text-accent-600" strokeWidth={1.5} />
                    <p className="mt-3 text-[12px] font-semibold uppercase tracking-[0.13em] text-steel-soft">
                      {c.label}
                    </p>
                    <p className="mt-1 text-[14.5px] font-medium text-ink">{c.value}</p>
                  </a>
                ))}
              </div>
            </Reveal>
            {withMap && (
              <Reveal delay={0.15}>
                <div className="mt-5 overflow-hidden rounded-3xl ring-1 ring-line">
                  <iframe
                    src={site.mapEmbed}
                    title="GAWHRAT JARNAN TRAD location, Muscat, Oman"
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="h-56 w-full border-0 grayscale-[35%]"
                  />
                </div>
              </Reveal>
            )}
          </div>
          <Reveal delay={0.1} amount={0.1}>
            <QuoteForm />
          </Reveal>
        </div>
      </Container>
    </section>
  );
}
