import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { PricingSection } from '../components/sections/PricingSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { InnerHero } from '../components/ui/InnerHero'

export default function PricingPage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Pricing" />
      <PricingSection />
      <TestimonialsSection />
    </motion.div>
  )
}
