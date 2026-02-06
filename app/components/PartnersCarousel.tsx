"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect, useState } from "react";

const partners = [
  { name: "Sangfor", logo: "/background/sangfor.webp" },
  { name: "Sophos", logo: "/background/sophos.webp" },
  { name: "Barracuda", logo: "/background/barracuda.webp" },
  { name: "Cisco", logo: "/background/cisco.webp" },
  { name: "Dell", logo: "/background/dell.webp" },
  { name: "D-Link", logo: "/background/d-link.webp" },
  { name: "Microsoft", logo: "/background/microsoft.webp" },
  { name: "Huawei", logo: "/background/huawei.webp" },
  { name: "HP", logo: "/background/hp.webp" },
  { name: "IBM", logo: "/background/ibm.webp" },
  { name: "Oracle", logo: "/background/oracle.webp" },
  { name: "VMware", logo: "/background/vmware.webp" },
];

export default function PartnersSection() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [imagesLoaded, setImagesLoaded] = useState<boolean[]>(
    Array(partners.length).fill(false)
  );

  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let scrollPos = 0;
    const speed = 0.5;
    let animationId: number;

    const animate = () => {
      scrollPos += speed;
      if (scrollPos >= carousel.scrollWidth / 2) {
        scrollPos = 0;
      }
      carousel.scrollLeft = scrollPos;
      animationId = requestAnimationFrame(animate);
    };

    animationId = requestAnimationFrame(animate);

    const pauseAnimation = () => cancelAnimationFrame(animationId);
    const resumeAnimation = () => {
      animationId = requestAnimationFrame(animate);
    };

    carousel.addEventListener("mouseenter", pauseAnimation);
    carousel.addEventListener("mouseleave", resumeAnimation);

    return () => {
      cancelAnimationFrame(animationId);
      carousel.removeEventListener("mouseenter", pauseAnimation);
      carousel.removeEventListener("mouseleave", resumeAnimation);
    };
  }, []);

  const handleImageLoad = (index: number) => {
    setImagesLoaded((prev) => {
      const newState = [...prev];
      newState[index] = true;
      return newState;
    });
  };

  const duplicatedPartners = [...partners, ...partners];

  return (
    <section className="py-20 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-red-600/10 to-black-600/10 rounded-full px-4 py-2 mb-4">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse"></div>
            <span className="text-sm font-semibold text-red-600">
              Technology Partners
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
            Strategic{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-600 to-red-800">
              Partners
            </span>
          </h2>

          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Collaborating with industry leaders to deliver cutting-edge solutions
          </p>
        </motion.div>

        <div className="relative overflow-hidden py-8">
          <div
            ref={carouselRef}
            className="flex gap-8 lg:gap-16 items-center overflow-x-hidden py-4 scroll-smooth"
            style={{ scrollBehavior: "smooth" }}
          >
            {duplicatedPartners.map((partner, idx) => (
              <motion.div
                key={`${partner.name}-${idx}`}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: idx * 0.05 }}
                whileHover={{
                  scale: 1.15,
                  y: -5,
                  filter: "grayscale(0%) brightness(1.1)",
                }}
                className="flex-shrink-0 group relative w-40 h-24 md:w-48 md:h-28 lg:w-56 lg:h-32"
              >
                {/* Fallback */}
                {!imagesLoaded[idx % partners.length] && (
                  <div className="absolute inset-0 bg-gradient-to-br from-gray-100 to-gray-200 rounded-2xl flex items-center justify-center animate-pulse">
                    <span className="text-gray-400 font-semibold text-sm">
                      {partner.name}
                    </span>
                  </div>
                )}

                {/* Image Container */}
                <div
                  className={`relative w-full h-full transition-all duration-500 ${
                    imagesLoaded[idx % partners.length]
                      ? "opacity-100 scale-100"
                      : "opacity-0 scale-95"
                  }`}
                >
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    fill
                    className="object-contain transition-all duration-500 filter grayscale group-hover:grayscale-0 group-hover:contrast-125"
                    sizes="(max-width: 768px) 160px, (max-width: 1024px) 192px, 224px"
                    onLoad={() => handleImageLoad(idx % partners.length)}
                    onError={() => handleImageLoad(idx % partners.length)}
                    priority={idx < 6} // First 6 images load with priority
                  />
                  
                  {/* Color Overlay on Hover */}
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/0 via-purple-500/0 to-pink-500/0 group-hover:from-blue-500/5 group-hover:via-purple-500/5 group-hover:to-pink-500/5 transition-all duration-500 rounded-2xl" />
                </div>
              </motion.div>
            ))}
          </div>

          {/* Gradient edges */}
          <div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-white via-white/90 to-transparent pointer-events-none z-10" />
          <div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-white via-white/90 to-transparent pointer-events-none z-10" />

          {/* Glow effects */}
          <div className="absolute -top-4 left-1/4 w-24 h-24 bg-blue-500/5 rounded-full blur-3xl" />
          <div className="absolute -bottom-4 right-1/4 w-32 h-32 bg-purple-500/5 rounded-full blur-3xl" />
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 max-w-5xl mx-auto"
        >
          {[
            { number: "50+", label: "Technology Partners" },
            { number: "100+", label: "Certifications" },
            { number: "24/7", label: "Support Network" },
            { number: "Global", label: "Coverage" },
          ].map((stat, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 text-center border border-gray-100 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-red-600 to-red-800 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}