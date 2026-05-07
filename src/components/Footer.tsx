import logo from '../assets/logo.png'

const navLinks = ['About', 'Programs', 'Events', 'Team', 'Contact']
const resources = ['Resume Tips', 'Interview Guide', 'LinkedIn Checklist', 'Aptitude Resources']
const college = ['MLCOE Website', 'Admissions', 'Academic Calendar', 'Student Portal']

export default function Footer() {
  const scrollTo = (id: string) => document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: 'smooth' })

  return (
    <footer style={{ background: '#0F172A', color: 'white', padding: '5rem 0 2rem' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '4rem', marginBottom: '4rem' }}>
          {/* Brand */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.5rem' }}>
              <img src={logo} alt="Logo" style={{ width: 48, height: 48, objectFit: 'contain' }} />
              <div>
                <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '1.2rem', lineHeight: 1 }}>CDC</div>
                <div style={{ fontSize: '0.7rem', color: '#94A3B8', fontWeight: 600, letterSpacing: '0.05em' }}>MES MLCOE</div>
              </div>
            </div>
            <p style={{ color: '#94A3B8', fontSize: '0.9rem', lineHeight: 1.8, maxWidth: 300, marginBottom: '2rem' }}>
              The official Career Development Cell of MES Mukunddas Lohia College of Engineering, Pune. Dedicated to student success and professional excellence.
            </p>
            <div style={{ fontSize: '0.8rem', color: '#94A3B8', padding: '0.75rem 1rem', background: 'rgba(255,255,255,0.05)', borderRadius: '0.25rem', display: 'inline-block' }}>
              📍 Garware Campus, Karve Rd, Pune – 411004
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Navigation</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {navLinks.map(link => (
                <li key={link}>
                  <button onClick={() => scrollTo(link)} style={{ background: 'none', color: '#94A3B8', fontSize: '0.9rem', cursor: 'pointer', transition: 'color 0.2s', padding: 0, textAlign: 'left' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>{link}</button>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>Resources</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {resources.map(r => (
                <li key={r}>
                  <a href="#" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>{r}</a>
                </li>
              ))}
            </ul>
          </div>

          {/* College */}
          <div>
            <div style={{ fontSize: '0.8rem', fontWeight: 700, color: '#38BDF8', letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '1.5rem' }}>College Links</div>
            <ul style={{ listStyle: 'none', display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
              {college.map(c => (
                <li key={c}>
                  <a href="#" style={{ color: '#94A3B8', fontSize: '0.9rem', transition: 'color 0.2s' }}
                    onMouseEnter={e => e.currentTarget.style.color = 'white'}
                    onMouseLeave={e => e.currentTarget.style.color = '#94A3B8'}>{c}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1.5rem' }}>
          <div style={{ color: '#64748B', fontSize: '0.8rem' }}>
            © 2026 Career Development Cell, MES MLCOE. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '2rem' }}>
            {['Privacy Policy', 'Terms of Service'].map(l => (
              <a key={l} href="#" style={{ color: '#64748B', fontSize: '0.8rem', transition: 'color 0.2s' }}
                onMouseEnter={e => e.currentTarget.style.color = 'white'}
                onMouseLeave={e => e.currentTarget.style.color = '#64748B'}>{l}</a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
