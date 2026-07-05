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
              Building impactful products.<br />
              <em>Driven to deliver exceptional software, end to end.</em>
            </h2>

            <p>
              I'm currently a Software Engineer at <strong>Margin Research</strong>, where I took
              <strong> Reagent</strong> — a SaaS code-analysis platform — from prototype to a deployed v1
              for U.S. government customers. I built its <strong>FastAPI</strong> backend and
              <strong> React</strong> frontend from scratch, plus a Celery-based analysis pipeline backed
              by Redis/Valkey and Elasticsearch.
            </p>
            <p>
              Before this, I interned at <strong>Pieces</strong>, where I built a Flask API with a
              self-healing JSON parsing pipeline, and at <strong>ISO New England</strong>, where I
              wrote Java reporting infrastructure and test suites for the region's electrical grid.
              I got my start through <strong>Girls Who Code</strong>, and went on to lead our GWC
              chapter and TA discrete math at RPI — introducing 40+ students to engineering along
              the way.
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