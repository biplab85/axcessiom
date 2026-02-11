"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { solutionContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Fingerprint, Globe, DollarSign, Shield } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const icons = [Fingerprint, Globe, DollarSign, Shield];
const accentColors = ["#E8612D", "#F59E0B", "#06B6D4", "#10B981"];

const meshNodes = [
  { cx: 100, cy: 80 }, { cx: 250, cy: 150 }, { cx: 400, cy: 60 },
  { cx: 550, cy: 180 }, { cx: 700, cy: 90 }, { cx: 850, cy: 160 },
  { cx: 1000, cy: 70 }, { cx: 1100, cy: 200 }, { cx: 175, cy: 320 },
  { cx: 475, cy: 350 }, { cx: 775, cy: 300 }, { cx: 1050, cy: 380 },
];

const meshEdges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5], [5, 6], [6, 7],
  [0, 8], [1, 8], [2, 9], [3, 9], [4, 10], [5, 10], [6, 11], [7, 11],
  [8, 9], [9, 10], [10, 11], [1, 3], [4, 6],
];

export default function Solution() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="solution"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark" />

      {/* Mesh SVG */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.06] hidden lg:block"
        viewBox="0 0 1200 450"
        preserveAspectRatio="xMidYMid slice"
      >
        {meshEdges.map(([a, b], i) => (
          <line
            key={i}
            x1={meshNodes[a].cx}
            y1={meshNodes[a].cy}
            x2={meshNodes[b].cx}
            y2={meshNodes[b].cy}
            stroke="rgba(232, 97, 45, 0.4)"
            strokeWidth="0.5"
          />
        ))}
        {meshNodes.map((node, i) => (
          <circle
            key={i}
            cx={node.cx}
            cy={node.cy}
            r={3}
            fill="rgba(232, 97, 45, 0.5)"
          />
        ))}
      </svg>

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
            {solutionContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {solutionContent.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            {solutionContent.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {solutionContent.features.map((feature, i) => {
            const Icon = icons[i];
            const color = accentColors[i];
            return (
              <motion.div
                key={feature.title}
                variants={fadeInUp}
                className="group glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {feature.description}
                </p>
                <div
                  className="mt-6 h-0.5 w-0 group-hover:w-full transition-all duration-500 rounded-full"
                  style={{ backgroundColor: color }}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
