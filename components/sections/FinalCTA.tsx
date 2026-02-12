"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { ctaContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { ArrowRight, Sparkles, Shield, Award, MapPin } from "lucide-react";

const badgeIcons = [Award, Shield, MapPin];

export default function FinalCTA() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-50" />

      {/* Converging lines SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.2] hidden lg:block"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
      >
        {Array.from({ length: 13 }).map((_, i) => (
          <line
            key={`a-${i}`}
            x1={i * 100}
            y1="0"
            x2="600"
            y2="600"
            stroke="rgba(232, 97, 45, 0.5)"
            strokeWidth="0.5"
          />
        ))}
        {Array.from({ length: 13 }).map((_, i) => (
          <line
            key={`b-${i}`}
            x1={i * 100}
            y1="600"
            x2="600"
            y2="0"
            stroke="rgba(232, 97, 45, 0.3)"
            strokeWidth="0.3"
          />
        ))}
      </svg>

      {/* Central glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-brand-orange/[0.05] rounded-full blur-[120px]" />

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
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-orange/10 border border-brand-orange/20 mb-8">
            <Sparkles size={28} className="text-brand-orange" />
          </div>

          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {ctaContent.headline}
          </h2>

          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {ctaContent.subheadline}
          </p>

          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={ctaContent.primaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-xl hover:shadow-xl hover:shadow-brand-orange/25 transition-all duration-300 hover:-translate-y-0.5"
            >
              {ctaContent.primaryCta.label}
              <ArrowRight size={16} />
            </a>
            <a
              href={ctaContent.secondaryCta.href}
              className="inline-flex items-center gap-2 px-8 py-4 text-sm font-semibold text-gray-300 border border-white/10 rounded-xl hover:bg-white/[0.05] hover:border-white/20 transition-all duration-300"
            >
              {ctaContent.secondaryCta.label}
            </a>
          </div>

          {/* Trust badges */}
          <div className="mt-12 flex flex-wrap justify-center gap-6">
            {ctaContent.trustBadges.map((badge, i) => {
              const BadgeIcon = badgeIcons[i];
              return (
                <div
                  key={i}
                  className="flex items-center gap-2 text-sm text-gray-500"
                >
                  <BadgeIcon
                    size={14}
                    className="text-brand-orange/60"
                  />
                  {badge}
                </div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
