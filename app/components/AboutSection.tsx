"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { Target, Eye, CheckCircle } from "lucide-react";

const highlights = [
  "ISO Certified Operations",
  "24/7 Network Operations Center",
  "Tier-3 Data Center Infrastructure",
  "Pan-Pakistan Coverage",
];

export default function AboutSection() {
  return (
    <section className="py-20 md:py-28 bg-white relative overflow-hidden">
      {/* Decorative background */}
      <div className="absolute top-20 left-0 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-20 right-0 w-96 h-96 bg-red-50 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-5">
              <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
              <span className="text-sm font-semibold text-red-600">About Us</span>
            </div>

            <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-8">
              About SharpTel
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              SharpTel services are vital to the successful implementation and integration of technology-related projects. SharpTel has a vision of indulging our customers with a diversified portfolio of Software Services, Connectivity, Data Center and Colocation, Information Security, IT Security, automation services through state-of-the-art technology solutions.
            </p>

            {/* Highlights */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-8">
              {highlights.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                  className="flex items-center gap-3"
                >
                  <CheckCircle className="w-5 h-5 text-red-500 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </motion.div>
              ))}
            </div>

            <div className="space-y-6">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 }}
                className="bg-gradient-to-r from-red-50 to-red-100/50 p-6 rounded-2xl border border-red-100 group hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Eye className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Vision</h3>
                    <p className="text-gray-700">
                      To provide quality services that exceeds the expectations of our esteemed customers.
                    </p>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="bg-gradient-to-r from-red-50 to-red-100/50 p-6 rounded-2xl border border-red-100 group hover:shadow-lg hover:shadow-red-500/5 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform">
                    <Target className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Our Mission</h3>
                    <p className="text-gray-700">
                      To empower businesses by providing next generation ICT solutions and services to be used as a competitive advantage.
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative"
          >
            <div className="rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/background/team.webp"
                alt="SharpTel Team"
                width={600}
                height={500}
                className="object-cover w-full h-auto"
              />
            </div>

            {/* Floating stats card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 }}
              className="absolute -bottom-6 -left-6 md:-left-10 bg-white p-5 rounded-2xl shadow-xl border border-gray-100"
            >
              <div className="text-3xl font-bold text-red-600">10+</div>
              <div className="text-sm text-gray-500 font-medium">Years Experience</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8 }}
              className="absolute -top-4 -right-4 md:-right-8 bg-gradient-to-br from-red-600 to-red-700 text-white p-5 rounded-2xl shadow-xl"
            >
              <div className="text-3xl font-bold">500+</div>
              <div className="text-sm text-red-100 font-medium">Happy Clients</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
