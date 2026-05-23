import { Check } from 'lucide-react'
import { motion } from 'framer-motion'
import { pricingPlans } from '../siteData'
import { CyberButton } from '../ui/CyberButton'
import { SectionHeading } from '../ui/SectionHeading'

export function PricingSection() {
  return (
    <section className="pricing-section">
      <div className="site-container">
        <SectionHeading
          title="Pricing"
          align="center"
          text="Engagement models for teams that need practical security outcomes, transparent reporting, and room to scale."
        />
        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <motion.article
              key={plan.name}
              className={`pricing-card ${index === 1 ? 'featured' : ''}`}
              initial={{ opacity: 0, y: 32 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ delay: index * 0.08, duration: 0.6 }}
            >
              <h3>{plan.name}</h3>
              <p>{plan.text}</p>
              <div className="price">
                {plan.price}
                <span>{plan.period}</span>
              </div>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={17} /> {feature}
                  </li>
                ))}
              </ul>
              <CyberButton to="/contact">Discuss Fit</CyberButton>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
