import { motion } from 'framer-motion';
import { CheckCircle2, Layers3, ShieldCheck, Zap } from 'lucide-react';

const principles = [
  {
    title: 'Architecture First',
    text: 'Design around clear boundaries, modular services, and predictable data flow. This reduces coupling and keeps systems easier to scale.',
    icon: <Layers3 size={18} />,
  },
  {
    title: 'Performance by Default',
    text: 'Apply caching, asynchronous processing, and observability early. Performance should be engineered from day one, not patched after launch.',
    icon: <Zap size={18} />,
  },
  {
    title: 'Security as a Baseline',
    text: 'Use least-privilege access, secure defaults, and auditable workflows across environments. Security controls should be part of normal delivery.',
    icon: <ShieldCheck size={18} />,
  },
];

const checklist = [
  'Define service boundaries and ownership.',
  'Use versioned APIs and backward-compatible changes.',
  'Set SLOs for availability and latency.',
  'Implement centralized logs and alerting.',
  'Enforce CI checks and release validation.',
  'Document incident response and rollback plans.',
];

export default function EngineeringGuidePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '90px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '112px 0 56px' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', borderRadius: '999px', padding: '6px 14px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Architecture
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4.2vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 900 }}>
            Engineering Guide
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '860px' }}>
            A static reference page for how NexTech approaches scalable architecture, performance, and security across production systems.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '34px 0 0' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}>Core Principles</h2>
          <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {principles.map((principle, idx) => (
              <motion.article key={principle.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.05 }} style={{ borderRadius: '16px', border: '1px solid #e2e8f0', background: '#fff', padding: '16px', boxShadow: '0 8px 20px rgba(15,23,42,0.04)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '34px', height: '34px', borderRadius: '10px', background: '#eff6ff', color: '#1d4ed8' }}>
                  {principle.icon}
                </div>
                <h3 style={{ margin: '10px 0 0 0', fontSize: '1.05rem' }}>{principle.title}</h3>
                <p style={{ margin: '8px 0 0 0', color: '#64748b', lineHeight: 1.68 }}>{principle.text}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 0' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#eff6ff', padding: '16px' }}>
            <h2 style={{ margin: 0, fontSize: '1.2rem', color: '#1d4ed8' }}>Production Readiness Checklist</h2>
            <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
              {checklist.map((item) => (
                <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', lineHeight: 1.65 }}>
                  <CheckCircle2 size={16} style={{ marginTop: '3px', flexShrink: 0, color: '#2563eb' }} />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
