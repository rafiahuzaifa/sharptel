"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const verticals = [
  { title: "Government Sector", image: "/background/gov.webp" },
  { title: "Enterprise Sector", image: "/background/enterprise.webp" },
  { title: "Financial Sector", image: "/background/financial.webp" },
  { title: "Small & Medium Enterprise Sector", image: "/background/sme.webp" },
  { title: "Defense Sector", image: "/background/defence.webp" },
];

export default function IndustryVerticals() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-16">
          Industry Verticals We Serve
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {verticals.map((vert, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.08 }}
              className="rounded-3xl overflow-hidden shadow-2xl relative group"
            >
              <Image
                src={vert.image}
                alt={vert.title}
                width={500}
                height={400}
                className="object-cover w-full h-80 transition-transform duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent flex items-end p-8">
                <h3 className="text-2xl md:text-3xl font-bold text-white">{vert.title}</h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}