import { useEffect, useState } from 'react'
import styles from './Hero.module.css'

const ROLES = [
  'Software Engineer',
  'Data Analyst',
  'Backend Engineer',
]

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0)
  const [roleDisplayed, setRoleDisplayed] = useState('')
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const currentRole = ROLES[roleIndex]
    let timeout: ReturnType<typeof setTimeout>

    if (!isDeleting && roleDisplayed.length < currentRole.length) {
      timeout = setTimeout(() => setRoleDisplayed(currentRole.slice(0, roleDisplayed.length + 1)), 65)
    } else if (!isDeleting && roleDisplayed.length === currentRole.length) {
      timeout = setTimeout(() => setIsDeleting(true), 2400)
    } else if (isDeleting && roleDisplayed.length > 0) {
      timeout = setTimeout(() => setRoleDisplayed(currentRole.slice(0, roleDisplayed.length - 1)), 38)
    } else if (isDeleting && roleDisplayed.length === 0) {
      setIsDeleting(false)
      setRoleIndex((prev) => (prev + 1) % ROLES.length)
    }

    return () => clearTimeout(timeout)
  }, [roleDisplayed, isDeleting, roleIndex])

  return (
    <header className={styles.hero} id="top">
      <div className={styles.container}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} /> Open to junior SWE roles · New York City
        </p>

        <h1 className={styles.name}>
          Afsana Bhuiyan
        </h1>

        <p className={styles.role}>
          <span className={styles.roleText}>{roleDisplayed}</span>
          <span className={styles.roleCursor} aria-hidden="true">|</span>
        </p>

        <p className={styles.desc}>
          Junior Software Developer at <strong>Margin Research</strong>. I enjoy building
          software and solving problems that help me grow as a programmer.
        </p>

        <div className={styles.ctas}>
          <button
            className={`${styles.btn} ${styles.primary}`}
            onClick={() => window.open('AfsanaBhuiyan_Resume.pdf', '_blank')}
          >
            <i className="fa fa-file-text-o" /> View Resume
          </button>
          <a className={`${styles.btn} ${styles.ghost}`} href="https://github.com/afsanab" target="_blank" rel="noopener">
            <i className="fa fa-github" /> GitHub
          </a>
          <a className={`${styles.btn} ${styles.ghost}`} href="https://www.linkedin.com/in/afsanabhuiyan" target="_blank" rel="noopener">
            <i className="fa fa-linkedin" /> LinkedIn
          </a>
          <a className={`${styles.btn} ${styles.ghost}`} href="mailto:afsanab620@gmail.com">
            <i className="fa fa-envelope" /> Email
          </a>
        </div>
      </div>
    </header>
  )
}