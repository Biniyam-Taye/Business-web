import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck2, Clock3, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';

const channels = [
  {
    title: 'Strategy Call',
    detail: '+251 900 000 000',
    note: 'Best for urgent project scoping',
    icon: <Phone size={18} />,
  },
  {
    title: 'Project Inbox',
    detail: 'hello@nextech.com',
    note: 'Share docs, RFPs, and requirements',
    icon: <Mail size={18} />,
  },
  {
    title: 'Office Hub',
    detail: 'Arba Minch, Ethiopia',
    note: 'In-person workshops by appointment',
    icon: <MapPin size={18} />,
  },
];

const tracks = [
  ['MVP Launch', '2-6 weeks', 'Fast validation with core features and analytics baseline.'],
  ['Platform Build', '6-14 weeks', 'Scalable architecture, integrations, and release workflows.'],
  ['Optimization Sprint', '2-4 weeks', 'Performance, reliability, and growth conversion improvements.'],
];

const faqs = [
  ['How soon do we get a reply?', 'Initial response is typically within 24 hours on business days.'],
  ['Do you sign NDA before details?', 'Yes. We can sign NDA first, then review your materials securely.'],
  ['Can you work with existing code?', 'Yes. We audit what exists and plan phased modernization.'],
];

export default function ContactPage() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div
      style={{
        minHeight: '100vh',
        background: 'radial-gradient(circle at 15% 10%, #1e3a8a 0%, #0f172a 34%, #020617 100%)',
        color: '#e2e8f0',
        padding: '112px 0 80px',
      }}
    >
      <section>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            style={{
              borderRadius: '28px',
              border: '1px solid rgba(148,163,184,0.32)',
              background: 'linear-gradient(140deg, rgba(15,23,42,0.86) 0%, rgba(15,23,42,0.64) 100%)',
              backdropFilter: 'blur(10px)',
              boxShadow: '0 30px 70px rgba(2,6,23,0.5)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '30px 30px 18px', borderBottom: '1px solid rgba(148,163,184,0.28)' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '999px',
                  border: '1px solid rgba(59,130,246,0.5)',
                  background: 'rgba(59,130,246,0.16)',
                  padding: '6px 12px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#bfdbfe',
                }}
              >
                <Sparkles size={14} />
                Contact Command Center
              </div>
              <h1 style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.03em', color: '#f8fafc' }}>
                Start your project with a <span style={{ color: '#93c5fd' }}>clear execution plan</span>.
              </h1>
              <p style={{ margin: '12px 0 0 0', maxWidth: '760px', color: '#cbd5e1', lineHeight: 1.7, fontSize: '1rem' }}>
                This page is built for action: share context, choose urgency, and get a concrete response with scope, timeline range, and recommended delivery path.
              </p>
            </div>

            <div style={{ padding: '18px 30px 30px', display: 'grid', gap: '18px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
                {channels.map((channel, idx) => (
                  <motion.div
                    key={channel.title}
                    initial={{ opacity: 0, y: 18 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: idx * 0.07, ease }}
                    whileHover={{ y: -6 }}
                    style={{
                      borderRadius: '16px',
                      border: '1px solid rgba(148,163,184,0.35)',
                      background: 'linear-gradient(145deg, rgba(30,41,59,0.9) 0%, rgba(15,23,42,0.75) 100%)',
                      padding: '14px',
                    }}
                  >
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#bfdbfe', border: '1px solid rgba(147,197,253,0.4)', background: 'rgba(30,58,138,0.3)' }}>
                      {channel.icon}
                    </div>
                    <p style={{ margin: '10px 0 0 0', fontWeight: 700, color: '#f8fafc' }}>{channel.title}</p>
                    <p style={{ margin: '4px 0 0 0', color: '#93c5fd', fontWeight: 700 }}>{channel.detail}</p>
                    <p style={{ margin: '6px 0 0 0', color: '#cbd5e1', fontSize: '0.86rem', lineHeight: 1.55 }}>{channel.note}</p>
                  </motion.div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '14px' }}>
                <motion.form
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.1, ease }}
                  onSubmit={(e) => e.preventDefault()}
                  style={{
                    borderRadius: '20px',
                    border: '1px solid rgba(148,163,184,0.34)',
                    background: 'rgba(15,23,42,0.66)',
                    padding: '16px',
                    display: 'grid',
                    gap: '12px',
                  }}
                >
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <input type="text" placeholder="Full name" style={inputStyle} />
                    <input type="email" placeholder="Work email" style={inputStyle} />
                  </div>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                    <input type="text" placeholder="Company / Team" style={inputStyle} />
                    <select defaultValue="" style={inputStyle}>
                      <option value="" disabled>
                        Budget range
                      </option>
                      <option>$5k - $15k</option>
                      <option>$15k - $50k</option>
                      <option>$50k+</option>
                    </select>
                  </div>
                  <textarea placeholder="What are you trying to build? Goals, timeline, constraints..." rows={5} style={{ ...inputStyle, resize: 'vertical', minHeight: '140px', fontFamily: 'inherit' }} />

                  <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#cbd5e1', fontSize: '0.82rem' }}>
                      <ShieldCheck size={14} />
                      NDA-friendly and privacy-first intake
                    </div>
                    <motion.button
                      whileHover={{ scale: 1.03 }}
                      whileTap={{ scale: 0.98 }}
                      style={{
                        border: 'none',
                        borderRadius: '12px',
                        padding: '11px 14px',
                        background: 'linear-gradient(135deg, #3b82f6 0%, #6366f1 100%)',
                        color: '#ffffff',
                        fontWeight: 800,
                        display: 'flex',
                        alignItems: 'center',
                        gap: '8px',
                        cursor: 'pointer',
                      }}
                    >
                      Send Project Brief <ArrowRight size={16} />
                    </motion.button>
                  </div>
                </motion.form>

                <div style={{ display: 'grid', gap: '10px', alignContent: 'start' }}>
                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.16, ease }}
                    style={{ borderRadius: '16px', border: '1px solid rgba(148,163,184,0.34)', background: 'rgba(15,23,42,0.66)', padding: '14px' }}
                  >
                    <p style={{ margin: 0, color: '#bfdbfe', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800 }}>Response SLA</p>
                    <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                      <div style={metaRowStyle}>
                        <Clock3 size={15} />
                        <span>First response in under 24h</span>
                      </div>
                      <div style={metaRowStyle}>
                        <CalendarCheck2 size={15} />
                        <span>Discovery call in 2-3 business days</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.22, ease }}
                    style={{ borderRadius: '16px', border: '1px solid rgba(148,163,184,0.34)', background: 'rgba(15,23,42,0.66)', padding: '14px' }}
                  >
                    <p style={{ margin: 0, color: '#bfdbfe', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800 }}>Delivery tracks</p>
                    <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                      {tracks.map((track) => (
                        <div key={track[0]} style={{ borderRadius: '12px', border: '1px solid rgba(148,163,184,0.26)', padding: '10px', background: 'rgba(30,41,59,0.55)' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                            <strong style={{ color: '#f8fafc', fontSize: '0.9rem' }}>{track[0]}</strong>
                            <span style={{ color: '#93c5fd', fontSize: '0.78rem', fontWeight: 700 }}>{track[1]}</span>
                          </div>
                          <p style={{ margin: '5px 0 0 0', color: '#cbd5e1', lineHeight: 1.5, fontSize: '0.82rem' }}>{track[2]}</p>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '10px' }}>
                {faqs.map((f, idx) => (
                  <motion.div
                    key={f[0]}
                    initial={{ opacity: 0, y: 14 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.55, delay: 0.24 + idx * 0.05, ease }}
                    style={{ borderRadius: '14px', border: '1px solid rgba(148,163,184,0.28)', background: 'rgba(15,23,42,0.55)', padding: '12px' }}
                  >
                    <p style={{ margin: 0, color: '#f8fafc', fontWeight: 700, fontSize: '0.9rem' }}>{f[0]}</p>
                    <p style={{ margin: '6px 0 0 0', color: '#cbd5e1', lineHeight: 1.55, fontSize: '0.84rem' }}>{f[1]}</p>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const inputStyle: CSSProperties = {
  width: '100%',
  boxSizing: 'border-box',
  border: '1px solid rgba(148,163,184,0.4)',
  background: 'rgba(30,41,59,0.52)',
  borderRadius: '12px',
  padding: '12px 13px',
  color: '#f8fafc',
  outline: 'none',
  fontSize: '0.92rem',
};

const metaRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#cbd5e1',
  fontSize: '0.86rem',
};
