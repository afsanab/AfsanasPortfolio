import { useEffect, useRef } from 'react'
import styles from './About.module.css'

const facts = [
  { label: 'Currently', value: 'Software Engineer · Margin Research' },
  { label: 'Focus', value: 'Backend & full-stack engineering' },
  { label: 'Education', value: "B.S. Computer Science · RPI '24" },
  { label: 'Based in', value: 'New York City' },
]

export default function About() {
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
    <section id="about" className={`${styles.section} section-shell`} ref={ref}>
      <div className="section-container">
        <div className={`${styles.grid} reveal`}>
          <div className={styles.sidebar}>
            <img
              src="images/headshot.jpg"
              alt="Afsana Bhuiyan"
              className={styles.photo}
              onError={(e) => {
                e.currentTarget.style.display = 'none';
                (e.currentTarget.nextElementSibling as HTMLElement).style.display = 'flex'
              }}
            />
            <div className={styles.fallback}>👩‍💻</div>
          </div>

          <div className={styles.body}>
            <span className="section-label">About</span>
            <h2 className={`section-title ${styles.title}`}>
              Curious by nature.<br />
              <em>Growing through code.</em>
            </h2>

            <p>
              I'm currently a Software Engineer at <strong>Margin Research</strong>, where I took
              <strong> Reagent</strong> — a SaaS code-analysis platform — from prototype to a deployed v1
              for U.S. government customers. I built its <strong>FastAPI</strong> backend and
              <strong> React</strong> frontend from scratch, plus a Celery-based analysis pipeline backed
              by Redis/Valkey and Elasticsearch.
            </p>
            <p>
              Before this, I interned at <strong>Pieces</strong> (an AI developer tools startup) and
              <strong> ISO New England</strong>, where I worked on Java infrastructure for the region's
              electrical grid. Each role has pushed me to learn quickly, ask good questions, and ship
              work I'm proud of.
            </p>
            <p className={styles.personal}>
              Outside of work: I'm usually reading, out on a trail somewhere, or on a mission to find
              and rate every matcha in NYC. 🍵
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