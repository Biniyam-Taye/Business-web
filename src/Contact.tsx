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
        background: 'linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)',
        color: '#0f172a',
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
              border: '1px solid #dbeafe',
              background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 58%, #eef4ff 100%)',
              boxShadow: '0 24px 60px rgba(30,64,175,0.12)',
              overflow: 'hidden',
            }}
          >
            <div style={{ padding: '30px 30px 18px', borderBottom: '1px solid #dbeafe' }}>
              <div
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '999px',
                  border: '1px solid #bfdbfe',
                  background: '#eff6ff',
                  padding: '6px 12px',
                  fontSize: '0.76rem',
                  fontWeight: 800,
                  letterSpacing: '0.06em',
                  textTransform: 'uppercase',
                  color: '#1d4ed8',
                }}
              >
                <Sparkles size={14} />
                Contact Command Center
              </div>
              <h1 style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)', lineHeight: 1.12, letterSpacing: '-0.03em', color: '#0f172a' }}>
                Start your project with a <span style={{ color: '#2563eb' }}>clear execution plan</span>.
              </h1>
              <p style={{ margin: '12px 0 0 0', maxWidth: '760px', color: '#475569', lineHeight: 1.7, fontSize: '1rem' }}>
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
                      border: '1px solid #dbeafe',
                      background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)',
                      padding: '14px',
                      boxShadow: '0 10px 24px rgba(37,99,235,0.08)',
                    }}
                  >
                    <div style={{ width: '34px', height: '34px', borderRadius: '10px', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', color: '#1d4ed8', border: '1px solid #bfdbfe', background: '#eff6ff' }}>
                      {channel.icon}
                    </div>
                    <p style={{ margin: '10px 0 0 0', fontWeight: 700, color: '#0f172a' }}>{channel.title}</p>
                    <p style={{ margin: '4px 0 0 0', color: '#2563eb', fontWeight: 700 }}>{channel.detail}</p>
                    <p style={{ margin: '6px 0 0 0', color: '#475569', fontSize: '0.86rem', lineHeight: 1.55 }}>{channel.note}</p>
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
                    border: '1px solid #dbeafe',
                    background: '#ffffff',
                    padding: '16px',
                    display: 'grid',
                    gap: '12px',
                    boxShadow: '0 12px 28px rgba(37,99,235,0.08)',
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
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: '#475569', fontSize: '0.82rem', fontWeight: 600 }}>
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
                    style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '14px', boxShadow: '0 10px 24px rgba(37,99,235,0.08)' }}
                  >
                    <p style={{ margin: 0, color: '#1d4ed8', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800 }}>Response SLA</p>
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
                    style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '14px', boxShadow: '0 10px 24px rgba(37,99,235,0.08)' }}
                  >
                    <p style={{ margin: 0, color: '#1d4ed8', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800 }}>Delivery tracks</p>
                    <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                      {tracks.map((track) => (
                        <div key={track[0]} style={{ borderRadius: '12px', border: '1px solid #dbeafe', padding: '10px', background: '#f8fbff' }}>
                          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                            <strong style={{ color: '#0f172a', fontSize: '0.9rem' }}>{track[0]}</strong>
                            <span style={{ color: '#2563eb', fontSize: '0.78rem', fontWeight: 700 }}>{track[1]}</span>
                          </div>
                          <p style={{ margin: '5px 0 0 0', color: '#475569', lineHeight: 1.5, fontSize: '0.82rem' }}>{track[2]}</p>
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
                    style={{ borderRadius: '14px', border: '1px solid #dbeafe', background: '#ffffff', padding: '12px', boxShadow: '0 8px 18px rgba(37,99,235,0.07)' }}
                  >
                    <p style={{ margin: 0, color: '#0f172a', fontWeight: 700, fontSize: '0.9rem' }}>{f[0]}</p>
                    <p style={{ margin: '6px 0 0 0', color: '#475569', lineHeight: 1.55, fontSize: '0.84rem' }}>{f[1]}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.36, ease }}
                style={{
                  borderRadius: '18px',
                  border: '1px solid #dbeafe',
                  background: '#ffffff',
                  boxShadow: '0 14px 28px rgba(37,99,235,0.09)',
                  overflow: 'hidden',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '10px',
                    padding: '14px 14px 10px',
                    borderBottom: '1px solid #dbeafe',
                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                  }}
                >
                  <div>
                    <p style={{ margin: 0, color: '#1d4ed8', fontSize: '0.75rem', letterSpacing: '0.08em', textTransform: 'uppercase', fontWeight: 800 }}>Visit us</p>
                    <h3 style={{ margin: '4px 0 0 0', color: '#0f172a', fontSize: '1rem', letterSpacing: '-0.01em' }}>NexTech Office Location</h3>
                  </div>
                  <span style={{ borderRadius: '999px', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', padding: '5px 10px', fontSize: '0.78rem', fontWeight: 700 }}>
                    Arba Minch
                  </span>
                </div>
                <div style={{ padding: '12px' }}>
                  <div style={{ borderRadius: '14px', overflow: 'hidden', border: '1px solid #dbeafe', height: '260px' }}>
                    <iframe
                      src="https://maps.google.com/maps?q=Arba%20Minch,%20Ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="NexTech office location map"
                    />
                  </div>
                </div>
              </motion.div>
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
  border: '1px solid #cbd5e1',
  background: '#f8fafc',
  borderRadius: '12px',
  padding: '12px 13px',
  color: '#0f172a',
  outline: 'none',
  fontSize: '0.92rem',
};

const metaRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'center',
  gap: '8px',
  color: '#334155',
  fontSize: '0.86rem',
};
