import { useEffect, useRef } from 'react'
import { skillGroups } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
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

  return (
    <section id="skills" className="section-shell" ref={ref}>
      <div className="section-container">
        <span className="section-label reveal">Skills</span>
        <h2 className="section-title reveal">Tools of the trade.</h2>
        <div className={`${styles.grid} reveal`}>
          {skillGroups.map(({ category, items }) => (
            <div className={styles.group} key={category}>
              <h3 className={styles.cat}>{category}</h3>
              <div className={styles.pills}>
                {items.map((item) => (
                  <span className={styles.pill} key={item}>{item}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
