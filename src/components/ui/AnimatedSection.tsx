import { motion } from 'framer-motion'
import type { PropsWithChildren } from 'react'
import { revealUp } from '../../animations/variants'

type AnimatedSectionProps = PropsWithChildren<{
  className?: string
  id?: string
  as?: 'section' | 'div'
}>

export function AnimatedSection({
  children,
  className,
  id,
  as = 'section',
}: AnimatedSectionProps) {
  const Component = motion[as]

  return (
    <Component
      id={id}
      className={className}
      variants={revealUp}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.18 }}
    >
      {children}
    </Component>
  )
}
