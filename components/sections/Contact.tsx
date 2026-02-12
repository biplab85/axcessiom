"use client";

import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { contactContent } from "@/lib/content";
import { useMousePosition } from "@/lib/hooks";
import { fadeInUp, fadeInLeft, fadeInRight, staggerContainer } from "@/lib/animations";
import {
  Mail,
  MapPin,
  Send,
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

export default function Contact() {
  const sectionRef = useRef<HTMLElement>(null);
  const mouse = useMousePosition(sectionRef);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative py-24 lg:py-32 overflow-hidden"
    >
      <div className="absolute inset-0 bg-dark-50" />

      {/* Grid pattern */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.03] hidden lg:block"
        width="100%"
        height="100%"
      >
        <defs>
          <pattern
            id="contactGrid"
            width="60"
            height="60"
            patternUnits="userSpaceOnUse"
          >
            <path
              d="M 60 0 L 0 0 0 60"
              fill="none"
              stroke="rgba(232, 97, 45, 0.6)"
              strokeWidth="0.5"
            />
          </pattern>
        </defs>
        <rect width="100%" height="100%" fill="url(#contactGrid)" />
      </svg>

      <div className="absolute top-1/2 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-orange/[0.03] rounded-full blur-[120px]" />

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
            {contactContent.label}
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white leading-tight">
            {contactContent.headline}
          </h2>
          <p className="mt-5 text-lg text-gray-400 max-w-xl mx-auto leading-relaxed">
            {contactContent.subheadline}
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={staggerContainer}
          className="grid lg:grid-cols-5 gap-8 max-w-6xl mx-auto"
        >
          {/* Contact Info — left column */}
          <motion.div
            variants={fadeInLeft}
            className="lg:col-span-2 space-y-8"
          >
            {/* Email */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-brand-orange/10 border border-brand-orange/20 flex items-center justify-center">
                  <Mail size={18} className="text-brand-orange" />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Email
                </h3>
              </div>
              <a
                href={`mailto:${contactContent.details.email}`}
                className="text-gray-400 hover:text-brand-orange transition-colors duration-300"
              >
                {contactContent.details.email}
              </a>
            </div>

            {/* Location */}
            <div className="glass-card rounded-2xl p-6">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-xl bg-accent-emerald/10 border border-accent-emerald/20 flex items-center justify-center">
                  <MapPin size={18} className="text-accent-emerald" />
                </div>
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider">
                  Location
                </h3>
              </div>
              <p className="text-gray-400">
                {contactContent.details.location}
              </p>
            </div>

            {/* Social Links */}
            <div className="glass-card rounded-2xl p-6">
              <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">
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
                      className="w-10 h-10 rounded-xl bg-white/[0.04] border border-white/[0.06] flex items-center justify-center text-gray-500 hover:text-brand-orange hover:border-brand-orange/30 hover:bg-brand-orange/10 transition-all duration-300"
                      aria-label={s.platform}
                    >
                      <Icon size={16} />
                    </a>
                  );
                })}
              </div>
            </div>
          </motion.div>

          {/* Contact Form — right column */}
          <motion.div
            variants={fadeInRight}
            className="lg:col-span-3"
          >
            <div className="glass-card rounded-2xl p-8">
              {submitted ? (
                <div className="text-center py-12">
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-accent-emerald/10 border border-accent-emerald/20 mb-6">
                    <Send size={24} className="text-accent-emerald" />
                  </div>
                  <h3 className="text-xl font-bold text-white mb-2">
                    Message Sent!
                  </h3>
                  <p className="text-gray-400">
                    Thank you for reaching out. We&apos;ll get back to you soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  {/* Name & Email row */}
                  <div className="grid sm:grid-cols-2 gap-5">
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {contactContent.formFields[0].label}
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder={contactContent.formFields[0].placeholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/40 focus:bg-white/[0.06] transition-all duration-300"
                      />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                        {contactContent.formFields[1].label}
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder={contactContent.formFields[1].placeholder}
                        className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/40 focus:bg-white/[0.06] transition-all duration-300"
                      />
                    </div>
                  </div>

                  {/* Interest select */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {contactContent.formFields[2].label}
                    </label>
                    <select
                      name="interest"
                      required
                      defaultValue=""
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white focus:outline-none focus:border-brand-orange/40 focus:bg-white/[0.06] transition-all duration-300 appearance-none"
                    >
                      <option value="" disabled className="bg-neutral-900">
                        Select one...
                      </option>
                      {contactContent.formFields[2].options?.map((opt) => (
                        <option key={opt} value={opt} className="bg-neutral-900">
                          {opt}
                        </option>
                      ))}
                    </select>
                  </div>

                  {/* Message textarea */}
                  <div>
                    <label className="block text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2">
                      {contactContent.formFields[3].label}
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder={contactContent.formFields[3].placeholder}
                      className="w-full px-4 py-3 bg-white/[0.04] border border-white/[0.08] rounded-xl text-sm text-white placeholder-gray-600 focus:outline-none focus:border-brand-orange/40 focus:bg-white/[0.06] transition-all duration-300 resize-none"
                    />
                  </div>

                  {/* Submit */}
                  <button
                    type="submit"
                    className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-semibold text-white bg-gradient-to-r from-brand-orange to-brand-orange-light rounded-xl hover:shadow-lg hover:shadow-brand-orange/25 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    <Send size={16} />
                    Send Message
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
