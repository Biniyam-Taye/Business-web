import { useNavigate } from 'react-router-dom';

export default function ThankYouPage() {
  const navigate = useNavigate();

  return (
    <div style={{ minHeight: '100vh', display: 'grid', placeItems: 'center', background: 'linear-gradient(180deg, #f8fbff 0%, #eef5ff 100%)', padding: '120px 20px' }}>
      <section style={{ width: '100%', maxWidth: '720px', borderRadius: '24px', border: '1px solid #dbeafe', background: '#ffffff', boxShadow: '0 16px 38px rgba(37,99,235,0.1)', padding: '36px' }}>
        <p style={{ margin: 0, color: '#1d4ed8', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', fontSize: '0.78rem' }}>Submission received</p>
        <h1 style={{ margin: '14px 0 0 0', color: '#020617', fontSize: 'clamp(1.9rem, 4vw, 2.6rem)', lineHeight: 1.15 }}>
          Thank you. We will get back to you soon.
        </h1>
        <p style={{ margin: '14px 0 0 0', color: '#475569', lineHeight: 1.7, fontSize: '1rem' }}>
          Your details were sent successfully. Our team will review your request and respond through your preferred contact details.
        </p>
        <div style={{ marginTop: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
          <button
            type="button"
            onClick={() => navigate('/')}
            style={{ border: 'none', borderRadius: '12px', padding: '12px 18px', background: 'linear-gradient(135deg, #2563eb 0%, #4f46e5 100%)', color: '#ffffff', fontWeight: 700, cursor: 'pointer' }}
          >
            Back to home
          </button>
          <button
            type="button"
            onClick={() => navigate('/contact')}
            style={{ border: '1px solid #cbd5e1', borderRadius: '12px', padding: '12px 18px', background: '#ffffff', color: '#0f172a', fontWeight: 700, cursor: 'pointer' }}
          >
            Open contact page
          </button>
        </div>
      </section>
    </div>
  );
}
