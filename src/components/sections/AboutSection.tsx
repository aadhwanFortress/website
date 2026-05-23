import { motion } from 'framer-motion'
import { img } from '../../assets/assetUrls'
import { revealLeft, revealRight, zoomIn } from '../../animations/variants'
import { aboutHighlights } from '../siteData'
import { SectionHeading } from '../ui/SectionHeading'

export function AboutSection() {
  const left = aboutHighlights.slice(0, 3)
  const right = aboutHighlights.slice(3)

  return (
    <section className="about-section">
      <div className="site-container">
        <SectionHeading
          title="About Us"
          text="We are a cybersecurity advisory and managed defense partner for organizations that need clarity, control, and resilience."
        />
      </div>
      <div className="about-bg" style={{ backgroundImage: `url(${img.aboutBg})` }}>
        <div className="site-container about-grid">
          <div className="about-stack left">
            {left.map((item) => (
              <motion.article
                key={item.title}
                className="about-point md:text-right"
                variants={revealLeft}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
                <span className="about-icon">
                  <img src={item.icon} alt="" />
                </span>
              </motion.article>
            ))}
          </div>
          <motion.div
            className="about-center"
            variants={zoomIn}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.45 }}
          >
            <img src={img.aboutCenter} alt="Cybersecurity protection dashboard" />
          </motion.div>
          <div className="about-stack right">
            {right.map((item) => (
              <motion.article
                key={item.title}
                className="about-point"
                variants={revealRight}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.4 }}
              >
                <span className="about-icon">
                  <img src={item.icon} alt="" />
                </span>
                <div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
