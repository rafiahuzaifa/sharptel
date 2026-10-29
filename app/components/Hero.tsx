"use client";

import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import type { SiteContent } from "@/lib/content";

interface HeroProps {
  hero: SiteContent["hero"];
}

const SLIDE_MS = 8000;
const ease = [0.22, 1, 0.36, 1] as const;

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

export default function Hero({ hero }: HeroProps) {
  const backgrounds = hero.backgrounds;
  const words = hero.words;
  const stats = hero.stats;

  const [currentBg, setCurrentBg] = useState(0);
  const [currentWord, setCurrentWord] = useState(0);
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (backgrounds.length < 2) return;
    const interval = setInterval(() => {
      setCurrentBg((prev) => (prev + 1) % backgrounds.length);
    }, SLIDE_MS);
    return () => clearInterval(interval);
  }, [backgrounds.length, currentBg]);

  useEffect(() => {
    if (words.length < 2) return;
    const interval = setInterval(() => {
      setCurrentWord((prev) => (prev + 1) % words.length);
    }, 3000);
    return () => clearInterval(interval);
  }, [words.length]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setStatsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (statsRef.current) observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section className="grain relative isolate flex min-h-[calc(100svh-5rem)] flex-col overflow-hidden bg-gray-950 text-white">
      {/* Background slideshow with slow Ken Burns drift */}
      <div className="absolute inset-0 -z-10">
        <AnimatePresence initial={false}>
          <motion.div
            key={currentBg}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1.6, ease }}
            className="absolute inset-0"
          >
            <motion.div
              className="absolute inset-0"
              initial={{ scale: 1.12 }}
              animate={{ scale: 1 }}
              transition={{ duration: SLIDE_MS / 1000 + 2, ease: "linear" }}
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
            </motion.div>
          </motion.div>
        </AnimatePresence>

        {/* Readability overlays: strong on the left where the copy sits */}
        <div className="absolute inset-0 bg-gradient-to-r from-gray-950 via-gray-950/85 to-gray-950/30" />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-950 via-transparent to-gray-950/40" />
        <div className="absolute -bottom-40 -left-40 h-[36rem] w-[36rem] rounded-full bg-red-600/25 blur-[140px]" />
        <div className="hairline-grid absolute inset-0" />
      </div>

      {/* Content */}
      <div className="container relative z-10 mx-auto flex flex-1 items-center px-4 pb-10 pt-16 sm:px-6 md:pt-20 lg:px-8">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease, delay: 0.1 }}
            className="mb-8 inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 backdrop-blur-md"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-red-500 opacity-75" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-red-500" />
            </span>
            <span className="text-sm text-gray-300">{hero.badge}</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, ease, delay: 0.2 }}
            className="mb-8 text-[2.75rem] font-semibold leading-[1.02] text-white sm:text-6xl md:text-7xl lg:text-[5.5rem]"
            style={{ letterSpacing: "-0.045em" }}
          >
            Empowering
            <span className="relative block h-[1.12em] overflow-hidden pb-[0.12em] text-[0.72em] sm:text-[1em]">
              <AnimatePresence mode="wait">
                <motion.span
                  key={currentWord}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.6, ease }}
                  className="inline-block whitespace-nowrap"
                >
                  {/* Gradient lives on an inner span: background-clip:text on the transformed element can render blank */}
                  <span className="bg-gradient-to-r from-red-500 via-red-400 to-red-600 bg-clip-text text-transparent">
                    {words[currentWord]}
                  </span>
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.4 }}
            className="mb-10 max-w-2xl text-lg font-light leading-relaxed text-gray-300 md:text-xl"
          >
            {hero.subtitle}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease, delay: 0.55 }}
            className="flex flex-col gap-3 sm:flex-row sm:items-center"
          >
            <Link href="/connectivity-solutions" className="btn-primary group px-8 py-4 text-base">
              Explore Solutions
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
            <Link href="/Contact-us" className="btn-ghost-dark group px-8 py-4 text-base">
              Talk to an Expert
              <ArrowUpRight className="h-4 w-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </motion.div>
        </div>
      </div>

      {/* Bottom rail: stats + slide progress */}
      <motion.div
        ref={statsRef}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1, ease, delay: 0.8 }}
        className="relative z-10 border-t border-white/10 bg-gray-950/40 backdrop-blur-xl"
      >
        <div className="container mx-auto flex flex-col gap-6 px-4 py-6 sm:px-6 lg:flex-row lg:items-center lg:justify-between lg:px-8">
          <div className="grid flex-1 grid-cols-2 gap-y-6 md:grid-cols-4 md:divide-x md:divide-white/10">
            {stats.map((stat, i) => (
              <div key={i} className={`group ${i > 0 ? "md:pl-8" : ""}`}>
                <StatNumber target={stat.number} suffix={stat.suffix} isVisible={statsVisible} />
                <div className="mt-1 text-[11px] uppercase tracking-[0.18em] text-gray-400 transition-colors group-hover:text-red-300">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>

          {backgrounds.length > 1 && (
            <div className="flex items-center gap-4 lg:pl-10">
              <span className="font-mono text-xs text-gray-400">
                <span className="text-white">{String(currentBg + 1).padStart(2, "0")}</span>
                {" / "}
                {String(backgrounds.length).padStart(2, "0")}
              </span>
              <div className="flex gap-2">
                {backgrounds.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => setCurrentBg(i)}
                    aria-label={`Show background ${i + 1}`}
                    className="relative h-[3px] w-10 overflow-hidden rounded-full bg-white/15"
                  >
                    {i === currentBg && (
                      <motion.span
                        key={`p-${currentBg}`}
                        className="absolute inset-y-0 left-0 bg-red-500"
                        initial={{ width: "0%" }}
                        animate={{ width: "100%" }}
                        transition={{ duration: SLIDE_MS / 1000, ease: "linear" }}
                      />
                    )}
                    {i < currentBg && <span className="absolute inset-0 bg-white/40" />}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </section>
  );
}

function StatNumber({ target, suffix, isVisible }: { target: number; suffix: string; isVisible: boolean }) {
  const count = useCountUp(target, 2000, isVisible);
  const display = target % 1 !== 0 ? count.toFixed(1) : Math.floor(count).toString();

  return (
    <div className="text-3xl font-semibold tabular-nums text-white md:text-4xl" style={{ letterSpacing: "-0.03em" }}>
      {display}
      <span className="text-red-500">{suffix}</span>
    </div>
  );
}
