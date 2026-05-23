import { ChevronLeft, ChevronRight } from 'lucide-react'

type SliderControlsProps = {
  onPrevious: () => void
  onNext: () => void
  label: string
}

export function SliderControls({ onPrevious, onNext, label }: SliderControlsProps) {
  return (
    <div className="slider-controls" aria-label={label}>
      <button type="button" onClick={onPrevious} aria-label="Previous slide">
        <ChevronLeft size={16} />
      </button>
      <button type="button" onClick={onNext} aria-label="Next slide">
        <ChevronRight size={16} />
      </button>
    </div>
  )
}
