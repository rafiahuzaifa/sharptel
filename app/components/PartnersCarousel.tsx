"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

const partners = [
  "Sangfor", "Sophos", "Trend Micro", "Barracuda", "Cisco", "Dell", "D-Link",
  // Add more if needed from site
];

export default function PartnersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPos = 0;
    const speed = 0.8; // adjust for speed

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= carousel.scrollWidth / 2) scrollPos = 0;
      carousel.scrollLeft = scrollPos;
      requestAnimationFrame(animate);
    };

    const animation = requestAnimationFrame(animate);

    carousel.addEventListener("mouseenter", () => cancelAnimationFrame(animation));
    carousel.addEventListener("mouseleave", () => requestAnimationFrame(animate));

    return () => cancelAnimationFrame(animation);
  }, []);

  return (
    <section className="py-16 bg-white border-t border-b border-gray-100">
      <div className="container mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-12">
          Strategic Alliances & Technology Partners
        </h2>

        <div className="relative overflow-hidden">
          <div
            ref={carouselRef}
            className="flex gap-12 md:gap-20 items-center whitespace-nowrap overflow-x-hidden py-6"
          >
            {[...partners, ...partners].map((partner, idx) => (
              <motion.div
                key={idx}
                whileHover={{ scale: 1.15, y: -8 }}
                transition={{ type: "spring", stiffness: 300 }}
                className="flex-shrink-0 grayscale hover:grayscale-0 transition-all duration-400"
              >
                <Image
                  src={`/partners/${partner.toLowerCase().replace(/\s+/g, "-")}.png`}
                  alt={`${partner} logo`}
                  width={160}
                  height={80}
                  className="object-contain h-16 md:h-20"
                />
              </motion.div>
            ))}
          </div>

          {/* Fade edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white to-transparent pointer-events-none" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white to-transparent pointer-events-none" />
        </div>
      </div>
    </section>
  );
}