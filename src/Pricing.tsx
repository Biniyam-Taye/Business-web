import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, BriefcaseBusiness, Check, ChevronDown, Quote, ShieldCheck, Sparkles, TrendingUp, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    tagline: 'Launch fast with a conversion-ready business website.',
    price: 'ETB 120,000',
    period: 'One-time project investment',
    badge: 'Fast Launch',
    description: 'For founders who need a polished web presence that is ready to win clients quickly.',
    features: ['Strategy session and scope mapping', 'Premium responsive website UI', 'Core backend and CMS setup', 'Lead capture forms and analytics', 'SEO-ready structure and speed tuning', 'Production deployment and handoff'],
    timeline: '2-4 weeks delivery',
    cta: 'Start Project',
  },
  {
    name: 'Business',
    tagline: 'Operate smarter with a full workflow system and dashboard.',
    price: 'ETB 280,000',
    period: 'Milestone-based delivery',
    badge: 'Most Popular',
    featured: true,
    description: 'Built for companies ready to unify operations, automate repetitive work, and scale with confidence.',
    features: ['Everything in Starter plan', 'Custom admin dashboard and roles', 'Workflow automation and notifications', 'Payment, CRM, and API integrations', 'Reporting metrics and insights widgets', 'Performance and security hardening', 'Go-live support with optimization sprint'],
    timeline: '4-8 weeks delivery',
    cta: 'Get Started',
    urgency: 'High demand',
  },
  {
    name: 'Enterprise',
    tagline: 'Build a scalable SaaS platform engineered for growth.',
    price: 'Custom Quote',
    period: 'Architecture-first engagement',
    badge: 'Tailored Build',
    enterprise: true,
    description: 'For advanced products that require scalable infrastructure, deep security, and long-term technical partnership.',
    features: ['Everything in Business plan', 'Custom SaaS architecture design', 'Multi-tenant and role-based access', 'Audit logs, observability, and SLOs', 'Advanced compliance and security setup', 'Scalable cloud infrastructure strategy', 'Dedicated senior engineering support'],
    timeline: 'Custom timeline',
    cta: 'Book Consultation',
  },
];

const addOns = [
  ['Launch Your Mobile App Experience', 'Native-ready app layer to reach users on iOS and Android with seamless UX.', 'ETB 95,000'],
  ['Scale and Optimize for Performance', 'Upgrade cloud architecture for speed, reliability, and lower operational risk.', 'ETB 80,000'],
  ['Automate Your Business with AI', 'Automate high-friction workflows with practical AI assistants and smart triggers.', 'ETB 70,000'],
  ['Add Ongoing Growth Engineering', 'Retainer support for monthly improvements, monitoring, and roadmap execution.', 'From ETB 25,000'],
];

const faqs = [
  {
    q: 'Can pricing be customized to my business size?',
    a: 'Yes. Every plan is customizable based on your current stage, technical complexity, and team capacity. We shape scope around your priorities so you only pay for what creates real value.',
    points: ['Scope can be expanded or reduced by module', 'Integrations and automation are priced by complexity', 'You receive a transparent line-by-line quote before kickoff'],
  },
  {
    q: 'Do you offer phased payment terms?',
    a: 'Yes. Most projects use milestone-based billing so payment aligns with actual delivery progress. This keeps execution transparent and lowers risk for both sides.',
    points: ['Typical split: 40% kickoff, 40% build phase, 20% final launch', 'Each payment follows a review and approval checkpoint', 'Invoices and deliverables are mapped clearly per milestone'],
  },
  {
    q: 'What happens after launch?',
    a: 'After launch, we continue with structured support to keep performance stable and improve outcomes over time. You can choose maintenance-only support or an active growth package.',
    points: ['Bug fixes and reliability monitoring', 'Performance tuning and user-experience improvements', 'Ongoing roadmap implementation through monthly sprints'],
  },
];

const trustLogos = ['FinCore', 'MedAxis', 'RetailNova', 'CloudPort', 'NexaOps'];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(1);
  const [hoveredAddOn, setHoveredAddOn] = useState<number | null>(null);
  const [hoveredTerms, setHoveredTerms] = useState<number | null>(null);

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '120px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', paddingTop: '114px', paddingBottom: '70px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} style={{ position: 'relative' }}>
            <div style={{ position: 'absolute', top: '-40px', right: '0', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.11) 0%, rgba(37,99,235,0) 72%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-70px', left: '-50px', width: '250px', height: '250px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(245,96,42,0.1) 0%, rgba(245,96,42,0) 72%)', pointerEvents: 'none' }} />

            <div style={{ position: 'relative', display: 'grid', gridTemplateColumns: '1.2fr 0.8fr', gap: '24px', alignItems: 'start' }}>
              <div>
                <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', border: '1px solid #bfdbfe', background: '#eff6ff', padding: '7px 14px', color: '#1d4ed8', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                  <Sparkles size={14} /> Pricing
                </span>
                <h1 style={{ margin: '14px 0 0 0', fontSize: 'clamp(2.1rem, 4.6vw, 3.7rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08 }}>
                  Choose the right plan and <span style={{ color: '#f5602a' }}>launch with confidence.</span>
                </h1>
                <p style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '760px' }}>
                  Clear packages, clear scope, and clear delivery milestones. Pick a plan that fits your stage, then scale with add-ons as your needs evolve.
                </p>
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
                  <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Get Pricing Consultation <ArrowUpRight size={16} />
                  </button>
                  <button className="project-btn-secondary" style={{ border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                    Compare Plans <ArrowRight size={16} />
                  </button>
                </div>
              </div>

              <div style={{ display: 'grid', gap: '10px' }}>
                {[
                  ['From ETB 120,000', 'Project-based starting package'],
                  ['40 / 40 / 20', 'Milestone payment structure'],
                  ['Weekly Updates', 'Transparent sprint delivery'],
                ].map((item, idx) => (
                  <div key={item[0]} style={{ borderRadius: '14px', border: '1px solid #dbeafe', background: '#ffffff', padding: '12px', boxShadow: '0 8px 20px rgba(15,23,42,0.05)' }}>
                    <p style={{ margin: 0, fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a' }}>
                      {idx === 0 ? <Zap size={15} color="#2563eb" /> : <ShieldCheck size={15} color="#2563eb" />}
                      {item[0]}
                    </p>
                    <p style={{ margin: '5px 0 0 0', color: '#64748b', fontSize: '0.88rem', lineHeight: 1.5 }}>{item[1]}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '58px 0 16px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.9rem, 3vw, 2.6rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
            Pricing <span style={{ color: '#f5602a' }}>Plans</span>
          </h2>
          <p style={{ margin: '10px 0 16px 0', color: '#64748b', maxWidth: '760px', lineHeight: 1.7 }}>
            Organized packages to match startup, growth, and enterprise execution needs.
          </p>
          <div style={{ marginBottom: '14px', display: 'inline-flex', alignItems: 'center', borderRadius: '999px', border: '1px solid #fde68a', background: '#fffbeb', padding: '7px 12px', color: '#92400e', fontSize: '0.82rem', fontWeight: 700 }}>
            We only take a limited number of projects each month to ensure quality.
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(270px, 1fr))', gap: '14px' }}>
            {plans.map((plan, idx) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                whileHover={{ y: -8, scale: 1.01 }}
                onHoverStart={() => setHoveredPlan(idx)}
                onHoverEnd={() => setHoveredPlan((prev) => (prev === idx ? 1 : prev))}
                style={{
                  borderRadius: '20px',
                  border: hoveredPlan === idx
                    ? '1px solid rgba(96,165,250,0.55)'
                    : plan.enterprise
                      ? '1px solid #334155'
                      : plan.featured
                        ? '1px solid #2563eb'
                        : '1px solid #e2e8f0',
                  background:
                    hoveredPlan === idx
                      ? 'linear-gradient(155deg, #3b82f6 0%, #4f46e5 55%, #7c3aed 100%)'
                      : plan.enterprise
                        ? 'linear-gradient(160deg, #f8fafc 0%, #eef2f7 100%)'
                      : plan.featured
                        ? 'linear-gradient(160deg, #eef2ff 0%, #e0e7ff 100%)'
                        : '#ffffff',
                  boxShadow:
                    hoveredPlan === idx
                      ? '0 24px 46px rgba(59,130,246,0.35)'
                      : plan.featured
                        ? '0 16px 34px rgba(37,99,235,0.16)'
                        : '0 10px 24px rgba(15,23,42,0.05)',
                  padding: '20px',
                  color: hoveredPlan === idx ? '#ffffff' : '#0f172a',
                  position: 'relative',
                  overflow: 'hidden',
                  transition: 'all 0.3s ease',
                }}
              >
                {hoveredPlan === idx && (
                  <div
                    style={{
                      position: 'absolute',
                      top: '-70px',
                      right: '-60px',
                      width: '180px',
                      height: '180px',
                      borderRadius: '50%',
                      background: 'radial-gradient(circle, rgba(255,255,255,0.24) 0%, rgba(255,255,255,0) 72%)',
                      pointerEvents: 'none',
                    }}
                  />
                )}
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.08rem', fontWeight: 900, color: hoveredPlan === idx ? '#ffffff' : '#0f172a' }}>{plan.name}</h3>
                  <span style={{ borderRadius: '999px', padding: '5px 9px', fontSize: '0.72rem', fontWeight: 800, background: hoveredPlan === idx ? 'rgba(255,255,255,0.2)' : plan.enterprise ? '#e2e8f0' : plan.featured ? '#dbeafe' : '#f1f5f9', color: hoveredPlan === idx ? '#ffffff' : plan.featured ? '#1d4ed8' : '#334155', border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.28)' : 'none' }}>
                    {plan.badge}
                  </span>
                </div>
                {plan.urgency && (
                  <span style={{ marginTop: '8px', display: 'inline-flex', borderRadius: '999px', border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.3)' : '1px solid #fed7aa', background: hoveredPlan === idx ? 'rgba(255,255,255,0.1)' : '#fff7ed', color: hoveredPlan === idx ? '#ffffff' : '#c2410c', padding: '4px 8px', fontSize: '0.72rem', fontWeight: 800 }}>
                    {plan.urgency}
                  </span>
                )}
                <p style={{ margin: '10px 0 0 0', color: hoveredPlan === idx ? 'rgba(255,255,255,0.88)' : '#64748b', lineHeight: 1.65, minHeight: '74px' }}>{plan.description}</p>
                <motion.div
                  whileHover={{
                    x: [0, -1.5, 1.5, -1.5, 1.5, 0],
                    transition: { duration: 0.28, ease: 'easeInOut' },
                  }}
                  style={{
                    marginTop: '12px',
                    padding: '12px',
                    border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.3)' : '1px solid #bfdbfe',
                    borderRadius: '14px',
                    background: hoveredPlan === idx ? 'rgba(255,255,255,0.12)' : 'linear-gradient(140deg, #ffffff 0%, #eff6ff 100%)',
                    boxShadow: hoveredPlan === idx ? 'none' : '0 8px 18px rgba(37,99,235,0.12)',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <motion.p
                    whileHover={{
                      x: [0, -2.8, 2.8, -2.2, 2.2, -1.4, 1.4, 0],
                      transition: { duration: 0.42, ease: 'easeInOut' },
                    }}
                    animate={
                      hoveredPlan === idx
                        ? { x: [0, -2.8, 2.8, -2.2, 2.2, -1.4, 1.4, 0] }
                        : { x: 0 }
                    }
                    transition={{ duration: 0.42, ease: 'easeInOut' }}
                    style={{
                      margin: 0,
                      fontSize: 'clamp(2rem, 2.5vw, 2.3rem)',
                      fontWeight: 900,
                      letterSpacing: '-0.04em',
                      lineHeight: 1.05,
                      color: hoveredPlan === idx ? '#ffffff' : '#020617',
                      textShadow: hoveredPlan === idx ? '0 8px 24px rgba(2,6,23,0.35)' : '0 2px 8px rgba(15,23,42,0.08)',
                    }}
                  >
                    {plan.price}
                  </motion.p>
                  <p style={{ margin: '3px 0 0 0', color: hoveredPlan === idx ? 'rgba(255,255,255,0.82)' : '#64748b', fontSize: '0.84rem' }}>{plan.period}</p>
                </motion.div>
                <p style={{ margin: '8px 0 0 0', color: hoveredPlan === idx ? 'rgba(255,255,255,0.86)' : '#64748b', fontSize: '0.82rem', lineHeight: 1.5 }}>
                  Transparent process with regular updates and scalable architecture
                </p>
                <div style={{ marginTop: '11px', display: 'grid', gap: '8px' }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: hoveredPlan === idx ? 'rgba(255,255,255,0.93)' : '#334155', fontSize: '0.9rem' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '7px', background: hoveredPlan === idx ? '#ffffff' : '#0f172a', color: hoveredPlan === idx ? '#4f46e5' : '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Check size={13} />
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                  <span style={{ color: hoveredPlan === idx ? 'rgba(255,255,255,0.88)' : '#64748b', fontSize: '0.84rem' }}>
                    Estimated timeline: <strong style={{ color: hoveredPlan === idx ? '#ffffff' : '#0f172a' }}>{plan.timeline}</strong>
                  </span>
                </div>
                <motion.button
                  className="project-btn-primary"
                  whileHover={{ y: -1 }}
                  style={{
                    marginTop: '12px',
                    width: '100%',
                    border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                  background: hoveredPlan === idx ? 'rgba(255,255,255,0.18)' : plan.featured ? '#1d4ed8' : '#0f172a',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '14px 16px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                    transition: 'all 0.3s ease',
                    boxShadow: plan.featured ? '0 10px 22px rgba(37,99,235,0.28)' : '0 8px 18px rgba(15,23,42,0.2)',
                  }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = 'scale(1.02)';
                  e.currentTarget.style.boxShadow = plan.featured
                    ? '0 14px 30px rgba(37,99,235,0.35)'
                    : '0 12px 26px rgba(15,23,42,0.28)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = 'scale(1)';
                  e.currentTarget.style.boxShadow = plan.featured
                    ? '0 10px 22px rgba(37,99,235,0.28)'
                    : '0 8px 18px rgba(15,23,42,0.2)';
                }}
                >
                  {plan.cta}
                  <motion.span whileHover={{ x: 3 }} transition={{ duration: 0.2 }}>
                    <ArrowUpRight size={15} />
                  </motion.span>
                </motion.button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '32px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{
              borderRadius: '24px',
              border: '1px solid rgba(99,102,241,0.2)',
              background: 'linear-gradient(140deg, #f7f9ff 0%, #eef4ff 45%, #f5f0ff 100%)',
              padding: '26px',
              boxShadow: '0 24px 52px rgba(30,41,59,0.14)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '-120px', left: '-90px', width: '280px', height: '280px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.24) 0%, rgba(37,99,235,0) 72%)', pointerEvents: 'none' }} />
            <div style={{ position: 'absolute', bottom: '-140px', right: '-80px', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.22) 0%, rgba(124,58,237,0) 72%)', pointerEvents: 'none' }} />

            <h3 style={{ margin: 0, fontSize: 'clamp(1.5rem, 2.6vw, 2rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#0b1120', position: 'relative', zIndex: 1 }}>
              Trusted by startups and growing businesses
            </h3>
            <p style={{ margin: '8px 0 0 0', color: '#334155', fontSize: '0.96rem', lineHeight: 1.7, maxWidth: '780px', position: 'relative', zIndex: 1 }}>
              Proven delivery outcomes with consistent quality, transparency, and long-term reliability.
            </p>

            <div style={{ marginTop: '18px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '14px', position: 'relative', zIndex: 1 }}>
              {[
                ['20+', 'Projects Delivered', <TrendingUp key="s1" size={18} color="#ffffff" />],
                ['5+', 'Industries Served', <BriefcaseBusiness key="s2" size={18} color="#ffffff" />],
                ['100%', 'Project Completion', <ShieldCheck key="s3" size={18} color="#ffffff" />],
              ].map((stat) => (
                <motion.div
                  key={stat[0] as string}
                  whileHover={{ y: -6, scale: 1.02 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    borderRadius: '16px',
                    border: '1px solid rgba(99,102,241,0.28)',
                    background: 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(238,245,255,0.95) 55%, rgba(243,236,255,0.95) 100%)',
                    padding: '16px',
                    boxShadow: '0 16px 32px rgba(37,99,235,0.16)',
                    transition: 'all 0.3s ease',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 22px 40px rgba(79,70,229,0.24)';
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.45)';
                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(226,241,255,0.98) 50%, rgba(236,226,255,0.98) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 16px 32px rgba(37,99,235,0.16)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.28)';
                    e.currentTarget.style.background = 'linear-gradient(145deg, rgba(255,255,255,0.95) 0%, rgba(238,245,255,0.95) 55%, rgba(243,236,255,0.95) 100%)';
                  }}
                >
                  <div style={{ position: 'absolute', top: '-50px', right: '-40px', width: '140px', height: '140px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(59,130,246,0.22) 0%, rgba(59,130,246,0) 70%)', pointerEvents: 'none' }} />
                  <span
                    style={{
                      width: '42px',
                      height: '42px',
                      borderRadius: '999px',
                      background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                      color: '#ffffff',
                      display: 'inline-flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      boxShadow: '0 12px 22px rgba(59,130,246,0.38)',
                      position: 'relative',
                      zIndex: 1,
                      border: '1px solid rgba(255,255,255,0.35)',
                    }}
                  >
                    {stat[2]}
                  </span>
                  <p style={{ margin: '12px 0 0 0', fontSize: 'clamp(2rem, 4vw, 2.65rem)', fontWeight: 900, letterSpacing: '-0.05em', color: '#050b1a', lineHeight: 0.95, position: 'relative', zIndex: 1 }}>{stat[0]}</p>
                  <p style={{ margin: '6px 0 0 0', color: '#334155', fontSize: '0.9rem', fontWeight: 800, position: 'relative', zIndex: 1 }}>{stat[1]}</p>
                </motion.div>
              ))}
            </div>

            <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px', position: 'relative', zIndex: 1 }}>
              {trustLogos.map((logo) => (
                <motion.div
                  key={logo}
                  whileHover={{ y: -2, scale: 1.05 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  style={{
                    border: '1px solid rgba(99,102,241,0.2)',
                    borderRadius: '14px',
                    background: 'linear-gradient(140deg, rgba(255,255,255,0.82) 0%, rgba(231,241,255,0.72) 100%)',
                    backdropFilter: 'blur(5px)',
                    minHeight: '50px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#475569',
                    fontWeight: 800,
                    letterSpacing: '0.01em',
                    filter: 'grayscale(95%)',
                    boxShadow: '0 8px 16px rgba(30,41,59,0.08)',
                    transition: 'all 0.3s ease',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.filter = 'grayscale(0%)';
                    e.currentTarget.style.color = '#1e3a8a';
                    e.currentTarget.style.boxShadow = '0 14px 28px rgba(79,70,229,0.24)';
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.4)';
                    e.currentTarget.style.background = 'linear-gradient(140deg, rgba(255,255,255,0.94) 0%, rgba(214,232,255,0.9) 100%)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.filter = 'grayscale(95%)';
                    e.currentTarget.style.color = '#475569';
                    e.currentTarget.style.boxShadow = '0 8px 16px rgba(30,41,59,0.08)';
                    e.currentTarget.style.borderColor = 'rgba(99,102,241,0.2)';
                    e.currentTarget.style.background = 'linear-gradient(140deg, rgba(255,255,255,0.82) 0%, rgba(231,241,255,0.72) 100%)';
                  }}
                >
                  {logo}
                </motion.div>
              ))}
            </div>

            <motion.div
              whileHover={{ y: -4 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              style={{
                marginTop: '16px',
                borderRadius: '18px',
                border: '1px solid rgba(99,102,241,0.28)',
                background: 'linear-gradient(145deg, rgba(255,255,255,0.82) 0%, rgba(234,244,255,0.75) 50%, rgba(241,235,255,0.8) 100%)',
                backdropFilter: 'blur(8px)',
                padding: '18px',
                position: 'relative',
                boxShadow: '0 16px 30px rgba(30,41,59,0.14)',
                overflow: 'hidden',
                zIndex: 1,
              }}
            >
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(120deg, rgba(59,130,246,0.08) 0%, rgba(124,58,237,0.08) 100%)', pointerEvents: 'none' }} />
              <Quote size={112} color="rgba(67,56,202,0.16)" style={{ position: 'absolute', top: '-20px', right: '4px', pointerEvents: 'none' }} />
              <div style={{ width: '44px', height: '44px', borderRadius: '999px', padding: '2px', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', marginBottom: '12px', position: 'relative', zIndex: 1, boxShadow: '0 12px 24px rgba(79,70,229,0.32)' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '999px', background: 'linear-gradient(145deg, #e0ecff 0%, #ede9fe 100%)', border: '1px solid rgba(255,255,255,0.85)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Sparkles size={16} color="#4338ca" />
                </div>
              </div>
              <p style={{ margin: 0, color: '#1e293b', lineHeight: 1.9, fontSize: 'clamp(1.02rem, 2vw, 1.13rem)', maxWidth: '920px', position: 'relative', zIndex: 1, fontWeight: 600 }}>
                "NexTech delivered our platform faster than expected and gave us a scalable foundation we could confidently grow on."
              </p>
              <p style={{ margin: '11px 0 0 0', color: '#334155', fontSize: '0.86rem', fontWeight: 800, position: 'relative', zIndex: 1 }}>
                COO, Growth-stage SaaS Company
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '48px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: '22px',
              border: '1px solid rgba(99,102,241,0.2)',
              background: 'linear-gradient(145deg, #f7f9ff 0%, #eef4ff 46%, #f4f0ff 100%)',
              padding: '22px',
              boxShadow: '0 18px 40px rgba(15,23,42,0.12)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                  <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Power-Up Your Product</span>
                </h2>
                <p style={{ margin: '8px 0 0 0', color: '#334155', lineHeight: 1.7, maxWidth: '780px' }}>Turn a strong product into a growth engine with high-impact upgrades designed for revenue, speed, and automation.</p>
              </div>
              <span style={{ borderRadius: '999px', border: '1px solid rgba(99,102,241,0.35)', background: 'rgba(99,102,241,0.12)', color: '#3730a3', padding: '6px 12px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Upgrade Modules
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '12px', marginTop: '16px' }}>
              {addOns.map(([name, description, price], idx) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -5, scale: 1.02 }}
                  transition={{ duration: 0.3 }}
                  onHoverStart={() => setHoveredAddOn(idx)}
                  onHoverEnd={() => setHoveredAddOn(null)}
                  style={{
                    display: 'grid',
                    gap: '12px',
                    border: idx === 0 ? '1px solid rgba(59,130,246,0.42)' : '1px solid rgba(99,102,241,0.24)',
                    borderRadius: '16px',
                    background: idx === 0
                      ? 'linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(226,241,255,0.94) 100%)'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(241,245,255,0.88) 100%)',
                    padding: '14px',
                    boxShadow: idx === 0 ? '0 14px 30px rgba(37,99,235,0.2)' : '0 10px 22px rgba(15,23,42,0.08)',
                    cursor: 'pointer',
                    position: 'relative',
                    overflow: 'hidden',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(79,70,229,0.45)';
                    e.currentTarget.style.boxShadow = '0 16px 34px rgba(79,70,229,0.2)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = idx === 0 ? 'rgba(59,130,246,0.42)' : 'rgba(99,102,241,0.24)';
                    e.currentTarget.style.boxShadow = idx === 0 ? '0 14px 30px rgba(37,99,235,0.2)' : '0 10px 22px rgba(15,23,42,0.08)';
                  }}
                >
                  <motion.div
                    aria-hidden
                    initial={{ x: '-180%' }}
                    animate={hoveredAddOn === idx ? { x: ['-180%', '240%'] } : { x: '-180%' }}
                    transition={
                      hoveredAddOn === idx
                        ? { duration: 1.1, ease: 'linear', repeat: Infinity, repeatDelay: 0.15 }
                        : { duration: 0.2, ease: 'easeOut' }
                    }
                    style={{
                      position: 'absolute',
                      inset: '-25%',
                      width: '40%',
                      background: 'linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.55) 48%, rgba(255,255,255,0) 100%)',
                      transform: 'rotate(14deg)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        width: '32px',
                        height: '32px',
                        borderRadius: '10px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)',
                        color: '#fff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Sparkles size={14} />
                    </span>
                    <span style={{ fontWeight: 900, color: '#0f172a', lineHeight: 1.35 }}>{name}</span>
                  </div>
                  <p style={{ margin: 0, color: '#475569', fontSize: '0.88rem', lineHeight: 1.6 }}>{description}</p>
                  <span style={{ color: '#1d4ed8', fontWeight: 900, fontSize: '1.03rem', letterSpacing: '-0.01em' }}>{price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '50px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.75 }}
            style={{
              borderRadius: '22px',
              border: '1px solid rgba(99,102,241,0.22)',
              background: 'linear-gradient(130deg, #ffffff 0%, #f4f8ff 60%, #f3efff 100%)',
              padding: '22px',
              boxShadow: '0 18px 42px rgba(15,23,42,0.12)',
              position: 'relative',
              overflow: 'hidden',
            }}
          >
            <div style={{ position: 'absolute', top: '-90px', right: '-60px', width: '220px', height: '220px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.16) 0%, rgba(37,99,235,0) 70%)', pointerEvents: 'none' }} />
            <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Payment & <span style={{ color: '#f5602a' }}>Engagement Terms</span>
            </h2>
            <p style={{ margin: '8px 0 0 0', color: '#475569', lineHeight: 1.7, maxWidth: '860px', position: 'relative', zIndex: 1 }}>
              Clear terms, transparent checkpoints, and quality controls that keep delivery predictable from kickoff to launch.
            </p>
            <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '12px', position: 'relative', zIndex: 1 }}>
              {[
                ['Milestone Billing', '40% kickoff, 40% mid-delivery, 20% on launch', 'You only pay when clear progress is delivered.', ['Transparent invoices per milestone', 'Approval before each next phase']],
                ['Project Governance', 'Weekly reporting and sprint review checkpoints', 'Stay in control with full visibility each week.', ['Roadmap tracking and risk updates', 'Decision-ready demos every sprint']],
                ['Quality Assurance', 'Performance, security, and UX validation before go-live', 'Release with confidence, stability, and polish.', ['Multi-layer testing before launch', 'Security and UX checks included']],
              ].map((item, idx) => (
                <motion.div
                  key={item[0] as string}
                  whileHover={{ y: -5, scale: 1.03 }}
                  transition={{ duration: 0.3, ease: 'easeOut' }}
                  onHoverStart={() => setHoveredTerms(idx)}
                  onHoverEnd={() => setHoveredTerms(null)}
                  style={{
                    border: hoveredTerms === idx ? '1px solid rgba(79,70,229,0.45)' : '1px solid rgba(148,163,184,0.32)',
                    borderRadius: '16px',
                    background: hoveredTerms === idx
                      ? 'linear-gradient(145deg, rgba(255,255,255,0.98) 0%, rgba(229,241,255,0.94) 65%, rgba(239,233,255,0.95) 100%)'
                      : 'linear-gradient(145deg, rgba(255,255,255,0.92) 0%, rgba(248,250,255,0.9) 100%)',
                    padding: '14px',
                    boxShadow: hoveredTerms === idx ? '0 18px 32px rgba(79,70,229,0.2)' : '0 10px 20px rgba(15,23,42,0.06)',
                    position: 'relative',
                    overflow: 'hidden',
                    transition: 'all 0.3s ease',
                  }}
                >
                  <motion.div
                    aria-hidden
                    initial={{ x: '-170%' }}
                    animate={hoveredTerms === idx ? { x: ['-170%', '220%'] } : { x: '-170%' }}
                    transition={hoveredTerms === idx ? { duration: 1, ease: 'linear', repeat: Infinity, repeatDelay: 0.2 } : { duration: 0.2 }}
                    style={{
                      position: 'absolute',
                      inset: '-25%',
                      width: '35%',
                      background: 'linear-gradient(115deg, rgba(255,255,255,0) 0%, rgba(255,255,255,0.48) 52%, rgba(255,255,255,0) 100%)',
                      transform: 'rotate(13deg)',
                      pointerEvents: 'none',
                    }}
                  />
                  <p style={{ margin: 0, fontWeight: 900, display: 'flex', alignItems: 'center', gap: '8px', color: '#0f172a', fontSize: '1rem', position: 'relative', zIndex: 1 }}>
                    <span style={{ width: '24px', height: '24px', borderRadius: '8px', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 14px rgba(37,99,235,0.25)' }}>
                      <ShieldCheck size={13} />
                    </span>
                    {item[0]}
                  </p>
                  <p style={{ margin: '7px 0 0 0', color: '#334155', lineHeight: 1.6, fontSize: '0.9rem', fontWeight: 700, position: 'relative', zIndex: 1 }}>{item[1]}</p>
                  <p style={{ margin: '6px 0 0 0', color: '#64748b', lineHeight: 1.6, fontSize: '0.86rem', position: 'relative', zIndex: 1 }}>{item[2]}</p>
                  <div style={{ marginTop: '8px', display: 'grid', gap: '5px', position: 'relative', zIndex: 1 }}>
                    {(item[3] as string[]).map((point) => (
                      <div key={point} style={{ display: 'flex', alignItems: 'flex-start', gap: '7px', color: '#475569', fontSize: '0.82rem' }}>
                        <span style={{ width: '6px', height: '6px', borderRadius: '999px', background: '#6366f1', marginTop: '6px', flexShrink: 0 }} />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '50px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            style={{
              borderRadius: '20px',
              border: '1px solid #dbeafe',
              background: 'linear-gradient(150deg, #ffffff 0%, #f8fbff 100%)',
              padding: '20px',
              boxShadow: '0 14px 34px rgba(15,23,42,0.07)',
            }}
          >
            <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Pricing <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FAQs</span>
            </h2>
            <div style={{ marginTop: '12px', display: 'grid', gap: '10px' }}>
              {faqs.map((f, idx) => {
                const open = openFaq === idx;
                return (
                  <div
                    key={f.q}
                    style={{
                      border: open ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                      borderRadius: '12px',
                      overflow: 'hidden',
                      background: open ? '#ffffff' : '#f8fafc',
                      boxShadow: open ? '0 10px 26px rgba(37,99,235,0.12)' : 'none',
                    }}
                  >
                    <button
                      type="button"
                      onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))}
                      style={{
                        width: '100%',
                        border: 'none',
                        background: 'transparent',
                        textAlign: 'left',
                        padding: '13px 12px',
                        cursor: 'pointer',
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'center',
                        gap: '10px',
                      }}
                    >
                      <span style={{ fontWeight: 900, fontSize: '1rem', color: '#020617' }}>{f.q}</span>
                      <motion.span
                        animate={{ rotate: open ? 180 : 0, scale: open ? 1.08 : 1 }}
                        transition={{ duration: 0.25 }}
                        style={{
                          width: '30px',
                          height: '30px',
                          borderRadius: '10px',
                          background: open
                            ? 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)'
                            : 'linear-gradient(135deg, #e2e8f0 0%, #f8fafc 100%)',
                          color: open ? '#ffffff' : '#0f172a',
                          display: 'inline-flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: open ? '1px solid rgba(255,255,255,0.3)' : '1px solid #cbd5e1',
                          boxShadow: open ? '0 10px 20px rgba(79,70,229,0.35)' : '0 4px 10px rgba(15,23,42,0.08)',
                        }}
                      >
                        <ChevronDown size={18} strokeWidth={2.8} />
                      </motion.span>
                    </button>
                    <motion.div initial={false} animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                      <div style={{ padding: '0 12px 12px 12px' }}>
                        <div style={{ borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                          <p style={{ margin: 0, color: '#475569', lineHeight: 1.75, fontSize: '0.95rem' }}>{f.a}</p>
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
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

    </div>
  );
}
