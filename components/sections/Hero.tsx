"use client";

import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { heroContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { ArrowRight, Play, CheckCircle2 } from "lucide-react";

const particles = [
  { x: "10%", y: "20%", size: 4, delay: 0, duration: 8, color: "bg-brand-orange/20" },
  { x: "85%", y: "15%", size: 6, delay: 1, duration: 10, color: "bg-brand-orange/15" },
  { x: "70%", y: "70%", size: 3, delay: 2, duration: 7, color: "bg-accent-amber/20" },
  { x: "20%", y: "80%", size: 5, delay: 0.5, duration: 9, color: "bg-brand-orange/10" },
  { x: "50%", y: "30%", size: 2, delay: 3, duration: 6, color: "bg-accent-amber/15" },
  { x: "90%", y: "50%", size: 4, delay: 1.5, duration: 8, color: "bg-brand-orange/20" },
  { x: "30%", y: "60%", size: 3, delay: 2.5, duration: 7, color: "bg-accent-coral/10" },
  { x: "60%", y: "10%", size: 5, delay: 0, duration: 11, color: "bg-brand-orange/15" },
  { x: "15%", y: "45%", size: 2, delay: 4, duration: 9, color: "bg-accent-amber/20" },
  { x: "75%", y: "85%", size: 4, delay: 1, duration: 8, color: "bg-brand-orange/10" },
  { x: "40%", y: "50%", size: 3, delay: 3.5, duration: 10, color: "bg-accent-amber/10" },
  { x: "95%", y: "30%", size: 2, delay: 2, duration: 6, color: "bg-brand-orange/20" },
];

const gestureLines = [
  { text: "// Face IT — Gesture Control Engine", type: "comment" },
  { text: "", type: "empty" },
  { text: "gesture.wink()      \u2192 turnSignal.left()", type: "code" },
  { text: "gesture.smile()     \u2192 wipers.activate()", type: "code" },
  { text: "gesture.eyebrow()   \u2192 headlights.toggle()", type: "code" },
  { text: "gesture.openMouth() \u2192 horn.sound()", type: "code" },
  { text: "", type: "empty" },
  { text: "// Accuracy: 99.2% | Latency: <50ms", type: "comment" },
  { text: "// Status: All systems operational \u2713", type: "comment" },
];

export default function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);
  const [typedLines, setTypedLines] = useState<string[]>([]);
  const [lineIdx, setLineIdx] = useState(0);
  const [charIdx, setCharIdx] = useState(0);

  useEffect(() => {
    if (lineIdx >= gestureLines.length) return;

    const line = gestureLines[lineIdx].text;

    if (charIdx <= line.length) {
      const timeout = setTimeout(
        () => {
          setTypedLines((prev) => {
            const next = [...prev];
            next[lineIdx] = line.slice(0, charIdx);
            return next;
          });
          setCharIdx((c) => c + 1);
        },
        line === "" ? 80 : 35
      );
      return () => clearTimeout(timeout);
    }

    const timeout = setTimeout(() => {
      setLineIdx((i) => i + 1);
      setCharIdx(0);
    }, 150);
    return () => clearTimeout(timeout);
  }, [lineIdx, charIdx]);

  return (
    <section
      id="hero"
      ref={sectionRef}
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-dark">
        <div className="absolute top-1/4 -left-1/4 w-[600px] h-[600px] bg-brand-orange/[0.07] rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-brand-navy/30 rounded-full blur-[100px]" />
        <div className="absolute top-0 right-1/3 w-[400px] h-[400px] bg-accent-amber/[0.04] rounded-full blur-[80px]" />
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      {/* Floating particles */}
      {particles.map((p, i) => (
        <div
          key={i}
          className={`absolute rounded-full ${p.color}`}
          style={{
            left: p.x,
            top: p.y,
            width: p.size,
            height: p.size,
            animation: `particle-float-${(i % 3) + 1} ${p.duration}s ease-in-out ${p.delay}s infinite`,
          }}
        />
      ))}

      {/* Mouse glow */}
      <div
        className="mouse-glow hidden lg:block"
        style={{ left: mouse.x, top: mouse.y }}
      />

      {/* Content */}
      <div className="section-container relative z-10 pt-28 pb-16">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          {/* Left side */}
          <motion.div
            className="lg:col-span-7"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-orange/10 border border-brand-orange/20 mb-6">
              <div className="w-2 h-2 rounded-full bg-brand-orange animate-pulse" />
              <span className="text-sm font-medium text-brand-orange">
                {heroContent.badge}
              </span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.1] tracking-tight">
              Drive With Your <span className="gradient-text">Smile</span>.
              <br className="hidden md:block" />
              Control Your Car With a{" "}
              <span className="gradient-text">Wink</span>.
            </h1>

            <p className="mt-6 text-lg text-gray-400 leading-relaxed max-w-xl">
              {heroContent.subheadline}
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <a
                href={heroContent.primaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-xl hover:shadow-xl hover:shadow-brand-orange/25 transition-all duration-300 hover:-translate-y-0.5"
              >
                {heroContent.primaryCta.label}
                <ArrowRight size={16} />
              </a>
              <a
                href={heroContent.secondaryCta.href}
                className="inline-flex items-center gap-2 px-7 py-3.5 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
              >
                <Play size={16} />
                {heroContent.secondaryCta.label}
              </a>
            </div>

            <div className="mt-10 flex flex-col gap-3">
              {heroContent.socialProof.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1 + i * 0.15 }}
                  className="flex items-center gap-2.5 text-sm text-gray-500"
                >
                  <CheckCircle2
                    size={14}
                    className="text-brand-orange flex-shrink-0"
                  />
                  {item}
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right side — Gesture Interface Card */}
          <motion.div
            className="lg:col-span-5"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="relative">
              <div className="glass-card rounded-2xl overflow-hidden shadow-2xl shadow-black/30">
                <div className="flex items-center gap-2 px-5 py-3.5 border-b border-white/[0.06] bg-white/[0.02]">
                  <div className="flex gap-1.5">
                    <div className="w-3 h-3 rounded-full bg-red-500/60" />
                    <div className="w-3 h-3 rounded-full bg-yellow-500/60" />
                    <div className="w-3 h-3 rounded-full bg-green-500/60" />
                  </div>
                  <span className="ml-2 text-xs text-gray-500 font-mono">
                    face-it-control.sys
                  </span>
                </div>

                <div className="p-5 font-mono text-sm leading-[1.8] min-h-[280px]">
                  {typedLines.map((line, i) => (
                    <div
                      key={i}
                      className={
                        gestureLines[i]?.type === "comment"
                          ? "text-gray-600"
                          : gestureLines[i]?.type === "code"
                          ? "text-brand-orange-light"
                          : "text-gray-400"
                      }
                    >
                      {line || "\u00A0"}
                      {i === lineIdx && lineIdx < gestureLines.length && (
                        <span
                          className="inline-block w-2 h-4 bg-brand-orange ml-0.5 align-middle"
                          style={{
                            animation: "typewriter-cursor 1s infinite",
                          }}
                        />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              <div className="absolute -top-4 -right-4 px-3 py-1.5 glass-card rounded-lg text-xs font-semibold text-brand-orange animate-float shadow-lg shadow-brand-orange/10">
                CES 2023
              </div>
              <div className="absolute -bottom-3 -left-3 px-3 py-1.5 glass-card rounded-lg text-xs font-semibold text-accent-emerald animate-float-delayed shadow-lg shadow-accent-emerald/10">
                99.2% Accuracy
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center">
          <div className="w-1 h-2.5 mt-2 rounded-full bg-brand-orange" />
        </div>
      </motion.div>
    </section>
  );
}
