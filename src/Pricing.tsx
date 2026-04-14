import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter Build',
    price: 'From ETB 120,000',
    period: 'Flexible milestone-based payments available',
    badge: 'Best for MVP',
    description: 'Perfect for startups launching an MVP quickly with essential features.',
    features: ['Discovery workshop + planning', 'Responsive UI/UX design', 'Core backend & database setup', 'Basic deployment'],
    timeline: '2-4 weeks delivery',
    cta: 'Start Your Project',
  },
  {
    name: 'Growth Platform',
    price: 'From ETB 280,000',
    period: 'Flexible milestone-based payments available',
    badge: 'Most Popular',
    featured: true,
    description: 'Built for growing businesses that need automation, integrations, and scalability.',
    features: ['Everything in Starter', 'Advanced workflow automation', 'Third-party integrations (payments, APIs)', 'Admin dashboard', 'Performance optimization'],
    timeline: '4-8 weeks delivery',
    cta: 'Get Started',
  },
  {
    name: 'Enterprise Scale',
    price: 'Custom Quote',
    period: 'Flexible milestone-based payments available',
    badge: 'For complex systems',
    description: 'Designed for high-scale systems requiring advanced architecture, security, and long-term support.',
    features: ['Everything in Growth', 'Microservices architecture', 'Role-based access & security', 'Audit logs & monitoring', 'Dedicated support'],
    timeline: 'Custom timeline',
    cta: 'Request Consultation',
  },
];

const addOns = [
  ['Mobile App Package', 'ETB 95,000'],
  ['Cloud Migration & Optimization', 'ETB 80,000'],
  ['AI Automation Workflow', 'ETB 70,000'],
  ['Monthly Support Retainer', 'From ETB 25,000'],
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
                  border: hoveredPlan === idx ? '1px solid rgba(96,165,250,0.55)' : plan.featured ? '1px solid #2563eb' : '1px solid #e2e8f0',
                  background:
                    hoveredPlan === idx
                      ? 'linear-gradient(155deg, #3b82f6 0%, #4f46e5 55%, #7c3aed 100%)'
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
                  <span style={{ borderRadius: '999px', padding: '5px 9px', fontSize: '0.72rem', fontWeight: 800, background: hoveredPlan === idx ? 'rgba(255,255,255,0.2)' : plan.featured ? '#dbeafe' : '#f1f5f9', color: hoveredPlan === idx ? '#ffffff' : plan.featured ? '#1d4ed8' : '#334155', border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.28)' : 'none' }}>
                    {plan.badge}
                  </span>
                </div>
                <p style={{ margin: '10px 0 0 0', color: hoveredPlan === idx ? 'rgba(255,255,255,0.88)' : '#64748b', lineHeight: 1.65, minHeight: '74px' }}>{plan.description}</p>
                <motion.div
                  whileHover={{
                    x: [0, -1.5, 1.5, -1.5, 1.5, 0],
                    transition: { duration: 0.28, ease: 'easeInOut' },
                  }}
                  style={{
                    marginTop: '12px',
                    padding: '12px',
                    border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.3)' : '1px solid #e2e8f0',
                    borderRadius: '14px',
                    background: hoveredPlan === idx ? 'rgba(255,255,255,0.12)' : '#ffffff',
                  }}
                >
                  <p
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
                  </p>
                  <p style={{ margin: '3px 0 0 0', color: hoveredPlan === idx ? 'rgba(255,255,255,0.82)' : '#64748b', fontSize: '0.84rem' }}>{plan.period}</p>
                </motion.div>
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
                <button
                  className="project-btn-primary"
                  style={{
                    marginTop: '12px',
                    width: '100%',
                    border: hoveredPlan === idx ? '1px solid rgba(255,255,255,0.4)' : '1px solid transparent',
                    background: hoveredPlan === idx ? 'rgba(255,255,255,0.18)' : '#0f172a',
                    color: '#fff',
                    borderRadius: '12px',
                    padding: '12px 14px',
                    fontWeight: 800,
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    gap: '8px',
                    cursor: 'pointer',
                  }}
                >
                  {plan.cta} <ArrowUpRight size={15} />
                </button>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 0 10px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
            style={{ borderRadius: '20px', border: '1px solid #dbeafe', background: '#ffffff', padding: '20px', boxShadow: '0 12px 30px rgba(15,23,42,0.06)' }}
          >
            <p style={{ margin: 0, fontSize: '1rem', fontWeight: 800, color: '#0f172a' }}>Trusted by startups and growing businesses</p>
            <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '10px' }}>
              {trustLogos.map((logo) => (
                <div key={logo} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc', minHeight: '44px', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#475569', fontWeight: 700, letterSpacing: '0.01em' }}>
                  {logo}
                </div>
              ))}
            </div>
            <div style={{ marginTop: '14px', borderRadius: '14px', border: '1px solid #e2e8f0', background: '#f8fafc', padding: '14px' }}>
              <p style={{ margin: 0, color: '#334155', lineHeight: 1.7, fontSize: '0.95rem' }}>
                "NexTech delivered our platform faster than expected and gave us a scalable foundation we could confidently grow on."
              </p>
              <p style={{ margin: '8px 0 0 0', color: '#64748b', fontSize: '0.88rem', fontWeight: 700 }}>
                COO, Growth-stage SaaS Company
              </p>
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '24px 0 8px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ borderRadius: '22px', border: '1px solid #dbeafe', background: 'linear-gradient(140deg, #eff6ff 0%, #ffffff 100%)', padding: '24px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Need something unique?
            </h2>
            <p style={{ margin: '8px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '800px' }}>
              We design and build custom solutions tailored to your business needs.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
              <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Talk to Us <ArrowUpRight size={16} />
              </button>
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
            transition={{ duration: 0.7 }}
            style={{
              borderRadius: '20px',
              border: '1px solid #dbeafe',
              background: 'linear-gradient(150deg, #ffffff 0%, #f8fbff 100%)',
              padding: '20px',
              boxShadow: '0 14px 34px rgba(15,23,42,0.06)',
            }}
          >
            <div style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
              <div>
                <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
                  Optional <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Add-Ons</span>
                </h2>
                <p style={{ margin: '8px 0 0 0', color: '#64748b', lineHeight: 1.7 }}>Extend any plan with specialized modules based on your priorities.</p>
              </div>
              <span style={{ borderRadius: '999px', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', padding: '6px 12px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                Flexible Upgrades
              </span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px', marginTop: '14px' }}>
              {addOns.map(([name, price], idx) => (
                <motion.div
                  key={name}
                  whileHover={{ y: -4, scale: 1.01 }}
                  transition={{ duration: 0.2 }}
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    gap: '12px',
                    border: idx === 0 ? '1px solid #93c5fd' : '1px solid #e2e8f0',
                    borderRadius: '14px',
                    background: idx === 0 ? 'linear-gradient(145deg, #ffffff 0%, #eff6ff 100%)' : '#ffffff',
                    padding: '12px',
                    alignItems: 'center',
                    boxShadow: idx === 0 ? '0 10px 24px rgba(37,99,235,0.14)' : '0 8px 18px rgba(15,23,42,0.04)',
                    cursor: 'pointer',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span
                      style={{
                        width: '28px',
                        height: '28px',
                        borderRadius: '9px',
                        background: idx === 0 ? '#2563eb' : '#0f172a',
                        color: '#fff',
                        display: 'inline-flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        flexShrink: 0,
                      }}
                    >
                      <Sparkles size={14} />
                    </span>
                    <span style={{ fontWeight: 800, color: '#0f172a' }}>{name}</span>
                  </div>
                  <span style={{ color: '#1d4ed8', fontWeight: 900, fontSize: '1rem', letterSpacing: '-0.01em' }}>{price}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '50px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.75 }} style={{ borderRadius: '20px', border: '1px solid #dbeafe', background: 'linear-gradient(130deg, #ffffff 0%, #f8fbff 100%)', padding: '20px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Payment & <span style={{ color: '#f5602a' }}>Engagement Terms</span>
            </h2>
            <div style={{ marginTop: '12px', display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
              {[
                ['Milestone Billing', '40% kickoff, 40% mid-delivery, 20% on launch'],
                ['Project Governance', 'Weekly reporting and sprint review checkpoints'],
                ['Quality Assurance', 'Performance, security, and UX validation before go-live'],
              ].map((item) => (
                <div key={item[0]} style={{ border: '1px solid #e2e8f0', borderRadius: '14px', background: '#ffffff', padding: '12px' }}>
                  <p style={{ margin: 0, fontWeight: 800, display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <ShieldCheck size={15} color="#2563eb" /> {item[0]}
                  </p>
                  <p style={{ margin: '6px 0 0 0', color: '#64748b', lineHeight: 1.6, fontSize: '0.9rem' }}>{item[1]}</p>
                </div>
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
                      <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={16} />
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
