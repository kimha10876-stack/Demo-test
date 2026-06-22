# Waterloo Biofilter — Landing Page

A responsive single-page landing website for **Waterloo Biofilter**, built with React 18 + Vite, Tailwind CSS v4, and Framer Motion.
Design source: [Figma file](https://www.figma.com/design/x1zmuplYSM4rl0ynB0NJ2H/Untitled?node-id=1-2&m=dev)

---

## Tech Stack

| Tool | Version | Purpose |
|---|---|---|
| React | 18 | UI library |
| Vite | 8 | Build tool |
| TypeScript | 5 | Type safety |
| Tailwind CSS | 4 | Utility-first styling |
| Framer Motion | latest | Animations |

---

## Project Structure

```
src/
├── assets/
│   └── figmaAssets.ts      # Figma MCP image URL constants
├── components/
│   ├── Navbar.tsx           # Glassmorphism pill nav + top action bar
│   ├── Hero.tsx             # Full-screen carousel hero
│   ├── WhyWaterloo.tsx      # Why section with stats
│   ├── Solutions.tsx        # Bento-grid solution cards
│   ├── Projects.tsx         # Project list with tags
│   ├── Testimonials.tsx     # Testimonial carousel
│   ├── Associations.tsx     # Association member logos
│   ├── News.tsx             # News card grid
│   ├── TrustSection.tsx     # Trust/proof section
│   ├── ContactForm.tsx      # Multi-section contact form
│   └── Footer.tsx           # Footer with newsletter
├── hooks/
│   └── useScrollAnimation.ts  # rAF-debounced scroll listener
├── styles/
│   └── animations.ts        # Shared Framer Motion variants
├── App.tsx                   # Root with React.lazy sections
├── main.tsx
└── index.css                 # Tailwind @theme tokens
```

---

## Setup & Run

### Prerequisites
- Node.js ≥ 18
- npm ≥ 9

### Install

```bash
npm install
```

### Development server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173)

### Production build

```bash
npm run build
```

Output is in `dist/`.

### Preview production build locally

```bash
npm run preview
```

---

## Design Tokens (from Figma)

All design tokens are defined in `src/index.css` under `@theme` and in `tailwind.config`:

| Token | Value |
|---|---|
| `--color-primary` | `#1e73be` |
| `--color-primary-dark` | `#004c6e` |
| `--color-primary-darker` | `#003767` |
| `--color-teal` | `#5cb1cc` |
| `--font-jakarta` | Plus Jakarta Sans |
| `--font-hanken` | Hanken Grotesk |
| `--font-geist` | Geist |
| `--font-lora` | Lora |

---

## Animation Strategy

- `whileInView` + `viewport={{ once: true, amount: 0.2 }}` — no re-triggering
- `staggerChildren` on parent containers for card/list sequences
- Only `opacity` + `transform` animated (GPU-accelerated, no layout jank)
- `easing: [0.25, 0.1, 0.25, 1]` — natural cubic-bezier on all transitions
- `requestAnimationFrame` debounce on scroll listener (navbar shrink)
- All below-the-fold sections wrapped in `React.lazy` + `Suspense`

---

## Notes

- **Figma asset URLs** in `src/assets/figmaAssets.ts` expire after 7 days (Figma MCP CDN policy). Replace with local copies or a permanent CDN for production.
- Fonts are loaded from Google Fonts + jsDelivr CDN. For offline/production, install via `@fontsource/*` packages.
