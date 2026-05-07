import { Mail, Phone, MapPin } from 'lucide-react'

const contactItems = [
  { icon: <Mail size={22} />, title: 'Email Us', val: 'cdcclub.admin@proton.me' },
  { icon: <Phone size={22} />, title: 'Call Us', val: '9158574903' },
  { icon: <MapPin size={22} />, title: 'Visit Us', val: 'CTS, 30, F.P.28, Karve Road, Pune 411004' },
]

export default function Contact() {
  return (
    <section id="contact" className="section" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <div className="section-label">Get in Touch</div>
          <h2 style={{ fontSize: 'clamp(1.75rem, 4vw, 2.5rem)', marginBottom: '1rem', color: 'var(--text)' }}>Connect With Us</h2>
          <p style={{ color: 'var(--muted)', fontSize: '1.05rem', lineHeight: 1.8, maxWidth: 560, margin: '0 auto' }}>
            Have questions about placements, workshops, or industry partnerships? Our team is here to help.
          </p>
        </div>

        <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '2rem' }} className="contact-cards">
          {contactItems.map(item => (
            <div key={item.title} className="glass-card" style={{
              padding: '2rem 2.5rem', display: 'flex', flexDirection: 'column',
              alignItems: 'center', textAlign: 'center', minWidth: 220, flex: '1 1 220px', maxWidth: 300
            }}>
              <div style={{
                width: 56, height: 56, borderRadius: '50%',
                background: 'var(--subtle)', color: 'var(--primary)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                marginBottom: '1.25rem'
              }}>
                {item.icon}
              </div>
              <div style={{ fontWeight: 700, color: 'var(--text)', marginBottom: '0.4rem', fontSize: '1rem' }}>{item.title}</div>
              <div style={{ color: 'var(--muted)', fontSize: '0.9rem', lineHeight: 1.5 }}>{item.val}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
