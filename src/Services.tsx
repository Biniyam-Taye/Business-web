import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Bot, Cloud, Code2, Database, LayoutPanelTop, ShieldCheck, Smartphone, Workflow } from 'lucide-react';

const services = [
  {
    title: 'Custom Web Platforms',
    icon: <Code2 size={22} />,
    desc: 'Conversion-focused web products engineered for speed, scalability, and measurable business outcomes.',
    bullets: ['Modern frontend architecture', 'Secure API integrations', 'SEO and performance optimization'],
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone size={22} />,
    desc: 'High-performance mobile experiences with clean UX, robust offline states, and enterprise-ready integrations.',
    bullets: ['Cross-platform native feel', 'Push notifications and analytics', 'App store release support'],
  },
  {
    title: 'AI & Automation Systems',
    icon: <Bot size={22} />,
    desc: 'Practical AI automation that removes repetitive work and helps teams ship decisions faster.',
    bullets: ['Workflow automation pipelines', 'Document and data intelligence', 'Agent-enabled internal tooling'],
  },
  {
    title: 'Cloud & Backend Engineering',
    icon: <Cloud size={22} />,
    desc: 'Resilient backend systems with reliable uptime, security-first design, and scalable architecture.',
    bullets: ['Microservices and serverless', 'Database optimization', 'Observability and incident readiness'],
  },
];

const processSteps = [
  { step: '01', title: 'Discovery & Strategy', desc: 'We map your business goals, user journeys, and technical constraints into a clear execution plan.' },
  { step: '02', title: 'Architecture & UX Design', desc: 'We design scalable system architecture and user-first interfaces before implementation starts.' },
  { step: '03', title: 'Build & Integrate', desc: 'Our team develops, tests, and integrates all components into one reliable ecosystem.' },
  { step: '04', title: 'Launch & Optimization', desc: 'After launch, we monitor performance and continuously optimize for growth and stability.' },
];

export default function Services() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '120px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', paddingTop: '118px', paddingBottom: '74px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '28px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '999px', padding: '6px 14px', marginBottom: '18px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: 999, background: '#2563eb' }} />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#2563eb' }}>Our Services</span>
              </div>
              <h1 style={{ margin: 0, fontSize: 'clamp(2.1rem, 4vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 800 }}>
                Comprehensive technology services built for <span style={{ color: '#f97316' }}>real business impact.</span>
              </h1>
              <p style={{ margin: '18px 0 0 0', maxWidth: '620px', color: '#64748b', lineHeight: 1.75, fontSize: '1rem' }}>
                From strategy to launch, we design and engineer digital systems that reduce manual work, accelerate growth, and create durable competitive advantage.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '22px' }}>
                <button className="project-btn-primary" style={{ border: 'none', borderRadius: '12px', background: '#0f172a', color: '#fff', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Start a Project <ArrowUpRight size={16} />
                </button>
                <button className="project-btn-secondary" style={{ borderRadius: '12px', border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  View Process <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1, delay: 0.15, ease }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e2e8f0', borderRadius: '18px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              {[
                ['12+', 'Service Modules'],
                ['50+', 'Projects Delivered'],
                ['98%', 'Client Satisfaction'],
                ['24/7', 'Support Readiness'],
              ].map((item) => (
                <div key={item[0]} style={{ background: '#fff', padding: '24px 20px' }}>
                  <p style={{ margin: 0, fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{item[0]}</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.78rem', color: 'rgba(15,23,42,0.62)', textTransform: 'uppercase', letterSpacing: '0.04em', fontWeight: 500 }}>{item[1]}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '72px 0 24px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ margin: '0 0 20px 0', fontSize: 'clamp(1.8rem, 3vw, 2.6rem)', letterSpacing: '-0.02em' }}>
            Service Areas In Detail
          </motion.h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '16px' }}>
            {services.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 26 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.75, delay: idx * 0.08, ease }}
                whileHover={{ y: -8 }}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '22px', boxShadow: '0 12px 30px rgba(15,23,42,0.05)' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '12px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px' }}>
                  {item.icon}
                </div>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ margin: '10px 0 12px 0', color: '#64748b', lineHeight: 1.65, fontSize: '0.95rem' }}>{item.desc}</p>
                <div style={{ display: 'grid', gap: '8px' }}>
                  {item.bullets.map((b) => (
                    <div key={b} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.9rem', color: '#334155' }}>
                      <span style={{ marginTop: '6px', width: '6px', height: '6px', borderRadius: 999, background: '#2563eb', flexShrink: 0 }} />
                      <span>{b}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '54px 0 28px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.h2 initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease }} style={{ margin: '0 0 18px 0', fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
            Delivery Process
          </motion.h2>
          <div style={{ display: 'grid', gap: '12px' }}>
            {processSteps.map((step, idx) => (
              <motion.div
                key={step.step}
                initial={{ opacity: 0, x: -24 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, delay: idx * 0.1, ease }}
                style={{ background: '#fff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '18px', display: 'grid', gridTemplateColumns: '100px 1fr', gap: '14px', alignItems: 'center' }}
              >
                <div style={{ fontSize: '1.6rem', fontWeight: 800, color: '#2563eb', letterSpacing: '-0.02em' }}>{step.step}</div>
                <div>
                  <h3 style={{ margin: 0, fontSize: '1.02rem' }}>{step.title}</h3>
                  <p style={{ margin: '6px 0 0 0', color: '#64748b', lineHeight: 1.65 }}>{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '54px 0 24px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease }} style={{ background: '#0f172a', color: '#f8fafc', borderRadius: '22px', padding: '28px', border: '1px solid #1e293b' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.6rem, 3vw, 2.2rem)' }}>Technology Stack We Use</h2>
            <p style={{ margin: '10px 0 0 0', color: '#94a3b8', maxWidth: '740px', lineHeight: 1.7 }}>
              We pick tools based on your business goals, team workflow, and long-term maintainability.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))', gap: '10px', marginTop: '18px' }}>
              {[
                ['Frontend', <LayoutPanelTop size={17} />],
                ['Backend', <Database size={17} />],
                ['Cloud', <Cloud size={17} />],
                ['Automation', <Workflow size={17} />],
                ['Security', <ShieldCheck size={17} />],
              ].map(([label, icon]) => (
                <div key={String(label)} style={{ border: '1px solid #334155', borderRadius: '12px', padding: '12px', background: '#020617', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <span style={{ color: '#60a5fa', display: 'inline-flex' }}>{icon as JSX.Element}</span>
                  <span style={{ fontWeight: 600 }}>{label}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
