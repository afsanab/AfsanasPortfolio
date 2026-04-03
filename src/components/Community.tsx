import { useState, useEffect, useRef } from 'react'
import { organizations, Organization } from '../data'
import styles from './Community.module.css'

export default function Community() {
  const [selected, setSelected] = useState<Organization | null>(null)
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll('.reveal')
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); observer.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="community" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <span className={`${styles.label} reveal`}>Community</span>
        <h2 className={`${styles.title} reveal`}>Programs & organizations.</h2>

        <div className={`${styles.grid} reveal`}>
          {organizations.map((org) => (
            <button
              key={org.name}
              className={styles.card}
              onClick={() => setSelected(org)}
            >
              <img
                src={org.img}
                alt={org.name}
                className={styles.logo}
                onError={(e) => {
                  const target = e.currentTarget
                  target.style.display = 'none'
                  const next = target.nextElementSibling as HTMLElement
                  if (next) next.style.display = 'flex'
                }}
              />
              <span className={styles.fallback}>{org.fallbackEmoji}</span>
              <span className={styles.orgName}>{org.name}</span>
            </button>
          ))}
        </div>
      </div>

      {/* Modal */}
      {selected && (
        <div
          className={styles.overlay}
          onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }}
          role="dialog"
          aria-modal="true"
        >
          <div className={styles.modal}>
            <button
              className={styles.close}
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              &times;
            </button>
            <h3 className={styles.modalTitle}>{selected.name}</h3>
            <p className={styles.modalDesc}>{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}
