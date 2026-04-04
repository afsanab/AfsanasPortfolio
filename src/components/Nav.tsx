import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#about',      label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects',   label: 'Projects' },
  { href: '#skills',     label: 'Skills' },
  { href: '#community',  label: 'Community' },
]

interface NavProps {
  theme: 'dark' | 'light'
  onToggleTheme: () => void
}

export default function Nav({ theme, onToggleTheme }: NavProps) {
  const [active, setActive] = useState('')
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const onScroll = () => {
      setScrolled(window.scrollY > 20)
      const y = window.scrollY + 100
      let cur = sections[0]?.id ?? ''
      sections.forEach((s) => { if (y >= (s as HTMLElement).offsetTop) cur = s.id })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={`${styles.nav} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={(e) => scrollTo(e, '#top')}>
          <span className={styles.logoA}>A</span>B
        </a>
        <ul className={styles.links}>
          {links.map(({ href, label }) => (
            <li key={href}>
              <a
                href={href}
                className={active === href.slice(1) ? styles.active : ''}
                onClick={(e) => scrollTo(e, href)}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
        <button
          className={styles.themeBtn}
          onClick={onToggleTheme}
          aria-label="Toggle theme"
          title={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
        >
          {theme === 'dark' ? '☀️' : '🌙'}
        </button>
      </div>
    </nav>
  )
}
