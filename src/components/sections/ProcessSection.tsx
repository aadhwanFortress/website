import { motion } from 'framer-motion'
import { processSteps } from '../siteData'
import { SectionHeading } from '../ui/SectionHeading'

export function ProcessSection() {
  return (
    <section className="process-section">
      <div className="site-container">
        <SectionHeading title="How We Work" />
        <div className="process-timeline">
          {processSteps.map((step, index) => (
            <motion.article
              key={step.number}
              className={`process-row ${index % 2 ? 'reverse' : ''}`}
              initial={{ opacity: 0, x: index % 2 ? 48 : -48 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
            >
              <div className="process-img">
                <img src={step.image} alt="" />
              </div>
              <div className="process-copy">
                <span>{step.number}</span>
                <h3>{step.title}</h3>
                <p>{step.text}</p>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
