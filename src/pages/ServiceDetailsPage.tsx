import { motion } from 'framer-motion'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import { pageTransition } from '../animations/variants'
import { services } from '../components/siteData'
import { CyberButton } from '../components/ui/CyberButton'
import { InnerHero } from '../components/ui/InnerHero'

const bullets = [
  'FAQ: How fast can we start? Most assessments begin with a kickoff, scope review, and access checklist within one business week.',
  'FAQ: Will testing disrupt operations? Engagement windows, rate limits, rollback paths, and escalation contacts are agreed before work begins.',
  'Map findings to NIST CSF, ISO 27001, SOC 2, PCI DSS, HIPAA, or your internal control framework.',
  'Prioritize remediation by exploitability, business impact, data sensitivity, and compensating controls.',
  'Deliver executive-ready reporting with evidence, owners, risk ratings, and recommended next actions.',
  'Support validation retesting so fixes are confirmed before the engagement closes.',
]

export default function ServiceDetailsPage() {
  const [active, setActive] = useState(1)
  const service = services[active]

  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Service Details" />
      <section className="service-details-page">
        <div className="site-container service-details-grid">
          <aside className="service-tabs" aria-label="Service list">
            {services.map((item, index) => (
              <button
                key={`${item.title}-${index}`}
                type="button"
                className={active === index ? 'active' : ''}
                onClick={() => setActive(index)}
              >
                {item.title}
              </button>
            ))}
          </aside>
          <article className="service-detail">
            <img src={service.image} alt={service.title} />
            <h1>{service.title}</h1>
            <p>
              {service.text} Aadhwan Fortress designs each engagement around your risk profile, operational constraints, and
              compliance obligations, so recommendations are practical for engineering teams and meaningful for
              executives.
            </p>
            <ul>
              {bullets.map((bullet, index) => (
                <li key={`${bullet}-${index}`}>{bullet}</li>
              ))}
            </ul>
            <p>
              Whether you need a focused assessment, a managed service, or a long-term advisory partner, our team
              documents the path from current exposure to measurable resilience with clear priorities and accountable
              next steps.
            </p>
            <CyberButton to="/contact">Talk to an Expert</CyberButton>
          </article>
        </div>
      </section>
      <div className="site-container pb-20">
        <Link to="/services" className="text-sm font-semibold uppercase text-cyan-200">
          Back to Services
        </Link>
      </div>
    </motion.div>
  )
}
