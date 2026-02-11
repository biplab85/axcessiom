# Axcessiom — Skills & Technologies Required

> A comprehensive breakdown of every skill and technology needed to rebuild [axcessiom.ca](https://axcessiom.ca) as a modern, animated, performance-optimized landing page — modeled after the reference sites (AppWeDo, Farmzeo, CFS, Tasvir Mirza).

---

## Color Palette

> Extracted from the current axcessiom.ca brand identity and logo. Extended with supporting neutrals and utility colors for a complete design system.

### Primary Brand Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Axcessiom Orange** | `#E8612D` | `rgb(232, 97, 45)` | Primary CTAs, active states, accent highlights, icons, hover effects |
| **Axcessiom Navy** | `#14304D` | `rgb(20, 48, 77)` | Headlines, navigation, footer background, dark sections, primary text |

### Extended Brand Shades

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Orange Light** | `#FF7A45` | `rgb(255, 122, 69)` | Hover state for orange buttons, light accents, gradient endpoints |
| **Orange Dark** | `#C94E1E` | `rgb(201, 78, 30)` | Active/pressed state for orange buttons, emphasis borders |
| **Orange Soft** | `#FFF1EB` | `rgb(255, 241, 235)` | Light orange background tint for cards, highlighted sections |
| **Navy Light** | `#1E4A6E` | `rgb(30, 74, 110)` | Secondary headings, hover states on navy elements |
| **Navy Dark** | `#0C1F33` | `rgb(12, 31, 51)` | Deep backgrounds, footer, overlay panels |
| **Navy Soft** | `#E8EEF4` | `rgb(232, 238, 244)` | Light navy tint for alternate section backgrounds |

### Neutral Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **White** | `#FFFFFF` | `rgb(255, 255, 255)` | Page background, card backgrounds, button text on dark |
| **Off White** | `#F9FAFB` | `rgb(249, 250, 251)` | Alternate section backgrounds, subtle separation |
| **Gray 100** | `#F3F4F6` | `rgb(243, 244, 246)` | Card backgrounds, input field backgrounds |
| **Gray 200** | `#E5E7EB` | `rgb(229, 231, 235)` | Borders, dividers, separator lines |
| **Gray 300** | `#D1D5DB` | `rgb(209, 213, 219)` | Disabled states, placeholder text |
| **Gray 500** | `#6B7280` | `rgb(107, 114, 128)` | Body text (secondary), subheadings, captions |
| **Gray 700** | `#374151` | `rgb(55, 65, 81)` | Body text (primary), paragraph text |
| **Gray 900** | `#111827` | `rgb(17, 24, 39)` | Headings on light backgrounds, high-contrast text |

### Utility / State Colors

| Color | Hex | RGB | Usage |
|-------|-----|-----|-------|
| **Success Green** | `#10B981` | `rgb(16, 185, 129)` | Form success messages, positive indicators |
| **Error Red** | `#EF4444` | `rgb(239, 68, 68)` | Form validation errors, required field alerts |
| **Warning Amber** | `#F59E0B` | `rgb(245, 158, 11)` | Warning notices, attention indicators |
| **Info Blue** | `#3B82F6` | `rgb(59, 130, 246)` | Informational messages, link highlights |

### Gradient Definitions

| Gradient | CSS Value | Usage |
|----------|-----------|-------|
| **Primary CTA** | `linear-gradient(135deg, #E8612D 0%, #FF7A45 100%)` | Primary buttons, hero CTA, final CTA section |
| **Hero Overlay** | `linear-gradient(180deg, rgba(20,48,77,0.9) 0%, rgba(20,48,77,0.6) 100%)` | Dark overlay on hero background image |
| **Section Accent** | `linear-gradient(135deg, #14304D 0%, #1E4A6E 100%)` | Dark section backgrounds (problem, CTA) |
| **Card Glow** | `radial-gradient(circle, rgba(232,97,45,0.15) 0%, transparent 70%)` | Subtle hover glow behind feature cards |

### Tailwind CSS Configuration

```js
// tailwind.config.js — colors
colors: {
  brand: {
    orange:      '#E8612D',
    'orange-light': '#FF7A45',
    'orange-dark':  '#C94E1E',
    'orange-soft':  '#FFF1EB',
    navy:        '#14304D',
    'navy-light':   '#1E4A6E',
    'navy-dark':    '#0C1F33',
    'navy-soft':    '#E8EEF4',
  },
  neutral: {
    50:  '#F9FAFB',
    100: '#F3F4F6',
    200: '#E5E7EB',
    300: '#D1D5DB',
    500: '#6B7280',
    700: '#374151',
    900: '#111827',
  },
}
```

---

## Typography

> The current axcessiom.ca uses **Poppins** as its primary (and only) font family. For the rebuild, Poppins remains the base — extended with weight and size variations to establish a complete typographic hierarchy.

### Font Family

| Role | Font | Source | Weights | Usage |
|------|------|--------|---------|-------|
| **Primary** | **Poppins** | Google Fonts | 300, 400, 500, 600, 700 | All text — headlines, body, buttons, navigation, labels, captions |

### Next.js Font Loading

```tsx
// app/layout.tsx
import { Poppins } from 'next/font/google';

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
  variable: '--font-poppins',
});
```

### Type Scale

| Element | Size (Desktop) | Size (Mobile) | Weight | Line Height | Letter Spacing | Color |
|---------|---------------|---------------|--------|-------------|----------------|-------|
| **Hero Headline** | `56px` / `3.5rem` | `36px` / `2.25rem` | 700 (Bold) | 1.1 | `-0.02em` | `#14304D` or `#FFFFFF` on dark |
| **Section Headline** | `40px` / `2.5rem` | `28px` / `1.75rem` | 700 (Bold) | 1.2 | `-0.01em` | `#14304D` |
| **Section Subheadline** | `20px` / `1.25rem` | `17px` / `1.063rem` | 400 (Regular) | 1.6 | `0` | `#6B7280` |
| **Card Title** | `20px` / `1.25rem` | `18px` / `1.125rem` | 600 (SemiBold) | 1.3 | `0` | `#14304D` |
| **Body Text** | `16px` / `1rem` | `15px` / `0.938rem` | 400 (Regular) | 1.7 | `0` | `#374151` |
| **Small Body / Caption** | `14px` / `0.875rem` | `13px` / `0.813rem` | 400 (Regular) | 1.5 | `0.01em` | `#6B7280` |
| **Nav Links** | `15px` / `0.938rem` | `16px` / `1rem` | 500 (Medium) | 1.0 | `0.01em` | `#14304D` |
| **CTA Buttons** | `16px` / `1rem` | `15px` / `0.938rem` | 600 (SemiBold) | 1.0 | `0.02em` | `#FFFFFF` |
| **Section Label** | `14px` / `0.875rem` | `13px` / `0.813rem` | 600 (SemiBold) | 1.0 | `0.08em` | `#E8612D` |
| **Testimonial Quote** | `18px` / `1.125rem` | `16px` / `1rem` | 400 (Regular) | 1.7 | `0` | `#374151` |
| **FAQ Question** | `17px` / `1.063rem` | `16px` / `1rem` | 600 (SemiBold) | 1.4 | `0` | `#14304D` |
| **FAQ Answer** | `15px` / `0.938rem` | `14px` / `0.875rem` | 400 (Regular) | 1.7 | `0` | `#6B7280` |
| **Footer Text** | `14px` / `0.875rem` | `13px` / `0.813rem` | 400 (Regular) | 1.6 | `0` | `#D1D5DB` |
| **Footer Heading** | `16px` / `1rem` | `15px` / `0.938rem` | 600 (SemiBold) | 1.3 | `0.02em` | `#FFFFFF` |

### Tailwind CSS Configuration

```js
// tailwind.config.js — typography
fontFamily: {
  poppins: ['var(--font-poppins)', 'Poppins', 'sans-serif'],
},
fontSize: {
  'hero':     ['3.5rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'hero-sm':  ['2.25rem', { lineHeight: '1.1', letterSpacing: '-0.02em' }],
  'section':  ['2.5rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'section-sm': ['1.75rem', { lineHeight: '1.2', letterSpacing: '-0.01em' }],
  'label':    ['0.875rem', { lineHeight: '1.0', letterSpacing: '0.08em' }],
},
```

### Font Weight Usage Guide

| Weight | Name | Where to Use |
|--------|------|-------------|
| **300** | Light | Large hero subheadlines, decorative large text, subtle emphasis |
| **400** | Regular | Body text, paragraphs, FAQ answers, testimonial quotes, descriptions |
| **500** | Medium | Navigation links, form labels, small emphasis text, breadcrumbs |
| **600** | SemiBold | Card titles, section labels, CTA buttons, FAQ questions, footer headings |
| **700** | Bold | Hero headline, section headlines, stats/numbers, strong emphasis |

---

## 1. Frontend Skills

- **HTML5 Semantic Markup** — Use proper semantic elements (`<header>`, `<main>`, `<section>`, `<article>`, `<footer>`, `<nav>`) to give the page meaningful structure for accessibility and SEO, as observed in the reference sites' clean DOM hierarchy.

- **CSS3 Advanced Features** — Master CSS Grid, Flexbox, custom properties (CSS variables), `clamp()` for fluid typography, backdrop filters, gradients, and pseudo-elements. The reference sites use layered visual effects that require deep CSS knowledge.

- **Tailwind CSS** — Primary utility-first CSS framework used across all reference sites (CFS, Tasvir Mirza). Required for rapid styling with custom color palettes (`bg-[#0B0B0B]`), responsive breakpoints, spacing scales, and dark theme implementation.

- **JavaScript (ES6+)** — Modern JavaScript for DOM manipulation, event handling, Intersection Observer API for scroll-triggered animations, dynamic content rendering, and smooth scroll behavior.

- **React 18+** — Component-based UI architecture. All reference sites are built with React. Needed for reusable section components (Hero, FAQ accordion, testimonial cards), state management for mobile menu toggles, and form handling.

- **Next.js 14+ (App Router)** — Full-stack React framework detected in CFS and Tasvir Mirza. Required for file-based routing, server-side rendering (SSR), static site generation (SSG), built-in image optimization (`next/image`), font optimization (`next/font`), and automatic code splitting.

- **Responsive Design** — Mobile-first approach with Tailwind breakpoints (`sm`, `md`, `lg`, `xl`, `2xl`). The reference sites render flawlessly from 320px mobile to 2560px ultrawide. Every section must adapt gracefully across all viewport sizes.

- **Accessibility (a11y)** — ARIA attributes, keyboard navigation, focus management, sufficient color contrast ratios (WCAG 2.1 AA), screen reader compatibility, and skip-to-content links. Critical for Axcessiom since the product itself serves people with disabilities.

---

## 2. UI/UX & Design Skills

- **Layout System (CSS Grid + Flexbox)** — Grid-based layouts for feature cards, benefit sections, and FAQ columns. Flexbox for navigation, CTA groups, and inline elements. The reference sites use sophisticated multi-column grids that collapse cleanly on mobile.

- **Typography System** — Poppins as the single font family (matching axcessiom.ca's existing brand), leveraging its full weight range (300–700) to create clear typographic hierarchy. Loaded via `next/font/google` for zero layout shift and optimal performance. See the Typography section above for the complete type scale.

- **Color System** — Axcessiom brand colors (orange `#E8612D` and navy `#14304D`) as primary palette, extended with shades, neutrals, and utility colors. Configured as Tailwind custom colors for consistent usage across all components. See the Color Palette section above for the full system with hex values, gradients, and Tailwind config.

- **Spacing & Sizing Scale** — Consistent 4px/8px base spacing scale applied throughout. Tailwind's spacing utilities (`p-4`, `gap-8`, `my-16`) ensure visual rhythm. The reference sites demonstrate generous whitespace that gives content room to breathe.

- **Mobile-First Design** — Design for 375px first, then progressively enhance for tablet (768px) and desktop (1280px+). Every reference site follows this pattern with touch-friendly tap targets (min 44px), stacked layouts on mobile, and expanded grids on desktop.

- **Design Consistency** — Uniform border radii, shadow depths, button styles, card treatments, and icon sizes across all sections. The reference sites maintain strict visual consistency — one look, one feel, zero exceptions.

- **Visual Hierarchy** — Clear information architecture with size, weight, color, and spacing creating scannable content flow. Headlines dominate, subheadlines support, body text informs, CTAs command attention. Every reference site nails this.

- **Component Design Patterns** — Reusable card components, pill badges, stat counters, accordion panels, testimonial carousels, step indicators, and trust badge rows. The reference sites share common component patterns that need to be implemented as flexible React components.

---

## 3. Animation & Interaction Skills

- **Framer Motion** — React animation library for declarative enter/exit animations, layout transitions, gesture handling, and staggered children animations. Used for section fade-ins, card reveals, and page transitions. Essential for matching the polished feel of the reference sites.

- **GSAP (GreenSock)** — High-performance animation engine for complex timeline-based sequences, scroll-triggered animations (`ScrollTrigger` plugin), text reveals, counter animations (stat numbers counting up), and parallax effects.

- **Scroll-Triggered Animations** — Elements animate into view as the user scrolls. Intersection Observer API or GSAP ScrollTrigger to trigger fade-up, slide-in, scale-up, and stagger animations per section. Every reference site uses this pattern extensively.

- **Hover Effects** — Interactive hover states on cards (lift + shadow), buttons (color shift + scale), navigation links (underline slide), and images (zoom + overlay). These micro-interactions provide tactile feedback and are present across all reference sites.

- **Micro-Interactions** — Subtle animations on button clicks (ripple/press), form input focus (border glow), accordion expand/collapse (smooth height transitions), mobile menu open/close (slide + fade), and scroll-to-top button appearance.

- **Page Load Animations** — Staggered hero content reveal (headline → subheadline → CTAs → social proof) creating a cinematic first impression. The reference sites all have choreographed above-the-fold animations.

- **Counter/Number Animations** — Animated stat counters for social proof elements (e.g., "CES 2023", price figures, years of experience). Count-up effect triggered on scroll into view.

- **Smooth Scrolling** — Native CSS `scroll-behavior: smooth` combined with programmatic smooth scroll for anchor links (How It Works, Benefits, FAQ navigation). All reference sites implement this.

---

## 4. Performance & Optimization Skills

- **Next.js Image Optimization** — `next/image` component for automatic WebP/AVIF conversion, responsive `srcset` generation, lazy loading, blur placeholders, and proper width/height to prevent layout shift. Detected in CFS and Tasvir Mirza builds.

- **Lazy Loading** — Defer off-screen images, heavy animation sections, and non-critical JavaScript. Native `loading="lazy"` for images plus dynamic `import()` for React components that aren't needed on initial render.

- **Code Splitting** — Next.js automatic route-based and component-based code splitting. Keep the initial JavaScript bundle small by dynamically importing animation libraries (GSAP, Framer Motion) only when sections enter the viewport.

- **Font Optimization** — `next/font` for self-hosted Google Fonts with `font-display: swap`, subset loading, and preloading critical fonts. The reference sites load 3-4 font families efficiently without blocking render.

- **Core Web Vitals** — Target scores: LCP < 2.5s, FID < 100ms, CLS < 0.1. Achieved through optimized images, minimal layout shifts (explicit dimensions on all media), efficient JavaScript execution, and server-side rendering.

- **Lighthouse Score Optimization** — Target 90+ across Performance, Accessibility, Best Practices, and SEO. Requires proper meta tags, compressed assets, efficient caching headers, minimal render-blocking resources, and accessible markup.

- **Bundle Size Management** — Tree-shaking unused code, importing only needed modules from libraries (`import { motion } from 'framer-motion'`), analyzing bundle size with `@next/bundle-analyzer`, and keeping total JS under 200KB gzipped.

- **Caching Strategy** — Proper `Cache-Control` headers for static assets, Vercel Edge Network CDN caching, immutable hashes on built assets (`_next/static/chunks/`), and SWR/ISR for any dynamic data.

---

## 5. SEO & Best Practices

- **Semantic HTML Structure** — Proper heading hierarchy (single `h1`, logical `h2`-`h6` nesting), landmark roles, `<nav>` for navigation, `<main>` for primary content, and descriptive `alt` text on every image. Search engines and screen readers depend on this.

- **Meta Tags** — Complete `<head>` with `title`, `description`, `viewport`, `charset`, `robots`, canonical URL, and language attributes. Every page needs unique, keyword-rich meta descriptions under 160 characters.

- **Open Graph (OG) Tags** — `og:title`, `og:description`, `og:image`, `og:url`, `og:type` for rich social media link previews when shared on LinkedIn, Facebook, and Twitter. Critical for a product launch page that will be shared.

- **Twitter Card Tags** — `twitter:card`, `twitter:title`, `twitter:description`, `twitter:image` for optimized Twitter/X link previews with large image cards.

- **Structured Data (Schema.org)** — JSON-LD schema markup for `Organization`, `Product`, `FAQPage`, and `Review` types. Enables rich snippets in Google search results (FAQ dropdowns, star ratings, product info).

- **Sitemap & robots.txt** — Auto-generated `sitemap.xml` via Next.js and properly configured `robots.txt` allowing search engine crawling. Essential for indexing the single-page landing and any future routes.

- **Accessibility SEO Overlap** — Descriptive link text (no "click here"), proper form labels, sufficient color contrast, and keyboard navigability. Google increasingly rewards accessible sites with better rankings.

- **Performance as SEO Signal** — Google uses Core Web Vitals as a ranking factor. Fast LCP, low CLS, and responsive FID directly impact search visibility. The performance skills above feed directly into SEO outcomes.

---

## 6. Development Tools & Workflow

- **Git & GitHub** — Version control with feature branches, conventional commits, pull requests, and meaningful commit messages. The project repo is already initialized. Branching strategy: `main` → `develop` → feature branches.

- **Vercel Deployment** — All reference sites are deployed on Vercel. Zero-config Next.js deployment with automatic preview URLs per branch, edge functions, analytics, and instant rollbacks. Connect GitHub repo for CI/CD.

- **ESLint** — Static code analysis with `eslint-config-next` for catching React/Next.js anti-patterns, accessibility violations (`eslint-plugin-jsx-a11y`), and import sorting. Enforce code quality before commits.

- **Prettier** — Opinionated code formatter for consistent style across all files. Configure with Tailwind plugin (`prettier-plugin-tailwindcss`) for automatic class sorting. Eliminates style debates.

- **Project Structure** — Organized Next.js App Router structure: `app/` for routes/layouts, `components/` for reusable UI, `lib/` for utilities, `public/` for static assets, `styles/` for global CSS. Clean separation of concerns.

- **TypeScript** — Static typing for React components, props interfaces, API types, and form data. Catches errors at build time. All reference sites use TypeScript (detected via Next.js build artifacts).

- **Environment Variables** — `.env.local` for any API keys (form submissions, analytics). Vercel environment variable management for production secrets. Never commit secrets to the repository.

- **Package Management (npm/pnpm)** — Dependency management with lockfiles for reproducible builds. Prefer `pnpm` for faster installs and disk efficiency, as commonly used in the Vercel/Next.js ecosystem.

---

## 7. Content & Section Planning Skills

- **Hero Section** — Full-viewport hero with bold headline ("Drive With Your Smile"), subheadline, dual CTAs (primary: "Join the Waitlist", secondary: "See How It Works"), social proof badges, and a visual/illustration area. Staggered entrance animation. This is the highest-impact section.

- **Problem Section** — Four pain-point cards with icons, titles, and descriptions. Grid layout (2x2 on desktop, stacked on mobile). Each card animates in on scroll with stagger delay. Emotionally connects with the target audience before presenting the solution.

- **Solution Section** — Feature showcase for Face IT with four feature cards (custom gestures, noise-immune, affordable, safety-first). Visual element showing the product in action. This section turns pain points into solved problems.

- **Benefits Section** — Four benefit cards with icons and descriptions (accuracy, intuitive, hands-free, affordable). Distinguished from features by focusing on user outcomes rather than product capabilities.

- **How It Works Section** — Three-step visual flow (Install → Customize → Drive) with numbered steps, connecting lines/arrows, and icons. Step-by-step animation on scroll. Reduces perceived complexity of the product.

- **Testimonials Section** — Carousel or grid of four testimonial cards with quotes, names, and credentials. Star ratings or quote marks as visual accents. Social proof from real users, experts, industry leaders, and family members.

- **FAQ Section** — Accordion component with six Q&A pairs. Smooth expand/collapse animation. Addresses objections (accuracy, compatibility, cost, safety, customization, availability) to move visitors toward conversion.

- **Final CTA Section** — Full-width conversion section with compelling headline ("Ready to Drive on Your Own Terms?"), subheadline, dual CTAs, and trust badges. Gradient or contrasting background to stand out. Last chance to convert before the footer.

- **Footer** — Multi-column layout with logo, tagline, quick links, company links, contact info (Oshawa, Ontario), social media icons, legal links, and copyright. Clean and informative without being cluttered.

- **Navigation** — Sticky/fixed header with logo, anchor links (How It Works, Benefits, FAQ), and "Request a Demo" CTA button. Transparent on hero, solid on scroll. Mobile hamburger menu with animated slide-in panel.

---

## 8. Quality Assurance & Testing Skills

- **Cross-Browser Testing** — Verify rendering and functionality across Chrome, Firefox, Safari, and Edge. CSS features like `backdrop-filter`, `scroll-behavior`, and Grid/Flexbox have subtle differences. Test on both Chromium and WebKit engines.

- **Mobile Device Testing** — Test on real iOS (Safari) and Android (Chrome) devices, not just browser DevTools emulation. Check touch interactions, tap targets (min 44x44px), viewport behavior, and scroll performance on actual hardware.

- **Responsive Breakpoint Testing** — Systematically test at 320px, 375px, 428px, 768px, 1024px, 1280px, 1440px, and 1920px. Look for overflow, text truncation, image scaling, and layout breaks at each breakpoint.

- **Animation Performance Testing** — Profile animations in Chrome DevTools Performance tab. Ensure animations run at 60fps with no jank. Check that scroll-triggered animations don't cause layout thrashing. GPU-accelerated transforms (`translate3d`, `will-change`) where needed.

- **Accessibility Testing** — Run axe-core or Lighthouse accessibility audits. Test full keyboard navigation (Tab, Enter, Escape, Arrow keys). Verify screen reader experience with NVDA or VoiceOver. Check color contrast with WCAG tools. Critical given Axcessiom's accessibility-focused mission.

- **Form Validation Testing** — Test waitlist/demo request forms with valid inputs, empty fields, invalid emails, and edge cases. Verify error messages, success states, and submission handling. Test both client-side validation and server-side response.

- **Performance Testing** — Run Lighthouse audits in incognito mode on both mobile and desktop. Test with throttled 3G/4G connections. Verify lazy loading fires correctly. Check Time to Interactive (TTI) and Total Blocking Time (TBT).

- **Link & Navigation Testing** — Verify all anchor links scroll to correct sections with proper offset for the fixed header. Test "Request a Demo" and "Join the Waitlist" CTAs. Check external links (email, social media) open correctly. Verify mobile menu opens, navigates, and closes properly.

---

## Content Architecture — `content.tsx`

> **All website content is centralized in a single file: `lib/content.tsx`.** No text, labels, or data are hardcoded inside components. Every section imports its content from this one source of truth, making the site easy to update, translate, and maintain.

### Why a Single Content File

- **Single source of truth** — Change a headline, description, or CTA label in one place and it updates everywhere it's used across the site.
- **Clean separation** — Components handle layout, styling, and animation. `content.tsx` handles what the user reads. No mixing concerns.
- **Type safety** — TypeScript interfaces enforce the shape of every content block, so missing fields or typos are caught at build time.
- **Future-proof** — Easy to swap with a CMS (Sanity, Contentful), i18n translation layer, or A/B testing variants later without touching any component code.

### File Location

```
lib/
  content.tsx       ← All website content lives here
```

### Structure Overview

```tsx
// lib/content.tsx

// ── Navigation ──────────────────────────────────
export const navContent = {
  logo: { src: "/logo.png", alt: "Axcessiom" },
  links: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
  ],
  cta: { label: "Request a Demo", href: "#demo" },
};

// ── Hero Section ────────────────────────────────
export const heroContent = {
  headline: "Drive With Your Smile. Control Your Car With a Wink.",
  subheadline: "Face IT is the driver assistance system that lets people with disabilities control turn signals, wipers, headlights, and more — using facial expressions. No voice commands. No reaching. Just drive.",
  primaryCta: { label: "Join the Waitlist", href: "#waitlist" },
  secondaryCta: { label: "See How It Works", href: "#how-it-works" },
  socialProof: [
    "Featured in Project Arrow at CES 2023",
    "Award-winning accessibility innovation",
    "Trusted by Ontario Tech University & APMA",
  ],
};

// ── Problem Section ─────────────────────────────
export const problemContent = {
  headline: "When Driving Requires More Hands Than You Have",
  subheadline: "Millions of drivers use hand controls for gas and brake. But with one hand on the wheel and one on the controls — how do you activate your turn signal? Your wipers? Your headlights?",
  painPoints: [
    {
      title: "Hand controls leave no hands free",
      description: "You need one hand on the steering wheel and one on the gas/brake controls. Reaching for turn signals or wipers means letting go of something critical.",
    },
    {
      title: "Voice recognition fails in real driving conditions",
      description: "Radio playing. Passengers talking. Rain on the roof. Voice systems struggle exactly when you need them most — in noisy, real-world environments.",
    },
    {
      title: "Existing adaptive equipment is outrageously expensive",
      description: "Specialized solutions can cost tens of thousands of dollars. True driving independence shouldn't require a second mortgage.",
    },
    {
      title: "Every reach is a safety risk",
      description: "Taking your hand off the wheel or controls to flip a switch divides your attention. For adaptive drivers, this happens constantly — multiplying risk with every trip.",
    },
  ],
};

// ── Solution Section ────────────────────────────
export const solutionContent = {
  headline: "Introducing Face IT — Your Face Is Now Your Remote Control",
  subheadline: "Axcessiom's Face IT system uses facial gesture recognition to let you control your vehicle's secondary functions. A wink activates your turn signal. A smile triggers your wipers. You choose the gesture — we make it work.",
  features: [
    {
      title: "Customizable facial gestures",
      description: "Assign any expression to any function. Wink for left turn signal. Raise an eyebrow for wipers. Your preferences, your control.",
    },
    {
      title: "Works in any environment",
      description: "Unlike voice recognition, Face IT doesn't care about noise. Music, conversation, rain — it sees your face clearly and responds instantly.",
    },
    {
      title: "Affordable independence",
      description: "Priced at $2,500 - $7,500 — a fraction of traditional adaptive equipment costs. Real accessibility shouldn't break the bank.",
    },
    {
      title: "Safety-first engineering",
      description: "Built by engineers with decades of experience in safety-critical systems. Reliable, redundant, and designed for the real world.",
    },
  ],
};

// ── Benefits Section ────────────────────────────
export const benefitsContent = {
  label: "Why Choose Face IT",
  headline: "The Advantages of Facial Gesture Control",
  benefits: [
    {
      title: "Superior Accuracy",
      description: "Facial recognition outperforms voice in noisy conditions. No repeating yourself. No hoping the system heard you.",
    },
    {
      title: "Completely Intuitive",
      description: "You already make facial expressions every day. No learning curve — just natural movements that now control your car.",
    },
    {
      title: "Hands Stay Where They Belong",
      description: "Both hands remain on the wheel and controls at all times. No reaching, no fumbling, no divided attention.",
    },
    {
      title: "Affordable Price Point",
      description: "At $2,500 - $7,500, Face IT costs far less than most adaptive driving solutions while delivering more freedom.",
    },
  ],
};

// ── How It Works Section ────────────────────────
export const howItWorksContent = {
  label: "How It Works",
  headline: "Three Steps to Driving Freedom",
  steps: [
    {
      step: 1,
      title: "Install",
      description: "Face IT mounts easily to your dashboard. Our compact camera system connects to your vehicle's controls with minimal modification required.",
    },
    {
      step: 2,
      title: "Customize",
      description: "Set up your personal gesture library. Choose which facial expressions activate which functions — turn signals, wipers, headlights, horn, windows, and high beams.",
    },
    {
      step: 3,
      title: "Drive",
      description: "Hit the road with confidence. Face IT recognizes your gestures in real-time and activates controls instantly. Your hands never leave the wheel.",
    },
  ],
};

// ── Testimonials Section ────────────────────────
export const testimonialsContent = {
  label: "What People Are Saying",
  headline: "Drivers and Experts Weigh In",
  testimonials: [
    {
      quote: "I've been driving with hand controls for 15 years. Every time I needed my turn signal, I had to make a choice — let go of the wheel or the controls. Face IT changes everything. I finally feel safe.",
      name: "Michael R.",
      details: "Spinal cord injury, driving 12+ years with hand controls",
    },
    {
      quote: "The accuracy is remarkable. I tested it with music blasting, passengers talking, and rain on the windshield. It never missed a gesture. Voice recognition can't touch this.",
      name: "Dr. Sarah Chen",
      details: "Rehabilitation specialist, 20 years in adaptive technology",
    },
    {
      quote: "Axcessiom is solving a real problem that affects millions of people. This technology has the potential to transform accessible transportation.",
      name: "Flavio Volpe",
      details: "President, Automotive Parts Manufacturers' Association (APMA)",
    },
    {
      quote: "I watched my son struggle with his vehicle controls for years. Face IT gave him back his confidence. He's a different driver now — relaxed, focused, independent.",
      name: "Patricia K.",
      details: "Parent of adaptive driver",
    },
  ],
};

// ── FAQ Section ─────────────────────────────────
export const faqContent = {
  label: "Common Questions",
  headline: "Frequently Asked Questions",
  questions: [
    {
      question: "How accurate is Face IT compared to voice recognition?",
      answer: "Face IT significantly outperforms voice recognition, especially in noisy environments. Facial gestures aren't affected by music, passengers, or road noise — the most common conditions where voice systems fail.",
    },
    {
      question: "Will Face IT work with my vehicle?",
      answer: "Face IT is designed to integrate with most modern vehicles. During your consultation, we'll confirm compatibility with your specific make and model.",
    },
    {
      question: "How much does it cost?",
      answer: "Face IT is priced between $2,500 - $7,500 depending on which functions you want to control. This is significantly more affordable than traditional adaptive driving equipment.",
    },
    {
      question: "Is it safe? What if I make a facial expression accidentally?",
      answer: "Safety is our top priority. Face IT is calibrated to recognize intentional gestures only — not random expressions, yawns, or conversations. The system learns YOUR specific, deliberate movements.",
    },
    {
      question: "Can I choose my own gestures?",
      answer: "Absolutely. You decide which facial expressions activate which functions. Wink for turn signal, smile for wipers — whatever feels natural to you. The system adapts to your preferences.",
    },
    {
      question: "When will Face IT be available?",
      answer: "We're currently in user testing and preparing for commercial launch. Join our waitlist to be notified when Face IT becomes available and to get early access pricing.",
    },
  ],
};

// ── Final CTA Section ───────────────────────────
export const ctaContent = {
  headline: "Ready to Drive on Your Own Terms?",
  subheadline: "Independence shouldn't require a struggle. Face IT puts you back in control — safely, affordably, and completely hands-free. Join the waitlist today.",
  primaryCta: { label: "Join the Waitlist", href: "#waitlist" },
  secondaryCta: { label: "Request a Demo", href: "#demo" },
  trustBadges: [
    "Featured in Project Arrow (CES 2023)",
    "Award-winning technology",
    "Proudly Canadian",
  ],
};

// ── Footer ──────────────────────────────────────
export const footerContent = {
  logo: { src: "/logo.png", alt: "Axcessiom" },
  tagline: "Accessibility Simplified. A software & electronics company bringing accessibility to society's forefront.",
  quickLinks: [
    { label: "How It Works", href: "#how-it-works" },
    { label: "Benefits", href: "#benefits" },
    { label: "FAQ", href: "#faq" },
    { label: "Contact", href: "#contact" },
  ],
  companyLinks: [
    { label: "About Us", href: "#" },
    { label: "Our Team", href: "#" },
    { label: "Careers", href: "#" },
    { label: "Press", href: "#" },
  ],
  contact: {
    location: "Oshawa, Ontario, Canada",
    email: "info@axcessiom.ca",
  },
  social: [
    { platform: "LinkedIn", href: "#" },
    { platform: "Facebook", href: "#" },
    { platform: "Twitter", href: "#" },
  ],
  legal: [
    { label: "Terms of Use", href: "#" },
    { label: "Privacy Policy", href: "#" },
  ],
  copyright: "© 2024 Axcessiom Technologies Inc. All Rights Reserved.",
};
```

### How Components Consume Content

```tsx
// Example: components/sections/Hero.tsx
import { heroContent } from "@/lib/content";

export function Hero() {
  return (
    <section>
      <h1>{heroContent.headline}</h1>
      <p>{heroContent.subheadline}</p>
      <a href={heroContent.primaryCta.href}>{heroContent.primaryCta.label}</a>
      <a href={heroContent.secondaryCta.href}>{heroContent.secondaryCta.label}</a>
    </section>
  );
}
```

### Content-to-Section Mapping

| Export | Component | Section |
|--------|-----------|---------|
| `navContent` | `<Navbar />` | Sticky navigation |
| `heroContent` | `<Hero />` | Hero / above the fold |
| `problemContent` | `<Problem />` | Pain points |
| `solutionContent` | `<Solution />` | Face IT features |
| `benefitsContent` | `<Benefits />` | Why choose Face IT |
| `howItWorksContent` | `<HowItWorks />` | 3-step flow |
| `testimonialsContent` | `<Testimonials />` | Social proof |
| `faqContent` | `<FAQ />` | Accordion Q&A |
| `ctaContent` | `<FinalCTA />` | Bottom conversion |
| `footerContent` | `<Footer />` | Site footer |

### Rules

1. **No hardcoded strings in components** — Every visible text string comes from `content.tsx`.
2. **Components are content-agnostic** — They receive data via imports and render it. They don't know or care what the text says.
3. **Icons are defined in components** — Only text content lives in `content.tsx`. Icon choices, images (beyond src/alt), and animations are component concerns.
4. **Type everything** — Each content export has a matching TypeScript interface to enforce structure.

---

## Technology Stack Summary

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14+ (App Router) |
| Language | TypeScript |
| UI Library | React 18+ |
| Styling | Tailwind CSS 3.4+ |
| Animations | Framer Motion + GSAP |
| Primary Font | **Poppins** (300, 400, 500, 600, 700) via `next/font/google` |
| Primary Color | **Orange** `#E8612D` — CTAs, accents, active states |
| Secondary Color | **Navy** `#14304D` — Headlines, dark sections, footer |
| Deployment | Vercel |
| Version Control | Git + GitHub |
| Linting | ESLint + Prettier |
| Image Format | WebP/AVIF via `next/image` |
| Content Layer | **`lib/content.tsx`** — single source of truth for all text |
| SEO | next-sitemap + JSON-LD schema |

---

*This document serves as the complete skill and technology blueprint for rebuilding axcessiom.ca to match the quality, animation fidelity, and performance standards of the reference websites.*
