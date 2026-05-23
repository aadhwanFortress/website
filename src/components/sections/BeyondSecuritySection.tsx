import { motion, useInView } from 'framer-motion'
import { useRef } from 'react'
import { img } from '../../assets/assetUrls'
import { useCounter } from '../../hooks/useCounter'
import { SectionHeading } from '../ui/SectionHeading'

const stats = [
  { label: 'Critical Exposure Reduced', value: 47, color: '#54C2DE' },
  { label: 'Triage Speed Improved', value: 63, color: '#6C76D0' },
  { label: 'Control Coverage Increased', value: 82, color: '#3A2E8F' },
]

function StatRow({ label, value, color }: (typeof stats)[number]) {
  const ref = useRef<HTMLDivElement | null>(null)
  const active = useInView(ref, { once: true, amount: 0.6 })
  const count = useCounter(value, active)

  return (
    <div className="stat-row" ref={ref}>
      <span className="stat-dot" style={{ backgroundColor: color }} />
      <span>{label}</span>
      <strong>{count}%</strong>
    </div>
  )
}

export function BeyondSecuritySection() {
  return (
    <section className="beyond-section">
      <div className="site-container">
        <SectionHeading title="Beyond Security" align="right" />
        <div className="beyond-grid">
          <div className="stat-list">
            {stats.map((stat) => (
              <StatRow key={stat.label} {...stat} />
            ))}
          </div>
          <motion.div
            className="donut-wrap"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.7 }}
          >
            <svg viewBox="0 0 36 36" className="donut-chart" aria-hidden="true">
              <circle className="donut-bg" cx="18" cy="18" r="15.9155" />
              <circle className="donut-segment segment-a" cx="18" cy="18" r="15.9155" />
              <circle className="donut-segment segment-b" cx="18" cy="18" r="15.9155" />
              <circle className="donut-segment segment-c" cx="18" cy="18" r="15.9155" />
            </svg>
            <h3>Measured Resilience</h3>
          </motion.div>
          <motion.div
            className="beyond-copy"
            initial={{ opacity: 0, x: 36 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.7 }}
          >
            <p>
              Strong security is more than blocked attacks. We help teams measure exposure, improve control maturity,
              sharpen response readiness, and make cybersecurity decisions leaders can trust.
            </p>
            <img src={img.security} alt="" />
          </motion.div>
        </div>
      </div>
    </section>
  )
}
