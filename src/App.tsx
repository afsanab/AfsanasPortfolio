import { useEffect, useState } from 'react'
import { experiences, projects, organizations, Organization } from './data'
import './styles.css'

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#community', label: 'Community' },
]

const aboutFacts = [
  { label: 'Currently', value: 'Working on elprincipito', link: 'https://github.com/afsanab/elprincipito' },
  { label: 'Focus', value: 'Backend & full-stack engineering' },
  { label: 'Education', value: "B.S. Computer Science · RPI '24" },
  { label: 'Based in', value: 'New York City' },
]

export default function App() {
  const [theme, setTheme] = useState<'dark' | 'light'>(() =>
    (localStorage.getItem('theme') as 'dark' | 'light') ?? 'light'
  )
  const [activeNav, setActiveNav] = useState('')
  const [scrolled, setScrolled] = useState(false)
  const [selectedOrg, setSelectedOrg] = useState<Organization | null>(null)

  // Theme management
  useEffect(() => {
    document.body.classList.toggle('light', theme === 'light')
    localStorage.setItem('theme', theme)
  }, [theme])

  // Nav scroll tracking
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 100
      let cur = sections[0]?.id ?? ''
      sections.forEach((s) => {
        if (y >= (s as HTMLElement).offsetTop) cur = s.id
      })
      setActiveNav(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Modal escape key
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedOrg(null)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      {/* Navigation */}
      <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
        <div className="nav-inner">
          <ul className="nav-links">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <a
                  href={href}
                  className={activeNav === href.slice(1) ? 'active' : ''}
                  onClick={(e) => scrollTo(e, href)}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>
          <button
            className="theme-btn"
            onClick={() => setTheme(t => t === 'dark' ? 'light' : 'dark')}
            aria-label="Toggle theme"
          >
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </nav>

      {/* Hero */}
      <header className="hero" id="top">
        <div className="hero-container">
          <h1 className="hero-name">Afsana Bhuiyan</h1>
          <p className="hero-role">Fullstack Software Engineer</p>
          <div className="hero-ctas">
            <button
              className="btn btn-primary"
              onClick={() => window.open('AfsanaBhuiyanResume_SWE.pdf', '_blank')}
            >
              <i className="fa fa-file-text-o" /> View Resume
            </button>
            <a className="btn btn-ghost" href="https://github.com/afsanab" target="_blank" rel="noopener">
              <i className="fa fa-github" /> GitHub
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/afsanabhuiyan" target="_blank" rel="noopener">
              <i className="fa fa-linkedin" /> LinkedIn
            </a>
          </div>
        </div>
      </header>

      {/* About */}
      <section id="about" className="section">
        <div className="container">
          <div className="about-grid">
            <div className="about-sidebar">
              <img src="images/headshot.jpg" alt="Afsana Bhuiyan" className="about-photo" />
            </div>
            <div className="about-body">
              <span className="section-label">About</span>
              <p>
                I'm a fullstack engineer with a focus on backend development. I'm driven by curiosity,
                problem-solving, and the challenge of turning ambiguous problems into practical software.
                I'm currently teaching myself C# and .NET while building a language learning platform
                for reading books in a new language. I got started in programming through Girls Who Code,
                later leading my GWC chapter and TA'ing discrete math at RPI. Outside of work, I enjoy
                reading, hiking, traveling, and learning languages.
              </p>
              <div className="facts-grid">
                {aboutFacts.map(({ label, value, link }) => (
                  link ? (
                    <a 
                      href={link} 
                      target="_blank" 
                      rel="noopener" 
                      className="fact fact-link" 
                      key={label}
                    >
                      <div className="fact-label">{label}</div>
                      <div className="fact-value">{value}</div>
                    </a>
                  ) : (
                    <div className="fact" key={label}>
                      <div className="fact-label">{label}</div>
                      <div className="fact-value">{value}</div>
                    </div>
                  )
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects */}
      <section id="projects" className="section">
        <div className="container">
          <span className="section-label">Projects</span>
          <h2 className="section-title">Things I've built.</h2>

          <div className="projects-grid">
            {projects.map((p) => (
              <div className="project-card" key={p.name}>
                <div className="project-header">
                  <div className="project-links">
                    {p.links.map(({ label, url }) => (
                      <a key={label} className="project-link" href={url} target="_blank" rel="noopener">
                        {label}
                      </a>
                    ))}
                  </div>
                </div>
                <div className="project-name">{p.name}</div>
                <p className="project-desc">{p.desc}</p>
                <div className="project-tags">
                  {p.tech.map((t) => <span className="project-tag" key={t}>{t}</span>)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience */}
      <section id="experience" className="section">
        <div className="container">
          <span className="section-label">Experience</span>
          <h2 className="section-title">Where I've shipped.</h2>
          <div className="timeline">
            {experiences.map((exp, i) => (
              <div className="timeline-item" key={i}>
                <div className="timeline-left">
                  <span className="timeline-date">{exp.date}</span>
                </div>
                <div className="timeline-content">
                  <div className="timeline-role">{exp.role}</div>
                  <div className="timeline-company">
                    {exp.company}<span className="timeline-location"> · {exp.location}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Community */}
      <section id="community" className="section">
        <div className="container">
          <span className="section-label">Community</span>
          <h2 className="section-title">Programs & organizations.</h2>
          <div className="community-grid">
            {organizations.map((org) => (
              <button key={org.name} className="community-card" onClick={() => setSelectedOrg(org)}>
                <img src={org.img} alt={org.name} className="community-logo" />
                <span className="community-name">{org.name}</span>
              </button>
            ))}
          </div>
        </div>

        {selectedOrg && (
          <div className="modal-overlay" onClick={(e) => {
            if (e.target === e.currentTarget) setSelectedOrg(null)
          }}>
            <div className="modal">
              <button className="modal-close" onClick={() => setSelectedOrg(null)}>
                &times;
              </button>
              <h3 className="modal-title">{selectedOrg.name}</h3>
              <p className="modal-desc">{selectedOrg.description}</p>
            </div>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="footer-container">
          <div className="footer-name">Afsana Bhuiyan</div>
          <p className="footer-tagline">Software Engineer · New York City</p>
          <div className="footer-links">
            <a className="footer-btn" href="mailto:afsanab620@gmail.com">
              <i className="fa fa-envelope" /> afsanab620@gmail.com
            </a>
            <a className="footer-btn" href="https://www.linkedin.com/in/afsanabhuiyan" target="_blank" rel="noopener">
              <i className="fa fa-linkedin" /> LinkedIn
            </a>
            <a className="footer-btn" href="https://github.com/afsanab" target="_blank" rel="noopener">
              <i className="fa fa-github" /> GitHub
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
