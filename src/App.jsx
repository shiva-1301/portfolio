import Nav from './components/Nav.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Experience from './components/Experience.jsx'
import Projects from './components/Projects.jsx'
import Education from './components/Education.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'
import { navLinks } from './data/profile.js'
import { useTheme } from './hooks/useTheme.js'
import { useActiveSection } from './hooks/useActiveSection.js'
import { useReveal } from './hooks/useReveal.js'

const SECTION_IDS = navLinks.map((l) => l.id)

export default function App() {
  const { theme, toggle } = useTheme()
  const active = useActiveSection(SECTION_IDS)
  useReveal()

  return (
    <>
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-amber focus:px-4 focus:py-2 focus:font-semibold focus:text-on-amber"
      >
        Skip to content
      </a>
      <Nav theme={theme} onToggleTheme={toggle} active={active} />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Experience />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
