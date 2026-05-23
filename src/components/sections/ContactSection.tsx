import { motion } from 'framer-motion'
import { img } from '../../assets/assetUrls'
import { CyberButton } from '../ui/CyberButton'
import { SectionHeading } from '../ui/SectionHeading'

type ContactSectionProps = {
  showHeading?: boolean
}

export function ContactSection({ showHeading = true }: ContactSectionProps) {
  return (
    <section className="contact-section">
      <div className="site-container">
        {showHeading ? <SectionHeading title="Contact Us" align="right" /> : null}
        <div className="contact-grid">
          <motion.form
            className="contact-form"
            initial={{ opacity: 0, rotateY: -10 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
            onSubmit={(event) => event.preventDefault()}
          >
            <input aria-label="Full Name" placeholder="Full Name" type="text" />
            <input aria-label="Email Address" placeholder="Email Address" type="email" />
            <input aria-label="Phone Number" placeholder="Phone Number" type="tel" />
            <input aria-label="Company Name" placeholder="Company Name" type="text" />
            <select aria-label="Service">
              <option>Security Consultation</option>
              <option>Managed Detection & Response</option>
              <option>Cloud Security Posture Review</option>
              <option>Penetration Testing</option>
              <option>Compliance & Risk Advisory</option>
            </select>
            <CyberButton type="submit">Request Consultation</CyberButton>
          </motion.form>
          <motion.div
            className="contact-image"
            initial={{ opacity: 0, rotateY: 12 }}
            whileInView={{ opacity: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 0.7 }}
          >
            <img src={img.contact} alt="Blue cyber lock interface" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
