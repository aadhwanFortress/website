import { motion } from 'framer-motion'
import { img } from '../../assets/assetUrls'
import { CyberButton } from '../ui/CyberButton'

export function CtaSection() {
  return (
    <section className="cta-section" style={{ backgroundImage: `url(${img.ctaBg})` }}>
      <div className="site-container">
        <motion.div
          className="cta-copy"
          initial={{ opacity: 0, x: -44 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
        >
          <h2>Ready to understand your real attack surface?</h2>
          <p>
            Start with a focused security review that identifies urgent exposure, validates current controls, and gives
            your team a practical roadmap for reducing risk.
          </p>
          <CyberButton to="/service-details">Request Security Review</CyberButton>
        </motion.div>
      </div>
    </section>
  )
}
