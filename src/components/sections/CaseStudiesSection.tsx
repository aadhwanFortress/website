import { AnimatePresence, motion } from 'framer-motion'
import { caseStudies } from '../siteData'
import { CyberButton } from '../ui/CyberButton'
import { SectionHeading } from '../ui/SectionHeading'
import { SliderControls } from '../ui/SliderControls'
import { useSlider } from '../../hooks/useSlider'

export function CaseStudiesSection() {
  const { index, next, previous } = useSlider(caseStudies.length)
  const visible = [0, 1, 2].map((offset) => caseStudies[(index + offset) % caseStudies.length])

  return (
    <section className="case-section">
      <div className="site-container">
        <SectionHeading title="Case Studies" align="right" />
      </div>
      <div className="site-container relative">
        <SliderControls label="Case studies slider" onPrevious={previous} onNext={next} />
        <div className="case-slider">
          <AnimatePresence mode="popLayout">
            {visible.map((item) => (
              <motion.article
                key={item.number}
                className="case-card"
                layout
                initial={{ opacity: 0, y: 34, rotateX: 12 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                exit={{ opacity: 0, y: -24 }}
                transition={{ duration: 0.45 }}
              >
                <div className="case-image">
                  <img src={item.image} alt={item.title} />
                </div>
                <div className="case-body">
                  <span>{item.number}</span>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                  <CyberButton to="/service-details" className="!px-8">
                    Read Outcome
                  </CyberButton>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
