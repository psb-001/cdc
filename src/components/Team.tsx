import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'
import prathameshImg from '../assets/prathamesh.jpg'
import aayushImg from '../assets/aayush.jpg'
import mohilImg from '../assets/mohil.jpg'
import govindImg from '../assets/Govind.jpg'
import ayushImg from '../assets/ayush.jpg'
import dnyanratnaImg from '../assets/Dnyanratna.jpg'

const members = [
  { name: 'Govind Gandhi', role: 'President', dept: 'CDC', image: govindImg },
  { name: 'Prathamesh Bhujbal', role: 'Head of Software', dept: 'CDC', image: prathameshImg },
  { name: 'Aayush Kandhare', role: 'Secretary', dept: 'CDC', image: aayushImg },
  { name: 'Atharv Chougule', role: 'Head of Finance', dept: 'CDC', image: null },
  { name: 'Mohil Kamble', role: 'Head of Hardware', dept: 'CDC', image: mohilImg },
  { name: 'Ayush Nimbare', role: 'Digital & Media Creation', dept: 'CDC', image: ayushImg },
  { name: 'Dnyanratna Mathpati', role: 'Head of Social Media', dept: 'CDC', image: dnyanratnaImg },
]

export default function Team() {
  return (
    <section id="team" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <div className="section-label">Our Leadership</div>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>The CDC Team</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
            Our team consists of dedicated faculty members and industry professionals committed to bridging the gap between education and career.
          </p>
        </div>

        <div className="grid-4">
          {members.map((m, i) => (
            <motion.div key={m.name} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="glass-card" style={{ padding: '1.5rem', textAlign: 'center', background: 'white' }}>
              {m.image ? (
                <img src={m.image} alt={m.name} style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover', border: '4px solid var(--subtle)' }} />
              ) : (
                <div style={{
                  width: 120, height: 120, borderRadius: '50%', margin: '0 auto 1.5rem',
                  background: 'var(--subtle)', border: '4px solid var(--subtle)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  fontSize: '2rem', color: 'var(--primary)', fontWeight: 700,
                }}>
                  {m.name.charAt(0)}
                </div>
              )}
              <h3 style={{ fontSize: '1.1rem', marginBottom: '0.25rem', color: 'var(--text)' }}>{m.name}</h3>
              <div style={{ color: 'var(--primary)', fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.25rem', textTransform: 'uppercase' }}>{m.role}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.8rem', marginBottom: '1.25rem' }}>{m.dept}</div>
              
              <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem' }}>
                <a href="#" className="social-link"><Linkedin size={18} /></a>
                <a href="#" className="social-link"><Mail size={18} /></a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
