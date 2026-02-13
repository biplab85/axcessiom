"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { howItWorksContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Monitor, Settings, Car } from "lucide-react";

const icons = [Monitor, Settings, Car];
const stepColors = ["#E8612D", "#F59E0B", "#10B981"];

export default function HowItWorks() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="how-it-works"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-orange/[0.03] rounded-full blur-[150px]" />

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
          className="text-center max-w-3xl mx-auto mb-20"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-orange mb-4">
            {howItWorksContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {howItWorksContent.headline}
          </h2>
        </motion.div>

        <div className="relative">
          {/* Connecting line — desktop */}
          <div className="w-[70%] m-auto lineBar hidden lg:block absolute top-16 left-[8%] right-[8%] h-0.5 bg-white/[0.06] z-0">
            <motion.div
              className="h-full bg-gradient-to-r from-brand-orange via-accent-amber to-accent-emerald rounded-full"
              initial={{ width: "0%" }}
              whileInView={{ width: "100%" }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: 0.5 }}
            />
          </div>

          <div className="relative z-10 grid lg:grid-cols-3 gap-12 lg:gap-8">
            {howItWorksContent.steps.map((step, i) => {
              const Icon = icons[i];
              const color = stepColors[i];
              return (
                <motion.div
                  key={step.step}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: i * 0.2 }}
                  className="text-center iconContainer"
                >
                  {/* Step circle */}
                  <div className="relative inline-flex items-center justify-center w-24 h-24 sm:w-28 sm:h-28 md:w-32 md:h-32 mb-6 md:mb-8">
                    <div
                      className="absolute inset-0 rounded-full"
                      style={{
                        backgroundColor: `${color}08`,
                        border: `1px solid ${color}20`,
                      }}
                    />
                    <div
                      className="absolute inset-3 rounded-full"
                      style={{ backgroundColor: `${color}10` }}
                    />
                    <div className="relative flex flex-col items-center">
                      <Icon size={28} style={{ color }} />
                      <span
                        className="mt-1 text-xs font-bold"
                        style={{ color }}
                      >
                        STEP {step.step}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl font-bold text-white mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-400 leading-relaxed max-w-sm mx-auto">
                    {step.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
