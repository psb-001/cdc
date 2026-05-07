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

const scheduleRows = [
  {
    day: 'Day 1',
    date: '8/5/2026',
    session: '11:00 – 11:10 a.m',
    topic: 'Significance of Capability Development Cell',
    resource: 'Mr. Umesh Kakade, CEO, DFIIE, DBATU\nMr. Omkar Purohit, Director, Omkar Engineering',
  },
  {
    day: '',
    date: '',
    session: 'S1 — 11:10 – 1:15 p.m',
    topic: 'Machine Learning Foundations and Model Thinking',
    resource: 'Mr. Rushikesh Tanksale\nFounder President, Two Registers, Pune',
  },
  {
    day: '',
    date: '',
    session: 'S2 — 2:00 – 4:00 p.m',
    topic: 'Core ML Algorithms, Evaluation, and Practical Workflows — Deep Learning Foundations and Neural Networks',
    resource: '',
  },
  {
    day: 'Day 2',
    date: '9/5/2026',
    session: 'S3 — 11:00 – 2:00 p.m',
    topic: 'CNN, RNN/LSTM, Transformers, Responsible ML/DL, Use-Case Planning, and Prompt Engineering',
    resource: '',
  },
  {
    day: '',
    date: '',
    session: 'S4 — 3:00 – 4:00 p.m',
    topic: 'Introduction to IoT',
    resource: '',
  },
  {
    day: 'Day 3',
    date: '10/5/2026',
    session: 'S5 — 10:00 – 12:00 noon',
    topic: 'Simulation with Thinker CAD',
    resource: 'Mr. Mahesh Chinchole\nAsst. Professor, NMIET, Pune',
  },
  {
    day: 'Day 4',
    date: '11/5/2026',
    session: 'S6 — 1:30 – 5:00 p.m',
    topic: 'Selection of Microcontroller — Hands-On on IoT projects with ESP 32',
    resource: '',
  },
  {
    day: 'Day 5',
    date: '16/5/2026',
    session: 'S7 — 11:00 – 3:00 p.m',
    topic: 'IoT Protocols on ESP 32',
    resource: 'Mr. Shubham Ubale\nR&D Engineer, Tronix365',
  },
  {
    day: 'Day 6',
    date: '01/6/2026',
    session: 'S8 — 11:00 – 3:00 p.m',
    topic: 'DC Regulated PCB Design — Schematic to Testing',
    resource: 'Prof. Ganrsh Madhikar\nMr. Amol Ingle\nMr. Abhiman Shinde',
  },
  {
    day: 'Day 7',
    date: '02/6/2026',
    session: 'S8 — 9:00 – 4:00 p.m',
    topic: 'Symposium and Paper Presentation on Agentic AI\nTheme:\n• AI & ML: Agentic AI with Cyber Security Cover\n• Comp & IT: Seamless Process of Automation\n• E&Tc: Supply Chain Management',
    resource: 'Prof. Ketan Karandikar\nProf. Amita Solanke\nProf. Rutuja Patil\nProf. Shubam Gupchup\nProf. Pritesh Shingade\nMrs. Radhika Tathe',
  },
]

export default function Events() {
  const upcoming = events.filter(e => e.status === 'upcoming')
  const past = events.filter(e => e.status === 'past')

  return (
    <section id="events" className="section" style={{ background: 'white' }}>
      <div className="container">

        {/* ── Featured Workshop Schedule ── */}
        <div style={{ marginBottom: '4rem' }}>
          <div style={{ textAlign: 'center', marginBottom: '2rem' }}>
            <span style={{ fontSize: '0.75rem', fontWeight: 700, padding: '0.25rem 0.75rem', background: 'var(--primary)', color: 'white', borderRadius: '0.15rem', letterSpacing: '0.05em' }}>
              FEATURED WORKSHOP
            </span>
            <h2 style={{ fontSize: '2rem', marginTop: '1rem', marginBottom: '0.25rem', color: 'var(--primary)' }}>
              Workshop on Hands-on IoT and AI
            </h2>
            <p style={{ color: 'var(--muted)', fontStyle: 'italic', marginBottom: '0.25rem' }}>
              Youth Empowerment: To Build a Talent Pool
            </p>
            <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              MES Mukunddas Lohia College of Engineering, Pune — Career Development Cell
            </p>
          </div>

          <div style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontSize: '0.9rem' }}>
              <thead>
                <tr style={{ background: 'var(--primary)', color: 'white' }}>
                  {['Day / Date', 'Session Time', 'Topic', 'Resource Person'].map(h => (
                    <th key={h} style={{ padding: '0.75rem 1rem', textAlign: 'left', fontWeight: 700, whiteSpace: 'nowrap' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {scheduleRows.map((row, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? '#fffdf5' : 'white', borderBottom: '1px solid var(--border)' }}>
                    <td style={{ padding: '0.75rem 1rem', fontWeight: row.day ? 700 : 400, color: row.day ? 'var(--primary)' : 'var(--muted)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>
                      {row.day && <div>{row.day}</div>}
                      {row.date && <div style={{ fontSize: '0.8rem', fontWeight: 400, color: 'var(--muted)' }}>{row.date}</div>}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--muted)', whiteSpace: 'nowrap', verticalAlign: 'top' }}>{row.session}</td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--text)', verticalAlign: 'top' }}>
                      {row.topic.split('\n').map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </td>
                    <td style={{ padding: '0.75rem 1rem', color: 'var(--muted)', verticalAlign: 'top' }}>
                      {row.resource.split('\n').map((line, j) => (
                        <div key={j}>{line}</div>
                      ))}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* ── Upcoming & Archive ── */}
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
