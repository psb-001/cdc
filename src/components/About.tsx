import { motion } from 'framer-motion'
import { Target, Lightbulb, TrendingUp, Shield } from 'lucide-react'
import logo from '../assets/logo.png'

const pillars = [
  { icon: <Target size={24} />, title: 'Career Guidance', desc: 'Personalized mentoring and counseling to align your academic journey with professional goals.', color: 'var(--primary)' },
  { icon: <Lightbulb size={24} />, title: 'Skill Development', desc: 'Curated technical and soft-skills workshops led by industry veterans and academic experts.', color: 'var(--primary)' },
  { icon: <TrendingUp size={24} />, title: 'Placement Prep', desc: 'Comprehensive preparation including mock interviews, aptitude training, and resume building.', color: 'var(--primary)' },
  { icon: <Shield size={24} />, title: 'Industry Connect', desc: 'Direct access to MNCs and startups through guest lectures, site visits, and internship drives.', color: 'var(--primary)' },
]

export default function About() {
  return (
    <section id="about" className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="grid-2" style={{ alignItems: 'center', gap: '5rem', marginBottom: '6rem' }}>
          {/* Left: text */}
          <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="section-label">About the Cell</div>
            <h2 style={{ fontSize: 'clamp(2rem,4vw,2.75rem)', marginBottom: '1.5rem', color: '#0F172A' }}>
              Nurturing <span style={{ color: 'var(--primary)' }}>Academic Excellence</span> Into Professional Mastery
            </h2>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '1.25rem', fontSize: '1.05rem' }}>
              The Career Development Cell (CDC) at MES Mukunddas Lohia College of Engineering is dedicated to shaping the careers of our students by providing the necessary tools, training, and exposure required in today's competitive job market.
            </p>
            <p style={{ color: 'var(--muted)', lineHeight: 1.8, marginBottom: '2.5rem', fontSize: '1.05rem' }}>
              Our mission is to ensure that every student who graduates from MLCOE is not just an engineer, but a professional ready to contribute to the global technology landscape.
            </p>
            
            <div style={{ display: 'flex', gap: '3rem', flexWrap: 'wrap' }}>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>200+</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Annual Placements</div>
              </div>
              <div>
                <div style={{ fontSize: '2.25rem', fontWeight: 800, color: 'var(--primary)', marginBottom: '0.25rem' }}>30+</div>
                <div style={{ color: 'var(--muted)', fontSize: '0.85rem', fontWeight: 600, textTransform: 'uppercase' }}>Corporate Partners</div>
              </div>
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}>
            <div className="glass-card" style={{ padding: '3rem', background: '#F1F5F9', border: 'none' }}>
              <img src={logo} alt="Logo" style={{ width: 80, height: 80, objectFit: 'contain', marginBottom: '2rem', opacity: 0.8 }} />
              <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', color: 'var(--primary)' }}>Our Vision</h3>
              <p style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '1.1rem', lineHeight: 1.7 }}>
                "To become a center of excellence that empowers students with holistic skills and industry perspectives, ensuring a seamless transition from campus to corporate life."
              </p>
            </div>
          </motion.div>
        </div>

        {/* Pillars grid */}
        <div className="grid-4">
          {pillars.map((p, i) => (
            <motion.div key={p.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card" style={{ padding: '2rem', textAlign: 'left', background: 'white' }}>
              <div style={{ width: 50, height: 50, borderRadius: '0.5rem', background: 'var(--subtle)', display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--primary)', marginBottom: '1.5rem' }}>
                {p.icon}
              </div>
              <h4 style={{ fontSize: '1.1rem', marginBottom: '0.75rem', color: '#0F172A' }}>{p.title}</h4>
              <p style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.6 }}>{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
