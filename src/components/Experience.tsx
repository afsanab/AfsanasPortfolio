import { useEffect, useRef } from 'react'
import { experiences } from '../data'
import styles from './Experience.module.css'

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    const el = sectionRef.current
    if (!el) return
    const items = el.querySelectorAll(`.${styles.item}`)
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) { e.target.classList.add(styles.visible); observer.unobserve(e.target) } }),
      { threshold: 0.08 }
    )
    items.forEach((i) => observer.observe(i))
    return () => observer.disconnect()
  }, [])

  return (
    <section id="experience" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <span className={`${styles.label} reveal`}>Experience</span>
        <h2 className={`${styles.title} reveal`}>Where I've worked.</h2>

        <div className={styles.timeline}>
          {experiences.map((exp, i) => (
            <div className={styles.item} key={i}>
              <div className={styles.date}>{exp.date}</div>
              <div className={styles.content}>
                <div className={styles.role}>{exp.role}</div>
                <div className={styles.company}>
                  {exp.company}
                  <span className={styles.location}> · {exp.location}</span>
                </div>
                <ul className={styles.bullets}>
                  {exp.bullets.map((b, j) => (
                    <li key={j}>{b}</li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
