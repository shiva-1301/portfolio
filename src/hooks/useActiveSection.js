import { useEffect, useState } from 'react'

/** Returns the id of the section currently in the middle band of the viewport. */
export function useActiveSection(ids) {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = ids.map((id) => document.getElementById(id)).filter(Boolean)
    if (!sections.length) return

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((e) => e.isIntersecting)
          .sort((a, b) => a.boundingClientRect.top - b.boundingClientRect.top)
        if (visible[0]) setActive(visible[0].target.id)
        else if (window.scrollY < 200) setActive('')
      },
      { rootMargin: '-35% 0px -55% 0px', threshold: 0 },
    )
    sections.forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [ids])

  return active
}
