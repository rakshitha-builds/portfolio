# Rakshitha R — Portfolio (Next.js + Tailwind + Framer Motion)

## Local development
```
npm install
npm run dev
```
Visit http://localhost:3000

## Production build (static export)
```
npm run build
```
Outputs a fully static site to `/out`. On Vercel just push to GitHub — no config needed.

## Adding more projects
Open `data/site.js`, find `export const projects`, and append another object with the same shape
(title, tagline, problem / approach / result, highlights, stack, `live`, `github`, `visual`).
It appears automatically as a new stacking card in "Selected Works". Only the projects in that
array are shown, so keep it to the ones you want to feature (currently 3).
For a screenshot visual, put the image in `public/images/` and use `visual: { type: 'screenshot', src, width, height, alt }`.

## Editing content
All copy, links, skills, projects, experience and education live in **`data/site.js`**.
- Add a project's `github` or `live` URL there and its button appears automatically
  (Opto / IMA currently has neither because no URL was provided).
- Replace `public/resume.pdf` to update the resume (nav, hero and contact all link to it).
- Replace `public/images/campusiq-login.webp` / `learnsphere-login.webp` to update the project visuals.

## Structure
- `app/` — App Router layout (fonts, metadata, JSON-LD), page, global styles, favicon (`icon.svg`)
- `components/` — one component per section plus shared helpers
  (`Reveal`, `CountUp`, `ScrollProgress`, `SectionHeading`, `TechIcon`, `Providers`)
- `data/site.js` — content
- `public/icons/` — self-hosted technology logos (from the devicon set)
- `public/images/` — project visuals

## Notes
- Fonts (Space Grotesk, Inter, JetBrains Mono) are self-hosted via `@fontsource-variable`; no external font or icon CDN.
- The circle cursor (`components/CustomCursor.jsx`) only runs on mouse/trackpad devices, never on touch.
- The contact form uses EmailJS; its IDs are in `data/site.js`.
- Animations respect `prefers-reduced-motion`.
