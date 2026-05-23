import { useEffect, useRef, useState } from 'react'

export function useCounter(target: number, active: boolean, duration = 1300) {
  const [value, setValue] = useState(0)
  const started = useRef(false)

  useEffect(() => {
    if (!active || started.current) return
    started.current = true

    let frame = 0
    let start: number | null = null
    const tick = (time: number) => {
      start ??= time
      const progress = Math.min((time - start) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setValue(Math.round(target * eased))
      if (progress < 1) frame = requestAnimationFrame(tick)
    }

    frame = requestAnimationFrame(tick)
    return () => cancelAnimationFrame(frame)
  }, [active, duration, target])

  return value
}
