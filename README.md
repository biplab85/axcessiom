# Axcessiom — Face IT Driver Assistance System

A modern, premium landing page for **Axcessiom Technologies Inc.**, built with Next.js 14, TypeScript, Tailwind CSS, and Framer Motion.

## About

Face IT is the driver assistance system that lets people with disabilities control turn signals, wipers, headlights, and more — using facial expressions. No voice commands. No reaching. Just drive.

## Tech Stack

- **Framework:** Next.js 14 (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS 3.4
- **Animations:** Framer Motion 11 + CSS keyframe animations
- **Icons:** Lucide React
- **Font:** Poppins (via `next/font/google`)

## Design

Ultra-dark premium theme inspired by [AppWeDo](https://appwedo.vercel.app/) featuring:

- Glassmorphism cards with backdrop blur
- Floating particle systems with CSS animations
- Mouse-following glow effects
- SVG constellation, mesh, starburst, and honeycomb backgrounds
- Typewriter code effect in hero section
- Auto-playing tabbed interface with progress bars
- Scroll-triggered entrance animations
- Animated timeline with gradient progress line
- Spring-physics hover interactions on cards and logos

## Sections

| #  | Section           | Description                                                        |
|----|-------------------|--------------------------------------------------------------------|
| 1  | Navbar            | Fixed navigation with sliding orange indicator & mobile overlay    |
| 2  | Hero              | Floating particles, typewriter effect, gradient mesh background    |
| 3  | Problem           | Auto-play tabbed interface with animated progress bars             |
| 4  | Solution          | Mesh SVG network, glassmorphism feature cards with accent colors   |
| 5  | Product Fit       | 3 image cards with zoom hover, gradient overlays, accent sweeps    |
| 6  | Benefits          | Constellation SVG, 4 accent-colored benefit cards                  |
| 7  | How It Works      | 3-step animated timeline with gradient progress line               |
| 8  | Awards & Partners | Award cards with icons + partner logos on white cards with hover    |
| 9  | Testimonials      | Starburst SVG, star ratings, quote watermark                       |
| 10 | FAQ               | Honeycomb SVG pattern, floating orbs, accordion                    |
| 11 | Final CTA         | Converging lines SVG, central glow, dual CTAs, trust badges       |
| 12 | Footer            | 4-column grid, inline SVG social icons, dark background            |

## Project Structure

```
axcessiom/
├── app/
│   ├── globals.css              # Dark theme, glassmorphism utilities, keyframes
│   ├── layout.tsx               # Root layout with Poppins font, SEO & favicon
│   └── page.tsx                 # Home page composing all 12 sections
├── components/
│   ├── sections/
│   │   ├── Navbar.tsx           # Fixed nav with sliding indicator
│   │   ├── Hero.tsx             # Particles, typewriter, gradient mesh
│   │   ├── Problem.tsx          # Auto-play tabs with progress bars
│   │   ├── Solution.tsx         # Mesh SVG, glassmorphism feature cards
│   │   ├── ProductFit.tsx       # Image cards with hover zoom & accent lines
│   │   ├── Benefits.tsx         # Constellation SVG, accent-colored cards
│   │   ├── HowItWorks.tsx       # Animated timeline, step circles
│   │   ├── AwardsPartners.tsx   # Award cards + partner logos on white cards
│   │   ├── Testimonials.tsx     # Starburst SVG, star ratings, quotes
│   │   ├── FAQ.tsx              # Honeycomb pattern, floating orbs, accordion
│   │   ├── FinalCTA.tsx         # Converging lines SVG, dual CTAs
│   │   └── Footer.tsx           # 4-column grid, social icons
│   └── ui/
│       ├── Container.tsx        # Max-width wrapper
│       └── SectionHeader.tsx    # Reusable section header
├── lib/
│   ├── content.tsx              # All page content (centralized)
│   ├── animations.ts            # Framer Motion variants
│   └── hooks.ts                 # useMousePosition, useScrolled
└── public/
    ├── logo.png                 # Axcessiom logo & favicon
    └── images/
        ├── partner/             # Partner logos (SVG, PNG, JPG)
        │   ├── innovationfactory.svg
        │   ├── forge.png
        │   ├── oci.svg
        │   ├── citm.jpg
        │   └── spark.svg
        └── fit/                 # Product fit audience images
            ├── driver.jpg
            ├── driver-assessment-center.jpg
            └── mobility-equipment-dealer.jpg
```

## Getting Started

```bash
npm install
npm run dev
```

Open [http://localhost:3111](http://localhost:3111) in your browser.

## Build

```bash
npm run build
npm start
```

## Brand Colors

| Color          | Hex       | Usage                          |
|----------------|-----------|--------------------------------|
| Orange         | `#E8612D` | Primary brand, CTAs, accents   |
| Orange Light   | `#FF7A45` | Hover states, gradients        |
| Navy           | `#14304D` | Secondary brand color          |
| Dark BG        | `#050510` | Page background                |
| Dark Surface   | `#0A0A1A` | Card backgrounds               |

## License

Proprietary — Axcessiom Technologies Inc.
