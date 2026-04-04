import { useEffect, useRef } from 'react'
import { experiences } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  const ref = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = ref.current; if (!el) return
    const items = el.querySelectorAll(`.${styles.item}`)
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.visible); obs.unobserve(e.target) } }),
      { threshold: 0.06 }
    )
    items.forEach((i) => obs.observe(i))
    return () => obs.disconnect()
  }, [])

  return (
    <section id="experience" className="section-shell" ref={ref}>
      <div className="section-container">
        <span className="section-label reveal">Experience</span>
        <h2 className="section-title reveal">Where I've shipped.</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.left}>
                <span className={styles.date}>{exp.date}</span>
                {exp.badge && <span className={styles.badge}>{exp.badge}</span>}
              </div>
              <div className={styles.content}>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.company}>
                  {exp.company}
                  <span className={styles.loc}> · {exp.location}</span>
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
