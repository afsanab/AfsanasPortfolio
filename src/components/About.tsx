import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const facts = [
  { label: 'Currently', value: 'SWE Intern · Pieces' },
  { label: 'Previously', value: 'SWE Intern · ISO New England' },
  { label: 'Education', value: 'B.S. CS · RPI \'24' },
  { label: 'Based in', value: 'New York City' },
]

export default function About() {
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
    <section id="about" className={styles.section} ref={sectionRef}>
      <div className={styles.container}>
        <div className={`${styles.grid} reveal`}>
          <div className={styles.sidebar}>
            <img
              src="images/headshot.jpg"
              alt="Afsana Bhuiyan"
              className={styles.photo}
              onError={(e) => {
                const target = e.currentTarget
                target.style.display = 'none'
                const next = target.nextElementSibling as HTMLElement
                if (next) next.style.display = 'flex'
              }}
            />
            <div className={styles.photoFallback}>📷</div>
          </div>

          <div className={styles.body}>
            <span className={styles.label}>About</span>
            <h2 className={styles.title}>
              Builder by nature,<br />
              <em>engineer by craft.</em>
            </h2>

            <p>
              I'm a CS grad who chose the field because I love to{' '}
              <strong>learn and build</strong> — and software is one of the best
              mediums for both. I care about writing purposeful code that solves
              real problems.
            </p>
            <p>
              My background spans full-stack development, data analytics, and
              systems engineering. I've shipped production features at{' '}
              <strong>Pieces</strong> (an AI-powered developer tools startup) and
              built Java infrastructure at <strong>ISO New England</strong>, one of
              the largest independent grid operators in the US.
            </p>
            <p className={styles.personal}>
              Outside of work: currently reading whatever I can get my hands on,
              always planning the next hike, and on a mission to find NYC's best
              cortado. ☕
            </p>

            <div className={styles.facts}>
              {facts.map(({ label, value }) => (
                <div className={styles.fact} key={label}>
                  <div className={styles.factLabel}>{label}</div>
                  <div className={styles.factValue}>{value}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
