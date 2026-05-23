import { motion } from 'framer-motion'
import { pageTransition } from '../animations/variants'
import { BlogSection } from '../components/sections/BlogSection'
import { InnerHero } from '../components/ui/InnerHero'

export default function BlogPage() {
  return (
    <motion.div variants={pageTransition} initial="initial" animate="animate" exit="exit">
      <InnerHero title="Blog" />
      <BlogSection limit={6} />
    </motion.div>
  )
}
