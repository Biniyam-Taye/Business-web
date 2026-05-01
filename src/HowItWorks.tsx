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
      'We map your business goals, user needs, and constraints so the project starts with clarity and confidence.',
    accent: 'linear-gradient(135deg, #2563eb 0%, #1d4ed8 100%)',
  },
  {
    id: '02',
    title: 'Strategy & Planning',
    icon: Compass,
    description:
      'We design delivery milestones, product priorities, and technical approach to reduce risk and rework.',
    accent: 'linear-gradient(135deg, #6366f1 0%, #4f46e5 100%)',
  },
  {
    id: '03',
    title: 'Design & Prototyping',
    icon: LayoutTemplate,
    description:
      'We shape clean UX flows and prototypes so your team can validate direction before full implementation.',
    accent: 'linear-gradient(135deg, #0ea5e9 0%, #2563eb 100%)',
  },
  {
    id: '04',
    title: 'Development & Integration',
    icon: Layers,
    description:
      'We build in iterative sprints and connect all required systems, APIs, and workflows in a scalable architecture.',
    accent: 'linear-gradient(135deg, #8b5cf6 0%, #6366f1 100%)',
  },
  {
    id: '05',
    title: 'Testing & Optimization',
    icon: FlaskConical,
    description:
      'We optimize performance, quality, and security to ensure your product is fast, stable, and launch-ready.',
    accent: 'linear-gradient(135deg, #f97316 0%, #ea580c 100%)',
  },
  {
    id: '06',
    title: 'Launch & Ongoing Support',
    icon: Rocket,
    description:
      'We launch with confidence, monitor outcomes, and support continuous improvements post-release.',
    accent: 'linear-gradient(135deg, #14b8a6 0%, #0ea5e9 100%)',
  },
];

const outcomes = [
  {
    title: 'Fast Delivery',
    icon: Timer,
    text: 'Milestone-driven execution keeps momentum high and shortens time to market.',
  },
  {
    title: 'Scalable Architecture',
    icon: Workflow,
    text: 'Your product is built on foundations that support growth and integration over time.',
  },
  {
    title: 'Clean UI/UX',
    icon: Sparkles,
    text: 'User journeys are clear, modern, and designed to improve conversion.',
  },
  {
    title: 'Secure Systems',
    icon: ShieldCheck,
    text: 'Security and reliability are embedded throughout delivery, not patched later.',
  },
  {
    title: 'Ongoing Support',
    icon: LifeBuoy,
    text: 'You get long-term technical partnership after launch for improvements and scale.',
  },
];

const faqs = [
  {
    question: 'How long does a project take?',
    answer:
      'Most projects run between 6 and 16 weeks based on scope, integrations, and feedback cadence.',
  },
  {
    question: 'How do payments work?',
    answer:
      'Payments are structured by milestone. This keeps progress visible and ties billing to delivery outcomes.',
  },
  {
    question: 'Do you provide support after delivery?',
    answer:
      'Yes. We provide post-launch support, optimization, and roadmap iteration as your needs evolve.',
  },
];

const journeyMoments = [
  'Kickoff with clear scope and goals',
  'Weekly progress visibility and demos',
  'Transparent milestone reviews',
  'Launch with confidence and support',
];

const miniCases = [
  {
    name: 'E-commerce Platform',
    result: '+43% conversion after redesign',
  },
  {
    name: 'Operations Dashboard',
    result: '-38% manual processing time',
  },
];

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);
  const [hoveredOutcome, setHoveredOutcome] = useState<string | null>(null);

  return (
    <div style={{ background: '#f3f7ff', minHeight: '100vh', color: '#0f172a', paddingBottom: '120px' }}>
      <section style={{ position: 'relative', overflow: 'hidden', padding: '118px 0 76px' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 15% 20%, rgba(59,130,246,0.15), transparent 42%), radial-gradient(circle at 90% 12%, rgba(139,92,246,0.16), transparent 38%), linear-gradient(180deg, #ffffff 0%, #f3f7ff 100%)' }} />
        <div className="container" style={{ position: 'relative', maxWidth: '1240px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 380px), 1fr))', gap: '22px', alignItems: 'stretch' }}>
            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.78 }}>
              <div style={{ display: 'inline-flex', gap: '8px', alignItems: 'center', borderRadius: '999px', padding: '7px 14px', background: 'rgba(37,99,235,0.08)', border: '1px solid rgba(37,99,235,0.22)', marginBottom: '16px' }}>
                <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb' }} />
                <span style={{ color: '#1d4ed8', fontWeight: 800, fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.08em' }}>How It Works</span>
              </div>
              <h1 style={{ margin: 0, fontSize: 'clamp(2.2rem, 4.8vw, 4.1rem)', lineHeight: 1.06, letterSpacing: '-0.03em', fontWeight: 900 }}>
                How We Turn Your Ideas Into
                <span style={{ display: 'block', marginTop: '4px', background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 58%, #f97316 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Scalable Digital Products
                </span>
              </h1>
              <p style={{ margin: '18px 0 0', maxWidth: '680px', color: '#526178', lineHeight: 1.8, fontSize: '1.05rem' }}>
                Afrinia combines product strategy, design precision, and engineering excellence into a clear system built for speed, quality, and scale.
              </p>
              <div style={{ marginTop: '30px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                <motion.button
                  whileHover={{ y: -2, boxShadow: '0 14px 28px rgba(15,23,42,0.3)' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/contact')}
                  style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '999px', padding: '14px 24px', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}
                >
                  Get Started <ArrowRight size={17} />
                </motion.button>
                <motion.button
                  whileHover={{ y: -2, backgroundColor: '#dbeafe' }}
                  whileTap={{ scale: 0.98 }}
                  onClick={() => navigate('/book-demo')}
                  style={{ border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', borderRadius: '999px', padding: '14px 24px', fontSize: '1rem', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '9px', cursor: 'pointer' }}
                >
                  Book Demo <ArrowUpRight size={17} />
                </motion.button>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, y: 28 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.82, delay: 0.1 }} style={{ borderRadius: '28px', padding: '20px', background: 'linear-gradient(160deg, #0f172a 0%, #1e293b 100%)', boxShadow: '0 24px 50px rgba(15,23,42,0.34)', border: '1px solid rgba(148,163,184,0.25)' }}>
              <div style={{ borderRadius: '20px', padding: '16px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)' }}>
                <p style={{ margin: 0, color: '#cbd5e1', fontSize: '0.9rem' }}>Delivery Confidence</p>
                <h3 style={{ margin: '6px 0 0', color: '#ffffff', fontSize: '1.35rem' }}>A process your team can trust</h3>
              </div>
              <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                {[
                  { label: 'Avg. MVP Timeline', value: '6-8 Weeks' },
                  { label: 'Milestone Visibility', value: '100%' },
                  { label: 'Support Coverage', value: 'Post-launch' },
                  { label: 'Architecture Focus', value: 'Scale-ready' },
                ].map((item) => (
                  <div key={item.label} style={{ borderRadius: '14px', padding: '12px', background: 'rgba(255,255,255,0.07)', border: '1px solid rgba(255,255,255,0.14)' }}>
                    <p style={{ margin: 0, color: '#93c5fd', fontSize: '0.76rem', textTransform: 'uppercase', letterSpacing: '0.06em', fontWeight: 800 }}>{item.label}</p>
                    <p style={{ margin: '6px 0 0', color: '#fff', fontWeight: 750 }}>{item.value}</p>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      <section style={{ padding: '36px 0 50px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <motion.div initial={{ opacity: 0, y: 18 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(1.95rem, 3.6vw, 2.9rem)', letterSpacing: '-0.02em' }}>Execution Blueprint</h2>
            <p style={{ margin: '12px 0 0', color: '#526178', maxWidth: '760px', lineHeight: 1.75 }}>
              A unique two-column milestone layout designed to visualize flow, speed, and collaboration.
            </p>
          </motion.div>

          <div style={{ marginTop: '24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 360px), 1fr))', gap: '14px' }}>
            {processSteps.map((step, index) => {
              const Icon = step.icon;
              const isHovered = hoveredStep === step.id;
              return (
                <motion.div
                  key={step.id}
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-40px' }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredStep(step.id)}
                  onMouseLeave={() => setHoveredStep(null)}
                  whileHover={{ y: -5 }}
                  style={{
                    borderRadius: '24px',
                    padding: '18px',
                    border: isHovered ? '1px solid #93c5fd' : '1px solid #dbe5f5',
                    background: isHovered ? 'linear-gradient(150deg, #ffffff 0%, #ecf3ff 100%)' : '#ffffff',
                    boxShadow: isHovered ? '0 18px 34px rgba(37,99,235,0.16)' : '0 8px 18px rgba(15,23,42,0.06)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '10px', alignItems: 'center' }}>
                    <div style={{ display: 'inline-flex', alignItems: 'center', gap: '9px' }}>
                      <div style={{ width: '40px', height: '40px', borderRadius: '12px', display: 'grid', placeItems: 'center', color: '#fff', background: step.accent, boxShadow: '0 10px 18px rgba(37,99,235,0.32)' }}>
                        <Icon size={18} />
                      </div>
                      <span style={{ fontSize: '0.8rem', fontWeight: 800, color: '#1d4ed8', letterSpacing: '0.06em' }}>STEP {step.id}</span>
                    </div>
                    <div style={{ borderRadius: '999px', padding: '6px 11px', background: isHovered ? '#dbeafe' : '#eff6ff', border: '1px solid #bfdbfe', color: '#1e3a8a', fontSize: '0.78rem', fontWeight: 700, transition: 'all 0.25s ease' }}>
                      Milestone {step.id}
                    </div>
                  </div>
                  <h3 style={{ margin: '12px 0 7px', fontSize: '1.18rem', color: '#0f172a' }}>{step.title}</h3>
                  <p style={{ margin: 0, color: '#4b5d74', lineHeight: 1.68 }}>{step.description}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '10px 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{ borderRadius: '28px', overflow: 'hidden', border: '1px solid #c7d7f2', boxShadow: '0 24px 45px rgba(37,99,235,0.15)' }}>
            <div style={{ padding: '26px', background: 'linear-gradient(135deg, #1e3a8a 0%, #3730a3 50%, #0f172a 100%)' }}>
              <h2 style={{ margin: 0, color: '#fff', fontSize: 'clamp(1.75rem, 3vw, 2.5rem)' }}>Visual Workflow</h2>
              <p style={{ margin: '10px 0 0', color: '#cbd5e1', maxWidth: '720px' }}>From idea to launch, each stage connects clearly and intentionally.</p>
              <div style={{ marginTop: '18px', display: 'flex', gap: '10px', alignItems: 'center', flexWrap: 'wrap' }}>
                {['Idea', 'Strategy', 'Design', 'Build', 'Launch'].map((item, index) => (
                  <div key={item} style={{ display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                    <motion.div whileHover={{ scale: 1.04 }} style={{ borderRadius: '999px', background: 'rgba(255,255,255,0.12)', border: '1px solid rgba(255,255,255,0.22)', color: '#fff', fontWeight: 700, padding: '10px 16px' }}>
                      {item}
                    </motion.div>
                    {index < 4 && (
                      <motion.div animate={{ x: [0, 6, 0] }} transition={{ repeat: Infinity, duration: 1.7, ease: 'easeInOut' }}>
                        <ArrowRight size={16} color="#bfdbfe" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <div style={{ background: '#ffffff', padding: '20px 24px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '10px' }}>
              {['Weekly demos', 'Milestone approvals', 'Performance checks', 'Launch readiness'].map((item) => (
                <div key={item} style={{ borderRadius: '14px', border: '1px solid #dbe5f5', padding: '11px 12px', color: '#1e3a8a', background: '#f8fbff', fontWeight: 650 }}>{item}</div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.85rem, 3.1vw, 2.55rem)' }}>What You Get</h2>
          <p style={{ margin: '10px 0 0', color: '#526178', lineHeight: 1.75, maxWidth: '760px' }}>
            Premium delivery standards that protect quality, speed, and long-term scalability.
          </p>
          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', gap: '12px' }}>
            {outcomes.map((item, index) => {
              const Icon = item.icon;
              const isHovered = hoveredOutcome === item.title;
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  onMouseEnter={() => setHoveredOutcome(item.title)}
                  onMouseLeave={() => setHoveredOutcome(null)}
                  whileHover={{ y: -4 }}
                  style={{
                    borderRadius: '20px',
                    padding: '18px',
                    border: isHovered ? '1px solid #93c5fd' : '1px solid #dbe5f5',
                    background: isHovered ? 'linear-gradient(145deg, #ffffff 0%, #eaf2ff 100%)' : '#ffffff',
                    boxShadow: isHovered ? '0 14px 26px rgba(37,99,235,0.16)' : '0 8px 16px rgba(15,23,42,0.05)',
                    transition: 'all 0.25s ease',
                  }}
                >
                  <div style={{ width: '38px', height: '38px', borderRadius: '12px', display: 'grid', placeItems: 'center', background: isHovered ? '#2563eb' : '#eff6ff', color: isHovered ? '#fff' : '#2563eb', transition: 'all 0.25s ease' }}>
                    <Icon size={18} />
                  </div>
                  <h3 style={{ margin: '12px 0 7px', fontSize: '1.08rem', color: '#0f172a' }}>{item.title}</h3>
                  <p style={{ margin: 0, color: '#4b5d74', lineHeight: 1.63 }}>{item.text}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '0 0 52px' }}>
        <div className="container" style={{ maxWidth: '1240px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 350px), 1fr))', gap: '12px' }}>
            <div style={{ borderRadius: '24px', padding: '22px', background: '#ffffff', border: '1px solid #dbe5f5', boxShadow: '0 10px 22px rgba(15,23,42,0.06)' }}>
              <h2 style={{ margin: 0, fontSize: 'clamp(1.7rem, 3vw, 2.3rem)' }}>Real Experience</h2>
              <p style={{ margin: '10px 0 0', color: '#4b5d74', lineHeight: 1.72 }}>
                Clients feel control and confidence throughout delivery because we combine transparent communication with disciplined execution.
              </p>
              <div style={{ marginTop: '14px', display: 'grid', gap: '8px' }}>
                {journeyMoments.map((item) => (
                  <div key={item} style={{ display: 'flex', gap: '9px', alignItems: 'center', borderRadius: '12px', background: '#f8fbff', border: '1px solid #dbeafe', padding: '10px 11px' }}>
                    <CheckCircle2 size={16} color="#2563eb" />
                    <span style={{ color: '#1e3a8a', fontWeight: 650, fontSize: '0.94rem' }}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
            <div style={{ borderRadius: '24px', padding: '22px', background: 'linear-gradient(165deg, #0f172a 0%, #1e293b 100%)', border: '1px solid rgba(148,163,184,0.24)', boxShadow: '0 18px 34px rgba(15,23,42,0.26)' }}>
              <h3 style={{ margin: 0, color: '#fff', fontSize: '1.3rem' }}>Project Snapshots</h3>
              <div style={{ marginTop: '14px', display: 'grid', gap: '9px' }}>
                {miniCases.map((item) => (
                  <motion.div key={item.name} whileHover={{ x: 3 }} style={{ borderRadius: '14px', padding: '12px', background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.16)' }}>
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
          <h2 style={{ margin: 0, textAlign: 'center', fontSize: 'clamp(1.8rem, 3vw, 2.45rem)' }}>Frequently Asked Questions</h2>
          <div style={{ marginTop: '14px', display: 'grid', gap: '10px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <div key={faq.question} style={{ borderRadius: '16px', overflow: 'hidden', border: '1px solid #dbe5f5', background: '#ffffff' }}>
                  <button
                    onClick={() => setOpenFaq(isOpen ? null : index)}
                    style={{ width: '100%', border: 'none', cursor: 'pointer', background: isOpen ? '#eff6ff' : '#fff', padding: '15px 16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', textAlign: 'left', color: '#0f172a', fontWeight: 700, fontSize: '1rem', transition: 'background 0.2s ease' }}
                  >
                    {faq.question}
                    <ChevronDown size={18} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.2s ease' }} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.24 }}>
                        <div style={{ padding: '0 16px 15px', color: '#4b5d74', lineHeight: 1.72 }}>{faq.answer}</div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section style={{ padding: '0' }}>
        <div className="container" style={{ maxWidth: '1020px' }}>
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ borderRadius: '30px', padding: '42px 26px', textAlign: 'center', background: 'linear-gradient(140deg, #111827 0%, #1e3a8a 48%, #312e81 100%)', color: '#fff', boxShadow: '0 24px 50px rgba(30,58,138,0.36)', border: '1px solid rgba(191,219,254,0.25)' }}>
            <h2 style={{ margin: 0, fontSize: 'clamp(2rem, 4.1vw, 3rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>Ready to Build Something Powerful?</h2>
            <p style={{ margin: '12px auto 0', maxWidth: '700px', color: '#dbeafe', lineHeight: 1.75 }}>
              Start with a strategic conversation and get a clear plan to launch faster, scale smarter, and ship with confidence.
            </p>
            <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px', flexWrap: 'wrap' }}>
              <motion.button whileHover={{ y: -2 }} whileTap={{ scale: 0.98 }} onClick={() => navigate('/contact')} style={{ border: 'none', borderRadius: '999px', padding: '12px 22px', background: '#fff', color: '#0f172a', fontWeight: 750, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Get Started <CheckCircle2 size={16} />
              </motion.button>
              <motion.button whileHover={{ y: -2, backgroundColor: 'rgba(255,255,255,0.14)' }} whileTap={{ scale: 0.98 }} onClick={() => navigate('/contact')} style={{ border: '1px solid rgba(255,255,255,0.35)', borderRadius: '999px', padding: '12px 22px', background: 'rgba(255,255,255,0.08)', color: '#fff', fontWeight: 750, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
                Contact Us <ArrowUpRight size={16} />
              </motion.button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

