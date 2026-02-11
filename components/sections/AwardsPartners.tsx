"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { awardsPartnersContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Award, Trophy, Handshake, Building2 } from "lucide-react";
import { fadeInUp, staggerContainer } from "@/lib/animations";

const awardIcons = [Trophy, Award, Award, Building2];
const awardColors = ["#E8612D", "#F59E0B", "#06B6D4", "#10B981"];

export default function AwardsPartners() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      ref={sectionRef}
      id="awards"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark" />

      {/* Radial accent */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-brand-orange/[0.03] rounded-full blur-[120px]" />

      {/* Decorative grid dots */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] hidden lg:block"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="dots"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <circle cx="2" cy="2" r="1" fill="rgba(232, 97, 45, 0.5)" />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#dots)" />
      </svg>

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
            {awardsPartnersContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {awardsPartnersContent.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            {awardsPartnersContent.subheadline}
          </p>
        </motion.div>

        {/* Awards */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid md:grid-cols-2 gap-5 mb-20"
        >
          {awardsPartnersContent.awards.map((award, i) => {
            const Icon = awardIcons[i];
            const color = awardColors[i];
            return (
              <motion.div
                key={award.title}
                variants={fadeInUp}
                className="group glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1"
              >
                <div className="flex items-start gap-4">
                  <div
                    className="flex-shrink-0 w-11 h-11 rounded-xl flex items-center justify-center transition-all duration-300 group-hover:scale-110"
                    style={{ backgroundColor: `${color}15`, color }}
                  >
                    <Icon size={22} />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base font-semibold text-white">
                        {award.title}
                      </h3>
                      <span
                        className="flex-shrink-0 text-xs font-bold px-2 py-0.5 rounded-full"
                        style={{
                          backgroundColor: `${color}15`,
                          color,
                        }}
                      >
                        {award.year}
                      </span>
                    </div>
                    <p className="text-sm text-gray-400 leading-relaxed">
                      {award.description}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-10"
        >
          <div className="inline-flex items-center gap-2 mb-3">
            <Handshake size={18} className="text-brand-orange" />
            <h3 className="text-xl font-bold text-white">Our Partners</h3>
          </div>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-5"
        >
          {awardsPartnersContent.partners.map((partner, i) => (
            <motion.div
              key={partner.name}
              variants={fadeInUp}
              whileHover={{ y: -6, scale: 1.03 }}
              transition={{ type: "spring", stiffness: 400, damping: 20 }}
              className="group bg-white rounded-2xl p-6 flex items-center justify-center h-24 cursor-pointer shadow-md shadow-black/5 hover:shadow-xl hover:shadow-brand-orange/15 border border-transparent hover:border-brand-orange/20"
            >
              <Image
                src={partner.logo}
                alt={partner.name}
                width={140}
                height={50}
                className={`w-auto object-contain transition-transform duration-300 group-hover:scale-110 ${
                  i === 3 ? "h-14 max-w-[140px]" : "h-9 max-w-[120px]"
                }`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
