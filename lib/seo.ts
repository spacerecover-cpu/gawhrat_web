import type { Metadata } from "next";
import { site } from "./site";

/**
 * Build page-level metadata with a unique canonical URL and matching OpenGraph
 * and Twitter cards. Without this, every page inherits the site-wide default
 * social title ("GAWHRAT | Smart fleets. Safer roads."); with it, each page
 * shares — in search results and on WhatsApp, LinkedIn, X, etc. — under its own
 * title and description.
 */
export function pageMeta(args: {
  title: string;
  description: string;
  path: string;
}): Metadata {
  const { title, description, path } = args;
  const ogTitle = `${title} | ${site.shortName}`;
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      siteName: site.name,
      title: ogTitle,
      description,
      url: path,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description,
    },
  };
}
