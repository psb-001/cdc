import { motion } from 'framer-motion'

const stats = [
  { value: 200, suffix: '+', label: 'Students Placed', sublabel: 'Last Academic Year' },
  { value: 12, suffix: ' LPA', label: 'Highest Package', sublabel: 'Offered in 2025' },
  { value: 30, suffix: '+', label: 'Recruiters', sublabel: 'On-campus visits' },
  { value: 95, suffix: '%', label: 'Success Rate', sublabel: 'Placement achievement' },
]

export default function Stats() {
  return (
    <section className="section" style={{ background: '#0F172A', color: 'white' }}>
      <div className="container">
        <div className="grid-4">
          {stats.map((s, i) => (
            <motion.div key={s.label} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              style={{ textAlign: 'center', padding: '1rem' }}>
              <div style={{ fontFamily: 'Space Grotesk', fontWeight: 800, fontSize: '3rem', color: '#38BDF8', marginBottom: '0.5rem', lineHeight: 1 }}>
                {s.value}{s.suffix}
              </div>
              <div style={{ fontWeight: 700, fontSize: '1rem', marginBottom: '0.25rem', letterSpacing: '0.05em', textTransform: 'uppercase' }}>{s.label}</div>
              <div style={{ color: '#94A3B8', fontSize: '0.85rem' }}>{s.sublabel}</div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
