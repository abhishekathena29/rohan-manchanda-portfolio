import { projects, spindle } from '../data'
import { ArrowUpRight } from '../components/Icons'
import { ExternalLinks, Gallery, Media, PageCta, SectionHead } from '../components/ui'

function Spindle() {
  const [cover] = spindle.gallery

  return (
    <article className="feature">
      <div className="feature__grid">
        <div className="feature__cover">
          <img src={cover.src} alt={cover.caption} />
          <span className="feature__badge">{spindle.badge}</span>
        </div>
        <div className="feature__copy">
          <span className="eyebrow">Featured project</span>
          <h2>{spindle.title}</h2>
          <h3 className="feature__subtitle">{spindle.subtitle}</h3>
          <p>{spindle.summary}</p>
          <ul className="bullets">
            {spindle.bullets.map((b) => <li key={b}>{b}</li>)}
          </ul>
        </div>
      </div>

      <div className="specs">
        {spindle.specs.map((s) => (
          <div key={s.label} className="spec">
            <strong>{s.value}</strong>
            <span>{s.label}</span>
          </div>
        ))}
      </div>

      <div className="features">
        {spindle.features.map((f) => (
          <div key={f.title} className="features__item">
            <h4>{f.title}</h4>
            <p>{f.text}</p>
          </div>
        ))}
      </div>

      <h3 className="sub-head">See it in action</h3>
      <div className="videos">
        {spindle.videos.map((v) => (
          <figure key={v.src} className="video">
            <video src={`${v.src}#t=1`} controls muted playsInline preload="metadata" />
            <figcaption>{v.caption}</figcaption>
          </figure>
        ))}
      </div>

      <h3 className="sub-head">On-ground testing at the mine</h3>
      <Gallery photos={spindle.fieldTests} />

      <h3 className="sub-head">Build gallery</h3>
      <Gallery photos={spindle.gallery} />

      <div className="stack">
        <span className="stack__label">Built with</span>
        <div className="pills">
          {spindle.stack.map((t) => <span key={t} className="pill">{t}</span>)}
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  return (
    <>
      <section className="page">
        <div className="container">
          <SectionHead
            tag="Projects"
            title="My Latest Projects"
            intro="Hardware, AI and optimization work built to be deployed in the real world — not just demoed."
          />
          <Spindle />

          <h3 className="sub-head sub-head--lg">More projects</h3>
          <div className="projects">
            {projects.map((p) => (
              <article key={p.title} className="project">
                {p.document && p.image ? (
                  <a href={p.document.href} className="project__doc" target="_blank" rel="noreferrer">
                    <img src={p.image} alt={p.document.label} loading="lazy" />
                    <span>View letter <ArrowUpRight width={14} height={14} /></span>
                  </a>
                ) : (
                  <Media src={p.image} alt={p.title} label="Project image" />
                )}
                <span className="project__date">{p.date}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
                {p.document && <ExternalLinks links={[p.document]} />}
                <div className="pills">
                  {p.tags.map((t) => <span key={t} className="pill">{t}</span>)}
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta to="/research" label="Explore my research" />
    </>
  )
}
