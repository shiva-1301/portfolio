# Shivadhanu Goud · Portfolio

Single-page personal portfolio built with **Vite + React + Tailwind CSS v4**.
Live at **https://shiva-1301.github.io/portfolio/**

## Edit the content

Everything shown on the site comes from one file:

```
src/data/profile.js
```

Edit the exported objects (`profile`, `stats`, `about`, `skills`, `experience`,
`projects`, `education`, `achievements`, `codingProfiles`) and the site updates.
No other file needs to change for content edits.

- **Photo:** drop a square image in `public/` (e.g. `public/me.jpg`) and set
  `photo: 'me.jpg'` in `profile`. Leave it `null` to keep the "JS" monogram.
- **Resume:** replace `public/resume.pdf`. The "Download Resume" buttons point to it.
- **Project links:** each project has `links: { github, live }`. Set `live` to a URL
  to show a "Live demo" button.
- **SEO text, OG image, favicon:** `index.html`, `public/og.png`, `public/favicon.svg`.
- **Colours / fonts:** CSS variables at the top of `src/index.css`. Design notes are in `DESIGN.md`.

## Run locally

```bash
npm install
npm run dev        # http://localhost:5173/portfolio/
```

```bash
npm run build      # production build into dist/
npm run preview    # serve dist/ locally
```

## Redeploy

The site is hosted on **GitHub Pages** and deployed by the workflow in
`.github/workflows/deploy.yml`. Every push to `main` rebuilds and publishes it:

```bash
git add -A
git commit -m "Update content"
git push
```

Progress shows under the repo's **Actions** tab. The deploy takes about a minute.

### Moving to another host

`vite.config.js` sets `base: '/portfolio/'` because GitHub Pages serves the site
from a sub-path. If you deploy to a custom domain, Vercel or Netlify, change it to
`base: '/'` and update the absolute URLs in `index.html`, `public/robots.txt` and
`public/sitemap.xml`.

Vercel one-liner (after `vercel login`):

```bash
npx vercel --prod
```

## Project layout

```
index.html                 SEO meta, fonts, theme pre-load script
public/                    resume.pdf, favicon, og image, robots, sitemap
src/data/profile.js        ← all content
src/components/            Nav, Hero, About, Skills, Experience, Projects, Education, Contact, Footer
src/hooks/                 useTheme (light/dark), useActiveSection (nav highlight), useReveal (scroll animation)
src/index.css              Tailwind import + colour tokens + small custom CSS
```
