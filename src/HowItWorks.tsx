import { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useTransform, useSpring } from 'framer-motion';
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
  Sparkles,
  Users,
  Zap
} from 'lucide-react';

const workflows = [
  { step: 'Idea', sub: 'Concept Validation', gradient: 'linear-gradient(135deg, #2563eb 0%, #60a5fa 100%)', color: '#2563eb' },
  { step: 'Strategy', sub: 'Roadmap & Architecture', gradient: 'linear-gradient(135deg, #7c3aed 0%, #a78bfa 100%)', color: '#7c3aed' },
  { step: 'Design', sub: 'UX/UI Prototyping', gradient: 'linear-gradient(135deg, #db2777 0%, #f472b6 100%)', color: '#db2777' },
  { step: 'Build', sub: 'Agile Engineering', gradient: 'linear-gradient(135deg, #ea580c 0%, #fb923c 100%)', color: '#ea580c' },
  { step: 'Launch', sub: 'Deployment & Scale', gradient: 'linear-gradient(135deg, #059669 0%, #34d399 100%)', color: '#059669' },
];

const processSteps = [
  { 
    id: '01', title: 'Discovery & Consultation', icon: Handshake, 
    desc: 'We begin by defining your core business goals, target audience, and primary technical constraints. This ensures our entire team aligns perfectly with your scope from day one, minimizing risks and preventing costly pivots later in the cycle.', 
    details: ['Market & Competitor Analysis', 'Technical Feasibility Study', 'Resource & Timeline Estimation'],
    hoverColor: '#2563eb', borderAccent: 'rgba(37,99,235,0.25)' 
  },
  { 
    id: '02', title: 'Strategy & Planning', icon: Compass, 
    desc: 'With a clear understanding of your goals, we craft a practical and aggressive roadmap. We map out the exact architecture, technology stack, and establish measurable milestones so you know exactly what to expect and when.', 
    details: ['System Architecture Design', 'Milestone & Sprint Planning', 'Risk Mitigation Strategy'],
    hoverColor: '#7c3aed', borderAccent: 'rgba(124,58,237,0.25)' 
  },
  { 
    id: '03', title: 'Design & Prototyping', icon: LayoutTemplate, 
    desc: 'Before writing a single line of code, we build clean UX flows and interactive prototypes. This allows key stakeholders to visualize the product, validate user journeys, and provide feedback on the direction seamlessly.', 
    details: ['Wireframing & User Flows', 'High-Fidelity UI Mockups', 'Interactive Clickable Prototypes'],
    hoverColor: '#db2777', borderAccent: 'rgba(219,39,119,0.25)' 
  },
  { 
    id: '04', title: 'Development & Integration', icon: Code2, 
    desc: 'Our engineering team ships in structured, iterative sprints. We focus on writing clean, scalable code while simultaneously integrating essential third-party APIs, robust data systems, and your core business logic.', 
    details: ['Agile Sprint Execution', 'Custom API Development', 'Third-Party Systems Integration'],
    hoverColor: '#ea580c', borderAccent: 'rgba(234,88,12,0.25)' 
  },
  { 
    id: '05', title: 'Testing & Optimization', icon: FlaskConical, 
    desc: 'Quality is absolute and non-negotiable. We conduct rigorous manual and automated testing, covering performance benchmarking, security audits, and cross-platform QA to ensure your product is truly production-ready.', 
    details: ['Automated Unit & E2E Testing', 'Load & Performance Benchmarking', 'Vulnerability & Security Audits'],
    hoverColor: '#059669', borderAccent: 'rgba(5,150,105,0.25)' 
  },
  { 
    id: '06', title: 'Launch & Ongoing Support', icon: Rocket, 
    desc: 'We execute a highly orchestrated launch sequence to ensure zero downtime. Post-launch, we shift into active monitoring mode, providing continuous optimization cycles and immediate engineering support for any scaling needs.', 
    details: ['Zero-Downtime Deployment', 'Real-Time System Monitoring', 'Continuous Feature Optimization'],
    hoverColor: '#0284c7', borderAccent: 'rgba(2,132,199,0.25)' 
  },
];

const benefits = [
  { title: 'Fast Delivery Cycles', icon: Timer, text: 'Our milestone-based execution framework accelerates your time-to-value. By utilizing parallel work streams and agile methodologies, we guarantee rapid deployment without cutting corners.', baseColor: '#3b82f6', color1: '#2563eb', color2: '#93c5fd' },
  { title: 'Scalable Architecture', icon: Workflow, text: 'We don’t just build for today. Your infrastructure is engineered from the ground up for future growth, supporting massive user loads and complex enterprise integrations seamlessly.', baseColor: '#8b5cf6', color1: '#7c3aed', color2: '#c4b5fd' },
  { title: 'Clean, Intuitive UI/UX', icon: Sparkles, text: 'First impressions matter. We deliver crystal-clear, modern interfaces that your users will immediately trust, drastically reducing onboarding friction and boosting platform retention.', baseColor: '#ec4899', color1: '#db2777', color2: '#f9a8d4' },
  { title: 'Enterprise-Grade Security', icon: ShieldCheck, text: 'Security isn’t an afterthought. We embed rigorous enterprise-grade security protocols, end-to-end encryption, and compliance checks directly into our delivery pipeline from day one.', baseColor: '#10b981', color1: '#059669', color2: '#6ee7b7' },
  { title: 'Reliable Ongoing Support', icon: LifeBuoy, text: 'Our partnership extends far beyond launch day. Post-launch iterations, real-time monitoring, and dedicated engineering support keep your platform running smoothly 24/7.', baseColor: '#0ea5e9', color1: '#0284c7', color2: '#7dd3fc' },
  { title: 'Performance Optimization', icon: Zap, text: 'We meticulously optimize every layer of the application for lightning-fast load times. We ensure peak performance that drives maximum user retention and superior SEO rankings.', baseColor: '#f59e0b', color1: '#d97706', color2: '#fcd34d' }
];

const faqs = [
  { q: 'How long does a project generally take to complete?', a: 'Most projects take between 6 to 16 weeks depending on their overall complexity, required integrations, and feedback cadence. We break all work down into focused 2-week sprints, ensuring you see functional progress consistently.' },
  { q: 'How are payments structured throughout the process?', a: 'Payments are entirely milestone-based. They are perfectly aligned with specific delivery phases (such as Design Approval, Beta Launch, and Final Delivery). This structure ensures maximum transparency, predictability, and shared risk.' },
  { q: 'Do you provide engineering support after the product launches?', a: 'Yes, absolutely. We provide comprehensive post-launch support SLA packages. This includes continuous system optimization cycles, security patching, real-time uptime monitoring, and long-term product improvement services.' },
  { q: 'Can you integrate with our existing internal software?', a: 'Definitely. We specialize in building custom API layers and secure middleware to ensure our new solutions communicate seamlessly with your legacy databases, CRMs, or any proprietary software your team currently utilizes.' },
];

// --- Unique Interactive Components ---

function WorkflowCard({ wf, i, isLast }: any) {
  const [isHovered, setIsHovered] = useState(false);
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '20px' }}>
      <motion.div 
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        animate={{ 
           y: isHovered ? -8 : 0, 
           scale: isHovered ? 1.05 : 1,
           boxShadow: isHovered ? `0 20px 40px ${wf.color}50` : '0 4px 15px rgba(0,0,0,0.02)',
           borderColor: isHovered ? 'transparent' : '#e2e8f0' 
        }}
        transition={{ type: 'spring', stiffness: 300, damping: 20 }}
        style={{ background: '#fff', border: '1px solid #e2e8f0', padding: '24px 40px', borderRadius: '24px', textAlign: 'center', cursor: 'default', position: 'relative', overflow: 'hidden' }}
      >
        {/* Liquid Gradient Bubble Fill */}
        <motion.div 
           initial={false}
           animate={{ clipPath: isHovered ? 'circle(150% at 50% 100%)' : 'circle(0% at 50% 100%)' }}
           transition={{ duration: 0.4, ease: "easeOut" }}
           style={{ position: 'absolute', inset: 0, background: wf.gradient, zIndex: 0 }}
        />
        
        <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div animate={{ color: isHovered ? '#fff' : '#0f172a' }} transition={{ duration: 0.2 }} style={{ fontSize: '1.35rem', fontWeight: 800 }}>
             {wf.step}
          </motion.div>
          <motion.div animate={{ color: isHovered ? 'rgba(255,255,255,0.9)' : '#64748b' }} transition={{ duration: 0.2 }} style={{ fontSize: '0.95rem', fontWeight: 600, marginTop: '6px' }}>
             {wf.sub}
          </motion.div>
        </div>
      </motion.div>

      {!isLast && (
        <motion.div animate={{ x: isHovered ? 5 : [0, 5, 0], scale: isHovered ? 1.2 : 1 }} transition={isHovered ? { duration: 0.3 } : { repeat: Infinity, duration: 2, ease: "easeInOut" }}>
          <ArrowRight size={24} color={isHovered ? wf.color : "#cbd5e1"} />
        </motion.div>
      )}
    </div>
  )
}

function PremiumAuroraCard({ benefit }: any) {
  const [isHovered, setIsHovered] = useState(false);
  
  return (
    <motion.div 
       onHoverStart={() => setIsHovered(true)}
       onHoverEnd={() => setIsHovered(false)}
       animate={{ 
         y: isHovered ? -10 : 0, 
         scale: isHovered ? 1.02 : 1,
         background: isHovered ? '#0f172a' : '#fff',
         borderColor: isHovered ? benefit.baseColor : '#f1f5f9',
         boxShadow: isHovered ? `0 30px 60px ${benefit.color1}40` : '0 10px 30px rgba(0,0,0,0.02)'
       }}
       transition={{ duration: 0.4 }}
       style={{ position: 'relative', overflow: 'hidden', borderRadius: '32px', border: '1px solid', padding: '48px', cursor: 'default' }}
    >
       {/* Saturated Aurora Orbs */}
       <div style={{ position: 'absolute', inset: 0, zIndex: 0, pointerEvents: 'none', overflow: 'hidden', opacity: isHovered ? 1 : 0, transition: 'opacity 0.4s ease' }}>
          <motion.div 
             animate={isHovered ? { 
                scale: [1, 2.5, 1.5, 2], 
                x: [0, 80, -20, 0],
                y: [0, -40, 30, 0],
                rotate: [0, 90, 180, 360]
             } : { scale: 1, x: 0, y: 0 }}
             transition={{ duration: 8, repeat: Infinity, ease: 'linear' }}
             style={{ position: 'absolute', top: '10%', left: '10%', width: '120px', height: '120px', background: benefit.color1, borderRadius: '50%', filter: 'blur(45px)', opacity: 0.6 }}
          />
          <motion.div 
             animate={isHovered ? { 
                scale: [1, 1.5, 2.5, 1], 
                x: [0, -60, 40, 0],
                y: [0, 50, -20, 0],
                rotate: [0, -90, -180, -360]
             } : { scale: 1, x: 0, y: 0 }}
             transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
             style={{ position: 'absolute', bottom: '10%', right: '10%', width: '150px', height: '150px', background: benefit.color2, borderRadius: '50%', filter: 'blur(55px)', opacity: 0.6 }}
          />
       </div>

       {/* Overlay to ensure text readability */}
       <div style={{ position: 'absolute', inset: 0, background: 'rgba(15,23,42,0.4)', zIndex: 0, opacity: isHovered ? 1 : 0, transition: 'opacity 0.4s' }} />

       {/* Content */}
       <div style={{ position: 'relative', zIndex: 1 }}>
          <motion.div 
             animate={{ 
               backgroundColor: isHovered ? 'rgba(255,255,255,0.1)' : '#eff6ff', 
               color: isHovered ? '#fff' : benefit.baseColor,
               backdropFilter: isHovered ? 'blur(10px)' : 'none',
               border: isHovered ? '1px solid rgba(255,255,255,0.2)' : '1px solid transparent'
             }}
             transition={{ duration: 0.3 }}
             style={{ width: '64px', height: '64px', borderRadius: '20px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px' }}
          >
             <motion.div animate={{ rotate: isHovered ? 360 : 0 }} transition={{ duration: 0.8, ease: "backOut" }}>
               <benefit.icon size={32} strokeWidth={2} />
             </motion.div>
          </motion.div>
          
          <motion.h3 
            animate={{ color: isHovered ? '#fff' : '#0f172a' }} 
            transition={{ duration: 0.3 }}
            style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '16px', letterSpacing: '-0.01em' }}
          >
             {benefit.title}
          </motion.h3>
          <motion.div animate={{ width: isHovered ? '40px' : '0px', opacity: isHovered ? 1 : 0, marginBottom: isHovered ? '16px' : '0px' }} style={{ height: '3px', background: benefit.color1, borderRadius: '4px' }} transition={{ duration: 0.3 }} />
          <motion.p 
            animate={{ color: isHovered ? 'rgba(255,255,255,0.8)' : '#64748b' }} 
            transition={{ duration: 0.3 }}
            style={{ fontSize: '1.1rem', lineHeight: 1.7, margin: 0 }}
          >
             {benefit.text}
          </motion.p>
       </div>
    </motion.div>
  )
}

function StepRow({ step, idx, hoveredStep, setHoveredStep }: any) {
  const isHovered = hoveredStep === step.id;

  return (
     <motion.div 
        initial={{ opacity: 0, x: -20 }} 
        whileInView={{ opacity: 1, x: 0 }} 
        viewport={{ once: true, margin: '-50px' }} 
        transition={{ duration: 0.6, delay: idx * 0.1 }} 
        style={{ display: 'flex', gap: '40px', position: 'relative', zIndex: 1 }}
        onHoverStart={() => setHoveredStep(step.id)}
        onHoverEnd={() => setHoveredStep(null)}
        onTap={() => setHoveredStep(isHovered ? null : step.id)}
      >
        <div style={{ width: '80px', flexShrink: 0, display: 'flex', justifyContent: 'center' }}>
          <motion.div 
            animate={{ 
              scale: isHovered ? 1.1 : 1, 
              background: isHovered ? step.hoverColor : '#fff',
              borderColor: isHovered ? step.hoverColor : '#eff6ff',
              color: isHovered ? '#fff' : '#2563eb',
              boxShadow: isHovered ? `0 10px 25px ${step.hoverColor}60` : '0 10px 25px rgba(37,99,235,0.08)'
            }}
            transition={{ duration: 0.3 }}
            style={{ width: '64px', height: '64px', borderRadius: '20px', border: '2px solid #eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center' }}
          >
            <motion.div animate={{ rotate: isHovered ? [0, -10, 10, 0] : 0 }} transition={{ duration: 0.4 }}>
              <step.icon size={28} strokeWidth={2.5} />
            </motion.div>
          </motion.div>
        </div>

        <div style={{ flex: 1 }}>
          <motion.div 
            animate={{ 
              y: isHovered ? -5 : 0, 
              boxShadow: isHovered ? `0 25px 50px rgba(0,0,0,0.05), 0 0 0 1px ${step.borderAccent}` : '0 4px 20px rgba(0,0,0,0.02), 0 0 0 1px transparent',
            }}
            transition={{ duration: 0.3 }}
            style={{ borderRadius: '24px', padding: '40px 48px', border: '1px solid #f1f5f9', background: '#fff', position: 'relative', overflow: 'hidden' }}
          >
            {/* Sliding Left Border Accent */}
            <motion.div 
              animate={{ width: isHovered ? '8px' : '0px' }}
              transition={{ duration: 0.3 }}
              style={{ position: 'absolute', left: 0, top: 0, bottom: 0, background: step.hoverColor }}
            />

            <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: '20px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <motion.div 
                        animate={{ 
                          background: isHovered ? `${step.hoverColor}15` : 'transparent',
                          color: isHovered ? step.hoverColor : '#94a3b8',
                          padding: isHovered ? '4px 12px' : '0px 0px',
                          borderRadius: '8px'
                        }}
                        transition={{ duration: 0.3 }}
                        style={{ fontSize: '0.85rem', fontWeight: 800, letterSpacing: '0.1em', textTransform: 'uppercase' }}
                    >
                      STEP {step.id}
                    </motion.div>
                    <h3 style={{ fontSize: '1.75rem', fontWeight: 800, color: '#0f172a', margin: 0, letterSpacing: '-0.01em' }}>{step.title}</h3>
                  </div>
                  
                  <motion.div 
                    animate={{ x: isHovered ? 0 : -10, opacity: isHovered ? 1 : 0 }} 
                    transition={{ duration: 0.3 }}
                  >
                    <ArrowRight size={28} color={step.hoverColor} />
                  </motion.div>
                </div>
                
                <p style={{ fontSize: '1.1rem', color: '#64748b', lineHeight: 1.7, margin: 0 }}>{step.desc}</p>
                
                {/* Accordion Details */}
                <AnimatePresence>
                  {isHovered && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0, marginTop: 0 }}
                      animate={{ height: 'auto', opacity: 1, marginTop: '28px' }}
                      exit={{ height: 0, opacity: 0, marginTop: 0 }}
                      transition={{ duration: 0.3, ease: 'easeOut' }}
                      style={{ overflow: 'hidden' }}
                    >
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '16px', paddingBottom: '8px' }}>
                        {step.details.map((detail: string, i: number) => (
                          <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                            <div style={{ marginTop: '2px', color: step.hoverColor }}>
                              <CheckCircle2 size={18} strokeWidth={2.5} />
                            </div>
                            <span style={{ fontSize: '0.95rem', color: '#475569', fontWeight: 500, lineHeight: 1.5 }}>{detail}</span>
                          </div>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
            </div>
          </motion.div>
        </div>
      </motion.div>
  )
}

function MetricCard({ value, label }: any) {
  const [isHovered, setIsHovered] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    setMousePos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
  };

  return (
    <motion.div 
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onMouseMove={handleMouseMove}
      whileHover={{ y: -8, scale: 1.05 }} 
      style={{ background: '#fff', borderRadius: '24px', padding: '32px', border: '1px solid #e2e8f0', textAlign: 'center', transition: 'all 0.3s ease', boxShadow: isHovered ? '0 20px 40px rgba(37,99,235,0.1)' : '0 10px 20px rgba(0,0,0,0.02)', position: 'relative', overflow: 'hidden' }}
    >
      <motion.div
        animate={{ opacity: isHovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{ position: 'absolute', inset: 0, background: `radial-gradient(300px circle at ${mousePos.x}px ${mousePos.y}px, rgba(37,99,235,0.08), transparent 60%)`, zIndex: 0, pointerEvents: 'none' }}
      />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <motion.div animate={{ scale: isHovered ? 1.1 : 1, color: isHovered ? '#1d4ed8' : '#2563eb' }} transition={{ type: "spring", stiffness: 300 }} style={{ fontSize: '3.5rem', fontWeight: 900, lineHeight: 1 }}>{value}</motion.div>
        <div style={{ fontSize: '1.05rem', color: '#64748b', fontWeight: 700, marginTop: '12px' }}>{label}</div>
      </div>
    </motion.div>
  )
}

// --- Main Page Component ---

export default function HowItWorksPage() {
  const navigate = useNavigate();
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [hoveredStep, setHoveredStep] = useState<string | null>(null);

  const activeColor = hoveredStep ? processSteps.find(s => s.id === hoveredStep)?.hoverColor : null;

  return (
    <div style={{ background: '#fcfcfc', minHeight: '100vh', color: '#0f172a', paddingBottom: '40px' }}>
      
      {/* 1. Hero Section */}
      <section style={{ position: 'relative', padding: '160px 0 80px', overflow: 'hidden' }}>
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
            <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.7, maxWidth: '700px', margin: '0 auto 48px', fontWeight: 400 }}>
              Afrinia follows a highly structured delivery model that perfectly balances rapid market speed, premium engineering quality, and long-term enterprise scalability. No guesswork, just precision.
            </p>
            <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2, duration: 0.8 }} style={{ display: 'flex', justifyContent: 'center', gap: '16px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: '#111', color: '#fff', padding: '16px 36px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 600, border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.transform = 'translateY(-2px)'} onMouseOut={e => e.currentTarget.style.transform = 'translateY(0)'}>
                Get Started <ArrowRight size={18} />
              </button>
              <button onClick={() => navigate('/book-demo')} style={{ background: '#fff', color: '#0f172a', padding: '16px 36px', borderRadius: '999px', fontSize: '1.05rem', fontWeight: 600, border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 4px 12px rgba(0,0,0,0.03)', transition: 'all 0.3s ease' }} onMouseOver={e => {e.currentTarget.style.borderColor = '#cbd5e1'; e.currentTarget.style.background = '#f8fafc';}} onMouseOut={e => {e.currentTarget.style.borderColor = '#e2e8f0'; e.currentTarget.style.background = '#fff';}}>
                Book Demo <ArrowUpRight size={18} color="#64748b" />
              </button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* 3. Visual Workflow Section */}
      <section style={{ padding: '20px 0 100px', background: '#fcfcfc' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', flexWrap: 'wrap', gap: '20px' }}>
            {workflows.map((wf, i) => (
              <WorkflowCard key={wf.step} wf={wf} i={i} isLast={i === workflows.length - 1} />
            ))}
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Process */}
      <section style={{ padding: '120px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9', borderBottom: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '960px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Step-by-Step Process</h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '16px', maxWidth: '600px', margin: '16px auto 0' }}>Our proven, milestone-driven methodology guarantees clarity, transparency, and accountability at every stage of the lifecycle.</p>
          </div>

          <div style={{ position: 'relative' }}>
            {/* Vertical connecting line */}
            <div style={{ position: 'absolute', top: '20px', bottom: '20px', left: '39px', width: '2px', background: 'linear-gradient(180deg, rgba(37,99,235,0) 0%, rgba(37,99,235,0.2) 15%, rgba(37,99,235,0.2) 85%, rgba(37,99,235,0) 100%)', zIndex: 0 }}>
              <motion.div 
                animate={{ 
                  opacity: activeColor ? 1 : 0, 
                  background: activeColor || 'transparent',
                  boxShadow: activeColor ? `0 0 16px ${activeColor}` : 'none'
                }} 
                transition={{ duration: 0.4 }}
                style={{ position: 'absolute', inset: 0 }} 
              />
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '64px' }}>
              {processSteps.map((step, idx) => (
                <StepRow key={step.id} step={step} idx={idx} hoveredStep={hoveredStep} setHoveredStep={setHoveredStep} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 4. What You Get Section (Interactive Grid) */}
      <section style={{ padding: '140px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Premium Engineering Standards</h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '16px', maxWidth: '650px', margin: '16px auto 0' }}>We refuse to compromise on quality. Every digital product we ship is equipped with enterprise-ready features and built to perform securely.</p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '32px', perspective: 1200 }}>
            {benefits.map((benefit, idx) => (
              <motion.div key={benefit.title} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.1 }}>
                <PremiumAuroraCard benefit={benefit} />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Real Experience Section */}
      <section style={{ padding: '120px 0', background: '#f8fafc', borderTop: '1px solid #f1f5f9' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(450px, 1fr))', gap: '80px', alignItems: 'center' }}>
            <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: '#fef2f2', borderRadius: '999px', border: '1px solid #fecaca', marginBottom: '24px' }}>
                <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#ef4444' }} />
                <span style={{ color: '#dc2626', fontSize: '0.85rem', fontWeight: 700, letterSpacing: '0.08em', textTransform: 'uppercase' }}>The Client Experience</span>
              </div>
              <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', lineHeight: 1.1, marginBottom: '24px' }}>A Transparent, Calm, and Accountable Process.</h2>
              <p style={{ fontSize: '1.2rem', color: '#64748b', lineHeight: 1.7, marginBottom: '40px' }}>
                We believe that phenomenal software is fundamentally built on trust. Our clients experience a beautifully clear roadmap filled with weekly visibility, highly structured communication channels, and absolutely no surprises. You are consistently in the loop.
              </p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
                {[
                  { title: 'Weekly progress reports & interactive demos', icon: Users },
                  { title: 'Direct Slack/Teams access to your dedicated engineers', icon: MessageSquare },
                  { title: 'Milestone-based approvals for absolute predictability', icon: CheckCircle2 }
                ].map((item, i) => (
                  <motion.div key={i} whileHover={{ x: 5 }} transition={{ duration: 0.2 }} style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
                    <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#eff6ff', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      <item.icon size={18} color="#2563eb" strokeWidth={2.5} />
                    </div>
                    <span style={{ fontSize: '1.15rem', color: '#334155', fontWeight: 600 }}>{item.title}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
            
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              <motion.div whileHover={{ y: -8, boxShadow: '0 30px 60px rgba(0,0,0,0.06)' }} style={{ background: '#fff', borderRadius: '32px', padding: '48px', border: '1px solid #e2e8f0', boxShadow: '0 20px 40px rgba(0,0,0,0.03)', position: 'relative', transition: 'all 0.4s ease' }}>
                <MessageSquare size={40} color="#cbd5e1" style={{ marginBottom: '24px' }} />
                <p style={{ fontSize: '1.35rem', color: '#0f172a', fontWeight: 500, lineHeight: 1.6, marginBottom: '40px' }}>
                  "The most organized and transparent engineering team we've ever partnered with. They delivered exactly what was promised, on time, and the code quality was exceptional across the board."
                </p>
                <div style={{ display: 'flex', alignItems: 'center', gap: '20px', borderTop: '1px solid #f1f5f9', paddingTop: '24px' }}>
                  <div style={{ width: '64px', height: '64px', borderRadius: '50%', background: '#f8fafc', border: '1px solid #e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 800, color: '#64748b', fontSize: '1.4rem' }}>
                    A
                  </div>
                  <div>
                    <div style={{ fontWeight: 800, color: '#0f172a', fontSize: '1.2rem' }}>Global SaaS Platform</div>
                    <div style={{ fontSize: '1rem', color: '#64748b', fontWeight: 600 }}>Enterprise Client</div>
                  </div>
                </div>
              </motion.div>
              
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
                <MetricCard value="98%" label="On-Time Delivery" />
                <MetricCard value="40+" label="Enterprise Launches" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 6. FAQ Section */}
      <section style={{ padding: '140px 0', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '850px' }}>
          <div style={{ textAlign: 'center', marginBottom: '80px' }}>
            <h2 style={{ fontSize: 'clamp(2.5rem, 4vw, 3.5rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.02em', margin: 0 }}>Common Questions</h2>
            <p style={{ fontSize: '1.2rem', color: '#64748b', marginTop: '16px' }}>Everything you need to know about partnering with our technical teams.</p>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {faqs.map((faq, index) => {
              const isOpen = openFaq === index;
              return (
                <motion.div key={index} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.1 }} style={{ border: '1px solid #e2e8f0', borderRadius: '24px', overflow: 'hidden', background: isOpen ? '#f8fafc' : '#fff', transition: 'all 0.3s ease' }}>
                  <button onClick={() => setOpenFaq(isOpen ? null : index)} style={{ width: '100%', padding: '32px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between', background: 'transparent', border: 'none', cursor: 'pointer', textAlign: 'left' }}>
                    <span style={{ fontSize: '1.25rem', fontWeight: 800, color: isOpen ? '#2563eb' : '#0f172a', transition: 'color 0.3s ease', paddingRight: '20px' }}>{faq.q}</span>
                    <div style={{ width: '40px', height: '40px', flexShrink: 0, borderRadius: '50%', background: isOpen ? '#dbeafe' : '#f1f5f9', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s ease' }}>
                      <ChevronDown size={24} color={isOpen ? '#2563eb' : '#64748b'} style={{ transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)', transition: 'transform 0.3s ease' }} />
                    </div>
                  </button>
                  <AnimatePresence>
                    {isOpen && (
                      <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}>
                        <div style={{ padding: '0 40px 40px', color: '#64748b', fontSize: '1.15rem', lineHeight: 1.7 }}>
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
      <section style={{ padding: '40px 0 100px', background: '#fff' }}>
        <div className="container" style={{ maxWidth: '1100px' }}>
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: 'linear-gradient(135deg, #eff6ff 0%, #e0e7ff 100%)', borderRadius: '48px', padding: '100px 60px', textAlign: 'center', border: '1px solid #bfdbfe', boxShadow: '0 30px 60px rgba(37,99,235,0.05)', position: 'relative', overflow: 'hidden' }}>
            <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: '8px', background: 'linear-gradient(90deg, #3b82f6, #8b5cf6)' }} />
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.02em', marginBottom: '24px' }}>Ready to Build Something Powerful?</h2>
            <p style={{ fontSize: '1.25rem', color: '#475569', maxWidth: '700px', margin: '0 auto 48px', lineHeight: 1.7 }}>
              Work with a high-performance team that combines structured execution with modern product engineering to deliver robust digital solutions. Let's discuss your next breakthrough project.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '20px', flexWrap: 'wrap' }}>
              <button onClick={() => navigate('/contact')} style={{ background: '#2563eb', color: '#fff', padding: '20px 48px', borderRadius: '999px', fontSize: '1.15rem', fontWeight: 800, border: 'none', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 10px 30px rgba(37,99,235,0.3)', transition: 'all 0.3s ease' }} onMouseOver={e => e.currentTarget.style.background = '#1d4ed8'} onMouseOut={e => e.currentTarget.style.background = '#2563eb'}>
                Get Started <ArrowRight size={20} />
              </button>
              <button onClick={() => navigate('/contact')} style={{ background: '#fff', color: '#0f172a', padding: '20px 48px', borderRadius: '999px', fontSize: '1.15rem', fontWeight: 800, border: '1px solid #cbd5e1', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', transition: 'all 0.3s ease', boxShadow: '0 4px 10px rgba(0,0,0,0.02)' }} onMouseOver={e => {e.currentTarget.style.background = '#f8fafc'; e.currentTarget.style.borderColor = '#94a3b8';}} onMouseOut={e => {e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#cbd5e1';}}>
                Contact Us
              </button>
            </div>
          </motion.div>
        </div>
      </section>
      
    </div>
  );
}
