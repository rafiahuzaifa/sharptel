"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";

const backgrounds = [
  "/background/OIP.webp",
  "/background/fiber-trails.webp",
  "/background/data-flow.webp",
  "/background/connectivity.webp",
];

const stats = [
  { number: 500, suffix: "+", label: "Clients Served" },
  { number: 50, suffix: "+", label: "Tech Partners" },
  { number: 99.9, suffix: "%", label: "Uptime SLA" },
  { number: 24, suffix: "/7", label: "Support" },
];

const words = ["Digital Connectivity", "Business Growth", "Smart Solutions", "Future Networks"];

function useCountUp(target: number, duration: number = 2000, startCounting: boolean = false) {
  const [count, setCount] = useState(0);
  const hasStarted = useRef(false);

  useEffect(() => {
    if (!startCounting || hasStarted.current) return;
    hasStarted.current = true;

    const steps = 60;
    const increment = target / steps;
    const stepDuration = duration / steps;
    let current = 0;
    let step = 0;

    const timer = setInterval(() => {
      step++;
      current = Math.min(target, increment * step);
      setCount(current);

      if (step >= steps) {
        setCount(target);
        clearInterval(timer);
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [target, duration, startCounting]);

  return count;
}

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.5 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Images */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ duration: 1.5, ease: [0.4, 0, 0.2, 1] }}
            className="absolute inset-0"
          >
            <Image
              src={backgrounds[currentBg]}
              alt="SharpTel telecom background"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-red-900/15 to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `
              linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px),
              linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px)
            `,
            backgroundSize: "50px 50px",
          }}
        />
      </div>

      {/* Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              background: `radial-gradient(circle, rgba(220, 38, 38, 0.${10 + i * 3}) 0%, transparent 70%)`,
              width: `${300 + i * 100}px`,
              height: `${300 + i * 100}px`,
              top: `${20 + i * 20}%`,
              left: `${10 + i * 25}%`,
            }}
            animate={{
              y: [0, 30, 0],
              x: [0, 20, 0],
              scale: [1, 1.1, 1],
            }}
            transition={{
              duration: 20 + i * 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: i * 2,
            }}
          />
        ))}
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-4 sm:px-6 lg:px-8 text-center max-w-6xl">
        <motion.div
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeOut", delay: 0.3 }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-red-300 text-sm font-semibold tracking-wider uppercase bg-red-900/30 px-5 py-2.5 rounded-full backdrop-blur-sm border border-red-700/30">
              Enterprise Solutions
            </span>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-white">Empowering</span>
            <br />
            <span className="relative inline-block h-[1.2em] overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: 60, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: -60, opacity: 0 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="gradient-text animate-pulse-slow inline-block"
                >
                  {words[currentWord]}
                </motion.span>
              </AnimatePresence>
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-lg sm:text-xl md:text-2xl text-gray-300 font-light mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Next-generation telecom & ICT solutions built with{" "}
            <span className="text-red-400 font-semibold">innovation</span>,{" "}
            <span className="text-red-400 font-semibold">reliability</span>, and{" "}
            <span className="text-red-400 font-semibold">uncompromising integrity</span>.
          </motion.p>

          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 1, duration: 0.8 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4 md:gap-6"
          >
            <Link
              href="/connectivity-solutions"
              className="group relative px-8 md:px-10 py-4 md:py-5 rounded-xl overflow-hidden min-w-[200px] md:min-w-[240px] text-center"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-700 group-hover:from-red-700 group-hover:to-red-800 transition-all duration-300" />
              <span className="relative text-white text-base md:text-lg font-semibold tracking-wide flex items-center justify-center gap-2">
                Explore Solutions
                <svg
                  className="w-5 h-5 group-hover:translate-x-1 transition-transform"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </span>
              <div className="absolute inset-0 border border-red-500/40 rounded-xl group-hover:border-red-400/60 transition-colors" />
            </Link>

            <Link
              href="/Contact-us"
              className="group px-8 md:px-10 py-4 md:py-5 rounded-xl min-w-[200px] md:min-w-[240px] text-center border border-white/20 hover:border-red-400/50 bg-white/5 hover:bg-white/10 backdrop-blur-sm transition-all duration-300"
            >
              <span className="text-white text-base md:text-lg font-semibold tracking-wide">
                Get in Touch
              </span>
            </Link>
          </motion.div>

          {/* Animated Stats Counter */}
          <motion.div
            ref={statsRef}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 md:mt-16 pt-8 border-t border-white/10"
          >
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8 max-w-3xl mx-auto">
              {stats.map((stat, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.7 + i * 0.15 }}
                  className="text-center group"
                >
                  <StatNumber
                    target={stat.number}
                    suffix={stat.suffix}
                    isVisible={statsVisible}
                  />
                  <div className="text-xs md:text-sm text-gray-400 uppercase tracking-wider group-hover:text-red-300 transition-colors">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll Indicator */}
      <motion.div
        className="absolute bottom-6 md:bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2, duration: 1 }}
      >
        <div className="flex flex-col items-center">
          <span className="text-gray-400 text-xs tracking-widest uppercase mb-2">
            Scroll
          </span>
          <div className="w-5 h-8 md:w-6 md:h-10 border border-white/30 rounded-full flex items-start justify-center p-1 md:p-1.5">
            <motion.div
              className="w-1.5 h-2 md:h-3 bg-red-400 rounded-full"
              animate={{ y: [0, 10, 0], opacity: [0.5, 1, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function StatNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const count = useCountUp(target, 2000, isVisible);
  const display = target % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div className="text-2xl md:text-3xl font-bold text-white mb-1 group-hover:text-red-400 transition-colors">
      {display}
      <span className="text-red-400">{suffix}</span>
    </div>
  );
}
