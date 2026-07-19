import { cn } from "@/lib/utils";

/* Calibration gauge: 240-degree dial, limiter set at 100 of 140 km/h */
export function GaugeVisual({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 200 158"
      className={cn("w-full", className)}
      role="img"
      aria-label="Speed gauge showing a calibrated limit of 100 kilometres per hour"
    >
      <defs>
        <linearGradient id="gauge-val" x1="0" y1="1" x2="1" y2="0">
          <stop offset="0%" stopColor="#0e877e" />
          <stop offset="100%" stopColor="#22d3ee" />
        </linearGradient>
      </defs>

      {/* Track */}
      <path
        d="M 30.7 140 A 80 80 0 1 1 169.3 140"
        fill="none"
        stroke="#ffffff"
        strokeOpacity="0.09"
        strokeWidth="13"
        strokeLinecap="round"
      />
      {/* Restricted zone */}
      <path
        d="M 162.5 50.1 A 80 80 0 0 1 169.3 140"
        fill="none"
        stroke="#f87171"
        strokeOpacity="0.22"
        strokeWidth="13"
        strokeLinecap="round"
      />
      {/* Calibrated range */}
      <path
        d="M 30.7 140 A 80 80 0 0 1 162.5 50.1"
        fill="none"
        stroke="url(#gauge-val)"
        strokeWidth="13"
        strokeLinecap="round"
      />
      {/* Needle */}
      <line
        x1="100"
        y1="100"
        x2="145.3"
        y2="63.8"
        stroke="#ffffff"
        strokeWidth="3"
        strokeLinecap="round"
      />
      <circle cx="100" cy="100" r="7" fill="#0b1b3a" stroke="#ffffff" strokeWidth="2.5" />

      {/* Limit marker */}
      <circle cx="162.5" cy="50.1" r="4.5" fill="#22d3ee" />

      {/* Scale labels */}
      <g fontFamily="var(--font-geist-mono)" fontSize="9" fill="#ffffff" fillOpacity="0.4">
        <text x="30" y="156" textAnchor="middle">0</text>
        <text x="170" y="156" textAnchor="middle">140</text>
        <text x="171" y="42" textAnchor="middle" fill="#67e8dd" fillOpacity="1">100</text>
      </g>

      {/* Readout */}
      <g textAnchor="middle">
        <text
          x="100"
          y="135"
          fontFamily="var(--font-geist-mono)"
          fontSize="21"
          fontWeight="600"
          fill="#ffffff"
        >
          100
        </text>
        <text
          x="100"
          y="150"
          fontSize="8.5"
          letterSpacing="0.14em"
          fill="#67e8dd"
        >
          KM/H CALIBRATED
        </text>
      </g>
    </svg>
  );
}
