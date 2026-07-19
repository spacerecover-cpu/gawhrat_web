import { ChevronLeft, MapPin, Timer, Route as RouteIcon } from "lucide-react";
import { FleetMap } from "./FleetMap";
import { cn } from "@/lib/utils";

/* Miniature of the mobile app: single-vehicle live view */
export function PhonePreview({ className }: { className?: string }) {
  return (
    <div
      className={cn(
        "w-[228px] rounded-[2.1rem] border border-white/12 bg-navy-950 p-1.5 shadow-deep",
        className
      )}
    >
      <div className="overflow-hidden rounded-[1.7rem] bg-navy-900">
        {/* Status bar */}
        <div className="flex items-center justify-between px-5 pb-1 pt-3 text-[9px] font-medium text-white/60">
          <span className="font-mono">9:41</span>
          <span className="h-[14px] w-[52px] rounded-full bg-navy-950" />
          <span className="font-mono">5G</span>
        </div>
        {/* Header */}
        <div className="flex items-center gap-2 px-4 pb-2 pt-1">
          <span className="flex size-6 items-center justify-center rounded-full bg-white/6 text-white/60">
            <ChevronLeft className="size-3.5" strokeWidth={2} />
          </span>
          <div>
            <p className="font-mono text-[11px] font-semibold text-white">4218 MB</p>
            <p className="text-[9px] text-emerald-400/80">Moving, on route</p>
          </div>
          <span className="ml-auto rounded-full bg-accent-400/10 px-2 py-0.5 text-[8.5px] font-semibold uppercase tracking-wider text-accent-300">
            Live
          </span>
        </div>
        {/* Map */}
        <div className="relative mx-2 overflow-hidden rounded-xl bg-navy-950/60">
          <FleetMap className="h-[150px] w-full scale-[1.35]" />
        </div>
        {/* Speed */}
        <div className="flex items-end justify-between px-5 pb-1 pt-3">
          <div>
            <p className="font-mono text-[26px] font-semibold leading-none text-white">
              62
              <span className="ml-1 text-[11px] font-normal text-white/40">km/h</span>
            </p>
            <p className="mt-1 text-[9px] text-white/45">Limit 100 km/h, compliant</p>
          </div>
          <div className="mb-0.5 h-8 w-16">
            <svg viewBox="0 0 64 32" className="h-full w-full" aria-hidden="true">
              <polyline
                points="0,22 10,18 20,20 30,12 40,15 52,8 64,10"
                fill="none"
                stroke="#2cc9be"
                strokeWidth="2"
                strokeLinecap="round"
              />
            </svg>
          </div>
        </div>
        {/* Trip stats */}
        <div className="mx-2 mb-2 mt-2 grid grid-cols-3 gap-1.5">
          {[
            { icon: RouteIcon, label: "Trip", value: "48 km" },
            { icon: Timer, label: "Driving", value: "1h 12m" },
            { icon: MapPin, label: "Stops", value: "3" },
          ].map((s) => (
            <div key={s.label} className="rounded-xl bg-white/5 px-2.5 py-2 text-center">
              <s.icon className="mx-auto size-3 text-accent-300" strokeWidth={1.75} />
              <p className="mt-1 font-mono text-[10.5px] font-semibold text-white">{s.value}</p>
              <p className="text-[8px] uppercase tracking-wider text-white/40">{s.label}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
