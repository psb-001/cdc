import { useRef } from 'react'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ChevronDown, Briefcase, GraduationCap, Users } from 'lucide-react'
import logo from '../assets/logo.png'

const academicTags = ['Career Readiness', 'Skill Development', 'Industry Collaboration', 'Alumni Mentorship', 'Professional Excellence']

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
          <span className="section-label">Career Development Cell</span>
          <div style={{ fontFamily: 'Space Grotesk', fontSize: '1rem', color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.05em', marginBottom: '1.5rem' }}>
            MES MUKUNDDAS LOHIA COLLEGE OF ENGINEERING, PUNE
          </div>
        </motion.div>

        <motion.h1 initial={{ opacity:0, y:30 }} animate={{ opacity:1, y:0 }} transition={{ duration:0.7, delay:0.2 }}
          style={{ fontSize:'clamp(2.5rem,6vw,4rem)', marginBottom:'1.5rem', color: '#1E293B', lineHeight: 1.2 }}>
          Preparing Students for <span style={{ color: 'var(--primary)' }}>Professional Success</span>
        </motion.h1>

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
            { icon:<Briefcase size={22}/>, val:'200+', label:'Students Placed' },
            { icon:<GraduationCap size={22}/>, val:'50+', label:'Workshops Held' },
            { icon:<Users size={22}/>, val:'30+', label:'Industry Partners' },
          ].map(s => (
            <div key={s.label} style={{ display:'flex', flexDirection: 'column', alignItems:'center', gap:'0.5rem' }}>
              <div style={{ width: 50, height: 50, borderRadius: '50%', background: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', boxShadow: '0 4px 10px rgba(0,0,0,0.05)', marginBottom: '0.5rem' }}>{s.icon}</div>
              <div style={{ fontFamily:'Space Grotesk', fontWeight:700, fontSize:'1.5rem', color: 'var(--primary)' }}>{s.val}</div>
              <div style={{ color:'var(--muted)', fontSize:'0.85rem', fontWeight: 500, textTransform: 'uppercase', letterSpacing: '0.05em' }}>{s.label}</div>
            </div>
          ))}
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.div animate={{ y:[0,10,0] }} transition={{ duration:2, repeat:Infinity }} onClick={() => document.getElementById('about')?.scrollIntoView({behavior:'smooth'})}
        style={{ position:'absolute', bottom:'2rem', left:'50%', transform:'translateX(-50%)', cursor:'pointer', color:'var(--muted)' }}>
        <ChevronDown size={28} />
      </motion.div>
    </section>
  )
}
