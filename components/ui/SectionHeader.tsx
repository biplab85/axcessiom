"use client";

import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface SectionHeaderProps {
  label?: string;
  headline: string;
  subheadline?: string;
  light?: boolean;
  centered?: boolean;
}

export default function SectionHeader({
  label,
  headline,
  subheadline,
  light = true,
  centered = true,
}: SectionHeaderProps) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-50px" }}
      variants={fadeInUp}
      className={centered ? "text-center max-w-3xl mx-auto mb-16" : "mb-16"}
    >
      {label && (
        <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-orange mb-4">
          {label}
        </span>
      )}
      <h2
        className={`text-3xl md:text-4xl lg:text-5xl font-bold leading-tight ${
          light ? "text-white" : "text-gray-900"
        }`}
      >
        {headline}
      </h2>
      {subheadline && (
        <p
          className={`mt-5 text-lg leading-relaxed ${
            light ? "text-gray-400" : "text-gray-600"
          }`}
        >
          {subheadline}
        </p>
      )}
    </motion.div>
  );
}
