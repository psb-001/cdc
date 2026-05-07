import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, Briefcase, GraduationCap, Users } from 'lucide-react'
import logo from '../assets/logo.png'

export default function Hero() {
  const ref = useRef<HTMLElement>(null)
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] })
  const y = useTransform(scrollYProgress, [0, 1], [0, 100])
  const opacity = useTransform(scrollYProgress, [0, 0.6], [1, 0])

  return (
    <section id="hero" ref={ref} style={{ minHeight: '90vh', position: 'relative', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', overflow: 'hidden', paddingTop: 100, background: 'linear-gradient(135deg, #F8FAFC 0%, #EFF6FF 100%)' }}>
      {/* Subtle architectural pattern */}
      <div style={{ position: 'absolute', inset: 0, opacity: 0.03, backgroundImage: 'radial-gradient(#1E3A8A 0.5px, transparent 0.5px)', backgroundSize: '24px 24px' }} />

      <motion.div style={{ y, opacity, position:'relative', zIndex:1, textAlign:'center', maxWidth:1100, padding:'0 1.5rem' }}>
        <motion.div initial={{ opacity:0, y:-20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6 }}>
          <img src={logo} alt="MES MLCOE Logo" style={{ width: 100, height: 100, objectFit: 'contain', margin: '0 auto 2rem' }} />
        </motion.div>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.6, delay: 0.1 }}>
          <motion.h1 initial={{ opacity:0, scale:0.95 }} animate={{ opacity:1, scale:1 }} transition={{ duration:0.7 }}
            style={{ fontSize:'clamp(2.5rem, 8vw, 4.5rem)', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.75rem', letterSpacing: '-0.02em', lineHeight: 1.1 }}>
            Career Development Cell
          </motion.h1>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '1.1rem', color: 'var(--primary)', fontWeight: 800, letterSpacing: '0.1em', marginBottom: '0.75rem', textTransform: 'uppercase' }}>
            MES MUKUNDDAS LOHIA COLLEGE OF ENGINEERING, PUNE
          </div>
          <div style={{ fontFamily: 'Plus Jakarta Sans', fontSize: '0.95rem', color: 'var(--muted)', fontWeight: 500, letterSpacing: '0.02em', marginBottom: '3rem', opacity: 0.9, maxWidth: 800, margin: '0 auto 3rem', lineHeight: 1.5 }}>
            S. No.1, ABASAHEB GARWARE COLLEGE, Garware Campus, C.T.S. No. 30, Plot No.28, T.P, Karve Rd, Pune, Maharashtra 411004
          </div>
        </motion.div>

        <motion.h2 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
          style={{ fontSize:'clamp(1.25rem, 3vw, 1.75rem)', marginBottom:'2.5rem', color: '#475569', lineHeight: 1.4, fontWeight: 500, maxWidth: 800, margin: '0 auto 2.5rem' }}>
          Preparing Students for <span style={{ color: 'var(--accent)', fontWeight: 700 }}>Professional Success</span>
        </motion.h2>

        <motion.p initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.3 }}
          style={{ fontSize:'1.15rem', color:'var(--muted)', maxWidth:720, margin:'0 auto 3rem', lineHeight:1.8 }}>
          CDC at MLCOE acts as a bridge between academic learning and industry requirements, fostering professional growth through structured training and placement support.
        </motion.p>

        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.4 }}
          style={{ display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap', marginBottom:'5rem' }}>
          <button className="btn-primary" onClick={() => document.getElementById('programs')?.scrollIntoView({behavior:'smooth'})}>
            Explore Programs <ArrowRight size={18} />
          </button>
          <button className="btn-outline" onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})}>
            Contact CDC
          </button>
        </motion.div>

        {/* Quick stats row */}
        <motion.div initial={{ opacity:0, y:20 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.5 }}
          style={{ display:'flex', justifyContent:'center', gap:'3rem', flexWrap:'wrap' }}>
          {[
            { icon:<GraduationCap size={22}/>, val:'0', label:'Workshops Held' },
            { icon:<Users size={22}/>, val:'0', label:'Industry Partners' },
          ].map(s => (
            <div key={s.label} style={{ display:'flex', flexDirection: 'column', alignItems:'center', gap:'0.5rem' }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:'1.5rem', color: 'var(--primary)' }}>{s.val}</div>
              <div style={{ color:'var(--muted)', fontSize:'0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator removed */}
    </section>
  )
}
