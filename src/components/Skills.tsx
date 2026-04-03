import { useEffect, useRef } from 'react'
import { skillGroups } from '../data'
import styles from './Skills.module.css'

export default function Skills() {
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

  return (
    <section id="skills" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <span className={`${styles.label} reveal`}>Skills</span>
        <h2 className={`${styles.title} reveal`}>Tools of the trade.</h2>

        <div className={`${styles.grid} reveal`}>
          {skillGroups.map(({ category, items }) => (
            <div className={styles.group} key={category}>
              <h3 className={styles.groupTitle}>{category}</h3>
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
