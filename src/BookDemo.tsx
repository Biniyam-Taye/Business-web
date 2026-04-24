import type { CSSProperties } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, CalendarClock, CheckCircle2, Clock3, ShieldCheck, Users2 } from 'lucide-react';

const demoOutcomes = [
  'Live walkthrough tailored to your business model',
  'Technical feasibility review for your roadmap',
  'Suggested architecture and delivery phases',
  'Clear estimate range, team shape, and timeline',
];

const agenda = [
  ['01', 'Business context', 'Current goals, bottlenecks, and success criteria.'],
  ['02', 'Product and operations review', 'What should be built, integrated, or automated first.'],
  ['03', 'Solution direction', 'Recommended architecture, scope boundaries, and risks.'],
  ['04', 'Delivery path', 'Milestones, expected timeline, and ownership model.'],
];

const fitChecks = [
  'You are planning a new product launch in the next 1-6 months',
  'You need to modernize legacy systems without breaking operations',
  'You want to reduce manual workflows with automation',
  'You need architecture guidance before hiring/expanding a team',
];

export default function BookDemoPage() {
  const ease: [number, number, number, number] = [0.16, 1, 0.3, 1];

  return (
    <div style={{ minHeight: '100vh', background: 'linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)', padding: '112px 0 70px' }}>
      <section>
        <div className="container" style={{ maxWidth: '1220px' }}>
          <motion.div
            initial={{ opacity: 0, y: 22 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease }}
            style={{ borderRadius: '26px', border: '1px solid #dbeafe', background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 58%, #eef4ff 100%)', boxShadow: '0 20px 52px rgba(37,99,235,0.12)', overflow: 'hidden' }}
          >
            <div style={{ padding: '30px 28px', borderBottom: '1px solid #dbeafe' }}>
              <span style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', borderRadius: '999px', padding: '6px 12px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
                <CalendarClock size={14} />
                Book Demo
              </span>
              <h1 style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)', fontWeight: 900, letterSpacing: '-0.03em', color: '#020617', lineHeight: 1.12 }}>
                Schedule a focused strategy demo for your <span style={{ color: '#2563eb' }}>next growth phase</span>.
              </h1>
              <p style={{ margin: '12px 0 0 0', color: '#475569', lineHeight: 1.72, fontSize: '1.02rem', maxWidth: '860px' }}>
                This is not a generic sales call. We review your goals, current systems, and constraints, then share a practical delivery path with
                milestones and measurable business impact.
              </p>
            </div>

            <div style={{ padding: '22px 28px 30px', display: 'grid', gap: '18px' }}>
              <div className="bookdemo-grid" style={{ display: 'grid', gridTemplateColumns: '1.1fr 0.9fr', gap: '14px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.7, ease }}
                  style={{ borderRadius: '18px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}
                >
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.02rem' }}>What you get from the demo</h3>
                  <div style={{ marginTop: '12px', display: 'grid', gap: '8px' }}>
                    {demoOutcomes.map((item) => (
                      <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', fontSize: '0.9rem', fontWeight: 600 }}>
                        <CheckCircle2 size={16} color="#2563eb" style={{ marginTop: '1px', flexShrink: 0 }} />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, delay: 0.08, ease }}
                  style={{ borderRadius: '18px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}
                >
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.02rem' }}>Session details</h3>
                  <div style={{ marginTop: '12px', display: 'grid', gap: '10px' }}>
                    {[
                      [<Clock3 size={16} key="c1" />, 'Duration', '45-60 minutes'],
                      [<Users2 size={16} key="c2" />, 'Format', 'Live video call + tailored review'],
                      [<ShieldCheck size={16} key="c3" />, 'Confidentiality', 'NDA-friendly discussion'],
                    ].map((item) => (
                      <div key={String(item[1])} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc', padding: '10px' }}>
                        <p style={{ margin: 0, display: 'flex', alignItems: 'center', gap: '7px', color: '#1d4ed8', fontWeight: 800, fontSize: '0.78rem', letterSpacing: '0.04em', textTransform: 'uppercase' }}>
                          {item[0]} {item[1]}
                        </p>
                        <p style={{ margin: '4px 0 0 0', color: '#334155', fontSize: '0.88rem', fontWeight: 600 }}>{item[2]}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>
              </div>

              <div className="bookdemo-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
                <motion.div
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.75, ease }}
                  style={{ borderRadius: '18px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}
                >
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.02rem' }}>Demo agenda</h3>
                  <div style={{ marginTop: '12px', display: 'grid', gap: '8px' }}>
                    {agenda.map((step) => (
                      <div key={step[0]} style={{ border: '1px solid #e2e8f0', borderRadius: '12px', background: '#f8fafc', padding: '10px' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', gap: '8px' }}>
                          <strong style={{ color: '#0f172a', fontSize: '0.9rem' }}>{step[1]}</strong>
                          <span style={{ color: '#1d4ed8', fontSize: '0.76rem', fontWeight: 800 }}>{step[0]}</span>
                        </div>
                        <p style={{ margin: '4px 0 0 0', color: '#475569', fontSize: '0.84rem', lineHeight: 1.45 }}>{step[2]}</p>
                      </div>
                    ))}
                  </div>
                </motion.div>

                <motion.form
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.78, delay: 0.08, ease }}
                  onSubmit={(e) => e.preventDefault()}
                  style={{ borderRadius: '18px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px', display: 'grid', gap: '10px' }}
                >
                  <h3 style={{ margin: 0, color: '#0f172a', fontSize: '1.02rem' }}>Book your slot</h3>
                  <input type="text" placeholder="Full name" style={inputStyle} />
                  <input type="email" placeholder="Work email" style={inputStyle} />
                  <input type="text" placeholder="Company" style={inputStyle} />
                  <textarea placeholder="What do you want to discuss in the demo?" rows={4} style={{ ...inputStyle, resize: 'vertical', minHeight: '110px', fontFamily: 'inherit' }} />
                  <motion.button
                    type="submit"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    style={{ border: 'none', borderRadius: '12px', padding: '12px', background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)', color: '#fff', fontWeight: 800, display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px', cursor: 'pointer' }}
                  >
                    Request Demo <ArrowRight size={16} />
                  </motion.button>
                </motion.form>
              </div>

              <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#eff6ff', padding: '12px 14px' }}>
                <p style={{ margin: 0, color: '#1d4ed8', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Who this is best for</p>
                <div style={{ marginTop: '8px', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '8px' }}>
                  {fitChecks.map((item) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155', fontSize: '0.86rem', fontWeight: 600 }}>
                      <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb', marginTop: '7px', flexShrink: 0 }} />
                      <span style={{ lineHeight: 1.45 }}>{item}</span>
                    </div>
                  ))}
                </div>
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
  border: '1px solid #cbd5e1',
  borderRadius: '12px',
  background: '#f8fafc',
  padding: '11px 12px',
  color: '#0f172a',
  fontSize: '0.92rem',
  outline: 'none',
};
