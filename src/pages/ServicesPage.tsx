import { motion } from 'framer-motion'
import { Link } from 'react-router-dom'
import { pageTransition } from '../animations/variants'
import { services } from '../components/siteData'
import { InnerHero } from '../components/ui/InnerHero'

export default function ServicesPage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Services" />
      <section className="services-page">
        <div className="site-container">
          <div className="services-card-grid">
            {services.map((service, index) => (
              <motion.article
                key={`${service.title}-${index}`}
                className="service-page-card"
                initial={{ opacity: 0, scale: 0.94 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ delay: index * 0.06, duration: 0.5 }}
              >
                <Link to="/service-details" className="service-card-image">
                  <img src={service.image} alt={service.title} />
                </Link>
                <h2>
                  <Link to="/service-details">{service.title}</Link>
                </h2>
                <p>{service.text}</p>
              </motion.article>
            ))}
          </div>
          <div className="pagination-dots">
            <span>1</span>
            <span>2</span>
            <Link to="/service-details">View Details</Link>
          </div>
        </div>
      </section>
    </motion.div>
  )
}
