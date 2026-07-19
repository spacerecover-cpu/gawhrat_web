import { site } from "./site";
import type { Post } from "./posts";

export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${site.url}/#organization`,
  name: site.name,
  alternateName: site.shortName,
  url: site.url,
  logo: `${site.url}/icon.svg`,
  email: site.email,
  telephone: site.phone.replace(/\s/g, ""),
  slogan: site.tagline,
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: site.phone.replace(/\s/g, ""),
    email: site.email,
    contactType: "sales",
    areaServed: "OM",
    availableLanguage: ["en", "ar"],
  },
  sameAs: [site.whatsapp],
};

export const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${site.url}/#website`,
  url: site.url,
  name: site.shortName,
  publisher: { "@id": `${site.url}/#organization` },
};

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "@id": `${site.url}/#localbusiness`,
  name: site.name,
  image: `${site.url}/opengraph-image`,
  url: site.url,
  telephone: site.phone.replace(/\s/g, ""),
  email: site.email,
  priceRange: "$$",
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressCountry: site.address.countryCode,
  },
  geo: { "@type": "GeoCoordinates", latitude: 23.588, longitude: 58.3829 },
  openingHoursSpecification: {
    "@type": "OpeningHoursSpecification",
    dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday"],
    opens: "08:00",
    closes: "18:00",
  },
  areaServed: { "@type": "Country", name: "Oman" },
};

export const serviceSchema = (name: string, description: string, path: string) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name,
  description,
  url: `${site.url}${path}`,
  provider: { "@id": `${site.url}/#organization` },
  areaServed: { "@type": "Country", name: "Oman" },
  serviceType: name,
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});

export const breadcrumbSchema = (crumbs: { label: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: crumbs.map((c, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: c.label,
    item: `${site.url}${c.href}`,
  })),
});

export const articleSchema = (post: Post) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: post.title,
  description: post.excerpt,
  image: post.cover,
  datePublished: post.date,
  dateModified: post.date,
  author: { "@type": "Organization", name: site.name, url: site.url },
  publisher: { "@id": `${site.url}/#organization` },
  mainEntityOfPage: `${site.url}/blog/${post.slug}`,
});

/** Generic Article schema for standalone editorial/reference pages (pillars). */
export const articlePageSchema = (args: {
  headline: string;
  description: string;
  path: string;
  image?: string;
  datePublished: string;
  dateModified: string;
}) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: args.headline,
  description: args.description,
  ...(args.image ? { image: `${site.url}${args.image}` } : {}),
  datePublished: args.datePublished,
  dateModified: args.dateModified,
  author: { "@type": "Organization", name: site.name, url: site.url },
  publisher: { "@id": `${site.url}/#organization` },
  mainEntityOfPage: `${site.url}${args.path}`,
});

export const howToSchema = (args: {
  name: string;
  description: string;
  steps: { name: string; text: string }[];
}) => ({
  "@context": "https://schema.org",
  "@type": "HowTo",
  name: args.name,
  description: args.description,
  step: args.steps.map((s, i) => ({
    "@type": "HowToStep",
    position: i + 1,
    name: s.name,
    text: s.text,
  })),
});
