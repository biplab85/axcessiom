"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { productFitContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Check } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const accentColors = ["#E8612D", "#06B6D4", "#F59E0B"];

export default function ProductFit() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="product-fit"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-50" />

      {/* Diagonal lines pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.02] hidden lg:block"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="diagonals"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
            patternTransform="rotate(45)"
          >
            <line
              x1="0"
              y1="0"
              x2="0"
              y2="40"
              stroke="rgba(232, 97, 45, 0.5)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#diagonals)" />
      </svg>

      {/* Ambient glow */}
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-brand-orange/[0.03] rounded-full blur-[120px]" />

      <div
        className="mouse-glow hidden lg:block"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <div className="section-container relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-orange mb-4">
            {productFitContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {productFitContent.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            {productFitContent.subheadline}
          </p>
        </motion.div>

        {/* Audience cards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-3 gap-6"
        >
          {productFitContent.audiences.map((audience, i) => {
            const color = accentColors[i];
            return (
              <motion.div
                key={audience.title}
                variants={fadeInUp}
                whileHover={{ y: -8 }}
                transition={{ type: "spring", stiffness: 400, damping: 20 }}
                className="group glass-card rounded-2xl overflow-hidden cursor-pointer hover:border-brand-orange/20 hover:shadow-xl hover:shadow-brand-orange/10"
              >
                {/* Image */}
                <div className="relative h-52 overflow-hidden">
                  <Image
                    src={audience.image}
                    alt={audience.title}
                    fill
                    className="object-cover transition-all duration-700 group-hover:scale-110"
                  />
                  {/* Gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-dark/90 via-dark/30 to-transparent" />

                  {/* Title on image */}
                  <div className="absolute bottom-0 left-0 right-0 p-5">
                    <h3 className="text-lg font-bold text-white drop-shadow-lg">
                      {audience.title}
                    </h3>
                  </div>

                  {/* Accent line top */}
                  <div
                    className="absolute top-0 left-0 h-1 w-0 group-hover:w-full transition-all duration-500"
                    style={{ backgroundColor: color }}
                  />
                </div>

                {/* Content */}
                <div className="p-6">
                  <p className="text-sm text-gray-400 leading-relaxed mb-5">
                    {audience.description}
                  </p>

                  {/* Feature list */}
                  <ul className="space-y-2.5">
                    {audience.features.map((feature, j) => (
                      <li
                        key={j}
                        className="flex items-center gap-2.5 text-sm text-gray-300"
                      >
                        <Check
                          size={14}
                          className="flex-shrink-0"
                          style={{ color }}
                        />
                        {feature}
                      </li>
                    ))}
                  </ul>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
