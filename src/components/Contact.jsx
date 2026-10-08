import Icon from './Icon.jsx'
import Section from './Section.jsx'
import { codingProfiles, profile } from '../data/profile.js'

const rows = [
  { icon: 'mail', label: 'Email', value: profile.email, href: `mailto:${profile.email}` },
  { icon: 'phone', label: 'Phone', value: profile.phone, href: `tel:${profile.phone.replace(/\s+/g, '')}` },
  { icon: 'linkedin', label: 'LinkedIn', value: 'shivadhanu-goud-jajula', href: profile.links.linkedin, external: true },
  { icon: 'github', label: 'GitHub', value: 'shiva-1301', href: profile.links.github, external: true },
  ...codingProfiles.map((c) => ({
    icon: 'code',
    label: c.name,
    value: c.handle,
    note: c.note,
    href: c.url,
    external: true,
  })),
]

export default function Contact() {
  return (
    <Section id="contact" number="06" title="Contact" className="bg-surface/60">
      <div className="grid gap-12 lg:grid-cols-[1fr_1.1fr] lg:gap-20">
        <div>
          <p className="crosses reveal" aria-hidden="true">
            × × × × ×
          </p>
          <h3 className="reveal mt-4 font-display text-5xl uppercase leading-[0.95] tracking-wide sm:text-6xl">
            Let&apos;s build
            <br />
            something<span className="text-amber-text">.</span>
          </h3>
          <p className="reveal mt-6 max-w-md text-lg leading-relaxed text-muted">
            Have a project, research idea or role in mind? My inbox is open, and I usually reply quickly.
          </p>
          <div className="reveal mt-8 flex flex-wrap gap-3">
            <a
              href={`mailto:${profile.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-ink px-6 py-3 text-sm font-semibold text-bg shadow-card transition-all hover:-translate-y-0.5 hover:shadow-lift"
            >
              <Icon name="mail" className="h-4 w-4" />
              Say hello
            </a>
            <a
              href={`${import.meta.env.BASE_URL}${profile.resumeFile}`}
              download="Shivadhanu_Goud_Resume.pdf"
              className="inline-flex items-center gap-2 rounded-full border border-ink px-6 py-3 text-sm font-semibold transition-all hover:-translate-y-0.5 hover:bg-ink hover:text-bg"
            >
              <Icon name="download" className="h-4 w-4" />
              Download resume
            </a>
          </div>
          <p className="reveal mt-8 inline-flex items-center gap-2 text-sm text-muted">
            <Icon name="pin" className="h-4 w-4 text-amber-text" />
            {profile.location}
          </p>
        </div>

        <ul className="grid gap-3 sm:grid-cols-2">
          {rows.map((r, i) => (
            <li key={r.label} className="reveal" style={{ '--reveal-delay': `${i * 60}ms` }}>
              <a
                href={r.href}
                target={r.external ? '_blank' : undefined}
                rel={r.external ? 'noreferrer' : undefined}
                className="group flex h-full items-start gap-4 rounded-2xl border border-line bg-surface p-5 shadow-card transition-all hover:-translate-y-1 hover:border-amber hover:shadow-lift"
              >
                <span className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-bg text-ink ring-1 ring-line transition-colors group-hover:bg-amber group-hover:text-on-amber">
                  <Icon name={r.icon} className="h-5 w-5" />
                </span>
                <span className="min-w-0 flex-1">
                  <span className="block text-xs font-semibold uppercase tracking-[0.15em] text-muted">{r.label}</span>
                  <span className="mt-0.5 block break-all font-medium">{r.value}</span>
                  {r.note && <span className="mt-1 block text-xs leading-relaxed text-muted">{r.note}</span>}
                </span>
                {r.external && (
                  <>
                    <Icon name="external" className="h-4 w-4 shrink-0 text-muted transition-colors group-hover:text-amber-text" />
                    <span className="sr-only">(opens in a new tab)</span>
                  </>
                )}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Section>
  )
}
