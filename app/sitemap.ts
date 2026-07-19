import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
import { posts } from "@/lib/posts";

// Required for `output: "export"` — emit this route as a static file at build time.
export const dynamic = "force-static";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    { path: "", priority: 1, freq: "weekly" as const },
    { path: "/about", priority: 0.8, freq: "monthly" as const },
    { path: "/services", priority: 0.9, freq: "monthly" as const },
    { path: "/services/speed-limiter", priority: 0.9, freq: "monthly" as const },
    { path: "/services/speed-limiter/oman-regulations", priority: 0.8, freq: "monthly" as const },
    { path: "/services/ivms", priority: 0.9, freq: "monthly" as const },
    { path: "/services/ivms/pdo-opal-requirements", priority: 0.8, freq: "monthly" as const },
    { path: "/services/fleet-management", priority: 0.9, freq: "monthly" as const },
    { path: "/industries", priority: 0.7, freq: "monthly" as const },
    { path: "/projects", priority: 0.7, freq: "monthly" as const },
    { path: "/blog", priority: 0.7, freq: "weekly" as const },
    { path: "/faq", priority: 0.6, freq: "monthly" as const },
    { path: "/contact", priority: 0.8, freq: "yearly" as const },
    { path: "/privacy", priority: 0.2, freq: "yearly" as const },
    { path: "/terms", priority: 0.2, freq: "yearly" as const },
  ].map((r) => ({
    url: `${site.url}${r.path}`,
    lastModified: new Date(),
    changeFrequency: r.freq,
    priority: r.priority,
  }));

  const blogRoutes = posts.map((p) => ({
    url: `${site.url}/blog/${p.slug}`,
    lastModified: new Date(p.date),
    changeFrequency: "yearly" as const,
    priority: 0.6,
  }));

  return [...routes, ...blogRoutes];
}
