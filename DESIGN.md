# Design brief

Derived from the two reference images in `referencee/`. Inspiration, not a copy.

## What each reference brought

| | Reference 1 (yellow / charcoal deck) | Reference 2 (cream minimal deck) |
|---|---|---|
| Kept | Bold amber accent on near-black, uppercase condensed headings, "HI THERE! / I'M …" hero, highlighted role tag, circular portrait with an orbit ring, black "fun fact" stat circles, vertical dot timeline, pill buttons | Warm cream paper background, generous whitespace, thin rules with labels, `× × × ×` ornaments, browser-window frame around content, restrained monochrome type |
| Dropped | Heavy left sidebar nav, photo-grid portfolio, testimonials | Script fonts, stock photo collages |

## Palette

| Token | Light | Dark | Use |
|---|---|---|---|
| bg | `#F5F0E6` cream | `#121212` | page background |
| surface | `#FBF8F2` | `#1B1B1B` | cards, nav |
| ink | `#141414` | `#EFEAE0` | headings / body |
| muted | `#5B5750` | `#A9A49A` | secondary text |
| line | `#DAD3C4` | `#2C2C2C` | borders, rules |
| amber | `#F5B800` | `#FFC53D` | fills, highlights, dots |
| amber-text | `#8A5F00` | `#FFC53D` | accent text (AA contrast on cream) |

Light mode = reference 2's cream paper with reference 1's amber. Dark mode = reference 1's charcoal slides.

## Typography

- Display: **Bebas Neue** (condensed uppercase, single weight, tiny file). Hero name, section titles, stat numbers.
- Body/UI: **DM Sans** 400/500/700. Paragraphs, nav, chips, buttons.
- Scale: hero 64–120px fluid (`clamp`), section titles 40–56px, body 16–18px, chips 13px.

## Layout patterns

- Single column, max width 1152px, 24px gutters on mobile.
- Sticky translucent nav with a 2px amber underline on the active link.
- Section header = eyebrow number (`01`) + short rule + big title (echoes "—— ABOUT ME").
- Hero: two columns on desktop (copy left, orbit portrait right), stacked on mobile. A thin amber bar hugs the left edge on large screens.
- About: "What I do" list + four black stat circles ("Fun facts").
- Experience / Education: vertical line with amber dots (the reference's dot-nav rail, reused as a timeline).
- Projects: cards framed like a browser window (three dots + URL bar), tech tags as chips, GitHub link.
- Section spacing 96px mobile / 128px desktop.

## Motion

- Scroll reveal: fade + 16px rise, 600ms ease-out, triggered once by IntersectionObserver.
- Hover: cards lift 4px with a stronger shadow; buttons shift 2px; nav underline grows from the left.
- Everything is disabled under `prefers-reduced-motion`.
