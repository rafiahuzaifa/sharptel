"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { isValidElement, type ReactNode } from "react";
import { ArrowRight, ArrowUpRight, Check, ChevronRight } from "lucide-react";
import Eyebrow from "../Eyebrow";

/*
 * Shared building blocks for inner pages so every page speaks the same
 * visual language as the homepage: dark editorial heroes, hairline cards,
 * red accents, and a consistent CTA band.
 */

export const ease = [0.22, 1, 0.36, 1] as const;

export type LinkAction = { label: string; href: string };

export function Accent({ children }: { children: ReactNode }) {
  return <span className="accent">{children}</span>;
}

export function Reveal({
  children,
  delay = 0,
  className,
}: {
  children: ReactNode;
  delay?: number;
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.7, delay, ease }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

/* ------------------------------------------------------------------ */
/* Hero                                                                */
/* ------------------------------------------------------------------ */

export function PageHero({
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  stats,
  actions,
  breadcrumbs,
  children,
  compact = false,
}: {
  eyebrow: string;
  title: ReactNode;
  accent?: ReactNode;
  subtitle?: ReactNode;
  image?: string;
  stats?: { number: string; label: string }[];
  actions?: { primary?: LinkAction; secondary?: LinkAction };
  breadcrumbs?: LinkAction[];
  children?: ReactNode;
  compact?: boolean;
}) {
  return (
    <section
      className={`grain relative isolate flex flex-col overflow-hidden bg-gray-950 text-white ${
        compact ? "min-h-[56vh]" : "min-h-[72vh]"
      }`}
    >
      <div className="absolute inset-0 -z-10">
        {image && (
          <motion.div
            className="absolute inset-0"
            initial={{ scale: 1.1 }}
            animate={{ scale: 1 }}
            transition={{ duration: 8, ease: "linear" }}
          >
            <Image src={image} alt="" fill priority className="object-cover" sizes="100vw" />
          </motion.div>
        )}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
        <div className="absolute -bottom-40 -left-40 h-[32rem] w-[32rem] rounded-full bg-red-600/25 blur-[140px]" />
        <div className="hairline-grid absolute inset-0" />
      </div>

      <div className="container relative z-10 mx-auto flex flex-1 items-center px-4 pb-14 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="max-w-4xl">
          {breadcrumbs && breadcrumbs.length > 0 && (
            <motion.nav
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              aria-label="Breadcrumb"
              className="mb-6 flex flex-wrap items-center gap-1.5 text-sm text-gray-400"
            >
              {breadcrumbs.map((b, i) => (
                <span key={b.href} className="flex items-center gap-1.5">
                  {i > 0 && <ChevronRight className="h-3.5 w-3.5 text-gray-600" />}
                  <Link href={b.href} className="transition-colors hover:text-white">
                    {b.label}
                  </Link>
                </span>
              ))}
            </motion.nav>
          )}

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.05 }}
            className="mb-7 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-sm text-gray-300">{eyebrow}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.15 }}
            className="mb-7 text-[2.6rem] font-semibold leading-[1.03] text-white sm:text-6xl md:text-7xl"
            style={{ letterSpacing: "-0.045em" }}
          >
            {title}
            {accent && (
              <span className="block bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text pb-[0.08em] text-transparent">
                {accent}
              </span>
            )}
          </motion.h1>

          {subtitle && (
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.3 }}
              className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl"
            >
              {subtitle}
            </motion.p>
          )}

          {actions && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, ease, delay: 0.45 }}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              {actions.primary && (
                <Link href={actions.primary.href} className="btn-primary group px-8 py-4">
                  {actions.primary.label}
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}
              {actions.secondary && (
                <Link href={actions.secondary.href} className="btn-ghost-dark group px-8 py-4">
                  {actions.secondary.label}
                  <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                </Link>
              )}
            </motion.div>
          )}

          {children}
        </div>
      </div>

      {stats && stats.length > 0 && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease, delay: 0.6 }}
          className="relative z-10 border-t border-white/10 bg-gray-950/40 backdrop-blur-xl"
        >
          <div className="container mx-auto grid grid-cols-2 gap-y-6 px-4 py-6 sm:px-6 md:grid-cols-4 md:divide-x md:divide-white/10 lg:px-8">
            {stats.map((s, i) => (
              <div key={i} className={i > 0 ? "md:pl-8" : ""}>
                <div className="text-2xl font-semibold text-white md:text-3xl" style={{ letterSpacing: "-0.03em" }}>
                  {s.number}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gray-400">{s.label}</div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
    </section>
  );
}

/* ------------------------------------------------------------------ */
/* Section scaffolding                                                 */
/* ------------------------------------------------------------------ */

const toneClass = {
  white: "bg-white",
  muted: "bg-gray-50",
  dark: "grain isolate bg-gray-950 text-white",
} as const;

export function Section({
  tone = "white",
  children,
  className = "",
  id,
}: {
  tone?: keyof typeof toneClass;
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`relative overflow-hidden py-24 md:py-28 ${toneClass[tone]} ${className}`}>
      {tone === "muted" && <div className="hairline-grid-light absolute inset-0" />}
      {tone === "dark" && (
        <>
          <div className="hairline-grid absolute inset-0 -z-10" />
          <div className="absolute -top-40 right-0 -z-10 h-[28rem] w-[28rem] rounded-full bg-red-600/20 blur-[140px]" />
        </>
      )}
      <div className="container relative mx-auto px-4 sm:px-6 lg:px-8">{children}</div>
    </section>
  );
}

export function SectionHeader({
  eyebrow,
  title,
  lead,
  align = "split",
  dark = false,
  className = "",
}: {
  eyebrow?: string;
  title: ReactNode;
  lead?: ReactNode;
  align?: "split" | "center" | "left";
  dark?: boolean;
  className?: string;
}) {
  const titleClass = dark ? "section-title-dark" : "section-title";
  const leadClass = dark ? "text-base leading-relaxed text-gray-400 md:text-lg" : "section-lead";

  if (align === "split") {
    return (
      <Reveal className={`mb-14 grid items-end gap-6 lg:grid-cols-12 lg:gap-8 ${className}`}>
        <div className="lg:col-span-7">
          {eyebrow && <Eyebrow label={eyebrow} dark={dark} />}
          <h2 className={titleClass}>{title}</h2>
        </div>
        {lead && <p className={`${leadClass} lg:col-span-5`}>{lead}</p>}
      </Reveal>
    );
  }

  return (
    <Reveal className={`mb-14 ${align === "center" ? "mx-auto max-w-3xl text-center" : "max-w-3xl"} ${className}`}>
      {eyebrow && <Eyebrow label={eyebrow} dark={dark} />}
      <h2 className={`${titleClass} ${lead ? "mb-5" : ""}`}>{title}</h2>
      {lead && <p className={leadClass}>{lead}</p>}
    </Reveal>
  );
}

/* ------------------------------------------------------------------ */
/* Cards & lists                                                       */
/* ------------------------------------------------------------------ */

function IconTile({ icon, index, dark = false }: { icon?: ReactNode; index: number; dark?: boolean }) {
  // Emoji/string icons are replaced by a numbered tile for a cleaner, premium look.
  const showIcon = isValidElement(icon);
  return (
    <div
      className={`flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-2xl transition-colors duration-300 [&_svg]:h-5 [&_svg]:w-5 ${
        dark
          ? "border border-white/10 bg-white/[0.04] text-red-500 group-hover:border-red-500/50 group-hover:bg-red-600 group-hover:text-white"
          : "bg-gray-950 text-white group-hover:bg-red-600"
      }`}
    >
      {showIcon ? icon : <span className="font-mono text-xs">{String(index + 1).padStart(2, "0")}</span>}
    </div>
  );
}

export type FeatureItem = {
  icon?: ReactNode;
  title: string;
  desc?: ReactNode;
  features?: string[];
  meta?: ReactNode;
  href?: string;
};

export function FeatureGrid({
  items,
  columns = 2,
  dark = false,
}: {
  items: FeatureItem[];
  columns?: 2 | 3 | 4;
  dark?: boolean;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-2 lg:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];

  if (dark) {
    return (
      <div className={`grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 ${cols}`}>
        {items.map((item, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.06, duration: 0.6 }}
            className="group relative overflow-hidden bg-gray-950 p-8 transition-colors duration-500 hover:bg-gray-900 md:p-10"
          >
            <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-600/0 blur-3xl transition-all duration-700 group-hover:bg-red-600/25" />
            <div className="relative">
              <div className="mb-8 flex items-center justify-between">
                <IconTile icon={item.icon} index={i} dark />
                <span className="font-mono text-xs tracking-[0.2em] text-gray-600">{String(i + 1).padStart(2, "0")}</span>
              </div>
              <FeatureBody item={item} dark />
            </div>
          </motion.div>
        ))}
      </div>
    );
  }

  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {items.map((item, i) => {
        const card = (
          <div className="premium-card group h-full p-8 md:p-9">
            <div className="mb-7 flex items-center justify-between">
              <IconTile icon={item.icon} index={i} />
              {item.href ? (
                <ArrowUpRight className="h-5 w-5 text-gray-300 transition-all duration-300 group-hover:rotate-45 group-hover:text-red-600" />
              ) : (
                <span className="font-mono text-xs tracking-[0.2em] text-gray-300">{String(i + 1).padStart(2, "0")}</span>
              )}
            </div>
            <FeatureBody item={item} />
          </div>
        );
        return (
          <Reveal key={i} delay={(i % 4) * 0.06}>
            {item.href ? (
              <Link href={item.href} className="block h-full">
                {card}
              </Link>
            ) : (
              card
            )}
          </Reveal>
        );
      })}
    </div>
  );
}

function FeatureBody({ item, dark = false }: { item: FeatureItem; dark?: boolean }) {
  return (
    <>
      <h3
        className={`mb-3 text-xl font-semibold md:text-[1.35rem] ${dark ? "text-white" : "text-gray-900"}`}
        style={{ letterSpacing: "-0.02em" }}
      >
        {item.title}
      </h3>
      {item.desc && <p className={`leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>{item.desc}</p>}
      {item.features && item.features.length > 0 && (
        <ul className={`mt-6 grid gap-x-6 gap-y-2.5 border-t pt-6 sm:grid-cols-2 ${dark ? "border-white/10" : "border-gray-100"}`}>
          {item.features.map((f) => (
            <li key={f} className={`flex items-center gap-2.5 text-sm ${dark ? "text-gray-300" : "text-gray-700"}`}>
              <Check className="h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
              {f}
            </li>
          ))}
        </ul>
      )}
      {item.meta}
    </>
  );
}

/** Vertical list of numbered/iconed points, used beside a panel in split layouts. */
export function PointList({ items }: { items: { icon?: ReactNode; title: string; desc?: ReactNode }[] }) {
  return (
    <ul className="divide-y divide-gray-200/80 border-y border-gray-200/80">
      {items.map((item, i) => (
        <motion.li
          key={i}
          initial={{ opacity: 0, x: -16 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: i * 0.06, duration: 0.6, ease }}
          className="group flex gap-5 py-6"
        >
          <IconTile icon={item.icon} index={i} />
          <div>
            <h3 className="mb-1.5 text-lg font-semibold text-gray-900" style={{ letterSpacing: "-0.015em" }}>
              {item.title}
            </h3>
            {item.desc && <p className="leading-relaxed text-gray-600">{item.desc}</p>}
          </div>
        </motion.li>
      ))}
    </ul>
  );
}

/** Two-column layout: header + list on the left, a supporting panel on the right. */
export function Split({ left, right, reverse = false }: { left: ReactNode; right: ReactNode; reverse?: boolean }) {
  return (
    <div className="grid items-start gap-12 lg:grid-cols-12 lg:gap-16">
      <Reveal className={`lg:col-span-7 ${reverse ? "lg:order-2" : ""}`}>{left}</Reveal>
      <Reveal delay={0.1} className={`lg:col-span-5 ${reverse ? "lg:order-1" : ""} lg:sticky lg:top-28`}>
        {right}
      </Reveal>
    </div>
  );
}

/** Dark, glowing panel for highlight content (layers, specs, clients…). */
export function DarkPanel({
  title,
  subtitle,
  children,
  footer,
}: {
  title: ReactNode;
  subtitle?: ReactNode;
  children: ReactNode;
  footer?: ReactNode;
}) {
  return (
    <div className="grain relative isolate overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white shadow-2xl shadow-gray-900/20 md:p-10">
      <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red-600/30 blur-[100px]" />
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
      <h3 className="mb-2 text-2xl font-semibold text-white md:text-3xl" style={{ letterSpacing: "-0.03em" }}>
        {title}
      </h3>
      {subtitle && <p className="mb-8 text-gray-400">{subtitle}</p>}
      <div className={subtitle ? "" : "mt-8"}>{children}</div>
      {footer && <div className="mt-8 border-t border-white/10 pt-8">{footer}</div>}
    </div>
  );
}

export function PanelRows({ rows }: { rows: { icon?: ReactNode; label: ReactNode; value?: ReactNode }[] }) {
  return (
    <div className="divide-y divide-white/10">
      {rows.map((r, i) => (
        <div key={i} className="flex items-center justify-between gap-4 py-4 first:pt-0 last:pb-0">
          <div className="flex items-center gap-3 text-gray-300 [&_svg]:h-4 [&_svg]:w-4 [&_svg]:text-red-500">
            {r.icon}
            <span>{r.label}</span>
          </div>
          {r.value && <span className="text-right font-semibold text-white">{r.value}</span>}
        </div>
      ))}
    </div>
  );
}

export function PanelChips({ items, columns = 2 }: { items: string[]; columns?: 2 | 3 }) {
  return (
    <div className={`grid gap-3 ${columns === 3 ? "grid-cols-2 sm:grid-cols-3" : "grid-cols-2"}`}>
      {items.map((c) => (
        <div
          key={c}
          className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-3 text-center text-sm font-medium text-white transition-colors hover:border-red-500/50"
        >
          {c}
        </div>
      ))}
    </div>
  );
}

export function PanelMetric({ items }: { items: { number: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-px overflow-hidden rounded-2xl border border-white/10 bg-white/10">
      {items.map((m, i) => (
        <div key={i} className="bg-gray-950 p-5">
          <div className="text-3xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
            {m.number}
          </div>
          <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-gray-400">{m.label}</div>
        </div>
      ))}
    </div>
  );
}

/** Cards with a short description followed by a checklist. */
export function ChecklistCards({
  items,
  columns = 3,
}: {
  items: { title: string; desc?: ReactNode; items: string[]; icon?: ReactNode }[];
  columns?: 2 | 3 | 4;
}) {
  const cols = { 2: "md:grid-cols-2", 3: "md:grid-cols-3", 4: "sm:grid-cols-2 lg:grid-cols-4" }[columns];
  return (
    <div className={`grid grid-cols-1 gap-5 ${cols}`}>
      {items.map((c, i) => (
        <Reveal key={i} delay={i * 0.06}>
          <div className="premium-card group h-full p-8">
            {isValidElement(c.icon) && (
              <div className="mb-6">
                <IconTile icon={c.icon} index={i} />
              </div>
            )}
            <div className="mb-4 font-mono text-xs tracking-[0.2em] text-red-600">{String(i + 1).padStart(2, "0")}</div>
            <h3 className="mb-3 text-xl font-semibold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
              {c.title}
            </h3>
            {c.desc && <p className="mb-6 leading-relaxed text-gray-600">{c.desc}</p>}
            <ul className="space-y-2.5 border-t border-gray-100 pt-6">
              {c.items.map((it) => (
                <li key={it} className="flex items-center gap-2.5 text-sm text-gray-700">
                  <Check className="h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
                  {it}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      ))}
    </div>
  );
}

/** Numbered process steps on a connecting hairline. */
export function Steps({ items, dark = false }: { items: { title: string; desc?: ReactNode; icon?: ReactNode }[]; dark?: boolean }) {
  const cols = items.length >= 5 ? "lg:grid-cols-5" : items.length === 4 ? "lg:grid-cols-4" : "lg:grid-cols-3";
  return (
    <div className={`relative grid grid-cols-1 gap-10 sm:grid-cols-2 ${cols} lg:gap-6`}>
      <div className={`absolute left-0 right-0 top-6 hidden h-px lg:block ${dark ? "bg-white/10" : "bg-gray-200"}`} />
      {items.map((s, i) => (
        <Reveal key={i} delay={i * 0.08} className="relative">
          <div
            className={`relative mb-6 flex h-12 w-12 items-center justify-center rounded-full border font-mono text-sm ${
              dark ? "border-red-500/40 bg-gray-950 text-red-400" : "border-red-200 bg-white text-red-600 shadow-sm"
            }`}
          >
            {String(i + 1).padStart(2, "0")}
          </div>
          <h3 className={`mb-2 text-lg font-semibold ${dark ? "text-white" : "text-gray-900"}`} style={{ letterSpacing: "-0.015em" }}>
            {s.title}
          </h3>
          {s.desc && <p className={`text-sm leading-relaxed ${dark ? "text-gray-400" : "text-gray-600"}`}>{s.desc}</p>}
        </Reveal>
      ))}
    </div>
  );
}

/** Small pill cloud (technologies, industries, cities…). */
export function TagCloud({ items, dark = false }: { items: string[]; dark?: boolean }) {
  return (
    <div className="flex flex-wrap gap-3">
      {items.map((t) => (
        <span
          key={t}
          className={`rounded-full border px-5 py-2.5 text-sm font-medium transition-colors ${
            dark
              ? "border-white/10 bg-white/[0.04] text-gray-200 hover:border-red-500/50 hover:text-white"
              : "border-gray-200 bg-white text-gray-700 hover:border-red-300 hover:text-red-700"
          }`}
        >
          {t}
        </span>
      ))}
    </div>
  );
}

/** Stat strip for light sections. */
export function StatStrip({ items }: { items: { number: string; label: string }[] }) {
  return (
    <div className="grid grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-gray-200">
      {items.map((s, i) => (
        <Reveal key={i} delay={i * 0.06} className="text-center">
          <div className="mb-2 text-4xl font-semibold text-gray-900 md:text-5xl" style={{ letterSpacing: "-0.04em" }}>
            {s.number}
          </div>
          <div className="text-xs uppercase tracking-[0.18em] text-gray-500">{s.label}</div>
        </Reveal>
      ))}
    </div>
  );
}

/** Common "benefits list beside a dark spec panel" section. */
export function BenefitsPanel({
  eyebrow,
  title,
  items,
  panelTitle,
  panelSubtitle,
  rows,
}: {
  eyebrow: string;
  title: ReactNode;
  items: { icon?: ReactNode; title: string; desc?: ReactNode }[];
  panelTitle: ReactNode;
  panelSubtitle?: ReactNode;
  rows: { icon?: ReactNode; label: ReactNode; value?: ReactNode }[];
}) {
  return (
    <Section tone="muted">
      <Split
        left={
          <>
            <SectionHeader align="left" eyebrow={eyebrow} title={title} className="!mb-8" />
            <PointList items={items} />
          </>
        }
        right={
          <DarkPanel title={panelTitle} subtitle={panelSubtitle}>
            <PanelRows rows={rows} />
          </DarkPanel>
        }
      />
    </Section>
  );
}

/** Pricing plans; the middle plan is highlighted when there are three. */
export function PricingCards({
  plans,
  cta = { label: "Order Now", href: "/Contact-us" },
}: {
  plans: { name: string; specs?: string; price: string; period?: string; features: string[] }[];
  cta?: LinkAction;
}) {
  const featured = plans.length === 3 ? 1 : -1;
  return (
    <div className={`grid grid-cols-1 gap-5 ${plans.length >= 3 ? "lg:grid-cols-3" : "md:grid-cols-2"}`}>
      {plans.map((p, i) => {
        const hot = i === featured;
        return (
          <Reveal key={p.name} delay={i * 0.08}>
            <div
              className={`relative flex h-full flex-col overflow-hidden rounded-[2rem] p-8 md:p-10 ${
                hot
                  ? "grain isolate bg-gray-950 text-white shadow-2xl shadow-red-900/20"
                  : "premium-card"
              }`}
            >
              {hot && (
                <>
                  <div className="absolute -right-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red-600/40 blur-[100px]" />
                  <span className="absolute right-6 top-6 rounded-full bg-red-600 px-3 py-1 font-mono text-[10px] uppercase tracking-[0.2em] text-white">
                    Popular
                  </span>
                </>
              )}
              <h3 className={`mb-2 text-xl font-semibold ${hot ? "text-white" : "text-gray-900"}`}>{p.name}</h3>
              {p.specs && <p className={`mb-8 text-sm ${hot ? "text-gray-400" : "text-gray-500"}`}>{p.specs}</p>}
              <div className="mb-8 flex items-baseline gap-1">
                <span className={`text-4xl font-semibold ${hot ? "text-white" : "text-gray-900"}`} style={{ letterSpacing: "-0.04em" }}>
                  {p.price}
                </span>
                <span className={hot ? "text-gray-400" : "text-gray-500"}>{p.period ?? "/month"}</span>
              </div>
              <ul className={`mb-10 space-y-3 border-t pt-8 ${hot ? "border-white/10" : "border-gray-100"}`}>
                {p.features.map((f) => (
                  <li key={f} className={`flex items-center gap-3 text-sm ${hot ? "text-gray-200" : "text-gray-700"}`}>
                    <Check className="h-4 w-4 flex-shrink-0 text-red-500" strokeWidth={2.5} />
                    {f}
                  </li>
                ))}
              </ul>
              <Link href={cta.href} className={`mt-auto ${hot ? "btn-primary" : "btn-secondary"} group w-full`}>
                {cta.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
            </div>
          </Reveal>
        );
      })}
    </div>
  );
}

/* ------------------------------------------------------------------ */
/* CTA                                                                 */
/* ------------------------------------------------------------------ */

export function CTASection({
  eyebrow = "Get Started",
  title,
  text,
  primary,
  secondary,
}: {
  eyebrow?: string;
  title: ReactNode;
  text?: ReactNode;
  primary: LinkAction;
  secondary?: LinkAction;
}) {
  return (
    <section className="bg-white px-4 py-16 sm:px-6 md:py-24 lg:px-8">
      <Reveal className="container mx-auto">
        <div className="grain relative isolate overflow-hidden rounded-[2.5rem] bg-gray-950 px-8 py-16 text-white md:px-16 md:py-20">
          <div className="hairline-grid absolute inset-0 -z-10" />
          <div className="absolute -bottom-32 -right-32 -z-10 h-[28rem] w-[28rem] rounded-full bg-red-600/35 blur-[120px]" />
          <div className="absolute -left-20 -top-20 -z-10 h-64 w-64 rounded-full bg-red-600/15 blur-[100px]" />

          <div className="grid items-end gap-10 lg:grid-cols-12">
            <div className="lg:col-span-8">
              <Eyebrow label={eyebrow} dark />
              <h2 className="section-title-dark mb-5">{title}</h2>
              {text && <p className="max-w-2xl text-lg leading-relaxed text-gray-400">{text}</p>}
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:col-span-4 lg:flex-col lg:items-end">
              <Link href={primary.href} className="btn-primary group px-8 py-4">
                {primary.label}
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>
              {secondary && (
                <Link href={secondary.href} className="btn-ghost-dark group px-8 py-4">
                  {secondary.label}
                  <ArrowUpRight className="h-4 w-4" />
                </Link>
              )}
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
