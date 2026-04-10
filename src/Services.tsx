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
  /** Same springy ease as the home hero; durations/delays are tuned differently here */
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const heroTitle = { duration: 0.95, delay: 0.12, ease };
  const heroSubtitle = { duration: 0.88, delay: 0.38, ease };
  const heroCtas = { duration: 0.82, delay: 0.58, ease };
  const heroVisual = { duration: 1.2, delay: 0.28, ease };
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredServiceCard, setHoveredServiceCard] = useState<number | null>(null);

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '140px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', paddingTop: '114px', paddingBottom: '76px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '26px', alignItems: 'center' }}>
            <div>
              <motion.div initial={{ opacity: 0, y: 22 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.72, delay: 0, ease }}>
                <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', borderRadius: '999px', padding: '6px 14px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', marginBottom: '16px' }}>
                  <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2563eb' }} />
                  <span style={{ fontSize: '0.75rem', letterSpacing: '0.08em', fontWeight: 800, textTransform: 'uppercase', color: '#2563eb' }}>Our Services</span>
                </div>
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroTitle}
                style={{ ...titleBaseStyle, fontSize: 'clamp(2.2rem, 4.4vw, 3.5rem)' }}
              >
                Comprehensive technology services for{' '}
                <span style={accentOrangeStyle}>business growth</span> and{' '}
                <span style={accentBlueStyle}>modern scale.</span>
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 35 }}
                animate={{ opacity: 1, y: 0 }}
                transition={heroSubtitle}
                style={{ margin: '18px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '640px' }}
              >
                We help teams move from idea to fully-operational products with robust architecture, beautiful UX, and measurable performance outcomes.
              </motion.p>
              <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={heroCtas} style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '24px' }}>
                <button className="project-btn-primary" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Start a Project <ArrowUpRight size={16} />
                </button>
                <button className="project-btn-secondary" style={{ border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '12px', padding: '12px 20px', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '8px' }}>
                  Explore Process <ArrowRight size={16} />
                </button>
              </motion.div>
            </div>

            {/* RIGHT SIDE: Unique Visual Composition */}
            <motion.div
              initial={{ opacity: 0, x: 84 }}
              animate={{ opacity: 1, x: 0 }}
              transition={heroVisual}
              style={{ position: 'relative', minHeight: '460px', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '100%' }}
            >
              {/* Background glows */}
              <div style={{ position: 'absolute', right: '5%', top: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(20px)' }} />
              <div style={{ position: 'absolute', left: '5%', bottom: '5%', width: '300px', height: '300px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(249,115,22,0.10) 0%, rgba(255,255,255,0) 70%)', filter: 'blur(20px)' }} />

              {/* Main Image Plate */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02 }}
                transition={{ duration: 0.5, ease }}
                style={{ position: 'absolute', right: '8%', top: '20px', width: '280px', height: '360px', borderRadius: '24px', overflow: 'hidden', boxShadow: '0 24px 50px rgba(15,23,42,0.12)', border: '6px solid #ffffff', transform: 'rotate(5deg)', zIndex: 1, transformOrigin: 'center' }}
              >
                <img src="https://images.unsplash.com/photo-1551434678-e076c223a692?auto=format&fit=crop&w=800&q=80" alt="Team at work" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(15,23,42,0) 0%, rgba(15,23,42,0.6) 100%)' }} />
              </motion.div>

              {/* Secondary offset image */}
              <motion.div
                whileHover={{ rotate: 0, scale: 1.02, zIndex: 4 }}
                transition={{ duration: 0.5, ease }}
                style={{ position: 'absolute', left: '4%', bottom: '30px', width: '280px', height: '220px', borderRadius: '24px', overflow: 'hidden', boxShadow: '-10px 20px 40px rgba(15,23,42,0.15)', border: '6px solid #ffffff', transform: 'rotate(-4deg)', zIndex: 2 }}
              >
                <img src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&fit=crop&w=800&q=80" alt="Wireframing interface" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </motion.div>

              {/* Floating Badge 1 - Top Left */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: [-6, 6, -6] }}
                transition={{
                  opacity: { duration: 0.75, delay: 0.55, ease },
                  y: { duration: 4.5, repeat: Infinity, ease: 'easeInOut', delay: 0.55 },
                }}
                style={{ position: 'absolute', top: '15%', left: '0%', zIndex: 3, background: 'rgba(255,255,255,0.92)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '20px', boxShadow: '0 12px 30px rgba(15,23,42,0.08)', border: '1px solid rgba(255,255,255,1)', display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <div style={{ width: '44px', height: '44px', borderRadius: '14px', background: 'linear-gradient(135deg, #eff6ff 0%, #dbeafe 100%)', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Code2 size={22} strokeWidth={2.5} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '1.4rem', fontWeight: 900, color: '#0f172a', lineHeight: 1, letterSpacing: '-0.02em' }}>Elite</p>
                  <p style={{ margin: 0, fontSize: '0.75rem', fontWeight: 800, color: '#64748b', textTransform: 'uppercase', letterSpacing: '0.05em' }}>Engineering</p>
                </div>
              </motion.div>

              {/* Floating Badge 2 - Bottom Right */}
              <motion.div
                initial={{ opacity: 0, y: 18 }}
                animate={{ opacity: 1, y: [6, -6, 6] }}
                transition={{
                  opacity: { duration: 0.75, delay: 0.72, ease },
                  y: { duration: 5.5, repeat: Infinity, ease: 'easeInOut', delay: 1.15 },
                }}
                style={{ position: 'absolute', bottom: '15%', right: '-2%', zIndex: 3, background: '#0f172a', backdropFilter: 'blur(12px)', padding: '14px 22px', borderRadius: '20px', boxShadow: '0 16px 40px rgba(15,23,42,0.25)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '14px' }}
              >
                <div style={{ width: '42px', height: '42px', borderRadius: '50%', background: 'rgba(245,96,42,0.15)', color: '#f5602a', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ShieldCheck size={20} strokeWidth={2.5} />
                </div>
                <div>
                  <p style={{ margin: 0, fontSize: '0.85rem', fontWeight: 600, color: '#cbd5e1', lineHeight: 1.3 }}>Enterprise Grade</p>
                  <p style={{ margin: 0, fontSize: '1.05rem', fontWeight: 800, color: '#ffffff', letterSpacing: '0.01em' }}>Secure Scale</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '74px 0 20px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.h2
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.92, ease }}
            style={{ ...titleBaseStyle, marginBottom: '8px', fontSize: 'clamp(1.9rem, 3vw, 2.8rem)' }}
          >
            End-to-End Service <span style={accentBlueStyle}>Coverage</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.85, delay: 0.1, ease }}
            style={{ margin: '0 0 20px 0', color: '#64748b', maxWidth: '740px', lineHeight: 1.7 }}
          >
            Every service module includes strategy, implementation, and measurable outcomes.
          </motion.p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '16px' }}>
            {offerings.map((item, idx) => {
              const isHovered = hoveredServiceCard === idx;
              return (
                <motion.article
                  key={item.title}
                  initial={{ opacity: 0, y: 32, scale: 0.98 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.88, delay: idx * 0.11, ease }}
                  whileHover={{ y: -10, scale: 1.01 }}
                  onHoverStart={() => setHoveredServiceCard(idx)}
                  onHoverEnd={() => setHoveredServiceCard(null)}
                  style={{
                    background: isHovered
                      ? 'linear-gradient(140deg, #0f172a 0%, #1e293b 46%, #111827 100%)'
                      : 'linear-gradient(140deg, #ffffff 0%, #f8fbff 56%, #eef5ff 100%)',
                    border: isHovered ? '1px solid rgba(59,130,246,0.55)' : '1px solid #dbeafe',
                    borderRadius: '24px',
                    padding: '20px',
                    boxShadow: isHovered ? '0 26px 48px rgba(15,23,42,0.34)' : '0 14px 30px rgba(30,41,59,0.08)',
                    minHeight: '350px',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    position: 'relative',
                    overflow: 'hidden',
                    color: isHovered ? '#ffffff' : '#0f172a',
                  }}
                >
                  <div
                    style={{
                      position: 'absolute',
                      inset: 0,
                      background: isHovered
                        ? 'linear-gradient(135deg, rgba(37,99,235,0.28) 0%, rgba(15,23,42,0) 52%)'
                        : 'linear-gradient(135deg, rgba(37,99,235,0.08) 0%, rgba(15,23,42,0) 52%)',
                      pointerEvents: 'none',
                    }}
                  />
                  <div
                    style={{
                      position: 'absolute',
                      top: '-84px',
                      right: '-54px',
                      width: '220px',
                      height: '220px',
                      borderRadius: '50%',
                      background: isHovered
                        ? 'radial-gradient(circle, rgba(96,165,250,0.34) 0%, rgba(96,165,250,0) 72%)'
                        : 'radial-gradient(circle, rgba(147,197,253,0.38) 0%, rgba(147,197,253,0) 74%)',
                    }}
                  />
                  <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '3px', background: 'linear-gradient(90deg, #2563eb 0%, #7c3aed 100%)' }} />

                  <div style={{ position: 'relative', display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <div
                        style={{
                          width: '48px',
                          height: '48px',
                          borderRadius: '15px',
                          background: isHovered ? 'rgba(59,130,246,0.2)' : 'linear-gradient(135deg, #dbeafe 0%, #eff6ff 100%)',
                          color: isHovered ? '#bfdbfe' : '#1d4ed8',
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                          border: isHovered ? '1px solid rgba(96,165,250,0.4)' : '1px solid #bfdbfe',
                        }}
                      >
                        {item.icon}
                      </div>
                      <span style={{ fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: isHovered ? '#93c5fd' : '#1d4ed8' }}>
                        Service {String(idx + 1).padStart(2, '0')}
                      </span>
                    </div>
                    <span
                      style={{
                        borderRadius: '999px',
                        padding: '5px 10px',
                        fontSize: '0.72rem',
                        fontWeight: 800,
                        letterSpacing: '0.04em',
                        background: isHovered ? 'rgba(15,23,42,0.46)' : '#ffffff',
                        color: isHovered ? '#e2e8f0' : '#334155',
                        border: isHovered ? '1px solid rgba(148,163,184,0.46)' : '1px solid #bfdbfe',
                      }}
                    >
                      Active Scope
                    </span>
                  </div>

                  <h3 style={{ ...titleBaseStyle, position: 'relative', fontSize: '1.14rem', lineHeight: 1.24, color: isHovered ? '#f8fafc' : '#020617' }}>{item.title}</h3>
                  <p style={{ position: 'relative', margin: '10px 0 14px 0', color: isHovered ? '#f1f5f9' : '#334155', lineHeight: 1.68, fontSize: '0.95rem', fontWeight: 500, minHeight: '78px' }}>{item.desc}</p>

                  <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px', marginTop: 'auto' }}>
                    {item.points.map((p) => (
                      <span
                        key={p}
                        style={{
                          display: 'inline-flex',
                          alignItems: 'center',
                          borderRadius: '999px',
                          padding: '6px 10px',
                          background: isHovered ? 'rgba(30,41,59,0.62)' : 'rgba(255,255,255,0.86)',
                          border: isHovered ? '1px solid rgba(148,163,184,0.38)' : '1px solid #dbeafe',
                          color: isHovered ? '#f8fafc' : '#1e293b',
                          fontSize: '0.82rem',
                          fontWeight: 600,
                          lineHeight: 1.2,
                        }}
                      >
                        {p}
                      </span>
                    ))}
                  </div>

                  <motion.div
                    initial={false}
                    animate={{ opacity: isHovered ? 1 : 0.9, y: isHovered ? 0 : 2 }}
                    transition={{ duration: 0.2 }}
                    style={{
                      marginTop: '16px',
                      borderTop: isHovered ? '1px solid rgba(96,165,250,0.4)' : '1px solid #bfdbfe',
                      paddingTop: '12px',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}
                  >
                    <span style={{ fontSize: '0.84rem', fontWeight: 800, color: isHovered ? '#e2e8f0' : '#475569' }}>Delivery-ready track</span>
                    <span style={{ fontSize: '0.86rem', fontWeight: 800, color: isHovered ? '#93c5fd' : '#2563eb' }}>Explore</span>
                  </motion.div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '62px 0 14px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ duration: 1.0, ease }}
            style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px', boxShadow: '0 14px 34px rgba(15,23,42,0.05)' }}
          >
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
                  initial={{ opacity: 0, x: -36 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ duration: 0.82, delay: idx * 0.12, ease }}
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

      {/* ── ELITE SECTION: ARCHITECTURE & INDUSTRIES ── */}
      <section style={{ padding: '80px 0 40px', position: 'relative' }}>
        {/* subtle background mesh */}
        <div style={{ position: 'absolute', top: '10%', right: '-10%', width: '40%', height: '80%', background: 'radial-gradient(circle, rgba(59,130,246,0.03) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />

        <div className="container" style={{ maxWidth: '1240px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(480px, 1fr))', gap: '32px', alignItems: 'stretch' }}>

            {/* LEFT CARD: TECH STACK - DARK ELITE THEME */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, ease }}
              style={{
                background: '#0b1120', // deep rich navy
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '32px',
                overflow: 'hidden',
                boxShadow: '0 24px 50px rgba(0,0,0,0.15)',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              <div style={{ position: 'relative', height: '260px' }}>
                <img
                  src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1400&q=80"
                  alt="Technology architecture"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                {/* Sleek fade out to dark at the bottom */}
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(11,17,32,0.1) 0%, #0b1120 100%)' }} />

                <div style={{ position: 'absolute', left: '32px', right: '32px', bottom: '16px' }}>
                  <h3 style={{ ...titleOnDarkStyle, fontSize: '2rem', letterSpacing: '-0.03em' }}>
                    Tech Stack & <span style={{ background: 'linear-gradient(135deg, #F97316 0%, #ea580c 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Architecture</span>
                  </h3>
                  <p style={{ margin: '8px 0 0 0', color: '#94a3b8', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 400 }}>
                    Scalable foundations selected for performance, maintainability, and growth.
                  </p>
                </div>
              </div>

              <div style={{ padding: '0 32px 32px 32px', display: 'flex', flexDirection: 'column', flex: 1 }}>

                {/* The 4 core pillars */}
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '12px', marginTop: '16px' }}>
                  {[
                    ['Frontend', <LayoutPanelTop size={18} color="#60a5fa" />],
                    ['Backend', <Database size={18} color="#c084fc" />],
                    ['Cloud', <Cloud size={18} color="#34d399" />],
                    ['Automation', <Workflow size={18} color="#f87171" />],
                  ].map(([name, icon]) => (
                    <motion.div
                      key={String(name)}
                      whileHover={{ scale: 1.03, backgroundColor: 'rgba(255,255,255,0.06)', borderColor: 'rgba(255,255,255,0.15)' }}
                      style={{
                        border: '1px solid rgba(255,255,255,0.06)',
                        borderRadius: '16px',
                        padding: '16px',
                        background: 'rgba(255,255,255,0.03)',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '12px',
                        cursor: 'default',
                        transition: 'border-color 0.3s ease'
                      }}
                    >
                      <div style={{ padding: '8px', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', display: 'flex', boxShadow: '0 4px 12px rgba(0,0,0,0.2)' }}>
                        {icon as ReactNode}
                      </div>
                      <span style={{ fontWeight: 700, fontSize: '0.95rem', color: '#f8fafc', letterSpacing: '0.02em' }}>{name}</span>
                    </motion.div>
                  ))}
                </div>

                <div style={{ marginTop: '32px', display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '24px', alignItems: 'start' }}>

                  {/* Blueprint details */}
                  <div>
                    <h4 style={{ ...titleOnDarkStyle, fontSize: '1.2rem', letterSpacing: '-0.02em' }}>
                      A blueprint that <span style={{ color: '#60a5fa' }}>scales with you</span>
                    </h4>
                    <p style={{ margin: '12px 0 0 0', color: '#94a3b8', lineHeight: 1.65, fontSize: '0.95rem' }}>
                      We design systems for clarity and change: clean modules, secure boundaries, and observability built-in—so teams ship faster without breaking production.
                    </p>

                    <div style={{ marginTop: '24px', display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                      {['React / Next.js', 'Node / .NET', 'Postgres', 'Redis', 'Docker', 'CI/CD'].map((tag) => (
                        <span key={tag} style={{
                          borderRadius: '999px', padding: '6px 14px', border: '1px solid rgba(96,165,250,0.3)',
                          background: 'rgba(59,130,246,0.1)', color: '#bfdbfe', fontSize: '0.78rem', fontWeight: 600, letterSpacing: '0.02em',
                        }}>
                          {tag}
                        </span>
                      ))}
                    </div>

                    <div style={{ marginTop: '28px', display: 'grid', gap: '12px' }}>
                      {[
                        'Clear API contracts + versioning',
                        'Role-based access & audit trails',
                        'Sub-50ms caching architectures',
                      ].map((item) => (
                        <div key={item} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start', color: '#cbd5e1', fontSize: '0.88rem' }}>
                          <span style={{ marginTop: '3px', color: '#60a5fa', flexShrink: 0 }}><ShieldCheck size={16} /></span>
                          <span style={{ lineHeight: 1.5 }}>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  {/* Sidebar boxes in dark mode */}
                  <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                    <div style={{ border: '1px solid rgba(255,255,255,0.08)', borderRadius: '20px', background: 'rgba(255,255,255,0.02)', padding: '20px' }}>
                      <p style={{ margin: 0, fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800, color: '#f8fafc' }}>
                        Typical deliverables
                      </p>
                      <div style={{ display: 'grid', gap: '12px', marginTop: '16px' }}>
                        {['Architecture diagram', 'Data model + migrations', 'API endpoints', 'Deployment pipeline'].map((d) => (
                          <div key={d} style={{ display: 'flex', gap: '10px', alignItems: 'center', color: '#94a3b8', fontSize: '0.88rem' }}>
                            <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#60a5fa', flexShrink: 0, boxShadow: '0 0 8px #60a5fa' }} />
                            <span style={{ lineHeight: 1.45 }}>{d}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ border: '1px solid rgba(96,165,250,0.3)', borderRadius: '20px', background: 'linear-gradient(145deg, rgba(37,99,235,0.1) 0%, rgba(11,17,32,0.5) 100%)', padding: '20px', flex: 1, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                      <p style={{ margin: 0, fontWeight: 800, color: '#f8fafc', letterSpacing: '-0.02em', fontSize: '1rem' }}>Get a recommendation</p>
                      <motion.button style={{
                        marginTop: '16px', border: 'none', background: '#ffffff', color: '#0f172a', borderRadius: '12px', padding: '12px',
                        fontWeight: 800, display: 'flex', alignItems: 'center', gap: '8px', width: '100%', justifyContent: 'center', cursor: 'pointer'
                      }}
                        whileHover={{ scale: 1.04 }}
                        whileTap={{ scale: 0.96 }}
                      >
                        View architectures <ArrowRight size={16} />
                      </motion.button>
                    </div>
                  </div>

                </div>
              </div>
            </motion.div>

            {/* RIGHT CARD: INDUSTRIES - ELEGANT LIGHT THEME */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.2, ease }}
              style={{ display: 'grid', gap: '0', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '32px', overflow: 'hidden', boxShadow: '0 24px 50px rgba(15,23,42,0.06)' }}
            >
              {/* Header Image Area */}
              <div style={{ position: 'relative', height: '200px' }}>
                <img
                  src="https://images.unsplash.com/photo-1521791136064-7986c2920216?auto=format&fit=crop&w=1200&q=80"
                  alt="Industries and teams"
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(0deg, rgba(15,23,42,0.8) 0%, rgba(15,23,42,0.1) 100%)' }} />
                <h3 style={{ ...titleOnDarkStyle, position: 'absolute', left: '32px', bottom: '24px', fontSize: '2rem' }}>
                  Industries We <span style={{ color: '#F97316' }}>Serve</span>
                </h3>
              </div>

              {/* Grid content */}
              <div style={{ padding: '32px', background: '#ffffff', display: 'flex', flexDirection: 'column', flex: 1 }}>
                <p style={{ margin: '0 0 24px 0', color: '#475569', lineHeight: 1.6, fontSize: '1.05rem', fontWeight: 500 }}>
                  Domain-specific delivery with strict compliance, extreme reliability, and intelligent workflow alignment.
                </p>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '16px' }}>
                  {industries.slice(0, 4).map((industry) => (
                    <motion.div
                      key={industry.name}
                      whileHover="hover"
                      style={{
                        borderRadius: '20px',
                        border: '1px solid #f1f5f9',
                        overflow: 'hidden',
                        background: '#ffffff',
                        boxShadow: '0 4px 12px rgba(15,23,42,0.03)',
                        cursor: 'default'
                      }}
                    >
                      <div style={{ position: 'relative', height: '110px', overflow: 'hidden' }}>
                        <motion.img
                          variants={{ hover: { scale: 1.08 } }}
                          transition={{ duration: 0.6, ease }}
                          src={industry.image}
                          alt={industry.name}
                          style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                        />
                        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(180deg, rgba(2,6,23,0) 0%, rgba(2,6,23,0.3) 100%)', pointerEvents: 'none' }} />
                      </div>
                      <motion.div
                        variants={{ hover: { backgroundColor: '#f8fafc' } }}
                        style={{ padding: '16px', transition: 'background-color 0.3s ease' }}
                      >
                        <p style={{ margin: 0, color: '#0f172a', fontSize: '0.95rem', fontWeight: 800, lineHeight: 1.3, letterSpacing: '-0.01em' }}>
                          {industry.name}
                        </p>
                        <p style={{ margin: '4px 0 0 0', color: '#64748b', fontSize: '0.8rem', lineHeight: 1.5 }}>
                          {industry.detail}
                        </p>
                      </motion.div>
                    </motion.div>
                  ))}
                </div>

                {/* Footer rationale logic replacing old grey box */}
                <div style={{ marginTop: 'auto', background: 'linear-gradient(140deg, #f8fafc 0%, #ffffff 100%)', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}>
                  <h4 style={{ ...titleBaseStyle, fontSize: '1.05rem', color: '#0f172a' }}>
                    Why this model <span style={{ color: '#2563eb' }}>works</span>
                  </h4>
                  <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(130px, 1fr))', gap: '12px', marginTop: '16px' }}>
                    {['Lower technical debt', 'Faster release cycles', 'Elastic scaling'].map((point) => (
                      <div key={point} style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.82rem', fontWeight: 700 }}>
                        <div style={{ width: '22px', height: '22px', borderRadius: '50%', background: '#eff6ff', border: '1px solid #bfdbfe', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <ShieldCheck size={12} strokeWidth={3} />
                        </div>
                        {point}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      <section style={{ padding: '62px 0 12px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.95, ease }}
            style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}
          >
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
                <motion.div
                  key={m[0]}
                  initial={{ opacity: 0, y: 22, scale: 0.99 }}
                  whileInView={{ opacity: 1, y: 0, scale: 1 }}
                  viewport={{ once: true, margin: '-30px' }}
                  transition={{ duration: 0.78, delay: idx * 0.1, ease }}
                  style={{ border: '1px solid #e2e8f0', borderRadius: '14px', background: '#f8fafc', padding: '14px' }}
                >
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
          <motion.div
            initial={{ opacity: 0, y: 26 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-50px' }}
            transition={{ duration: 0.95, ease }}
            style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '24px' }}
          >
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
                    transition={{ duration: 0.68, delay: idx * 0.09, ease }}
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
            initial={{ opacity: 0, y: 32 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 1.05, ease }}
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
