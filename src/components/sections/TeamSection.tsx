import { AnimatePresence, motion } from 'framer-motion'
import { Camera, Share2, Video } from 'lucide-react'
import { useSlider } from '../../hooks/useSlider'
import { teamMembers } from '../siteData'
import { SectionHeading } from '../ui/SectionHeading'
import { SliderControls } from '../ui/SliderControls'

type TeamSectionProps = {
  compact?: boolean
}

export function TeamSection({ compact = false }: TeamSectionProps) {
  const { index, next, previous } = useSlider(teamMembers.length, 3800)
  const visible = (compact ? [0, 1, 2] : [0, 1, 2, 3]).map((offset) => teamMembers[(index + offset) % teamMembers.length])

  return (
    <section className="team-section">
      <div className="site-container relative">
        <SectionHeading title="Our Team" />
        <SliderControls label="Team slider" onPrevious={previous} onNext={next} />
        <div className="team-grid">
          <AnimatePresence mode="popLayout">
            {visible.map((member) => (
              <motion.article
                key={member.name}
                layout
                className="team-card"
                initial={{ opacity: 0, scale: 0.92 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.4 }}
              >
                <div className="team-image-wrap">
                  <img src={member.image} alt={member.name} />
                </div>
                <div className="team-copy">
                  <h3>{member.name}</h3>
                  <p>{member.role}</p>
                </div>
                <div className="team-social">
                  <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                    <Camera size={16} />
                  </a>
                  <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                    <Share2 size={16} />
                  </a>
                  <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                    <Video size={16} />
                  </a>
                </div>
              </motion.article>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  )
}
