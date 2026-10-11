# ShevDevWorks — portfolio

Portfolio site of Ivan, a frontend developer based in Kyiv. It shows five personal projects (Stayline, Emquad, CyberGear, ApexSaaS, Trendify) and is available in English and Russian.

## Stack

- React 19, TypeScript, Vite
- Plain CSS, no UI framework
- Animations built on CSS and the Web Animations API, without an animation library
- Self-hosted fonts (Manrope, Space Grotesk) and WebP screenshots, no external requests

Native scrolling is kept, and motion is reduced when the system asks for it (`prefers-reduced-motion`).

## Run locally

Requires Node.js 22.12 or newer.

```bash
npm install
npm run dev
```

On Windows you can also run `START.bat`: it installs dependencies if needed and opens the site in the browser.

## Build

```bash
npm run build
npm run preview
```

The build type-checks the project and outputs a static site to `dist/`. It also writes `dist/preview.html`, a standalone copy that opens without a local server.

## Structure

- `src/content.ts` — English and Russian copy, projects, links
- `src/Experience.tsx` — page sections, components and interactions
- `src/components.tsx` — brand mark and SVG icons
- `src/motion.ts` — entrance animation, scroll-driven motion, reduced-motion handling
- `src/experience.css` — colors, typography, layout, states, responsive rules
- `src/fonts.css` — local font faces
- `public/images/`, `public/fonts/` — screenshots, favicon and fonts

## Contact

The contact form opens an email draft through `mailto:`; nothing is sent automatically.

- Email: shevdevworks@gmail.com
- Telegram: [@shevdevworks](https://t.me/shevdevworks)
