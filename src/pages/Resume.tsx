import type { ReactNode } from 'react'
import {
  awards, coursework, education, leadership, profile, research, skills, spindle, testing,
} from '../data'
import { ArrowUpRight, Download } from '../components/Icons'
import { PageCta, SectionHead } from '../components/ui'

function Block({ title, children }: { title: string; children: ReactNode }) {
  return (
    <section className="cv__block">
      <h2>{title}</h2>
      {children}
    </section>
  )
}

function Entry({ title, sub, date, bullets }: { title: ReactNode; sub?: string; date?: string; bullets?: string[] }) {
  return (
    <div className="cv__entry">
      <div className="cv__entry-head">
        <h3>{title}</h3>
        {date && <time>{date}</time>}
      </div>
      {sub && <p className="cv__sub">{sub}</p>}
      {bullets && (
        <ul className="bullets">
          {bullets.map((b) => <li key={b}>{b}</li>)}
        </ul>
      )}
    </div>
  )
}

export default function Resume() {
  return (
    <>
      <section className="page">
        <div className="container">
          <SectionHead
            tag="Resume"
            title="Resume"
            intro="Everything in one place — education, research, projects, leadership, awards and skills."
          />
          <div className="cv__actions">
            <a href={profile.resumeUrl} className="btn" download="Rohan Manchanda - Resume.pdf">
              Download PDF <Download width={16} height={16} />
            </a>
            <a href={profile.resumeUrl} className="btn-link" target="_blank" rel="noreferrer">
              Open in new tab <ArrowUpRight width={16} height={16} />
            </a>
          </div>

          <div className="cv">
            <header className="cv__header">
              <h2>{profile.name}</h2>
              <p>
                {profile.location} · <a href={`mailto:${profile.email}`}>{profile.email}</a> ·{' '}
                <a href={`tel:${profile.phone.replace(/\s/g, '')}`}>{profile.phone}</a> ·{' '}
                <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              </p>
            </header>

            <Block title="Education">
              {education.map((e) => (
                <Entry
                  key={e.school}
                  title={<>{e.school}<span className="cv__place">, {e.place}</span></>}
                  date={e.date}
                  sub={[e.program, e.detail].filter(Boolean).join(' — ')}
                  bullets={[e.highlight]}
                />
              ))}
              <p className="cv__line">
                <strong>Standardized Testing:</strong> SAT {testing.sat.value} ({testing.sat.detail}) | APs:{' '}
                {testing.aps.map((a) => `${a} (5)`).join(', ')}
              </p>
            </Block>

            <Block title="Research & Fellowships">
              {research.map((r) => (
                <Entry
                  key={r.title}
                  title={r.title}
                  sub={r.org}
                  date={r.date.includes('20') ? r.date : undefined}
                  bullets={r.bullets}
                />
              ))}
            </Block>

            <Block title="Technical Projects & Innovation">
              <Entry
                title={`${spindle.title} — ${spindle.subtitle}`}
                sub="Patent Holder"
                bullets={spindle.bullets}
              />
            </Block>

            <Block title="Leadership, Entrepreneurship & Impact">
              {leadership.map((l) => (
                <Entry key={l.org} title={`${l.role} — ${l.org}`} date={l.date} bullets={l.bullets} />
              ))}
            </Block>

            <Block title="Honors & Awards">
              <ul className="cv__awards">
                {awards.map((a) => (
                  <li key={a.title}>
                    <span>{a.title} — {a.note}</span>
                    <time>{a.year}</time>
                  </li>
                ))}
              </ul>
            </Block>

            <Block title="Skills & Coursework">
              {skills.map((s) => (
                <p key={s.label} className="cv__line"><strong>{s.label}:</strong> {s.value}</p>
              ))}
              <p className="cv__line">
                <strong>Coursework:</strong>{' '}
                {coursework.map((c, i) => (
                  <span key={c.label}>
                    {i > 0 && ' · '}
                    {c.href ? <a href={c.href} target="_blank" rel="noreferrer">{c.label}</a> : c.label}
                  </span>
                ))}
              </p>
            </Block>
          </div>
        </div>
      </section>
      <PageCta to="/contact" label="Get in touch" />
    </>
  )
}
