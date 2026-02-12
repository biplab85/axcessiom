"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import Image from "next/image";
import { navContent, contactContent } from "@/lib/content";
import {
  X,
  ArrowRight,
  Mail,
  MapPin,
  MonitorPlay,
  MessageCircle,
  Linkedin,
  Twitter,
  Instagram,
  Facebook,
} from "lucide-react";

const socialIcons: Record<string, typeof Linkedin> = {
  LinkedIn: Linkedin,
  Twitter: Twitter,
  Instagram: Instagram,
  Facebook: Facebook,
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isContactDrawerOpen, setIsContactDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const indicatorRef = useRef<HTMLDivElement>(null);
  const navContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = navContent.links.map((l) => l.href.replace("#", ""));
      let foundActive = false;
      for (const section of [...sections].reverse()) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          if (rect.top <= 150) {
            setActiveSection(section);
            foundActive = true;
            break;
          }
        }
      }
      if (!foundActive) setActiveSection("");
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Sliding indicator
  useEffect(() => {
    if (!navContainerRef.current || !indicatorRef.current) return;
    const activeLink = navContainerRef.current.querySelector(
      '[data-active="true"]'
    ) as HTMLElement;
    if (activeLink) {
      const containerRect = navContainerRef.current.getBoundingClientRect();
      const linkRect = activeLink.getBoundingClientRect();
      indicatorRef.current.style.width = `${linkRect.width}px`;
      indicatorRef.current.style.left = `${linkRect.left - containerRect.left}px`;
      indicatorRef.current.style.opacity = "1";
    } else {
      indicatorRef.current.style.opacity = "0";
    }
  }, [activeSection]);

  // Lock body scroll
  useEffect(() => {
    if (isMenuOpen || isContactDrawerOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMenuOpen, isContactDrawerOpen]);

  const scrollToSection = useCallback((href: string) => {
    const element = document.querySelector(href);
    if (element) element.scrollIntoView({ behavior: "smooth" });
    setIsMenuOpen(false);
  }, []);

  const handleKeyDown = useCallback(
    (e: React.KeyboardEvent, action: () => void) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault();
        action();
      }
    },
    []
  );

  return (
    <>
      <style>{`
        @keyframes nav-glow-pulse {
          0%, 100% { opacity: 0.6; }
          50% { opacity: 1; }
        }
        .nav-cta-shimmer::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent);
          animation: nav-shimmer 3s ease-in-out infinite;
        }
        @keyframes nav-shimmer {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(100%); }
        }
      `}</style>

      <header
        role="banner"
        className="fixed top-0 left-0 right-0 z-50"
        style={{
          padding: isScrolled ? "10px 0" : "16px 0",
          background: isScrolled
            ? "linear-gradient(135deg, rgba(10,10,14,0.88) 0%, rgba(14,14,20,0.92) 50%, rgba(10,10,14,0.88) 100%)"
            : "transparent",
          backdropFilter: isScrolled ? "blur(20px) saturate(1.4)" : "none",
          WebkitBackdropFilter: isScrolled ? "blur(20px) saturate(1.4)" : "none",
          borderBottom: isScrolled
            ? "1px solid rgba(232,97,45,0.08)"
            : "1px solid transparent",
          boxShadow: isScrolled
            ? "0 8px 32px rgba(0,0,0,0.4), 0 0 80px -20px rgba(232,97,45,0.08)"
            : "none",
          transition: "all 0.6s cubic-bezier(0.22, 1, 0.36, 1)",
        }}
      >
        {/* Top edge gradient line */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: "10%",
            right: "10%",
            height: "1px",
            background:
              "linear-gradient(90deg, transparent, rgba(232,97,45,0.3) 30%, rgba(245,158,11,0.2) 70%, transparent)",
            opacity: isScrolled ? 1 : 0,
            transition: "opacity 0.6s ease",
          }}
        />

        <div className="section-container">
          <nav
            className="flex items-center justify-between"
            role="navigation"
            aria-label="Main navigation"
          >
            {/* Logo */}
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="relative z-10 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange rounded-lg"
            >
              <div className="relative flex items-center gap-2 hover:scale-105 transition-transform duration-500 ease-out">
                <Image
                  src={navContent.logo.src}
                  alt={navContent.logo.alt}
                  width={140}
                  height={36}
                  className="h-8 w-auto brightness-0 invert"
                />
              </div>
            </a>

            {/* Desktop Links */}
            <div
              ref={navContainerRef}
              className="hidden lg:flex items-center relative"
              role="menubar"
            >
              {/* Sliding active indicator */}
              <div
                ref={indicatorRef}
                className="absolute top-[4px] h-[calc(100%-8px)] rounded-[10px] pointer-events-none"
                style={{
                  background:
                    "linear-gradient(135deg, rgba(232,97,45,0.15) 0%, rgba(245,158,11,0.08) 100%)",
                  border: "1px solid rgba(232,97,45,0.2)",
                  boxShadow:
                    "0 0 16px rgba(232,97,45,0.1), inset 0 1px 0 rgba(255,255,255,0.05)",
                  opacity: 0,
                  transitionProperty: "left, width, opacity",
                  transitionDuration: "0.4s",
                  transitionTimingFunction: "cubic-bezier(0.22, 1, 0.36, 1)",
                }}
              />

              {navContent.links.map((link) => {
                const isActive =
                  activeSection === link.href.replace("#", "");
                return (
                  <a
                    key={link.label}
                    href={link.href}
                    data-active={isActive}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="relative z-10 px-3 xl:px-4 py-2.5 text-xs font-semibold tracking-wide whitespace-nowrap rounded-[10px] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                    style={{
                      color: isActive
                        ? "#fdba74"
                        : "rgba(255,255,255,0.5)",
                      textShadow: isActive
                        ? "0 0 20px rgba(232,97,45,0.4)"
                        : "none",
                    }}
                    onMouseEnter={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "rgba(255,255,255,0.85)";
                    }}
                    onMouseLeave={(e) => {
                      if (!isActive)
                        e.currentTarget.style.color = "rgba(255,255,255,0.5)";
                    }}
                    role="menuitem"
                    aria-current={isActive ? "page" : undefined}
                  >
                    {link.label}
                  </a>
                );
              })}
            </div>

            {/* Desktop Contact Drawer Toggle */}
            <div className="hidden lg:flex items-center gap-3">
              {/* Contact Drawer Toggle */}
              <button
                onClick={() => setIsContactDrawerOpen(true)}
                className="group relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-accent-amber"
                style={{
                  background: "rgba(245,158,11,0.08)",
                  border: "1px solid rgba(245,158,11,0.15)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(245,158,11,0.15)";
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.3)";
                  e.currentTarget.style.boxShadow =
                    "0 0 20px rgba(245,158,11,0.15)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(245,158,11,0.08)";
                  e.currentTarget.style.borderColor = "rgba(245,158,11,0.15)";
                  e.currentTarget.style.boxShadow = "none";
                }}
                aria-label="Open contact drawer"
              >
                <MessageCircle
                  className="w-5 h-5 group-hover:scale-110 transition-transform duration-300"
                  style={{ color: "#F59E0B" }}
                />
              </button>
            </div>

            {/* Mobile Menu Button — animated hamburger */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              onKeyDown={(e) =>
                handleKeyDown(e, () => setIsMenuOpen(!isMenuOpen))
              }
              className="lg:hidden relative w-12 h-12 flex items-center justify-center rounded-xl transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange z-10"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              aria-label={
                isMenuOpen ? "Close navigation menu" : "Open navigation menu"
              }
              aria-expanded={isMenuOpen}
              aria-controls="mobile-menu"
            >
              <div className="relative w-6 h-6">
                <span
                  className="absolute left-0 w-6 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    top: isMenuOpen ? "9px" : "4px",
                    background: isMenuOpen
                      ? "#E8612D"
                      : "rgba(255,255,255,0.7)",
                    transform: isMenuOpen
                      ? "rotate(45deg) translateY(6px)"
                      : "none",
                  }}
                />
                <span
                  className="absolute left-0 top-[11px] w-6 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: "rgba(255,255,255,0.7)",
                    opacity: isMenuOpen ? 0 : 1,
                    transform: isMenuOpen ? "scaleX(0)" : "scaleX(1)",
                  }}
                />
                <span
                  className="absolute left-0 bottom-1 w-6 h-0.5 rounded-full transition-all duration-300"
                  style={{
                    background: isMenuOpen
                      ? "#F59E0B"
                      : "rgba(255,255,255,0.7)",
                    transform: isMenuOpen
                      ? "rotate(-45deg) translateY(-6px)"
                      : "none",
                  }}
                />
              </div>
            </button>
          </nav>
        </div>
      </header>

      {/* ─── Mobile Menu Overlay ─── */}
      <div
        id="mobile-menu"
        className={`lg:hidden fixed inset-0 z-40 transition-all duration-300 ${
          isMenuOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isMenuOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setIsMenuOpen(false)}
        />

        {/* Slide-in Panel */}
        <aside
          className={`absolute top-0 right-0 w-full max-w-sm h-full shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background:
              "linear-gradient(180deg, #0c0c10 0%, #0a0a0e 40%, #080808 100%)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Navigation menu"
        >
          {/* Left accent line */}
          <div
            className="absolute top-0 left-0 w-[1px] h-full pointer-events-none"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(232,97,45,0.3) 30%, rgba(245,158,11,0.2) 60%, transparent 100%)",
            }}
          />

          {/* Header */}
          <div
            className="relative flex items-center justify-between p-6"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="absolute inset-0 opacity-40 pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse 70% 100% at 30% 0%, rgba(232,97,45,0.08) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <Image
                src={navContent.logo.src}
                alt={navContent.logo.alt}
                width={120}
                height={32}
                className="h-7 w-auto brightness-0 invert"
              />
            </div>
            <button
              onClick={() => setIsMenuOpen(false)}
              className="relative w-11 h-11 flex items-center justify-center rounded-xl transition-all duration-300 active:scale-90 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500"
              style={{
                background:
                  "linear-gradient(135deg, rgba(239,68,68,0.08) 0%, rgba(239,68,68,0.04) 100%)",
                border: "1px solid rgba(239,68,68,0.15)",
              }}
              aria-label="Close menu"
            >
              <X
                className="w-[22px] h-[22px]"
                style={{ color: "rgba(239,68,68,0.75)" }}
                strokeWidth={2.5}
              />
            </button>
          </div>

          {/* Links */}
          <nav className="flex-1 p-6 space-y-1.5 overflow-y-auto">
            {navContent.links.map((link, index) => {
              const isActive =
                activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={(e) => {
                    e.preventDefault();
                    scrollToSection(link.href);
                  }}
                  className="group relative flex items-center justify-between p-4 rounded-xl overflow-hidden transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
                  style={{
                    background: isActive
                      ? "rgba(232,97,45,0.1)"
                      : "rgba(255,255,255,0.02)",
                    border: isActive
                      ? "1px solid rgba(232,97,45,0.2)"
                      : "1px solid transparent",
                    transitionDelay: isMenuOpen
                      ? `${index * 50 + 80}ms`
                      : "0ms",
                    transform: isMenuOpen
                      ? "translateX(0)"
                      : "translateX(30px)",
                    opacity: isMenuOpen ? 1 : 0,
                  }}
                  onMouseEnter={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.04)";
                      e.currentTarget.style.borderColor =
                        "rgba(255,255,255,0.06)";
                    }
                  }}
                  onMouseLeave={(e) => {
                    if (!isActive) {
                      e.currentTarget.style.background =
                        "rgba(255,255,255,0.02)";
                      e.currentTarget.style.borderColor = "transparent";
                    }
                  }}
                  aria-current={isActive ? "page" : undefined}
                >
                  {/* Active left accent bar */}
                  {isActive && (
                    <div
                      className="absolute left-0 top-2 bottom-2 w-[3px] rounded-full"
                      style={{
                        background:
                          "linear-gradient(180deg, #E8612D, #F59E0B)",
                        animation: "nav-glow-pulse 2s ease-in-out infinite",
                      }}
                    />
                  )}

                  <span
                    className="text-base font-semibold tracking-wide"
                    style={{
                      color: isActive
                        ? "#fdba74"
                        : "rgba(255,255,255,0.6)",
                      paddingLeft: isActive ? "8px" : "0",
                      transition: "all 0.3s ease",
                    }}
                  >
                    {link.label}
                  </span>
                  <ArrowRight
                    className="w-4 h-4 transition-all duration-300"
                    style={{
                      color: isActive
                        ? "#E8612D"
                        : "rgba(255,255,255,0.2)",
                      opacity: isActive ? 1 : 0,
                      transform: isActive
                        ? "translateX(0)"
                        : "translateX(-8px)",
                    }}
                  />
                </a>
              );
            })}
          </nav>

          {/* Divider */}
          <div
            className="mx-6 h-[1px]"
            style={{
              background:
                "linear-gradient(90deg, transparent, rgba(232,97,45,0.15) 50%, transparent)",
            }}
          />

          {/* Mobile CTA */}
          <div className="p-6">
            <a
              href={navContent.cta.href}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(navContent.cta.href);
              }}
              className="group relative flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white overflow-hidden transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              style={{
                background:
                  "linear-gradient(135deg, #E8612D 0%, #FF7A45 50%, #E8612D 100%)",
                boxShadow:
                  "0 8px 24px -4px rgba(232,97,45,0.4), 0 0 0 1px rgba(232,97,45,0.2)",
                transitionDelay: isMenuOpen ? "350ms" : "0ms",
                opacity: isMenuOpen ? 1 : 0,
                transform: isMenuOpen ? "translateY(0)" : "translateY(10px)",
              }}
            >
              <MonitorPlay className="relative z-10 w-5 h-5" />
              <span className="relative z-10">{navContent.cta.label}</span>
              <ArrowRight className="relative z-10 w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>

            {/* Quick contact shortcut */}
            <button
              onClick={() => {
                setIsMenuOpen(false);
                setTimeout(() => setIsContactDrawerOpen(true), 300);
              }}
              className="mt-3 w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-medium transition-all duration-300"
              style={{
                color: "rgba(255,255,255,0.4)",
                background: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
                transitionDelay: isMenuOpen ? "400ms" : "0ms",
                opacity: isMenuOpen ? 1 : 0,
              }}
            >
              <MessageCircle
                className="w-4 h-4"
                style={{ color: "#F59E0B" }}
              />
              Quick Contact
            </button>
          </div>
        </aside>
      </div>

      {/* ─── Contact Drawer Overlay ─── */}
      <div
        className={`fixed inset-0 z-50 transition-all duration-300 ${
          isContactDrawerOpen
            ? "opacity-100 pointer-events-auto"
            : "opacity-0 pointer-events-none"
        }`}
        aria-hidden={!isContactDrawerOpen}
      >
        {/* Backdrop */}
        <div
          className="absolute inset-0 bg-black/70 backdrop-blur-md"
          onClick={() => setIsContactDrawerOpen(false)}
        />

        {/* Slide-in Contact Drawer */}
        <aside
          className={`absolute top-0 right-0 w-full max-w-md h-full shadow-2xl transition-transform duration-500 ease-out flex flex-col ${
            isContactDrawerOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            background:
              "linear-gradient(180deg, #0c0c10 0%, #0a0a0e 40%, #080808 100%)",
          }}
          role="dialog"
          aria-modal="true"
          aria-label="Contact information"
        >
          {/* Left accent line */}
          <div
            className="absolute top-0 left-0 w-[1px] h-full"
            style={{
              background:
                "linear-gradient(180deg, transparent 0%, rgba(232,97,45,0.3) 30%, rgba(245,158,11,0.2) 60%, transparent 100%)",
            }}
          />

          {/* Header */}
          <div
            className="relative flex items-center justify-between p-6"
            style={{ borderBottom: "1px solid rgba(255,255,255,0.06)" }}
          >
            <div
              className="absolute inset-0 opacity-40"
              style={{
                background:
                  "radial-gradient(ellipse 70% 100% at 30% 0%, rgba(232,97,45,0.1) 0%, transparent 70%)",
              }}
            />
            <div className="relative">
              <h2 className="text-xl font-bold text-white">Get in Touch</h2>
              <p
                className="text-sm"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                We&apos;d love to hear from you
              </p>
            </div>
            <button
              onClick={() => setIsContactDrawerOpen(false)}
              className="relative w-10 h-10 flex items-center justify-center rounded-lg transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-brand-orange"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.08)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.1)";
                e.currentTarget.style.borderColor = "rgba(239,68,68,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(255,255,255,0.05)";
                e.currentTarget.style.borderColor = "rgba(255,255,255,0.08)";
              }}
              aria-label="Close contact drawer"
            >
              <X
                className="w-5 h-5"
                style={{ color: "rgba(255,255,255,0.6)" }}
              />
            </button>
          </div>

          {/* Drawer Content */}
          <div className="flex-1 p-6 space-y-6 overflow-y-auto">
            <div className="space-y-3">
              <h3
                className="text-[11px] font-semibold uppercase tracking-[0.15em] mb-4"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Contact Info
              </h3>

              {/* Email */}
              <a
                href={`mailto:${contactContent.details.email}`}
                className="group relative flex items-center gap-4 p-4 rounded-xl overflow-hidden transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "rgba(232,97,45,0.08)";
                  e.currentTarget.style.borderColor = "rgba(232,97,45,0.2)";
                  e.currentTarget.style.transform = "translateX(-4px)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "rgba(255,255,255,0.03)";
                  e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)";
                  e.currentTarget.style.transform = "translateX(0)";
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(232,97,45,0.1)",
                    border: "1px solid rgba(232,97,45,0.15)",
                  }}
                >
                  <Mail className="w-5 h-5" style={{ color: "#E8612D" }} />
                </div>
                <div>
                  <div
                    className="text-[11px] font-medium"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Email
                  </div>
                  <div className="text-sm font-semibold text-white">
                    {contactContent.details.email}
                  </div>
                </div>
                <ArrowRight
                  className="w-4 h-4 ml-auto opacity-0 -translate-x-2 group-hover:opacity-50 group-hover:translate-x-0 transition-all duration-300"
                  style={{ color: "#E8612D" }}
                />
              </a>

              {/* Location */}
              <div
                className="flex items-center gap-4 p-4 rounded-xl"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                }}
              >
                <div
                  className="w-11 h-11 rounded-lg flex items-center justify-center flex-shrink-0"
                  style={{
                    background: "rgba(245,158,11,0.1)",
                    border: "1px solid rgba(245,158,11,0.15)",
                  }}
                >
                  <MapPin className="w-5 h-5" style={{ color: "#F59E0B" }} />
                </div>
                <div>
                  <div
                    className="text-[11px] font-medium"
                    style={{ color: "rgba(255,255,255,0.35)" }}
                  >
                    Address
                  </div>
                  <div className="text-sm font-semibold text-white leading-snug">
                    {contactContent.details.location}
                  </div>
                </div>
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(232,97,45,0.15) 50%, transparent)",
              }}
            />

            {/* Social Links */}
            <div className="space-y-4">
              <h3
                className="text-[11px] font-semibold uppercase tracking-[0.15em]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                Follow Us
              </h3>
              <div className="flex gap-3">
                {contactContent.details.social.map((s) => {
                  const Icon = socialIcons[s.platform] || Linkedin;
                  return (
                    <a
                      key={s.platform}
                      href={s.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group w-11 h-11 rounded-lg flex items-center justify-center transition-all duration-300"
                      style={{
                        background: "rgba(255,255,255,0.04)",
                        border: "1px solid rgba(255,255,255,0.08)",
                      }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background =
                          "rgba(232,97,45,0.15)";
                        e.currentTarget.style.borderColor =
                          "rgba(232,97,45,0.3)";
                        e.currentTarget.style.boxShadow =
                          "0 4px 16px rgba(232,97,45,0.2)";
                        e.currentTarget.style.transform = "translateY(-2px)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background =
                          "rgba(255,255,255,0.04)";
                        e.currentTarget.style.borderColor =
                          "rgba(255,255,255,0.08)";
                        e.currentTarget.style.boxShadow = "none";
                        e.currentTarget.style.transform = "translateY(0)";
                      }}
                      aria-label={s.platform}
                    >
                      <Icon
                        className="w-[18px] h-[18px] transition-colors duration-300"
                        style={{ color: "rgba(255,255,255,0.45)" }}
                      />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Divider */}
            <div
              className="h-[1px]"
              style={{
                background:
                  "linear-gradient(90deg, transparent, rgba(245,158,11,0.15) 50%, transparent)",
              }}
            />

            {/* Response Time Info */}
            <div
              className="relative rounded-xl p-4 overflow-hidden"
              style={{
                background:
                  "linear-gradient(135deg, rgba(232,97,45,0.06) 0%, rgba(245,158,11,0.04) 100%)",
                border: "1px solid rgba(232,97,45,0.12)",
              }}
            >
              <div
                className="absolute top-0 inset-x-0 h-[1px]"
                style={{
                  background:
                    "linear-gradient(90deg, transparent 10%, rgba(232,97,45,0.3) 50%, transparent 90%)",
                }}
              />
              <div className="text-sm font-semibold text-white mb-2">
                Response Time
              </div>
              <div className="flex items-center gap-2 mb-1.5">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#E8612D" }}
                />
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Social media — within a day
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div
                  className="w-1.5 h-1.5 rounded-full"
                  style={{ background: "#F59E0B" }}
                />
                <span
                  className="text-xs"
                  style={{ color: "rgba(255,255,255,0.5)" }}
                >
                  Email — up to 3 days
                </span>
              </div>
            </div>
          </div>

          {/* Drawer Footer CTA */}
          <div
            className="p-6"
            style={{ borderTop: "1px solid rgba(255,255,255,0.06)" }}
          >
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                setIsContactDrawerOpen(false);
                scrollToSection("#contact");
              }}
              className="group flex items-center justify-center gap-2 w-full py-4 rounded-xl font-semibold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
              style={{
                background:
                  "linear-gradient(135deg, #E8612D 0%, #FF7A45 50%, #E8612D 100%)",
                boxShadow:
                  "0 8px 24px -4px rgba(232,97,45,0.4), 0 0 0 1px rgba(232,97,45,0.2)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 12px 32px -4px rgba(232,97,45,0.5), 0 0 0 1px rgba(232,97,45,0.3)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow =
                  "0 8px 24px -4px rgba(232,97,45,0.4), 0 0 0 1px rgba(232,97,45,0.2)";
              }}
            >
              Send Us a Message
              <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform duration-300" />
            </a>
          </div>
        </aside>
      </div>
    </>
  );
}
