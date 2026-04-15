import { useMemo } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

type CaseStudy = {
  id: string;
  title: string;
  category: string;
  client: string;
  summary: string;
  challenge: string;
  solution: string;
  impact: string[];
  image: string;
};

const CASE_STUDIES: CaseStudy[] = [
  {
    id: '01',
    title: 'Instant Luxury Car Booking',
    category: 'Web App',
    client: 'Luxury Cars on Rent',
    summary: 'A complete car rental platform that delivers fast booking, real-time vehicle availability, secure authentication, and seamless payments.',
    challenge: 'The rental process relied on manual coordination, which caused booking delays, scheduling conflicts, and poor visibility into live fleet status.',
    solution: 'We built a streamlined booking experience with live availability updates, customer accounts, and secure checkout so users can reserve cars in minutes.',
    impact: ['4x faster booking completion', 'Significant reduction in double-booking conflicts', 'Higher customer conversion from search to confirmed reservation'],
    image: '/project-luxury-cars-rent.png',
  },
  {
    id: '02',
    title: 'HealthCore AI',
    category: 'Healthcare Informatics',
    client: 'MediTech Health',
    summary: 'Clinical decision support system for faster triage, safer diagnostics, and cleaner records sync.',
    challenge: 'Hospital teams worked with delayed diagnostics and disconnected patient records during critical shifts.',
    solution: 'We implemented an AI assistant that analyzes inputs in real time and syncs recommendations into EHR workflows.',
    impact: ['42% faster diagnostic turnaround', '27% reduction in admin overhead', 'Improved overnight triage consistency'],
    image: '/project-food-delivery.png',
  },
  {
    id: '03',
    title: 'Nexus Supply Chain',
    category: 'Enterprise Software',
    client: 'Logistics International',
    summary: 'IoT-first logistics platform delivering live visibility from port operations to final-mile delivery.',
    challenge: 'Shipment blind spots created delays, spoilage risks, and expensive route unpredictability.',
    solution: 'We connected container sensors to predictive routing and alerts for end-to-end control.',
    impact: ['36% fewer route disruptions', '22% lower spoilage losses', 'Near real-time visibility across global lanes'],
    image: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1200&q=80',
  },
  {
    id: '04',
    title: 'Aura E-Commerce',
    category: 'Retail Experience',
    client: 'Aura Retail',
    summary: 'Headless commerce platform built for speed, immersive product views, and conversion growth.',
    challenge: 'Slow storefront performance and generic UX drove cart abandonment and weak repeat purchases.',
    solution: 'We rebuilt the stack with a headless architecture and interactive product experiences.',
    impact: ['2.3x conversion lift', 'Sub-second page loads on core flows', 'Significant repeat-customer growth'],
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1200&q=80',
  },
];

export default function ProjectCaseStudy() {
  const navigate = useNavigate();
  const { projectId } = useParams();

  const caseStudy = useMemo(
    () => CASE_STUDIES.find((item) => item.id === projectId),
    [projectId]
  );

  if (!caseStudy) {
    return (
      <div style={{ minHeight: '100vh', background: '#f8fafc', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '24px' }}>
        <div style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '20px', padding: '36px', maxWidth: '560px', width: '100%', textAlign: 'center' }}>
          <h1 style={{ margin: '0 0 10px 0', fontSize: '1.8rem', color: '#0f172a' }}>Case study not found</h1>
          <p style={{ margin: 0, color: '#64748b', lineHeight: 1.6 }}>
            The project you are trying to open does not exist.
          </p>
          <button
            className="project-btn-primary"
            onClick={() => navigate('/projects')}
            style={{
              marginTop: '22px',
              padding: '12px 22px',
              borderRadius: '12px',
              background: '#0f172a',
              color: '#ffffff',
              fontWeight: 700,
              border: 'none',
            }}
          >
            Back to Projects
          </button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '100px' }}>
      <section style={{ borderBottom: '1px solid #e2e8f0', background: '#ffffff', paddingTop: '120px', paddingBottom: '52px' }}>
        <div className="container" style={{ maxWidth: '1200px' }}>
          <button
            className="project-btn-secondary"
            onClick={() => navigate('/projects')}
            style={{
              marginBottom: '20px',
              padding: '10px 16px',
              borderRadius: '12px',
              border: '1px solid #cbd5e1',
              background: '#ffffff',
              color: '#0f172a',
              fontWeight: 700,
            }}
          >
            Back to Projects
          </button>

          <div style={{ display: 'flex', justifyContent: 'space-between', gap: '28px', flexWrap: 'wrap' }}>
            <div style={{ flex: '1 1 560px' }}>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', borderRadius: '9999px', padding: '6px 14px', border: '1px solid rgba(37,99,235,0.25)', background: 'rgba(37,99,235,0.06)', marginBottom: '16px' }}>
                <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#2563eb' }} />
                <span style={{ color: '#2563eb', fontWeight: 800, letterSpacing: '0.07em', fontSize: '0.76rem', textTransform: 'uppercase' }}>
                  Case Study #{caseStudy.id}
                </span>
              </div>
              <h1 style={{ margin: 0, fontSize: 'clamp(2rem, 4vw, 3.2rem)', lineHeight: 1.1, letterSpacing: '-0.03em' }}>
                {caseStudy.title}
              </h1>
              <p style={{ margin: '16px 0 0 0', color: '#64748b', lineHeight: 1.7, maxWidth: '740px' }}>
                {caseStudy.summary}
              </p>
            </div>

            <div style={{ flex: '0 1 280px', background: '#f8fafc', borderRadius: '16px', border: '1px solid #e2e8f0', padding: '18px' }}>
              <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Client</p>
              <p style={{ margin: '6px 0 14px 0', fontWeight: 700, color: '#0f172a' }}>{caseStudy.client}</p>
              <p style={{ margin: 0, fontSize: '0.78rem', fontWeight: 800, color: '#94a3b8', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Category</p>
              <p style={{ margin: '6px 0 0 0', fontWeight: 700, color: '#0f172a' }}>{caseStudy.category}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="container" style={{ maxWidth: '1200px', paddingTop: '46px' }}>
        <div className="project-image-frame" style={{ borderRadius: '20px', overflow: 'hidden', border: '10px solid #ffffff', boxShadow: '0 20px 45px rgba(0,0,0,0.08)' }}>
          <img
            className="project-image-hover"
            src={caseStudy.image}
            alt={caseStudy.title}
            style={{ width: '100%', height: '420px', objectFit: 'cover' }}
          />
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '18px', marginTop: '28px' }}>
          <article className="project-detail-row card-danger" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '22px', margin: 0 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.05rem' }}>The Challenge</h3>
            <p style={{ margin: 0, color: '#64748b', lineHeight: 1.7 }}>{caseStudy.challenge}</p>
          </article>
          <article className="project-detail-row card-success" style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '22px', margin: 0 }}>
            <h3 style={{ margin: '0 0 8px 0', fontSize: '1.05rem' }}>Our Solution</h3>
            <p style={{ margin: 0, color: '#64748b', lineHeight: 1.7 }}>{caseStudy.solution}</p>
          </article>
        </div>

        <div className="project-detail-card-wrap" style={{ marginTop: '18px', background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '16px', padding: '24px' }}>
          <h3 style={{ margin: '0 0 12px 0', fontSize: '1.1rem' }}>Key Impact</h3>
          <div style={{ display: 'grid', gap: '10px' }}>
            {caseStudy.impact.map((point) => (
              <div key={point} className="project-detail-row card-info" style={{ margin: 0, borderRadius: '12px', border: '1px solid #e2e8f0', background: '#f8fafc', padding: '12px 14px' }}>
                <span style={{ color: '#0f172a', fontWeight: 600 }}>{point}</span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
