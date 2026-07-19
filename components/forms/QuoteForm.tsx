"use client";

import { useState } from "react";
import { ArrowUpRight, Check, MessageCircle } from "lucide-react";
import { site } from "@/lib/site";
import { cn } from "@/lib/utils";

/* Without a backend, submissions open a pre-filled email draft and offer a
   WhatsApp fallback. Swap handleSubmit for an API route when one exists. */

const services = [
  "Speed limiter installation",
  "Speed limiter certification or renewal",
  "IVMS installation",
  "Fleet management platform",
  "GPS tracking",
  "Something else",
];

const fleetSizes = ["1 to 5 vehicles", "6 to 25 vehicles", "26 to 100 vehicles", "Over 100 vehicles"];

type Errors = Partial<Record<"name" | "phone" | "email", string>>;

const inputCls =
  "w-full rounded-xl border border-line bg-white px-4 py-3 text-[14.5px] text-ink placeholder:text-steel-soft/70 transition-all duration-300 focus:border-accent-500 focus:outline-none focus:ring-2 focus:ring-accent-500/25";

function Field({
  label,
  required,
  error,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-[13px] font-semibold text-ink">
        {label}
        {required && <span className="ml-1 text-accent-600">*</span>}
      </label>
      {children}
      {error && <p className="text-[12.5px] font-medium text-red-600">{error}</p>}
    </div>
  );
}

export function QuoteForm() {
  const [errors, setErrors] = useState<Errors>({});
  const [sent, setSent] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const get = (k: string) => String(data.get(k) ?? "").trim();

    const next: Errors = {};
    if (!get("name")) next.name = "Please enter your name.";
    if (!get("phone")) next.phone = "Please enter a phone number.";
    if (!get("email")) next.email = "Please enter an email address.";
    else if (!/^\S+@\S+\.\S+$/.test(get("email"))) next.email = "That email address looks incomplete.";
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    const lines = [
      `Name: ${get("name")}`,
      `Company: ${get("company") || "Not provided"}`,
      `Phone: ${get("phone")}`,
      `Email: ${get("email")}`,
      `Service: ${get("service")}`,
      `Fleet size: ${get("fleet")}`,
      "",
      get("message") || "No additional details.",
    ];
    const mailto = `mailto:${site.email}?subject=${encodeURIComponent(
      `Quote request from ${get("name")}`
    )}&body=${encodeURIComponent(lines.join("\n"))}`;
    window.location.href = mailto;
    setSent(true);
  };

  if (sent) {
    return (
      <div className="flex h-full min-h-[420px] flex-col items-center justify-center rounded-3xl bg-white p-10 text-center ring-1 ring-line">
        <span className="flex size-14 items-center justify-center rounded-full bg-accent-600/10 text-accent-600">
          <Check className="size-7" strokeWidth={2} />
        </span>
        <h3 className="mt-6 font-display text-xl font-semibold tracking-tight text-ink">
          Your email draft is ready
        </h3>
        <p className="mt-3 max-w-sm text-[14px] leading-relaxed text-steel">
          We opened a pre-filled email to {site.email} in your mail app. Prefer chat? Send the
          same details on WhatsApp and we will reply during working hours.
        </p>
        <a
          href={site.whatsapp}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-7 inline-flex items-center gap-2 rounded-full bg-whatsapp px-6 py-3.5 text-[14px] font-semibold text-white transition-all duration-300 hover:brightness-110 active:scale-[0.97]"
        >
          <MessageCircle className="size-4" strokeWidth={1.75} />
          Continue on WhatsApp
        </a>
        <button
          type="button"
          onClick={() => setSent(false)}
          className="mt-4 text-[13px] font-medium text-steel underline-offset-4 hover:underline"
        >
          Back to the form
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="rounded-3xl bg-white p-7 shadow-soft ring-1 ring-line md:p-9">
      <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
        Request a quote
      </h3>
      <p className="mt-2 text-[13.5px] text-steel">
        Tell us about your fleet. We reply within one working day.
      </p>

      <div className="mt-7 grid gap-5 sm:grid-cols-2">
        <Field label="Full name" required error={errors.name}>
          <input name="name" autoComplete="name" placeholder="Ahmed Al Balushi" className={cn(inputCls, errors.name && "border-red-400")} />
        </Field>
        <Field label="Company">
          <input name="company" autoComplete="organization" placeholder="Company name" className={inputCls} />
        </Field>
        <Field label="Phone" required error={errors.phone}>
          <input name="phone" type="tel" autoComplete="tel" placeholder="+968 9XXX XXXX" className={cn(inputCls, errors.phone && "border-red-400")} />
        </Field>
        <Field label="Email" required error={errors.email}>
          <input name="email" type="email" autoComplete="email" placeholder="you@company.com" className={cn(inputCls, errors.email && "border-red-400")} />
        </Field>
        <Field label="Service needed">
          <select name="service" className={inputCls} defaultValue={services[0]}>
            {services.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
        <Field label="Fleet size">
          <select name="fleet" className={inputCls} defaultValue={fleetSizes[1]}>
            {fleetSizes.map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </Field>
      </div>
      <div className="mt-5">
        <Field label="Message">
          <textarea
            name="message"
            rows={4}
            placeholder="Vehicle types, locations, timelines, anything that helps us quote accurately."
            className={cn(inputCls, "resize-none")}
          />
        </Field>
      </div>

      <button
        type="submit"
        className="group mt-7 inline-flex w-full items-center justify-center gap-3 rounded-full bg-navy-900 py-1.5 pl-6 pr-1.5 text-[15px] font-semibold text-white transition-all duration-500 ease-[cubic-bezier(0.32,0.72,0,1)] hover:bg-navy-800 active:scale-[0.98] sm:w-auto"
      >
        Send request
        <span className="flex size-9 items-center justify-center rounded-full bg-white/12 transition-transform duration-500 group-hover:translate-x-[2px] group-hover:-translate-y-[2px]">
          <ArrowUpRight className="size-4" strokeWidth={2} />
        </span>
      </button>
      <p className="mt-4 text-[12px] leading-relaxed text-steel-soft">
        Submitting opens a pre-filled email to {site.email}. Your details go nowhere else.
      </p>
    </form>
  );
}
