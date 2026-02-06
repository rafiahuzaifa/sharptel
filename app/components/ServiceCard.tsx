"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { useRef, useEffect } from "react";

const services = [
  // From Navbar → Services sub-items
  {
    title: "Enterprise Internet",
    desc: "High-speed, reliable dedicated internet with CIR over fiber & microwave for mission-critical operations.",
    image: "/images/enterprise-internet.jpg",
    alt: "Enterprise internet fiber connectivity",
  },
  {
    title: "Data Solutions",
    desc: "MPLS, Layer-2 transport, dark fiber, and advanced data connectivity tailored to your bandwidth needs.",
    image: "/background/data-solutions.webp",
    alt: "Data solutions MPLS network illustration",
  },
  {
    title: "Wireless Services",
    desc: "Robust LTE/4G/5G private networks, wireless broadband, and hotspot solutions for mobility.",
    image: "/background/wireless-services.jpg",
    alt: "Wireless LTE network and devices",
  },
  {
    title: "Banking Enterprise",
    desc: "Secure, compliant connectivity designed specifically for financial institutions and banking operations.",
    image: "/background/banking-enterprise.jpeg",
    alt: "Secure banking network infrastructure",
  },
  {
    title: "Call Center Services",
    desc: "Scalable VoIP-based call center infrastructure with high uptime and quality voice solutions.",
    image: "/background/call-center.webp",
    alt: "Modern call center VoIP setup",
  },

  // From Navbar → Solutions sub-items
  {
    title: "Cyber Security",
    desc: "Advanced threat protection, firewalls, endpoint security, and proactive cyber defense for enterprises.",
    image: "/background/cyber-security.webp",
    alt: "Cyber security shield and digital protection",
  },
  {
    title: "Data Center & Colocation",
    desc: "Tier-3 certified data centers with colocation, power redundancy, and 24/7 monitoring.",
    image: "/background/data-center.webp",
    alt: "Modern data center racks and cooling",
  },
  {
    title: "Wi-Fi & Hotspot",
    desc: "Enterprise-grade managed Wi-Fi, event hotspots, offloading, and cloud-controlled access points.",
    image: "/background/wifi-hotspot.webp",
    alt: "Enterprise Wi-Fi access points deployment",
  },
  {
    title: "IoT & Automation",
    desc: "IoT connectivity, smart automation, sensors, and integration for industrial & smart city applications.",
    image: "/background/iot-automation.webp",
    alt: "IoT devices and automation network",
  },
  {
    title: "Voice Over IP (VoIP)",
    desc: "Hosted PBX, unified communications, scalable VoIP solutions to reduce costs and improve collaboration.",
    image: "/background/voip.webp",
    alt: "VoIP phone system and unified communications",
  },

  // Bonus relevant from sharptel.pk (premium feel)
  {
    title: "Managed Services",
    desc: "End-to-end IT/network/security management, NOC, backup, and disaster recovery for peace of mind.",
    image: "/background/managed-services.webp",
    alt: "Managed IT services NOC monitoring",
  },
  {
    title: "Satellite Service",
    desc: "High-speed satellite internet for remote/rural areas with low latency and reliable coverage.",
    image: "/background/satellite-service.webp",
    alt: "Satellite internet dish in remote area",
  },
];

export default function ServiceCards() {
  const carouselRef = useRef<HTMLDivElement>(null);

  // Auto-scroll logic
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    let animationFrame: number;
    let scrollAmount = 0;

    const scroll = () => {
      if (carousel) {
        scrollAmount += 0.5; // Adjust speed (higher = faster)
        if (scrollAmount >= carousel.scrollWidth / 2) {
          scrollAmount = 0;
          carousel.scrollLeft = 0;
        }
        carousel.scrollLeft = scrollAmount;
      }
      animationFrame = requestAnimationFrame(scroll);
    };

    animationFrame = requestAnimationFrame(scroll);

    // Pause on hover
    const pauseScroll = () => cancelAnimationFrame(animationFrame);
    const resumeScroll = () => (animationFrame = requestAnimationFrame(scroll));

    carousel.addEventListener("mouseenter", pauseScroll);
    carousel.addEventListener("mouseleave", resumeScroll);

    return () => {
      cancelAnimationFrame(animationFrame);
      carousel.removeEventListener("mouseenter", pauseScroll);
      carousel.removeEventListener("mouseleave", resumeScroll);
    };
  }, []);

  return (
    <section className="py-20 bg-gradient-to-b from-gray-50/50 to-white overflow-hidden">
      <div className="container mx-auto px-6 text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-extrabold gradient-text mb-4">
          Comprehensive Enterprise Solutions
        </h2>
        <p className="text-xl text-gray-600 max-w-4xl mx-auto">
          From high-speed connectivity to advanced security and automation — empowering businesses across Pakistan with reliable, future-ready ICT services.
        </p>
      </div>

      {/* Scrolling Carousel */}
      <div className="relative">
        <div
          ref={carouselRef}
          className="flex gap-8 overflow-x-hidden whitespace-nowrap py-4 scroll-smooth"
          style={{ scrollBehavior: "smooth" }}
        >
          {/* Duplicate items for seamless infinite loop */}
          {[...services, ...services].map((service, idx) => (
            <motion.div
              key={idx}
              className="
                glass-card group flex-shrink-0 w-80 md:w-96
                bg-gradient-to-br from-white to-gray-50/80
                hover:from-primary/5 hover:to-white
                border border-gray-100 hover:border-primary/30
                transition-all duration-400 ease-out
                shadow-xl hover:shadow-2xl hover:shadow-primary/20
                rounded-3xl overflow-hidden
              "
              whileHover={{ y: -12, scale: 1.04 }}
            >
              {/* Image */}
              <div className="relative h-48 overflow-hidden">
                <Image
                  src={service.image}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="(max-width: 768px) 80vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-70 group-hover:opacity-50 transition-opacity" />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary-600 transition-colors mb-3">
                  {service.title}
                </h3>
                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {service.desc}
                </p>

                <span className="inline-flex items-center text-primary-600 font-medium group-hover:text-primary-700 transition-colors">
                  Learn More
                  <svg
                    className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Gradient fade edges for premium look */}
        <div className="absolute left-0 top-0 bottom-0 w-20 bg-gradient-to-r from-white to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-white to-transparent pointer-events-none" />
      </div>
    </section>
  );
}