/* Stylised live-tracking map: roads, a geofence and vehicles moving along
   routes via CSS motion paths. A real miniature of the platform's map view. */

const ROAD_MAIN = "M-20 214 C 90 196, 150 150, 236 138 S 400 92, 500 74";
const ROAD_COAST = "M-20 96 C 110 110, 220 60, 350 66 S 460 96, 510 88";
const ROAD_LINK = "M212 310 C 220 240, 236 190, 236 138 C 236 96, 260 70, 300 64";

function Vehicle({
  path,
  duration,
  delay,
  color = "#67e8dd",
}: {
  path: string;
  duration: number;
  delay: number;
  color?: string;
}) {
  return (
    <g
      className="drive-path"
      style={
        {
          offsetPath: `path("${path}")`,
          "--drive-duration": `${duration}s`,
          "--drive-delay": `${delay}s`,
        } as React.CSSProperties
      }
    >
      <circle r="8" fill={color} opacity="0.18" />
      <circle r="3.5" fill={color} />
    </g>
  );
}

export function FleetMap({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 480 300"
      className={className}
      role="img"
      aria-label="Live fleet map preview with vehicles moving along routes"
    >
      {/* Sea, top right */}
      <path
        d="M300 0 C 340 30, 420 40, 480 34 L 480 0 Z"
        fill="#22d3ee"
        opacity="0.07"
      />
      {/* City blocks */}
      <g fill="#ffffff" opacity="0.05">
        <rect x="52" y="36" width="52" height="34" rx="5" />
        <rect x="118" y="26" width="40" height="46" rx="5" />
        <rect x="60" y="230" width="64" height="40" rx="5" />
        <rect x="150" y="238" width="42" height="30" rx="5" />
        <rect x="300" y="150" width="58" height="38" rx="5" />
        <rect x="372" y="170" width="44" height="52" rx="5" />
        <rect x="398" y="120" width="52" height="34" rx="5" />
        <rect x="268" y="220" width="80" height="42" rx="5" />
      </g>

      {/* Roads */}
      <g fill="none" strokeLinecap="round">
        <path d={ROAD_COAST} stroke="#ffffff" strokeOpacity="0.08" strokeWidth="7" />
        <path d={ROAD_LINK} stroke="#ffffff" strokeOpacity="0.08" strokeWidth="7" />
        <path d={ROAD_MAIN} stroke="#ffffff" strokeOpacity="0.14" strokeWidth="11" />
        <path
          d={ROAD_MAIN}
          stroke="#67e8dd"
          strokeOpacity="0.28"
          strokeWidth="1.5"
          strokeDasharray="1 10"
        />
      </g>

      {/* Geofence: depot zone */}
      <g>
        <circle cx="128" cy="168" r="46" fill="#2cc9be" opacity="0.07" />
        <circle
          cx="128"
          cy="168"
          r="46"
          fill="none"
          stroke="#2cc9be"
          strokeOpacity="0.55"
          strokeWidth="1.5"
          strokeDasharray="5 6"
        />
        <rect x="96" y="112" width="66" height="20" rx="10" fill="#0b1b3a" stroke="#2cc9be" strokeOpacity="0.35" />
        <text x="129" y="125.5" textAnchor="middle" fontSize="9" fill="#67e8dd" fontFamily="var(--font-geist-mono)">
          DEPOT
        </text>
      </g>

      {/* Destination pins */}
      <g fill="#ffffff" opacity="0.5">
        <circle cx="404" cy="86" r="3" />
        <circle cx="330" cy="63" r="3" />
      </g>

      {/* Moving vehicles */}
      <Vehicle path={ROAD_MAIN} duration={16} delay={0} />
      <Vehicle path={ROAD_MAIN} duration={16} delay={-7} color="#ffffff" />
      <Vehicle path={ROAD_COAST} duration={20} delay={-3} />
      <Vehicle path={ROAD_LINK} duration={13} delay={-5} color="#7dd3fc" />
    </svg>
  );
}
