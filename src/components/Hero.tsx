import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.container}>
        <p className={styles.eyebrow}>Software Engineer · New York City</p>

        <h1 className={styles.name}>
          Afsana<br />
          <em>Bhuiyan</em>
        </h1>

        <p className={styles.desc}>
          I build <strong>full-stack applications</strong> and data-driven tools
          that make complex systems feel simple. Currently shipping at{' '}
          <strong>Pieces</strong>, previously at <strong>ISO New England</strong>.
        </p>

        <p className={styles.tagline}>
          CS grad who chose the field because I love to learn and build —
          and software is one of the best mediums for both. ✦
        </p>

        <div className={styles.ctas}>
          <button
            className={`${styles.btn} ${styles.primary}`}
            onClick={() => window.open('AfsanaBhuiyan_Resume.pdf', '_blank')}
          >
            View Resume
          </button>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href="https://github.com/afsanab"
            target="_blank"
            rel="noopener"
          >
            <i className="fa fa-github" /> GitHub
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href="https://www.linkedin.com/in/afsanabhuiyan"
            target="_blank"
            rel="noopener"
          >
            <i className="fa fa-linkedin" /> LinkedIn
          </a>
          <a
            className={`${styles.btn} ${styles.ghost}`}
            href="mailto:afsanab620@gmail.com"
          >
            <i className="fa fa-envelope" /> Email
          </a>
        </div>
      </div>
    </header>
  )
}
