import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, ArrowRight, Globe, XCircle, CheckCircle2, Zap, Smartphone, Database, Cloud, Palette } from 'lucide-react';

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

      {/* Problem → Solution Section — Premium Redesign */}
      <section style={{ padding: '120px 0', background: 'linear-gradient(180deg, #fff 0%, #f7f8fc 100%)' }}>
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

          {/* Split Panel Grid */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(340px, 1fr))', gap: '2px', borderRadius: '28px', overflow: 'hidden', boxShadow: '0 40px 80px rgba(0,0,0,0.1)' }}>

            {/* LEFT — Problems */}
            <motion.div
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut' }}
              style={{ background: '#ffffff', padding: '56px 52px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(239,68,68,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <XCircle color="#ef4444" size={18} strokeWidth={2} />
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#ef4444', textTransform: 'uppercase', letterSpacing: '0.08em' }}>The Problem</span>
              </div>
              {[
                { num: '01', title: "You're bleeding time on manual work", desc: "Hours lost every week on repetitive tasks that should be automated. Your team deserves better." },
                { num: '02', title: "Generic software holds you back", desc: "Off-the-shelf tools weren't built for your business. You end up working around them, not with them." },
                { num: '03', title: "AI feels like a mystery, not a tool", desc: "You know AI could transform your operations, but nobody's made it practical or accessible — until now." },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: '20px', paddingBottom: i < arr.length - 1 ? '32px' : '0', marginBottom: i < arr.length - 1 ? '32px' : '0', borderBottom: i < arr.length - 1 ? '1px solid #f3f4f6' : 'none' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: '#d1d5db', letterSpacing: '0.05em', minWidth: '28px', paddingTop: '4px' }}>{item.num}</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#111', marginBottom: '8px', lineHeight: 1.3 }}>{item.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: '#6b7280', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
            </motion.div>

            {/* RIGHT — Solutions */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.6, ease: 'easeOut', delay: 0.1 }}
              style={{ background: '#0d0d14', padding: '56px 52px', display: 'flex', flexDirection: 'column', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: '-60px', right: '-60px', width: '240px', height: '240px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(37,99,235,0.18) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ position: 'absolute', bottom: '-40px', left: '-40px', width: '180px', height: '180px', borderRadius: '50%', background: 'radial-gradient(circle, rgba(124,58,237,0.12) 0%, transparent 70%)', pointerEvents: 'none' }} />
              <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '40px', position: 'relative' }}>
                <div style={{ width: '32px', height: '32px', borderRadius: '8px', background: 'rgba(74,222,128,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <CheckCircle2 color="#4ade80" size={18} strokeWidth={2} />
                </div>
                <span style={{ fontSize: '0.78rem', fontWeight: 700, color: '#4ade80', textTransform: 'uppercase', letterSpacing: '0.08em' }}>The NexTech Fix</span>
              </div>
              {[
                { num: '01', title: "Custom-built software, zero compromise", desc: "We design and build exactly what your business needs. No workarounds. Pure efficiency from day one." },
                { num: '02', title: "One ecosystem. Everything connected.", desc: "Your apps, tools, and data all talk to each other. One source of truth. Zero manual syncing." },
                { num: '03', title: "AI that actually works for you", desc: "We implement practical AI automation that you can see, measure, and profit from — immediately." },
              ].map((item, i, arr) => (
                <div key={i} style={{ display: 'flex', gap: '20px', position: 'relative', paddingBottom: i < arr.length - 1 ? '32px' : '0', marginBottom: i < arr.length - 1 ? '32px' : '0', borderBottom: i < arr.length - 1 ? '1px solid rgba(255,255,255,0.06)' : 'none' }}>
                  <div style={{ fontSize: '0.72rem', fontWeight: 800, color: 'rgba(255,255,255,0.18)', letterSpacing: '0.05em', minWidth: '28px', paddingTop: '4px' }}>{item.num}</div>
                  <div>
                    <h4 style={{ fontSize: '1.05rem', fontWeight: 700, color: '#fff', marginBottom: '8px', lineHeight: 1.3 }}>{item.title}</h4>
                    <p style={{ fontSize: '0.92rem', color: 'rgba(255,255,255,0.55)', lineHeight: 1.65, margin: 0 }}>{item.desc}</p>
                  </div>
                </div>
              ))}
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
                style={{
                  marginTop: '48px', alignSelf: 'flex-start',
                  background: 'linear-gradient(135deg, #2563eb, #7c3aed)',
                  color: '#fff', border: 'none', borderRadius: '14px',
                  padding: '16px 32px', fontSize: '1rem', fontWeight: 700,
                  display: 'flex', alignItems: 'center', gap: '12px',
                  cursor: 'pointer', letterSpacing: '-0.01em',
                  boxShadow: '0 12px 28px rgba(37,99,235,0.35)'
                }}
              >
                Let's build your solution
                <div style={{ width: '28px', height: '28px', borderRadius: '8px', background: 'rgba(255,255,255,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <ArrowUpRight size={16} strokeWidth={2.5} />
                </div>
              </motion.button>
            </motion.div>
          </div>

          {/* Bottom Trust Strip */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '40px', marginTop: '56px', flexWrap: 'wrap' }}
          >
            {[
              { stat: '3×', label: 'Faster than traditional agencies' },
              { stat: '98%', label: 'Client satisfaction rate' },
              { stat: '50+', label: 'SMBs transformed' },
            ].map((s, i) => (
              <div key={i} style={{ textAlign: 'center', padding: '0 24px', borderRight: i < 2 ? '1px solid #e5e7eb' : 'none' }}>
                <div style={{ fontSize: '2rem', fontWeight: 800, color: '#0a0a0a', letterSpacing: '-0.03em' }}>{s.stat}</div>
                <div style={{ fontSize: '0.82rem', color: '#9ca3af', marginTop: '4px' }}>{s.label}</div>
              </div>
            ))}
          </motion.div>

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
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              whileHover={{ y: -6, boxShadow: '0 40px 80px rgba(37,99,235,0.12)' }}
              style={{ gridRow: '1 / 3', background: '#fff', borderRadius: '32px', padding: '56px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', cursor: 'pointer', boxShadow: '0 20px 48px rgba(0,0,0,0.05)', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden', border: '1px solid rgba(226,232,240,0.8)' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at top right, rgba(59,130,246,0.12) 0%, transparent 40%), radial-gradient(circle at bottom left, rgba(139,92,246,0.12) 0%, transparent 40%)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'linear-gradient(135deg, #2563eb, #8b5cf6)', borderRadius: '12px', padding: '10px 16px', marginBottom: '32px', boxShadow: '0 8px 16px rgba(37,99,235,0.25)' }}>
                  <Zap color="#fff" size={20} strokeWidth={2.5} />
                  <span style={{ fontSize: '0.75rem', fontWeight: 700, color: '#fff', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Most Popular</span>
                </div>
                <h3 style={{ fontSize: 'clamp(1.8rem, 2.5vw, 2.4rem)', fontWeight: 800, color: '#0b1120', lineHeight: 1.15, letterSpacing: '-0.03em', marginBottom: '20px' }}>
                  Your business,<br />running on autopilot.
                </h3>
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.7, maxWidth: '420px', fontWeight: 400 }}>
                  We embed AI directly into your web and app workflows — automating the tasks that drain your team and surfacing insights that grow your revenue. Smarter software, zero complexity.
                </p>
              </div>
              <div style={{ marginTop: '48px', position: 'relative', zIndex: 1 }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
                  {['Automates repetitive daily work', 'Learns from your business data', 'Cuts operational costs up to 60%'].map((b, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                      <div style={{ width: '24px', height: '24px', borderRadius: '50%', background: 'linear-gradient(135deg, #eff6ff, #dbeafe)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, boxShadow: '0 2px 6px rgba(37,99,235,0.15)' }}>
                        <CheckCircle2 color="#2563eb" size={14} strokeWidth={3} />
                      </div>
                      <span style={{ fontSize: '0.95rem', color: '#334155', fontWeight: 600 }}>{b}</span>
                    </div>
                  ))}
                </div>
                <motion.button
                  whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}
                  style={{ background: 'linear-gradient(135deg, #2563eb, #7c3aed)', color: '#fff', border: 'none', borderRadius: '14px', padding: '16px 32px', fontSize: '1rem', fontWeight: 700, display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', boxShadow: '0 12px 28px rgba(37,99,235,0.3)', transition: 'box-shadow 0.3s ease' }}
                >
                  Start with AI <ArrowUpRight size={18} strokeWidth={2.5} />
                </motion.button>
              </div>
            </motion.div>

            {/* Web Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(16,185,129,0.12)' }}
              style={{ background: '#fff', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '32px', padding: '40px', cursor: 'pointer', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at top right, rgba(16,185,129,0.1) 0%, transparent 50%)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #10b981, #059669)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 10px 20px rgba(16,185,129,0.25)' }}>
                  <Globe color="#fff" size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0b1120', marginBottom: '12px', letterSpacing: '-0.02em' }}>Web Development</h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>A fast, beautiful website that turns visitors into paying customers — not just traffic.</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(16,185,129,0.1)', padding: '6px 12px', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#059669', fontWeight: 700 }}>↑ More leads. Less bounce.</span>
                </div>
              </div>
            </motion.div>

            {/* App Development */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(249,115,22,0.12)' }}
              style={{ background: '#fff', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '32px', padding: '40px', cursor: 'pointer', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at bottom right, rgba(249,115,22,0.1) 0%, transparent 50%)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '56px', height: '56px', borderRadius: '16px', background: 'linear-gradient(135deg, #f97316, #ea580c)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '24px', boxShadow: '0 10px 20px rgba(249,115,22,0.25)' }}>
                  <Smartphone color="#fff" size={28} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.3rem', fontWeight: 800, color: '#0b1120', marginBottom: '12px', letterSpacing: '-0.02em' }}>App Development</h4>
                <p style={{ fontSize: '1rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>Native mobile experiences that keep your users coming back every single day.</p>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', background: 'rgba(249,115,22,0.1)', padding: '6px 12px', borderRadius: '8px' }}>
                    <span style={{ fontSize: '0.85rem', color: '#ea580c', fontWeight: 700 }}>↑ More retention. More revenue.</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Bottom Row — 3 equal cards */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '24px', marginTop: '24px' }}>

            {/* Database */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
              whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(236,72,153,0.12)' }}
              style={{ background: '#fff', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '32px', padding: '40px', cursor: 'pointer', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(236,72,153,0.06) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #f472b6, #db2777)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 20px rgba(236,72,153,0.2)' }}>
                  <Database color="#fff" size={24} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b1120', marginBottom: '10px', letterSpacing: '-0.01em' }}>Smart Database</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>Clean, scalable data architecture that grows with your business, never against it.</p>
                <span style={{ fontSize: '0.9rem', color: '#db2777', fontWeight: 700 }}>↑ Zero data headaches.</span>
              </div>
            </motion.div>

            {/* Deployment */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
              whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(59,130,246,0.12)' }}
              style={{ background: '#fff', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '32px', padding: '40px', cursor: 'pointer', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(59,130,246,0.06) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #60a5fa, #2563eb)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 20px rgba(59,130,246,0.2)' }}>
                  <Cloud color="#fff" size={24} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b1120', marginBottom: '10px', letterSpacing: '-0.01em' }}>Deploy & Scale</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>We handle hosting, deployment, and uptime so you can focus 100% on your growth.</p>
                <span style={{ fontSize: '0.9rem', color: '#2563eb', fontWeight: 700 }}>↑ Launch fast. Stay live.</span>
              </div>
            </motion.div>

            {/* UX/UI Design */}
            <motion.div
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }} transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
              whileHover={{ y: -6, boxShadow: '0 32px 64px rgba(139,92,246,0.12)' }}
              style={{ background: '#fff', border: '1px solid rgba(226,232,240,0.8)', borderRadius: '32px', padding: '40px', cursor: 'pointer', transition: 'all 0.4s ease', position: 'relative', overflow: 'hidden' }}
            >
              <div style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, background: 'radial-gradient(circle at center, rgba(139,92,246,0.06) 0%, transparent 60%)', zIndex: 0, pointerEvents: 'none' }} />
              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{ width: '48px', height: '48px', borderRadius: '14px', background: 'linear-gradient(135deg, #a78bfa, #7c3aed)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px', boxShadow: '0 10px 20px rgba(139,92,246,0.2)' }}>
                  <Palette color="#fff" size={24} strokeWidth={2} />
                </div>
                <h4 style={{ fontSize: '1.2rem', fontWeight: 800, color: '#0b1120', marginBottom: '10px', letterSpacing: '-0.01em' }}>UX/UI Design</h4>
                <p style={{ fontSize: '0.95rem', color: '#475569', lineHeight: 1.6, margin: '0 0 16px' }}>Interfaces so intuitive your customers never need a support call or a tutorial.</p>
                <span style={{ fontSize: '0.9rem', color: '#7c3aed', fontWeight: 700 }}>↑ Less churn. More love.</span>
              </div>
            </motion.div>
          </div>

        </div>
      </section>
    </div>
  );
}
