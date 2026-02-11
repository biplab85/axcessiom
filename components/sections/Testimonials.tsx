"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { testimonialsContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Star, Quote } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-50" />

      {/* Starburst SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] hidden lg:block"
        viewBox="0 0 1200 800"
      >
        {Array.from({ length: 24 }).map((_, i) => {
          const angle = (i / 24) * Math.PI * 2;
          return (
            <line
              key={i}
              x1="600"
              y1="400"
              x2={600 + Math.cos(angle) * 800}
              y2={400 + Math.sin(angle) * 800}
              stroke="rgba(232, 97, 45, 0.3)"
              strokeWidth="0.5"
            />
          );
        })}
      </svg>

      {/* Giant quote watermark */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[300px] font-bold text-white/[0.015] pointer-events-none select-none leading-none">
        &ldquo;
      </div>

      <div
        className="mouse-glow hidden lg:block"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <div className="section-container relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-orange mb-4">
            {testimonialsContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {testimonialsContent.headline}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {testimonialsContent.testimonials.map((t) => (
            <motion.div
              key={t.name}
              variants={fadeInUp}
              className="glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
            >
              {/* Stars */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: 5 }).map((_, j) => (
                  <Star
                    key={j}
                    size={14}
                    className="fill-brand-orange text-brand-orange"
                  />
                ))}
              </div>

              {/* Quote icon */}
              <Quote size={20} className="text-brand-orange/30 mb-3" />

              {/* Quote text */}
              <p className="text-gray-300 leading-relaxed mb-6 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-4 border-t border-white/[0.06]">
                <div className="w-10 h-10 rounded-full bg-brand-orange/20 flex items-center justify-center text-sm font-bold text-brand-orange">
                  {t.name.charAt(0)}
                </div>
                <div>
                  <p className="text-sm font-semibold text-white">{t.name}</p>
                  <p className="text-xs text-gray-500">{t.details}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
