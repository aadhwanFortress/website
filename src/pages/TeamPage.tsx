import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { TeamSection } from '../components/sections/TeamSection'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { InnerHero } from '../components/ui/InnerHero'

export default function TeamPage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Our Team" />
      <TeamSection />
      <TestimonialsSection />
    </motion.div>
  )
}
