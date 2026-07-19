import Link from "next/link";
import { Mail, MapPin, Phone, MessageCircle } from "lucide-react";
import { footerNav, site } from "@/lib/site";
import { Container } from "@/components/ui/Container";
import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-950 text-white">
      <div className="grid-lines pointer-events-none absolute inset-0" aria-hidden="true" />
      <Container className="relative">
        <div className="grid gap-14 py-20 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.2fr]">
          <div>
            <Link href="/" aria-label="GAWHRAT JARNAN TRAD, home">
              <Logo />
            </Link>
            <p className="mt-6 max-w-sm text-[14.5px] leading-relaxed text-white/55">
              Oman-based fleet technology company. We install, calibrate and certify speed
              limiters, deploy IVMS to operator specifications and run a modern cloud fleet
              management platform.
            </p>
            <p className="mt-6 text-[13px] font-medium uppercase tracking-[0.18em] text-accent-300">
              {site.tagline}
            </p>
          </div>

          <nav aria-label="Services">
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Services
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.services.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/65 transition-colors duration-300 hover:text-accent-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Company">
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {footerNav.company.map((l) => (
                <li key={l.label}>
                  <Link
                    href={l.href}
                    className="text-[14px] text-white/65 transition-colors duration-300 hover:text-accent-300"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="font-display text-[13px] font-semibold uppercase tracking-[0.14em] text-white/40">
              Contact
            </h3>
            <ul className="mt-5 space-y-4 text-[14px]">
              <li>
                <a
                  href={`tel:${site.phoneHref}`}
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-accent-300"
                >
                  <Phone className="size-4 shrink-0 text-accent-300" strokeWidth={1.5} />
                  {site.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-accent-300"
                >
                  <Mail className="size-4 shrink-0 text-accent-300" strokeWidth={1.5} />
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={site.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white/75 transition-colors hover:text-accent-300"
                >
                  <MessageCircle className="size-4 shrink-0 text-accent-300" strokeWidth={1.5} />
                  WhatsApp us
                </a>
              </li>
              <li className="flex items-start gap-3 text-white/55">
                <MapPin className="mt-0.5 size-4 shrink-0 text-accent-300" strokeWidth={1.5} />
                <span>
                  {site.address.city}, {site.address.country}
                  <br />
                  {site.hours}
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="flex flex-col gap-4 border-t border-white/10 py-7 text-[13px] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {footerNav.legal.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                className="transition-colors duration-300 hover:text-white"
              >
                {l.label}
              </Link>
            ))}
          </div>
        </div>
      </Container>
    </footer>
  );
}
