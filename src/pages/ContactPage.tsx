import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { ContactSection } from '../components/sections/ContactSection'
import { InnerHero } from '../components/ui/InnerHero'

export default function ContactPage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Contact" />
      <ContactSection />
    </motion.div>
  )
}
