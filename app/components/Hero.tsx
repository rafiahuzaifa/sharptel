"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect } from "react";

const backgrounds = [
  "/background/OIP.webp",
  "/background/fiber-trails.webp",
  "/background/data-flow.webp",
  "/background/connectivity.webp",
];

export default function Hero() {
  const [currentBg, setCurrentBg] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
    
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, 8000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-black to-gray-900">
      {/* Background Images with Smooth Transition */}
      <div className="absolute inset-0">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentBg}
            initial={{ opacity: 0, scale: 1.1 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 1.1 }}
            transition={{ 
              duration: 1.5, 
              ease: [0.4, 0, 0.2, 1] 
            }}
            className="absolute inset-0"
          >
            <Image
              src={backgrounds[currentBg]}
              alt="Dynamic telecom background"
              fill
              className="object-cover"
              priority
              quality={90}
              sizes="100vw"
              onLoadingComplete={() => setIsLoaded(true)}
            />
            {/* Red theme overlay for better text readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/60 to-black/40" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/40 via-primary-900/20 to-black/40" />
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Animated Red Grid Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute inset-0" style={{
          backgroundImage: `
            linear-gradient(90deg, rgba(220, 38, 38, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(220, 38, 38, 0.1) 1px, transparent 1px)
          `,
          backgroundSize: '50px 50px',
        }} />
        <motion.div
          className="absolute inset-0 bg-gradient-to-r from-transparent via-primary-600/5 to-transparent"
          animate={{
            x: ['-100%', '100%'],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Red Theme Floating Elements */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(3)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute rounded-full mix-blend-screen"
            style={{
              background: `radial-gradient(circle, rgba(220, 38, 38, 0.${10 + i*3}) 0%, transparent 70%)`,
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
          transition={{ 
            duration: 1, 
            ease: "easeOut",
            delay: 0.3 
          }}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            className="inline-block mb-6"
          >
            <span className="text-primary-400 text-sm font-semibold tracking-wider uppercase bg-primary-900/20 px-4 py-2 rounded-full backdrop-blur-sm border border-primary-700/30">
              Enterprise Solutions
            </span>
          </motion.div>

          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 leading-tight">
            <span className="text-white">
              Empowering
            </span>
            <br />
            <span className="gradient-text animate-pulse-slow">
              Digital Connectivity
            </span>
          </h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 1 }}
            className="text-xl md:text-2xl text-gray-300 font-light mb-8 md:mb-12 max-w-3xl mx-auto leading-relaxed"
          >
            Next-generation telecom & ICT solutions built with{" "}
            <span className="text-primary-400 font-semibold">innovation</span>,{" "}
            <span className="text-primary-400 font-semibold">reliability</span>, and{" "}
            <span className="text-primary-400 font-semibold">uncompromising integrity</span>.
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
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3 }}
              />
              <div className="absolute inset-0 bg-gradient-to-r from-primary-600 to-primary-700 group-hover:from-primary-700 group-hover:to-primary-800 transition-all duration-300" />
              <span className="relative text-white text-base md:text-lg font-semibold tracking-wide">
                Explore Solutions
              </span>
              <div className="absolute inset-0 border border-primary-500/40 rounded-xl group-hover:border-primary-400/60 transition-colors" />
            </Link>

            <Link
              href="/Contact-us"
              className="group relative px-8 md:px-10 py-4 md:py-5 rounded-xl overflow-hidden min-w-[200px] md:min-w-[240px] text-center glass-card hover:shadow-primary/30"
            >
              <span className="relative text-white text-base md:text-lg font-semibold tracking-wide">
                Get in Touch
              </span>
            </Link>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 1 }}
            className="mt-12 md:mt-16 pt-6 md:pt-8 border-t border-white/10"
          >
            <p className="text-gray-400 text-sm tracking-wider uppercase mb-3 md:mb-4">
              Trusted by industry leaders
            </p>
            <div className="flex items-center justify-center gap-4 md:gap-8 opacity-70">
              {[...Array(4)].map((_, i) => (
                <div key={i} className="h-6 md:h-8 w-16 md:w-24 bg-white/10 rounded animate-pulse" />
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Elegant Scroll Indicator */}
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
              className="w-1.5 h-2 md:h-3 bg-primary-400 rounded-full"
              animate={{ 
                y: [0, 10, 0],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ 
                duration: 2, 
                repeat: Infinity,
                ease: "easeInOut" 
              }}
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}