"use client";

import { motion } from "framer-motion";
import { Mail, Phone, MapPin, ArrowRight, Clock } from "lucide-react";
import Link from "next/link";

interface ContactItem {
  label: string;
  value: string;
  href?: string;
}

const contactCards: { icon: typeof Mail; title: string; subtitle: string; items: ContactItem[] }[] = [
  {
    icon: Mail,
    title: "Email Us",
    subtitle: "We respond within 24 hours",
    items: [
      { label: "Customer Care", value: "info@sharptel.pk", href: "mailto:info@sharptel.pk" },
      { label: "Support", value: "servicedesk@sharptel.pk", href: "mailto:servicedesk@sharptel.pk" },
      { label: "Careers", value: "careers@sharptel.pk", href: "mailto:careers@sharptel.pk" },
    ],
  },
  {
    icon: Phone,
    title: "Call Us",
    subtitle: "Available 24/7 for support",
    items: [
      { label: "Sales", value: "+92-311-1123104", href: "tel:+923111123104" },
      { label: "Sales", value: "+92-311-1123105", href: "tel:+923111123105" },
      { label: "Support", value: "+92-311-128-4373", href: "tel:+923111284373" },
    ],
  },
  {
    icon: MapPin,
    title: "Our Offices",
    subtitle: "Pan-Pakistan presence",
    items: [
      { label: "Head Office (Karachi)", value: "DHA Phase VIII" },
      { label: "Islamabad", value: "F-8 Markaz" },
      { label: "Lahore", value: "Main Boulevard" },
      { label: "AJK", value: "Mirpur" },
    ],
  },
];

export default function ContactSection() {
  return (
    <section className="py-20 md:py-28 bg-gradient-to-br from-gray-900 via-red-950 to-gray-900 text-white relative overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/5 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-80 h-80 bg-red-500/5 rounded-full blur-3xl" />
        {/* Grid pattern */}
        <div
          className="absolute inset-0 opacity-5"
          style={{
            backgroundImage: `linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-white/10 rounded-full px-4 py-2 mb-5">
            <div className="h-2 w-2 bg-red-400 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-300">Get In Touch</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-4">
            Reach <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-300">Us Anytime</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We are always ready to help. Reach out to us through any of the channels below.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {contactCards.map((card, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.15 }}
              whileHover={{ y: -8 }}
              className="glass-card-dark p-8 md:p-10 rounded-2xl md:rounded-3xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="inline-flex items-center justify-center w-14 h-14 rounded-2xl bg-gradient-to-br from-red-600 to-red-700 shadow-lg shadow-red-600/20">
                  <card.icon className="w-6 h-6 text-white" />
                </div>
                <div>
                  <h3 className="text-xl font-bold text-white">{card.title}</h3>
                  <p className="text-gray-400 text-sm">{card.subtitle}</p>
                </div>
              </div>

              <div className="space-y-4">
                {card.items.map((item, i) => (
                  <div key={i} className="flex items-center justify-between group/item">
                    <span className="text-gray-400 text-sm">{item.label}</span>
                    {item.href ? (
                      <Link href={item.href} className="text-white hover:text-red-300 transition-colors font-medium text-sm">
                        {item.value}
                      </Link>
                    ) : (
                      <span className="text-white font-medium text-sm">{item.value}</span>
                    )}
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Business Hours + CTA */}
        <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 items-center max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 glass-card-dark p-6 rounded-2xl"
          >
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-red-600 to-red-700 flex items-center justify-center flex-shrink-0">
              <Clock className="w-5 h-5 text-white" />
            </div>
            <div>
              <h4 className="font-bold text-white">Business Hours</h4>
              <p className="text-gray-400 text-sm">Monday - Saturday: 9:00 AM - 6:00 PM</p>
              <p className="text-red-400 text-sm font-medium">Support: 24/7 Available</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-center md:text-right"
          >
            <Link
              href="/Contact-us"
              className="inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-red-600 to-red-700 text-white font-bold rounded-xl hover:from-red-700 hover:to-red-800 transition-all duration-300 shadow-lg shadow-red-600/20 hover:shadow-xl hover:shadow-red-600/30 group"
            >
              Contact Us
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
