import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

const resumeHref = `${import.meta.env.BASE_URL}${profile.resumeFile}`
const socials = [
  { name: 'GitHub', icon: 'github', href: profile.links.github },
  { name: 'LinkedIn', icon: 'linkedin', href: profile.links.linkedin },
  { name: 'LeetCode', icon: 'code', href: profile.links.leetcode },
  { name: 'Email', icon: 'mail', href: `mailto:${profile.email}` },
]

export default function Hero() {
  return (
    <section id="top" aria-label="Introduction" className="relative overflow-hidden">
      {/* amber edge bar (reference 1) */}
      <span aria-hidden="true" className="absolute left-0 top-1/3 hidden h-44 w-3 bg-amber lg:block" />

      <div className="mx-auto grid min-h-[calc(100vh-4rem)] max-w-6xl items-center gap-12 px-6 py-20 lg:grid-cols-[1.15fr_0.85fr] lg:gap-8 lg:py-24">
        <div>
          <p className="reveal is-visible flex items-center gap-4 font-display text-2xl tracking-[0.2em] text-amber-text">
            Hi there!
            <span className="h-px w-16 bg-amber" aria-hidden="true" />
          </p>

          <h1 className="reveal is-visible mt-4 font-display text-[clamp(4.25rem,11vw,8.5rem)] uppercase leading-[0.9] tracking-wide" style={{ '--reveal-delay': '80ms' }}>
            I&apos;m{' '}
            <span className="bg-[linear-gradient(transparent_62%,var(--c-amber)_62%)] bg-no-repeat">
              {profile.firstName}
            </span>
          </h1>

          <p className="reveal is-visible mt-6" style={{ '--reveal-delay': '160ms' }}>
            <span className="tag-highlight text-xs font-bold uppercase tracking-[0.18em] sm:text-sm">{profile.role}</span>
          </p>

          <p className="reveal is-visible mt-6 max-w-xl text-lg leading-relaxed text-muted" style={{ '--reveal-delay': '240ms' }}>
            {profile.summary}
          </p>

          <div className="reveal is-visible mt-8 flex flex-wrap items-center gap-3" style={{ '--reveal-delay': '320ms' }}>
            <a
              href="#projects"
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              View projects
              <Icon name="arrowRight" className="h-4 w-4" />
            </a>
            <a
              href={resumeHref}
              download="Shivadhanu_Goud_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
            >
              <Icon name="download" className="h-4 w-4" />
              Download resume
            </a>
          </div>

          <ul className="reveal is-visible mt-8 flex items-center gap-2" style={{ '--reveal-delay': '400ms' }} aria-label="Profiles">
            {socials.map((s) => (
              <li key={s.name}>
                <a
                  href={s.href}
                  target={s.href.startsWith('http') ? '_blank' : undefined}
                  rel={s.href.startsWith('http') ? 'noreferrer' : undefined}
                  aria-label={s.name}
                  title={s.name}
                  className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-line text-ink transition-all hover:-translate-y-0.5 hover:border-amber hover:bg-amber hover:text-on-amber"
                >
                  <Icon name={s.icon} className="h-5 w-5" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Portrait with orbit ring */}
        <div className="reveal is-visible relative mx-auto w-full max-w-xs sm:max-w-sm lg:max-w-md" style={{ '--reveal-delay': '200ms' }}>
          <p className="crosses mb-4 text-center lg:text-right" aria-hidden="true">
            × × × × ×
          </p>
          <div className="relative aspect-square">
            <svg viewBox="0 0 100 100" className="orbit absolute inset-0 h-full w-full text-amber" aria-hidden="true">
              <circle cx="50" cy="50" r="48" fill="none" stroke="currentColor" strokeWidth="0.8" strokeDasharray="200 101" strokeLinecap="round" />
              <circle cx="50" cy="2" r="2.2" fill="currentColor" />
              <circle cx="98" cy="50" r="1.4" fill="currentColor" />
            </svg>
            <div className="absolute inset-[9%] overflow-hidden rounded-full bg-[#141414] shadow-lift ring-1 ring-line">
              {profile.photo ? (
                <img
                  src={`${import.meta.env.BASE_URL}${profile.photo}`}
                  alt={`Portrait of ${profile.name}`}
                  className="h-full w-full object-cover"
                  width="400"
                  height="400"
                />
              ) : (
                <div className="flex h-full w-full items-center justify-center" role="img" aria-label={`${profile.name} monogram`}>
                  <span className="font-display text-[clamp(5rem,20vw,9rem)] leading-none text-[#F5B800]">{profile.initials}</span>
                </div>
              )}
            </div>
          </div>
          <p className="mt-6 text-center text-sm text-muted lg:text-right">{profile.tagline}</p>
        </div>
      </div>

      <a
        href="#about"
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-2 text-xs font-medium uppercase tracking-[0.2em] text-muted transition-colors hover:text-ink lg:inline-flex"
      >
        Scroll
        <Icon name="arrowDown" className="h-4 w-4" />
      </a>
    </section>
  )
}
