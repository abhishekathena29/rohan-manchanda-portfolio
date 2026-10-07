import { useState } from 'react'
import { Link } from 'react-router'
import { aboutTabs, marquee, profile, stats } from '../data'
import { ArrowDown, ArrowUpRight, Download, LinkedIn, Mail, Phone, Star, User } from '../components/Icons'
import { TagBox } from '../components/ui'

function About() {
  const tabs = Object.keys(aboutTabs)
  const [tab, setTab] = useState(tabs[0])
  const items = aboutTabs[tab]

  return (
    <section id="about" className="about">
      <div className="container">
        <h2 className="about__statement">
          Turning research into tools that make dangerous work safer and communities stronger.
        </h2>
        <div className="tabs" role="tablist">
          {tabs.map((t) => (
            <button
              key={t}
              role="tab"
              aria-selected={tab === t}
              className={tab === t ? 'is-active' : ''}
              onClick={() => setTab(t)}
            >
              {t}
            </button>
          ))}
        </div>
        <div className="about__body" role="tabpanel">
          {items[0].head ? (
            <ul className="about__list">
              {items.map((i) => (
                <li key={i.head}><strong>{i.head}</strong><span>{i.text}</span></li>
              ))}
            </ul>
          ) : (
            items.map((i) => <p key={i.text}>{i.text}</p>)
          )}
        </div>
        <div className="stats">
          {stats.map((s) => (
            <div key={s.label} className="stat">
              <strong>{s.value}</strong>
              <span>{s.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <section className="hero">
        <div className="container hero__grid">
          <div className="hero__copy">
            <TagBox>Hi everyone 👋, I'm {profile.name}</TagBox>
            <h1>
              Researcher &amp; Builder
              <br />
              Based in India
            </h1>
            <p className="hero__intro">{profile.intro}</p>
            <div className="hero__actions">
              <Link to="/contact" className="btn">
                Get In Touch <ArrowUpRight width={16} height={16} />
              </Link>
              <a href={profile.resumeUrl} className="btn-link" download>
                Download CV <Download width={18} height={18} />
              </a>
            </div>
            <div className="hero__social">
              <span>Find me on:</span>
              <a href={`mailto:${profile.email}`} aria-label="Email"><Mail /></a>
              <a href={`tel:${profile.phone.replace(/\s/g, '')}`} aria-label="Phone"><Phone /></a>
              <a href={profile.linkedin} className="is-green" aria-label="LinkedIn" target="_blank" rel="noreferrer">
                <LinkedIn />
              </a>
            </div>
          </div>

          <div className="hero__visual">
            <svg className="hero__squiggle" viewBox="0 0 110 64" aria-hidden="true">
              <path d="M6 58 26 16l18 32 22-38 18 26 20-20" />
            </svg>
            <a href="#about" className="scroll-badge" aria-label="Explore more about me">
              <svg viewBox="0 0 120 120" className="scroll-badge__text">
                <defs>
                  <path id="circle" d="M60 60m-48 0a48 48 0 1 1 96 0a48 48 0 1 1 -96 0" />
                </defs>
                <text><textPath href="#circle">scroll down • explore more about me •</textPath></text>
              </svg>
              <span className="scroll-badge__arrow"><ArrowDown width={22} height={22} /></span>
            </a>
            <span className="hero__stroke hero__stroke--a" />
            <span className="hero__stroke hero__stroke--b" />
            <div className="hero__photo">
              {profile.image ? (
                <img src={profile.image} alt={profile.name} />
              ) : (
                <div className="hero__placeholder" role="img" aria-label="Profile photo placeholder">
                  <User width={56} height={56} strokeWidth={1.5} />
                  <span>Photo coming soon</span>
                </div>
              )}
            </div>
          </div>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee__track">
            {[...marquee, ...marquee].map((m, i) => (
              <span key={i} className="marquee__item">
                {m} <Star width={28} height={28} />
              </span>
            ))}
          </div>
        </div>
      </section>
      <About />
    </>
  )
}
