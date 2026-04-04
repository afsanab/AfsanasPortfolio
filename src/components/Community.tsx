import { useState, useEffect, useRef } from 'react'
import { organizations, Organization } from '../data'
import styles from './Community.module.css'

export default function Community() {
  const [selected, setSelected] = useState<Organization | null>(null)
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const items = el.querySelectorAll('.reveal')
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add('visible'); obs.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    items.forEach((i) => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setSelected(null) }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [])

  return (
    <section id="community" className="section-shell" ref={ref}>
      <div className="section-container">
        <span className="section-label reveal">Community</span>
        <h2 className="section-title reveal">Programs & organizations.</h2>
        <div className={`${styles.grid} reveal`}>
          {organizations.map((org) => (
            <button key={org.name} className={styles.card} onClick={() => setSelected(org)}>
              <img src={org.img} alt={org.name} className={styles.logo}
                onError={(e) => { e.currentTarget.style.display = 'none'; (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex' }} />
              <span className={styles.fallback}>{org.fallbackEmoji}</span>
              <span className={styles.name}>{org.name}</span>
            </button>
          ))}
        </div>
      </div>

      {selected && (
        <div className={styles.overlay} onClick={(e) => { if (e.target === e.currentTarget) setSelected(null) }} role="dialog" aria-modal="true">
          <div className={styles.modal}>
            <button className={styles.close} onClick={() => setSelected(null)} aria-label="Close">&times;</button>
            <h3 className={styles.modalTitle}>{selected.name}</h3>
            <p className={styles.modalDesc}>{selected.description}</p>
          </div>
        </div>
      )}
    </section>
  )
}
