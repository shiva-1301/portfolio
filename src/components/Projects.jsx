import Icon from './Icon.jsx'
import Section, { Chip } from './Section.jsx'
import { projects } from '../data/profile.js'

const shortUrl = (url) => url.replace(/^https?:\/\//, '').replace(/\/$/, '')

export default function Projects() {
  return (
    <Section id="projects" number="04" title="Projects" className="bg-surface/60">
      <ul className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
        {projects.map((p, i) => (
          <li key={p.title} className="reveal flex" style={{ '--reveal-delay': `${i * 90}ms` }}>
            <article className="flex w-full flex-col overflow-hidden rounded-2xl border border-line bg-surface shadow-card transition-all hover:-translate-y-1 hover:shadow-lift">
              {/* browser chrome (reference 2) */}
              <div className="flex items-center gap-2 border-b border-line bg-bg px-4 py-3" aria-hidden="true">
                <span className="h-2.5 w-2.5 rounded-full bg-ink/70" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber" />
                <span className="h-2.5 w-2.5 rounded-full bg-line" />
                <span className="ml-2 min-w-0 flex-1 truncate rounded-md border border-line bg-surface px-3 py-1 text-xs text-muted">
                  {p.links.live ? shortUrl(p.links.live) : shortUrl(p.links.github)}
                </span>
              </div>

              <div className="flex flex-1 flex-col p-6">
                {p.badge && (
                  <p className="mb-3">
                    <span className="tag-highlight text-[0.65rem] font-bold uppercase tracking-[0.15em]">{p.badge}</span>
                  </p>
                )}
                <h3 className="font-display text-3xl leading-none tracking-wide">{p.title}</h3>
                <p className="mt-2 text-sm font-medium text-amber-text">{p.tagline}</p>
                <ul className="mt-4 list-disc space-y-2 pl-5 text-sm text-muted marker:text-amber">
                  {p.bullets.map((b) => (
                    <li key={b} className="pl-1 leading-relaxed">
                      {b}
                    </li>
                  ))}
                </ul>

                <ul className="mt-5 flex flex-wrap gap-2" aria-label="Tech stack">
                  {p.tech.map((t) => (
                    <Chip key={t}>{t}</Chip>
                  ))}
                </ul>

                <div className="mt-auto flex flex-wrap gap-3 pt-6">
                  {p.links.github && (
                    <a
                      href={p.links.github}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full bg-ink px-4 py-2 text-sm font-semibold text-bg transition-all hover:-translate-y-0.5"
                    >
                      <Icon name="github" className="h-4 w-4" />
                      Code
                      <span className="sr-only">for {p.title} (opens in a new tab)</span>
                    </a>
                  )}
                  {p.links.live && (
                    <a
                      href={p.links.live}
                      target="_blank"
                      rel="noreferrer"
                      className="inline-flex items-center gap-2 rounded-full border border-ink px-4 py-2 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
                    >
                      <Icon name="external" className="h-4 w-4" />
                      Live demo
                      <span className="sr-only">of {p.title} (opens in a new tab)</span>
                    </a>
                  )}
                </div>
              </div>
            </article>
          </li>
        ))}
      </ul>
    </Section>
  )
}
