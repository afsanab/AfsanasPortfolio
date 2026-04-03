import { useState, useEffect, useRef } from 'react'
import { projects } from '../data'
import styles from './Projects.module.css'

const filters = [
  { label: 'All', value: 'all' },
  { label: 'Full-Stack', value: 'fullstack' },
  { label: 'Analytics', value: 'analytics' },
  { label: 'ML / AI', value: 'ml' },
  { label: 'Visualization', value: 'viz' },
]

export default function Projects() {
  const [active, setActive] = useState('all')
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.05 }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [])

  const visible = projects.filter(
    (p) => active === 'all' || p.tags.includes(active)
  )

  return (
    <section id="projects" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <span className={`${styles.label} reveal`}>Projects</span>
        <h2 className={`${styles.title} reveal`}>Things I've built.</h2>

        <div className={`${styles.filters} reveal`}>
          {filters.map(({ label, value }) => (
            <button
              key={value}
              className={`${styles.chip} ${active === value ? styles.chipActive : ''}`}
              onClick={() => setActive(value)}
            >
              {label}
            </button>
          ))}
        </div>

        <div className={styles.grid}>
          {visible.map((p) => (
            <div className={styles.card} key={p.name}>
              <div className={styles.cardTop}>
                <div className={styles.icon}>{p.icon}</div>
                <div className={styles.cardLinks}>
                  {p.links.map(({ label, url }) => (
                    <a
                      key={label}
                      className={styles.link}
                      href={url}
                      target="_blank"
                      rel="noopener"
                    >
                      {label}
                    </a>
                  ))}
                </div>
              </div>
              <div className={styles.cardName}>{p.name}</div>
              <p className={styles.cardDesc}>{p.desc}</p>
              <div className={styles.tags}>
                {p.tech.map((t) => (
                  <span className={styles.tag} key={t}>{t}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
