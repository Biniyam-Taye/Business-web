import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  CheckCircle2,
  ChevronDown,
  Compass,
  LayoutTemplate,
  Code2,
  ShieldCheck,
  Rocket,
  Zap,
  Database,
  Sparkles,
  Layers
} from 'lucide-react';

const steps = [
  {
    id: '01',
    title: 'Discovery & Architecture',
    desc: 'We map your business logic into a scalable technical blueprint before writing a single line of code. No guesswork, just precision.',
    icon: Compass,
    color: '#2563eb',
    bg: '#eff6ff',
    details: ['Requirements Gathering', 'System Design', 'Tech Stack Selection']
  },
  {
    id: '02',
    title: 'UI/UX Prototyping',
    desc: 'Award-winning interfaces that prioritize user retention, accessibility, and frictionless experiences. We design for conversion.',
    icon: LayoutTemplate,
    color: '#8b5cf6',
    bg: '#f5f3ff',
    details: ['Wireframing', 'Interactive Prototypes', 'Design Systems']
  },
  {
    id: '03',
    title: 'Agile Development',
    desc: 'Iterative sprints deliver functional software fast. You see progress weekly, not monthly, keeping the project aligned and moving.',
    icon: Code2,
    color: '#f59e0b',
    bg: '#fffbeb',
    details: ['Frontend Engineering', 'Backend APIs', 'Database Modeling']
  },
  {
    id: '04',
    title: 'Testing & QA',
    desc: 'Automated pipelines and rigorous manual testing ensure enterprise-grade stability and security before any user touches the app.',
    icon: ShieldCheck,
    color: '#10b981',
    bg: '#ecfdf5',
    details: ['Unit Testing', 'Performance Audits', 'Security Checks']
  },
  {
    id: '05',
    title: 'Deployment & Scale',
    desc: 'Zero-downtime launches backed by cloud infrastructure designed to scale effortlessly with your growing user base.',
    icon: Rocket,
    color: '#ec4899',
    bg: '#fdf2f8',
    details: ['CI/CD Pipelines', 'Cloud Hosting', 'Monitoring Setup']
  },
  {
    id: '06',
    title: 'Iteration & Growth',
    desc: 'Post-launch, we analyze user behavior and system metrics to optimize workflows and introduce high-impact features.',
    icon: Layers,
    color: '#06b6d4',
    bg: '#ecfeff',
    details: ['Usage Analytics', 'Feature Scaling', 'Continuous Support']
  }
];

const faqs = [
  { q: 'How long does a typical build take?', a: 'Depending on complexity, an MVP can be launched in 4-8 weeks, while enterprise platforms typically take 3-6 months. We break everything into 2-week deliverable sprints.' },
  { q: 'Do you use templates or custom code?', a: 'Everything is custom-architected for your specific business logic. We use modern frameworks (React, Node, etc.) to ensure your platform is scalable and not locked into a rigid template.' },
  { q: 'What happens after launch?', a: 'We provide continuous monitoring, performance optimization, and SLA-backed support to ensure your product remains fast, secure, and ready for user growth.' },
  { q: 'How transparent is the process?', a: '100% transparent. You get a dedicated dashboard, weekly progress syncs, and direct access to the engineering team via Slack/Teams.' }
];

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  return (
    <div style={{ background: '#fcfcfc', minHeight: '100vh', color: '#0f172a' }}>
      {/* Hero Section */}
      <section style={{ position: 'relative', padding: '160px 0 100px', background: '#0b1120', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', top: '-20%', left: '-10%', width: '60%', height: '80%', background: 'radial-gradient(circle, rgba(37,99,235,0.12) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-20%', right: '-10%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', background: 'rgba(255,255,255,0.05)', borderRadius: '999px', border: '1px solid rgba(255,255,255,0.1)', marginBottom: '28px', backdropFilter: 'blur(10px)' }}>
              <Sparkles size={16} color="#60a5fa" />
              <span style={{ color: '#e2e8f0', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>The Engineering Blueprint</span>
            </div>
            <h1 style={{ fontSize: 'clamp(3rem, 7vw, 5.5rem)', fontWeight: 900, color: '#fff', lineHeight: 1.05, letterSpacing: '-0.03em', margin: '0 0 24px 0' }}>
              How We Build{' '}
              <span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #a78bfa 50%, #f472b6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>The Future.</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 48px', fontWeight: 400 }}>
              We don't just write code. We engineer scalable digital ecosystems designed for velocity, performance, and revenue growth.
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ display: 'flex', justifyContent: 'center' }}>
               <button onClick={() => {
                 document.getElementById('process-grid')?.scrollIntoView({ behavior: 'smooth' });
               }} style={{ width: '56px', height: '56px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', transition: 'all 0.3s ease', color: '#fff' }} onMouseOver={e => e.currentTarget.style.background = 'rgba(255,255,255,0.1)'} onMouseOut={e => e.currentTarget.style.background = 'rgba(255,255,255,0.05)'}>
                 <ArrowRight size={24} style={{ transform: 'rotate(90deg)' }} />
               </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Process Steps / Bento Grid */}
      <section id="process-grid" style={{ padding: '120px 0', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '1280px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.03em', margin: 0 }}>The Execution Engine</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0', lineHeight: 1.6 }}>Our battle-tested methodology transforms complex problems into elegant, high-performance software solutions.</p>
          </div>

          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '24px' }}>
            {steps.map((step, idx) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-50px' }}
                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                whileHover={{ y: -8, boxShadow: '0 24px 48px rgba(0,0,0,0.06)' }}
                style={{
                  flex: '1 1 350px',
                  background: '#fff',
                  borderRadius: '32px',
                  padding: '40px',
                  border: '1px solid #f1f5f9',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  boxShadow: '0 4px 12px rgba(0,0,0,0.02)',
                  transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
                }}
              >
                <div style={{ position: 'absolute', top: '-10px', right: '-10px', fontSize: '10rem', fontWeight: 900, color: step.bg, zIndex: 0, lineHeight: 1, pointerEvents: 'none', transition: 'color 0.4s ease' }}>
                  {step.id}
                </div>
                <div style={{ position: 'relative', zIndex: 1 }}>
                  <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: step.bg, color: step.color, display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '32px', border: `1px solid ${step.bg.replace('ff', 'e0')}` }}>
                    <step.icon size={26} strokeWidth={2.5} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', marginBottom: '16px', letterSpacing: '-0.02em' }}>{step.title}</h3>
                  <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6, marginBottom: '32px', minHeight: '80px' }}>{step.desc}</p>
                  
                  <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '14px', paddingTop: '24px', borderTop: '1px solid #f1f5f9' }}>
                    {step.details.map(detail => (
                      <div key={detail} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                        <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: step.bg, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                          <CheckCircle2 size={12} color={step.color} strokeWidth={3} />
                        </div>
                        <span style={{ fontSize: '0.95rem', fontWeight: 600, color: '#334155' }}>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Speed & Velocity Dark Section */}
      <section style={{ padding: '120px 0', background: '#040a15', color: '#fff', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 50% 50%, rgba(37,99,235,0.08) 0%, transparent 70%)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1280px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}>
              <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 0 24px 0' }}>
                Engineered for <br/><span style={{ background: 'linear-gradient(135deg, #60a5fa 0%, #3b82f6 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>Velocity.</span>
              </h2>
              <p style={{ fontSize: '1.15rem', color: '#94a3b8', lineHeight: 1.7, marginBottom: '48px', maxWidth: '500px' }}>
                Traditional agencies measure progress in months. We measure it in days. Our highly optimized pipelines and AI-assisted workflows let us build complex systems in a fraction of the time, without compromising on quality.
              </p>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
                {[
                  { metric: '3x', label: 'Faster Time-to-Market', color: '#60a5fa' },
                  { metric: '99.9%', label: 'Code Reliability', color: '#34d399' },
                  { metric: '0', label: 'Technical Debt', color: '#a78bfa' },
                  { metric: '24/7', label: 'Monitoring & Support', color: '#f472b6' }
                ].map(stat => (
                  <div key={stat.label} style={{ background: 'rgba(255,255,255,0.02)', borderRadius: '24px', padding: '24px', border: '1px solid rgba(255,255,255,0.05)', backdropFilter: 'blur(10px)' }}>
                    <div style={{ fontSize: '2.5rem', fontWeight: 900, color: stat.color, marginBottom: '4px', letterSpacing: '-0.02em' }}>{stat.metric}</div>
                    <div style={{ fontSize: '0.9rem', color: '#cbd5e1', fontWeight: 600 }}>{stat.label}</div>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ position: 'relative', height: '600px', background: 'linear-gradient(145deg, #0f172a, #020617)', borderRadius: '40px', border: '1px solid rgba(255,255,255,0.08)', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 20px 60px rgba(0,0,0,0.5)' }}>
              {/* Animated abstract UI */}
              <div style={{ position: 'absolute', width: '340px', height: '340px', borderRadius: '50%', border: '1px solid rgba(96,165,250,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: 'linear' }} style={{ width: '100%', height: '100%', borderRadius: '50%', border: '1px dashed rgba(96,165,250,0.3)' }} />
              </div>
              <div style={{ position: 'absolute', width: '220px', height: '220px', borderRadius: '50%', border: '1px solid rgba(167,139,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                 <motion.div animate={{ rotate: -360 }} transition={{ duration: 20, repeat: Infinity, ease: 'linear' }} style={{ width: '100%', height: '100%', borderRadius: '50%', border: '2px solid rgba(167,139,250,0.1)', borderTopColor: '#a78bfa', borderBottomColor: '#60a5fa' }} />
              </div>
              <div style={{ width: '100px', height: '100px', borderRadius: '50%', background: 'linear-gradient(135deg, #3b82f6, #8b5cf6)', boxShadow: '0 0 60px rgba(96,165,250,0.4)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 10 }}>
                <Zap size={40} color="#fff" />
              </div>
              
              {/* Floating elements */}
              <motion.div animate={{ y: [-15, 15, -15] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', top: '15%', left: '10%', background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(96,165,250,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Database size={18} color="#60a5fa" /></div>
                <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem' }}>Data Scaled</span>
              </motion.div>
              
              <motion.div animate={{ y: [15, -15, 15] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }} style={{ position: 'absolute', bottom: '15%', right: '10%', background: 'rgba(15,23,42,0.9)', backdropFilter: 'blur(12px)', padding: '16px 20px', borderRadius: '20px', border: '1px solid rgba(255,255,255,0.1)', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.3)' }}>
                <div style={{ width: '36px', height: '36px', borderRadius: '10px', background: 'rgba(52,211,153,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><ShieldCheck size={18} color="#34d399" /></div>
                <span style={{ color: '#f8fafc', fontWeight: 600, fontSize: '0.95rem' }}>Secure Core</span>
              </motion.div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Common Questions</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '16px' }}>Everything you need to know about our process.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ border: '1px solid #e2e8f0', borderRadius: '24px', overflow: 'hidden', background: isOpen ? '#f8fafc' : '#fff', transition: 'all 0.3s ease' }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} style={{ width: '100%', padding: '28px 32px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: '1.15rem', fontWeight: 700, color: isOpen ? '#2563eb' : '#0f172a', transition: 'color 0.3s ease', paddingRight: '20px' }}>{faq.q}</span>
                    <div style={{ width: '36px', height: '36px', flexShrink: 0, borderRadius: '50%', background: isOpen ? '#dbeafe' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                      <ChevronDown size={20} color={isOpen ? '#2563eb' : '#64748b'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                        <div style={{ padding: '0 32px 32px', color: '#64748b', fontSize: '1.05rem', lineHeight: 1.7 }}>
                          {faq.a}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ padding: '0 24px 100px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px', background: '#0b1120', borderRadius: '48px', padding: '80px 40px', textAlign: 'center', position: 'relative', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>
          <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6, #ec4899)' }} />
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#fff', letterSpacing: '-0.03em', margin: '0 0 24px 0' }}>Ready to start building?</h2>
            <p style={{ fontSize: '1.2rem', color: '#94a3b8', maxWidth: '640px', margin: '0 auto 48px', lineHeight: 1.6 }}>
              Skip the traditional agency bloat. Let's engineer a solution that scales your business efficiently and elegantly.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} className="cta-vibrate-btn" style={{ padding: '20px 40px', fontSize: '1.1rem', borderRadius: '999px', border: 'none', background: '#2563eb', color: '#fff', fontWeight: 700, cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '12px', boxShadow: '0 10px 25px rgba(37,99,235,0.4)' }}>
                Start Your Project
                <div style={{ width: '28px', height: '28px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowRight size={16} />
                </div>
              </button>
              <button onClick={() => navigate('/book-demo')} style={{ padding: '20px 40px', fontSize: '1.1rem', fontWeight: 700, borderRadius: '999px', background: 'transparent', color: '#fff', border: '2px solid rgba(255,255,255,0.2)', cursor: 'pointer', transition: 'all 0.3s ease' }} onMouseOver={e => { e.currentTarget.style.background = 'rgba(255,255,255,0.1)'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.4)'; }} onMouseOut={e => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.borderColor = 'rgba(255,255,255,0.2)'; }}>
                Book a Demo
              </button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}
