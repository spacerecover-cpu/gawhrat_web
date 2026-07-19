/* Ambient backdrop for dark navy hero bands — "Tesla meets Cisco".

   Two modes:
   - Photo mode (an `image` is passed): the photograph leads, blending into
     navy behind the left-aligned copy. These brand photos already carry a
     glowing GPS/network overlay, so no SVG network is drawn on top.
   - Generative mode (no image): a fine blueprint grid, soft blue glows and a
     living node network — pulsing dots, radar pings, flowing links and beacons
     travelling motion paths. Pure CSS/SVG, reduced-motion safe. `tone` shifts
     the accent hue so generative pages never feel like one repeated template. */

import Image from "next/image";
import { cn } from "@/lib/utils";

const NODES = {
  n1: [1040, 132],
  n2: [1208, 202],
  n3: [1120, 300],
  n4: [1320, 258],
  n5: [904, 222],
  n6: [1004, 378],
  n7: [1250, 110],
  n8: [822, 330],
  n9: [1356, 372],
} as const;

type NodeId = keyof typeof NODES;

const EDGES: [NodeId, NodeId][] = [
  ["n1", "n5"],
  ["n1", "n7"],
  ["n1", "n2"],
  ["n2", "n7"],
  ["n2", "n3"],
  ["n2", "n4"],
  ["n3", "n6"],
  ["n3", "n4"],
  ["n4", "n9"],
  ["n5", "n8"],
  ["n6", "n8"],
];

/* Edges that carry a visible pulse of "data flow" */
const FLOW_EDGES: [NodeId, NodeId][] = [
  ["n1", "n2"],
  ["n2", "n4"],
  ["n5", "n8"],
  ["n3", "n6"],
];

/* Nodes that emit an expanding radar ping */
const PINGS: [NodeId, number][] = [
  ["n2", 0],
  ["n5", -1.9],
  ["n6", -3.6],
];

const ROUTE_MAIN =
  "M-60 486 C 210 452, 372 372, 636 350 S 1064 306, 1300 168 S 1452 78, 1540 44";
const ROUTE_LINK =
  "M792 548 C 852 452, 928 410, 1044 388 S 1248 348, 1360 262";

/* Accent hues, kept inside the brand teal→cyan family. Cycling these across
   pages differentiates the network without leaving the palette. */
const TONES = {
  teal: { p: "#67e8dd", s: "#7dd3fc", t: "#2cc9be" },
  cyan: { p: "#22d3ee", s: "#8be8f5", t: "#38bdf8" },
  sky: { p: "#7dd3fc", s: "#a7f3ec", t: "#2cc9be" },
} as const;

export type HeroTone = keyof typeof TONES;

function edgePath([a, b]: [NodeId, NodeId]) {
  const [x1, y1] = NODES[a];
  const [x2, y2] = NODES[b];
  return `M${x1} ${y1} L${x2} ${y2}`;
}

/* A glowing dot that drives along a motion path — the GPS/data beacon */
function Beacon({
  path,
  duration,
  delay,
  color = "var(--net)",
  r = 3,
}: {
  path: string;
  duration: number;
  delay: number;
  color?: string;
  r?: number;
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
      <circle r={r * 2.6} fill={color} opacity="0.14" />
      <circle r={r} fill={color} />
    </g>
  );
}

export function HeroBackdrop({
  className,
  image,
  imageAlt = "",
  tone = "teal",
  priority = true,
}: {
  className?: string;
  /** Optional per-page background photograph. Enables photo mode. */
  image?: string;
  imageAlt?: string;
  /** Accent hue for the generative network. */
  tone?: HeroTone;
  priority?: boolean;
}) {
  /* ---- Photo mode: let the brand photograph lead ---- */
  if (image) {
    return (
      <div
        className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
        aria-hidden="true"
      >
        <Image
          src={image}
          alt={imageAlt}
          fill
          priority={priority}
          sizes="100vw"
          className="object-cover object-center opacity-95"
        />
        {/* Blend the photo into navy behind the left-aligned copy, while
            keeping the imagery clearly visible across the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-navy-950 via-navy-950/68 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-navy-950/92 via-transparent to-navy-950/40" />
        {/* Soft blue glow to tie the image to the brand light */}
        <div className="absolute -top-40 right-[-6%] h-[480px] w-[620px] rounded-full bg-glow/8 blur-[150px]" />
      </div>
    );
  }

  /* ---- Generative mode: animated network for pages without a photo ---- */
  const c = TONES[tone];

  return (
    <div
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
      aria-hidden="true"
    >
      {/* Blueprint grid */}
      <div className="grid-lines absolute inset-0" />

      {/* Soft blue gradient glows */}
      <div className="absolute -top-44 right-[-6%] h-[520px] w-[680px] rounded-full bg-glow/12 blur-[140px]" />
      <div className="absolute left-[45%] top-[22%] h-[440px] w-[560px] rounded-full bg-accent-500/10 blur-[130px]" />

      {/* Living network + GPS routes */}
      <div className="hero-net absolute inset-0">
        <svg
          viewBox="0 0 1440 520"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 h-full w-full"
          style={{ "--net": c.p, "--net2": c.s, "--net3": c.t } as React.CSSProperties}
        >
          {/* Routed roads with dashed centrelines */}
          <g fill="none" strokeLinecap="round">
            <path d={ROUTE_MAIN} stroke="#ffffff" strokeOpacity="0.06" strokeWidth="9" />
            <path d={ROUTE_LINK} stroke="#ffffff" strokeOpacity="0.05" strokeWidth="7" />
            <path
              d={ROUTE_MAIN}
              stroke="var(--net)"
              strokeOpacity="0.22"
              strokeWidth="1.25"
              strokeDasharray="1 11"
            />
            <path
              d={ROUTE_LINK}
              stroke="var(--net2)"
              strokeOpacity="0.16"
              strokeWidth="1.25"
              strokeDasharray="1 11"
            />
          </g>

          {/* Static connection lines */}
          <g fill="none" stroke="#ffffff" strokeOpacity="0.06" strokeWidth="1">
            {EDGES.map((e, i) => (
              <path key={`edge-${i}`} d={edgePath(e)} />
            ))}
          </g>

          {/* Flowing connection lines (moving data) */}
          <g fill="none" strokeLinecap="round">
            {FLOW_EDGES.map((e, i) => (
              <path
                key={`flow-${i}`}
                d={edgePath(e)}
                stroke="var(--net)"
                strokeOpacity="0.42"
                strokeWidth="1.1"
                strokeDasharray="2 15"
                className="net-flow"
                style={
                  {
                    "--dur": `${3 + i * 0.5}s`,
                    "--delay": `${-i * 0.8}s`,
                    "--flow": "-170",
                  } as React.CSSProperties
                }
              />
            ))}
          </g>

          {/* Node halos */}
          <g fill="var(--net)" opacity="0.05">
            {(Object.keys(NODES) as NodeId[]).map((id) => {
              const [x, y] = NODES[id];
              return <circle key={`halo-${id}`} cx={x} cy={y} r="14" />;
            })}
          </g>

          {/* Radar pings */}
          {PINGS.map(([id, delay]) => {
            const [x, y] = NODES[id];
            return (
              <circle
                key={`ping-${id}`}
                cx={x}
                cy={y}
                r="10"
                fill="none"
                stroke="var(--net)"
                strokeWidth="1.2"
                className="net-ping"
                style={{ "--dur": "5.4s", "--delay": `${delay}s` } as React.CSSProperties}
              />
            );
          })}

          {/* Pulsing node cores */}
          {(Object.keys(NODES) as NodeId[]).map((id, i) => {
            const [x, y] = NODES[id];
            return (
              <circle
                key={`core-${id}`}
                cx={x}
                cy={y}
                r="2.4"
                fill="var(--net2)"
                className="net-node"
                style={
                  {
                    "--dur": `${3.4 + (i % 4) * 0.6}s`,
                    "--delay": `${-i * 0.5}s`,
                  } as React.CSSProperties
                }
              />
            );
          })}

          {/* Waypoint markers on the route */}
          <g fill="var(--net)" opacity="0.34">
            <circle cx="636" cy="350" r="2" />
            <circle cx="1300" cy="168" r="2" />
          </g>

          {/* Beacons travelling the connections */}
          <Beacon path={edgePath(["n1", "n2"])} duration={4.5} delay={-1} color="var(--net2)" r={1.8} />
          <Beacon path={edgePath(["n3", "n6"])} duration={5} delay={-2.6} color="var(--net2)" r={1.8} />

          {/* Beacons driving the GPS routes */}
          <Beacon path={ROUTE_MAIN} duration={17} delay={0} color="var(--net)" r={3} />
          <Beacon path={ROUTE_MAIN} duration={17} delay={-8.5} color="var(--net2)" r={2.4} />
          <Beacon path={ROUTE_LINK} duration={13} delay={-3} color="var(--net3)" r={2.6} />
        </svg>
      </div>
    </div>
  );
}
