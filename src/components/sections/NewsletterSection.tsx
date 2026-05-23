import { CyberButton } from '../ui/CyberButton'

export function NewsletterSection() {
  return (
    <section className="newsletter-section">
      <div className="site-container">
        <form className="newsletter-card" onSubmit={(event) => event.preventDefault()}>
          <h2>Get the Cyber Risk Brief</h2>
          <input aria-label="Full Name" placeholder="Full Name" type="text" />
          <input aria-label="Last Name" placeholder="Last Name" type="text" />
          <input aria-label="Email Address" placeholder="Email Address" type="email" />
          <CyberButton type="submit" className="newsletter-submit">
            Subscribe
          </CyberButton>
        </form>
      </div>
    </section>
  )
}
