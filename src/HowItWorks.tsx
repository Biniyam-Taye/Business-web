import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Compass,
  FlaskConical,
  Handshake,
  Layers,
  LayoutTemplate,
  LifeBuoy,
  Rocket,
  ShieldCheck,
  Sparkles,
  Timer,
  Workflow,
} from 'lucide-react';

const processSteps = [
  {
    id: '01',
    title: 'Discovery & Consultation',
    icon: Handshake,
    description:
      'We align on your goals, users, and constraints so every decision is grounded in outcomes, not assumptions.',
  },
  {
    id: '02',
    title: 'Strategy & Planning',
    icon: Compass,
    description:
      'We define scope, architecture, timeline, and priorities to reduce risk and keep delivery predictable.',
  },
  {
    id: '03',
    title: 'Design & Prototyping',
    icon: LayoutTemplate,
    description:
      'We craft clean UI/UX flows and interactive prototypes your team can validate before development starts.',
  },
  {
    id: '04',
    title: 'Development & Integration',
    icon: Layers,
    description:
      'Our team builds in iterative sprints, integrating APIs and systems while keeping quality visible each week.',
  },
  {
    id: '05',
    title: 'Testing & Optimization',
    icon: FlaskConical,
    description:
      'We run quality, performance, and security checks to harden reliability and improve real-world speed.',
  },
  {
    id: '06',
    title: 'Launch & Ongoing Support',
    icon: Rocket,
    description:
      'We launch confidently, monitor usage, and continue support with optimization and roadmap evolution.',
  },
];

const outcomes = [
  {
    title: 'Fast Delivery',
    icon: Timer,
    text: 'Sprint-based delivery keeps momentum high and puts working software in your hands early.',
  },
  {
    title: 'Scalable Architecture',
    icon: Workflow,
    text: 'We design systems that handle growth, integrations, and future product expansion smoothly.',
  },
  {
    title: 'Clean UI/UX',
    icon: Sparkles,
    text: 'Interfaces are crafted for clarity and conversion so users move through key actions confidently.',
  },
  {
    title: 'Secure Systems',
    icon: ShieldCheck,
    text: 'Security, data protection, and stable engineering practices are built in from day one.',
  },
  {
    title: 'Ongoing Support',
    icon: LifeBuoy,
    text: 'Post-launch support, monitoring, and enhancements ensure your product keeps improving.',
  },
];

const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      'Most projects take 6 to 16 weeks depending on scope, integration complexity, and feedback cycle speed. Smaller MVPs can launch faster.',
  },
  {
    question: 'How do payments work?',
    answer:
      'Payments are milestone-based. We typically align them with discovery, build phases, and launch readiness so progress and billing stay transparent.',
  },
  {
    question: 'Do you provide support after delivery?',
    answer:
      'Yes. We offer ongoing support for maintenance, performance optimization, and roadmap extensions after launch.',
  },
];

const testimonials = [
  {
    quote:
      'Afrinia gave us a clear execution system from kickoff to launch. Every week had visible progress and business impact.',
    name: 'Product Lead, Retail Platform',
  },
  {
    quote:
      'The process was structured, calm, and highly professional. We knew what was happening at every stage.',
    name: 'COO, Operations Startup',
  },
];

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '120px' }}>
      <section style={{ position: 'relative', overflow: 'hidden', background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '118px 0 78px' }}>
        <div style={{ position: 'absolute', width: '520px', height: '520px', top: '-200px', right: '-120px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.14), transparent 68%)' }} />
        <div style={{ position: 'absolute', width: '440px', height: '440px', bottom: '-180px', left: '-80px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(99,102,241,0.12), transparent 68%)' }} />
        <div className="container" style={{ position: 'relative', maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.65, ease }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '7px 14px', background: 'rgba(37,99,235,0.07)', border: '1px solid rgba(37,99,235,0.2)', marginBottom: '18px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.08em', color: '#2563eb', textTransform: 'uppercase' }}>How It Works</span>
            </div>
          </motion.div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, delay: 0.1, ease }}
            style={{ margin: 0, maxWidth: '920px', fontSize: 'clamp(2.2rem, 4.7vw, 3.9rem)', lineHeight: 1.1, fontWeight: 900, letterSpacing: '-0.03em', color: '#0f172a' }}
          >
            How We Turn Your Ideas Into <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 60%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>Scalable Digital Products</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.85, delay: 0.28, ease }}
            style={{ margin: '20px 0 0', maxWidth: '760px', color: '#64748b', fontSize: '1.08rem', lineHeight: 1.75 }}
          >
            Afrinia combines strategy, design, and engineering into one clear delivery system so your project ships faster, scales safely, and drives measurable business results.
          </motion.p>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.82, delay: 0.42, ease }}
            style={{ marginTop: '32px', display: 'flex', flexWrap: 'wrap', gap: '12px' }}
          >
            <button
              onClick={() => navigate('/contact')}
              style={{ border: 'none', background: '#111827', color: '#fff', borderRadius: '999px', padding: '13px 24px', fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '9px', cursor: 'pointer', boxShadow: '0 10px 20px rgba(2,6,23,0.18)' }}
            >
              Get Started <ArrowRight size={18} />
            </button>
            <button
              onClick={() => navigate('/book-demo')}
              style={{ border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', borderRadius: '999px', padding: '13px 24px', fontWeight: 700, fontSize: '1rem', display: 'inline-flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}
            >
              Book Demo <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '88px 0 40px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.58 }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.85rem, 3.7vw, 2.8rem)', fontWeight: 850, letterSpacing: '-0.02em' }}>Our Step-by-Step Process</h2>
            <p style={{ margin: '12px 0 0', color: '#64748b', maxWidth: '720px', lineHeight: 1.75 }}>
              A structured workflow that keeps delivery transparent, collaborative, and focused on business outcomes.
            </p>
          </motion.div>

          <div style={{ position: 'relative', marginTop: '30px' }}>
            <div style={{ position: 'absolute', top: '18px', left: '26px', bottom: '18px', width: '2px', background: 'linear-gradient(180deg, rgba(37,99,235,0.3), rgba(99,102,241,0.15))' }} />
            <div style={{ display: 'grid', gap: '14px' }}>
              {processSteps.map((step, index) => {
                const Icon = step.icon;
                return (
                  <motion.div
                    key={step.id}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.45, delay: index * 0.05 }}
                    whileHover={{ y: -3 }}
                    style={{ marginLeft: '12px', borderRadius: '24px', border: '1px solid #e2e8f0', background: 'linear-gradient(160deg, #ffffff 0%, #f8fafc 100%)', boxShadow: '0 12px 26px rgba(15,23,42,0.06)', padding: '18px 20px 18px 58px', position: 'relative' }}
                  >
                    <div style={{ position: 'absolute', top: '16px', left: '-4px', width: '38px', height: '38px', borderRadius: '12px', background: 'linear-gradient(135deg, #2563eb 0%, #6366f1 100%)', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 20px rgba(37,99,235,0.35)' }}>
                      <Icon size={18} />
                    </div>
                    <div style={{ display: 'flex', justifyContent: 'space-between', gap: '14px', alignItems: 'start', flexWrap: 'wrap' }}>
                      <div>
                        <div style={{ fontSize: '0.8rem', color: '#2563eb', fontWeight: 800, letterSpacing: '0.06em' }}>STEP {step.id}</div>
                        <h3 style={{ margin: '5px 0 8px', fontSize: '1.16rem', color: '#0f172a' }}>{step.title}</h3>
                        <p style={{ margin: 0, color: '#64748b', lineHeight: 1.65 }}>{step.description}</p>
                      </div>
                      <div style={{ minWidth: '180px', borderRadius: '14px', border: '1px solid #dbeafe', background: '#eff6ff', padding: '10px 12px', color: '#1e3a8a', fontSize: '0.9rem', fontWeight: 650 }}>
                        Milestone {step.id}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '40px 0' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ borderRadius: '28px', border: '1px solid #e2e8f0', background: '#fff', boxShadow: '0 18px 38px rgba(15,23,42,0.07)', padding: '26px' }}
          >
            <h2 style={{ margin: 0, fontSize: 'clamp(1.7rem, 3.2vw, 2.4rem)', fontWeight: 840 }}>Visual Workflow</h2>
            <p style={{ margin: '10px 0 0', color: '#64748b' }}>A simple, transparent flow your team can track from start to scale.</p>
            <div style={{ marginTop: '22px', display: 'flex', alignItems: 'center', gap: '10px', flexWrap: 'wrap' }}>
              {['Idea', 'Strategy', 'Design', 'Build', 'Launch'].map((item, index) => (
                <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <motion.div whileHover={{ y: -2 }} style={{ borderRadius: '999px', padding: '10px 16px', background: '#f8fafc', border: '1px solid #e2e8f0', fontWeight: 700, color: '#0f172a' }}>
                    {item}
                  </motion.div>
                  {index < 4 && (
                    <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}>
                      <ArrowRight size={16} color="#64748b" />
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section style={{ padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3.1vw, 2.5rem)', fontWeight: 850, letterSpacing: '-0.02em' }}>What You Get</h2>
          <p style={{ margin: '12px 0 0', color: '#64748b', maxWidth: '760px', lineHeight: 1.75 }}>
            Beyond delivery, you get a system built for speed, trust, and long-term scale.
          </p>
          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(230px, 1fr))', gap: '14px' }}>
            {outcomes.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.06 }}
                  whileHover={{ y: -3 }}
                  style={{ background: '#fff', borderRadius: '20px', border: '1px solid #e2e8f0', boxShadow: '0 10px 20px rgba(15,23,42,0.05)', padding: '18px' }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ margin: '12px 0 8px', fontSize: '1.08rem' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#64748b', lineHeight: 1.6 }}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <div style={{ borderRadius: '28px', background: 'linear-gradient(145deg, #ffffff 0%, #f8fafc 100%)', border: '1px solid #e2e8f0', boxShadow: '0 16px 36px rgba(15,23,42,0.07)', padding: '30px' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 840 }}>Real Experience, Not Guesswork</h2>
            <p style={{ margin: '12px 0 0', color: '#475569', lineHeight: 1.75, maxWidth: '860px' }}>
              Clients experience a guided journey with weekly visibility, milestone-driven delivery, and proactive communication. You always know what is being built, why it matters, and what comes next.
            </p>
            <div style={{ marginTop: '22px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
              {testimonials.map((item) => (
                <motion.div key={item.name} whileHover={{ y: -2 }} style={{ borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', padding: '16px' }}>
                  <p style={{ margin: 0, color: '#334155', lineHeight: 1.65, fontStyle: 'italic' }}>"{item.quote}"</p>
                  <p style={{ margin: '10px 0 0', color: '#2563eb', fontWeight: 700, fontSize: '0.92rem' }}>{item.name}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 0' }}>
        <div className="container" style={{ maxWidth: '940px' }}>
          <h2 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)', fontWeight: 840 }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: '18px', display: 'grid', gap: '10px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} style={{ borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{ width: '100%', border: 'none', background: '#fff', textAlign: 'left', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 18px', fontWeight: 700, color: '#0f172a', fontSize: '1rem' }}
                  >
                    {faq.question}
                    <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.24 }}
                      >
                        <div style={{ padding: '0 18px 16px', color: '#64748b', lineHeight: 1.7 }}>{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '50px 0 0' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ borderRadius: '30px', background: 'linear-gradient(140deg, #0f172a 0%, #1e293b 100%)', color: '#fff', padding: '44px 30px', textAlign: 'center', border: '1px solid rgba(148,163,184,0.2)', boxShadow: '0 24px 55px rgba(15,23,42,0.4)' }}
          >
            <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
              Ready to Build Something Powerful?
            </h2>
            <p style={{ margin: '12px auto 0', maxWidth: '680px', color: '#cbd5e1', lineHeight: 1.75 }}>
              Let’s turn your vision into a product that performs, scales, and creates real business impact.
            </p>
            <div style={{ marginTop: '22px', display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '10px' }}>
              <button
                onClick={() => navigate('/contact')}
                style={{ border: 'none', background: '#ffffff', color: '#0f172a', borderRadius: '999px', padding: '12px 22px', fontWeight: 750, display: 'inline-flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}
              >
                Get Started <CheckCircle2 size={16} />
              </button>
              <button
                onClick={() => navigate('/contact')}
                style={{ border: '1px solid rgba(255,255,255,0.35)', background: 'transparent', color: '#fff', borderRadius: '999px', padding: '12px 22px', fontWeight: 750, display: 'inline-flex', gap: '8px', alignItems: 'center', cursor: 'pointer' }}
              >
                Contact Us <ArrowUpRight size={16} />
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

