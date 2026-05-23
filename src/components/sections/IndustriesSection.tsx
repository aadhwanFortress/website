import { motion } from 'framer-motion'
import { staggerContainer, zoomIn } from '../../animations/variants'
import { industries } from '../siteData'
import { SectionHeading } from '../ui/SectionHeading'

export function IndustriesSection() {
  return (
    <section className="industries-section">
      <div className="site-container">
        <SectionHeading title="Industries Served" />
        <motion.div
          className="industries-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.15 }}
        >
          {industries.map((industry) => (
            <motion.article key={industry.title} className="industry-card" variants={zoomIn}>
              <img src={industry.icon} alt="" />
              <h3>{industry.title}</h3>
              <p>{industry.text}</p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
