import { Calendar, Clock, MapPin } from 'lucide-react'

const events = [
  {
    status: 'upcoming',
    date: 'May 20, 2026',
    time: '10:00 AM',
    title: 'Resume Review Blitz',
    desc: 'Individual resume auditing session with HR experts from Tier-1 IT companies.',
    venue: 'Seminar Hall 1',
    tag: 'Placement Prep',
  },
  {
    status: 'upcoming',
    date: 'June 5, 2026',
    time: '2:00 PM',
    title: 'Industry Leadership Series',
    desc: 'Keynote address by CTOs of leading MNCs on future tech trends and career paths.',
    venue: 'Main Auditorium',
    tag: 'Guest Lecture',
  },
  {
    status: 'past',
    date: 'Apr 10, 2026',
    title: 'Annual Mock Placement Drive',
    desc: 'Successfully concluded campus-wide simulation of technical and HR rounds.',
    tag: 'Major Event',
  },
  {
    status: 'past',
    date: 'Mar 22, 2026',
    title: 'LinkedIn Mastery Workshop',
    desc: 'Hands-on session on building a recruiter-focused professional presence.',
    tag: 'Workshop',
  },
]

export default function Events() {
  const upcoming = events.filter(e => e.status === 'upcoming')
  const past = events.filter(e => e.status === 'past')

  return (
    <section id="events" className="section" style={{ background: 'white' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '4rem' }} className="events-grid">
          {/* Left: Upcoming */}
          <div>
            <h2 style={{ fontSize: '2.25rem', marginBottom: '2.5rem', display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ width: 40, height: 3, background: 'var(--primary)' }} />
              Upcoming Events
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
              {upcoming.map(e => (
                <div key={e.title} style={{ padding: '2rem', border: '1px solid var(--border)', borderRadius: '0.25rem', background: 'var(--surface)' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '1rem' }}>
                    <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', background: 'var(--primary)', color: 'white', borderRadius: '0.15rem' }}>{e.tag}</span>
                    <div style={{ display: 'flex', gap: '1rem', color: 'var(--muted)', fontSize: '0.85rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Calendar size={14} /> {e.date}</span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.4rem' }}><Clock size={14} /> {e.time}</span>
                    </div>
                  </div>
                  <h3 style={{ fontSize: '1.25rem', marginBottom: '0.75rem', color: 'var(--primary)' }}>{e.title}</h3>
                  <p style={{ color: 'var(--muted)', fontSize: '0.95rem', marginBottom: '1rem' }}>{e.desc}</p>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', color: 'var(--muted)', fontSize: '0.85rem' }}>
                    <MapPin size={14} /> Venue: {e.venue}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Past / Archive */}
          <div>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '2.5rem', color: 'var(--text)' }}>Event Archive</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {past.map(e => (
                <div key={e.title} style={{ borderLeft: '2px solid var(--border)', paddingLeft: '1.5rem', position: 'relative' }}>
                  <div style={{ position: 'absolute', left: -5, top: 0, width: 8, height: 8, borderRadius: '50%', background: 'var(--border)' }} />
                  <div style={{ fontSize: '0.75rem', color: 'var(--muted)', marginBottom: '0.25rem' }}>{e.date}</div>
                  <h4 style={{ fontSize: '0.95rem', marginBottom: '0.25rem', color: 'var(--text)' }}>{e.title}</h4>
                  <div style={{ fontSize: '0.75rem', color: 'var(--primary)', fontWeight: 600 }}>{e.tag}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
