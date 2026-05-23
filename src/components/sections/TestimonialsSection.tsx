import { AnimatePresence, motion } from 'framer-motion'
import { testimonials } from '../siteData'
import { SectionHeading } from '../ui/SectionHeading'
import { SliderControls } from '../ui/SliderControls'
import { useSlider } from '../../hooks/useSlider'

export function TestimonialsSection() {
  const { index, next, previous } = useSlider(testimonials.length)
  const testimonial = testimonials[index]

  return (
    <section className="testimonials-section">
      <div className="site-container">
        <SectionHeading title="Testimonials" align="center" />
        <div className="testimonial-shell">
          <SliderControls label="Testimonials slider" onPrevious={previous} onNext={next} />
          <AnimatePresence mode="wait">
            <motion.article
              key={testimonial.name}
              className="testimonial-card"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.45 }}
            >
              <p>"{testimonial.quote}"</p>
              <h3>{testimonial.name}</h3>
              <span>{testimonial.title}</span>
            </motion.article>
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
