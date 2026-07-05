import styles from './Footer.module.css'

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.name}>Afsana Bhuiyan</div>
        <p className={styles.tagline}>
          Software Engineer · New York City
        </p>
        <div className={styles.links}>
          <a className={styles.btn} href="mailto:afsanab620@gmail.com">
            <i className="fa fa-envelope" /> afsanab620@gmail.com
          </a>
          <a className={styles.btn} href="https://www.linkedin.com/in/afsanabhuiyan" target="_blank" rel="noopener">
            <i className="fa fa-linkedin" /> LinkedIn
          </a>
          <a className={styles.btn} href="https://github.com/afsanab" target="_blank" rel="noopener">
            <i className="fa fa-github" /> GitHub
          </a>
        </div>
        <p className={styles.copy}>
          © {new Date().getFullYear()} · Built with React + TypeScript
        </p>
      </div>
    </footer>
  )
}
