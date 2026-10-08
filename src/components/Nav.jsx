import { useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { navLinks, profile } from '../data/profile.js'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`

export default function Nav({ theme, onToggleTheme, active }) {
  const [open, setOpen] = useState(false)

  // Close the mobile menu on Escape and when resizing to desktop.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onResize = () => window.innerWidth >= 768 && setOpen(false)
    window.addEventListener('keydown', onKey)
    window.addEventListener('resize', onResize)
    return () => {
      window.removeEventListener('keydown', onKey)
      window.removeEventListener('resize', onResize)
    }
  }, [open])

  const linkClass = (id) =>
    `relative py-1 text-sm font-medium tracking-wide transition-colors after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:origin-left after:scale-x-0 after:bg-amber after:transition-transform after:duration-300 hover:text-ink hover:after:scale-x-100 ${
      active === id ? 'text-ink after:scale-x-100' : 'text-muted'
    }`

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-bg/80 backdrop-blur-md">
      <nav aria-label="Primary" className="mx-auto flex h-16 max-w-6xl items-center justify-between px-6">
        <a href="#top" className="font-display text-3xl tracking-wide">
          {profile.initials}
          <span className="text-amber-text">.</span>
          <span className="sr-only"> {profile.name}, back to top</span>
        </a>

        {/* Desktop links */}
        <ul className="hidden items-center gap-7 md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} className={linkClass(l.id)} aria-current={active === l.id ? 'true' : undefined}>
                {l.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <a
            href={resumeHref}
            download="Shivadhanu_Goud_Resume.pdf"
            className="hidden items-center gap-2 rounded-full border border-ink px-4 py-1.5 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-bg md:inline-flex"
          >
            <Icon name="download" className="h-4 w-4" />
            Resume
          </a>
          <button
            type="button"
            onClick={onToggleTheme}
            aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
            aria-pressed={theme === 'dark'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line text-ink transition-colors hover:border-amber hover:text-amber-text"
          >
            <Icon name={theme === 'dark' ? 'sun' : 'moon'} className="h-5 w-5" />
          </button>
          <button
            type="button"
            onClick={() => setOpen((o) => !o)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-line md:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        hidden={!open}
        className="border-t border-line bg-bg md:hidden"
      >
        <ul className="mx-auto flex max-w-6xl flex-col px-6 py-3">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                onClick={() => setOpen(false)}
                aria-current={active === l.id ? 'true' : undefined}
                className={`flex items-center justify-between border-b border-line py-3 text-base font-medium ${
                  active === l.id ? 'text-amber-text' : 'text-ink'
                }`}
              >
                {l.label}
                <Icon name="arrowRight" className="h-4 w-4 text-muted" />
              </a>
            </li>
          ))}
          <li>
            <a
              href={resumeHref}
              download="Shivadhanu_Goud_Resume.pdf"
              onClick={() => setOpen(false)}
              className="mt-3 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-bg"
            >
              <Icon name="download" className="h-4 w-4" />
              Download resume
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
