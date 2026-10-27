"use client";

import Link from "next/link";
import type { ReactNode } from "react";
import { ArrowLeft, ArrowRight, Check, FileText, Users, type LucideIcon } from "lucide-react";
import { Accent, CTASection, PageHero, Reveal } from "./index";

export type DetailFeature = { icon: LucideIcon; title: string; description: string };
export type DetailOption = { title: string; description?: string; features: string[] };
export type DetailRow = { label: string; value: string };

/*
 * Layout shared by the /pages/services/* detail pages: hero, a main column
 * (overview + feature grid + option cards) and a sticky sidebar.
 */
export default function ServiceDetail({
  name,
  eyebrow,
  title,
  accent,
  subtitle,
  image,
  stats,
  overview,
  featuresTitle = "Key Features",
  features,
  optionsTitle,
  options,
  benefits,
  extra,
  quickInfo,
  idealFor,
  idealForTitle = "Ideal For",
  checklist,
  specsTitle,
  specs,
  resourcesTitle = "Resources",
  resources,
  cta,
}: {
  name: string;
  eyebrow: string;
  title: string;
  accent?: string;
  subtitle: string;
  image: string;
  stats: { number: string; label: string }[];
  overview: ReactNode[];
  featuresTitle?: string;
  features: DetailFeature[];
  optionsTitle: string;
  options?: DetailOption[];
  benefits?: string[];
  extra?: ReactNode;
  quickInfo: DetailRow[];
  idealFor: string[];
  idealForTitle?: string;
  checklist?: { title: string; items: string[] };
  specsTitle?: string;
  specs?: DetailRow[];
  resourcesTitle?: string;
  resources?: string[];
  cta: { title: string; accent: string; text: string };
}) {
  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow={eyebrow}
        title={title}
        accent={accent}
        subtitle={subtitle}
        image={image}
        stats={stats}
        breadcrumbs={[
          { label: "Home", href: "/" },
          { label: "Services", href: "/pages/services" },
          { label: name, href: "#" },
        ]}
        actions={{
          primary: { label: "Get Quote", href: "/Contact-us" },
          secondary: { label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" },
        }}
      />

      <section className="relative bg-white py-20 md:py-28">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
            {/* Main column */}
            <div className="space-y-20 lg:col-span-8">
              <Reveal>
                <Label>Service Overview</Label>
                <h2 className="section-title mb-8 !text-4xl md:!text-[2.75rem]">
                  About <Accent>{name}</Accent>
                </h2>
                <div className="space-y-5 text-lg leading-relaxed text-gray-600">
                  {overview.map((p, i) => (
                    <p key={i}>{p}</p>
                  ))}
                </div>
              </Reveal>

              <div>
                <Reveal>
                  <Label>{featuresTitle}</Label>
                  <h2 className="section-title mb-10 !text-4xl md:!text-[2.75rem]">
                    What you <Accent>get</Accent>
                  </h2>
                </Reveal>
                <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-gray-200/80 bg-gray-200/80 sm:grid-cols-2">
                  {features.map(({ icon: FIcon, title: t, description }, i) => (
                    <Reveal key={t} delay={(i % 2) * 0.06} className="group bg-white p-7 transition-colors duration-300 hover:bg-red-50/40">
                      <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white transition-colors duration-300 group-hover:bg-red-600">
                        <FIcon className="h-5 w-5" strokeWidth={1.75} />
                      </div>
                      <h3 className="mb-2 text-lg font-semibold text-gray-900">{t}</h3>
                      <p className="text-sm leading-relaxed text-gray-600">{description}</p>
                    </Reveal>
                  ))}
                </div>
              </div>

              <div>
                <Reveal>
                  <Label>{optionsTitle}</Label>
                  <h2 className="section-title mb-10 !text-4xl md:!text-[2.75rem]">{optionsTitle}</h2>
                </Reveal>
                {benefits && (
                  <Reveal>
                    <ul className="grid gap-x-8 sm:grid-cols-2">
                      {benefits.map((b) => (
                        <li key={b} className="flex items-start gap-3 border-b border-gray-100 py-4 text-gray-800">
                          <Check className="mt-1 h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </Reveal>
                )}
                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {options?.map((o, i) => (
                    <Reveal key={o.title} delay={(i % 2) * 0.06}>
                      <div className="premium-card h-full p-7">
                        <div className="mb-4 font-mono text-xs tracking-[0.2em] text-red-600">{String(i + 1).padStart(2, "0")}</div>
                        <h3 className="mb-2 text-xl font-semibold text-gray-900" style={{ letterSpacing: "-0.02em" }}>
                          {o.title}
                        </h3>
                        {o.description && <p className="mb-5 text-gray-600">{o.description}</p>}
                        <ul className="space-y-2.5 border-t border-gray-100 pt-5">
                          {o.features.map((f) => (
                            <li key={f} className="flex items-start gap-2.5 text-sm text-gray-700">
                              <Check className="mt-0.5 h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
                              {f}
                            </li>
                          ))}
                        </ul>
                      </div>
                    </Reveal>
                  ))}
                </div>
              </div>

              {extra}
            </div>

            {/* Sidebar */}
            <aside className="lg:col-span-4">
              <div className="space-y-5 lg:sticky lg:top-28">
                <div className="grain relative isolate overflow-hidden rounded-[2rem] bg-gray-950 p-8 text-white">
                  <div className="absolute -right-16 -top-16 -z-10 h-56 w-56 rounded-full bg-red-600/30 blur-[90px]" />
                  <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-red-500 to-transparent" />
                  <h3 className="mb-6 text-xl font-semibold text-white">Quick Overview</h3>
                  <Rows rows={quickInfo} dark />
                  <Link href="/Contact-us" className="btn-primary group mt-8 w-full">
                    Get Quote
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </div>

                <div className="premium-card p-7">
                  <h3 className="mb-5 flex items-center gap-2.5 text-lg font-semibold text-gray-900">
                    <Users className="h-5 w-5 text-red-600" /> {idealForTitle}
                  </h3>
                  <div className="flex flex-wrap gap-2">
                    {idealFor.map((x) => (
                      <span key={x} className="rounded-full border border-gray-200 px-3 py-1.5 text-sm text-gray-700">
                        {x}
                      </span>
                    ))}
                  </div>
                </div>

                {checklist && (
                  <div className="premium-card p-7">
                    <h3 className="mb-4 text-lg font-semibold text-gray-900">{checklist.title}</h3>
                    <ul className="grid grid-cols-1 gap-2.5">
                      {checklist.items.map((x) => (
                        <li key={x} className="flex items-center gap-2.5 text-sm text-gray-700">
                          <Check className="h-4 w-4 flex-shrink-0 text-red-600" strokeWidth={2.5} />
                          {x}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {specs && specs.length > 0 && (
                  <div className="premium-card p-7">
                    <h3 className="mb-5 text-lg font-semibold text-gray-900">{specsTitle}</h3>
                    <Rows rows={specs} />
                  </div>
                )}

                {resources && resources.length > 0 && (
                  <div className="premium-card p-7">
                    <h3 className="mb-4 flex items-center gap-2.5 text-lg font-semibold text-gray-900">
                      <FileText className="h-5 w-5 text-red-600" /> {resourcesTitle}
                    </h3>
                    <div className="divide-y divide-gray-100">
                      {resources.map((r) => (
                        <Link
                          key={r}
                          href="/Contact-us"
                          className="group flex items-center justify-between py-3 text-sm text-gray-700 hover:text-red-600"
                        >
                          {r}
                          <ArrowRight className="h-4 w-4 text-gray-300 transition-all group-hover:translate-x-1 group-hover:text-red-600" />
                        </Link>
                      ))}
                    </div>
                    <p className="mt-3 text-xs text-gray-400">Request any document from our team.</p>
                  </div>
                )}
              </div>
            </aside>
          </div>

          <div className="mt-16 border-t border-gray-100 pt-8">
            <Link href="/pages/services" className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-600">
              <ArrowLeft className="h-4 w-4 transition-transform group-hover:-translate-x-1" />
              Back to All Services
            </Link>
          </div>
        </div>
      </section>

      <CTASection
        title={
          <>
            {cta.title} <Accent>{cta.accent}</Accent>
          </>
        }
        text={cta.text}
        primary={{ label: "Get Free Consultation", href: "/Contact-us" }}
        secondary={{ label: "Call +92-311-128-4373", href: "tel:+92-311-128-4373" }}
      />
    </div>
  );
}

function Label({ children }: { children: ReactNode }) {
  return (
    <div className="mb-4 inline-flex items-center gap-3">
      <span className="h-px w-8 bg-red-600" />
      <span className="font-mono text-[11px] font-medium uppercase tracking-[0.25em] text-red-600">{children}</span>
    </div>
  );
}

function Rows({ rows, dark = false }: { rows: DetailRow[]; dark?: boolean }) {
  return (
    <dl className={`divide-y ${dark ? "divide-white/10" : "divide-gray-100"}`}>
      {rows.map((r) => (
        <div key={r.label} className="flex items-center justify-between gap-4 py-3 first:pt-0 last:pb-0">
          <dt className={`text-sm ${dark ? "text-gray-400" : "text-gray-500"}`}>{r.label}</dt>
          <dd className={`text-right text-sm font-semibold ${dark ? "text-white" : "text-gray-900"}`}>{r.value}</dd>
        </div>
      ))}
    </dl>
  );
}
