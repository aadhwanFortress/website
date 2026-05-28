import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { AboutSection } from '../components/sections/AboutSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { InnerHero } from '../components/ui/InnerHero'

export default function AboutPage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="About Us" />
      <AboutSection />
      <TestimonialsSection />
    </motion.div>
  )
}
