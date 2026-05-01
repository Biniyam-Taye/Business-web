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

const steps = [
  {
    id: '01',
    title: 'Discovery & Consultation',
    icon: Handshake,
    description: 'We define business goals, user priorities, and technical constraints to align scope from day one.',
    tone: '#2563eb',
  },
  {
    id: '02',
    title: 'Strategy & Planning',
    icon: Compass,
    description: 'A practical roadmap is created with milestones, architecture direction, and measurable outcomes.',
    tone: '#4f46e5',
  },
  {
    id: '03',
    title: 'Design & Prototyping',
    icon: LayoutTemplate,
    description: 'We build clean UX flows and prototypes so stakeholders validate direction before development.',
    tone: '#0ea5e9',
  },
  {
    id: '04',
    title: 'Development & Integration',
    icon: Layers,
    description: 'We ship in iterative sprints while integrating APIs, data systems, and core product logic.',
    tone: '#7c3aed',
  },
  {
    id: '05',
    title: 'Testing & Optimization',
    icon: FlaskConical,
    description: 'Performance, QA, and security checks ensure your product is stable and production-ready.',
    tone: '#f97316',
  },
  {
    id: '06',
    title: 'Launch & Ongoing Support',
    icon: Rocket,
    description: 'We launch with confidence and continue improving through post-release monitoring and support.',
    tone: '#0891b2',
  },
];

const benefits = [
  { title: 'Fast Delivery', icon: Timer, text: 'Milestone-based execution accelerates time to value.' },
  { title: 'Scalable Architecture', icon: Workflow, text: 'Built for future growth, integrations, and stability.' },
  { title: 'Clean UI/UX', icon: Sparkles, text: 'A clear and modern interface users trust immediately.' },
  { title: 'Secure Systems', icon: ShieldCheck, text: 'Security and reliability are embedded through delivery.' },
  { title: 'Ongoing Support', icon: LifeBuoy, text: 'Post-launch iteration keeps your platform improving.' },
];

const faqs = [
  {
    q: 'How long does a project take?',
    a: 'Most projects take 6 to 16 weeks depending on complexity, integrations, and feedback cadence.',
  },
  {
    q: 'How do payments work?',
    a: 'Payments are milestone-based, aligned with delivery phases for transparency and predictability.',
  },
  {
    q: 'Do you provide support after delivery?',
    a: 'Yes. We provide post-launch support, optimization cycles, and long-term product improvement.',
  },
];

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: '#f5f8ff', minHeight: '100vh', color: '#0f172a', paddingBottom: '110px' }}>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '118px 0 68px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 18% 22%, rgba(37,99,235,0.16), transparent 42%), radial-gradient(circle at 82% 18%, rgba(79,70,229,0.13), transparent 36%), linear-gradient(180deg, #ffffff 0%, #f5f8ff 100%)' }} />
        <div className="container" style={{ position: 'relative', maxWidth: '1240px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '14px', alignItems: 'stretch' }}>
            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.75 }} style={{ borderRadius: '26px', background: '#fff', border: '1px solid #dee7f5', boxShadow: '0 16px 34px rgba(15,23,42,0.08)', padding: '26px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '999px', padding: '6px 12px', border: '1px solid #bfdbfe', background: '#eff6ff', marginBottom: '14px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#2563eb' }} />
                <span style={{ fontSize: '0.74rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1d4ed8' }}>How It Works</span>
              </div>
              <h1 style={{ margin: 0, fontSize: 'clamp(2.1rem, 4.7vw, 4rem)', lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 900 }}>
                How We Turn Your Ideas Into
                <span style={{ display: 'block', background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 52%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Scalable Digital Products
                </span>
              </h1>
              <p style={{ margin: '16px 0 0', color: '#526178', lineHeight: 1.78, maxWidth: '680px' }}>
                Afrinia follows a structured delivery model that balances speed, quality, and long-term scalability.
              </p>
              <div style={{ marginTop: '24px', display: 'flex', gap: '10px', flexWrap: 'wrap' }}>
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 12px 24px rgba(15,23,42,0.24)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                  style={{ border: 'none', borderRadius: '999px', padding: '13px 22px', background: '#111827', color: '#fff', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                >
                  Get Started <ArrowRight size={16} />
                </motion.button>
                <motion.button
                  whileHover={{ y: -2, backgroundColor: '#dbeafe' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/book-demo')}
                  style={{ border: '1px solid #bfdbfe', borderRadius: '999px', padding: '13px 22px', background: '#eff6ff', color: '#1d4ed8', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                >
                  Book Demo <ArrowUpRight size={16} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 26 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, delay: 0.1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
              {[
                { label: 'Execution Model', value: 'Milestone-driven', bg: 'linear-gradient(150deg, #1e3a8a 0%, #1d4ed8 100%)', fg: '#fff' },
                { label: 'Delivery Rhythm', value: 'Weekly visibility', bg: '#ffffff', fg: '#0f172a' },
                { label: 'Quality Standard', value: 'Performance + QA', bg: '#ffffff', fg: '#0f172a' },
                { label: 'Support Layer', value: 'Post-launch growth', bg: 'linear-gradient(150deg, #312e81 0%, #4f46e5 100%)', fg: '#fff' },
              ].map((item) => (
                <motion.div key={item.label} whileHover={{ y: -3 }} style={{ borderRadius: '20px', border: item.fg === '#fff' ? '1px solid rgba(255,255,255,0.25)' : '1px solid #deebff', background: item.bg, color: item.fg, padding: '16px', boxShadow: '0 12px 24px rgba(15,23,42,0.08)' }}>
                  <p style={{ margin: 0, fontSize: '0.78rem', textTransform: 'uppercase', letterSpacing: '0.07em', opacity: 0.86, fontWeight: 800 }}>{item.label}</p>
                  <h3 style={{ margin: '8px 0 0', fontSize: '1.08rem' }}>{item.value}</h3>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '30px 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.85rem, 3.3vw, 2.7rem)', letterSpacing: '-0.02em' }}>Step-by-Step Process</h2>
            <p style={{ margin: '10px 0 0', color: '#526178', maxWidth: '760px', lineHeight: 1.72 }}>
              A bento-inspired process grid with corporate clarity and clear sequencing.
            </p>
          </motion.div>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 300px), 1fr))', gap: '10px' }}>
            {steps.map((step, index) => {
              const Icon = step.icon;
              const isWide = index === 0 || index === 3;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, boxShadow: '0 18px 30px rgba(37,99,235,0.16)' }}
                  style={{
                    gridColumn: isWide ? 'span 2' : 'span 1',
                    borderRadius: '22px',
                    border: '1px solid #dce7f7',
                    background: '#fff',
                    padding: '16px',
                    boxShadow: '0 10px 20px rgba(15,23,42,0.06)',
                    minHeight: '170px',
                  }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '10px', marginBottom: '10px' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                      <div style={{ width: '38px', height: '38px', borderRadius: '12px', background: step.tone, color: '#fff', display: 'grid', placeItems: 'center' }}>
                        <Icon size={17} />
                      </div>
                      <span style={{ fontSize: '0.8rem', color: step.tone, fontWeight: 800, letterSpacing: '0.06em' }}>STEP {step.id}</span>
                    </div>
                    <span style={{ borderRadius: '999px', padding: '6px 10px', background: '#eff6ff', color: '#1e3a8a', border: '1px solid #bfdbfe', fontSize: '0.78rem', fontWeight: 700 }}>
                      Milestone {step.id}
                    </span>
                  </div>
                  <h3 style={{ margin: '0 0 8px', fontSize: '1.14rem' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: '#4b5d74', lineHeight: 1.66 }}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{ borderRadius: '26px', overflow: 'hidden', border: '1px solid #c8d8f2', boxShadow: '0 20px 42px rgba(37,99,235,0.14)' }}>
            <div style={{ padding: '24px', background: 'linear-gradient(135deg, #1e3a8a 0%, #312e81 54%, #0f172a 100%)' }}>
              <h2 style={{ margin: 0, color: '#fff', fontSize: 'clamp(1.7rem, 2.9vw, 2.4rem)' }}>Visual Workflow</h2>
              <p style={{ margin: '10px 0 0', color: '#dbeafe', maxWidth: '720px' }}>Idea to launch, connected with a clean decision flow.</p>
              <div style={{ marginTop: '16px', display: 'flex', alignItems: 'center', gap: '8px', flexWrap: 'wrap' }}>
                {['Idea', 'Strategy', 'Design', 'Build', 'Launch'].map((item, index) => (
                  <div key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <motion.div whileHover={{ scale: 1.04 }} style={{ borderRadius: '999px', padding: '9px 14px', border: '1px solid rgba(255,255,255,0.3)', background: 'rgba(255,255,255,0.12)', color: '#fff', fontWeight: 700 }}>
                      {item}
                    </motion.div>
                    {index < 4 && <motion.span animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 1.6 }} style={{ color: '#bfdbfe', fontWeight: 800 }}>&rarr;</motion.span>}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#fff', padding: '16px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '8px' }}>
              {['Scope alignment', 'Sprint execution', 'QA checks', 'Launch support'].map((item) => (
                <div key={item} style={{ borderRadius: '12px', border: '1px solid #dbe7f9', background: '#f8fbff', padding: '10px 12px', color: '#1e3a8a', fontWeight: 650 }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.8rem, 3vw, 2.45rem)' }}>What You Get</h2>
          <p style={{ margin: '10px 0 0', color: '#526178', maxWidth: '760px', lineHeight: 1.72 }}>
            Enterprise-ready delivery standards presented in a modern visual system.
          </p>
          <div style={{ marginTop: '18px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
            {benefits.map((item, index) => {
              const Icon = item.icon;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 14 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ y: -4, borderColor: '#93c5fd', boxShadow: '0 14px 26px rgba(37,99,235,0.14)' }}
                  style={{ borderRadius: '18px', border: '1px solid #dce7f7', background: '#fff', padding: '16px', boxShadow: '0 8px 16px rgba(15,23,42,0.05)' }}
                >
                  <div style={{ width: '36px', height: '36px', borderRadius: '11px', background: '#eff6ff', color: '#2563eb', display: 'grid', placeItems: 'center' }}>
                    <Icon size={17} />
                  </div>
                  <h3 style={{ margin: '10px 0 6px', fontSize: '1.05rem' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#4b5d74', lineHeight: 1.62 }}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 340px), 1fr))', gap: '10px' }}>
            <div style={{ borderRadius: '22px', border: '1px solid #dce7f7', background: '#fff', padding: '20px', boxShadow: '0 10px 20px rgba(15,23,42,0.06)' }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(1.65rem, 2.8vw, 2.2rem)' }}>Real Experience</h2>
              <p style={{ margin: '10px 0 0', color: '#4b5d74', lineHeight: 1.72 }}>
                Clients experience a transparent, calm, and high-accountability process with clear milestones and regular progress reviews.
              </p>
              <div style={{ marginTop: '12px', display: 'grid', gap: '7px' }}>
                {['Weekly visibility', 'Milestone approvals', 'Structured communication', 'Delivery confidence'].map((item) => (
                  <div key={item} style={{ borderRadius: '12px', border: '1px solid #dbeafe', background: '#f8fbff', padding: '9px 10px', color: '#1e3a8a', fontWeight: 650, display: 'flex', alignItems: 'center', gap: '7px' }}>
                    <CheckCircle2 size={15} />
                    {item}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '22px', border: '1px solid rgba(148,163,184,0.26)', background: 'linear-gradient(155deg, #111827 0%, #1e3a8a 100%)', padding: '20px', color: '#fff', boxShadow: '0 16px 32px rgba(30,58,138,0.24)' }}>
              <h3 style={{ margin: 0, fontSize: '1.28rem' }}>Snapshot Results</h3>
              <div style={{ marginTop: '12px', display: 'grid', gap: '8px' }}>
                {[
                  { name: 'Commerce Redesign', result: '+43% conversion uplift' },
                  { name: 'Ops Automation', result: '-38% manual workload' },
                ].map((item) => (
                  <motion.div key={item.name} whileHover={{ x: 3 }} style={{ borderRadius: '13px', padding: '11px', border: '1px solid rgba(255,255,255,0.2)', background: 'rgba(255,255,255,0.08)' }}>
                    <p style={{ margin: 0, color: '#e2e8f0', fontWeight: 650 }}>{item.name}</p>
                    <p style={{ margin: '4px 0 0', color: '#93c5fd', fontWeight: 700 }}>{item.result}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 52px' }}>
        <div className="container" style={{ maxWidth: '940px' }}>
          <h2 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.4rem)' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: '12px', display: 'grid', gap: '8px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.q} style={{ borderRadius: '14px', border: '1px solid #dce7f7', background: '#fff', overflow: 'hidden' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{ width: '100%', border: 'none', cursor: 'pointer', background: isOpen ? '#eff6ff' : '#fff', padding: '14px 15px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', color: '#0f172a', fontWeight: 700, fontSize: '0.98rem', textAlign: 'left' }}
                  >
                    {faq.q}
                    <ChevronDown size={17} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.22 }}>
                        <div style={{ padding: '0 15px 14px', color: '#4b5d74', lineHeight: 1.68 }}>{faq.a}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: 0 }}>
        <div className="container" style={{ maxWidth: '1020px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ borderRadius: '28px', border: '1px solid rgba(191,219,254,0.28)', background: 'linear-gradient(140deg, #111827 0%, #1e3a8a 54%, #312e81 100%)', color: '#fff', textAlign: 'center', padding: '40px 24px', boxShadow: '0 24px 46px rgba(30,58,138,0.34)' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.95rem, 4vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Ready to Build Something Powerful?</h2>
            <p style={{ margin: '11px auto 0', maxWidth: '690px', color: '#dbeafe', lineHeight: 1.74 }}>
              Work with a team that combines structured execution with modern product thinking.
            </p>
            <div style={{ marginTop: '18px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => navigate('/contact')} style={{ border: 'none', borderRadius: '999px', padding: '12px 21px', background: '#fff', color: '#111827', fontWeight: 750, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Get Started <CheckCircle2 size={16} />
              </motion.button>
              <motion.button whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.14)' }} whileTap={{ scale: 0.98 }} onClick={() => navigate('/contact')} style={{ border: '1px solid rgba(255,255,255,0.35)', borderRadius: '999px', padding: '12px 21px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 750, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Contact Us <ArrowUpRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

