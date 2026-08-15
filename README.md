# Rakshitha R — Portfolio (Next.js + Tailwind + Framer Motion)

## Local development
```
npm install
npm run dev
```
Visit http://localhost:3000

## Build (static export, for GitHub Pages or any static host)
```
npm run build
```
This outputs a fully static site to `/out` — upload that folder's contents
directly to GitHub Pages, Netlify, or any static host.

## Deploy on Vercel instead (recommended for Next.js)
Push this repo to GitHub and import it at vercel.com/new — zero config needed,
`next.config.mjs` is already set to static export but Vercel will also happily
run it as a normal Next.js app.

## Structure
- `app/` — Next.js App Router pages, layout, global styles
- `components/` — one component per section (Hero, About, Skills, Projects,
  Experience, Education, ResumeCta, Contact, Footer) plus shared animation
  helpers (`Reveal.jsx`, `Stagger.jsx`)
- `public/resume.pdf` — your resume, linked from the nav, hero, and resume section

## Notes
- The contact form uses the same EmailJS integration as before (service/template/key
  already wired in `components/Contact.jsx`)
- Skill icons load from the devicon CDN at runtime — no local assets needed
