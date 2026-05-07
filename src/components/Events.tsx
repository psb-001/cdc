const days = [
  {
    day: 'Day 1',
    date: 'May 8, 2026',
    sessions: [
      {
        time: '11:00 – 11:10 AM',
        topic: 'Significance of Capability Development Cell',
        speakers: ['Mr. Umesh Kakade — CEO, DFIIE, DBATU', 'Mr. Omkar Purohit — Director, Omkar Engineering'],
        tag: 'Inauguration',
      },
      {
        time: '11:10 AM – 1:15 PM',
        label: 'S1',
        topic: 'Machine Learning Foundations and Model Thinking',
        speakers: ['Mr. Rushikesh Tanksale — Founder President, Two Registers, Pune'],
        tag: 'ML / AI',
      },
      {
        time: '2:00 – 4:00 PM',
        label: 'S2',
        topic: 'Core ML Algorithms, Evaluation & Practical Workflows — Deep Learning Foundations and Neural Networks',
        speakers: ['Mr. Rushikesh Tanksale — Founder President, Two Registers, Pune'],
        tag: 'ML / AI',
      },
    ],
  },
  {
    day: 'Day 2',
    date: 'May 9, 2026',
    sessions: [
      {
        time: '11:00 AM – 2:00 PM',
        label: 'S3',
        topic: 'CNN, RNN/LSTM, Transformers, Responsible ML/DL, Use-Case Planning & Prompt Engineering',
        speakers: ['Mr. Rushikesh Tanksale — Founder President, Two Registers, Pune'],
        tag: 'Deep Learning',
      },
      {
        time: '3:00 – 4:00 PM',
        label: 'S4',
        topic: 'Introduction to IoT',
        speakers: [],
        tag: 'IoT',
      },
    ],
  },
  {
    day: 'Day 3',
    date: 'May 10, 2026',
    sessions: [
      {
        time: '10:00 AM – 12:00 Noon',
        label: 'S5',
        topic: 'Simulation with Thinker CAD',
        speakers: ['Mr. Mahesh Chinchole — Asst. Professor, NMIET, Pune'],
        tag: 'IoT',
      },
    ],
  },
  {
    day: 'Day 4',
    date: 'May 11, 2026',
    sessions: [
      {
        time: '1:30 – 5:00 PM',
        label: 'S6',
        topic: 'Selection of Microcontroller — Hands-On on IoT Projects with ESP32',
        speakers: [],
        tag: 'Hands-On',
      },
    ],
  },
  {
    day: 'Day 5',
    date: 'May 16, 2026',
    sessions: [
      {
        time: '11:00 AM – 3:00 PM',
        label: 'S7',
        topic: 'IoT Protocols on ESP32',
        speakers: ['Mr. Shubham Ubale — R&D Engineer, Tronix365'],
        tag: 'IoT',
      },
    ],
  },
  {
    day: 'Day 6',
    date: 'June 1, 2026',
    sessions: [
      {
        time: '11:00 AM – 3:00 PM',
        label: 'S8',
        topic: 'DC Regulated PCB Design — Schematic to Testing',
        speakers: ['Prof. Ganrsh Madhikar', 'Mr. Amol Ingle', 'Mr. Abhiman Shinde'],
        tag: 'Hardware',
      },
    ],
  },
  {
    day: 'Day 7',
    date: 'June 2, 2026',
    sessions: [
      {
        time: '9:00 AM – 4:00 PM',
        label: 'S8',
        topic: 'Symposium & Paper Presentation on Agentic AI',
        themes: [
          'AI & ML: Agentic AI with Cyber Security Cover',
          'Comp & IT: Seamless Process of Automation',
          'E&Tc: Supply Chain Management',
        ],
        speakers: [
          'Prof. Ketan Karandikar', 'Prof. Amita Solanke', 'Prof. Rutuja Patil',
          'Prof. Shubam Gupchup', 'Prof. Pritesh Shingade', 'Mrs. Radhika Tathe',
        ],
        tag: 'Symposium',
      },
    ],
  },
]

const tagClassMap: Record<string, string> = {
  'Inauguration': 'tag-inauguration',
  'ML / AI': 'tag-ml-ai',
  'Deep Learning': 'tag-deep-learning',
  'IoT': 'tag-iot',
  'Hands-On': 'tag-hands-on',
  'Hardware': 'tag-hardware',
  'Symposium': 'tag-symposium',
}

export default function Events() {
  return (
    <section id="events" className="section" style={{ background: 'var(--subtle)' }}>
      <div className="container">

        {/* Header */}
        <div style={{ textAlign: 'center', marginBottom: '3.5rem' }}>
          <span className="section-label">Career Development Cell</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '0.75rem' }}>
            Workshop on Hands-on IoT &amp; AI
          </h2>
          <p style={{ color: 'var(--muted)', fontStyle: 'italic', fontSize: '1.05rem', marginBottom: '0.4rem' }}>
            Youth Empowerment: Building a Talent Pool
          </p>
          <p style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
            MES Mukunddas Lohia College of Engineering, Pune
          </p>
        </div>

        {/* Day Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
          {days.map((d, di) => (
            <div
              key={di}
              style={{
                background: 'white',
                borderRadius: '1rem',
                boxShadow: 'var(--shadow)',
                overflow: 'hidden',
                border: '1px solid var(--border)',
              }}
            >
              {/* Day Header */}
              <div
                style={{
                  background: 'var(--primary)',
                  padding: '1rem 1.75rem',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    background: 'rgba(255,255,255,0.15)',
                    borderRadius: '0.5rem',
                    padding: '0.4rem 0.9rem',
                    fontFamily: 'Outfit, sans-serif',
                    fontWeight: 800,
                    fontSize: '1rem',
                    color: 'white',
                    letterSpacing: '0.05em',
                  }}
                >
                  {d.day}
                </div>
                <span style={{ color: 'rgba(255,255,255,0.85)', fontSize: '0.95rem', fontWeight: 500 }}>
                  {d.date}
                </span>
              </div>

              {/* Sessions */}
              <div style={{ padding: '0.5rem 0' }}>
                {d.sessions.map((s, si) => {
                  const tc = tagClassMap[s.tag] ?? 'tag-fallback'
                  return (
                    <div
                      key={si}
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '180px 1fr auto',
                        gap: '1.25rem',
                        padding: '1.25rem 1.75rem',
                        borderBottom: si < d.sessions.length - 1 ? '1px solid var(--border)' : 'none',
                        alignItems: 'start',
                      }}
                      className="schedule-row session-row"
                    >
                      {/* Time */}
                      <div>
                        {s.label && (
                          <span style={{
                            display: 'inline-block',
                            fontSize: '0.7rem',
                            fontWeight: 700,
                            color: 'var(--primary)',
                            background: 'rgba(30,58,138,0.08)',
                            borderRadius: '0.25rem',
                            padding: '0.1rem 0.5rem',
                            marginBottom: '0.35rem',
                            letterSpacing: '0.05em',
                          }}>
                            {s.label}
                          </span>
                        )}
                        <div style={{ fontSize: '0.82rem', color: 'var(--muted)', fontWeight: 500, lineHeight: 1.5 }}>
                          {s.time}
                        </div>
                      </div>

                      {/* Topic + Speakers */}
                      <div>
                        <p style={{ fontWeight: 600, color: 'var(--text)', fontSize: '0.97rem', marginBottom: '0.5rem', lineHeight: 1.5 }}>
                          {s.topic}
                        </p>
                        {'themes' in s && s.themes && (
                          <ul style={{ margin: '0.4rem 0 0.6rem 0', paddingLeft: '1.1rem' }}>
                            {s.themes.map((t, ti) => (
                              <li key={ti} style={{ fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.2rem' }}>{t}</li>
                            ))}
                          </ul>
                        )}
                        {s.speakers.length > 0 && (
                          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.4rem', marginTop: '0.5rem' }}>
                            {s.speakers.map((sp, spi) => (
                              <span key={spi} style={{
                                fontSize: '0.78rem',
                                color: 'var(--muted)',
                                background: 'var(--subtle)',
                                border: '1px solid var(--border)',
                                borderRadius: '9999px',
                                padding: '0.2rem 0.7rem',
                              }}>
                                {sp}
                              </span>
                            ))}
                          </div>
                        )}
                      </div>

                      {/* Tag */}
                      <div>
                        <span className={`${tc} session-tag`}
                          style={{
                            fontSize: '0.72rem',
                            fontWeight: 700,
                            padding: '0.3rem 0.8rem',
                            borderRadius: '9999px',
                            whiteSpace: 'nowrap',
                            letterSpacing: '0.04em',
                          }}>
                          {s.tag}
                        </span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}
