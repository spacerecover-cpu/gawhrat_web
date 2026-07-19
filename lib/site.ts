export const site = {
  name: "GAWHRAT JARNAN TRAD S.P.C",
  shortName: "GAWHRAT",
  tagline: "Smart fleets. Safer roads.",
  description:
    "Oman-based fleet technology company: ROP-compliant speed limiter installation, calibration and certification, PDO and OPAL-aligned IVMS, GPS tracking and cloud fleet management for commercial fleets.",
  url: "https://gawhrat.com",
  email: "sales@gawhrat.com",
  phone: "+968 9040 7893",
  phoneHref: "+96890407893",
  whatsapp: "https://wa.me/96890407893",
  address: {
    city: "Muscat",
    country: "Oman",
    countryCode: "OM",
  },
  hours: "Sunday to Thursday, 8:00 to 18:00",
  mapEmbed: "https://www.google.com/maps?q=Muscat,+Oman&z=11&output=embed",
  mapLink: "https://maps.google.com/?q=Muscat,+Oman",
} as const;

export const nav = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  {
    label: "Services",
    href: "/services",
    children: [
      {
        label: "Speed Limiters",
        href: "/services/speed-limiter",
        blurb: "ROP-compliant installation, calibration and certification",
      },
      {
        label: "IVMS",
        href: "/services/ivms",
        blurb: "In-vehicle monitoring aligned with PDO and OPAL specs",
      },
      {
        label: "Fleet Management",
        href: "/services/fleet-management",
        blurb: "Live GPS tracking, fuel, maintenance and reporting",
      },
    ],
  },
  { label: "Industries", href: "/industries" },
  { label: "Projects", href: "/projects" },
  { label: "Blog", href: "/blog" },
  { label: "Contact", href: "/contact" },
] as const;

export const footerNav = {
  services: [
    { label: "Speed Limiter Installation", href: "/services/speed-limiter" },
    { label: "Speed Limiter Certification", href: "/services/speed-limiter#certification" },
    { label: "Speed Limiter Regulations", href: "/services/speed-limiter/oman-regulations" },
    { label: "IVMS Installation", href: "/services/ivms" },
    { label: "PDO & OPAL IVMS Requirements", href: "/services/ivms/pdo-opal-requirements" },
    { label: "Fleet Management Platform", href: "/services/fleet-management" },
    { label: "GPS Vehicle Tracking", href: "/services/fleet-management#modules" },
    { label: "All Services", href: "/services" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Areas We Serve", href: "/areas-we-serve" },
    { label: "Industries", href: "/industries" },
    { label: "Projects", href: "/projects" },
    { label: "Blog", href: "/blog" },
    { label: "FAQ", href: "/faq" },
    { label: "Contact", href: "/contact" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
  ],
} as const;
