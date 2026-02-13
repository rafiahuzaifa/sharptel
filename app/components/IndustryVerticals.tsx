"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Building2, Landmark, Banknote, Store, Shield } from "lucide-react";

const verticals = [
  {
    title: "Government Sector",
    desc: "Secure infrastructure & digital transformation for public institutions.",
    image: "/background/gov.webp",
    icon: Landmark,
  },
  {
    title: "Enterprise Sector",
    desc: "Scalable connectivity & IT solutions for large corporations.",
    image: "/background/enterprise.webp",
    icon: Building2,
  },
  {
    title: "Financial Sector",
    desc: "Compliant, high-security networks for banks & financial services.",
    image: "/background/financial.webp",
    icon: Banknote,
  },
  {
    title: "Small & Medium Enterprise",
    desc: "Affordable, reliable tech solutions tailored for growing businesses.",
    image: "/background/sme.webp",
    icon: Store,
  },
  {
    title: "Defense Sector",
    desc: "Mission-critical communications & encrypted secure networks.",
    image: "/background/defence.webp",
    icon: Shield,
  },
];

export default function IndustryVerticals() {
  return (
    <section className="py-20 md:py-28 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-5">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-600">Industries</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            Industry Verticals We Serve
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Tailored solutions for diverse sectors across Pakistan and beyond.
          </p>
        </motion.div>

        {/* Top row: 3 items */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 mb-6 md:mb-8">
          {verticals.slice(0, 3).map((vert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/10 relative cursor-pointer transition-all duration-500"
            >
              <div className="relative h-64 md:h-72">
                <Image
                  src={vert.image}
                  alt={vert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-red-900/80 group-hover:via-red-900/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-600/80 transition-all duration-300">
                      <vert.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{vert.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-13">
                    {vert.desc}
                  </p>
                  <div className="h-1 w-12 bg-red-500 rounded-full mt-3 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom row: 2 items centered */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-4xl mx-auto">
          {verticals.slice(3).map((vert, idx) => (
            <motion.div
              key={idx + 3}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (idx + 3) * 0.1 }}
              whileHover={{ y: -8 }}
              className="group rounded-2xl md:rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-red-500/10 relative cursor-pointer transition-all duration-500"
            >
              <div className="relative h-64 md:h-72">
                <Image
                  src={vert.image}
                  alt={vert.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent group-hover:from-red-900/80 group-hover:via-red-900/30 transition-all duration-500" />
                <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
                  <div className="flex items-center gap-3 mb-2">
                    <div className="w-10 h-10 rounded-xl bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:bg-red-600/80 transition-all duration-300">
                      <vert.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="text-xl md:text-2xl font-bold text-white">{vert.title}</h3>
                  </div>
                  <p className="text-gray-300 text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300 ml-13">
                    {vert.desc}
                  </p>
                  <div className="h-1 w-12 bg-red-500 rounded-full mt-3 group-hover:w-20 transition-all duration-500" />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
