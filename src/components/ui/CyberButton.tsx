import { Link } from 'react-router-dom'

type CyberButtonProps = {
  children: string
  to?: string
  type?: 'button' | 'submit'
  className?: string
  onClick?: () => void
}

export function CyberButton({
  children,
  to,
  type = 'button',
  className = '',
  onClick,
}: CyberButtonProps) {
  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <span className="btn-stars" aria-hidden="true" />
    </>
  )

  const classes = `cyber-btn ${className}`

  if (to) {
    return (
      <Link to={to} className={classes} onClick={onClick}>
        {content}
      </Link>
    )
  }

  return (
    <button type={type} className={classes} onClick={onClick}>
      {content}
    </button>
  )
}
