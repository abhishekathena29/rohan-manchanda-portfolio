import { profile } from '../data'
import { ArrowRight, LinkedIn, Mail, Phone } from '../components/Icons'
import { TagBox } from '../components/ui'

export default function Contact() {
  return (
    <section className="contact">
      <div className="container contact__inner">
        <div>
          <TagBox dark>Contact</TagBox>
          <h1>Have an exciting idea?<br />Let's build it together.</h1>
          <p>Open to research collaborations, pilots, internships and conversations about AI, robotics and economics.</p>
        </div>
        <div className="contact__links">
          <a href={`mailto:${profile.email}`}><Mail /> {profile.email} <ArrowRight width={16} height={16} /></a>
          <a href={`tel:${profile.phone.replace(/\s/g, '')}`}><Phone /> {profile.phone} <ArrowRight width={16} height={16} /></a>
          <a href={profile.linkedin} target="_blank" rel="noreferrer"><LinkedIn /> LinkedIn <ArrowRight width={16} height={16} /></a>
        </div>
      </div>
    </section>
  )
}
