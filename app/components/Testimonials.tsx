"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight, Star } from "lucide-react";

const testimonials = [
  {
    quote: "SharpTel provides professional & accommodating service as a best source for all of the information you are looking for. Technician are skilled, knowledgeable & friendly. We find SharpTel as the best deal for the service received.",
    author: "Mr. Naghman Ahsan",
    position: "Technical Manager",
    company: "ETIHAD LUBE OIL COMPANY (PVT) LTD.",
    rating: 5,
  },
  {
    quote: "Dear SharpTel Team, I wanted to let you know how much I appreciated your help and support with the different projects. I know how much time and effort the team invested... You are a valued member of our company team.",
    author: "Mr. Kashif Rehman",
    position: "Manager Admin",
    company: "Rozee.pk",
    rating: 5,
  },
  {
    quote: "I am pleased to recommend the internet services provided by Sharp Telecom (Pvt) Ltd. The speed service is excellent and the best in the market. We have had no complaints in the last one year.",
    author: "Mr. Syed Faraz Ali",
    position: "AVP",
    company: "Al-Baraka Bank Pakistan",
    rating: 5,
  },
];

export default function TestimonialsSection() {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 6000);
    return () => clearInterval(timer);
  }, []);

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % testimonials.length);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 300 : -300, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -300 : 300, opacity: 0 }),
  };

  return (
    <section className="py-20 md:py-28 bg-gradient-to-b from-white to-gray-50 relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute top-10 right-10 w-72 h-72 bg-red-50 rounded-full blur-3xl opacity-40" />
      <div className="absolute bottom-10 left-10 w-64 h-64 bg-red-50 rounded-full blur-3xl opacity-30" />

      <div className="container mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-5">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-600">Testimonials</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
            What Our Clients Say
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Trusted by leading enterprises across Pakistan and beyond.
          </p>
        </motion.div>

        {/* Carousel */}
        <div className="max-w-4xl mx-auto relative">
          {/* Navigation Arrows */}
          <button
            onClick={goPrev}
            className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-14 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all group"
          >
            <ChevronLeft className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
          </button>
          <button
            onClick={goNext}
            className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-14 z-20 w-12 h-12 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center hover:bg-red-50 hover:border-red-200 transition-all group"
          >
            <ChevronRight className="w-5 h-5 text-gray-600 group-hover:text-red-600" />
          </button>

          {/* Testimonial Card */}
          <div className="overflow-hidden rounded-2xl md:rounded-3xl">
            <AnimatePresence mode="wait" custom={direction}>
              <motion.div
                key={current}
                custom={direction}
                variants={variants}
                initial="enter"
                animate="center"
                exit="exit"
                transition={{ duration: 0.4, ease: "easeInOut" }}
                className="bg-white p-8 md:p-12 rounded-2xl md:rounded-3xl border border-gray-100 shadow-xl"
              >
                {/* Stars */}
                <div className="flex gap-1 mb-6">
                  {[...Array(testimonials[current].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  ))}
                </div>

                {/* Quote */}
                <div className="relative mb-8">
                  <svg className="absolute -top-4 -left-2 w-12 h-12 text-red-100" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
                  </svg>
                  <p className="text-gray-700 text-lg md:text-xl leading-relaxed pl-8">
                    &ldquo;{testimonials[current].quote}&rdquo;
                  </p>
                </div>

                {/* Author */}
                <div className="flex items-center gap-4 pt-6 border-t border-gray-100">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-red-500 to-red-700 flex items-center justify-center text-white font-bold text-xl shadow-lg">
                    {testimonials[current].author.charAt(0)}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-lg">{testimonials[current].author}</h4>
                    <p className="text-gray-500">{testimonials[current].position}</p>
                    <p className="text-red-600 text-sm font-semibold">{testimonials[current].company}</p>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-3 mt-8">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goTo(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === current
                    ? "w-8 h-3 bg-red-600"
                    : "w-3 h-3 bg-gray-300 hover:bg-red-300"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
