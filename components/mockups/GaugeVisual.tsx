import { cn } from "@/lib/utils";

/* Calibration gauge: 240-degree dial, limiter set at 100 of 140 km/h.
   Neon gradient sweep for the calibrated range, a muted magenta over-limit
   zone, a glowing limit cap, shimmering road light-trails and a scanning
   highlight. Pure SVG/CSS, reduced-motion safe. */

const TRACK = "M 30.7 140 A 80 80 0 1 1 169.3 140";
const CALIBRATED = "M 30.7 140 A 80 80 0 0 1 162.5 50.1";
const RESTRICTED = "M 162.5 50.1 A 80 80 0 0 1 169.3 140";

export function GaugeVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 168"
      className={cn("w-full", className)}
      role="img"
      aria-label="Speed gauge showing a calibrated limit of 100 kilometres per hour"
    >
      <defs>
        <linearGradient id="gauge-val" gradientUnits="userSpaceOnUse" x1="30.7" y1="140" x2="162.5" y2="50.1">
          <stop offset="0%" stopColor="#0e877e" />
          <stop offset="45%" stopColor="#16a89d" />
          <stop offset="78%" stopColor="#22d3ee" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="gauge-restrict" gradientUnits="userSpaceOnUse" x1="162.5" y1="50.1" x2="169.3" y2="140">
          <stop offset="0%" stopColor="#f472b6" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <linearGradient id="gauge-trail-l" gradientUnits="userSpaceOnUse" x1="-10" y1="150" x2="80" y2="168">
          <stop offset="0%" stopColor="#38bdf8" stopOpacity="0" />
          <stop offset="100%" stopColor="#38bdf8" />
        </linearGradient>
        <linearGradient id="gauge-trail-r" gradientUnits="userSpaceOnUse" x1="210" y1="150" x2="120" y2="168">
          <stop offset="0%" stopColor="#fb7185" stopOpacity="0" />
          <stop offset="100%" stopColor="#fb7185" />
        </linearGradient>
        <filter id="gauge-glow" x="-40%" y="-40%" width="180%" height="180%">
          <feGaussianBlur stdDeviation="3.4" />
        </filter>
        <filter id="gauge-glow-sm" x="-80%" y="-80%" width="260%" height="260%">
          <feGaussianBlur stdDeviation="2" />
        </filter>
      </defs>

      {/* Faint tech dots */}
      <g fill="#7dd3fc" opacity="0.16">
        <circle cx="22" cy="42" r="0.9" />
        <circle cx="34" cy="34" r="0.9" />
        <circle cx="46" cy="28" r="0.9" />
        <circle cx="24" cy="58" r="0.9" />
        <circle cx="178" cy="46" r="0.9" />
        <circle cx="166" cy="34" r="0.9" />
        <circle cx="184" cy="62" r="0.9" />
        <circle cx="154" cy="26" r="0.9" />
      </g>

      {/* Road light-trails */}
      <g fill="none" strokeLinecap="round" filter="url(#gauge-glow-sm)">
        <path className="gauge-trail" d="M -12 158 C 28 150, 52 156, 70 168" stroke="url(#gauge-trail-l)" strokeWidth="1.4" />
        <path className="gauge-trail" style={{ "--delay": "-1.2s" } as React.CSSProperties} d="M -12 147 C 24 141, 46 150, 62 165" stroke="url(#gauge-trail-l)" strokeWidth="1" />
        <path className="gauge-trail" style={{ "--delay": "-0.6s" } as React.CSSProperties} d="M 212 158 C 172 150, 148 156, 130 168" stroke="url(#gauge-trail-r)" strokeWidth="1.4" />
        <path className="gauge-trail" style={{ "--delay": "-1.8s" } as React.CSSProperties} d="M 212 147 C 176 141, 154 150, 138 165" stroke="url(#gauge-trail-r)" strokeWidth="1" />
      </g>

      {/* Track */}
      <path d={TRACK} fill="none" stroke="#ffffff" strokeOpacity="0.08" strokeWidth="13" strokeLinecap="round" />

      {/* Over-limit zone (100 -> 140) */}
      <path d={RESTRICTED} fill="none" stroke="url(#gauge-restrict)" strokeOpacity="0.4" strokeWidth="13" strokeLinecap="round" />

      {/* Calibrated range glow + fill (0 -> 100) */}
      <path d={CALIBRATED} fill="none" stroke="#22d3ee" strokeOpacity="0.55" strokeWidth="17" strokeLinecap="round" filter="url(#gauge-glow)" />
      <path d={CALIBRATED} fill="none" stroke="url(#gauge-val)" strokeWidth="13" strokeLinecap="round" />
      {/* Scanning highlight sweeping the calibrated arc */}
      <path
        className="gauge-scan"
        d={CALIBRATED}
        fill="none"
        stroke="#eaffff"
        strokeOpacity="0.75"
        strokeWidth="5"
        strokeLinecap="round"
        strokeDasharray="2 237"
        filter="url(#gauge-glow-sm)"
      />

      {/* Limit cap at 100 */}
      <circle cx="162.5" cy="50.1" r="8" fill="#38bdf8" opacity="0.5" filter="url(#gauge-glow-sm)" />
      <circle className="gauge-cap" cx="162.5" cy="50.1" r="4.4" fill="#eaffff" />

      {/* Needle */}
      <polygon points="147,62 102.4,103.1 97.6,96.9" fill="#ffffff" filter="url(#gauge-glow-sm)" opacity="0.55" />
      <polygon points="147,62 102.4,103.1 97.6,96.9" fill="#ffffff" />
      <circle cx="100" cy="100" r="7.5" fill="#0b1b3a" stroke="#ffffff" strokeWidth="2.5" />
      <circle cx="100" cy="100" r="2" fill="#38bdf8" />

      {/* Scale labels */}
      <g fontFamily="var(--font-geist-mono)" fontSize="9">
        <text x="26" y="158" textAnchor="middle" fill="#2cc9be">0</text>
        <text x="176" y="158" textAnchor="middle" fill="#fb7185">140</text>
        <text x="178" y="44" textAnchor="middle" fill="#38bdf8">100</text>
      </g>

      {/* Center readout */}
      <g textAnchor="middle">
        <text x="100" y="130" fontFamily="var(--font-geist-mono)" fontSize="30" fontWeight="700" fill="#ffffff" letterSpacing="0.02em">
          100
        </text>
        <text x="100" y="144" fontSize="8.5" fontWeight="600" letterSpacing="0.22em" fill="#38bdf8">
          KM/H
        </text>
        <text x="100" y="156" fontSize="7.5" letterSpacing="0.2em" fill="#ffffff" fillOpacity="0.5">
          CALIBRATED
        </text>
      </g>
    </svg>
  );
}
