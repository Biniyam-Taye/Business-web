import type { CSSProperties, ReactNode } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  ArrowUpRight,
  Bot,
  ChevronDown,
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
  {
    id: '01',
    title: 'Discovery',
    text: 'We align business goals, user outcomes, and technical constraints into a clear roadmap.',
    duration: 'Week 1',
    deliverables: ['Stakeholder interviews', 'Current-state audit', 'Success metrics definition'],
  },
  {
    id: '02',
    title: 'Planning & Design',
    text: 'We define architecture, user flows, priorities, and delivery milestones.',
    duration: 'Week 2-3',
    deliverables: ['Technical architecture', 'UX wireframes and UI direction', 'Sprint backlog and milestones'],
  },
  {
    id: '03',
    title: 'Build',
    text: 'Our team develops in iterative sprints with transparent weekly progress updates.',
    duration: 'Week 4-10',
    deliverables: ['Feature implementation', 'API and integrations', 'Weekly demo and review cycles'],
  },
  {
    id: '04',
    title: 'QA & Launch',
    text: 'We harden quality, run final validations, and launch with confidence.',
    duration: 'Week 11-12',
    deliverables: ['Quality and security checks', 'Performance validation', 'Release execution plan'],
  },
  {
    id: '05',
    title: 'Growth Optimization',
    text: 'We monitor, optimize, and evolve the product based on performance and feedback.',
    duration: 'Post-launch',
    deliverables: ['Analytics insights', 'Optimization sprints', 'Roadmap iteration and support'],
  },
];

const industries = [
  {
    name: 'Fintech & Banking',
    detail: 'Secure transaction systems',
    image: 'https://images.unsplash.com/photo-1559526324-593bc073d938?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Healthcare & Clinics',
    detail: 'Patient-first digital workflows',
    image: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'E-commerce & Retail',
    detail: 'High-conversion shopping journeys',
    image: 'https://images.unsplash.com/photo-1607082350899-7e105aa886ae?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Logistics & Supply Chain',
    detail: 'Tracking and route intelligence',
    image: 'https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Education & Training',
    detail: 'Scalable learning platforms',
    image: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=900&q=80',
  },
  {
    name: 'Enterprise Operations',
    detail: 'Workflow and reporting automation',
    image: 'https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=900&q=80',
  },
];

const faqs = [
  {
    q: 'How long does a typical project take?',
    a: 'Most projects run between 6 and 16 weeks depending on complexity, integrations, and scope depth. Smaller MVPs can launch faster, while enterprise builds need additional planning, security hardening, and staged rollout.',
    points: ['MVP scope: ~6-8 weeks', 'Mid-size platforms: ~10-14 weeks', 'Complex enterprise delivery: ~14-16+ weeks'],
  },
  {
    q: 'Do you work with existing systems?',
    a: 'Yes. We frequently integrate with existing tools, APIs, and databases so your team can improve systems without disrupting daily operations. Our approach is modernization in phases, not risky full replacements.',
    points: ['API and legacy system integration', 'Gradual migration with minimal downtime', 'Backward compatibility for critical workflows'],
  },
  {
    q: 'Can you support after launch?',
    a: 'Absolutely. After launch, we stay involved with performance monitoring, bug fixes, and prioritized enhancement sprints. You get reliable technical ownership as your product and business continue to evolve.',
    points: ['Monitoring and incident response', 'Monthly optimization and feature sprints', 'Flexible support retainers for growth'],
  },
];

const titleBaseStyle: CSSProperties = {
  margin: 0,
  fontWeight: 900,
  color: '#020617',
  letterSpacing: '-0.03em',
  lineHeight: 1.12,
};

const accentOrangeStyle: CSSProperties = {
  color: '#f5602a',
};

const accentBlueStyle: CSSProperties = {
  background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
  WebkitBackgroundClip: 'text',
  WebkitTextFillColor: 'transparent',
  backgroundClip: 'text',
};

const titleOnDarkStyle: CSSProperties = {
  margin: 0,
  fontWeight: 900,
  color: '#ffffff',
  letterSpacing: '-0.02em',
  lineHeight: 1.15,
};

export default function Services() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const [openFaq, setOpenFaq] = useState<number | null>(0);

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
              <h1 style={{ ...titleBaseStyle, fontSize: 'clamp(2.2rem, 4.4vw, 3.5rem)' }}>
                Comprehensive technology services for{' '}
                <span style={accentOrangeStyle}>business growth</span> and{' '}
                <span style={accentBlueStyle}>modern scale.</span>
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
          <motion.h2 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ ...titleBaseStyle, marginBottom: '8px', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}>
            End-to-End Service <span style={accentBlueStyle}>Coverage</span>
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
                <h3 style={{ ...titleBaseStyle, fontSize: '1.1rem', lineHeight: 1.25 }}>{item.title}</h3>
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
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px', boxShadow: '0 14px 34px rgba(15,23,42,0.05)' }}>
            <h2 style={{ ...titleBaseStyle, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              How We <span style={accentBlueStyle}>Deliver</span>
            </h2>
            <p style={{ margin: '10px 0 16px 0', color: '#64748b', lineHeight: 1.7, maxWidth: '760px' }}>
              Structured delivery with milestone ownership, transparent reporting, and production-grade quality controls.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginBottom: '14px' }}>
              {['Weekly Progress Reports', 'Sprint-Based Delivery', 'QA + Performance Validation', 'Post-Launch Optimization'].map((chip) => (
                <span key={chip} style={{ borderRadius: '999px', border: '1px solid #dbeafe', background: '#eff6ff', color: '#1d4ed8', padding: '6px 12px', fontSize: '0.76rem', fontWeight: 700, letterSpacing: '0.02em' }}>
                  {chip}
                </span>
              ))}
            </div>
            <div style={{ display: 'grid', gap: '10px' }}>
              {processSteps.map((step, idx) => (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.65, delay: idx * 0.08, ease }}
                  style={{
                    display: 'grid',
                    gridTemplateColumns: '92px 1fr auto',
                    gap: '12px',
                    alignItems: 'flex-start',
                    border: '1px solid #e2e8f0',
                    borderRadius: '16px',
                    padding: '15px 16px',
                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)',
                    boxShadow: '0 8px 20px rgba(15,23,42,0.03)',
                  }}
                >
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
                    <div style={{ fontSize: '1.5rem', color: '#2563eb', fontWeight: 800 }}>{step.id}</div>
                    <span style={{ fontSize: '0.72rem', fontWeight: 700, color: '#1d4ed8', letterSpacing: '0.06em', textTransform: 'uppercase', border: '1px solid #bfdbfe', background: '#eff6ff', borderRadius: '999px', padding: '4px 8px', width: 'fit-content' }}>
                      {step.duration}
                    </span>
                  </div>
                  <div>
                    <h3 style={{ ...titleBaseStyle, fontSize: '1rem', lineHeight: 1.25 }}>{step.title}</h3>
                    <p style={{ margin: '4px 0 8px 0', color: '#64748b', lineHeight: 1.6 }}>{step.text}</p>
                    <div style={{ display: 'grid', gap: '6px' }}>
                      {step.deliverables.map((deliverable) => (
                        <div key={deliverable} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', fontSize: '0.88rem', color: '#334155' }}>
                          <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: '#3b82f6', marginTop: '6px', flexShrink: 0 }} />
                          <span>{deliverable}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                  <div style={{ alignSelf: 'center', width: '34px', height: '34px', borderRadius: '10px', background: '#0f172a', color: '#ffffff', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.9rem', fontWeight: 700 }}>
                    {idx + 1}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '62px 0 12px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '14px' }}>
            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, ease }}
              style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(15,23,42,0.05)' }}
            >
              <div style={{ position: 'relative', height: '230px' }}>
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
                  alt="Technology architecture"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,6,23,0.08) 0%, rgba(2,6,23,0.78) 100%)' }} />
                <div style={{ position: 'absolute', left: '20px', right: '20px', bottom: '16px' }}>
                  <h3 style={{ ...titleOnDarkStyle, fontSize: '1.35rem' }}>
                    Tech Stack & <span style={accentOrangeStyle}>Architecture</span>
                  </h3>
                  <p style={{ margin: '6px 0 0 0', color: 'rgba(255,255,255,0.85)', lineHeight: 1.6 }}>
                    Scalable foundations selected for performance, maintainability, and growth.
                  </p>
                </div>
              </div>

              <div style={{ padding: '18px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                  {[
                    ['Frontend', <LayoutPanelTop size={16} />],
                    ['Backend', <Database size={16} />],
                    ['Cloud', <Cloud size={16} />],
                    ['Automation', <Workflow size={16} />],
                  ].map(([name, icon]) => (
                    <div
                      key={String(name)}
                      style={{
                        border: '1px solid #dbeafe',
                        borderRadius: '12px',
                        padding: '12px',
                        background: 'linear-gradient(180deg, #ffffff 0%, #eff6ff 100%)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                      }}
                    >
                      <span style={{ color: '#2563eb', display: 'inline-flex' }}>{icon as ReactNode}</span>
                      <span style={{ fontWeight: 700, fontSize: '0.92rem', color: '#1e293b' }}>{name}</span>
                    </div>
                  ))}
                </div>

                <div style={{ marginTop: '16px', borderTop: '1px solid #e2e8f0', paddingTop: '16px' }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '1.15fr 0.85fr', gap: '14px', alignItems: 'start' }}>
                    <div>
                      <h4 style={{ ...titleBaseStyle, fontSize: '1.05rem', letterSpacing: '-0.02em' }}>
                        A blueprint that <span style={accentBlueStyle}>scales with you</span>
                      </h4>
                      <p style={{ margin: '8px 0 0 0', color: '#64748b', lineHeight: 1.65 }}>
                        We design systems for clarity and change: clean modules, secure boundaries, and observability built-in—so teams ship faster without
                        breaking production.
                      </p>

                      <div style={{ marginTop: '12px', display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                        {[
                          'React / Next.js',
                          'Node / .NET',
                          'Postgres',
                          'Redis',
                          'Docker',
                          'CI/CD',
                          'AWS / Azure',
                          'Monitoring',
                        ].map((tag) => (
                          <span
                            key={tag}
                            style={{
                              borderRadius: '999px',
                              padding: '6px 10px',
                              border: '1px solid #e2e8f0',
                              background: '#f8fafc',
                              color: '#0f172a',
                              fontSize: '0.78rem',
                              fontWeight: 700,
                              letterSpacing: '0.01em',
                            }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      <div style={{ marginTop: '14px', display: 'grid', gap: '8px' }}>
                        {[
                          'Clear API contracts + versioning strategy',
                          'Role-based access patterns and audit trails',
                          'Performance budgets and caching plan',
                          'Alerts, dashboards, and incident-ready runbooks',
                        ].map((item) => (
                          <div key={item} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', color: '#334155', fontSize: '0.92rem' }}>
                            <span style={{ width: '22px', height: '22px', borderRadius: '8px', background: '#0f172a', color: '#ffffff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                              <ShieldCheck size={14} />
                            </span>
                            <span style={{ lineHeight: 1.55 }}>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gap: '10px' }}>
                      <div style={{ border: '1px solid #e2e8f0', borderRadius: '16px', background: 'linear-gradient(180deg, #ffffff 0%, #f8fafc 100%)', padding: '12px' }}>
                        <p style={{ margin: 0, fontSize: '0.8rem', letterSpacing: '0.06em', textTransform: 'uppercase', fontWeight: 800, color: '#1d4ed8' }}>
                          Typical deliverables
                        </p>
                        <div style={{ display: 'grid', gap: '8px', marginTop: '10px' }}>
                          {[
                            'Architecture diagram',
                            'Data model + migrations',
                            'API spec + endpoints',
                            'Deployment pipeline',
                          ].map((d) => (
                            <div key={d} style={{ display: 'flex', gap: '8px', alignItems: 'center', color: '#334155', fontSize: '0.9rem' }}>
                              <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: '#2563eb', flexShrink: 0 }} />
                              <span style={{ lineHeight: 1.45 }}>{d}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      <div style={{ border: '1px solid #dbeafe', borderRadius: '16px', background: 'linear-gradient(145deg, #eff6ff 0%, #ffffff 100%)', padding: '12px' }}>
                        <p style={{ margin: 0, fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em' }}>Get a stack recommendation</p>
                        <p style={{ margin: '6px 0 0 0', color: '#64748b', lineHeight: 1.55, fontSize: '0.9rem' }}>
                          Share your goals and constraints—we’ll propose a right-sized architecture and rollout plan.
                        </p>
                        <button
                          className="project-btn-primary"
                          style={{
                            marginTop: '10px',
                            border: 'none',
                            background: '#0f172a',
                            color: '#fff',
                            borderRadius: '12px',
                            padding: '10px 12px',
                            fontWeight: 800,
                            display: 'flex',
                            alignItems: 'center',
                            gap: '8px',
                            width: '100%',
                            justifyContent: 'center',
                          }}
                        >
                          View example architecture <ArrowRight size={16} />
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.9, delay: 0.1, ease }}
              style={{ display: 'grid', gap: '14px' }}
            >
              <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', overflow: 'hidden', boxShadow: '0 12px 30px rgba(15,23,42,0.05)' }}>
                <div style={{ position: 'relative', height: '130px' }}>
                  <img
                    src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                    alt="Industries and teams"
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0.1) 0%, rgba(15,23,42,0.65) 100%)' }} />
                  <h3 style={{ ...titleOnDarkStyle, position: 'absolute', left: '16px', bottom: '14px', fontSize: '1.25rem' }}>
                    Industries We <span style={accentOrangeStyle}>Serve</span>
                  </h3>
                </div>
                <div style={{ padding: '14px' }}>
                  <p style={{ margin: '0 0 10px 0', color: '#64748b', lineHeight: 1.6 }}>
                    Domain-specific delivery with compliance and workflow alignment.
                  </p>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
                    {industries.map((industry) => (
                      <div
                        key={industry.name}
                        style={{
                          borderRadius: '12px',
                          border: '1px solid #dbeafe',
                          overflow: 'hidden',
                          background: '#ffffff',
                          boxShadow: '0 8px 20px rgba(15,23,42,0.05)',
                        }}
                      >
                        <div style={{ position: 'relative', height: '86px' }}>
                          <img
                            src={industry.image}
                            alt={industry.name}
                            style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                          />
                          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,6,23,0.05) 0%, rgba(2,6,23,0.48) 100%)' }} />
                        </div>
                        <div style={{ padding: '10px' }}>
                          <p style={{ margin: 0, color: '#0f172a', fontSize: '0.86rem', fontWeight: 700, lineHeight: 1.3 }}>
                            {industry.name}
                          </p>
                          <p style={{ margin: '3px 0 0 0', color: '#64748b', fontSize: '0.75rem', lineHeight: 1.4 }}>
                            {industry.detail}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              <div style={{ background: 'linear-gradient(140deg, #eff6ff 0%, #ffffff 100%)', border: '1px solid #dbeafe', borderRadius: '20px', padding: '16px' }}>
                <h4 style={{ ...titleBaseStyle, fontSize: '1rem', color: '#1e3a8a' }}>
                  Why this model <span style={accentBlueStyle}>works</span>
                </h4>
                <div style={{ display: 'grid', gap: '7px', marginTop: '8px' }}>
                  {['Lower technical debt', 'Faster release cycles', 'Easier long-term scaling'].map((point) => (
                    <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', fontSize: '0.9rem' }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', marginTop: '6px', background: '#2563eb', flexShrink: 0 }} />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '62px 0 12px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 22 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.85, ease }} style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}>
            <h2 style={{ ...titleBaseStyle, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              Engagement <span style={accentOrangeStyle}>Models</span>
            </h2>
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
                  <h3 style={{ ...titleBaseStyle, fontSize: '1rem', lineHeight: 1.25 }}>{m[0]}</h3>
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
            <h2 style={{ ...titleBaseStyle, fontSize: 'clamp(1.8rem, 3vw, 2.5rem)' }}>
              Frequently Asked <span style={accentBlueStyle}>Questions</span>
            </h2>
            <div style={{ display: 'grid', gap: '10px', marginTop: '16px' }}>
              {faqs.map((f, idx) => {
                const isOpen = openFaq === idx;
                return (
                  <motion.div
                    key={f.q}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.55, delay: idx * 0.07, ease }}
                    style={{
                      border: '1px solid #e2e8f0',
                      borderRadius: '14px',
                      background: isOpen ? '#ffffff' : '#f8fafc',
                      boxShadow: isOpen ? '0 10px 26px rgba(15,23,42,0.06)' : 'none',
                      overflow: 'hidden',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))}
                      aria-expanded={isOpen}
                      style={{
                        width: '100%',
                        textAlign: 'left',
                        border: 'none',
                        background: 'transparent',
                        padding: '14px 14px',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'space-between',
                        gap: '12px',
                        cursor: 'pointer',
                      }}
                    >
                      <span style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
                        <span style={{ fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>{f.q}</span>
                        <span style={{ fontSize: '0.85rem', color: '#64748b', lineHeight: 1.5 }}>
                          {isOpen ? 'Tap to hide answer' : 'Tap to view brief answer'}
                        </span>
                      </span>
                      <span
                        style={{
                          width: '36px',
                          height: '36px',
                          borderRadius: '12px',
                          border: '1px solid #e2e8f0',
                          background: isOpen ? '#0f172a' : '#ffffff',
                          color: isOpen ? '#ffffff' : '#0f172a',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          flexShrink: 0,
                        }}
                      >
                        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.25 }}>
                          <ChevronDown size={16} />
                        </motion.span>
                      </span>
                    </button>

                    <motion.div
                      initial={false}
                      animate={isOpen ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.16, 1, 0.3, 1] }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ padding: '0 14px 14px 14px' }}>
                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                          <p style={{ margin: 0, color: '#64748b', lineHeight: 1.75, fontSize: '0.95rem' }}>{f.a}</p>
                          <div style={{ display: 'grid', gap: '7px', marginTop: '10px' }}>
                            {f.points.map((point) => (
                              <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', fontSize: '0.9rem' }}>
                                <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: '#2563eb', marginTop: '6px', flexShrink: 0 }} />
                                <span style={{ lineHeight: 1.55 }}>{point}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>
                    </motion.div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '66px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.85, ease }}
            style={{
              position: 'relative',
              overflow: 'hidden',
              borderRadius: '24px',
              border: '1px solid #dbeafe',
              background: 'linear-gradient(120deg, #ffffff 0%, #f8fbff 48%, #eff6ff 100%)',
              boxShadow: '0 20px 44px rgba(15,23,42,0.08)',
              padding: '26px',
            }}
          >
            <div style={{ position: 'absolute', top: '-80px', right: '-60px', width: '260px', height: '260px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, rgba(37,99,235,0) 72%)' }} />
            <div style={{ position: 'absolute', bottom: '-120px', left: '-80px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.13) 0%, rgba(249,115,22,0) 72%)' }} />

            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.3fr 0.7fr', gap: '16px' }}>
              <div>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', padding: '6px 12px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#2563eb' }} />
                  Next step
                </div>
                <h2 style={{ ...titleBaseStyle, marginTop: '14px', fontSize: 'clamp(1.75rem, 3vw, 2.45rem)', lineHeight: 1.16 }}>
                  Launch faster with a <span style={accentBlueStyle}>modern delivery</span> partner.
                </h2>
                <p style={{ margin: '10px 0 0 0', color: '#475569', maxWidth: '720px', lineHeight: 1.75 }}>
                  Share your target outcomes and constraints. We will return a practical implementation path with milestones, scope boundaries, and a timeline
                  your team can execute confidently.
                </p>

                <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '14px' }}>
                  {['Architecture-first planning', 'Transparent sprint execution', 'Post-launch optimization'].map((chip) => (
                    <span key={chip} style={{ borderRadius: '999px', border: '1px solid #dbeafe', background: '#ffffff', color: '#1e3a8a', padding: '6px 11px', fontSize: '0.78rem', fontWeight: 700 }}>
                      {chip}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '18px' }}>
                  <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Book Strategy Call <ArrowUpRight size={16} />
                  </button>
                  <button className="project-btn-secondary" style={{ border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Get Service Deck <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '10px', alignContent: 'start' }}>
                {[
                  ['< 24h', 'Initial response window', <Workflow size={16} />],
                  ['95%', 'On-time sprint delivery', <ShieldCheck size={16} />],
                  ['Cloud-ready', 'Built for scale from day one', <Cloud size={16} />],
                ].map((item) => (
                  <div key={item[0] as string} style={{ borderRadius: '14px', border: '1px solid #dbeafe', background: 'rgba(255,255,255,0.86)', backdropFilter: 'blur(4px)', padding: '12px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', color: '#1d4ed8' }}>
                      <strong style={{ fontSize: '0.95rem' }}>{item[0]}</strong>
                      <span style={{ display: 'inline-flex' }}>{item[2] as ReactNode}</span>
                    </div>
                    <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '0.84rem', lineHeight: 1.5 }}>{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
