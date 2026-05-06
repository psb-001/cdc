import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { Menu, X } from 'lucide-react'
import logo from '../assets/logo.png'

const links = ['About', 'Programs', 'Events', 'Team', 'Contact']

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handler)
    return () => window.removeEventListener('scroll', handler)
  }, [])

  const handleNav = (section: string) => {
    setOpen(false)
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <>
      <nav
        style={{
          position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
          padding: '0 1.5rem',
          background: scrolled ? 'rgba(255, 255, 255, 0.95)' : 'rgba(255, 255, 255, 0.8)',
          backdropFilter: 'blur(10px)',
          borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
          transition: 'all 0.3s ease',
        }}
      >
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: scrolled ? 64 : 80 }}>
          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'none', cursor: 'pointer' }}>
            <img src={logo} alt="Logo" style={{ width: scrolled ? 36 : 44, height: scrolled ? 36 : 44, objectFit: 'contain', transition: 'all 0.3s' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)', lineHeight: 1 }}>CDC</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.05em' }}>MES MLCOE</div>
            </div>
          </button>

          {/* Desktop Links */}
          <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }} className="desktop-nav">
            {links.map(link => (
              <button key={link} onClick={() => handleNav(link)} style={{ 
                background: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem', 
                transition: 'all 0.2s', padding: '0.5rem 1rem', borderRadius: '0.25rem'
              }}
                onMouseEnter={e => {
                  e.currentTarget.style.color = 'var(--primary)';
                  e.currentTarget.style.background = 'var(--subtle)';
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.color = 'var(--text)';
                  e.currentTarget.style.background = 'none';
                }}>
                {link}
              </button>
            ))}
            <button className="btn-primary" style={{ marginLeft: '1rem', padding: '0.6rem 1.5rem', fontSize: '0.85rem' }} onClick={() => handleNav('Contact')}>Join Now</button>
          </div>

          {/* Mobile hamburger */}
          <button onClick={() => setOpen(!open)} style={{ display: 'none', background: 'none', color: 'var(--text)' }} className="mobile-menu-btn">
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -20 }}
            style={{ position: 'fixed', top: scrolled ? 64 : 80, left: 0, right: 0, zIndex: 999, background: 'white', borderBottom: '1px solid var(--border)', padding: '1.5rem' }}>
            {links.map(link => (
              <button key={link} onClick={() => handleNav(link)} style={{ display: 'block', width: '100%', textAlign: 'left', background: 'none', color: 'var(--text)', padding: '1rem 0', fontWeight: 600, borderBottom: '1px solid var(--subtle)' }}>{link}</button>
            ))}
            <button className="btn-primary" style={{ marginTop: '1.5rem', width: '100%', justifyContent: 'center' }} onClick={() => handleNav('Contact')}>Join Now</button>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .desktop-nav{display:none !important;}
          .mobile-menu-btn{display:flex !important;}
        }
      `}</style>
    </>
  )
}
