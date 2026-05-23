import { motion } from 'framer-motion'
import { ShieldCheck } from 'lucide-react'
import { img } from '../../assets/assetUrls'
import { revealLeft, revealRight, staggerContainer, zoomIn } from '../../animations/variants'
import { services } from '../siteData'
import { SectionHeading } from '../ui/SectionHeading'

export function ServicesPreview() {
  return (
    <section className="services-preview" style={{ backgroundImage: `url(${img.servicesBg})` }}>
      <div className="site-container">
        <SectionHeading
          title="Services"
          align="right"
          text="Security services that connect risk intelligence, hands-on testing, continuous monitoring, and audit-ready reporting."
        />
        <div className="services-preview-grid">
          <motion.div
            className="service-list"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {services.slice(0, 5).map((service, index) => (
              <motion.article key={`${service.title}-${index}`} className="service-line" variants={revealLeft}>
                <ShieldCheck size={18} />
                <div>
                  <h3>{service.title}</h3>
                  <p>{service.text}</p>
                </div>
              </motion.article>
            ))}
          </motion.div>
          <motion.div
            className="service-visual"
            variants={revealRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
          >
            <motion.img
              src={img.servicesHero}
              alt="Security operations center"
              variants={zoomIn}
              whileHover={{ scale: 1.02 }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
