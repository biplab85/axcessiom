"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { problemContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import {
  Hand,
  MicOff,
  DollarSign,
  ShieldAlert,
  type LucideIcon,
} from "lucide-react";

const icons: LucideIcon[] = [Hand, MicOff, DollarSign, ShieldAlert];
const TAB_DURATION = 5000;

export default function Problem() {
  const [activeTab, setActiveTab] = useState(0);
  const [progressKey, setProgressKey] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const timerRef = useRef<ReturnType<typeof setInterval>>();
  const mouse = useMousePosition(sectionRef);

  const resetTimer = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setActiveTab((t) => (t + 1) % problemContent.painPoints.length);
      setProgressKey((k) => k + 1);
    }, TAB_DURATION);
  };

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleTabClick = (index: number) => {
    setActiveTab(index);
    setProgressKey((k) => k + 1);
    resetTimer();
  };

  return (
    <section
      ref={sectionRef}
      id="problem"
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-50" />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(circle at 25% 25%, rgba(232, 97, 45, 0.04), transparent 50%), radial-gradient(circle at 75% 75%, rgba(20, 48, 77, 0.06), transparent 50%)",
        }}
      />

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
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {problemContent.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-400 leading-relaxed">
            {problemContent.subheadline}
          </p>
        </motion.div>

        {/* Desktop: Tabs + Content */}
        <div className="hidden md:grid md:grid-cols-12 gap-8 items-start">
          <div className="col-span-5 space-y-3">
            {problemContent.painPoints.map((point, i) => {
              const Icon = icons[i];
              const isActive = activeTab === i;
              return (
                <motion.button
                  key={i}
                  onClick={() => handleTabClick(i)}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className={`w-full text-left p-5 rounded-xl transition-all duration-300 ${
                    isActive
                      ? "glass-card !border-brand-orange/30 !bg-brand-orange/[0.05]"
                      : "border border-transparent hover:bg-white/[0.02]"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <Icon
                      size={20}
                      className={
                        isActive ? "text-brand-orange" : "text-gray-500"
                      }
                    />
                    <span
                      className={`font-medium ${
                        isActive ? "text-white" : "text-gray-400"
                      }`}
                    >
                      {point.title}
                    </span>
                  </div>
                  {isActive && (
                    <div className="mt-3 h-1 bg-white/10 rounded-full overflow-hidden">
                      <div
                        key={progressKey}
                        className="h-full bg-brand-orange rounded-full"
                        style={{
                          animation: `progress-fill ${TAB_DURATION}ms linear forwards`,
                        }}
                      />
                    </div>
                  )}
                </motion.button>
              );
            })}
          </div>

          <div className="col-span-7">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTab}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
                className="glass-card rounded-2xl p-8 lg:p-10"
              >
                <div className="flex items-center gap-3 mb-5">
                  {(() => {
                    const Icon = icons[activeTab];
                    return (
                      <div className="w-12 h-12 rounded-xl bg-brand-orange/10 flex items-center justify-center">
                        <Icon size={24} className="text-brand-orange" />
                      </div>
                    );
                  })()}
                  <h3 className="text-xl font-semibold text-white">
                    {problemContent.painPoints[activeTab].title}
                  </h3>
                </div>
                <p className="text-gray-400 leading-relaxed text-lg">
                  {problemContent.painPoints[activeTab].description}
                </p>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* Mobile: Cards */}
        <div className="md:hidden space-y-4">
          {problemContent.painPoints.map((point, i) => {
            const Icon = icons[i];
            return (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card rounded-xl p-5"
              >
                <div className="flex items-center gap-3 mb-3">
                  <Icon size={20} className="text-brand-orange" />
                  <h3 className="font-medium text-white">{point.title}</h3>
                </div>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {point.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
