import { useEffect, useState } from 'react'
import { Link, Outlet, useLocation } from 'react-router'
import { nav, profile } from '../data'
import { Close, Menu } from './Icons'

function Header() {
  const { pathname } = useLocation()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className={`header${scrolled ? ' header--scrolled' : ''}`}>
      <div className="container header__inner">
        <Link to="/" className="logo" onClick={() => setOpen(false)}>
          <span className="logo__mark">R</span>
          {profile.firstName}
        </Link>
        <nav className={`nav${open ? ' nav--open' : ''}`} aria-label="Primary">
          {nav.map((item) => {
            const path = item.to.split('#')[0]
            return (
              <Link
                key={item.to}
                to={item.to}
                className={pathname === path ? 'is-active' : ''}
                onClick={() => setOpen(false)}
              >
                {item.label}
              </Link>
            )
          })}
        </nav>
        <button
          className="nav-toggle"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          {open ? <Close width={22} height={22} /> : <Menu width={22} height={22} />}
        </button>
      </div>
    </header>
  )
}

function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer">
        <span>© {new Date().getFullYear()} {profile.name}. All rights reserved.</span>
        <span>{profile.location}</span>
      </div>
    </footer>
  )
}

export default function Layout() {
  const { pathname, hash, key } = useLocation()

  useEffect(() => {
    const target = hash && document.getElementById(hash.slice(1))
    if (target) target.scrollIntoView({ behavior: 'smooth' })
    else window.scrollTo(0, 0)
  }, [pathname, hash, key])

  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  )
}
