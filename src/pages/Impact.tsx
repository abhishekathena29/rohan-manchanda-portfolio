import { leadership } from '../data'
import { ExternalLinks, Gallery, PageCta, SectionHead } from '../components/ui'

export default function Impact() {
  return (
    <>
      <section className="page">
        <div className="container">
          <SectionHead
            tag="Impact"
            title="Leadership & Impact"
            intro="Ventures, advocacy and internships — measured by the people they reach."
          />
          <div className="impact">
            {leadership.map((item) => (
              <article
                key={item.org}
                className={`impact__card${item.gallery ? ' impact__card--wide' : ''}`}
              >
                <div className="impact__top">
                  <div>
                    <h3>{item.role}</h3>
                    <span>{item.org}</span>
                  </div>
                  <time>{item.date}</time>
                </div>
                {item.stats && (
                  <div className="impact__stats">
                    {item.stats.map((s) => (
                      <div key={s.label}>
                        <strong>{s.value}</strong>
                        <span>{s.label}</span>
                      </div>
                    ))}
                  </div>
                )}
                <ul className="bullets">
                  {item.bullets.map((b) => <li key={b}>{b}</li>)}
                </ul>
                <ExternalLinks links={item.links} />
                {item.gallery && <Gallery photos={item.gallery} className="gallery--strip" />}
              </article>
            ))}
          </div>
        </div>
      </section>
      <PageCta to="/awards" label="View honors & awards" />
    </>
  )
}
