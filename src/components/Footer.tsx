import { Camera, Mail, MapPin, Phone, Share2, Video } from 'lucide-react'
import { Link } from 'react-router-dom'
import { img } from '../assets/assetUrls'

const quickLinks = [
  ['Home', '/'],
  ['Services', '/services'],
  ['Case Studies', '/service-details'],
  ['Blog', '/blog'],
  ['Contact Us', '/contact'],
  ['About Us', '/about'],
  ['Pricing', '/pricing'],
]

const legalLinks = ['Terms & Conditions', 'Privacy Policy', 'Security Standards']

export function Footer() {
  return (
    <footer className="footer">
      <div className="site-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <img src={img.footerLogo} alt="HexaShield Security" className="h-10 w-auto" />
            <p>
              Helping organizations identify exposure, strengthen defenses, meet compliance expectations, and respond
              confidently when security events matter most.
            </p>
            <ul className="footer-contact">
              <li>
                <Phone size={18} />
                <a href="tel:+16465550184">+1 (646) 555-0184</a>
              </li>
              <li>
                <MapPin size={18} />
                <a href="https://maps.google.com/?q=One World Trade Center New York NY 10007" target="_blank" rel="noreferrer">
                  One World Trade Center, New York, NY 10007
                </a>
              </li>
              <li>
                <Mail size={18} />
                <a href="mailto:hello@hexashieldsecurity.com">hello@hexashieldsecurity.com</a>
              </li>
            </ul>
            <div className="social-links">
              <a href="https://www.instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                <Camera size={17} />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                <Share2 size={17} />
              </a>
              <a href="https://www.youtube.com" target="_blank" rel="noreferrer" aria-label="YouTube">
                <Video size={17} />
              </a>
            </div>
          </div>
          <div>
            <h3>Quick Links</h3>
            <ul className="footer-links">
              {quickLinks.map(([label, path]) => (
                <li key={label}>
                  <Link to={path}>{label}</Link>
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3>Services</h3>
            <ul className="footer-links">
              {[
                'Managed Detection & Response',
                'Network & Zero Trust Security',
                'Endpoint Protection',
                'Cloud Security Posture',
                'Penetration Testing',
              ].map((service) => (
                  <li key={service}>
                    <Link to="/service-details">{service}</Link>
                  </li>
                ))}
            </ul>
          </div>
          <div>
            <h3>Legal & Policies</h3>
            <ul className="footer-links">
              {legalLinks.map((item) => (
                <li key={item}>
                  <Link to="/contact">{item}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <p className="copyright-text">
          © 2026 <Link to="/">HexaShield Security.</Link> All rights reserved
        </p>
      </div>
    </footer>
  )
}
