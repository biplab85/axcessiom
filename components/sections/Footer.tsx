"use client";

import { motion } from "framer-motion";
import { MapPin, Mail } from "lucide-react";
import Image from "next/image";
import { footerContent } from "@/lib/content";
import { fadeInUp, staggerContainer } from "@/lib/animations";

export default function Footer() {
  return (
    <footer className="relative bg-[#030308] border-t border-white/[0.04]">
      <div className="section-container pt-16 lg:pt-20 pb-12">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid gap-10 sm:grid-cols-2 lg:grid-cols-12"
        >
          {/* Brand */}
          <motion.div variants={fadeInUp} className="lg:col-span-4">
            <Image
              src={footerContent.logo.src}
              alt={footerContent.logo.alt}
              width={140}
              height={36}
              className="h-9 w-auto brightness-0 invert"
            />
            <p className="mt-5 text-sm text-gray-500 leading-relaxed max-w-xs">
              {footerContent.tagline}
            </p>
            <div className="mt-6 flex gap-2.5">
              {footerContent.social.map((s) => (
                <a
                  key={s.platform}
                  href={s.href}
                  aria-label={s.platform}
                  className="flex items-center justify-center w-10 h-10 rounded-xl bg-white/[0.03] text-gray-500 border border-white/[0.06] transition-all duration-300 hover:bg-brand-orange hover:text-white hover:border-brand-orange hover:shadow-lg hover:shadow-brand-orange/20 hover:-translate-y-0.5"
                >
                  {s.platform === "LinkedIn" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z" />
                    </svg>
                  )}
                  {s.platform === "Facebook" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                    </svg>
                  )}
                  {s.platform === "Twitter" && (
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            variants={fadeInUp}
            className="lg:col-span-2 lg:col-start-6"
          >
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h4>
            <ul className="mt-5 space-y-3.5">
              {footerContent.quickLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors duration-300 hover:text-brand-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp} className="lg:col-span-2">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h4>
            <ul className="mt-5 space-y-3.5">
              {footerContent.companyLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-500 transition-colors duration-300 hover:text-brand-orange"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp} className="lg:col-span-3">
            <h4 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact
            </h4>
            <ul className="mt-5 space-y-4">
              <li className="flex items-start gap-3">
                <MapPin
                  size={16}
                  className="mt-0.5 flex-shrink-0 text-brand-orange"
                />
                <span className="text-sm text-gray-500">
                  {footerContent.contact.location}
                </span>
              </li>
              <li>
                <a
                  href={`mailto:${footerContent.contact.email}`}
                  className="flex items-start gap-3 text-sm text-gray-500 transition-colors duration-300 hover:text-brand-orange"
                >
                  <Mail
                    size={16}
                    className="mt-0.5 flex-shrink-0 text-brand-orange"
                  />
                  {footerContent.contact.email}
                </a>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/[0.04]">
        <div className="section-container py-6 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-sm text-gray-600">{footerContent.copyright}</p>
          <div className="flex gap-6">
            {footerContent.legal.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm text-gray-600 transition-colors duration-300 hover:text-gray-400"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
