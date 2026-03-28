# Verdana Health — ClinicalNode

A modern, single-page healthcare clinic landing page built with **Next.js 14**, **TypeScript**, and **Tailwind CSS v4**.

## Tech Stack

| Technology | Purpose |
|---|---|
| **Next.js 14** | React framework with App Router |
| **TypeScript** | Type-safe JavaScript |
| **Tailwind CSS v4** | Utility-first CSS (CSS-first config via `@theme`) |
| **Google Fonts** | Playfair Display + Bebas Neue |

## Project Structure

```
ClinicalNode/
├── app/                        # Next.js App Router
│   ├── globals.css             # Tailwind config, theme tokens, base styles
│   ├── layout.tsx              # Root layout (fonts, navbar, footer)
│   └── page.tsx                # Homepage — assembles all sections
│
├── components/                 # UI Components
│   ├── ui/                     # Reusable primitives
│   │   └── SectionHeader.tsx   # Tag + heading + subtitle pattern
│   ├── Navbar/                 # Fixed top navigation bar
│   ├── Hero/                   # Full-screen hero section
│   ├── Services/               # Services grid cards
│   ├── WhyUs/                  # "Why choose us" 2×2 grid
│   ├── Team/                   # Doctor profile cards
│   ├── Testimonials/           # Patient testimonial cards
│   ├── Cta/                    # Call-to-action section
│   ├── Footer/                 # Site footer with link columns
│   └── PageHero/               # Reusable sub-page hero banner
│
├── hooks/                      # Custom React hooks
│   └── useScrollReveal.ts      # Intersection Observer scroll animation
│
├── lib/                        # Shared utilities
│   ├── data.ts                 # All static data (doctors, services, nav links, etc.)
│   └── types.ts                # TypeScript interfaces
│
├── postcss.config.mjs          # PostCSS config for Tailwind v4
├── next.config.js              # Next.js configuration
├── tsconfig.json               # TypeScript configuration
└── package.json                # Dependencies & scripts
```

## Getting Started

```bash
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## Design System

The design uses a **nature-inspired** color palette defined as Tailwind theme tokens in `globals.css`:

- **Forest Greens**: `forest`, `forest-mid`, `forest-light`, `forest-faint`
- **Warm Browns**: `brown`, `brown-mid`, `brown-warm`, `brown-muted`
- **Light Neutrals**: `beige`, `beige-light`, `cream`

Typography uses two Google Fonts:
- **Playfair Display** — Headings (serif, elegant)
- **Bebas Neue** — Body text, labels, buttons (sans-serif, uppercase)

## Component Architecture

Each section component follows the same pattern:
1. Receives optional `teaser` prop to show a condensed version on the homepage
2. Uses `useScrollReveal()` hook for scroll-triggered fade-in animations
3. Imports data from `lib/data.ts` instead of defining it inline
4. Uses Tailwind utility classes directly (no CSS Modules)
