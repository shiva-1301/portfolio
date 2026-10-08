import Icon from './Icon.jsx'
import { profile } from '../data/profile.js'

export default function Footer() {
  return (
    <footer className="border-t border-line">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 py-8 text-sm text-muted sm:flex-row">
        <p>
          © {new Date().getFullYear()} {profile.name}. Built with React &amp; Tailwind CSS.
        </p>
        <a href="#top" className="inline-flex items-center gap-2 font-medium text-ink transition-colors hover:text-amber-text">
          Back to top
          <Icon name="arrowUp" className="h-4 w-4" />
        </a>
      </div>
    </footer>
  )
}
