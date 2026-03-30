import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Server, Globe, XCircle, CheckCircle2, Zap } from 'lucide-react';

const fadeIn: any = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" }
  }
};

const staggerContainer: any = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15
    }
  }
};

export default function App() {
  const [mounted, setMounted] = useState(false);
  const [activeNav, setActiveNav] = useState('About Us');
  const navLinks = ['About Us', 'Solutions', 'Team', 'Events', 'Contacts'];

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="app-container">
      {/* Navigation */}
      <div style={{ position: 'sticky', top: '24px', zIndex: 100, display: 'flex', justifyContent: 'center', padding: '0 24px', pointerEvents: 'none' }}>
        <motion.nav
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          style={{
            pointerEvents: 'auto',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            padding: '16px 32px',
            background: 'rgba(255, 255, 255, 0.9)',
            backdropFilter: 'blur(30px)',
            borderRadius: '9999px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.1), 0 0 0 1px rgba(255,255,255,0.5)',
            width: '100%',
            maxWidth: '1252px'
          }}
        >
          <div style={{ fontWeight: 800, fontSize: '1.4rem', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', letterSpacing: '-0.02em' }}>
            <div style={{ width: '28px', height: '28px', background: 'var(--accent-blue)', borderRadius: '8px', boxShadow: '0 4px 12px rgba(37,99,235,0.4)' }}></div>
            NexTech
          </div>

          <div style={{ display: 'flex', gap: '4px', fontSize: '1.05rem', fontWeight: 600, letterSpacing: '-0.01em' }} className="desktop-nav">
            {navLinks.map((link) => (
              <div
                key={link}
                style={{ position: 'relative', cursor: 'pointer', padding: '10px 24px', borderRadius: '9999px' }}
                onClick={() => setActiveNav(link)}
              >
                {activeNav === link && (
                  <motion.div
                    layoutId="nav-indicator"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      background: '#111',
                      borderRadius: '9999px',
                      boxShadow: '0 8px 24px rgba(0,0,0,0.15)',
                      zIndex: 0
                    }}
                    transition={{ type: 'spring', bounce: 0.2, duration: 0.6 }}
                  />
                )}
                <span style={{ position: 'relative', zIndex: 1, color: activeNav === link ? '#fff' : '#444', transition: 'all 0.3s ease' }}>
                  {link}
                </span>
              </div>
            ))}
          </div>

          <button style={{ 
            background: 'var(--accent-blue)', color: '#fff', border: 'none', 
            borderRadius: '9999px', padding: '14px 28px', fontSize: '1.05rem', fontWeight: 700,
            display: 'flex', alignItems: 'center', gap: '8px', cursor: 'pointer',
            boxShadow: '0 8px 20px rgba(37,99,235,0.3)', transition: 'all 0.3s ease'
          }}>
            Book Demo <ArrowUpRight size={18} strokeWidth={2.5} />
          </button>
        </motion.nav>
      </div>

      {/* Hero Wrapper */}
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '120px 0 140px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
        {/* Hero Background Clean Theme */}
        <div style={{
          position: 'absolute', top: 0, left: 0, right: 0, bottom: 0,
          background: 'var(--bg-main)',
          zIndex: -2,
        }} />

        <section className="container" style={{ display: 'flex', flexWrap: 'wrap', gap: '24px', alignItems: 'center', justifyContent: 'space-between', zIndex: 1, position: 'relative' }}>
          {/* Left Column */}
          <div style={{ flex: '0 1 550px' }}>
            <h1 style={{ fontSize: 'clamp(3.4rem, 5.5vw, 5.2rem)', fontWeight: 700, lineHeight: 1.05, color: '#000', letterSpacing: '-0.04em', margin: 0 }}>
              Digital consult<br />
              that{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--accent-blue)' }}>
                leads
                <span style={{ position: 'absolute', bottom: '10px', left: 0, width: '100%', height: '8px', background: 'var(--accent-blue)', opacity: 0.2, zIndex: -1, borderRadius: '4px' }}></span>
              </span>{' '}
              you<br />
              to your <span style={{ color: 'var(--accent-blue)' }}>goals</span>
            </h1>

            <p style={{ marginTop: '24px', fontSize: '1.05rem', color: '#555', lineHeight: 1.6, maxWidth: '400px' }}>
              Data-driven insights for tech startups and executives.
            </p>

            <div style={{ display: 'flex', alignItems: 'center', gap: '24px', marginTop: '40px' }}>
              <button style={{
                background: '#111', color: '#fff',
                padding: '16px 24px', borderRadius: '40px',
                fontSize: '1rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '40px',
                border: 'none', cursor: 'pointer', boxShadow: '0 8px 16px rgba(0,0,0,0.1)'
              }}>
                Reinforce your team <ArrowRight size={18} color="#aaa" />
              </button>

              <div>
                <div style={{ fontSize: '1.4rem', fontWeight: 700, color: '#111' }}>$150.00</div>
                <div style={{ fontSize: '0.85rem', color: '#888' }}>per month</div>
              </div>
            </div>

            <hr style={{ border: 'none', borderTop: '1px solid #e5e5e5', margin: '48px 0 32px 0' }} />

            <div style={{ display: 'flex', alignItems: 'center', justifyItems: 'space-between', gap: '32px' }}>
              <p style={{ fontSize: '0.85rem', color: '#555', maxWidth: '300px', lineHeight: 1.5, margin: 0, flex: 1 }}>
                We provide our services to many worldwide leading companies.
              </p>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <ArrowRight size={16} color="#111" style={{ transform: 'rotate(180deg)' }} />
                </button>
                <button style={{ width: '40px', height: '40px', borderRadius: '50%', border: 'none', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <ArrowRight size={16} color="#111" />
                </button>
              </div>
            </div>

            <div style={{ display: 'flex', alignItems: 'center', gap: '32px', marginTop: '24px' }}>
              {/* Logos */}
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', fontWeight: 700, fontSize: '1.2rem', color: '#111' }}>
                <div style={{ width: '20px', height: '14px', background: '#111', borderRadius: '10px 10px 0 0' }}></div> Headway
              </div>
              <div style={{ fontWeight: 800, fontSize: '1.2rem', color: '#111', letterSpacing: '-0.05em' }}>
                G&STC
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '6px', fontWeight: 700, fontSize: '1.1rem', color: '#111' }}>
                <div style={{ width: '20px', height: '20px', borderRadius: '50%', border: '2px solid #111', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '12px' }}>$</div> SteadyMD
              </div>
            </div>
          </div>

          {/* Right Column (Complex Cutout Image) */}
          <div style={{ flex: '1 1 500px', position: 'relative', minHeight: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div className="hero-img-wrapper">
              <img 
                src="https://images.unsplash.com/photo-1556157382-97eda2d62296?auto=format&fit=crop&w=800&q=80" 
                alt="Tech creative" 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
              
              {/* Top Right Cutout */}
              <div className="cutout-tr">
                <div style={{ position: 'absolute', top: '15px', right: '15px', width: '60px', height: '60px', background: '#111', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', cursor: 'pointer', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                  <Globe color="#fff" size={24} />
                </div>
              </div>

              {/* Bottom Left Cutout */}
              <div className="cutout-bl">
                <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'flex-end', height: '100%', paddingBottom: '16px', gap: '12px' }}>
                  <img src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=100&q=80" alt="profile" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--bg-main)' }} />
                  <img src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=100&q=80" alt="profile" style={{ width: '48px', height: '48px', borderRadius: '50%', border: '2px solid var(--bg-main)' }} />
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginTop: '4px', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>

      {/* Problem -> Solution Section */}
      <section className="container" style={{ marginTop: '100px', marginBottom: '80px', position: 'relative' }}>
        <div style={{ textAlign: 'center', marginBottom: '64px' }}>
          <h2 style={{ fontSize: 'clamp(2rem, 4vw, 3.2rem)', fontWeight: 700, color: '#111', letterSpacing: '-0.02em', marginBottom: '16px' }}>
            Tech should scale your business, <span style={{ color: 'var(--text-muted)', fontWeight: 400 }}>not slow it down.</span>
          </h2>
          <p style={{ fontSize: '1.1rem', color: '#555', maxWidth: '600px', margin: '0 auto', lineHeight: 1.6 }}>
            Most businesses get stuck with rigid tools or mismanaged development cycles. We fix that.
          </p>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '40px', position: 'relative' }}>
          {/* Desktop Split Screen Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '32px', alignItems: 'stretch' }}>
            
            {/* Problem Side */}
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{
                background: '#fafafa',
                border: '1px solid rgba(0,0,0,0.05)',
                borderRadius: 'var(--radius-lg)',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px'
              }}
            >
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#ff4d4f', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                The Frustration
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { title: "Manual tasks are draining your team", desc: "You're losing hours to repetitive data entry and disjointed systems." },
                  { title: "Off-the-shelf tools don't fit", desc: "Pre-built software forces you to change your workflow instead of adapting to it." },
                  { title: "AI feels out of reach", desc: "You know AI can help, but it feels like a confusing buzzword rather than a practical tool." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <XCircle color="#ff4d4f" size={24} style={{ flexShrink: 0, marginTop: '2px' }} />
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#111', marginBottom: '6px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: '#666', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Solution Side */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{
                background: '#111',
                color: '#fff',
                borderRadius: 'var(--radius-lg)',
                padding: '48px',
                display: 'flex',
                flexDirection: 'column',
                gap: '32px',
                boxShadow: '0 24px 48px rgba(0,0,0,0.1)'
              }}
            >
              <div style={{ fontSize: '0.9rem', fontWeight: 600, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                The Reality We Deliver
              </div>
              
              <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
                {[
                  { title: "Custom Web & App Dev", desc: "Software built specifically around your business needs, so you never have to compromise your workflow." },
                  { title: "Seamless Systems Integration", desc: "We connect your tools into one cohesive ecosystem, eliminating manual data entry forever." },
                  { title: "Practical AI Automation", desc: "Turn hours of work into seconds. We implement AI that directly boosts your bottom line." }
                ].map((item, i) => (
                  <div key={i} style={{ display: 'flex', gap: '16px', alignItems: 'flex-start' }}>
                    <div style={{ background: 'rgba(74, 222, 128, 0.1)', borderRadius: '50%', padding: '6px' }}>
                      <CheckCircle2 color="#4ade80" size={20} style={{ flexShrink: 0 }} />
                    </div>
                    <div>
                      <h4 style={{ fontSize: '1.1rem', fontWeight: 600, color: '#fff', marginBottom: '6px' }}>{item.title}</h4>
                      <p style={{ fontSize: '0.95rem', color: 'rgba(255,255,255,0.7)', lineHeight: 1.5 }}>{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Bridge / Transition Element */}
          <div className="transition-bridge" style={{ 
            position: 'absolute', 
            top: '50%', 
            left: '50%', 
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            pointerEvents: 'none',
            display: 'flex',
            justifyContent: 'center'
          }}>
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              style={{ 
                background: 'var(--accent-blue)',
                color: '#fff',
                padding: '16px 32px',
                borderRadius: '9999px',
                fontWeight: 700,
                fontSize: '1.05rem',
                boxShadow: '0 12px 24px rgba(37,99,235,0.3)',
                display: 'inline-flex',
                alignItems: 'center',
                gap: '12px',
                whiteSpace: 'nowrap'
              }}
            >
              That's where we come in <ArrowRight size={20} />
            </motion.div>
          </div>
        </div>

        <style>{`
          @media (max-width: 768px) {
            .transition-bridge {
              position: relative !important;
              top: 0 !important;
              left: 0 !important;
              transform: none !important;
              margin-top: -16px;
              margin-bottom: -16px;
            }
          }
        `}</style>
      </section>

      {/* About / Intro Section */}
      <section className="container" style={{ marginTop: '80px', marginBottom: '40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <div style={{ fontSize: '0.9rem', color: 'var(--text-muted)' }}>About NexTech</div>
          <div style={{ maxWidth: '600px' }}>
            <p style={{ fontSize: '1.4rem', fontWeight: 400, lineHeight: 1.4 }}>
              At NexTech, we don't just write code — <span style={{ fontWeight: 600 }}>we engineer success</span>. Since 2021, our platform has been a launchpad for startups of all levels, from eager founders to seasoned tech veterans.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services Cards */}
      <section className="container">
        <motion.div
          className="services-grid"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Card 1 - Dark */}
          <motion.div variants={fadeIn} style={{
            background: 'var(--card-dark)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            color: 'white',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
            minHeight: '380px'
          }}>
            <div>
              <Server size={32} style={{ marginBottom: '24px', opacity: 0.8 }} />
              <h3 style={{ fontSize: '1.4rem', fontWeight: 300, lineHeight: 1.5 }}>
                Professional cloud infrastructure with enterprise-grade <span style={{ color: 'rgba(255,255,255,0.5)' }}>security & scalability</span> — deploy in <span style={{ fontWeight: 600 }}>perfect conditions</span>, at any scale.
              </h3>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginTop: '32px' }}>
              <button style={{
                width: '40px', height: '24px', borderRadius: '12px',
                background: 'var(--accent-blue)', display: 'flex', alignItems: 'center',
                padding: '0 4px', justifyContent: 'flex-end',
                transition: 'all 0.3s ease'
              }}>
                <div style={{ width: '16px', height: '16px', borderRadius: '50%', background: 'white' }}></div>
              </button>
              <span style={{ fontSize: '0.9rem', color: 'rgba(255,255,255,0.6)' }}>Cloud Mode</span>
            </div>
          </motion.div>

          {/* Card 2 - Blue */}
          <motion.div variants={fadeIn} style={{
            background: 'var(--card-blue)',
            borderRadius: 'var(--radius-lg)',
            position: 'relative',
            overflow: 'hidden',
            minHeight: '380px',
            padding: '24px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center'
          }}>
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              backgroundImage: 'url("https://images.unsplash.com/photo-1573164713988-8665fc963095?auto=format&fit=crop&w=800&q=80")',
              backgroundSize: 'cover',
              backgroundPosition: 'top center',
              mixBlendMode: 'multiply',
              opacity: 0.9
            }} />
            <div className="glass-panel" style={{ zIndex: 1, position: 'relative' }}>
              Custom Software Development
            </div>
          </motion.div>

          {/* Card 3 - Light */}
          <motion.div variants={fadeIn} style={{
            background: 'var(--card-light)',
            borderRadius: 'var(--radius-lg)',
            padding: '40px',
            boxShadow: '0 20px 40px rgba(0,0,0,0.03)',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            minHeight: '380px'
          }}>
            <h2 style={{ fontSize: '3rem', fontWeight: 400, marginBottom: '8px' }}>100+</h2>
            <h4 style={{ fontSize: '1.1rem', marginBottom: '8px' }}>Pro Engineers</h4>
            <p style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '32px', lineHeight: 1.5 }}>
              Certified tech professionals ready to boost your product from MVP to enterprise level.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              {[
                { label: 'Frontend', dots: 10, active: 10, val: 55 },
                { label: 'Backend', dots: 10, active: 8, val: 40 },
                { label: 'DevOps', dots: 10, active: 6, val: 35 }
              ].map((skill, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: '0.8rem' }}>
                  <span style={{ width: '80px', fontWeight: 500 }}>{skill.label}</span>
                  <div className="progress-dots">
                    {Array.from({ length: skill.dots }).map((_, j) => (
                      <div key={j} className={`dot ${j < skill.active ? 'active' : ''}`}></div>
                    ))}
                  </div>
                  <span style={{ color: 'var(--text-muted)' }}>{skill.val}</span>
                </div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>



      {/* Bottom Section */}
      <section className="container" style={{ paddingBottom: '80px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: 'minmax(300px, 1fr) 1.5fr', gap: '48px' }}>

          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
            <div style={{ fontSize: '0.85rem', color: 'var(--text-muted)', marginBottom: '24px', background: 'white', padding: '4px 12px', borderRadius: '16px', border: '1px solid rgba(0,0,0,0.05)' }}>
              Services
            </div>
            <h3 style={{ fontSize: '1.5rem', fontWeight: 400, lineHeight: 1.4, marginBottom: '40px' }}>
              Explore our full range of <span style={{ fontWeight: 600 }}>development, design, and tech</span> experiences. From first commit to final launch — we've got the right program for you.
            </h3>
            <button className="btn btn-dark" style={{ marginTop: 'auto' }}>
              Explore More <ArrowUpRight size={18} />
            </button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
            {/* Card Left */}
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                height: '280px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                color: 'white',
                background: '#d97757'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1581291518633-83b4ebd1d83e?auto=format&fit=crop&w=600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                mixBlendMode: 'multiply',
                opacity: 0.8
              }} />
              <div className="glass-panel" style={{ width: 'fit-content', position: 'relative', zIndex: 1, fontSize: '0.75rem' }}>
                Startup Programs
              </div>
              <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                <p style={{ fontSize: '1rem', fontWeight: 500, maxWidth: '150px' }}>
                  Programs designed for all stages and scales.
                </p>
                <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)', backdropFilter: 'blur(4px)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} />
                </div>
              </div>
            </motion.div>

            {/* Card Right */}
            <motion.div
              whileHover={{ y: -5 }}
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                position: 'relative',
                height: '280px',
                padding: '24px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                background: '#e0ece4'
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0, left: 0, right: 0, bottom: 0,
                backgroundImage: 'url("https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center',
                opacity: 0.7
              }} />
              <div className="glass-panel" style={{ width: 'fit-content', position: 'relative', zIndex: 1, background: 'rgba(0,0,0,0.1)', color: 'var(--text-main)', border: 'none', fontSize: '0.75rem' }}>
                Cloud Access
              </div>
              <div style={{ position: 'relative', zIndex: 1 }}>
                <p style={{ fontSize: '0.9rem', color: 'var(--text-main)', fontWeight: 500, marginBottom: '16px', maxWidth: '180px' }}>
                  Step into a space built for innovators — to grow, compete, and thrive.
                </p>
                <div style={{ display: 'flex', gap: '16px', color: 'var(--text-muted)' }}>
                  <ArrowRight size={20} style={{ transform: 'rotate(180deg)' }} />
                  <ArrowRight size={20} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

    </div>
  );
}
