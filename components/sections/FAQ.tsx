"use client";

import { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { faqContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Plus, Minus } from "lucide-react";

const orbs = [
  { x: "10%", y: "20%", size: 200, color: "rgba(232, 97, 45, 0.06)", duration: 10 },
  { x: "80%", y: "70%", size: 150, color: "rgba(245, 158, 11, 0.05)", duration: 12 },
  { x: "60%", y: "15%", size: 180, color: "rgba(6, 182, 212, 0.04)", duration: 14 },
  { x: "25%", y: "75%", size: 120, color: "rgba(232, 97, 45, 0.05)", duration: 11 },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="faq"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark" />

      {/* Honeycomb pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.3]"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="honeycomb"
            width="56"
            height="100"
            patternUnits="userSpaceOnUse"
            patternTransform="scale(1.5)"
          >
            <path
              d="M28 66L0 50V16L28 0L56 16V50L28 66Z"
              fill="none"
              stroke="rgba(232, 97, 45, 0.5)"
              strokeWidth="0.5"
            />
            <path
              d="M28 166L0 150V116L28 100L56 116V150L28 166Z"
              fill="none"
              stroke="rgba(232, 97, 45, 0.5)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#honeycomb)" />
      </svg>

      {/* ? watermark */}
      <div className="absolute top-1/2 right-10 -translate-y-1/2 text-[400px] font-bold text-white/[0.01] pointer-events-none select-none hidden lg:block leading-none">
        ?
      </div>

      {/* Floating orbs */}
      {orbs.map((orb, i) => (
        <div
          key={i}
          className="absolute rounded-full pointer-events-none"
          style={{
            left: orb.x,
            top: orb.y,
            width: orb.size,
            height: orb.size,
            background: `radial-gradient(circle, ${orb.color}, transparent 70%)`,
            animation: `particle-float-${(i % 3) + 1} ${orb.duration}s ease-in-out infinite`,
          }}
        />
      ))}

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
            {faqContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {faqContent.headline}
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqContent.questions.map((item, i) => {
            const isOpen = openIndex === i;
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className={`glass-card rounded-xl overflow-hidden transition-all duration-300 ${
                  isOpen ? "!border-brand-orange/20" : ""
                }`}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? -1 : i)}
                  className="w-full flex items-center justify-between p-5 text-left"
                >
                  <span
                    className={`font-medium pr-4 transition-colors ${
                      isOpen ? "text-white" : "text-gray-300"
                    }`}
                  >
                    {item.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-lg flex items-center justify-center transition-all duration-300 ${
                      isOpen
                        ? "bg-brand-orange text-white"
                        : "bg-white/[0.05] text-gray-400"
                    }`}
                  >
                    {isOpen ? <Minus size={16} /> : <Plus size={16} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <div className="px-5 pb-5 text-gray-400 leading-relaxed border-t border-white/[0.06] pt-4">
                        {item.answer}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
