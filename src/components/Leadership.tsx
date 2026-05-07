import { motion } from 'framer-motion'
import { Quote } from 'lucide-react'

const leaders = [
  {
    role: 'Principal',
    name: 'Dr. [Principal Name]',
    qualification: 'Ph.D, M.Tech',
    message:
      'The Career Development Cell is the cornerstone of our students\' professional journey. We are committed to nurturing talent and building industry-ready engineers who lead with integrity and innovation.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&h=400&fit=crop',
  },
  {
    role: 'Faculty Coordinator — CDC',
    name: 'Prof. [Coordinator Name]',
    qualification: 'M.Tech, Department of [Dept]',
    message:
      'Our mission at CDC is to empower every student with the skills, confidence, and connections they need to thrive in their careers. We bridge the gap between classroom learning and real-world excellence.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop',
  },
]

export default function Leadership() {
  return (
    <section id="leadership" className="section" style={{ background: 'var(--subtle)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Words of Wisdom</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Leadership &amp; Guidance</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 560, margin: '0 auto' }}>
            Inspired by the vision of our leaders who shape the future of every student at MLCOE.
          </p>
        </div>

        {/* Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2.5rem' }} className="grid-2">
          {leaders.map((l, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                background: 'white',
                border: '1.5px solid var(--border)',
                borderRadius: '1.25rem',
                overflow: 'hidden',
                boxShadow: '0 8px 32px rgba(0,0,0,0.07)',
              }}
            >
              {/* Top banner with image */}
              <div style={{
                background: 'linear-gradient(135deg, var(--primary) 0%, #1e40af 100%)',
                padding: '2rem 2rem 0',
                display: 'flex',
                alignItems: 'flex-end',
                gap: '1.5rem',
                position: 'relative',
                overflow: 'hidden',
              }}>
                {/* Decorative circles in banner */}
                <div style={{
                  position: 'absolute', top: -30, right: -30,
                  width: 140, height: 140, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.06)',
                  pointerEvents: 'none',
                }} />
                <div style={{
                  position: 'absolute', top: 10, right: 40,
                  width: 70, height: 70, borderRadius: '50%',
                  background: 'rgba(255,255,255,0.05)',
                  pointerEvents: 'none',
                }} />

                {/* Photo */}
                <div style={{
                  width: 120, height: 120, borderRadius: '50%',
                  border: '3px solid rgba(255,255,255,0.4)',
                  overflow: 'hidden', flexShrink: 0,
                  boxShadow: '0 4px 16px rgba(0,0,0,0.2)',
                  marginBottom: '-1px',
                }}>
                  <img
                    src={l.image}
                    alt={l.name}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                </div>

                {/* Name + role on banner */}
                <div style={{ paddingBottom: '1.25rem' }}>
                  <span style={{
                    display: 'inline-block',
                    fontSize: '0.65rem', fontWeight: 800,
                    letterSpacing: '0.12em', textTransform: 'uppercase',
                    background: 'rgba(255,255,255,0.15)',
                    color: 'rgba(255,255,255,0.9)',
                    borderRadius: '9999px',
                    padding: '0.25rem 0.85rem',
                    marginBottom: '0.4rem',
                  }}>
                    {l.role}
                  </span>
                  <h3 style={{ fontSize: '1.15rem', color: 'white', marginBottom: '0.15rem' }}>{l.name}</h3>
                  <p style={{ fontSize: '0.78rem', color: 'rgba(255,255,255,0.7)', fontWeight: 500 }}>{l.qualification}</p>
                </div>
              </div>

              {/* Quote body */}
              <div style={{ padding: '1.75rem 2rem 2rem' }}>
                <Quote size={22} style={{ color: 'var(--primary)', opacity: 0.4, marginBottom: '0.75rem' }} />
                <p style={{
                  fontSize: '0.96rem', color: 'var(--text)',
                  lineHeight: 1.85, fontStyle: 'italic',
                  borderLeft: '3px solid var(--primary)',
                  paddingLeft: '1rem',
                  opacity: 0.8,
                }}>
                  {l.message}
                </p>
              </div>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  )
}
