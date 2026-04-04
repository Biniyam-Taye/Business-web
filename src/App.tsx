import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Globe, XCircle, CheckCircle2, Zap, Smartphone, Database, Cloud, Palette } from 'lucide-react';

const AnimatedNumber = ({ value, prefix = "", suffix = "" }: { value: number, prefix?: string, suffix?: string }) => {
  const [count, setCount] = useState(0);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!inView) return;
    let start = 0;
    const duration = 2000;
    const fps = 60;
    const increment = value / (duration / (1000 / fps));

    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 1000 / fps);

    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <motion.span onViewportEnter={() => setInView(true)} viewport={{ once: true }}>
      {prefix}{count}{suffix}
    </motion.span>
  );
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
      <div style={{ position: 'sticky', top: '16px', zIndex: 100, display: 'flex', justifyContent: 'center', padding: '0 24px', pointerEvents: 'none' }}>
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
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '16px 0 100px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
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
              We build{' '}
              <span style={{ position: 'relative', display: 'inline-block', color: 'var(--accent-blue)' }}>
                scalable tech
                <span style={{ position: 'absolute', bottom: '10px', left: 0, width: '100%', height: '8px', background: 'var(--accent-blue)', opacity: 0.2, zIndex: -1, borderRadius: '4px' }}></span>
              </span><br />
              that grows your<br />
              <span style={{ color: 'var(--accent-blue)' }}>business</span>
            </h1>

            <p style={{ marginTop: '24px', fontSize: '1.05rem', color: '#555', lineHeight: 1.8, maxWidth: '480px' }}>
              We design, build, and scale custom digital products for ambitious startups and executives —
              engineered for speed, built for growth.
            </p>

            {/* CTA Buttons */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '16px', marginTop: '40px', flexWrap: 'wrap' }}>
              <button style={{
                background: '#111', color: '#fff',
                padding: '16px 24px', borderRadius: '40px',
                fontSize: '1rem', fontWeight: 500,
                display: 'flex', alignItems: 'center', gap: '40px',
                border: 'none', cursor: 'pointer', boxShadow: '0 8px 16px rgba(0,0,0,0.1)',
                transition: 'all 0.3s ease'
              }}
                onMouseOver={e => (e.currentTarget.style.transform = 'scale(1.03)')}
                onMouseOut={e => (e.currentTarget.style.transform = 'scale(1)')}>
                Get Started <ArrowRight size={18} color="#aaa" />
              </button>

              <button
                style={{
                  background: 'var(--accent-blue)', color: '#fff',
                  padding: '16px 24px', borderRadius: '40px',
                  fontSize: '1rem', fontWeight: 500,
                  display: 'flex', alignItems: 'center', gap: '40px',
                  border: '2px solid var(--accent-blue)', cursor: 'pointer',
                  boxShadow: '0 8px 20px rgba(37,99,235,0.28)',
                  transition: 'all 0.3s ease'
                }}
                onMouseOver={e => {
                  e.currentTarget.style.background = '#fff';
                  e.currentTarget.style.color = 'var(--accent-blue)';
                  e.currentTarget.style.transform = 'scale(1.03)';
                  (e.currentTarget.querySelector('svg') as SVGElement | null)?.setAttribute('color', 'var(--accent-blue)');
                }}
                onMouseOut={e => {
                  e.currentTarget.style.background = 'var(--accent-blue)';
                  e.currentTarget.style.color = '#fff';
                  e.currentTarget.style.transform = 'scale(1)';
                  (e.currentTarget.querySelector('svg') as SVGElement | null)?.setAttribute('color', '#fff');
                }}
              >
                View Projects <ArrowRight size={18} color="#fff" />
              </button>
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
          <div style={{ flex: '1 1 500px', position: 'relative', minHeight: '560px', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: '-20px' }}>
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
                  <div className="icon-vibrate" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#111', border: '2px solid var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.25)', cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></svg>
                  </div>
                  <div className="icon-vibrate" style={{ width: '48px', height: '48px', borderRadius: '50%', background: '#111', border: '2px solid var(--bg-main)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 4px 12px rgba(0,0,0,0.25)', cursor: 'pointer' }}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
                  </div>
                  <div style={{ width: '56px', height: '56px', borderRadius: '50%', background: '#111', color: '#fff', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginTop: '4px', transition: 'transform 0.3s ease' }} onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}>
                    <ArrowUpRight size={24} />
                  </div>
                </div>
              </div>

            </div>
          </div>
        </section>
      </div>



      {/* Problem → Solution Section — Premium Redesign */}
      <section style={{ padding: '120px 0 40px', background: 'linear-gradient(180deg, #fff 0%, #f7f8fc 100%)' }}>
        <div className="container">

          {/* Section Label + Headline */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px' }}
          >
            <div style={{
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)',
              borderRadius: '9999px', padding: '6px 18px', marginBottom: '24px'
            }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
              <span style={{ fontSize: '0.82rem', fontWeight: 600, color: 'var(--accent-blue)', letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                Why NexTech
              </span>
            </div>
            <h2 style={{
              fontSize: 'clamp(2.2rem, 4.5vw, 3.6rem)', fontWeight: 800,
              color: '#0a0a0a', letterSpacing: '-0.03em', lineHeight: 1.1,
              margin: '0 auto 20px', maxWidth: '700px'
            }}>
              Most businesses are{' '}
              <span style={{ background: 'linear-gradient(135deg, #ef4444, #f97316)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>stuck.</span>
              <br />We get them{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>moving.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '520px', margin: '0 auto', lineHeight: 1.7 }}>
              Sound familiar? Here's what we hear from SMBs every day — and exactly how we solve it.
            </p>
          </motion.div>

          {/* Split Panel Dual-Card Layout */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '32px', alignItems: 'stretch' }}>

            {/* LEFT — Problems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              style={{
                background: '#ffffff',
                borderRadius: '32px',
                padding: '56px 48px',
                boxShadow: '0 20px 60px rgba(0,0,0,0.03), 0 1px 3px rgba(0,0,0,0.02)',
                border: '1px solid #f1f5f9',
                display: 'flex', flexDirection: 'column'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, #fef2f2, #fee2e2)', border: '1px solid #fca5a5', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(239,68,68,0.1)' }}>
                  <XCircle color="#ef4444" size={20} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The Problem</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                {[
                  { num: '01', title: "You're bleeding time on manual work", desc: "Hours lost every week on repetitive tasks that should be automated. Your team deserves better." },
                  { num: '02', title: "Generic software holds you back", desc: "Off-the-shelf tools weren't built for your business. You end up working around them, not with them." },
                  { num: '03', title: "AI feels like a mystery, not a tool", desc: "You know AI could transform your operations, but nobody's made it practical or accessible — until now." },
                ].map((item, i) => {
                  const theme = i % 2 === 0 ? 'card-blue' : 'card-orange';
                  return (
                    <motion.div
                      key={i}
                      whileHover={{ x: 8 }}
                      className={`problem-card ${theme}`}
                      style={{ padding: '24px', borderRadius: '20px', position: 'relative', overflow: 'hidden', border: '1px solid transparent' }}
                    >
                      <div style={{ position: 'relative', zIndex: 1 }}>
                        <h4 style={{ fontSize: '1.15rem', fontWeight: 800, color: '#0f172a', marginBottom: '8px', lineHeight: 1.3, transition: 'color 0.3s ease' }}>{item.title}</h4>
                        <p style={{ fontSize: '0.95rem', color: '#64748b', lineHeight: 1.6, margin: 0, transition: 'color 0.3s ease' }}>{item.desc}</p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </motion.div>

            {/* RIGHT — Solutions */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.15 }}
              style={{
                background: '#040a15',
                borderRadius: '32px',
                padding: '56px 48px',
                boxShadow: '0 30px 60px rgba(0,0,0,0.15)',
                border: '1px solid rgba(255,255,255,0.08)',
                display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden'
              }}
            >
              {/* Removed Glowing Orbs to maintain one constant color background */}

              <div style={{ display: 'flex', alignItems: 'center', gap: '12px', marginBottom: '48px', position: 'relative' }}>
                <div style={{ width: '40px', height: '40px', borderRadius: '12px', background: 'linear-gradient(135deg, rgba(74,222,128,0.2), rgba(34,197,94,0.1))', border: '1px solid rgba(74,222,128,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 8px 16px rgba(74,222,128,0.1)' }}>
                  <CheckCircle2 color="#4ade80" size={20} strokeWidth={2.5} />
                </div>
                <span style={{ fontSize: '0.85rem', fontWeight: 800, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.1em' }}>The NexTech Fix</span>
              </div>

              <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', position: 'relative' }}>
                {[
                  { num: '01', title: "Custom-built software, zero compromise", desc: "We design and build exactly what your business needs. No workarounds. Pure efficiency from day one." },
                  { num: '02', title: "One ecosystem. Everything connected.", desc: "Your apps, tools, and data all talk to each other. One source of truth. Zero manual syncing." },
                  { num: '03', title: "AI that actually works for you", desc: "We implement practical AI automation that you can see, measure, and profit from — immediately." },
                ].map((item, i) => (
                  <motion.div
                    key={i}
                    whileHover={{ x: 8 }}
                    className="solution-vibrate-card"
                    style={{ padding: '24px', borderRadius: '20px', transition: 'all 0.3s ease', position: 'relative', overflow: 'hidden', border: '1px solid transparent' }}
                  >
                    <div className="bg-watermark" style={{ position: 'absolute', right: '-10px', top: '-10px', fontSize: '6rem', fontWeight: 900, color: 'rgba(255,255,255,0.03)', opacity: 1, lineHeight: 1, pointerEvents: 'none', zIndex: 0, transition: 'color 0.3s ease' }}>{item.num}</div>
                    <div style={{ position: 'relative', zIndex: 1 }}>
                      <h4 className="card-title" style={{ fontSize: '1.15rem', fontWeight: 800, color: '#f8fafc', marginBottom: '8px', lineHeight: 1.3, transition: 'color 0.3s ease' }}>{item.title}</h4>
                      <p className="card-desc" style={{ fontSize: '0.95rem', color: '#94a3b8', lineHeight: 1.6, margin: 0, transition: 'color 0.3s ease' }}>{item.desc}</p>
                    </div>
                  </motion.div>
                ))}
              </div>

              <button
                className="cta-vibrate-btn"
                style={{
                  marginTop: '40px', alignSelf: 'flex-start',
                  display: 'flex', alignItems: 'center', gap: '12px'
                }}
              >
                Let's build your solution
                <div className="btn-icon-wrapper">
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </button>
            </motion.div>
          </div>

        </div>
      </section>

      {/* Tech Business Stats Section (Moved after Section 2) */}
      <section style={{ padding: '32px 0', borderTop: '1px solid #e2e8f0', background: '#fafafa', position: 'relative', overflow: 'hidden' }}>
        
        {/* Left Decorative Space */}
        <div style={{ position: 'absolute', left: 0, top: 0, bottom: 0, width: '25vw', background: 'radial-gradient(circle at 0% 50%, rgba(37,99,235,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div
          animate={{ y: [0, -8, 0] }} transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', left: '6vw', top: '50%', marginTop: '-24px', opacity: 0.25, pointerEvents: 'none' }}
        >
          <Database size={48} color="#2563eb" strokeWidth={2.5} />
        </motion.div>

        {/* Right Decorative Space */}
        <div style={{ position: 'absolute', right: 0, top: 0, bottom: 0, width: '25vw', background: 'radial-gradient(circle at 100% 50%, rgba(245,96,42,0.06) 0%, transparent 70%)', pointerEvents: 'none' }} />
        <motion.div
          animate={{ y: [0, 8, 0] }} transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          style={{ position: 'absolute', right: '6vw', top: '50%', marginTop: '-24px', opacity: 0.25, pointerEvents: 'none' }}
        >
          <Cloud size={48} color="#f5602a" strokeWidth={2.5} />
        </motion.div>

        <div className="container" style={{ maxWidth: '1000px', position: 'relative', zIndex: 1 }}>
          <div className="stats-row" style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around', alignItems: 'center', textAlign: 'center', gap: '30px' }}>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5 }} className="stat-card" style={{ flex: '1 1 200px' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                <AnimatedNumber value={3} suffix="x" />
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>Faster than traditional agencies</p>
            </motion.div>

            <div className="stat-divider" style={{ width: '1px', height: '48px', backgroundColor: '#e2e8f0' }} />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.1 }} className="stat-card" style={{ flex: '1 1 200px' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                <AnimatedNumber value={98} suffix="%" />
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>Client satisfaction rate</p>
            </motion.div>

            <div className="stat-divider" style={{ width: '1px', height: '48px', backgroundColor: '#e2e8f0' }} />

            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.5, delay: 0.2 }} className="stat-card" style={{ flex: '1 1 200px' }}>
              <h3 style={{ fontSize: '2.5rem', fontWeight: 900, color: '#0f172a', marginBottom: '8px', letterSpacing: '-0.02em' }}>
                <AnimatedNumber value={50} suffix="+" />
              </h3>
              <p style={{ color: '#94a3b8', fontSize: '0.95rem', fontWeight: 500, margin: 0 }}>SMBs transformed</p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ── Features / Services Section ── */}
      <section style={{ padding: '120px 0 140px', background: '#fff' }}>
        <div className="container">

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '72px' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '9999px', padding: '6px 18px', marginBottom: '20px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--accent-blue)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: 'var(--accent-blue)', letterSpacing: '0.08em', textTransform: 'uppercase' }}>What We Build</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.2rem, 4.5vw, 3.4rem)', fontWeight: 900, color: '#0b1120', letterSpacing: '-0.03em', lineHeight: 1.1, margin: '0 auto 16px', maxWidth: '680px' }}>
              One partner. Every tool{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>your business needs.</span>
            </h2>
            <p style={{ fontSize: '1.05rem', color: '#64748b', maxWidth: '500px', margin: '0 auto', lineHeight: 1.7 }}>
              From first idea to full deployment — we handle every layer so you can focus on growth.
            </p>
          </motion.div>

          {/* Top Bento Grid — Highlight + 2 side cards */}
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gridTemplateRows: 'auto auto', gap: '24px' }}>

            {/* HIGHLIGHT — AI-Powered Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1] }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(37,99,235,0.12)' }}
              style={{
                gridRow: '1 / 3',
                background: 'linear-gradient(165deg, #fff 0%, #f8faff 100%)',
                border: '1px solid #e2e8f0',
                borderLeft: '5px solid #2563eb',
                borderRadius: '32px',
                padding: '52px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.03)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                position: 'relative',
                overflow: 'hidden'
              }}
            >
              <div style={{ position: 'absolute', top: 0, right: 0, width: '200px', height: '200px', background: 'radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%)', zIndex: 0 }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #2563eb, #7c3aed)', borderRadius: '12px', padding: '10px 18px', marginBottom: '32px', boxShadow: '0 8px 16px rgba(37,99,235,0.2)' }}>
                  <Zap color="#fff" size={20} strokeWidth={2.5} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Most Popular</span>
                </div>
                <div style={{ fontSize: '0.8rem', fontWeight: 800, color: '#7c3aed', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '16px' }}>AI-Powered Development</div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 900, color: '#0f172a', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '20px' }}>
                  Your business,<br />running on autopilot.
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, maxWidth: '440px' }}>
                  We embed AI directly into your web and app workflows — automating the tasks that drain your team and surfacing insights that grow your revenue. Smarter software, zero complexity.
                </p>
              </div>

              <div style={{ marginTop: '48px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', marginBottom: '40px' }}>
                  {['Automates repetitive daily work', 'Learns from your business data', 'Cuts operational costs up to 60%'].map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: '#dbeafe', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <CheckCircle2 color="#2563eb" size={14} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '1rem', color: '#1e293b', fontWeight: 600 }}>{b}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05, boxShadow: '0 15px 35px rgba(37,99,235,0.35)' }}
                  whileTap={{ scale: 0.95 }}
                  style={{
                    background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                    color: '#fff',
                    border: 'none',
                    borderRadius: '16px',
                    padding: '18px 36px',
                    fontSize: '1.05rem',
                    fontWeight: 700,
                    display: 'flex',
                    alignItems: 'center',
                    gap: '12px',
                    cursor: 'pointer',
                    boxShadow: '0 10px 25px rgba(37,99,235,0.25)',
                    transition: 'all 0.3s ease'
                  }}
                >
                  Start with AI <ArrowUpRight size={18} strokeWidth={2.5} />
                </motion.button>
              </div>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(16,185,129,0.1)' }}
              style={{
                background: 'linear-gradient(165deg, #fff 0%, #f0fdf4 100%)',
                border: '1px solid #e2e8f0',
                borderTop: '5px solid #10b981',
                borderRadius: '32px',
                padding: '40px',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'linear-gradient(135deg, #10b981, #34d399)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 10px 20px rgba(16,185,129,0.2)' }}>
                <Globe color="#fff" size={28} strokeWidth={2} />
              </div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.02em' }}>Web Development</h4>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>A fast, beautiful website that turns visitors into paying customers — not just traffic.</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#059669', fontWeight: 700, fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} /> ↑ More leads. Less bounce.
              </div>
            </motion.div>

            {/* App Development */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(249,115,22,0.1)' }}
              style={{
                background: 'linear-gradient(165deg, #fff 0%, #fff7ed 100%)',
                border: '1px solid #e2e8f0',
                borderTop: '5px solid #f97316',
                borderRadius: '32px',
                padding: '40px',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center'
              }}
            >
              <div style={{ width: '60px', height: '60px', borderRadius: '18px', background: 'linear-gradient(135deg, #f97316, #fb923c)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 10px 20px rgba(249,115,22,0.2)' }}>
                <Smartphone color="#fff" size={28} strokeWidth={2} />
              </div>
              <h4 style={{ fontSize: '1.35rem', fontWeight: 800, color: '#0f172a', marginBottom: '12px', letterSpacing: '-0.02em' }}>App Development</h4>
              <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>Native mobile experiences that keep your users coming back every single day.</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', color: '#ea580c', fontWeight: 700, fontSize: '0.9rem' }}>
                <CheckCircle2 size={16} /> ↑ More retention. More revenue.
              </div>
            </motion.div>
          </div>

          {/* Bottom Row — 3 equal cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '24px' }}>

            {/* Database */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.1 }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(236,72,153,0.1)' }}
              style={{
                background: 'linear-gradient(165deg, #fff 0%, #fff0f9 100%)',
                border: '1px solid #e2e8f0',
                borderTop: '5px solid #ec4899',
                borderRadius: '32px',
                padding: '40px',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'linear-gradient(135deg, #ec4899, #f472b6)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 16px rgba(236,72,153,0.15)' }}>
                <Database color="#fff" size={24} strokeWidth={2} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>Smart Database</h4>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>Clean, scalable data architecture that grows with your business, never against it.</p>
              <span style={{ fontSize: '0.9rem', color: '#db2777', fontWeight: 700 }}>↑ Zero data headaches.</span>
            </motion.div>

            {/* Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.2 }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(59,130,246,0.1)' }}
              style={{
                background: 'linear-gradient(165deg, #fff 0%, #eff6ff 100%)',
                border: '1px solid #e2e8f0',
                borderTop: '5px solid #3b82f6',
                borderRadius: '32px',
                padding: '40px',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'linear-gradient(135deg, #3b82f6, #60a5fa)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 16px rgba(59,130,246,0.15)' }}>
                <Cloud color="#fff" size={24} strokeWidth={2} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>Deploy & Scale</h4>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>We handle hosting, deployment, and uptime so you can focus 100% on your growth.</p>
              <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 700 }}>↑ Launch fast. Stay live.</span>
            </motion.div>

            {/* UX/UI Design */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              transition={{ duration: 0.7, ease: [0.23, 1, 0.32, 1], delay: 0.3 }}
              whileHover={{ y: -5, boxShadow: '0 30px 60px rgba(124,58,237,0.1)' }}
              style={{
                background: 'linear-gradient(165deg, #fff 0%, #f5f3ff 100%)',
                border: '1px solid #e2e8f0',
                borderTop: '5px solid #7c3aed',
                borderRadius: '32px',
                padding: '40px',
                cursor: 'pointer',
                boxShadow: '0 12px 30px rgba(0,0,0,0.02)',
                transition: 'all 0.4s cubic-bezier(0.23, 1, 0.32, 1)'
              }}
            >
              <div style={{ width: '52px', height: '52px', borderRadius: '16px', background: 'linear-gradient(135deg, #7c3aed, #a78bfa)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 8px 16px rgba(124,58,237,0.15)' }}>
                <Palette color="#fff" size={24} strokeWidth={2} />
              </div>
              <h4 style={{ fontSize: '1.25rem', fontWeight: 800, color: '#0f172a', marginBottom: '10px' }}>UX/UI Design</h4>
              <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>Interfaces so intuitive your customers never need a support call or a tutorial.</p>
              <span style={{ fontSize: '0.9rem', color: '#7c3aed', fontWeight: 700 }}>↑ Less churn. More love.</span>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
}
