import Section, { Chip } from './Section.jsx'
import { skills } from '../data/profile.js'

export default function Skills() {
  return (
    <Section id="skills" number="02" title="Skills" className="bg-surface/60">
      <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {skills.map((group, i) => (
          <li
            key={group.category}
            className="reveal rounded-2xl border border-line bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            style={{ '--reveal-delay': `${i * 70}ms` }}
          >
            <h3 className="flex items-center gap-3 font-display text-2xl tracking-wide">
              <span className="h-px w-6 bg-amber" aria-hidden="true" />
              {group.category}
            </h3>
            <ul className="mt-4 flex flex-wrap gap-2" aria-label={`${group.category} skills`}>
              {group.items.map((item) => (
                <Chip key={item}>{item}</Chip>
              ))}
            </ul>
          </li>
        ))}
      </ul>
    </Section>
  )
}
