import { useEffect, useState } from 'react'
import styles from './Nav.module.css'

const links = [
  { href: '#about', label: 'About' },
  { href: '#experience', label: 'Experience' },
  { href: '#projects', label: 'Projects' },
  { href: '#skills', label: 'Skills' },
  { href: '#community', label: 'Community' },
]

export default function Nav() {
  const [active, setActive] = useState('')

  useEffect(() => {
    const sections = Array.from(document.querySelectorAll('section[id]'))
    const onScroll = () => {
      const y = window.scrollY + 100
      let cur = sections[0]?.id ?? ''
      sections.forEach((s) => { if (y >= (s as HTMLElement).offsetTop) cur = s.id })
      setActive(cur)
    }
    onScroll()
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault()
    const target = document.querySelector(href)
    if (target) target.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav className={styles.nav}>
      <div className={styles.inner}>
        <a href="#top" className={styles.logo} onClick={(e) => scrollTo(e, '#top')}>
          AB
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
      </div>
    </nav>
  )
}
