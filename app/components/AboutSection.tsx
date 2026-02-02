"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-8">
              About SharpTel
            </h2>

            <p className="text-lg text-gray-700 leading-relaxed mb-8">
              SharpTel services are vital to the successful implementation and integration of technology-related projects. SharpTel has a vision of indulging our customers with a diversified portfolio of Software Services, Connectivity, Data Center and Colocation, Information Security, IT Security, automation services through state-of-the-art technology solutions.
            </p>

            <div className="space-y-8">
              <div className="bg-gradient-to-r from-primary-50 to-red-50 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Vision</h3>
                <p className="text-gray-700 text-lg">
                  To provide quality services that exceeds the expectations of our esteemed customers.
                </p>
              </div>

              <div className="bg-gradient-to-r from-primary-50 to-red-50 p-8 rounded-2xl border border-primary/20">
                <h3 className="text-2xl font-bold text-primary-700 mb-4">Our Mission</h3>
                <p className="text-gray-700 text-lg">
                  To empower businesses by providing next generation ICT solutions and services to be used as a competitive advantage.
                </p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 }}
            className="rounded-3xl overflow-hidden shadow-2xl"
          >
            <Image
              src="/images/team.jpg" // Place your team/group photo here
              alt="SharpTel Team"
              width={600}
              height={500}
              className="object-cover w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}