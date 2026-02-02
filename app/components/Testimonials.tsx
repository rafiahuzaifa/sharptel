"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    quote: "SharpTel provides professional & accommodating service as a best source for all of the information you are looking for. Technician are skilled, knowledgeable & friendly. We find SharpTel as the best deal for the service received.",
    author: "Mr. Naghman Ahsan",
    position: "Technical Manager - ETIHAD LUBE OIL COMPANY (PVT) LTD.",
  },
  {
    quote: "Dear SharpTel Team, I wanted to let you know how much I appreciated your help and support with the different projects. I know how much time and effort the team invested... You are a valued member of our company team.",
    author: "Mr. Kashif Rehman",
    position: "Manager Admin - Rozee.pk",
  },
  {
    quote: "I am pleased to recommend the internet services provided by Sharp Telecom (Pvt) Ltd. The speed service is excellent and the best in the market. We have had no complaints in the last one year.",
    author: "Mr. Syed Faraz Ali",
    position: "AVP - Al-Baraka Bank Pakistan",
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center gradient-text mb-16">
          Customer Feedback
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05, y: -10 }}
              className="glass-card p-8 rounded-3xl shadow-xl border border-gray-100/50 bg-white/70 backdrop-blur-xl hover:shadow-primary/25 transition-all duration-400"
            >
              <p className="text-gray-700 italic text-lg mb-6 leading-relaxed">
                "{t.quote}"
              </p>
              <div>
                <h4 className="font-bold text-gray-900">{t.author}</h4>
                <p className="text-gray-600 text-sm">{t.position}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}