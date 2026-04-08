import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  Cloud,
  Code2,
  Database,
  LayoutPanelTop,
  ShieldCheck,
  Smartphone,
  Workflow,
} from 'lucide-react';

const offerings = [
  {
    title: 'Custom Web Platforms',
    icon: <Code2 size={22} />,
    desc: 'Conversion-focused platforms built for speed, reliability, and measurable growth.',
    points: ['Modern component-driven frontend', 'Secure API and payment integrations', 'Performance + SEO tuning'],
  },
  {
    title: 'Mobile App Development',
    icon: <Smartphone size={22} />,
    desc: 'Native-feeling mobile apps that are scalable, delightful, and easy to maintain.',
    points: ['Cross-platform architecture', 'Offline-first and push notifications', 'Store deployment and support'],
  },
  {
    title: 'AI & Automation Systems',
    icon: <Bot size={22} />,
    desc: 'Practical automation to remove repetitive tasks and accelerate operations.',
    points: ['Process automation pipelines', 'Smart document/data processing', 'AI-enabled internal assistants'],
  },
  {
    title: 'Cloud & Backend Engineering',
    icon: <Cloud size={22} />,
    desc: 'Resilient backend systems designed for uptime, security, and future growth.',
    points: ['Serverless and microservice design', 'Database optimization and scaling', 'Observability and incident readiness'],
  },
  {
    title: 'UI/UX Design Systems',
    icon: <LayoutPanelTop size={22} />,
    desc: 'Design systems that align brand, usability, and conversion goals.',
    points: ['UX research and journey mapping', 'Reusable design tokens/components', 'Accessibility-first interfaces'],
  },
  {
    title: 'Data & Security Foundations',
    icon: <ShieldCheck size={22} />,
    desc: 'Secure, compliant, and structured data layers powering better decisions.',
    points: ['Data model and governance setup', 'Role-based access patterns', 'Security and compliance baseline'],
  },
];

const processSteps = [
  { id: '01', title: 'Discovery', text: 'We align business goals, user outcomes, and technical constraints into a clear roadmap.' },
  { id: '02', title: 'Planning & Design', text: 'We define architecture, user flows, priorities, and delivery milestones.' },
  { id: '03', title: 'Build', text: 'Our team develops in iterative sprints with transparent weekly progress updates.' },
  { id: '04', title: 'QA & Launch', text: 'We harden quality, run final validations, and launch with confidence.' },
  { id: '05', title: 'Growth Optimization', text: 'We monitor, optimize, and evolve the product based on performance and feedback.' },
];

const industries = [
  'Fintech & Banking',
  'Healthcare & Clinics',
  'E-commerce & Retail',
  'Logistics & Supply Chain',
  'Education & Training',
  'Enterprise Operations',
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most projects run between 6 and 16 weeks depending on complexity, integrations, and scope depth.',
  },
  {
    q: 'Do you work with existing systems?',
    a: 'Yes. We often integrate or modernize existing platforms while maintaining business continuity.',
  },
  {
    q: 'Can you support after launch?',
    a: 'Absolutely. We provide ongoing maintenance, enhancement sprints, and support retainers.',
  },
];

export default function Services() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '140px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', paddingTop: '114px', paddingBottom: '76px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease }}>
              <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', borderRadius: '999px', padding: '6px 14px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', marginBottom: '16px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2563eb' }} />
                <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', fontWeight: 800, textTransform: 'uppercase', color: '#2563eb' }}>Our Services</span>
              </div>
              <h1 style={{ margin: 0, fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.03em', fontSize: 'clamp(2.2rem, 4.4vw, 3.5rem)' }}>
                Comprehensive technology services designed for <span style={{ color: '#f97316' }}>long-term business growth.</span>
              </h1>
              <p style={{ margin: '18px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '640px' }}>
                We help teams move from idea to fully-operational products with robust architecture, beautiful UX, and measurable performance outcomes.
              </p>
              <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Start a Project <ArrowUpRight size={16} />
                </button>
                <button className="project-btn-secondary" style={{ border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Explore Process <ArrowRight size={16} />
                </button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 36 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 1.05, delay: 0.15, ease }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1px', background: '#e2e8f0', borderRadius: '20px', overflow: 'hidden', border: '1px solid #e2e8f0' }}>
              {[
                ['12+', 'Service Modules'],
                ['50+', 'Projects Delivered'],
                ['98%', 'Client Satisfaction'],
                ['24/7', 'Support Readiness'],
              ].map((s) => (
                <div key={s[0]} style={{ background: '#ffffff', padding: '24px 20px' }}>
                  <p style={{ margin: 0, fontSize: '2rem', fontWeight: 800, letterSpacing: '-0.03em' }}>{s[0]}</p>
                  <p style={{ margin: '4px 0 0 0', fontSize: '0.78rem', color: 'rgba(15,23,42,0.62)', letterSpacing: '0.04em', fontWeight: 500, textTransform: 'uppercase' }}>{s[1]}</p>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '74px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ margin: '0 0 8px 0', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}>
            End-to-End Service Coverage
          </motion.h2>
          <p style={{ margin: '0 0 20px 0', color: '#64748b', maxWidth: '740px', lineHeight: 1.7 }}>
            Every service module includes strategy, implementation, and measurable outcomes.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
            {offerings.map((item, idx) => (
              <motion.article
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ duration: 0.7, delay: idx * 0.06, ease }}
                whileHover={{ y: -8 }}
                style={{
                  background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                  border: '1px solid #e2e8f0',
                  borderRadius: '20px',
                  padding: '22px',
                  boxShadow: '0 10px 26px rgba(15,23,42,0.05)',
                  minHeight: '325px',
                  height: '100%',
                  display: 'flex',
                  flexDirection: 'column',
                  position: 'relative',
                  overflow: 'hidden',
                }}
              >
                <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '2px', background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 50%, #f97316 100%)' }} />
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '12px', border: '1px solid #bfdbfe' }}>{item.icon}</div>
                <h3 style={{ margin: 0, fontSize: '1.1rem' }}>{item.title}</h3>
                <p style={{ margin: '10px 0 12px 0', color: '#64748b', lineHeight: 1.7, fontSize: '0.95rem', minHeight: '82px' }}>{item.desc}</p>
                <div style={{ display: 'grid', gap: '8px', marginTop: 'auto' }}>
                  {item.points.map((p) => (
                    <div key={p} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', fontSize: '0.9rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', marginTop: '6px', background: '#2563eb', flexShrink: 0 }} />
                      <span>{p}</span>
                    </div>
                  ))}
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '62px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>How We Deliver</h2>
            <p style={{ margin: '10px 0 16px 0', color: '#64748b', lineHeight: 1.7, maxWidth: '760px' }}>
              Structured delivery with clear milestones, weekly reporting, and production-grade quality controls.
            </p>
            <div style={{ display: 'grid', gap: '10px' }}>
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease }}
                  style={{ display: 'grid', gridTemplateColumns: '92px 1fr', gap: '12px', alignItems: 'center', border: '1px solid #e2e8f0', borderRadius: '14px', padding: '14px 16px', background: '#f8fafc' }}
                >
                  <div style={{ fontSize: '1.5rem', color: '#2563eb', fontWeight: 800 }}>{step.id}</div>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1rem' }}>{step.title}</h3>
                    <p style={{ margin: '4px 0 0 0', color: '#64748b', lineHeight: 1.6 }}>{step.text}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '62px 0 12px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '14px' }}>
            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75, ease }} style={{ background: '#0f172a', border: '1px solid #1e293b', borderRadius: '18px', padding: '22px', color: '#f8fafc' }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Tech Stack & Architecture</h3>
              <p style={{ margin: '8px 0 14px 0', color: '#94a3b8', lineHeight: 1.7 }}>
                We choose the right stack for your goals, team capability, and long-term maintainability.
              </p>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                {[
                  ['Frontend', <LayoutPanelTop size={16} />],
                  ['Backend', <Database size={16} />],
                  ['Cloud', <Cloud size={16} />],
                  ['Automation', <Workflow size={16} />],
                ].map(([name, icon]) => (
                  <div key={String(name)} style={{ border: '1px solid #334155', borderRadius: '10px', padding: '10px', background: '#020617', display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ color: '#60a5fa', display: 'inline-flex' }}>{icon as JSX.Element}</span>
                    <span style={{ fontWeight: 600, fontSize: '0.9rem' }}>{name}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, delay: 0.12, ease }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '22px' }}>
              <h3 style={{ margin: 0, fontSize: '1.3rem' }}>Industries We Serve</h3>
              <p style={{ margin: '8px 0 14px 0', color: '#64748b', lineHeight: 1.7 }}>
                We adapt implementation style and compliance requirements by domain.
              </p>
              <div style={{ display: 'grid', gap: '8px' }}>
                {industries.map((i) => (
                  <div key={i} style={{ borderRadius: '10px', border: '1px solid #e2e8f0', background: '#f8fafc', padding: '10px 12px', color: '#334155', fontWeight: 600, fontSize: '0.92rem' }}>
                    {i}
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '62px 0 12px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Engagement Models</h2>
            <p style={{ margin: '8px 0 16px 0', color: '#64748b', maxWidth: '760px', lineHeight: 1.7 }}>
              Flexible collaboration models designed for different delivery needs.
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
              {[
                ['Project-Based', 'Best for fixed scope and clear timeline deliverables.'],
                ['Dedicated Team', 'Best for long-term roadmaps requiring continuous iteration.'],
                ['Advisory + Build', 'Best for teams needing architecture leadership and implementation.'],
              ].map((m, idx) => (
                <motion.div key={m[0]} initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.65, delay: idx * 0.08, ease }} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', background: '#f8fafc', padding: '14px' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem' }}>{m[0]}</h3>
                  <p style={{ margin: '6px 0 0 0', color: '#64748b', lineHeight: 1.6, fontSize: '0.92rem' }}>{m[1]}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '62px 0 16px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>Frequently Asked Questions</h2>
            <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
              {faqs.map((f, idx) => (
                <motion.div key={f.q} initial={{ opacity: 0, y: 14 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.55, delay: idx * 0.07, ease }} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', padding: '14px', background: '#f8fafc' }}>
                  <h3 style={{ margin: 0, fontSize: '1rem' }}>{f.q}</h3>
                  <p style={{ margin: '6px 0 0 0', color: '#64748b', lineHeight: 1.6 }}>{f.a}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '66px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease }} style={{ background: 'linear-gradient(145deg, #0f172a, #020617)', border: '1px solid #1e293b', borderRadius: '22px', padding: '28px', color: '#ffffff' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.7rem, 3vw, 2.4rem)', lineHeight: 1.2 }}>Ready to transform your operations with better systems?</h2>
            <p style={{ margin: '10px 0 0 0', color: '#94a3b8', maxWidth: '760px', lineHeight: 1.7 }}>
              Share your goals and we will propose a focused implementation plan with clear milestones, timeline, and value targets.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
              <button className="project-btn-primary" style={{ border: 'none', background: '#2563eb', color: '#fff', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Book Strategy Call <ArrowUpRight size={16} />
              </button>
              <button className="project-btn-secondary" style={{ border: '1px solid #334155', background: '#0b1220', color: '#f8fafc', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Download Service Guide <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
