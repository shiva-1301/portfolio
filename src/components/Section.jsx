/** Section shell with the "01 —— TITLE" header pattern. */
export default function Section({ id, number, title, children, className = '' }) {
  return (
    <section id={id} aria-labelledby={`${id}-title`} className={`py-24 lg:py-32 ${className}`}>
      <div className="mx-auto max-w-6xl px-6">
        <header className="reveal mb-12 flex items-center gap-4 lg:mb-16">
          <span className="font-display text-2xl tracking-widest text-amber-text" aria-hidden="true">
            {number}
          </span>
          <span className="h-px w-10 bg-ink" aria-hidden="true" />
          <h2
            id={`${id}-title`}
            className="font-display text-5xl uppercase leading-none tracking-wide lg:text-6xl"
          >
            {title}
          </h2>
        </header>
        {children}
      </div>
    </section>
  )
}

/** Small amber tag used as a sub-heading ("What I do", "Fun facts"). */
export function Tag({ children, as: Tag = 'h3', className = '' }) {
  return (
    <Tag className={`inline-block ${className}`}>
      <span className="tag-highlight font-display text-xl uppercase tracking-widest">{children}</span>
    </Tag>
  )
}

/** Pill chip for skills and tech tags. */
export function Chip({ children }) {
  return (
    <li className="inline-flex items-center gap-2 rounded-full border border-line bg-bg px-3 py-1 text-sm font-medium text-ink">
      <span className="h-1.5 w-1.5 rounded-full bg-amber" aria-hidden="true" />
      {children}
    </li>
  )
}
