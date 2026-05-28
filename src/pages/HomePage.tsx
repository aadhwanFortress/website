import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { AboutSection } from '../components/sections/AboutSection'
import { BeyondSecuritySection } from '../components/sections/BeyondSecuritySection'
import { BlogSection } from '../components/sections/BlogSection'
import { CaseStudiesSection } from '../components/sections/CaseStudiesSection'
import { ContactSection } from '../components/sections/ContactSection'
import { CtaSection } from '../components/sections/CtaSection'
import { HeroSection } from '../components/sections/HeroSection'
import { IndustriesSection } from '../components/sections/IndustriesSection'
import { NewsletterSection } from '../components/sections/NewsletterSection'
import { ProcessSection } from '../components/sections/ProcessSection'
import { ServicesPreview } from '../components/sections/ServicesPreview'
import { TestimonialsSection } from '../components/sections/TestimonialsSection'
import { TrainingSection } from '../components/sections/TrainingSection'

export default function HomePage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <HeroSection />
      <AboutSection />
      <ServicesPreview />
      <IndustriesSection />
      <CtaSection />
      <CaseStudiesSection />
      <BlogSection limit={3} />
      <BeyondSecuritySection />
      <ProcessSection />
      <TrainingSection />
      <TestimonialsSection />
      <ContactSection />
      <NewsletterSection />
    </motion.div>
  )
}
