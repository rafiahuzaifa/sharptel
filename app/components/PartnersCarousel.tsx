"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Eyebrow from "./Eyebrow";

// File names must match public/background exactly — Vercel's filesystem is case-sensitive.
const partners = [
  { name: "Cisco", logo: "/background/cisco.webp" },
  { name: "Microsoft", logo: "/background/microsoft.webp" },
  { name: "Fortinet", logo: "/background/fortinet.webp" },
  { name: "Sangfor", logo: "/background/Sangfor.webp" },
  { name: "Sophos", logo: "/background/Sophos.webp" },
  { name: "Dell", logo: "/background/dell.webp" },
  { name: "HPE", logo: "/background/hpe.webp" },
  { name: "Juniper", logo: "/background/juniper.webp" },
  { name: "Oracle", logo: "/background/oracle.webp" },
  { name: "VMware", logo: "/background/vmware.webp" },
  { name: "Barracuda", logo: "/background/Barracuda.webp" },
  { name: "D-Link", logo: "/background/D-Link.webp" },
];

const stats = [
  { number: "50+", label: "Technology Partners" },
  { number: "100+", label: "Certifications" },
  { number: "24/7", label: "Support Network" },
  { number: "Global", label: "Coverage" },
];

export default function PartnersSection() {
  return (
    <section className="bg-white py-24 md:py-28">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-3xl text-center"
        >
          <Eyebrow label="Technology Partners" />
          <h2 className="section-title mb-5">
            Built with the <span className="accent">best</span> in the industry
          </h2>
          <p className="section-lead">
            Collaborating with global technology leaders to deliver cutting-edge, certified solutions.
          </p>
        </motion.div>
      </div>

      {/* Logo marquee */}
      <div className="marquee relative overflow-hidden border-y border-gray-100 py-10">
        <div className="marquee-track flex w-max items-center">
          {[...partners, ...partners].map((partner, idx) => (
            <div
              key={`${partner.name}-${idx}`}
              aria-hidden={idx >= partners.length ? true : undefined}
              className="group relative mx-6 h-16 w-36 flex-shrink-0 md:mx-10 md:h-20 md:w-44"
            >
              <Image
                src={partner.logo}
                alt={`${partner.name} logo`}
                fill
                className="object-contain opacity-60 grayscale transition-all duration-500 group-hover:opacity-100 group-hover:grayscale-0"
                sizes="(max-width: 768px) 144px, 176px"
              />
            </div>
          ))}
        </div>

        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-16 bg-gradient-to-r from-white to-transparent md:w-40" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-16 bg-gradient-to-l from-white to-transparent md:w-40" />
      </div>

      {/* Stats */}
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          viewport={{ once: true }}
          className="mx-auto mt-16 grid max-w-5xl grid-cols-2 gap-y-10 md:grid-cols-4 md:divide-x md:divide-gray-200"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="text-center">
              <div className="mb-2 text-4xl font-semibold text-gray-900 md:text-5xl" style={{ letterSpacing: "-0.04em" }}>
                {stat.number.replace(/\+$/, "")}
                {stat.number.endsWith("+") && <span className="text-red-600">+</span>}
              </div>
              <div className="text-xs uppercase tracking-[0.18em] text-gray-500">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
