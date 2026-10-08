import Icon from './Icon.jsx'
import Section, { Tag } from './Section.jsx'
import { about, achievements, stats } from '../data/profile.js'

export default function About() {
  return (
    <Section id="about" number="01" title="About me">
      <div className="grid gap-14 lg:grid-cols-[1.1fr_0.9fr] lg:gap-20">
        <div>
          <p className="reveal text-lg leading-relaxed text-muted">{about.intro}</p>

          <Tag className="reveal mt-10">What I do</Tag>
          <ul className="mt-6 space-y-6">
            {about.whatIDo.map((item, i) => (
              <li key={item.title} className="reveal flex gap-4" style={{ '--reveal-delay': `${i * 80}ms` }}>
                <span className="mt-0.5 inline-flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-amber text-on-amber">
                  <Icon name={item.icon} className="h-5 w-5" />
                </span>
                <div>
                  <h4 className="font-display text-2xl tracking-wide">{item.title}</h4>
                  <p className="mt-1 text-muted">{item.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <Tag className="reveal">Fun facts</Tag>
          <ul className="mt-6 grid grid-cols-2 gap-5 sm:gap-6 md:grid-cols-4 lg:grid-cols-2">
            {stats.map((s, i) => (
              <li
                key={s.label}
                className="reveal flex aspect-square flex-col items-center justify-center rounded-full bg-[#141414] text-center text-white shadow-card ring-1 ring-line transition-transform hover:-translate-y-1 dark:bg-surface"
                style={{ '--reveal-delay': `${i * 80}ms` }}
              >
                <span className="font-display text-5xl leading-none text-[#FFC53D] sm:text-6xl">{s.value}</span>
                <span className="mt-2 px-4 text-[0.7rem] font-semibold uppercase tracking-[0.15em] text-white/80">{s.label}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <Tag className="reveal mt-20">Highlights</Tag>
      <ul className="mt-6 grid gap-5 md:grid-cols-3">
        {achievements.map((a, i) => (
          <li
            key={a.title}
            className="reveal rounded-2xl border border-line bg-surface p-6 shadow-card transition-all hover:-translate-y-1 hover:shadow-lift"
            style={{ '--reveal-delay': `${i * 80}ms` }}
          >
            <Icon name="trophy" className="h-6 w-6 text-amber-text" />
            <h4 className="mt-4 font-bold leading-snug">{a.title}</h4>
            <p className="mt-2 text-sm text-muted">{a.text}</p>
          </li>
        ))}
      </ul>
    </Section>
  )
}
