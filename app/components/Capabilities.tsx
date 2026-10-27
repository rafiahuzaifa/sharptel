"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, Cpu, Shield, Zap } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { SiteContent } from "@/lib/content";

// Icon is fixed per card position; text content comes from admin-managed props.
const icons = [Globe, Users, Award, Cpu, Shield, Zap];

interface CapabilitiesProps {
  capabilities: SiteContent["capabilities"];
}

export default function CapabilitiesSection({ capabilities }: CapabilitiesProps) {
  return (
    <section className="grain relative isolate overflow-hidden bg-gray-950 py-24 text-white md:py-32">
      <div className="hairline-grid absolute inset-0 -z-10" />
      <div className="absolute -top-40 right-0 -z-10 h-[30rem] w-[30rem] rounded-full bg-red-600/20 blur-[140px]" />

      <div className="container relative mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-16 grid items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <Eyebrow label="Why Choose Us" dark />
            <h2 className="section-title-dark">
              Capabilities that <span className="accent">scale</span> with you
            </h2>
          </div>
          <p className="text-base leading-relaxed text-gray-400 md:text-lg lg:col-span-5">
            Delivering excellence through expertise, partnerships, and nationwide presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-px overflow-hidden rounded-3xl border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((cap, idx) => {
            const Icon = icons[idx % icons.length];
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.6 }}
                className="group relative overflow-hidden bg-gray-950 p-8 transition-colors duration-500 hover:bg-gray-900 md:p-10"
              >
                {/* Hover glow */}
                <div className="pointer-events-none absolute -right-24 -top-24 h-56 w-56 rounded-full bg-red-600/0 blur-3xl transition-all duration-700 group-hover:bg-red-600/25" />

                <div className="relative">
                  <div className="mb-10 flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-white/[0.03] text-red-500 transition-all duration-500 group-hover:border-red-500/50 group-hover:bg-red-600 group-hover:text-white">
                      <Icon className="h-5 w-5" strokeWidth={1.75} />
                    </div>
                    <span className="font-mono text-xs tracking-[0.2em] text-gray-600">
                      {String(idx + 1).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="mb-1 text-4xl font-semibold text-white" style={{ letterSpacing: "-0.04em" }}>
                    {cap.stat}
                  </div>
                  <div className="mb-8 text-[11px] uppercase tracking-[0.18em] text-red-400/80">{cap.statLabel}</div>

                  <h3 className="mb-3 text-xl font-semibold text-white" style={{ letterSpacing: "-0.02em" }}>
                    {cap.title}
                  </h3>
                  <p className="leading-relaxed text-gray-400">{cap.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
