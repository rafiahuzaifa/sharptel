"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useLayoutEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import Eyebrow from "./Eyebrow";
import type { SiteContent } from "@/lib/content";

interface ServiceCardsProps {
  services: SiteContent["services"];
}

export default function ServiceCards({ services }: ServiceCardsProps) {
  const carouselRef = useRef<HTMLDivElement>(null);
  const sectionRef = useRef<HTMLElement>(null);
  const [isPaused, setIsPaused] = useState(false);

  // GSAP ScrollTrigger: stagger-reveal the service cards as the section scrolls into view
  useLayoutEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    const ctx = gsap.context(() => {
      const mm = gsap.matchMedia();
      mm.add("(prefers-reduced-motion: no-preference)", () => {
        gsap.from(".service-card", {
          opacity: 0,
          y: 40,
          scale: 0.94,
          duration: 0.5,
          stagger: 0.08,
          ease: "back.out(1.4)",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 75%",
            once: true,
          },
        });
      });
    }, sectionRef);

    // Images loading after this effect runs can change page layout and throw off
    // ScrollTrigger's initial measurements, so re-measure once everything has settled.
    const refresh = () => ScrollTrigger.refresh();
    window.addEventListener("load", refresh);
    const t = setTimeout(refresh, 1000);

    return () => {
      ctx.revert();
      window.removeEventListener("load", refresh);
      clearTimeout(t);
    };
  }, []);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    let scrollAmount = carousel.scrollLeft;

    const scroll = () => {
      if (!isPaused && carousel) {
        scrollAmount += 0.6;
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
          carousel.scrollLeft = 0;
        }
        carousel.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    return () => {
      cancelAnimationFrame(animationFrame);
    };
  }, [isPaused]);

  return (
    <section ref={sectionRef} className="relative overflow-hidden bg-gray-50 py-24 md:py-32">
      <div className="hairline-grid-light absolute inset-0" />

      <div className="container relative mx-auto mb-14 px-6 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="grid items-end gap-8 lg:grid-cols-12"
        >
          <div className="lg:col-span-7">
            <Eyebrow label="Our Services" />
            <h2 className="section-title">
              What we <span className="accent">offer</span>
            </h2>
          </div>
          <div className="lg:col-span-5">
            <p className="section-lead mb-6">
              From high-speed connectivity to advanced security and automation — empowering businesses across Pakistan with reliable, future-ready ICT services.
            </p>
            <Link
              href="/pages/services"
              className="group inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-red-600"
            >
              View all services
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-5 overflow-x-hidden px-4 py-4 md:gap-6"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {[...services, ...services].map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              aria-hidden={idx >= services.length ? true : undefined}
              tabIndex={idx >= services.length ? -1 : undefined}
              className={`group relative block h-[420px] w-[290px] flex-shrink-0 overflow-hidden rounded-3xl bg-gray-900 md:h-[460px] md:w-[340px] ${
                idx < services.length ? "service-card" : ""
              }`}
            >
              <Image
                src={service.image}
                alt={service.title}
                fill
                className="object-cover transition-transform duration-[1200ms] ease-out group-hover:scale-110"
                sizes="(max-width: 768px) 290px, 340px"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-gray-950/50 to-gray-950/0 transition-opacity duration-500" />
              <div className="absolute inset-0 bg-gradient-to-t from-red-950/90 via-red-900/30 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              {/* Top row: index + arrow */}
              <div className="absolute inset-x-0 top-0 flex items-center justify-between p-6">
                <span className="font-mono text-xs tracking-[0.2em] text-white/70">
                  {String((idx % services.length) + 1).padStart(2, "0")}
                </span>
                <span className="flex h-11 w-11 items-center justify-center rounded-full border border-white/25 bg-white/10 text-white backdrop-blur-md transition-all duration-500 group-hover:rotate-45 group-hover:border-red-500 group-hover:bg-red-600">
                  <ArrowUpRight className="h-5 w-5" />
                </span>
              </div>

              {/* Bottom copy */}
              <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                <h3 className="mb-3 text-2xl font-semibold leading-tight text-white" style={{ letterSpacing: "-0.02em" }}>
                  {service.title}
                </h3>
                <p className="line-clamp-3 text-sm leading-relaxed text-gray-300">{service.desc}</p>
                <div className="mt-5 h-px w-full bg-white/15">
                  <div className="h-px w-0 bg-red-500 transition-all duration-700 group-hover:w-full" />
                </div>
              </div>
            </Link>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="pointer-events-none absolute bottom-0 left-0 top-0 z-10 w-12 bg-gradient-to-r from-gray-50 to-transparent md:w-32" />
        <div className="pointer-events-none absolute bottom-0 right-0 top-0 z-10 w-12 bg-gradient-to-l from-gray-50 to-transparent md:w-32" />
      </div>
    </section>
  );
}
