import { awards } from '../data'
import { Award } from '../components/Icons'
import { PageCta, SectionHead } from '../components/ui'

export default function Awards() {
  return (
    <>
      <section className="page">
        <div className="container">
          <SectionHead
            tag="Honors"
            title="Honors & Awards"
            intro="Recognition for robotics, research and mine-safety innovation."
          />
          <ol className="awards">
            {awards.map((a) => (
              <li key={a.title} className="award">
                <span className="award__icon"><Award /></span>
                <div>
                  <h3>{a.title}</h3>
                  <span>{a.note}</span>
                </div>
                <time>{a.year}</time>
              </li>
            ))}
          </ol>
        </div>
      </section>
      <PageCta to="/resume" label="View my resume" />
    </>
  )
}
