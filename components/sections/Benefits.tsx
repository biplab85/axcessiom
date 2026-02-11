"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import { benefitsContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Target, Puzzle, Hand, Wallet } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const icons = [Target, Puzzle, Hand, Wallet];
const accentColors = ["#E8612D", "#06B6D4", "#10B981", "#F59E0B"];

const nodes = [
  { cx: 100, cy: 100 }, { cx: 300, cy: 80 }, { cx: 500, cy: 120 },
  { cx: 700, cy: 60 }, { cx: 900, cy: 100 }, { cx: 1100, cy: 80 },
  { cx: 200, cy: 300 }, { cx: 400, cy: 280 }, { cx: 600, cy: 320 },
  { cx: 800, cy: 260 }, { cx: 1000, cy: 300 }, { cx: 150, cy: 500 },
  { cx: 350, cy: 480 }, { cx: 550, cy: 520 }, { cx: 750, cy: 460 },
  { cx: 950, cy: 500 }, { cx: 1100, cy: 480 },
];

const edges = [
  [0, 1], [1, 2], [2, 3], [3, 4], [4, 5],
  [0, 6], [1, 7], [2, 8], [3, 9], [4, 10],
  [6, 7], [7, 8], [8, 9], [9, 10],
  [6, 11], [7, 12], [8, 13], [9, 14], [10, 15],
  [11, 12], [12, 13], [13, 14], [14, 15], [15, 16], [5, 16],
];

export default function Benefits() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="benefits"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-50" />

      {/* Constellation SVG */}
      <svg
        className="absolute inset-0 w-full h-full hidden lg:block"
        viewBox="0 0 1200 600"
        preserveAspectRatio="xMidYMid slice"
        style={{ animation: "constellation-pulse 6s ease-in-out infinite" }}
      >
        {edges.map(([a, b], i) => (
          <line
            key={i}
            x1={nodes[a].cx}
            y1={nodes[a].cy}
            x2={nodes[b].cx}
            y2={nodes[b].cy}
            stroke="rgba(232, 97, 45, 0.15)"
            strokeWidth="0.5"
          />
        ))}
        {nodes.map((node, i) => (
          <g key={i}>
            <circle
              cx={node.cx}
              cy={node.cy}
              r={4}
              fill="rgba(232, 97, 45, 0.08)"
            />
            <circle
              cx={node.cx}
              cy={node.cy}
              r={2}
              fill="rgba(232, 97, 45, 0.3)"
            />
          </g>
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
            {benefitsContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {benefitsContent.headline}
          </h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-6"
        >
          {benefitsContent.benefits.map((benefit, i) => {
            const Icon = icons[i];
            const color = accentColors[i];
            return (
              <motion.div
                key={benefit.title}
                variants={fadeInUp}
                className="group glass-card glass-card-hover rounded-2xl p-7 transition-all duration-500 hover:-translate-y-1"
              >
                <div
                  className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-all duration-300 group-hover:scale-110 group-hover:shadow-lg"
                  style={{ backgroundColor: `${color}15`, color }}
                >
                  <Icon size={24} />
                </div>
                <h3 className="text-lg font-semibold text-white mb-3">
                  {benefit.title}
                </h3>
                <p className="text-gray-400 leading-relaxed">
                  {benefit.description}
                </p>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
