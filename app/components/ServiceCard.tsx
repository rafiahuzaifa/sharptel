"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useRef, useEffect, useState } from "react";

const services = [
  {
    title: "Enterprise Internet",
    desc: "High-speed, reliable dedicated internet with CIR over fiber & microwave for mission-critical operations.",
    image: "/images/enterprise-internet.jpg",
    href: "/connectivity-solutions/enterprise-solutions",
  },
  {
    title: "Data Solutions",
    desc: "MPLS, Layer-2 transport, dark fiber, and advanced data connectivity tailored to your bandwidth needs.",
    image: "/background/data-solutions.webp",
    href: "/connectivity-solutions/data-solutions",
  },
  {
    title: "Wireless Services",
    desc: "Robust LTE/4G/5G private networks, wireless broadband, and hotspot solutions for mobility.",
    image: "/background/wireless-services.jpg",
    href: "/connectivity-solutions/wireless-connectivity",
  },
  {
    title: "Banking Enterprise",
    desc: "Secure, compliant connectivity designed specifically for financial institutions and banking operations.",
    image: "/background/banking-enterprise.jpeg",
    href: "/connectivity-solutions/banking-enterprise",
  },
  {
    title: "Call Center Services",
    desc: "Scalable VoIP-based call center infrastructure with high uptime and quality voice solutions.",
    image: "/background/call-center.webp",
    href: "/connectivity-solutions/call-service",
  },
  {
    title: "Cyber Security",
    desc: "Advanced threat protection, firewalls, endpoint security, and proactive cyber defense for enterprises.",
    image: "/background/cyber-security.webp",
    href: "/technology-solutions/cyber-security",
  },
  {
    title: "Data Center & Colocation",
    desc: "Tier-3 certified data centers with colocation, power redundancy, and 24/7 monitoring.",
    image: "/background/data-center.webp",
    href: "/technology-solutions/data-center",
  },
  {
    title: "Wi-Fi & Hotspot",
    desc: "Enterprise-grade managed Wi-Fi, event hotspots, offloading, and cloud-controlled access points.",
    image: "/background/wifi-hotspot.webp",
    href: "/technology-solutions/hotspot-wifi",
  },
  {
    title: "IoT & Automation",
    desc: "IoT connectivity, smart automation, sensors, and integration for industrial & smart city applications.",
    image: "/background/iot-automation.webp",
    href: "/technology-solutions/iot-automation",
  },
  {
    title: "Voice Over IP (VoIP)",
    desc: "Hosted PBX, unified communications, scalable VoIP solutions to reduce costs and improve collaboration.",
    image: "/background/voip.webp",
    href: "/technology-solutions/voice-over",
  },
  {
    title: "Managed Services",
    desc: "End-to-end IT/network/security management, NOC, backup, and disaster recovery for peace of mind.",
    image: "/background/managed-services.webp",
    href: "/manage-technology",
  },
  {
    title: "Satellite Service",
    desc: "High-speed satellite internet for remote/rural areas with low latency and reliable coverage.",
    image: "/background/satellite-service.webp",
    href: "/connectivity-solutions/satellite-service",
  },
];

export default function ServiceCards() {
  const carouselRef = useRef<HTMLDivElement>(null);
  const [isPaused, setIsPaused] = useState(false);

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
    <section className="py-20 md:py-28 bg-gradient-to-b from-gray-50/80 to-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-14">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="inline-flex items-center gap-2 bg-red-50 rounded-full px-4 py-2 mb-5">
            <div className="h-2 w-2 bg-red-500 rounded-full animate-pulse" />
            <span className="text-sm font-semibold text-red-600">Our Services</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-5">
            What We Offer
          </h2>
          <p className="text-lg md:text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            From high-speed connectivity to advanced security and automation — empowering businesses across Pakistan with reliable, future-ready ICT services.
          </p>
        </motion.div>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-6 md:gap-8 overflow-x-hidden py-4 px-4"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={() => setIsPaused(true)}
          onTouchEnd={() => setIsPaused(false)}
        >
          {[...services, ...services].map((service, idx) => (
            <Link
              key={idx}
              href={service.href}
              className="block flex-shrink-0 w-[300px] md:w-[360px]"
            >
              <motion.div
                className="group h-full bg-white rounded-2xl md:rounded-3xl overflow-hidden border border-gray-100 shadow-lg hover:shadow-2xl hover:shadow-red-500/10 transition-all duration-500"
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ duration: 0.3 }}
              >
                {/* Image */}
                <div className="relative h-44 md:h-52 overflow-hidden">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-110"
                    sizes="(max-width: 768px) 300px, 360px"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
                  <div className="absolute bottom-4 left-4">
                    <span className="bg-red-600 text-white text-xs font-bold px-3 py-1.5 rounded-full">
                      {service.title}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 md:p-6">
                  <h3 className="text-lg md:text-xl font-bold text-gray-900 group-hover:text-red-600 transition-colors mb-2.5 line-clamp-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm md:text-base leading-relaxed mb-4 line-clamp-3">
                    {service.desc}
                  </p>

                  <span className="inline-flex items-center text-red-600 font-semibold text-sm group-hover:text-red-700 transition-colors">
                    Learn More
                    <svg
                      className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-2"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </span>
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

        {/* Gradient fade edges */}
        <div className="absolute left-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-r from-gray-50 to-transparent pointer-events-none z-10" />
        <div className="absolute right-0 top-0 bottom-0 w-16 md:w-24 bg-gradient-to-l from-white to-transparent pointer-events-none z-10" />
      </div>
    </section>
  );
}
