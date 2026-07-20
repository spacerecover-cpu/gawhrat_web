import type { MetadataRoute } from "next";
import { site } from "@/lib/site";

// Required for `output: "export"` — emit this route as a static file at build time.
export const dynamic = "force-static";

// AI / answer-engine crawlers we explicitly welcome, so GAWHRAT can be surfaced
// and cited in AI search (ChatGPT, Claude, Perplexity, Google AI Overviews, etc.).
const AI_CRAWLERS = [
  "GPTBot",
  "ChatGPT-User",
  "OAI-SearchBot",
  "ClaudeBot",
  "anthropic-ai",
  "Claude-User",
  "PerplexityBot",
  "Perplexity-User",
  "Google-Extended",
  "Applebot-Extended",
  "Amazonbot",
  "meta-externalagent",
];

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      { userAgent: "*", allow: "/" },
      ...AI_CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" })),
    ],
    sitemap: `${site.url}/sitemap.xml`,
  };
}
