import { extendedEssay, research } from '../data'
import { ResearchIcon } from '../components/Icons'
import { ExternalLinks, PageCta, SectionHead } from '../components/ui'

export default function Research() {
  return (
    <>
      <section className="page">
        <div className="container">
          <SectionHead
            tag="Research"
            title="Research & Fellowships"
            intro="From AI in healthcare to econometrics and mine safety — published, presented and submitted to policymakers."
          />
          <div className="research">
            {research.map((r) => (
              <article key={r.title} className="research__row">
                <span className="icon-tile"><ResearchIcon name={r.icon} /></span>
                <div className="research__main">
                  <h3>{r.title}</h3>
                  <span className="research__role">{r.org}</span>
                  <ul className="bullets">
                    {r.bullets.map((b) => <li key={b}>{b}</li>)}
                  </ul>
                  <ExternalLinks links={r.links} />
                </div>
                <span className="research__meta">{r.date}</span>
              </article>
            ))}
            <article className="research__row">
              <span className="icon-tile"><ResearchIcon name="chart" /></span>
              <div className="research__main">
                <h3>IB Extended Essay</h3>
                <span className="research__role">Economics</span>
                <p>{extendedEssay.split(' — ')[1]}</p>
              </div>
            </article>
          </div>
        </div>
      </section>
      <PageCta to="/impact" label="See my impact" />
    </>
  )
}
