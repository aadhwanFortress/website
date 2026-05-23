import { motion } from 'framer-motion'
import { img } from '../../assets/assetUrls'
import { CyberButton } from '../ui/CyberButton'

export function HeroSection() {
  return (
    <section className="hero-section" aria-labelledby="hero-title">
      <div className="hero-floating circle-a" />
      <div className="hero-floating circle-b" />
      <div className="hero-floating circle-c" />
      <div className="hero-floating circle-d" />
      <div className="site-container hero-wrap">
        <motion.div
          className="hero-orbit"
          initial={{ opacity: 0, scale: 0.86 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1] }}
        >
          <span className="ring ring-one" />
          <span className="ring ring-two" />
          <span className="ring ring-three" />
          <img src={img.heroGlobe} alt="" className="hero-globe" />
        </motion.div>
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, y: 42 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.35, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        >
          <h1 id="hero-title">Cyber resilience for companies that cannot afford blind spots</h1>
          <p>
            HexaShield helps security and leadership teams understand exposure, strengthen controls, and respond with
            confidence across cloud, endpoint, identity, network, and third-party risk.
          </p>
          <CyberButton to="/services">Explore Services</CyberButton>
        </motion.div>
      </div>
    </section>
  )
}
