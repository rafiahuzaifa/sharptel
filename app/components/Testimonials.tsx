"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { ArrowLeft, ArrowRight, Star } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { SiteContent } from "@/lib/content";

interface TestimonialsProps {
  testimonials: SiteContent["testimonials"];
}

const ease = [0.22, 1, 0.36, 1] as const;

export default function TestimonialsSection({ testimonials }: TestimonialsProps) {
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(0);
  const total = testimonials.length;

  // Restarts whenever the slide changes, so manual navigation gets a full 6s before auto-advance.
  useEffect(() => {
    if (total < 2) return;
    const timer = setTimeout(() => {
      setDirection(1);
      setCurrent((prev) => (prev + 1) % total);
    }, 6000);
    return () => clearTimeout(timer);
  }, [current, total]);

  if (total === 0) return null;

  const goTo = (index: number) => {
    setDirection(index > current ? 1 : -1);
    setCurrent(index);
  };

  const goNext = () => {
    setDirection(1);
    setCurrent((prev) => (prev + 1) % total);
  };

  const goPrev = () => {
    setDirection(-1);
    setCurrent((prev) => (prev - 1 + total) % total);
  };

  const variants = {
    enter: (d: number) => ({ x: d > 0 ? 60 : -60, opacity: 0 }),
    center: { x: 0, opacity: 1 },
    exit: (d: number) => ({ x: d > 0 ? -60 : 60, opacity: 0 }),
  };

  const t = testimonials[current];

  return (
    <section className="relative overflow-hidden bg-gray-50 py-24 md:py-32">
      <div className="hairline-grid-light absolute inset-0" />

      <div className="container relative mx-auto px-6">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          {/* Heading + controls */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, ease }}
            className="flex flex-col lg:col-span-4"
          >
            <Eyebrow label="Testimonials" />
            <h2 className="section-title mb-5">
              Trusted by <span className="accent">leaders</span>
            </h2>
            <p className="section-lead mb-10">
              Leading enterprises across Pakistan and beyond rely on SharpTel every day.
            </p>

            <div className="mt-auto flex items-center gap-6">
              <div className="flex gap-3">
                <button
                  onClick={goPrev}
                  aria-label="Previous testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-300 bg-white text-gray-700 transition-all hover:border-gray-900 hover:bg-gray-900 hover:text-white"
                >
                  <ArrowLeft className="h-5 w-5" />
                </button>
                <button
                  onClick={goNext}
                  aria-label="Next testimonial"
                  className="flex h-12 w-12 items-center justify-center rounded-full bg-red-600 text-white transition-all hover:bg-red-700"
                >
                  <ArrowRight className="h-5 w-5" />
                </button>
              </div>
              <span className="font-mono text-sm text-gray-400">
                <span className="text-gray-900">{String(current + 1).padStart(2, "0")}</span> / {String(total).padStart(2, "0")}
              </span>
            </div>
          </motion.div>

          {/* Quote card */}
          <div className="lg:col-span-8">
            <div className="relative overflow-hidden rounded-[2rem] border border-gray-200/70 bg-white shadow-xl shadow-gray-900/5">
              <div className="absolute inset-x-0 top-0 h-1 bg-gradient-to-r from-red-700 via-red-500 to-red-700" />
              <span
                aria-hidden
                className="pointer-events-none absolute -top-6 right-8 select-none font-heading text-[12rem] leading-none text-red-50"
              >
                &rdquo;
              </span>

              <AnimatePresence mode="wait" custom={direction}>
                <motion.div
                  key={current}
                  custom={direction}
                  variants={variants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{ duration: 0.45, ease }}
                  className="relative p-8 md:p-14"
                >
                  <div className="mb-8 flex gap-1">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="h-4 w-4 fill-red-500 text-red-500" />
                    ))}
                  </div>

                  <blockquote
                    className="mb-12 text-xl font-medium leading-snug text-gray-900 md:text-[1.75rem] md:leading-[1.35]"
                    style={{ letterSpacing: "-0.02em" }}
                  >
                    &ldquo;{t.quote}&rdquo;
                  </blockquote>

                  <div className="flex items-center gap-4 border-t border-gray-100 pt-8">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-gray-950 text-lg font-semibold text-white">
                      {t.author.charAt(0)}
                    </div>
                    <div>
                      <div className="font-semibold text-gray-900">{t.author}</div>
                      <div className="text-sm text-gray-500">
                        {t.position} · <span className="font-medium text-red-600">{t.company}</span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* Progress dots */}
            <div className="mt-6 flex gap-2">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => goTo(idx)}
                  aria-label={`Go to testimonial ${idx + 1}`}
                  className={`h-1 rounded-full transition-all duration-500 ${
                    idx === current ? "w-10 bg-red-600" : "w-4 bg-gray-300 hover:bg-gray-400"
                  }`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
