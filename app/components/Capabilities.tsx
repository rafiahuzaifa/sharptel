"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, Cpu, Shield, Zap } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Global Presence",
    desc: "International clients, satisfied global clientele, swift reply & well-trained professionals.",
    color: "from-red-500 to-red-700",
    stat: "15+",
    statLabel: "Countries",
  },
  {
    icon: Users,
    title: "Skilled Resources",
    desc: "Qualified project managers, certified engineers & industry-specific knowledge.",
    color: "from-red-600 to-red-800",
    stat: "200+",
    statLabel: "Engineers",
  },
  {
    icon: Award,
    title: "Technology Partners",
    desc: "Multiple technology partners, training & certification by manufacturers, implementation support.",
    color: "from-red-500 to-red-700",
    stat: "50+",
    statLabel: "Partners",
  },
  {
    icon: Cpu,
    title: "Local Presence",
    desc: "Presence across Pakistan, fully staffed project office at site.",
    color: "from-red-600 to-red-800",
    stat: "4+",
    statLabel: "Cities",
  },
  {
    icon: Shield,
    title: "Security First",
    desc: "Enterprise-grade security solutions with ISO-compliant infrastructure and 24/7 monitoring.",
    color: "from-red-500 to-red-700",
    stat: "99.9%",
    statLabel: "Uptime",
  },
  {
    icon: Zap,
    title: "Fast Deployment",
    desc: "Rapid project execution with agile methodologies and dedicated project management teams.",
    color: "from-red-600 to-red-800",
    stat: "48hr",
    statLabel: "Response",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50 to-white relative overflow-hidden">
      {/* Background decorative */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-50 -translate-y-1/2 translate-x-1/2" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-red-50 rounded-full blur-3xl opacity-50 translate-y-1/2 -translate-x-1/2" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-5">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-600">Why Choose Us</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Our Capabilities
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Delivering excellence through expertise, partnerships, and nationwide presence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              whileHover={{ y: -8 }}
              className="group bg-white p-8 rounded-2xl md:rounded-3xl border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 hover:border-red-100 transition-all duration-500 relative overflow-hidden"
            >
              {/* Hover gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-100/0 group-hover:from-red-50/50 group-hover:to-red-100/30 transition-all duration-500 rounded-3xl" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-6">
                  <div className={`inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br ${cap.color} shadow-lg shadow-red-600/20 group-hover:scale-110 transition-transform duration-300`}>
                    <cap.icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-red-600">{cap.stat}</div>
                    <div className="text-xs text-gray-400 uppercase tracking-wider">{cap.statLabel}</div>
                  </div>
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-red-600 transition-colors">
                  {cap.title}
                </h3>
                <p className="text-gray-600 leading-relaxed">{cap.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
