"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";
import Eyebrow from "./Eyebrow";
import type { SiteContent } from "@/lib/content";

interface ContactSectionProps {
  contact: SiteContent["contact"];
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function ContactSection({ contact }: ContactSectionProps) {
  const contactCards = [
    { icon: Mail, title: "Email Us", subtitle: "We respond within 24 hours", items: contact.emails },
    { icon: Phone, title: "Call Us", subtitle: "Available 24/7 for support", items: contact.phones },
    { icon: MapPin, title: "Our Offices", subtitle: "Pan-Pakistan presence", items: contact.offices },
  ];

  return (
    <section className="grain relative isolate overflow-hidden bg-gray-950 py-24 text-white md:py-32">
      <div className="hairline-grid absolute inset-0 -z-10" />
      <div className="absolute left-1/2 top-0 -z-10 h-[28rem] w-[56rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-600/25 blur-[140px]" />

      <div className="container relative mx-auto px-6">
        {/* CTA heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease }}
          className="mb-16 grid items-end gap-10 lg:grid-cols-12"
        >
          <div className="lg:col-span-8">
            <Eyebrow label="Get In Touch" dark />
            <h2 className="section-title-dark">
              Let&apos;s build your <span className="accent">network</span> of tomorrow.
            </h2>
          </div>
          <div className="flex flex-col gap-4 lg:col-span-4 lg:items-end">
            <p className="text-gray-400 lg:text-right">
              We are always ready to help. Reach out through any of the channels below.
            </p>
            <Link href="/Contact-us" className="btn-primary group px-8 py-4">
              Contact Us
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-3">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.7, ease }}
              className="group rounded-3xl border border-white/10 bg-white/[0.03] p-8 backdrop-blur-sm transition-all duration-500 hover:border-red-500/40 hover:bg-white/[0.06]"
            >
              <div className="mb-8 flex items-center gap-4">
                <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-red-600 text-white shadow-lg shadow-red-600/30">
                  <card.icon className="h-5 w-5" strokeWidth={1.75} />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white">{card.title}</h3>
                  <p className="text-sm text-gray-500">{card.subtitle}</p>
                </div>
              </div>

              <div className="divide-y divide-white/5">
                {card.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between gap-4 py-3">
                    <span className="text-xs uppercase tracking-[0.12em] text-gray-500">{item.label}</span>
                    {item.href ? (
                      <Link href={item.href} className="text-right text-sm font-medium text-white transition-colors hover:text-red-400">
                        {item.value}
                      </Link>
                    ) : (
                      <span className="text-right text-sm font-medium text-white">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business hours strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, delay: 0.2, ease }}
          className="mt-5 flex flex-col gap-4 rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:flex-row sm:items-center sm:justify-between md:px-8"
        >
          <div className="flex items-center gap-4">
            <Clock className="h-5 w-5 text-red-500" strokeWidth={1.75} />
            <div>
              <span className="font-semibold text-white">Business Hours</span>
              <span className="mx-3 text-gray-600">·</span>
              <span className="text-sm text-gray-400">{contact.businessHours}</span>
            </div>
          </div>
          <div className="flex items-center gap-2 text-sm font-medium text-red-400">
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-red-500" />
            {contact.supportAvailability}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
