import { ImageResponse } from "next/og";
import { site } from "@/lib/site";

// Required for `output: "export"` — generate the OG image as a static file at build time.
export const dynamic = "force-static";

export const alt = `${site.shortName}: ${site.tagline}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "linear-gradient(135deg, #050e20 0%, #081630 55%, #102347 100%)",
          color: "white",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <svg width="56" height="61" viewBox="0 0 44 48" fill="none">
            <path
              d="M22 2.5 40 9.4v13.2c0 11.6-7.5 19.6-18 22.9C11.5 42.2 4 34.2 4 22.6V9.4L22 2.5Z"
              fill="#16305E"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1.2"
            />
            <path
              d="M30.6 27.2a9.4 9.4 0 1 1-.05-9.05"
              stroke="#2CC9BE"
              strokeWidth="3.2"
              strokeLinecap="round"
            />
            <path d="M31 22.9h-7" stroke="#2CC9BE" strokeWidth="3.2" strokeLinecap="round" />
          </svg>
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 30, fontWeight: 700, letterSpacing: 3 }}>GAWHRAT</div>
            <div style={{ fontSize: 13, letterSpacing: 6, color: "rgba(255,255,255,0.5)" }}>
              JARNAN TRAD S.P.C
            </div>
          </div>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div
            style={{
              display: "flex",
              gap: 22,
              fontSize: 76,
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: -2,
            }}
          >
            <span>Smart fleets.</span>
            <span style={{ color: "#2CC9BE" }}>Safer roads.</span>
          </div>
          <div style={{ fontSize: 28, color: "rgba(255,255,255,0.65)" }}>
            Speed limiters, IVMS and fleet management across Oman
          </div>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            borderTop: "1px solid rgba(255,255,255,0.15)",
            paddingTop: 28,
            fontSize: 22,
            color: "rgba(255,255,255,0.55)",
          }}
        >
          <div>gawhrat.com</div>
          <div style={{ color: "#67E8DD" }}>{site.phone}</div>
        </div>
      </div>
    ),
    size
  );
}
