import { BadgeCheck, CalendarDays, Clock3 } from 'lucide-react'
import { motion } from 'framer-motion'
import { trainings } from '../siteData'
import { CyberButton } from '../ui/CyberButton'
import { SectionHeading } from '../ui/SectionHeading'

export function TrainingSection() {
  return (
    <section className="training-section">
      <div className="site-container">
        <SectionHeading title="Cybersecurity Training" align="right" />
        <div className="training-list">
          {trainings.map((training) => (
            <motion.article
              key={training.title}
              className="training-card"
              initial={{ opacity: 0, y: 34 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.65 }}
            >
              <img src={training.image} alt={training.title} />
              <div className="training-copy">
                <h3>{training.title}</h3>
                <p>{training.text}</p>
                <div className="training-meta">
                  <span>
                    <Clock3 size={15} /> {training.duration}
                  </span>
                  <span>
                    <BadgeCheck size={15} /> {training.certified}
                  </span>
                  <span>
                    <CalendarDays size={15} /> {training.date}
                  </span>
                </div>
              </div>
              <CyberButton to="/contact" className="training-action">
                Reserve Seat
              </CyberButton>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
