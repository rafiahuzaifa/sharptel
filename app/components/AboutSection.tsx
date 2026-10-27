"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Target, Eye, Check, ArrowRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { SiteContent } from "@/lib/content";

interface AboutSectionProps {
  about: SiteContent["about"];
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function AboutSection({ about }: AboutSectionProps) {
  const highlights = about.highlights;
  const pillars = [
    { icon: Eye, title: "Our Vision", text: about.visionText },
    { icon: Target, title: "Our Mission", text: about.missionText },
  ];

  return (
    <section className="relative overflow-hidden bg-white py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="grid items-center gap-16 lg:grid-cols-12 lg:gap-20">
          {/* Image column */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, ease }}
            className="relative lg:col-span-5"
          >
            <div className="absolute -inset-4 -z-10 rounded-[2.5rem] bg-gradient-to-br from-red-50 to-transparent" />
            <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] shadow-2xl shadow-gray-900/10">
              <Image
                src={about.teamImage}
                alt="SharpTel Team"
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 40vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950/50 via-transparent to-transparent" />
            </div>

            {/* Floating stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4, duration: 0.8, ease }}
              className="absolute -bottom-8 left-6 right-6 grid grid-cols-2 divide-x divide-gray-100 rounded-2xl border border-gray-100 bg-white/95 p-5 shadow-xl shadow-gray-900/10 backdrop-blur-md sm:left-auto sm:right-[-1.5rem] sm:w-80"
            >
              <div className="pr-4">
                <div className="text-3xl font-semibold text-gray-900" style={{ letterSpacing: "-0.04em" }}>
                  {about.yearsExperience}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-gray-500">Years Experience</div>
              </div>
              <div className="pl-5">
                <div className="text-3xl font-semibold text-red-600" style={{ letterSpacing: "-0.04em" }}>
                  {about.happyClients}
                </div>
                <div className="mt-1 text-[11px] uppercase tracking-[0.15em] text-gray-500">Happy Clients</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Copy column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.15, ease }}
            className="lg:col-span-7"
          >
            <Eyebrow label="About Us" />
            <h2 className="section-title mb-8">
              Connecting Pakistan&apos;s enterprises to <span className="accent">what&apos;s next</span>
            </h2>

            <p className="mb-10 text-lg leading-relaxed text-gray-600">{about.paragraph}</p>

            {/* Highlights */}
            <ul className="mb-12 grid grid-cols-1 gap-x-8 sm:grid-cols-2">
              {highlights.map((item, i) => (
                <li key={i} className="flex items-center gap-3 border-b border-gray-100 py-3.5">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-red-600">
                    <Check className="h-3.5 w-3.5 text-white" strokeWidth={3} />
                  </span>
                  <span className="font-medium text-gray-800">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mb-10 grid gap-4 sm:grid-cols-2">
              {pillars.map(({ icon: Icon, title, text }) => (
                <div key={title} className="premium-card group p-6">
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-950 text-white transition-colors duration-300 group-hover:bg-red-600">
                    <Icon className="h-5 w-5" strokeWidth={1.75} />
                  </div>
                  <h3 className="mb-2 text-lg font-semibold text-gray-900">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              ))}
            </div>

            <Link href="/About-us" className="btn-secondary group">
              More about SharpTel
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
