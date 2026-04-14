import { motion } from 'framer-motion';
import { ArrowUpRight, CalendarDays, Mic2, Newspaper, RadioTower, Sparkles } from 'lucide-react';

const releases = [
  {
    date: 'Apr 2026',
    title: 'NexTech Announces Expanded Enterprise Delivery Program',
    summary: 'New delivery track combines product strategy, cloud architecture, and growth optimization for scaling teams.',
  },
  {
    date: 'Jan 2026',
    title: 'NexTech Launches AI Automation Practice',
    summary: 'The new practice helps businesses automate repetitive workflows and improve operational speed.',
  },
  {
    date: 'Oct 2025',
    title: 'NexTech Recognized for High-Impact Platform Delivery',
    summary: 'Industry spotlight highlights successful launches across fintech, healthcare, and retail sectors.',
  },
];

const resources = [
  ['Press Contact', 'press@nextech.com'],
  ['Media Kit', 'Brand assets, company profile, and leadership bios available on request.'],
  ['Interview Requests', 'Submit interview requests for founders, technical leads, and product leadership.'],
];

const mentions = [
  'Digital Infrastructure Weekly',
  'East Africa Tech Review',
  'Cloud Engineering Journal',
  'Product Systems Podcast',
];

export default function PressMediaPage() {
  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', color: '#0f172a', paddingBottom: '90px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '112px 0 56px' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #c7d2fe', background: '#eef2ff', color: '#4338ca', borderRadius: '999px', padding: '7px 14px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            <Sparkles size={13} /> Press & Media
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ margin: '14px 0 0 0', fontSize: 'clamp(2.1rem, 4.4vw, 3.5rem)', lineHeight: 1.08, letterSpacing: '-0.03em', fontWeight: 900 }}>
            Newsroom, announcements, and media resources.
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '860px' }}>
            Explore the latest NexTech updates, company announcements, leadership commentary, and information for journalists and media partners.
          </motion.p>
          <motion.a href="/contact" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.14 }} style={{ marginTop: '22px', display: 'inline-flex', alignItems: 'center', gap: '8px', textDecoration: 'none', background: '#0f172a', color: '#fff', borderRadius: '12px', padding: '12px 18px', fontWeight: 800 }}>
            Contact Press Team <ArrowUpRight size={16} />
          </motion.a>
        </div>
      </section>

      <section style={{ padding: '34px 0 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}>Latest Announcements</h2>
          <p style={{ margin: '8px 0 16px 0', color: '#64748b', lineHeight: 1.7 }}>Official updates from NexTech leadership and teams.</p>
          <div style={{ display: 'grid', gap: '12px' }}>
            {releases.map((release, idx) => (
              <motion.article key={release.title} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }} style={{ borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', padding: '18px', boxShadow: '0 8px 20px rgba(15,23,42,0.04)' }}>
                <div style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', borderRadius: '999px', background: '#f1f5f9', color: '#334155', padding: '5px 10px', fontSize: '0.76rem', fontWeight: 700 }}>
                  <CalendarDays size={13} /> {release.date}
                </div>
                <h3 style={{ margin: '10px 0 0 0', fontSize: '1.12rem', letterSpacing: '-0.01em' }}>{release.title}</h3>
                <p style={{ margin: '8px 0 0 0', color: '#64748b', lineHeight: 1.65 }}>{release.summary}</p>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '28px 0 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <h2 style={{ margin: 0, fontSize: 'clamp(1.5rem, 3vw, 2.25rem)', letterSpacing: '-0.02em' }}>Media Resources</h2>
          <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {resources.map((resource, idx) => (
              <motion.div key={resource[0]} initial={{ opacity: 0, y: 12 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: idx * 0.04 }} style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#eff6ff', padding: '14px' }}>
                <h3 style={{ margin: 0, color: '#1d4ed8', fontSize: '1rem' }}>{resource[0]}</h3>
                <p style={{ margin: '7px 0 0 0', color: '#334155', lineHeight: 1.65 }}>{resource[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '20px 0 0' }}>
        <div className="container" style={{ maxWidth: '1160px' }}>
          <div style={{ borderRadius: '16px', border: '1px solid #e2e8f0', background: '#fff', padding: '14px' }}>
            <h3 style={{ margin: 0, fontSize: '1.05rem' }}>Featured Mentions</h3>
            <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginTop: '10px' }}>
              {mentions.map((mention, idx) => (
                <motion.span key={mention} initial={{ opacity: 0, y: 8 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: idx * 0.04 }} style={{ display: 'inline-flex', alignItems: 'center', gap: '6px', border: '1px solid #e2e8f0', borderRadius: '999px', padding: '6px 10px', color: '#475569', fontSize: '0.8rem', fontWeight: 700 }}>
                  {idx % 2 === 0 ? <Newspaper size={13} /> : idx % 3 === 0 ? <RadioTower size={13} /> : <Mic2 size={13} />}
                  {mention}
                </motion.span>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
