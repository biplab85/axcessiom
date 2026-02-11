"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { navContent } from "@/lib/content";
import { useScrolled } from "@/lib/hooks";
import { Menu, X } from "lucide-react";

export default function Navbar() {
  const scrolled = useScrolled(20);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeLink, setActiveLink] = useState(0);
  const linksRef = useRef<(HTMLAnchorElement | null)[]>([]);
  const [indicatorStyle, setIndicatorStyle] = useState({ left: 0, width: 0 });

  useEffect(() => {
    const el = linksRef.current[activeLink];
    if (el) {
      setIndicatorStyle({ left: el.offsetLeft, width: el.offsetWidth });
    }
  }, [activeLink]);

  useEffect(() => {
    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  // Track active section on scroll
  useEffect(() => {
    const sectionIds = navContent.links.map((l) => l.href.replace("#", ""));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const idx = sectionIds.indexOf(entry.target.id);
            if (idx !== -1) setActiveLink(idx);
          }
        });
      },
      { rootMargin: "-40% 0px -50% 0px" }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-dark/80 backdrop-blur-xl border-b border-white/[0.06] shadow-lg shadow-black/20"
          : "bg-transparent"
      }`}
    >
      <div className="section-container flex items-center justify-between h-[72px] lg:h-20">
        {/* Logo */}
        <a href="#" className="relative z-10">
          <Image
            src={navContent.logo.src}
            alt={navContent.logo.alt}
            width={140}
            height={36}
            className="h-8 w-auto brightness-0 invert"
          />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 relative">
          {/* Sliding indicator */}
          <motion.div
            className="absolute bottom-0 h-0.5 bg-brand-orange rounded-full"
            animate={indicatorStyle}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
          {navContent.links.map((link, i) => (
            <a
              key={link.label}
              ref={(el) => {
                linksRef.current[i] = el;
              }}
              href={link.href}
              onClick={() => setActiveLink(i)}
              className={`px-4 py-2 text-sm font-medium transition-colors duration-300 ${
                activeLink === i
                  ? "text-white"
                  : "text-gray-400 hover:text-white"
              }`}
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Desktop CTA */}
        <a
          href={navContent.cta.href}
          className="hidden md:inline-flex items-center px-5 py-2.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-xl hover:shadow-lg hover:shadow-brand-orange/25 transition-all duration-300 hover:-translate-y-0.5"
        >
          {navContent.cta.label}
        </a>

        {/* Mobile Toggle */}
        <button
          onClick={() => setMobileOpen(!mobileOpen)}
          className="md:hidden relative z-10 p-2 text-white"
          aria-label="Toggle menu"
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-40 bg-dark/95 backdrop-blur-xl md:hidden"
          >
            <div className="flex flex-col items-center justify-center h-full gap-8">
              {navContent.links.map((link, i) => (
                <motion.a
                  key={link.label}
                  href={link.href}
                  onClick={() => {
                    setActiveLink(i);
                    setMobileOpen(false);
                  }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="text-2xl font-medium text-white hover:text-brand-orange transition-colors"
                >
                  {link.label}
                </motion.a>
              ))}
              <motion.a
                href={navContent.cta.href}
                onClick={() => setMobileOpen(false)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="mt-4 px-8 py-3 text-lg font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-xl"
              >
                {navContent.cta.label}
              </motion.a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
