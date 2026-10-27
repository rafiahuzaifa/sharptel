"use client"

import { motion } from "framer-motion"
import { MapPin, Building, Users, Globe } from "lucide-react"
import {
  Accent,
  CTASection,
  DarkPanel,
  PageHero,
  PointList,
  Reveal,
  Section,
  SectionHeader,
  Split,
} from "@/app/components/premium"

type Status = "full" | "partial" | "soon"

// Approximate geographic placement on an 800x600 canvas (north at top).
const mapCities: { name: string; x: number; y: number; status: Status }[] = [
  { name: "Islamabad", x: 520, y: 135, status: "full" },
  { name: "Rawalpindi", x: 538, y: 160, status: "full" },
  { name: "Peshawar", x: 430, y: 120, status: "soon" },
  { name: "Sialkot", x: 640, y: 205, status: "soon" },
  { name: "Gujranwala", x: 610, y: 235, status: "soon" },
  { name: "Lahore", x: 635, y: 275, status: "full" },
  { name: "Sargodha", x: 515, y: 235, status: "soon" },
  { name: "Faisalabad", x: 560, y: 290, status: "partial" },
  { name: "Multan", x: 470, y: 355, status: "partial" },
  { name: "Bahawalpur", x: 505, y: 400, status: "soon" },
  { name: "Quetta", x: 250, y: 330, status: "soon" },
  { name: "Karachi", x: 225, y: 520, status: "full" },
]

const backbone = ["Karachi", "Multan", "Faisalabad", "Lahore", "Rawalpindi", "Islamabad"]

function CoverageMap() {
  const byName = Object.fromEntries(mapCities.map((c) => [c.name, c]))
  const path = backbone.map((n, i) => `${i ? "L" : "M"}${byName[n].x},${byName[n].y}`).join(" ")

  return (
    <div className="grain relative isolate overflow-hidden rounded-[2rem] bg-gray-950 p-4 md:p-8">
      <div className="hairline-grid absolute inset-0 -z-10" />
      <div className="absolute left-1/3 top-1/2 -z-10 h-80 w-80 -translate-y-1/2 rounded-full bg-red-600/20 blur-[120px]" />
      <svg viewBox="0 0 800 600" className="h-auto w-full" role="img" aria-label="Sharptel network coverage across Pakistan">
        <motion.path
          d={path}
          fill="none"
          stroke="#dc2626"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          initial={{ pathLength: 0, opacity: 0 }}
          whileInView={{ pathLength: 1, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 2.2, ease: "easeInOut" }}
        />
        {mapCities
          .filter((c) => c.status !== "full")
          .map((c) => (
            <line
              key={`l-${c.name}`}
              x1={c.x}
              y1={c.y}
              x2={byName.Lahore.x}
              y2={byName.Lahore.y}
              stroke="rgba(255,255,255,0.12)"
              strokeDasharray="4 6"
            />
          ))}
        {mapCities.map((c, i) => {
          const fill = c.status === "full" ? "#ef4444" : c.status === "partial" ? "#fca5a5" : "#6b7280"
          return (
            <motion.g
              key={c.name}
              initial={{ opacity: 0, scale: 0.6 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + i * 0.07, duration: 0.5 }}
              style={{ transformOrigin: `${c.x}px ${c.y}px` }}
            >
              {c.status === "full" && (
                <circle cx={c.x} cy={c.y} r="18" fill="#ef4444" opacity="0.18">
                  <animate attributeName="r" values="10;24;10" dur="3s" repeatCount="indefinite" />
                  <animate attributeName="opacity" values="0.35;0;0.35" dur="3s" repeatCount="indefinite" />
                </circle>
              )}
              <circle cx={c.x} cy={c.y} r={c.status === "full" ? 7 : 5} fill={fill} stroke="#030712" strokeWidth="2" />
              <text
                x={c.x + 12}
                y={c.y + 4}
                fill={c.status === "soon" ? "#9ca3af" : "#f9fafb"}
                fontSize="14"
                fontWeight="500"
                fontFamily="inherit"
              >
                {c.name}
              </text>
            </motion.g>
          )
        })}
      </svg>

      <div className="mt-2 flex flex-wrap justify-center gap-6 text-sm text-gray-300">
        {[
          { label: "Full Coverage", color: "bg-red-500" },
          { label: "Partial Coverage", color: "bg-red-300" },
          { label: "Expanding Soon", color: "bg-gray-500" },
        ].map((l) => (
          <span key={l.label} className="flex items-center gap-2">
            <span className={`h-2.5 w-2.5 rounded-full ${l.color}`} />
            {l.label}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function ClientCoverageAreaPage() {
  const majorCities = [
    { name: "Karachi", type: "Full Coverage", services: ["Fiber Optic", "Wireless", "Enterprise"] },
    { name: "Lahore", type: "Full Coverage", services: ["Fiber Optic", "Wireless", "Enterprise"] },
    { name: "Islamabad", type: "Full Coverage", services: ["Fiber Optic", "Wireless", "Enterprise"] },
    { name: "Faisalabad", type: "Partial Coverage", services: ["Wireless", "Enterprise"] },
    { name: "Rawalpindi", type: "Full Coverage", services: ["Fiber Optic", "Wireless"] },
    { name: "Multan", type: "Partial Coverage", services: ["Wireless", "Enterprise"] }
  ]

  const upcomingCities = ["Gujranwala", "Sialkot", "Bahawalpur", "Sargodha", "Quetta", "Peshawar"]

  return (
    <div className="bg-white text-gray-800">
      <PageHero
        eyebrow="Nationwide Coverage"
        title="Coverage"
        accent="Areas & Cities"
        subtitle="Serving businesses across Pakistan with extensive network coverage in major cities and continuous expansion to new areas."
        image="/background/connectivity.webp"
        actions={{
          primary: { label: "Check Availability", href: "/Contact-us" },
          secondary: { label: "Call for Coverage Info", href: "tel:+92-311-128-4373" },
        }}
        stats={[
          { number: "50+", label: "Cities Covered" },
          { number: "1000+", label: "Buildings Connected" },
          { number: "24/7", label: "Local Support" },
          { number: "Expanding", label: "Continuously" },
        ]}
      />

      <Section>
        <SectionHeader
          eyebrow="Network Coverage"
          title={<>Our <Accent>coverage</Accent> map</>}
          lead="Extensive network coverage across major cities in Pakistan."
        />
        <Reveal>
          <CoverageMap />
        </Reveal>
      </Section>

      <Section tone="muted">
        <SectionHeader
          eyebrow="Cities"
          title={<>Major <Accent>cities</Accent></>}
          lead="Detailed coverage information for major cities across Pakistan."
        />
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {majorCities.map((city, i) => (
            <Reveal key={city.name} delay={(i % 3) * 0.06}>
              <div className="premium-card group h-full p-8">
                <div className="mb-6 flex items-start justify-between">
                  <div>
                    <h3 className="text-2xl font-semibold text-gray-900" style={{ letterSpacing: "-0.02em" }}>{city.name}</h3>
                    <span
                      className={`mt-2 inline-flex items-center gap-2 rounded-full px-3 py-1 text-xs font-medium ${
                        city.type.startsWith("Full") ? "bg-red-50 text-red-700" : "bg-gray-100 text-gray-600"
                      }`}
                    >
                      <span className={`h-1.5 w-1.5 rounded-full ${city.type.startsWith("Full") ? "bg-red-600" : "bg-gray-400"}`} />
                      {city.type}
                    </span>
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white transition-colors group-hover:bg-red-600">
                    <MapPin className="h-5 w-5" />
                  </div>
                </div>
                <div className="mb-6">
                  <div className="mb-3 text-[11px] uppercase tracking-[0.18em] text-gray-400">Available Services</div>
                  <div className="flex flex-wrap gap-2">
                    {city.services.map((s) => (
                      <span key={s} className="rounded-full border border-gray-200 px-3 py-1 text-sm text-gray-700">
                        {s}
                      </span>
                    ))}
                  </div>
                </div>
                <dl className="grid grid-cols-3 divide-x divide-gray-100 border-t border-gray-100 pt-5 text-center">
                  {[
                    { k: "Support", v: "24/7 Local" },
                    { k: "Uptime", v: "99.9%" },
                    { k: "Response", v: "2 Hours" },
                  ].map((m) => (
                    <div key={m.k}>
                      <dt className="text-[11px] uppercase tracking-[0.12em] text-gray-400">{m.k}</dt>
                      <dd className="mt-1 text-sm font-semibold text-gray-900">{m.v}</dd>
                    </div>
                  ))}
                </dl>
              </div>
            </Reveal>
          ))}
        </div>
      </Section>

      <Section>
        <Split
          left={
            <>
              <SectionHeader
                align="left"
                eyebrow="Expansion"
                title={<>Coming <Accent>soon</Accent></>}
                lead="We are continuously expanding our network coverage to serve more cities across Pakistan. Our expansion plan includes bringing high-speed connectivity to additional urban and semi-urban areas."
                className="!mb-8"
              />
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-3">
                {upcomingCities.map((city, i) => (
                  <div key={city} className="premium-card flex items-center gap-3 p-4">
                    <span className="font-mono text-xs text-red-600">{String(i + 1).padStart(2, "0")}</span>
                    <span className="font-medium text-gray-900">{city}</span>
                  </div>
                ))}
              </div>
            </>
          }
          right={
            <DarkPanel title="Coverage Request" subtitle="Don't see your city? Request coverage expansion for your area.">
              <div className="[&_h3]:text-white [&_p]:text-gray-400 [&_ul]:divide-white/10 [&_ul]:border-white/10">
                <PointList
                  items={[
                    { icon: <Building />, title: "Business District", desc: "Priority coverage for business areas" },
                    { icon: <Users />, title: "Residential Areas", desc: "Expanding to residential communities" },
                    { icon: <Globe />, title: "Industrial Zones", desc: "Coverage for industrial and manufacturing areas" },
                  ]}
                />
              </div>
            </DarkPanel>
          }
        />
      </Section>

      <CTASection
        title={<>Check <Accent>coverage</Accent> in your area</>}
        text="Contact us to check network availability in your specific location and discuss connectivity options for your business."
        primary={{ label: "Check Availability", href: "/Contact-us" }}
        secondary={{ label: "Call for Coverage Info", href: "tel:+92-311-128-4373" }}
      />
    </div>
  )
}
