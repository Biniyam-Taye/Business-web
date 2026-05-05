import type { CSSProperties, FormEvent } from 'react';
import { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarCheck2, Clock3, Mail, MapPin, Phone, ShieldCheck, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { submitLeadForm } from './lib/formSubmit';

const channels = [
  {
    title: 'Strategy Call',
    detail: '+251 936 016 511',
    note: 'Best for urgent project scoping',
    icon: <Phone size={18} strokeWidth={2.25} />,
  },
  {
    title: 'Project Inbox',
    detail: 'afriniadigitalsolutions@gmail.com',
    note: 'Share docs, RFPs, and requirements',
    icon: <Mail size={18} strokeWidth={2.25} />,
  },
  {
    title: 'Office Hub',
    detail: 'Arba Minch, Ethiopia',
    note: 'In-person workshops by appointment',
    icon: <MapPin size={18} strokeWidth={2.25} />,
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

const labelStyle: CSSProperties = {
  display: 'block',
  fontSize: '0.84rem',
  fontWeight: 800,
  letterSpacing: '0.03em',
  color: '#020617',
  marginBottom: '8px',
};

export default function ContactPage() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];
  const stagger = { duration: 0.65, ease };
  const [hoveredChannel, setHoveredChannel] = useState<number | null>(null);
  const navigate = useNavigate();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    budget: '',
    message: '',
    website: '',
  });

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrorMessage('');
    setIsSubmitting(true);

    try {
      await submitLeadForm({
        formType: 'contact-brief',
        data: {
          name: formData.name.trim(),
          email: formData.email.trim(),
          company: formData.company.trim(),
          budget: formData.budget,
          message: formData.message.trim(),
        },
        pageUrl: window.location.href,
        userAgent: window.navigator.userAgent,
        hpField: formData.website,
      });
      navigate('/thank-you');
    } catch (error) {
      const message = error instanceof Error ? error.message : 'Unable to submit. Please try again.';
      setErrorMessage(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="contact-page" style={{ position: 'relative', minHeight: '100vh', overflow: 'hidden' }}>
      <style>{`
        .contact-page {
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
          text-rendering: optimizeLegibility;
        }
        .contact-page .cp-field-shell {
          position: relative;
          padding-bottom: 10px;
          margin-bottom: 2px;
          border-radius: 16px;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1);
        }
        .contact-page .cp-field-shell::before {
          content: '';
          position: absolute;
          left: 50%;
          bottom: 2px;
          width: 92%;
          height: 4px;
          border-radius: 999px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          background: linear-gradient(90deg, #ffb8ad 0%, #EF4E39 32%, #f97316 58%, #EF4E39 82%, #ffb8ad 100%);
          background-size: 200% 100%;
          opacity: 0;
          filter: drop-shadow(0 2px 10px rgba(239, 78, 57, 0.55));
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.35s ease;
          pointer-events: none;
          animation: cp-field-shimmer 2.6s linear infinite;
          animation-play-state: paused;
        }
        .contact-page .cp-field-shell:hover::before,
        .contact-page .cp-field-shell:focus-within::before {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
          animation-play-state: running;
        }
        @keyframes cp-field-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .contact-page .cp-field-shell:hover {
          transform: translateY(-4px);
        }
        .contact-page .cp-field-shell:focus-within {
          transform: translateY(-2px);
        }
        .contact-page .cp-input,
        .contact-page .cp-select,
        .contact-page .cp-textarea {
          width: 100%;
          box-sizing: border-box;
          border: 2px solid #94a3b8;
          background: #ffffff;
          border-radius: 14px;
          padding: 14px 16px;
          color: #020617;
          outline: none;
          font-size: 1.02rem;
          font-weight: 700;
          line-height: 1.45;
          transition: border-color 0.28s ease, box-shadow 0.35s ease, background 0.35s ease, transform 0.35s ease;
        }
        .contact-page .cp-input::placeholder,
        .contact-page .cp-textarea::placeholder {
          color: #475569;
          font-weight: 600;
          opacity: 1;
        }
        .contact-page .cp-field-shell:hover .cp-input,
        .contact-page .cp-field-shell:hover .cp-textarea {
          border-color: #EF4E39;
          background: linear-gradient(165deg, #ffffff 0%, #fff8f6 45%, #fff0ec 100%);
          box-shadow:
            0 12px 32px rgba(239, 78, 57, 0.14),
            0 4px 14px rgba(239, 78, 57, 0.1),
            0 0 0 1px rgba(239, 78, 57, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }
        .contact-page .cp-field-shell:hover .cp-select {
          border-color: #EF4E39;
          background-color: #fff5f2;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23EF4E39' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          box-shadow:
            0 12px 32px rgba(239, 78, 57, 0.14),
            0 4px 14px rgba(239, 78, 57, 0.1),
            0 0 0 1px rgba(239, 78, 57, 0.28),
            inset 0 1px 0 rgba(255, 255, 255, 0.95);
        }
        .contact-page .cp-input:focus,
        .contact-page .cp-select:focus,
        .contact-page .cp-textarea:focus {
          border-color: #EF4E39;
          background: #ffffff;
          box-shadow: 0 0 0 4px rgba(239, 78, 57, 0.22), 0 10px 28px rgba(239, 78, 57, 0.1);
        }
        .contact-page .cp-select {
          cursor: pointer;
          appearance: none;
          background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='18' height='18' viewBox='0 0 24 24' fill='none' stroke='%23EF4E39' stroke-width='2.5'%3E%3Cpath d='M6 9l6 6 6-6'/%3E%3C/svg%3E");
          background-repeat: no-repeat;
          background-position: right 14px center;
          padding-right: 44px;
        }
        .contact-page .cp-select option {
          font-weight: 700;
          color: #020617;
        }
        .contact-page .cp-track-row {
          position: relative;
          border-radius: 14px;
          border: 2px solid #dbeafe;
          padding: 12px 12px 14px;
          background: #f8fbff;
          overflow: hidden;
          cursor: default;
          transition:
            transform 0.45s cubic-bezier(0.16, 1, 0.3, 1),
            border-color 0.32s ease,
            box-shadow 0.35s ease,
            background 0.35s ease;
        }
        .contact-page .cp-track-row::before {
          content: '';
          position: absolute;
          left: 50%;
          top: 0;
          width: 92%;
          height: 4px;
          transform: translateX(-50%) scaleX(0);
          transform-origin: center;
          border-radius: 0 0 999px 999px;
          background: linear-gradient(90deg, #ffb8ad 0%, #ef4e39 30%, #f97316 55%, #ef4e39 78%, #ffb8ad 100%);
          background-size: 200% 100%;
          opacity: 0;
          filter: drop-shadow(0 3px 8px rgba(239, 78, 57, 0.45));
          transition: transform 0.5s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.32s ease;
          pointer-events: none;
          animation: cp-track-shimmer 2.5s linear infinite;
          animation-play-state: paused;
        }
        .contact-page .cp-track-row:hover::before {
          transform: translateX(-50%) scaleX(1);
          opacity: 1;
          animation-play-state: running;
        }
        @keyframes cp-track-shimmer {
          0% {
            background-position: 0% 50%;
          }
          100% {
            background-position: 200% 50%;
          }
        }
        .contact-page .cp-track-row:hover {
          transform: translateY(-5px);
          border-color: rgba(239, 78, 57, 0.45);
          background: linear-gradient(165deg, #ffffff 0%, #fff8f6 48%, #ffeeea 100%);
          box-shadow:
            0 14px 32px rgba(239, 78, 57, 0.12),
            0 4px 14px rgba(239, 78, 57, 0.08),
            0 0 0 1px rgba(239, 78, 57, 0.12);
        }
        .contact-page .cp-track-row .cp-track-duration {
          color: #1d4ed8;
          transition: color 0.28s ease, transform 0.28s ease;
        }
        .contact-page .cp-track-row:hover .cp-track-duration {
          color: #ef4e39;
          transform: translateX(-2px);
        }
        .contact-page .cp-track-row .cp-track-desc {
          transition: color 0.28s ease;
        }
        .contact-page .cp-track-row:hover .cp-track-desc {
          color: #1e293b;
        }

        /* --- Channels Premium Liquid Hover Styles --- */
        .contact-page .cp-channel-card {
          position: relative;
          overflow: hidden;
          border-radius: 20px;
          border: 2px solid #dbeafe;
          background: #ffffff;
          padding: 24px;
          box-shadow: 0 10px 28px rgba(37,99,235,0.06);
          cursor: pointer;
          transition: transform 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s ease, border-color 0.4s ease;
          z-index: 1;
        }

        /* The liquid expanding circle */
        .contact-page .cp-channel-card::before {
          content: '';
          position: absolute;
          top: 46px; /* center of the icon roughly */
          left: 46px;
          width: 0;
          height: 0;
          border-radius: 50%;
          background: linear-gradient(135deg, #2563eb 0%, #4f46e5 100%);
          transition: width 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
                      height 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
                      top 0.6s cubic-bezier(0.25, 1, 0.5, 1), 
                      left 0.6s cubic-bezier(0.25, 1, 0.5, 1),
                      opacity 0.4s ease;
          z-index: -1;
          opacity: 0.95;
        }

        .contact-page .cp-channel-card:hover::before {
          width: 900px;
          height: 900px;
          top: -400px;
          left: -400px;
          opacity: 1;
        }

        .contact-page .cp-channel-card:hover {
          transform: translateY(-8px) scale(1.02);
          border-color: transparent;
          box-shadow: 0 24px 48px rgba(37,99,235,0.25);
        }

        .contact-page .cp-channel-icon {
          position: relative;
          width: 44px;
          height: 44px;
          border-radius: 12px;
          display: inline-flex;
          align-items: center;
          justify-content: center;
          color: #1d4ed8;
          background: #eff6ff;
          border: 2px solid #bfdbfe;
          transition: all 0.4s ease;
          z-index: 2;
        }

        /* Subtle icon pop on hover */
        .contact-page .cp-channel-card:hover .cp-channel-icon {
          color: #2563eb;
          background: #ffffff;
          border-color: #ffffff;
          transform: scale(1.1) rotate(-5deg);
          box-shadow: 0 8px 20px rgba(0, 0, 0, 0.15);
        }

        .contact-page .cp-channel-title {
          position: relative;
          margin: 18px 0 0 0;
          font-weight: 800;
          color: #020617;
          font-size: 1.05rem;
          letter-spacing: -0.02em;
          transition: color 0.4s ease;
          z-index: 2;
        }

        .contact-page .cp-channel-card:hover .cp-channel-title {
          color: #ffffff;
        }

        .contact-page .cp-channel-detail {
          position: relative;
          margin: 6px 0 0 0;
          color: #1e3a8a;
          font-weight: 800;
          font-size: 0.95rem;
          transition: color 0.4s ease;
          z-index: 2;
        }

        .contact-page .cp-channel-card:hover .cp-channel-detail {
          color: #e0e7ff;
        }

        .contact-page .cp-channel-note {
          position: relative;
          margin: 10px 0 0 0;
          color: #334155;
          font-size: 0.9rem;
          line-height: 1.55;
          font-weight: 700;
          transition: color 0.4s ease;
          z-index: 2;
        }

        .contact-page .cp-channel-card:hover .cp-channel-note {
          color: #c7d2fe;
        }

        @media (max-width: 960px) {
          .contact-page .cp-channels {
            grid-template-columns: 1fr !important;
          }
          .contact-page .cp-main-grid {
            grid-template-columns: 1fr !important;
          }
          .contact-page .cp-faqs {
            grid-template-columns: 1fr !important;
          }
          .contact-page .cp-field-row {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>

      {/* Ambient background */}
      <div
        style={{
          position: 'fixed',
          inset: 0,
          zIndex: 0,
          background: 'linear-gradient(165deg, #f0f7ff 0%, #e8f0fe 35%, #eef6ff 70%, #f8fafc 100%)',
          pointerEvents: 'none',
        }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1, 1.08, 1], opacity: [0.35, 0.5, 0.35] }}
        transition={{ duration: 14, repeat: Infinity, ease: 'easeInOut' }}
        style={{
          position: 'fixed',
          top: '-18%',
          right: '-8%',
          width: 'min(52vw, 520px)',
          height: 'min(52vw, 520px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(37,99,235,0.22) 0%, transparent 68%)',
          filter: 'blur(2px)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />
      <motion.div
        aria-hidden
        animate={{ scale: [1.05, 1, 1.05], opacity: [0.28, 0.42, 0.28] }}
        transition={{ duration: 18, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
        style={{
          position: 'fixed',
          bottom: '-12%',
          left: '-6%',
          width: 'min(48vw, 440px)',
          height: 'min(48vw, 440px)',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(99,102,241,0.18) 0%, transparent 70%)',
          pointerEvents: 'none',
          zIndex: 0,
        }}
      />

      <section style={{ position: 'relative', zIndex: 1, padding: '112px 0 88px' }}>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 28 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.72, ease }}
            whileHover={{ boxShadow: '0 28px 64px rgba(30,64,175,0.14)' }}
            style={{
              borderRadius: '28px',
              border: '1px solid #bfdbfe',
              background: 'linear-gradient(150deg, #ffffff 0%, #fbfdff 45%, #f4f8ff 100%)',
              boxShadow: '0 22px 56px rgba(30,64,175,0.11)',
              overflow: 'hidden',
              transition: 'box-shadow 0.35s ease',
            }}
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.12, duration: 0.55 }}
              style={{ padding: '30px 30px 20px', borderBottom: '1px solid #dbeafe' }}
            >
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'tween', duration: 0.2 }}
                style={{
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                  borderRadius: '999px',
                  border: '2px solid #bfdbfe',
                  background: 'linear-gradient(180deg, #eff6ff 0%, #dbeafe 100%)',
                  padding: '7px 14px',
                  fontSize: '0.78rem',
                  fontWeight: 800,
                  letterSpacing: '0.08em',
                  textTransform: 'uppercase',
                  color: '#172554',
                  cursor: 'default',
                }}
              >
                <Sparkles size={15} strokeWidth={2.25} />
                Contact Command Center
              </motion.div>
              <motion.h1
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.08, duration: 0.6, ease }}
                style={{
                  margin: '16px 0 0 0',
                  fontSize: 'clamp(2rem, 4vw, 3rem)',
                  lineHeight: 1.12,
                  letterSpacing: '-0.03em',
                  color: '#020617',
                  fontWeight: 900,
                }}
              >
                Start your project with a <span style={{ color: '#1d4ed8', fontWeight: 900 }}>clear execution plan</span>.
              </motion.h1>
              <motion.p
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.18, duration: 0.55, ease }}
                style={{ margin: '14px 0 0 0', maxWidth: '760px', color: '#1e293b', lineHeight: 1.72, fontSize: '1.05rem', fontWeight: 600 }}
              >
                This page is built for action: share context, choose urgency, and get a concrete response with scope, timeline range, and recommended delivery
                path.
              </motion.p>
            </motion.div>

            <div style={{ padding: '20px 30px 32px', display: 'grid', gap: '20px' }}>
              <div className="cp-channels" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '14px' }}>
                {channels.map((channel, idx) => (
                  <motion.article
                    key={channel.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ ...stagger, delay: idx * 0.08 }}
                    className="cp-channel-card"
                  >
                    <div className="cp-channel-icon">
                      {channel.icon}
                    </div>
                    <p className="cp-channel-title">
                      {channel.title}
                    </p>
                    <p className="cp-channel-detail">
                      {channel.detail}
                    </p>
                    <p className="cp-channel-note">
                      {channel.note}
                    </p>
                  </motion.article>
                ))}
              </div>

              <div className="cp-main-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '16px' }}>
                <motion.form
                  initial={{ opacity: 0, y: 22 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: '-50px' }}
                  transition={{ duration: 0.7, ease }}
                  whileHover={{
                    boxShadow: '0 20px 48px rgba(37,99,235,0.12)',
                    borderColor: '#93c5fd',
                  }}
                  onSubmit={handleSubmit}
                  style={{
                    borderRadius: '22px',
                    border: '2px solid #dbeafe',
                    background: 'linear-gradient(180deg, #ffffff 0%, #fafcff 100%)',
                    padding: '22px',
                    display: 'grid',
                    gap: '18px',
                    boxShadow: '0 14px 36px rgba(37,99,235,0.09)',
                    transition: 'border-color 0.28s ease, box-shadow 0.28s ease',
                    position: 'relative',
                  }}
                >
                  <p style={{ margin: 0, fontSize: '1.02rem', fontWeight: 900, color: '#020617', letterSpacing: '-0.02em' }}>Project brief</p>

                  <div className="cp-field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label htmlFor="cp-name" style={labelStyle}>
                        Full name
                      </label>
                      <div className="cp-field-shell">
                        <input id="cp-name" className="cp-input" type="text" name="name" autoComplete="name" placeholder="Enter your full name" value={formData.name} onChange={(event) => setFormData((prev) => ({ ...prev, name: event.target.value }))} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cp-email" style={labelStyle}>
                        Work email
                      </label>
                      <div className="cp-field-shell">
                        <input id="cp-email" className="cp-input" type="email" name="email" autoComplete="email" placeholder="Enter your email address" value={formData.email} onChange={(event) => setFormData((prev) => ({ ...prev, email: event.target.value }))} />
                      </div>
                    </div>
                  </div>
                  <div className="cp-field-row" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                    <div>
                      <label htmlFor="cp-company" style={labelStyle}>
                        Company / team
                      </label>
                      <div className="cp-field-shell">
                        <input id="cp-company" className="cp-input" type="text" name="company" autoComplete="organization" placeholder="Enter your company name" value={formData.company} onChange={(event) => setFormData((prev) => ({ ...prev, company: event.target.value }))} />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="cp-budget" style={labelStyle}>
                        Budget range
                      </label>
                      <div className="cp-field-shell">
                        <select id="cp-budget" className="cp-select" name="budget" value={formData.budget} onChange={(event) => setFormData((prev) => ({ ...prev, budget: event.target.value }))}>
                          <option value="">
                            Select a range
                          </option>
                          <option value="5-15">$5k — $15k</option>
                          <option value="15-50">$15k — $50k</option>
                          <option value="50+">$50k+</option>
                        </select>
                      </div>
                    </div>
                  </div>
                  <div>
                    <label htmlFor="cp-message" style={labelStyle}>
                      What should we know?
                    </label>
                    <div className="cp-field-shell">
                      <textarea
                        id="cp-message"
                        className="cp-textarea"
                        name="message"
                        rows={5}
                        placeholder="Goals, timeline, tech stack, integrations, success metrics…"
                        value={formData.message}
                        onChange={(event) => setFormData((prev) => ({ ...prev, message: event.target.value }))}
                        style={{ resize: 'vertical', minHeight: '148px', fontFamily: 'inherit' }}
                      />
                    </div>
                  </div>
                  <input
                    type="text"
                    tabIndex={-1}
                    autoComplete="off"
                    aria-hidden="true"
                    value={formData.website}
                    onChange={(event) => setFormData((prev) => ({ ...prev, website: event.target.value }))}
                    style={{ position: 'absolute', left: '-9999px', opacity: 0, pointerEvents: 'none' }}
                  />

                  <div className="contact-submit-row" style={{ display: 'flex', justifyContent: 'space-between', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: '#1e293b', fontSize: '0.9rem', fontWeight: 800 }}>
                      <span style={{ display: 'flex', color: '#2563eb' }}>
                        <ShieldCheck size={18} strokeWidth={2.25} />
                      </span>
                      NDA-friendly and privacy-first intake
                    </div>
                    <motion.button
                      type="submit"
                      whileHover={{ scale: 1.03, boxShadow: '0 12px 28px rgba(37,99,235,0.35)' }}
                      whileTap={{ scale: 0.98 }}
                      transition={{ type: 'tween', duration: 0.2 }}
                      disabled={isSubmitting}
                      style={{
                        border: 'none',
                        borderRadius: '14px',
                        padding: '14px 22px',
                        background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)',
                        color: '#ffffff',
                        fontWeight: 800,
                        fontSize: '0.95rem',
                        letterSpacing: '0.02em',
                        display: 'flex',
                        alignItems: 'center',
                        gap: '10px',
                        cursor: isSubmitting ? 'not-allowed' : 'pointer',
                        boxShadow: '0 8px 24px rgba(37,99,235,0.28)',
                        opacity: isSubmitting ? 0.7 : 1,
                      }}
                    >
                      {isSubmitting ? 'Sending...' : 'Send project brief'} <ArrowRight size={18} strokeWidth={2.25} />
                    </motion.button>
                  </div>
                  {errorMessage ? <p style={{ margin: 0, color: '#dc2626', fontSize: '0.85rem', fontWeight: 700 }}>{errorMessage}</p> : null}
                </motion.form>

                <div style={{ display: 'grid', gap: '14px', alignContent: 'start' }}>
                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.1, ease }}
                    whileHover={{ y: -4, boxShadow: '0 16px 34px rgba(37,99,235,0.11)' }}
                    style={{
                      borderRadius: '18px',
                      border: '2px solid #dbeafe',
                      background: '#ffffff',
                      padding: '16px',
                      boxShadow: '0 10px 28px rgba(37,99,235,0.08)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                  >
                    <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800 }}>
                      Response SLA
                    </p>
                    <div style={{ marginTop: '12px', display: 'grid', gap: '10px' }}>
                      <div style={metaRowStyle}>
                        <span style={{ color: '#1d4ed8', flexShrink: 0 }}>
                          <Clock3 size={18} strokeWidth={2.5} />
                        </span>
                        <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>First response in under 24h</span>
                      </div>
                      <div style={metaRowStyle}>
                        <span style={{ color: '#1d4ed8', flexShrink: 0 }}>
                          <CalendarCheck2 size={18} strokeWidth={2.5} />
                        </span>
                        <span style={{ fontWeight: 800, color: '#0f172a', fontSize: '0.92rem' }}>Discovery call in 2–3 business days</span>
                      </div>
                    </div>
                  </motion.div>

                  <motion.div
                    initial={{ opacity: 0, x: 24 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: '-40px' }}
                    transition={{ duration: 0.6, delay: 0.18, ease }}
                    whileHover={{ y: -4, boxShadow: '0 16px 34px rgba(37,99,235,0.11)' }}
                    style={{
                      borderRadius: '18px',
                      border: '2px solid #dbeafe',
                      background: '#ffffff',
                      padding: '16px',
                      boxShadow: '0 10px 28px rgba(37,99,235,0.08)',
                      transition: 'transform 0.25s ease, box-shadow 0.25s ease',
                    }}
                  >
                    <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800 }}>
                      Delivery tracks
                    </p>
                    <div style={{ marginTop: '12px', display: 'grid', gap: '10px' }}>
                      {tracks.map((track, i) => (
                        <motion.div
                          key={track[0]}
                          initial={{ opacity: 0, x: 8 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ delay: 0.15 + i * 0.06, duration: 0.45, ease }}
                        >
                          <div className="cp-track-row">
                            <div style={{ position: 'relative', zIndex: 1, display: 'flex', justifyContent: 'space-between', gap: '8px', alignItems: 'center' }}>
                              <strong style={{ color: '#020617', fontSize: '0.95rem', fontWeight: 800 }}>{track[0]}</strong>
                              <span className="cp-track-duration" style={{ fontSize: '0.82rem', fontWeight: 800 }}>
                                {track[1]}
                              </span>
                            </div>
                            <p className="cp-track-desc" style={{ margin: '6px 0 0 0', color: '#334155', lineHeight: 1.55, fontSize: '0.88rem', fontWeight: 700 }}>
                              {track[2]}
                            </p>
                          </div>
                        </motion.div>
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>

              <div className="cp-faqs" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, minmax(0, 1fr))', gap: '12px' }}>
                {faqs.map((f, idx) => (
                  <motion.div
                    key={f[0]}
                    initial={{ opacity: 0, y: 18 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: '-30px' }}
                    transition={{ duration: 0.55, delay: 0.12 + idx * 0.07, ease }}
                    whileHover={{ y: -6, scale: 1.015, boxShadow: '0 14px 32px rgba(37,99,235,0.1)' }}
                    style={{
                      borderRadius: '16px',
                      border: '2px solid #dbeafe',
                      background: '#ffffff',
                      padding: '16px',
                      boxShadow: '0 8px 22px rgba(37,99,235,0.07)',
                      transition: 'border-color 0.2s ease',
                    }}
                  >
                    <p style={{ margin: 0, color: '#020617', fontWeight: 800, fontSize: '0.98rem', letterSpacing: '-0.015em', lineHeight: 1.35 }}>{f[0]}</p>
                    <p style={{ margin: '10px 0 0 0', color: '#334155', lineHeight: 1.65, fontSize: '0.92rem', fontWeight: 700 }}>{f[1]}</p>
                  </motion.div>
                ))}
              </div>

              <motion.div
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.65, ease }}
                whileHover={{ boxShadow: '0 18px 42px rgba(37,99,235,0.12)' }}
                style={{
                  borderRadius: '20px',
                  border: '2px solid #dbeafe',
                  background: '#ffffff',
                  boxShadow: '0 14px 32px rgba(37,99,235,0.09)',
                  overflow: 'hidden',
                  transition: 'box-shadow 0.3s ease',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    gap: '12px',
                    padding: '16px 18px 12px',
                    borderBottom: '2px solid #dbeafe',
                    background: 'linear-gradient(180deg, #ffffff 0%, #f8fbff 100%)',
                  }}
                >
                  <div>
                    <p style={{ margin: 0, color: '#1e3a8a', fontSize: '0.8rem', letterSpacing: '0.1em', textTransform: 'uppercase', fontWeight: 800 }}>Visit us</p>
                    <h3 style={{ margin: '6px 0 0 0', color: '#020617', fontSize: '1.12rem', letterSpacing: '-0.02em', fontWeight: 900 }}>AfriNia Digital Solution office location</h3>
                  </div>
                  <span
                    style={{
                      borderRadius: '999px',
                      border: '2px solid #93c5fd',
                      background: '#eff6ff',
                      color: '#1e3a8a',
                      padding: '6px 12px',
                      fontSize: '0.84rem',
                      fontWeight: 800,
                    }}
                  >
                    Arba Minch
                  </span>
                </div>
                <div style={{ padding: '14px' }}>
                  <motion.div
                    whileHover={{ scale: 1.01 }}
                    transition={{ type: 'tween', duration: 0.25 }}
                    style={{ borderRadius: '16px', overflow: 'hidden', border: '2px solid #dbeafe', height: '268px', boxShadow: 'inset 0 0 0 1px rgba(255,255,255,0.6)' }}
                  >
                    <iframe
                      src="https://maps.google.com/maps?q=Arba%20Minch,%20Ethiopia&t=&z=13&ie=UTF8&iwloc=&output=embed"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="AfriNia Digital Solution office location map"
                    />
                  </motion.div>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
}

const metaRowStyle: CSSProperties = {
  display: 'flex',
  alignItems: 'flex-start',
  gap: '10px',
  color: '#0f172a',
  fontSize: '0.92rem',
  lineHeight: 1.45,
};
