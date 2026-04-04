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
  const [activeFollowId, setActiveFollowId] = useState<string | null>(null);
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
      <div style={{ position: 'relative', width: '100%', overflow: 'hidden', padding: '16px 0 48px 0', borderBottom: '1px solid rgba(0,0,0,0.05)' }}>
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
      <section style={{ padding: '64px 0 40px', background: 'linear-gradient(180deg, #fff 0%, #f7f8fc 100%)' }}>
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
      <section style={{ padding: '120px 0 60px', background: '#F8F9FA' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>

          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ textAlign: 'center', marginBottom: '80px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
          >
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '9999px', padding: '6px 18px', marginBottom: '24px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#2563eb', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Services & Technology</span>
            </div>
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 900, color: '#0f172a', letterSpacing: '-0.03em', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>
              Comprehensive custom<br />tech for{' '}
              <span style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>everyone.</span>
            </h2>
            <p style={{ fontSize: '1.1rem', color: '#6b7280', maxWidth: '600px', marginTop: '20px', lineHeight: 1.6 }}>
              From scalable cloud architectures to award-winning modern interfaces, we build digital infrastructure designed to grow your revenue.
            </p>
          </motion.div>

          {/* Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(350px, 1fr))', gap: '24px', alignItems: 'stretch' }}>

            {/* Card 1 - AI Web Apps */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#CCFF00', borderRadius: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', minHeight: '460px' }}
            >
              <div style={{ padding: '32px 32px 0 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: '#111', fontSize: '0.8rem', fontWeight: 600, padding: '6px 16px', borderRadius: '20px' }}>AI Powered</span>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#111', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#CCFF00', cursor: 'pointer' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: '"Georgia", serif' }}>AI Web Apps</h3>
                <p style={{ fontSize: '0.95rem', color: '#333', lineHeight: 1.6, fontWeight: 500, margin: 0, paddingBottom: '24px' }}>Intelligent web applications that leverage machine learning to adapt, optimize, and grow with you.</p>
              </div>
              <div style={{ height: '200px', width: '100%', padding: '0 16px 16px 16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=800&q=80" alt="AI Web Apps" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

            {/* Card 2 - Application Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ background: '#F4EEE5', borderRadius: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', minHeight: '460px' }}
            >
              <div style={{ padding: '32px 32px 0 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: '#111', fontSize: '0.8rem', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Native</span>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#E0D8CC', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: '"Georgia", serif' }}>Application<br />Development</h3>
                <p style={{ fontSize: '0.95rem', color: '#444', lineHeight: 1.6, fontWeight: 500, margin: 0, paddingBottom: '24px' }}>High-performance native mobile and desktop applications built for enterprise-level scaling.</p>
              </div>
              <div style={{ height: '200px', width: '100%', padding: '0 16px 16px 16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80" alt="Application Dev" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

            {/* Card 3 - SaaS Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ background: '#45BAEB', borderRadius: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', minHeight: '460px' }}
            >
              <div style={{ padding: '32px 32px 0 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: '#111', fontSize: '0.8rem', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>B2B & B2C</span>
                  </div>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: '"Georgia", serif' }}>SaaS<br />Development</h3>
                <p style={{ fontSize: '0.95rem', color: '#111', lineHeight: 1.6, fontWeight: 500, margin: 0, paddingBottom: '24px' }}>End-to-end SaaS platforms specifically engineered to drive deep user engagement and recurring revenue.</p>
              </div>
              <div style={{ height: '180px', width: '100%', position: 'relative' }}>
                <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: '70%', background: '#ffb480', zIndex: 0 }} />
                <div style={{ position: 'relative', width: '100%', height: '100%', padding: '0 16px 16px 16px', zIndex: 1 }}>
                  <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                    <img src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80" alt="SaaS Dev" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Card 4 - UI/UX Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
              style={{ background: '#E0E7FF', borderRadius: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', minHeight: '460px' }}
            >
              <div style={{ padding: '32px 32px 0 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: '#111', fontSize: '0.8rem', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Creative</span>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#C7D2FE', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: '"Georgia", serif' }}>UI/UX Design</h3>
                <p style={{ fontSize: '0.95rem', color: '#312E81', lineHeight: 1.6, fontWeight: 500, margin: 0, paddingBottom: '24px' }}>Award-winning interfaces shipped directly to your users. Pixel-perfect, responsive, and always stunning.</p>
              </div>
              <div style={{ height: '200px', width: '100%', padding: '0 16px 16px 16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1561070791-2526d30994b5?auto=format&fit=crop&w=800&q=80" alt="Design" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

            {/* Card 5 - Automation Systems */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.4 }}
              style={{ background: '#FFEDD5', borderRadius: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', minHeight: '460px' }}
            >
              <div style={{ padding: '32px 32px 0 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: '#111', fontSize: '0.8rem', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Workflow</span>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#FDBA74', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#111', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: '"Georgia", serif' }}>Automation<br />Systems</h3>
                <p style={{ fontSize: '0.95rem', color: '#9A3412', lineHeight: 1.6, fontWeight: 500, margin: 0, paddingBottom: '24px' }}>Smart business logic woven directly into your existing tools. Let code do the repetitive work.</p>
              </div>
              <div style={{ height: '200px', width: '100%', padding: '0 16px 16px 16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=800&q=80" alt="Automation" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

            {/* Card 6 - API & Backend */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.5 }}
              style={{ background: '#0F172A', borderRadius: '32px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden', minHeight: '460px' }}
            >
              <div style={{ padding: '32px 32px 0 32px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '24px' }}>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ background: '#fff', color: '#111', fontSize: '0.8rem', fontWeight: 600, padding: '6px 16px', borderRadius: '20px', boxShadow: '0 2px 4px rgba(0,0,0,0.02)' }}>Infrastructure</span>
                  </div>
                  <div style={{ width: '32px', height: '32px', borderRadius: '50%', background: '#334155', display: 'flex', alignItems: 'center', justifyContent: 'center', color: '#fff', cursor: 'pointer' }}>
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 4l8 8h-6v8h-4v-8H4l8-8z" /></svg>
                  </div>
                </div>
                <h3 style={{ fontSize: '2.2rem', fontWeight: 400, color: '#fff', lineHeight: 1.1, marginBottom: '16px', letterSpacing: '-0.02em', fontFamily: '"Georgia", serif' }}>API & Backend</h3>
                <p style={{ fontSize: '0.95rem', color: '#94A3B8', lineHeight: 1.6, fontWeight: 500, margin: 0, paddingBottom: '24px' }}>Impervious backend architectures, custom APIs, and databases starting every morning with zero downtime.</p>
              </div>
              <div style={{ height: '200px', width: '100%', padding: '0 16px 16px 16px' }}>
                <div style={{ width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                  <img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80" alt="Backend" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Why Choose Us Section ── */}
      <section style={{ padding: '80px 0 140px', background: '#ffffff', color: '#0f172a', position: 'relative', overflow: 'hidden' }}>
        {/* Soft Background Glows matching the light theme */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(59,130,246,0.04) 0%, transparent 70%)', filter: 'blur(60px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(249,115,22,0.03) 0%, transparent 70%)', filter: 'blur(60px)' }} />

        <div className="container" style={{ maxWidth: '1400px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(min(100%, 480px), 1fr))', gap: '80px', alignItems: 'center', position: 'relative', zIndex: 1 }}>
          
          {/* Left Side Info */}
          <motion.div initial={{ opacity: 0, x: -40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid #BFDBFE', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '9999px', padding: '8px 24px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.05em', color: '#3b82f6', textTransform: 'uppercase' }}>WHY CHOOSE US</span>
            </div>
            
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', margin: '0 0 24px 0', color: '#0f172a' }}>
              We engineer <span style={{ color: '#F97316' }}>unfair</span><br /> market advantages.
            </h2>
            
            <p style={{ fontSize: '1.15rem', color: '#64748b', lineHeight: 1.6, marginBottom: '48px', fontWeight: 400 }}>
              Stop settling for generic templates. We construct bespoke, high-performance digital infrastructure designed exclusively to crush your competitors and scale globally without friction.
            </p>
            
            <div style={{ display: 'flex', gap: '40px', borderTop: '1px solid #e2e8f0', paddingTop: '40px' }}>
              <div>
                <h4 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 4px 0', color: '#0f172a', lineHeight: 1 }}>99.9<span style={{ color: '#3b82f6' }}>%</span></h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Guaranteed Uptime</p>
              </div>
              <div>
                <h4 style={{ fontSize: '3rem', fontWeight: 800, margin: '0 0 4px 0', color: '#0f172a', lineHeight: 1 }}>2.4<span style={{ color: '#3b82f6' }}>x</span></h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', fontWeight: 600, textTransform: 'uppercase', letterSpacing: '0.05em' }}>Faster Deployment</p>
              </div>
            </div>
          </motion.div>

          {/* Right Side Cards */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            
            {/* Feature 1: Fast Performance */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={{ background: '#fff', border: '2px solid transparent', borderRadius: '32px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: 'inset 0 0 0 1px #f1f5f9, 0 10px 40px rgba(0,0,0,0.03)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} whileHover={{ scale: 1.04, y: -8, boxShadow: 'inset 0 0 0 0px transparent, 0 30px 60px rgba(245,158,11,0.25)', background: 'rgba(245,158,11,0.15)', borderColor: 'rgba(245,158,11,0.8)' }}>
              <div style={{ padding: '16px', background: 'rgba(245,158,11,0.1)', borderRadius: '20px', color: '#f59e0b', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Fast Performance</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>Optimized edge delivery, automated asset compression, and sub-50ms latency across global distribution networks.</p>
              </div>
            </motion.div>

            {/* Feature 2: Clean UI/UX */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={{ background: '#fff', border: '2px solid transparent', borderRadius: '32px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: 'inset 0 0 0 1px #f1f5f9, 0 10px 40px rgba(0,0,0,0.03)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} whileHover={{ scale: 1.04, y: -8, boxShadow: 'inset 0 0 0 0px transparent, 0 30px 60px rgba(236,72,153,0.25)', background: 'rgba(236,72,153,0.15)', borderColor: 'rgba(236,72,153,0.8)' }}>
              <div style={{ padding: '16px', background: 'rgba(236,72,153,0.1)', borderRadius: '20px', color: '#ec4899', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><line x1="3" y1="9" x2="21" y2="9"/><line x1="9" y1="21" x2="9" y2="9"/></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Clean UI/UX</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>Intuitive, pixel-perfect interfaces designed entirely to maximize user engagement and reduce operational friction.</p>
              </div>
            </motion.div>

            {/* Feature 3: Scalable Systems */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={{ background: '#fff', border: '2px solid transparent', borderRadius: '32px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: 'inset 0 0 0 1px #f1f5f9, 0 10px 40px rgba(0,0,0,0.03)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} whileHover={{ scale: 1.04, y: -8, boxShadow: 'inset 0 0 0 0px transparent, 0 30px 60px rgba(59,130,246,0.25)', background: 'rgba(59,130,246,0.15)', borderColor: 'rgba(59,130,246,0.8)' }}>
              <div style={{ padding: '16px', background: 'rgba(59,130,246,0.1)', borderRadius: '20px', color: '#3b82f6', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="23 6 13.5 15.5 8.5 10.5 1 18"/><polyline points="17 6 23 6 23 12"/></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Scalable Systems</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>Future-proof codebases and elastic serverless environments engineered to handle 1 to 1,000,000+ users effortlessly.</p>
              </div>
            </motion.div>

            {/* Feature 4: Secure & Reliable */}
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }} style={{ background: '#fff', border: '2px solid transparent', borderRadius: '32px', padding: '24px', display: 'flex', alignItems: 'flex-start', gap: '20px', boxShadow: 'inset 0 0 0 1px #f1f5f9, 0 10px 40px rgba(0,0,0,0.03)', transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)' }} whileHover={{ scale: 1.04, y: -8, boxShadow: 'inset 0 0 0 0px transparent, 0 30px 60px rgba(16,185,129,0.25)', background: 'rgba(16,185,129,0.15)', borderColor: 'rgba(16,185,129,0.8)' }}>
              <div style={{ padding: '16px', background: 'rgba(16,185,129,0.1)', borderRadius: '20px', color: '#10b981', flexShrink: 0 }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>
              </div>
              <div>
                <h4 style={{ margin: '0 0 8px 0', fontSize: '1.2rem', fontWeight: 700, color: '#0f172a' }}>Secure & Reliable</h4>
                <p style={{ margin: 0, color: '#64748b', fontSize: '0.95rem', lineHeight: 1.6 }}>End-to-end encryption, SOC2 compliance-ready infrastructure, and automated vulnerability scanning right out of the box.</p>
              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ── Meet the Team Section ── */}
      <section style={{ padding: '120px 0', background: '#fafafa', color: '#111' }}>
        <div className="container" style={{ maxWidth: '1400px' }}>

          {/* Centered Header Block matching user reference */}
          <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', marginBottom: '80px' }}>
            
            {/* Top Pill */}
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', border: '1px solid #BFDBFE', background: 'rgba(59, 130, 246, 0.05)', borderRadius: '9999px', padding: '8px 24px', marginBottom: '24px' }}>
              <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#3b82f6' }} />
              <span style={{ fontSize: '0.875rem', fontWeight: 800, letterSpacing: '0.05em', color: '#3b82f6', textTransform: 'uppercase' }}>MEET THE TEAM</span>
            </div>
            
            {/* Gradient Title */}
            <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: 800, lineHeight: 1.1, letterSpacing: '-0.04em', margin: '0 0 24px 0', color: '#0f172a' }}>
              Great software requires <span style={{ color: '#F97316' }}>experts.</span><br />
              Come meet <span style={{ background: 'linear-gradient(to right, #3b82f6, #8b5cf6)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>ours.</span>
            </h2>
            
            {/* Centered Subtext */}
            <p style={{ margin: 0, fontSize: '1.2rem', color: '#6b7280', lineHeight: 1.6, maxWidth: '600px', fontWeight: 400 }}>
              Sound familiar? Here's who we hear from enterprises every day — and exactly how our leaders solve it.
            </p>
          </div>

          {/* Team Cards Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '24px' }}>
            
            {/* Person 1 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
              style={{ background: '#fff', borderRadius: '32px', overflow: 'hidden', padding: '12px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', height: '480px' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=800&q=80" alt="CEO" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Overlay Container */}
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  
                  {/* Frosted Glass Name Pill Card */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.4)', width: 'fit-content', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>Marcus Bowen</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#10B981', color: 'white', borderRadius: '50%', width: '18px', height: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>

                  {/* Frosted Glass Content Card */}
                  <div style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
                    <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, fontWeight: 500 }}>
                      CEO who focuses on enterprise strategy & global scaling.
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '16px', color: '#475569', fontSize: '0.85rem', fontWeight: 700 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          312
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                          48
                        </div>
                      </div>
                      
                      <div style={{ position: 'relative' }}>
                        <button onClick={() => setActiveFollowId(activeFollowId === 'p1' ? null : 'p1')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: '#fff', color: '#0f172a', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                          Follow <span style={{ fontSize: '1.2rem', lineHeight: 0.5, marginBottom: '2px' }}>+</span>
                        </button>
                        
                        {activeFollowId === 'p1' && (
                          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} style={{ position: 'absolute', bottom: 'calc(100% + 8px)', right: 0, background: '#fff', padding: '8px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 10 }}>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Person 2 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }}
              style={{ background: '#fff', borderRadius: '32px', overflow: 'hidden', padding: '12px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', height: '480px' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=800&q=80" alt="CTO" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Overlay Container */}
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  
                  {/* Frosted Glass Name Pill Card */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.4)', width: 'fit-content', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>Elena Rodriguez</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#10B981', color: 'white', borderRadius: '50%', width: '18px', height: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>

                  {/* Frosted Glass Content Card */}
                  <div style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
                    <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, fontWeight: 500 }}>
                      CTO who focuses on robust cloud systems & infrastructure.
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '16px', color: '#475569', fontSize: '0.85rem', fontWeight: 700 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          8.4k
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                          142
                        </div>
                      </div>
                      
                      <div style={{ position: 'relative' }}>
                        <button onClick={() => setActiveFollowId(activeFollowId === 'p2' ? null : 'p2')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: '#fff', color: '#0f172a', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                          Follow <span style={{ fontSize: '1.2rem', lineHeight: 0.5, marginBottom: '2px' }}>+</span>
                        </button>
                        
                        {activeFollowId === 'p2' && (
                          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} style={{ position: 'absolute', bottom: 'calc(100% + 8px)', right: 0, background: '#fff', padding: '8px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 10 }}>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Person 3 */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }}
              style={{ background: '#fff', borderRadius: '32px', overflow: 'hidden', padding: '12px', display: 'flex', flexDirection: 'column', boxShadow: '0 10px 40px rgba(0,0,0,0.04)', height: '480px' }}
            >
              <div style={{ position: 'relative', width: '100%', height: '100%', borderRadius: '24px', overflow: 'hidden' }}>
                <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=800&q=80" alt="Head of Design" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover' }} />
                
                {/* Overlay Container */}
                <div style={{ position: 'absolute', bottom: '12px', left: '12px', right: '12px', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                  
                  {/* Frosted Glass Name Pill Card */}
                  <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '16px', border: '1px solid rgba(255, 255, 255, 0.4)', width: 'fit-content', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                    <h3 style={{ margin: 0, fontSize: '1.25rem', fontWeight: 700, color: '#111' }}>David Chen</h3>
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', backgroundColor: '#10B981', color: 'white', borderRadius: '50%', width: '18px', height: '18px', boxShadow: '0 2px 10px rgba(0,0,0,0.1)' }}>
                      <svg width="10" height="10" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                  </div>

                  {/* Frosted Glass Content Card */}
                  <div style={{ padding: '16px 20px', background: 'rgba(255, 255, 255, 0.65)', backdropFilter: 'blur(16px)', WebkitBackdropFilter: 'blur(16px)', borderRadius: '20px', border: '1px solid rgba(255, 255, 255, 0.4)' }}>
                    <p style={{ margin: '0 0 16px 0', fontSize: '0.95rem', color: '#475569', lineHeight: 1.5, fontWeight: 500 }}>
                      Product Designer who focuses on simplicity & usability.
                    </p>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div style={{ display: 'flex', gap: '16px', color: '#475569', fontSize: '0.85rem', fontWeight: 700 }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg>
                          12.1k
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                           <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"/><circle cx="8.5" cy="8.5" r="1.5"/><polyline points="21 15 16 10 5 21"/></svg>
                          412
                        </div>
                      </div>
                      
                      <div style={{ position: 'relative' }}>
                        <button onClick={() => setActiveFollowId(activeFollowId === 'p3' ? null : 'p3')} style={{ padding: '8px 16px', borderRadius: '20px', border: 'none', background: '#fff', color: '#0f172a', fontWeight: 700, fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '4px', boxShadow: '0 2px 8px rgba(0,0,0,0.05)' }}>
                          Follow <span style={{ fontSize: '1.2rem', lineHeight: 0.5, marginBottom: '2px' }}>+</span>
                        </button>
                        
                        {activeFollowId === 'p3' && (
                          <motion.div initial={{ opacity: 0, y: 10, scale: 0.95 }} animate={{ opacity: 1, y: 0, scale: 1 }} style={{ position: 'absolute', bottom: 'calc(100% + 8px)', right: 0, background: '#fff', padding: '8px', borderRadius: '20px', boxShadow: '0 10px 25px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column', gap: '8px', zIndex: 10 }}>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/></svg></a>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
                            <a href="#" style={{ display: 'flex', padding: '8px', borderRadius: '50%', background: '#f1f5f9', color: '#0f172a' }}><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="22" y1="2" x2="11" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg></a>
                          </motion.div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

          </div>
        </div>
      </section>
    </div>
  );
}
