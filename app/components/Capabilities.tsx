"use client";

import { motion } from "framer-motion";
import { Globe, Users, Award, Cpu } from "lucide-react";

const capabilities = [
  {
    icon: Globe,
    title: "Global Presence",
    desc: "International clients, satisfied global clientele, swift reply & well-trained professionals.",
  },
  {
    icon: Users,
    title: "Skilled Resources",
    desc: "Qualified project managers, certified engineers & industry-specific knowledge.",
  },
  {
    icon: Award,
    title: "Technology Partners",
    desc: "Multiple technology partners, training & certification by manufacturers, implementation support.",
  },
  {
    icon: Cpu,
    title: "Local Presence",
    desc: "Presence across Pakistan, fully staffed project office at site.",
  },
];

export default function CapabilitiesSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-16">
          Our Capabilities
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {capabilities.map((cap, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08, y: -10, rotateX: 8 }}
              className="glass-card p-8 rounded-3xl text-center shadow-xl hover:shadow-primary/25 border border-white/30 bg-white/70 backdrop-blur-xl transition-all duration-400"
            >
              <cap.icon className="w-14 h-14 text-primary-600 mx-auto mb-6" />
              <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
              <p className="text-gray-700">{cap.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}