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

  // Close menu on resize to desktop
  useEffect(() => {
    const handler = () => { if (window.innerWidth > 768) setOpen(false) }
    window.addEventListener('resize', handler)
    return () => window.removeEventListener('resize', handler)
  }, [])

  const handleNav = (section: string) => {
    setOpen(false)
    document.getElementById(section.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })
  }

  const navHeight = scrolled ? 64 : 80

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, left: 0, right: 0, zIndex: 1000,
        padding: '0 1.5rem',
        background: scrolled ? 'rgba(255,255,255,0.97)' : 'rgba(255,255,255,0.85)',
        backdropFilter: 'blur(10px)',
        borderBottom: scrolled ? '1px solid var(--border)' : '1px solid transparent',
        transition: 'all 0.3s ease',
      }}>
        <div style={{ maxWidth: 1200, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: navHeight }}>

          {/* Logo */}
          <button onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', background: 'none', cursor: 'pointer' }}>
            <img src={logo} alt="Logo" style={{ width: scrolled ? 36 : 44, height: scrolled ? 36 : 44, objectFit: 'contain', transition: 'all 0.3s' }} />
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.1rem', color: 'var(--primary)', lineHeight: 1 }}>CDC</div>
              <div style={{ fontSize: '0.65rem', color: 'var(--muted)', fontWeight: 600, letterSpacing: '0.05em' }}>MES MLCOE</div>
            </div>
          </button>

          {/* Desktop Links */}
          <div className="desktop-nav" style={{ display: 'flex', gap: '0.5rem', alignItems: 'center' }}>
            {links.map(link => (
              <button key={link} onClick={() => handleNav(link)} style={{
                background: 'none', color: 'var(--text)', fontWeight: 600, fontSize: '0.875rem',
                transition: 'all 0.2s', padding: '0.5rem 1rem', borderRadius: '0.25rem'
              }}
                onMouseEnter={e => { e.currentTarget.style.color = 'var(--primary)'; e.currentTarget.style.background = 'var(--subtle)' }}
                onMouseLeave={e => { e.currentTarget.style.color = 'var(--text)'; e.currentTarget.style.background = 'none' }}>
                {link}
              </button>
            ))}
          </div>

          {/* Hamburger */}
          <button
            className="mobile-menu-btn"
            onClick={() => setOpen(prev => !prev)}
            aria-label="Toggle menu"
            style={{
              display: 'none', background: 'none', color: 'var(--text)',
              padding: '0.5rem', borderRadius: '0.375rem', transition: 'background 0.2s'
            }}
            onMouseEnter={e => e.currentTarget.style.background = 'var(--subtle)'}
            onMouseLeave={e => e.currentTarget.style.background = 'none'}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {open && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
              onClick={() => setOpen(false)}
              style={{ position: 'fixed', inset: 0, zIndex: 998, background: 'rgba(0,0,0,0.3)' }}
            />
            {/* Drawer */}
            <motion.div
              key="drawer"
              initial={{ opacity: 0, y: -8 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -8 }}
              transition={{ duration: 0.2 }}
              style={{
                position: 'fixed', top: navHeight, left: 0, right: 0, zIndex: 999,
                background: 'white', borderBottom: '1px solid var(--border)',
                padding: '1rem 1.5rem 1.5rem', boxShadow: '0 8px 24px rgba(0,0,0,0.1)'
              }}>
              {links.map((link, i) => (
                <motion.button
                  key={link}
                  initial={{ opacity: 0, x: -10 }} animate={{ opacity: 1, x: 0 }} transition={{ delay: i * 0.05 }}
                  onClick={() => handleNav(link)}
                  style={{
                    display: 'block', width: '100%', textAlign: 'left', background: 'none',
                    color: 'var(--text)', padding: '0.9rem 0.5rem', fontWeight: 600, fontSize: '1rem',
                    borderBottom: i < links.length - 1 ? '1px solid var(--subtle)' : 'none',
                    transition: 'color 0.2s'
                  }}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--primary)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'var(--text)'}
                >
                  {link}
                </motion.button>
              ))}
            </motion.div>
          </>
        )}
      </AnimatePresence>

      <style>{`
        @media(max-width:768px){
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </>
  )
}
