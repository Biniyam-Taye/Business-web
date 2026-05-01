import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import {
  ArrowRight,
  ArrowUpRight,
  CheckCircle2,
  ChevronDown,
  Compass,
  LayoutTemplate,
  Code2,
  ShieldCheck,
  Rocket,
  Timer,
  Workflow,
  LifeBuoy,
  Handshake,
  FlaskConical,
  MessageSquare,
  Sparkles
} from 'lucide-react';

const processSteps = [
  { id: '01', title: 'Discovery & Consultation', icon: Handshake, desc: 'We define business goals, user priorities, and technical constraints to align scope from day one.', hoverColor: '#2563eb', hoverGradient: 'linear-gradient(135deg, rgba(37,99,235,0.06) 0%, rgba(124,58,237,0.04) 100%)', borderAccent: 'rgba(37,99,235,0.4)' },
  { id: '02', title: 'Strategy & Planning', icon: Compass, desc: 'A practical roadmap is created with milestones, architecture direction, and measurable outcomes.', hoverColor: '#7c3aed', hoverGradient: 'linear-gradient(135deg, rgba(124,58,237,0.06) 0%, rgba(219,39,119,0.04) 100%)', borderAccent: 'rgba(124,58,237,0.4)' },
  { id: '03', title: 'Design & Prototyping', icon: LayoutTemplate, desc: 'We build clean UX flows and prototypes so stakeholders validate direction before development.', hoverColor: '#db2777', hoverGradient: 'linear-gradient(135deg, rgba(219,39,119,0.06) 0%, rgba(234,88,12,0.04) 100%)', borderAccent: 'rgba(219,39,119,0.4)' },
  { id: '04', title: 'Development & Integration', icon: Code2, desc: 'We ship in iterative sprints while integrating APIs, data systems, and core product logic.', hoverColor: '#ea580c', hoverGradient: 'linear-gradient(135deg, rgba(234,88,12,0.06) 0%, rgba(202,138,4,0.04) 100%)', borderAccent: 'rgba(234,88,12,0.4)' },
  { id: '05', title: 'Testing & Optimization', icon: FlaskConical, desc: 'Performance, QA, and security checks ensure your product is stable and production-ready.', hoverColor: '#059669', hoverGradient: 'linear-gradient(135deg, rgba(5,150,105,0.06) 0%, rgba(13,148,136,0.04) 100%)', borderAccent: 'rgba(5,150,105,0.4)' },
  { id: '06', title: 'Launch & Ongoing Support', icon: Rocket, desc: 'We launch with confidence and continue improving through post-release monitoring and support.', hoverColor: '#0284c7', hoverGradient: 'linear-gradient(135deg, rgba(2,132,199,0.06) 0%, rgba(37,99,235,0.04) 100%)', borderAccent: 'rgba(2,132,199,0.4)' },
];

const benefits = [
  { title: 'Fast Delivery', icon: Timer, text: 'Milestone-based execution accelerates time to value.' },
  { title: 'Scalable Architecture', icon: Workflow, text: 'Built for future growth, integrations, and stability.' },
  { title: 'Clean UI/UX', icon: Sparkles, text: 'A clear, intuitive, and modern interface users trust.' },
  { title: 'Secure Systems', icon: ShieldCheck, text: 'Enterprise-grade security embedded throughout delivery.' },
  { title: 'Ongoing Support', icon: LifeBuoy, text: 'Post-launch iteration keeps your platform running smoothly.' },
];

const faqs = [
  { q: 'How long does a project take?', a: 'Most projects take 6 to 16 weeks depending on complexity, integrations, and feedback cadence. We break work down into 2-week sprints.' },
  { q: 'How do payments work?', a: 'Payments are milestone-based. They are aligned with delivery phases for maximum transparency, predictability, and shared risk.' },
  { q: 'Do you provide support after delivery?', a: 'Yes. We provide comprehensive post-launch support, continuous optimization cycles, and long-term product improvement services.' },
];

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const activeColor = hoveredStep ? processSteps.find(s => s.id === hoveredStep)?.hoverColor : null;

  return (
    <div style={{ background: '#fcfcfc', minHeight: '100vh', color: '#0f172a', paddingBottom: '40px' }}>
      
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', padding: '160px 0 80px', overflow: 'hidden' }}>
        {/* Light subtle background gradients */}
        <div style={{ position: 'absolute', top: '-10%', left: '-10%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-10%', width: '50%', height: '70%', background: 'radial-gradient(circle, rgba(124,58,237,0.04) 0%, transparent 60%)', filter: 'blur(60px)', pointerEvents: 'none' }} />
        
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <motion.div initial={{ opacity: 0, y: 40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }} style={{ textAlign: 'center', maxWidth: '840px', margin: '0 auto' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 18px', background: '#eff6ff', borderRadius: '999px', border: '1px solid #bfdbfe', marginBottom: '28px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ color: '#1d4ed8', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Process</span>
            </div>
            <h1 style={{ fontSize: 'clamp(2.8rem, 6vw, 4.5rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.1, letterSpacing: '-0.03em', margin: '0 0 24px 0' }}>
              How We Turn Your Ideas Into{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', display: 'inline-block' }}>Scalable Digital Products</span>
            </h1>
            <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.6, maxWidth: '640px', margin: '0 auto 48px', fontWeight: 400 }}>
              Afrinia follows a structured delivery model that balances speed, quality, and long-term scalability. No guesswork, just precision engineering.
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: '#111', color: '#fff', padding: '16px 32px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 600, border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Get Started <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/book-demo')} style={{ background: '#fff', color: '#0f172a', padding: '16px 32px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 600, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc';}} onMouseOut={e => {e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#fff';}}>
                Book Demo <ArrowUpRight size={18} color="#64748b" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Visual Workflow Section */}
      <section style={{ padding: '40px 0 80px', background: '#fcfcfc' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '16px' }}>
            {['Idea', 'Strategy', 'Design', 'Build', 'Launch'].map((step, i) => (
              <div key={step} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                <motion.div whileHover={{ y: -3, boxShadow: '0 10px 20px rgba(37,99,235,0.08)' }} style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '14px 28px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 600, color: '#0f172a', boxShadow: '0 4px 10px rgba(0,0,0,0.02)', cursor: 'default', transition: 'all 0.3s ease' }}>
                  {step}
                </motion.div>
                {i < 4 && (
                  <motion.div animate={{ x: [0, 5, 0] }} transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}>
                    <ArrowRight size={20} color="#cbd5e1" />
                  </motion.div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Process */}
      <section style={{ padding: '100px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '900px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Step-by-Step Process</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '16px' }}>Our proven methodology guarantees clarity at every milestone.</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical connecting line */}
            <div style={{ position: 'absolute', top: '20px', bottom: '20px', left: '39px', width: '2px', background: 'linear-gradient(180deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.2) 15%, rgba(37,99,235,0.2) 85%, rgba(37,99,235,0) 100%)', zIndex: 0 }}>
              <motion.div 
                animate={{ 
                  opacity: activeColor ? 1 : 0, 
                  background: activeColor || 'transparent',
                  boxShadow: activeColor ? `0 0 12px ${activeColor}` : 'none'
                }} 
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', inset: 0 }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '48px' }}>
              {processSteps.map((step, idx) => {
                const isHovered = hoveredStep === step.id;
                return (
                  <motion.div 
                    key={step.id} 
                    initial={{ opacity: 0, x: -20 }} 
                    whileInView={{ opacity: 1, x: 0 }} 
                    viewport={{ once: true, margin: '-50px' }} 
                    transition={{ duration: 0.6, delay: idx * 0.1 }} 
                    style={{ display: 'flex', gap: '32px', position: 'relative', zIndex: 1 }}
                    onHoverStart={() => setHoveredStep(step.id)}
                    onHoverEnd={() => setHoveredStep(null)}
                    onTap={() => setHoveredStep(isHovered ? null : step.id)}
                  >
                    
                    {/* Timeline Icon Node */}
                    <div style={{ width: '80px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
                      <motion.div 
                        animate={{ 
                          scale: isHovered ? 1.15 : 1, 
                          background: isHovered ? step.hoverColor : '#fff',
                          borderColor: isHovered ? step.hoverColor : '#eff6ff',
                          color: isHovered ? '#fff' : '#2563eb'
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ width: '64px', height: '64px', borderRadius: '20px', border: '2px solid #eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 10px 25px rgba(37,99,235,0.08)' }}
                      >
                        <motion.div animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }} transition={{ duration: 0.4 }}>
                          <step.icon size={28} strokeWidth={2.5} />
                        </motion.div>
                      </motion.div>
                    </div>

                    {/* Card Content */}
                    <div style={{ flex: 1 }}>
                      <motion.div 
                        animate={{ 
                          y: isHovered ? -6 : 0, 
                          scale: isHovered ? 1.02 : 1,
                          boxShadow: isHovered ? `0 20px 40px rgba(0,0,0,0.08), 0 0 0 1px ${step.borderAccent}` : '0 10px 30px rgba(0,0,0,0.02), 0 0 0 1px transparent',
                          background: isHovered ? step.hoverGradient : '#fff',
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ borderRadius: '24px', padding: '40px', border: '1px solid #f1f5f9', position: 'relative', overflow: 'hidden' }}
                      >
                        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '16px' }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                            <motion.span 
                               animate={{ color: isHovered ? step.hoverColor : '#94a3b8' }}
                               transition={{ duration: 0.3 }}
                               style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}
                            >
                              STEP {step.id}
                            </motion.span>
                            <h3 style={{ fontSize: '1.5rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.01em' }}>{step.title}</h3>
                          </div>
                          
                          <AnimatePresence>
                            {isHovered && (
                              <motion.div 
                                initial={{ opacity: 0, x: -10 }} 
                                animate={{ opacity: 1, x: 0 }} 
                                exit={{ opacity: 0, x: -10 }}
                                transition={{ duration: 0.2 }}
                              >
                                <ArrowRight size={24} color={step.hoverColor} />
                              </motion.div>
                            )}
                          </AnimatePresence>
                        </div>
                        
                        <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{step.desc}</p>
                      </motion.div>
                    </div>
                    
                  </motion.div>
                );
              })}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Get Section */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>What You Get</h2>
            <p style={{ fontSize: '1.1rem', color: '#64748b', marginTop: '16px' }}>Enterprise-ready delivery standards baked into every project.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '24px' }}>
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }} whileHover={{ y: -6, boxShadow: '0 20px 40px rgba(0,0,0,0.05)', borderColor: '#dbeafe' }} style={{ background: '#f8fafc', borderRadius: '24px', padding: '32px', border: '1px solid #f1f5f9', display: 'flex', flexDirection: 'column', gap: '20px', transition: 'all 0.3s ease' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: '#eff6ff', color: '#2563eb', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <benefit.icon size={28} strokeWidth={2} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.01em' }}>{benefit.title}</h3>
                  <p style={{ fontSize: '1.05rem', color: '#64748b', lineHeight: 1.6, margin: 0 }}>{benefit.text}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Experience Section */}
      <section style={{ padding: '100px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(400px, 1fr))', gap: '64px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#fef2f2', borderRadius: '999px', border: '1px solid #fecaca', marginBottom: '24px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ color: '#dc2626', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Client Experience</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.2, marginBottom: '24px' }}>A Transparent, Calm, and Accountable Process.</h2>
              <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.7, marginBottom: '32px' }}>
                We believe that great software is built on trust. Our clients experience a clear roadmap with weekly visibility, structured communication, and no surprises. You are always in the loop.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {['Weekly progress reports & demos', 'Direct access to the engineering team', 'Milestone-based approvals for predictability'].map(item => (
                  <div key={item} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                    <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={16} color="#2563eb" strokeWidth={3} />
                    </div>
                    <span style={{ fontSize: '1.05rem', color: '#334155', fontWeight: 500 }}>{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ background: '#fff', borderRadius: '32px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.05)', position: 'relative' }}>
              <MessageSquare size={36} color="#cbd5e1" style={{ marginBottom: '24px' }} />
              <p style={{ fontSize: '1.25rem', color: '#0f172a', fontWeight: 500, lineHeight: 1.6, marginBottom: '40px' }}>
                "The most organized and transparent development team we've ever worked with. They delivered exactly what was promised, on time, and the code quality was exceptional."
              </p>
              <div style={{ display: 'flex', alignItems: 'center', gap: '16px', borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#64748b', fontSize: '1.2rem' }}>
                  A
                </div>
                <div>
                  <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.1rem' }}>Global SaaS Platform</div>
                  <div style={{ fontSize: '0.95rem', color: '#64748b', fontWeight: 500 }}>Enterprise Client</div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section style={{ padding: '120px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '800px' }}>
          <div style={{ textAlign: 'center', marginBottom: '64px' }}>
            <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Common Questions</h2>
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

      {/* 7. Final CTA Section */}
      <section style={{ padding: '40px 0 80px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1000px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)', borderRadius: '48px', padding: '80px 40px', textAlign: 'center', border: '1px solid #bfdbfe', boxShadow: '0 20px 40px rgba(37,99,235,0.05)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '6px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
            <h2 style={{ fontSize: 'clamp(2.2rem, 4vw, 3.5rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '24px' }}>Ready to Build Something Powerful?</h2>
            <p style={{ fontSize: '1.15rem', color: '#475569', maxWidth: '600px', margin: '0 auto 40px', lineHeight: 1.6 }}>
              Work with a team that combines structured execution with modern product engineering. Let's discuss your next project.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: '#2563eb', color: '#fff', padding: '16px 36px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 700, border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(37,99,235,0.3)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'} onMouseOut={e => e.currentTarget.style.background = '#2563eb'}>
                Get Started <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/contact')} style={{ background: '#fff', color: '#0f172a', padding: '16px 36px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 700, border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e => {e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#94a3b8';}} onMouseOut={e => {e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#cbd5e1';}}>
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
