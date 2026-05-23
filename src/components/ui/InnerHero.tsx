import { motion } from 'framer-motion'
import { img } from '../../assets/assetUrls'

type InnerHeroProps = {
  title: string
}

export function InnerHero({ title }: InnerHeroProps) {
  return (
    <section
      className="inner-hero"
      style={{ backgroundImage: `linear-gradient(90deg, rgba(0,0,0,.78), rgba(0,0,0,.3)), url(${img.innerBanner})` }}
    >
      <div className="site-container">
        <motion.h1
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55 }}
        >
          {title}
        </motion.h1>
      </div>
    </section>
  )
}
