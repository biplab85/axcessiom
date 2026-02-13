"use client";

import { useRef } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { teamContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { Users } from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCards, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cards";

const cardColors = ["#E8612D", "#F59E0B", "#10B981", "#3B82F6", "#8B5CF6"];

export default function Team() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);

  return (
    <section
      id="team"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark" />

      {/* Decorative blurs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-brand-orange/[0.03] rounded-full blur-[100px]" />
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-accent-emerald/[0.03] rounded-full blur-[100px]" />

      <div
        className="mouse-glow hidden lg:block"
        style={{ left: mouse.x, top: mouse.y }}
      />

      <div className="section-container relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <span className="inline-block text-sm font-semibold tracking-widest uppercase text-brand-orange mb-4">
            {teamContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {teamContent.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {teamContent.subheadline}
          </p>
        </motion.div>

        {/* ── 2-column layout ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          {/* LEFT — Core Team */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="space-y-6">
              {teamContent.team.map((member) => (
                <div
                  key={member.name}
                  className="glass-card glass-card-hover rounded-2xl p-6 transition-all duration-500 hover:-translate-y-1 group"
                >
                  <div className="flex flex-col sm:flex-row items-center sm:items-start gap-5">
                    {/* Photo */}
                    <div className="relative shrink-0 w-28 h-28 rounded-full overflow-hidden border-2 border-brand-orange/20 group-hover:border-brand-orange/40 transition-colors duration-500">
                      <Image
                        src={member.image}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    </div>

                    <div className="text-center sm:text-left">
                      {/* Name */}
                      <h3 className="text-xl font-bold text-white mb-1">
                        {member.name}
                      </h3>

                      {/* Role */}
                      <p className="text-sm font-semibold text-brand-orange uppercase tracking-wider mb-3">
                        {member.role}
                      </p>

                      {/* Bio */}
                      <p className="text-sm text-gray-400 leading-relaxed">
                        {member.bio}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Bottom note */}
            <div className="mt-8 flex items-center justify-center lg:justify-start gap-2 text-sm text-gray-500">
              <Users size={16} className="text-brand-orange/60" />
              Our team of scientists and engineers is continually growing
            </div>
          </motion.div>

          {/* RIGHT — Advisors (Swiper Effect Cards) */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >

            <div className="flex flex-col items-center">
              <Swiper
                effect="cards"
                grabCursor={true}
                loop={true}
                autoplay={{ delay: 2500, disableOnInteraction: false }}
                modules={[EffectCards, Autoplay]}
                className="team-cards-swiper"
              >
                {teamContent.advisors.map((advisor, i) => {
                  const accent = cardColors[i % cardColors.length];
                  return (
                    <SwiperSlide key={advisor.name}>
                      <div
                        className="rounded-2xl p-6 text-center"
                        style={{
                          background: `linear-gradient(135deg, rgba(255,255,255,0.06) 0%, rgba(255,255,255,0.02) 100%)`,
                          border: `1px solid rgba(255,255,255,0.08)`,
                          backdropFilter: "blur(12px)",
                        }}
                      >
                        {/* Photo */}
                        <div
                          className="relative mx-auto mb-4 w-24 h-24 rounded-full overflow-hidden border-2 transition-colors duration-500"
                          style={{ borderColor: `${accent}40` }}
                        >
                          <Image
                            src={advisor.image}
                            alt={advisor.name}
                            fill
                            className="object-cover"
                          />
                        </div>

                        {/* Name */}
                        <h3 className="text-lg font-bold text-white mb-1">
                          {advisor.name}
                        </h3>

                        {/* Role */}
                        <p
                          className="text-xs font-semibold uppercase tracking-wider mb-4"
                          style={{ color: accent }}
                        >
                          {advisor.role}
                        </p>

                        {/* Bio */}
                        <p className="text-xs text-gray-400 leading-relaxed">
                          {advisor.bio}
                        </p>
                      </div>
                    </SwiperSlide>
                  );
                })}
              </Swiper>

              <p className="text-xs text-gray-600 mt-8">
                Swipe or drag to see more advisors
              </p>
            </div>
          </motion.div>
        </div>
      </div>

    </section>
  );
}
