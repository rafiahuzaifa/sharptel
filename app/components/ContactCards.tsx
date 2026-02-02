"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-900 to-indigo-950 text-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-16">
          Reach Us
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Email Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card p-10 rounded-3xl text-center border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-primary/30 transition-all duration-400"
          >
            <Mail className="w-14 h-14 text-primary-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Email Us</h3>
            <div className="space-y-3 text-lg">
              <p>Customer Care: info@sharptel.pk</p>
              <p>Support: servicedesk@sharptel.pk</p>
              <p>Careers: careers@sharptel.pk</p>
            </div>
          </motion.div>

          {/* Phone Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card p-10 rounded-3xl text-center border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-primary/30 transition-all duration-400"
          >
            <Phone className="w-14 h-14 text-primary-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Call Us</h3>
            <div className="space-y-3 text-lg">
              <p>Sales: +92-311-1123104</p>
              <p>Sales: +92-311-1123105</p>
              <p>Support: +92-311-128-4373</p>
            </div>
          </motion.div>

          {/* Offices Card */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.05, y: -10 }}
            className="glass-card p-10 rounded-3xl text-center border border-white/20 bg-white/10 backdrop-blur-xl shadow-2xl hover:shadow-primary/30 transition-all duration-400"
          >
            <MapPin className="w-14 h-14 text-primary-400 mx-auto mb-6" />
            <h3 className="text-2xl font-bold mb-6">Our Offices</h3>
            <div className="space-y-4 text-lg">
              <p><strong>Head Office (Karachi):</strong> DHA Phase VIII</p>
              <p><strong>Islamabad:</strong> F-8 Markaz</p>
              <p><strong>Lahore:</strong> Main Boulevard</p>
              <p><strong>AJK:</strong> Mirpur</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}