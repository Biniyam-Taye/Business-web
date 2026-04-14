import { motion } from 'framer-motion';
import { ArrowUpRight, BriefcaseBusiness, Clock3, Gem, Globe, HeartHandshake, Sparkles } from 'lucide-react';

const roles = [
  {
    title: 'Senior Frontend Engineer',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    summary: 'Build high-performance product interfaces and scalable design systems for enterprise-grade platforms.',
    skills: ['React + TypeScript', 'Performance optimization', 'Design system architecture'],
  },
  {
    title: 'Backend Platform Engineer',
    type: 'Full-time',
    location: 'Remote / Hybrid',
    summary: 'Design resilient APIs, distributed services, and secure infrastructure foundations.',
    skills: ['Node.js or Go', 'System design', 'Cloud security'],
  },
  {
    title: 'Product Designer (UI/UX)',
    type: 'Full-time',
    location: 'Hybrid',
    summary: 'Shape user journeys, interaction systems, and conversion-focused digital product experiences.',
    skills: ['UX research', 'Interaction design', 'Figma'],
  },
  {
    title: 'DevOps / SRE Specialist',
    type: 'Full-time',
    location: 'Remote',
    summary: 'Improve deployment velocity, observability, and reliability across production environments.',
    skills: ['CI/CD', 'Cloud operations', 'Monitoring and incident response'],
  },
];

const values = [
  ['Ownership Culture', 'We trust people to own outcomes, not just tasks.'],
  ['Craft + Speed', 'We balance engineering excellence with practical delivery speed.'],
  ['Growth Mindset', 'Continuous learning, mentorship, and candid feedback are core to our team.'],
  ['Human-Centered', 'We build with empathy for clients, users, and teammates.'],
];

export default function CareersPage() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '90px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '112px 0 56px' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #bbf7d0', background: '#f0fdf4', color: '#166534', borderRadius: '999px', padding: '7px 14px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Sparkles size={13} /> Careers
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ margin: '14px 0 0 0', fontSize: 'clamp(2.1rem, 4.4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 900 }}>
            Build products that move industries forward.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '860px' }}>
            Join NexTech to solve meaningful technical challenges, ship high-impact systems, and grow in a team that values ownership, quality, and collaboration.
          </motion.p>
          <motion.a href="/contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} style={{ marginTop: '22px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 18px', fontWeight: 800 }}>
            Apply or Ask About Roles <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </section>

      <section style={{ padding: '34px 0 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}>Open Positions</h2>
          <p style={{ margin: '8px 0 16px 0', color: '#64748b', lineHeight: 1.7 }}>We are hiring across product, engineering, and platform operations.</p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {roles.map((role, idx) => (
              <motion.article key={role.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }} style={{ borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', padding: '18px', boxShadow: '0 8px 20px rgba(15,23,42,0.04)' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.12rem', letterSpacing: '-0.01em' }}>{role.title}</h3>
                    <p style={{ margin: '7px 0 0 0', color: '#64748b', lineHeight: 1.65 }}>{role.summary}</p>
                  </div>
                  <a href="/contact" style={{ textDecoration: 'none', alignSelf: 'flex-start', padding: '10px 14px', borderRadius: '10px', border: '1px solid #cbd5e1', color: '#0f172a', fontWeight: 700 }}>Apply</a>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '12px' }}>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#f1f5f9', color: '#334155', borderRadius: '999px', padding: '6px 10px', fontSize: '0.78rem', fontWeight: 700 }}><BriefcaseBusiness size={13} />{role.type}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', gap: '5px', background: '#f1f5f9', color: '#334155', borderRadius: '999px', padding: '6px 10px', fontSize: '0.78rem', fontWeight: 700 }}><Globe size={13} />{role.location}</span>
                </div>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
                  {role.skills.map((skill) => (
                    <span key={skill} style={{ border: '1px solid #e2e8f0', background: '#fff', borderRadius: '999px', padding: '6px 10px', fontSize: '0.76rem', color: '#475569', fontWeight: 700 }}>{skill}</span>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '28px 0 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}>Why People Join NexTech</h2>
          <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px' }}>
            {values.map((value, idx) => (
              <motion.div key={value[0]} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }} style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#eff6ff', padding: '14px' }}>
                <h3 style={{ margin: 0, color: '#1d4ed8', fontSize: '1rem' }}>{value[0]}</h3>
                <p style={{ margin: '7px 0 0 0', color: '#334155', lineHeight: 1.65 }}>{value[1]}</p>
              </motion.div>
            ))}
          </div>
          <div style={{ marginTop: '14px', borderRadius: '16px', border: '1px solid #e2e8f0', background: '#fff', padding: '14px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#475569', fontWeight: 700 }}><Clock3 size={15} />Flexible work options</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#475569', fontWeight: 700 }}><Gem size={15} />Growth-oriented mentorship</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', color: '#475569', fontWeight: 700 }}><HeartHandshake size={15} />Collaborative team culture</span>
          </div>
        </div>
      </section>
    </div>
  );
}
