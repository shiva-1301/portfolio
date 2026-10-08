import Icon from './Icon.jsx'
import Section from './Section.jsx'
import { education } from '../data/profile.js'

export default function Education() {
  return (
    <Section id="education" number="05" title="Education">
      <ol className="grid gap-6 md:grid-cols-2">
        {education.map((e, i) => (
          <li
            key={e.school}
            className="reveal relative rounded-2xl border border-line bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift sm:p-8"
            style={{ '--reveal-delay': `${i * 100}ms` }}
          >
            <span className="absolute right-6 top-6 inline-flex h-11 w-11 items-center justify-center rounded-full bg-amber text-on-amber" aria-hidden="true">
              <Icon name="cap" className="h-5 w-5" />
            </span>
            <p className="font-display text-xl tracking-widest text-amber-text">{e.period}</p>
            <h3 className="mt-2 pr-14 font-display text-3xl leading-none tracking-wide">{e.school}</h3>
            <p className="mt-2 text-lg font-semibold">{e.degree}</p>
            <p className="mt-1 inline-flex items-center gap-1.5 text-muted">
              <Icon name="pin" className="h-4 w-4" />
              {e.location}
            </p>
            <p className="mt-5">
              <span className="tag-highlight text-xs font-bold uppercase tracking-[0.15em]">{e.score}</span>
            </p>
          </li>
        ))}
      </ol>
    </Section>
  )
}
