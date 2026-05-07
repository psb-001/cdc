import { BookOpen, Mic, FileText, Users, Code, Building, ChevronRight } from 'lucide-react'

const programs = [
  {
    id: 'resume',
    icon: <FileText size={24} />,
    title: 'Professional Documentation',
    desc: 'Workshops on crafting executive resumes, LinkedIn profiles, and professional portfolios that meet global standards.',
    outcomes: ['Standardized Resumes', 'LinkedIn Optimization', 'Portfolio Review'],
  },
  {
    id: 'mock',
    icon: <Mic size={24} />,
    title: 'Interview Preparation',
    desc: 'Simulated interview rounds focusing on technical proficiency, behavioral traits, and communication skills.',
    outcomes: ['Technical Mock Interviews', 'HR Round Simulation', 'GD Performance Audit'],
  },
  {
    id: 'peer',
    icon: <Users size={24} />,
    title: 'Peer Mentoring Program',
    desc: 'Structured knowledge transfer sessions where senior students and alumni mentor juniors on career pathways.',
    outcomes: ['1-on-1 Guidance', 'Domain Knowledge Sharing', 'Alumni Networking'],
  },
  {
    id: 'tech',
    icon: <Code size={24} />,
    title: 'Technical Upskilling',
    desc: 'Coordinating with departments to provide certification courses in DSA, Cloud, AI, and emerging technologies.',
    outcomes: ['Industry Certifications', 'Tech Stack Workshops', 'Hands-on Projects'],
  },
  {
    id: 'industry',
    icon: <Building size={24} />,
    title: 'Industry Relations',
    desc: 'Managing corporate tie-ups, internship drives, and guest lectures from industry veterans and entrepreneurs.',
    outcomes: ['Internship Assistance', 'Corporate Guest Talks', 'Industrial Visits'],
  },
  {
    id: 'aptitude',
    icon: <BookOpen size={24} />,
    title: 'Aptitude Training',
    desc: 'Rigorous training in quantitative analysis, logical reasoning, and verbal ability for competitive campus hiring.',
    outcomes: ['Quantitative Drills', 'Logical Reasoning', 'Verbal Excellence'],
  },
]

export default function Programs() {

  return (
    <section id="programs" className="section" style={{ background: 'var(--surface)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <span className="section-label">CDC Initiatives</span>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: 'var(--text)' }}>Our Training Programs</h2>
          <p style={{ color: 'var(--muted)', maxWidth: 600, margin: '0 auto' }}>
            A comprehensive curriculum designed to transform students into career-ready professionals through structured training modules.
          </p>
        </div>

        <div className="grid-3">
          {programs.map((prog) => (
            <div key={prog.id} className="glass-card" 
              style={{ padding: '2rem', display: 'flex', flexDirection: 'column', height: '100%' }}>
              <div style={{ color: 'var(--primary)', marginBottom: '1.25rem' }}>{prog.icon}</div>
              <h3 style={{ fontSize: '1.2rem', marginBottom: '0.75rem', color: 'var(--text)' }}>{prog.title}</h3>
              <p style={{ color: 'var(--muted)', fontSize: '0.95rem', lineHeight: 1.6, flex: 1, marginBottom: '1.5rem' }}>{prog.desc}</p>
              
              <div style={{ borderTop: '1px solid var(--border)', paddingTop: '1.25rem' }}>
                <div style={{ fontSize: '0.8rem', fontWeight: 700, color: 'var(--primary)', textTransform: 'uppercase', marginBottom: '0.75rem', letterSpacing: '0.05em' }}>Key Learning Outcomes</div>
                {prog.outcomes.map(o => (
                  <div key={o} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.85rem', color: 'var(--muted)', marginBottom: '0.4rem' }}>
                    <ChevronRight size={14} color="var(--primary)" />
                    {o}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
