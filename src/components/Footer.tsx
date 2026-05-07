import logo from '../assets/logo.png'
import { MapPin } from 'lucide-react'

const navLinks = ['About', 'Programs', 'Events', 'Team', 'Contact']

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo-wrap">
            <img src={logo} alt="Logo" className="footer-logo" />
            <div>
              <div className="footer-brand">CDC</div>
              <div className="footer-sub">MES MLCOE · Pune</div>
            </div>
          </div>
          <p className="footer-tagline">
            The official Career Development Cell of MES Mukunddas Lohia College of Engineering — bridging academics and industry since day one.
          </p>
          <div className="footer-nav">
            {navLinks.map((link, i) => (
              <span key={link} className="footer-nav-item">
                <button onClick={() => scrollTo(link)}>{link}</button>
                {i < navLinks.length - 1 && <span className="footer-dot">·</span>}
              </span>
            ))}
          </div>
        </div>

        <div className="footer-divider" />

        <div className="footer-bottom">
          <span>© 2026 Career Development Cell, MES MLCOE. All rights reserved.</span>
          <span className="footer-address">
            <MapPin size={14} />
            CTS, 30, F.P.28, Karve Road, Pune 411004
          </span>
        </div>
      </div>
    </footer>
  )
}