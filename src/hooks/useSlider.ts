import { useEffect, useState } from 'react'

export function useSlider(length: number, delay = 4200) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (length < 2) return
    const timer = window.setInterval(() => {
      setIndex((current) => (current + 1) % length)
    }, delay)

    return () => window.clearInterval(timer)
  }, [delay, length])

  const next = () => setIndex((current) => (current + 1) % length)
  const previous = () => setIndex((current) => (current - 1 + length) % length)

  return { index, setIndex, next, previous }
}
