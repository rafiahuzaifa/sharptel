"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Landmark, Banknote, Store, Shield } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { SiteContent } from "@/lib/content";

// Icons are fixed per card position; text/image content comes from admin-managed props.
const icons = [Landmark, Building2, Banknote, Store, Shield];

interface IndustryVerticalsProps {
  industries: SiteContent["industries"];
}

export default function IndustryVerticals({ industries: verticals }: IndustryVerticalsProps) {
  return (
    <section className="bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="mb-14 grid items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <Eyebrow label="Industries" />
            <h2 className="section-title">
              Industry <span className="accent">verticals</span> we serve
            </h2>
          </div>
          <p className="section-lead lg:col-span-5">
            Tailored solutions for diverse sectors across Pakistan and beyond.
          </p>
        </motion.div>

        {/* Bento: first two items wide, the rest in thirds */}
        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-6">
          {verticals.map((vert, idx) => {
            const Icon = icons[idx % icons.length];
            const wide = idx < 2;
            return (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                className={`group relative overflow-hidden rounded-3xl bg-gray-900 ${
                  wide ? "h-80 lg:col-span-3 lg:h-[26rem]" : "h-80 lg:col-span-2"
                } ${idx === verticals.length - 1 && verticals.length % 2 === 1 ? "md:col-span-2" : ""}`}
              >
                <Image
                  src={vert.image}
                  alt={vert.title}
                  fill
                  className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-105"
                  sizes={wide ? "(max-width: 1024px) 100vw, 50vw" : "(max-width: 1024px) 100vw, 33vw"}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/40 to-transparent" />
                <div className="absolute inset-0 bg-gradient-to-t from-red-950/80 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

                <div className="absolute left-6 top-6 flex h-11 w-11 items-center justify-center rounded-xl border border-white/20 bg-white/10 text-white backdrop-blur-md transition-colors duration-300 group-hover:border-red-500 group-hover:bg-red-600">
                  <Icon className="h-5 w-5" strokeWidth={1.75} />
                </div>

                <div className="absolute inset-x-0 bottom-0 p-6 md:p-8">
                  <h3 className="mb-2 text-2xl font-semibold text-white" style={{ letterSpacing: "-0.02em" }}>
                    {vert.title}
                  </h3>
                  <p className="max-w-md text-sm leading-relaxed text-gray-300 transition-colors duration-300 group-hover:text-white">
                    {vert.desc}
                  </p>
                  <div className="mt-5 h-0.5 w-10 rounded-full bg-red-500 transition-all duration-500 group-hover:w-24" />
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
