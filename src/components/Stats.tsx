import { motion } from 'framer-motion'

const stats = [
  { value: 0, suffix: ' LPA', label: 'Highest Package', sublabel: 'Target for 2026' },
  { value: 0, suffix: '+', label: 'Recruiters', sublabel: 'Partnership in progress' },
  { value: 0, suffix: '%', label: 'Success Rate', sublabel: 'Building our track record' },
]

export default function Stats() {
  return (
    <section className="section" style={{ background: 'var(--slate-900)', color: 'var(--white)' }}>
      <div className="container">
        <div className="grid-3">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontFamily: 'Outfit', fontWeight: 800, fontSize: '3rem', color: 'var(--sky)', marginBottom: '0.5rem', lineHeight: 1 }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
              <div style={{ color: 'var(--slate-400)', fontSize: '0.85rem' }}>{s.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
