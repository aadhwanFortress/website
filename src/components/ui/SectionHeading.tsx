import { motion } from 'framer-motion'
import { revealUp } from '../../animations/variants'

type SectionHeadingProps = {
  title: string
  text?: string
  align?: 'left' | 'right' | 'center'
  className?: string
}

export function SectionHeading({
  title,
  text = 'Security should make growth safer, decisions clearer, and risk easier to act on.',
  align = 'left',
  className = '',
}: SectionHeadingProps) {
  const alignment =
    align === 'right'
      ? 'text-center md:text-right md:ml-auto'
      : align === 'center'
        ? 'text-center mx-auto'
        : 'text-center md:text-left'

  return (
    <motion.div
      className={`section-heading ${alignment} ${className}`}
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.4 }}
    >
      <h2>{title}</h2>
      {text ? <p>{text}</p> : null}
    </motion.div>
  )
}
