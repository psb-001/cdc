import { Mail, Phone, MapPin, Send } from 'lucide-react'

export default function Contact() {
  const inputStyle = {
    width: '100%', padding: '0.85rem 1rem', background: 'white', 
    border: '1px solid var(--border)', borderRadius: '0.375rem', 
    color: 'var(--text)', fontSize: '0.95rem', marginBottom: '1.25rem',
    transition: 'border-color 0.2s', outline: 'none'
  }

  return (
    <section id="contact" className="section" style={{ background: 'white' }}>
      <div className="container">
        <div className="grid-2" style={{ gap: '5rem' }}>
          {/* Info */}
          <div>
            <div className="section-label">Get in Touch</div>
            <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', color: '#0F172A' }}>Connect With Us</h2>
            <p style={{ color: 'var(--muted)', marginBottom: '3rem', fontSize: '1.05rem', lineHeight: 1.8 }}>
              Have questions about placements, workshops, or industry partnerships? Our team is here to help you navigate your career journey.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {[
                { icon: <Mail />, title: 'Email Us', val: 'cdc@mlcoe.edu.in' },
                { icon: <Phone />, title: 'Call Us', val: '+91 20 1234 5678' },
                { icon: <MapPin />, title: 'Visit Us', val: 'Garware Campus, Karve Rd, Pune – 411004' },
              ].map(item => (
                <div key={item.title} style={{ display: 'flex', gap: '1.25rem' }}>
                  <div style={{ width: 48, height: 48, borderRadius: '0.375rem', background: 'var(--subtle)', color: 'var(--primary)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontWeight: 700, color: '#0F172A', marginBottom: '0.25rem' }}>{item.title}</div>
                    <div style={{ color: 'var(--muted)', fontSize: '0.95rem' }}>{item.val}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Form */}
          <div className="glass-card" style={{ padding: '3rem', background: 'var(--surface)', border: 'none' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2rem', color: 'var(--primary)' }}>Inquiry Form</h3>
            <form onSubmit={e => e.preventDefault()}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
                <input type="text" placeholder="Full Name" style={inputStyle} />
                <input type="email" placeholder="College Email" style={inputStyle} />
              </div>
              <input type="text" placeholder="Department / Year" style={inputStyle} />
              <input type="text" placeholder="Subject" style={inputStyle} />
              <textarea placeholder="Your Message" style={{ ...inputStyle, minHeight: 120, resize: 'none' }} />
              <button className="btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                Submit Inquiry <Send size={18} />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}
