import Icon from './Icon.jsx'
import Section, { Chip } from './Section.jsx'
import { experience } from '../data/profile.js'

export default function Experience() {
  return (
    <Section id="experience" number="03" title="Experience">
      <ol className="relative ml-3 border-l-2 border-line">
        {experience.map((job, i) => (
          <li key={job.role + job.org} className="reveal relative pb-12 pl-8 last:pb-0 sm:pl-12" style={{ '--reveal-delay': `${i * 100}ms` }}>
            <span className="absolute -left-[11px] top-1.5 h-5 w-5 rounded-full border-4 border-bg bg-amber" aria-hidden="true" />
            <p className="font-display text-xl tracking-widest text-amber-text">{job.period}</p>
            <h3 className="mt-1 text-2xl font-bold leading-tight">{job.role}</h3>
            <p className="mt-1 flex flex-wrap items-center gap-x-3 gap-y-1 text-muted">
              <span className="inline-flex items-center gap-1.5 font-medium text-ink">
                <Icon name="briefcase" className="h-4 w-4 text-amber-text" />
                {job.org}
              </span>
              <span className="inline-flex items-center gap-1.5">
                <Icon name="pin" className="h-4 w-4" />
                {job.location}
              </span>
            </p>
            <ul className="mt-5 max-w-3xl list-disc space-y-3 pl-5 text-muted marker:text-amber">
              {job.bullets.map((b) => (
                <li key={b} className="pl-1 leading-relaxed">
                  {b}
                </li>
              ))}
            </ul>
            <ul className="mt-5 flex flex-wrap gap-2" aria-label="Technologies used">
              {job.tags.map((t) => (
                <Chip key={t}>{t}</Chip>
              ))}
            </ul>
          </li>
        ))}
      </ol>
    </Section>
  )
}
