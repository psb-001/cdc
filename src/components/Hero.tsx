import { useRef } from 'react'
import { motion } from 'framer-motion'
import { ArrowRight, Sparkles } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)

  return (
    <section
      id="hero"
      ref={ref}
      style={{
        minHeight: '100vh',
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflowX: 'hidden',
        overflowY: 'visible',
        paddingTop: '6rem',
        paddingBottom: '4rem',
        background: 'linear-gradient(160deg, #EFF6FF 0%, #F8FAFC 50%, #EEF2FF 100%)',
      }}
    >
      {/* Dot grid */}
      <div style={{
        position: 'absolute', inset: 0, opacity: 0.04,
        backgroundImage: 'radial-gradient(var(--primary) 1px, transparent 1px)',
        backgroundSize: '28px 28px',
      }} />

      {/* Decorative blurred orbs */}
      <div style={{
        position: 'absolute', top: '8%', left: '6%',
        width: 380, height: 380, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '5%',
        width: 320, height: 320, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(185,28,28,0.08) 0%, transparent 70%)',
        filter: 'blur(40px)', pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute', top: '40%', right: '12%',
        width: 200, height: 200, borderRadius: '50%',
        background: 'radial-gradient(circle, rgba(99,102,241,0.1) 0%, transparent 70%)',
        filter: 'blur(30px)', pointerEvents: 'none',
      }} />



      {/* Floating dots */}
      {[
        { top: '20%', left: '15%', size: 8, color: 'rgba(30,58,138,0.25)', delay: 0 },
        { top: '70%', left: '10%', size: 6, color: 'rgba(185,28,28,0.2)', delay: 0.5 },
        { top: '30%', right: '18%', size: 10, color: 'rgba(30,58,138,0.2)', delay: 1 },
        { top: '75%', right: '15%', size: 7, color: 'rgba(99,102,241,0.25)', delay: 1.5 },
        { top: '55%', left: '5%', size: 5, color: 'rgba(30,58,138,0.15)', delay: 0.8 },
      ].map((dot, i) => (
        <motion.div
          key={i}
          animate={{ y: [-8, 8, -8] }}
          transition={{ duration: 4 + i, repeat: Infinity, ease: 'easeInOut', delay: dot.delay }}
          style={{
            position: 'absolute',
            top: dot.top, left: (dot as any).left, right: (dot as any).right,
            width: dot.size, height: dot.size,
            borderRadius: '50%',
            background: dot.color,
            pointerEvents: 'none',
          }}
        />
      ))}

      {/* Main content */}
      <motion.div style={{ position: 'relative', zIndex: 1, textAlign: 'center', maxWidth: 900, padding: '0 1.5rem' }}>

        {/* Logo with glow ring */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          style={{ position: 'relative', display: 'inline-block', marginBottom: '2rem' }}
        >
          <div style={{
            position: 'absolute', inset: -10,
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(30,58,138,0.15) 0%, transparent 70%)',
            filter: 'blur(8px)',
          }} />
          <img
            src={logo}
            alt="MES MLCOE Logo"
            style={{
              width: 100, height: 100, objectFit: 'contain',
              position: 'relative', zIndex: 1,
              filter: 'drop-shadow(0 4px 16px rgba(30,58,138,0.2))',
            }}
          />
        </motion.div>

        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          style={{ display: 'flex', justifyContent: 'center', marginBottom: '1.5rem' }}
        >
          <span style={{
            display: 'inline-flex', alignItems: 'center', gap: '0.4rem',
            background: 'rgba(30,58,138,0.07)',
            border: '1px solid rgba(30,58,138,0.18)',
            borderRadius: '9999px',
            padding: '0.4rem 1.2rem',
            fontSize: '0.75rem', fontWeight: 700,
            color: 'var(--primary)', letterSpacing: '0.1em', textTransform: 'uppercase',
          }}>
            <Sparkles size={12} />
            MES Mukunddas Lohia College of Engineering, Pune
          </span>
        </motion.div>

        {/* Main heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          style={{
            fontSize: 'clamp(2.8rem, 8vw, 5rem)',
            fontWeight: 900,
            color: 'var(--primary)',
            marginBottom: '1.25rem',
            letterSpacing: '-0.03em',
            lineHeight: 1.05,
          }}
        >
          Career{' '}
          <span style={{
            position: 'relative', display: 'inline-block',
            color: 'var(--accent)',
          }}>
            Development
            {/* Underline decoration */}
            <svg
              viewBox="0 0 300 12"
              style={{ position: 'absolute', bottom: -6, left: 0, width: '100%', height: 12, overflow: 'visible' }}
              preserveAspectRatio="none"
            >
              <path d="M0,8 Q75,0 150,8 Q225,16 300,8" stroke="var(--accent)" strokeWidth="2.5" fill="none" strokeLinecap="round" opacity="0.6" />
            </svg>
          </span>{' '}
          Cell
        </motion.h1>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          style={{
            width: 80, height: 3, margin: '0 auto 1.5rem',
            background: 'linear-gradient(90deg, var(--primary), var(--accent))',
            borderRadius: 9999,
          }}
        />

        {/* Tagline */}
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          style={{
            fontSize: 'clamp(1.1rem, 2.5vw, 1.5rem)',
            fontWeight: 500,
            color: 'var(--muted)',
            marginBottom: '1.5rem',
            lineHeight: 1.5,
          }}
        >
          Preparing Students for{' '}
          <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Professional Success</span>
        </motion.h2>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          style={{
            fontSize: '1.05rem', color: 'var(--muted)',
            maxWidth: 640, margin: '0 auto 2.5rem',
            lineHeight: 1.8,
          }}
        >
          CDC at MLCOE acts as a bridge between academic learning and industry requirements,
          fostering professional growth through structured training and placement support.
        </motion.p>

        {/* Address chip */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          style={{ marginBottom: '3rem' }}
        >
          <span style={{
            display: 'inline-block',
            fontSize: '0.78rem', color: 'var(--muted)',
            background: 'white',
            border: '1px solid var(--border)',
            borderRadius: '0.5rem',
            padding: '0.5rem 1.25rem',
            boxShadow: '0 1px 4px rgba(0,0,0,0.06)',
          }}>
            📍 S. No.1, Abasaheb Garware College, Garware Campus, Karve Rd, Pune — 411004
          </span>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.85 }}
          style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}
        >
          <button
            className="btn-primary"
            onClick={() => document.getElementById('programs')?.scrollIntoView({ behavior: 'smooth' })}
            style={{ padding: '0.9rem 2.25rem', fontSize: '1rem', borderRadius: '0.5rem' }}
          >
            Explore Programs <ArrowRight size={18} />
          </button>
        </motion.div>

      </motion.div>

      {/* Bottom wave */}
      <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, lineHeight: 0, pointerEvents: 'none' }}>
        <svg viewBox="0 0 1440 60" preserveAspectRatio="none" style={{ width: '100%', height: 60, display: 'block' }}>
          <path d="M0,30 Q360,60 720,30 Q1080,0 1440,30 L1440,60 L0,60 Z" fill="white" />
        </svg>
      </div>

    </section>
  )
}
