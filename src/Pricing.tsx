import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, ArrowUpRight, Check, ChevronDown, ShieldCheck, Sparkles, Zap } from 'lucide-react';

const plans = [
  {
    name: 'Starter Build',
    price: 'ETB 120,000',
    period: 'per project',
    badge: 'Best for MVP',
    description: 'A focused package for startups and small teams launching fast with essential features.',
    features: ['Discovery workshop + scope definition', 'Responsive web app UI', 'Core backend + database setup', 'Basic QA and launch support'],
    timeline: '4-6 weeks',
  },
  {
    name: 'Growth Platform',
    price: 'ETB 280,000',
    period: 'per project',
    badge: 'Most Popular',
    featured: true,
    description: 'A complete product delivery plan for growing businesses that need reliability and room to scale.',
    features: ['Everything in Starter', 'Advanced workflow automation', 'Third-party integrations + payment flow', 'Analytics dashboard + optimization setup'],
    timeline: '8-12 weeks',
  },
  {
    name: 'Enterprise Scale',
    price: 'ETB 520,000+',
    period: 'custom scope',
    badge: 'For complex systems',
    description: 'For high-scale operations requiring robust architecture, security controls, and long-term support.',
    features: ['Everything in Growth', 'Microservice-ready architecture', 'Role-based security + audit trails', 'SLA-backed support and training'],
    timeline: '12-20+ weeks',
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
    a: 'Yes. Each package can be adjusted based on your workflow, integrations, and expected growth. We always share a transparent scope and cost breakdown before work starts.',
  },
  {
    q: 'Do you offer phased payment terms?',
    a: 'Yes. Most projects are split into milestone-based payments so you can review progress and approve each phase with confidence.',
  },
  {
    q: 'What happens after launch?',
    a: 'We provide post-launch monitoring, optimization, and support retainers. You can choose a lightweight maintenance plan or a growth-focused monthly package.',
  },
];

export default function Pricing() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '120px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', paddingTop: '114px', paddingBottom: '70px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', border: '1px solid #bfdbfe', background: '#eff6ff', padding: '7px 14px', color: '#1d4ed8', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
              <Sparkles size={14} /> Pricing
            </span>
            <h1 style={{ margin: '14px 0 0 0', fontSize: 'clamp(2.1rem, 4.6vw, 3.7rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.08 }}>
              Transparent pricing in <span style={{ color: '#f5602a' }}>ETB</span> for <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>modern service delivery.</span>
            </h1>
            <p style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '760px' }}>
              Choose a package that matches your goals today and scales with your business tomorrow. Every plan includes delivery structure, quality checks, and launch guidance.
            </p>
            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '20px' }}>
              <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Get Pricing Consultation <ArrowUpRight size={16} />
              </button>
              <button className="project-btn-secondary" style={{ border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 20px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Compare Plans <ArrowRight size={16} />
              </button>
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

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
            {plans.map((plan, idx) => (
              <motion.article
                key={plan.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: idx * 0.06 }}
                style={{
                  borderRadius: '20px',
                  border: plan.featured ? '1px solid #2563eb' : '1px solid #e2e8f0',
                  background: plan.featured ? 'linear-gradient(160deg, #ffffff 0%, #eff6ff 100%)' : '#ffffff',
                  boxShadow: plan.featured ? '0 16px 34px rgba(37,99,235,0.16)' : '0 10px 24px rgba(15,23,42,0.05)',
                  padding: '20px',
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px' }}>
                  <h3 style={{ margin: 0, fontSize: '1.08rem', fontWeight: 900 }}>{plan.name}</h3>
                  <span style={{ borderRadius: '999px', padding: '5px 9px', fontSize: '0.72rem', fontWeight: 800, background: plan.featured ? '#dbeafe' : '#f1f5f9', color: plan.featured ? '#1d4ed8' : '#334155' }}>
                    {plan.badge}
                  </span>
                </div>
                <p style={{ margin: '10px 0 0 0', color: '#64748b', lineHeight: 1.65, minHeight: '74px' }}>{plan.description}</p>
                <div style={{ marginTop: '12px', padding: '12px', border: '1px solid #e2e8f0', borderRadius: '14px', background: '#ffffff' }}>
                  <p style={{ margin: 0, fontSize: '1.55rem', fontWeight: 900, letterSpacing: '-0.03em' }}>{plan.price}</p>
                  <p style={{ margin: '3px 0 0 0', color: '#64748b', fontSize: '0.84rem' }}>{plan.period}</p>
                </div>
                <div style={{ marginTop: '11px', display: 'grid', gap: '8px' }}>
                  {plan.features.map((f) => (
                    <div key={f} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', fontSize: '0.9rem' }}>
                      <span style={{ width: '20px', height: '20px', borderRadius: '7px', background: '#0f172a', color: '#fff', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <Check size={13} />
                      </span>
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
                <div style={{ marginTop: '12px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid #e2e8f0', paddingTop: '10px' }}>
                  <span style={{ color: '#64748b', fontSize: '0.84rem' }}>Estimated timeline: <strong style={{ color: '#0f172a' }}>{plan.timeline}</strong></span>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }} style={{ borderRadius: '20px', border: '1px solid #e2e8f0', background: '#ffffff', padding: '20px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Optional <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Add-Ons</span>
            </h2>
            <p style={{ margin: '8px 0 14px 0', color: '#64748b', lineHeight: 1.7 }}>Extend any plan with specialized modules based on your priorities.</p>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, minmax(0, 1fr))', gap: '10px' }}>
              {addOns.map(([name, price]) => (
                <div key={name} style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc', padding: '12px' }}>
                  <span style={{ fontWeight: 700 }}>{name}</span>
                  <span style={{ color: '#1d4ed8', fontWeight: 800 }}>{price}</span>
                </div>
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
          <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ borderRadius: '20px', border: '1px solid #e2e8f0', background: '#ffffff', padding: '20px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.55rem, 2.4vw, 2.2rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Pricing <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>FAQs</span>
            </h2>
            <div style={{ marginTop: '12px', display: 'grid', gap: '10px' }}>
              {faqs.map((f, idx) => {
                const open = openFaq === idx;
                return (
                  <div key={f.q} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', overflow: 'hidden', background: open ? '#ffffff' : '#f8fafc' }}>
                    <button type="button" onClick={() => setOpenFaq((prev) => (prev === idx ? null : idx))} style={{ width: '100%', border: 'none', background: 'transparent', textAlign: 'left', padding: '12px', cursor: 'pointer', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontWeight: 800 }}>{f.q}</span>
                      <motion.span animate={{ rotate: open ? 180 : 0 }} transition={{ duration: 0.2 }}>
                        <ChevronDown size={16} />
                      </motion.span>
                    </button>
                    <motion.div initial={false} animate={open ? { height: 'auto', opacity: 1 } : { height: 0, opacity: 0 }} transition={{ duration: 0.25 }} style={{ overflow: 'hidden' }}>
                      <p style={{ margin: 0, padding: '0 12px 12px 12px', color: '#64748b', lineHeight: 1.7 }}>{f.a}</p>
                    </motion.div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '56px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} style={{ borderRadius: '22px', border: '1px solid #dbeafe', background: 'linear-gradient(140deg, #eff6ff 0%, #ffffff 100%)', padding: '24px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.6rem, 2.5vw, 2.25rem)', fontWeight: 900, letterSpacing: '-0.03em' }}>
              Need a custom quote in <span style={{ color: '#f5602a' }}>ETB</span>?
            </h2>
            <p style={{ margin: '8px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '800px' }}>
              Tell us your required modules, timeline, and integrations. We will send a clear proposal with detailed scope and transparent pricing.
            </p>
            <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', marginTop: '16px' }}>
              <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Request Custom Proposal <ArrowUpRight size={16} />
              </button>
              <button className="project-btn-secondary" style={{ border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 18px', fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px' }}>
                Schedule Discovery Call <Zap size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
