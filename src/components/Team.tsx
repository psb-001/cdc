import { motion } from 'framer-motion'
import { Linkedin, Mail } from 'lucide-react'

const members = [
  { name: 'Dr. Amitabh Sharma', role: 'Head of Placement', dept: 'Mechanical Engineering', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop' },
  { name: 'Prof. Sneha Patil', role: 'CDC Coordinator', dept: 'Computer Engineering', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop' },
  { name: 'Mr. Rohan Mehta', role: 'Corporate Relations', dept: 'Industry Connect', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop' },
  { name: 'Dr. Priya Kulkarni', role: 'Skill Development Head', dept: 'E&TC Engineering', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop' },
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
              <img src={m.image} alt={m.name} style={{ width: 120, height: 120, borderRadius: '50%', margin: '0 auto 1.5rem', objectFit: 'cover', border: '4px solid var(--subtle)' }} />
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
