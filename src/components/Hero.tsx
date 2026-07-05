import styles from './Hero.module.css'

export default function Hero() {
  return (
    <header className={styles.hero} id="top">
      <div className={styles.container}>
        <p className={styles.eyebrow}>
          <span className={styles.dot} /> Software Engineer · New York City
        </p>

        <h1 className={styles.name}>
          Afsana Bhuiyan
        </h1>

        <p className={styles.role}>Software Engineer</p>

        <p className={styles.desc}>
          Software Engineer at <strong>Margin Research</strong>. I enjoy building
          software and solving problems that help me grow as a programmer.
        </p>

        <div className={styles.ctas}>
          <button
            className={`${styles.btn} ${styles.primary}`}
            onClick={() => window.open('AfsanaBhuiyanResume_SWE.pdf', '_blank')}
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