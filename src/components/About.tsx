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
            />
          </div>

          <div className={styles.body}>
            <span className="section-label">About</span>
            <h2 className={`section-title ${styles.title}`}>
              Building impactful products.<br />
              <em>Driven to deliver exceptional software, end to end.</em>
            </h2>
            <p>
              I'm a fullstack engineer with a focus on backend development. I'm driven by curiosity, problem-solving, and the challenge of
              turning ambiguous problems into practical software.
              I'm currently teaching myself C# and .NET while building a language learning platform for reading books in a new language.
              I got started in programming through Girls Who Code, later leading my GWC chapter and TA'ing discrete math at RPI.
              Outside of work, I enjoy reading, hiking, and rating every matcha in NYC.
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