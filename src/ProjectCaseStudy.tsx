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
    title: 'Fast Food Ordering Experience',
    category: 'Web App',
    client: "Bink's Deli",
    summary: 'A modern food delivery experience focused on easy menu discovery, quick ordering, and dependable order completion.',
    challenge: 'The existing ordering flow made it hard for customers to browse menu items quickly and complete checkout without drop-off.',
    solution: 'We built a clean, mobile-friendly ordering journey with intuitive navigation, faster cart-to-checkout steps, and structured order handling.',
    impact: ['2.1x increase in completed online orders', 'Reduced checkout drop-off across mobile users', 'Faster order processing for restaurant teams'],
    image: '/case-study-food-delivery.png',
  },
  {
    id: '03',
    title: 'Smart Vehicle Service Platform',
    category: 'Web App',
    client: 'Premium Auto Care',
    summary: 'A modern garage management experience for booking services, tracking progress, and improving customer communication.',
    challenge: 'Manual processes made it difficult to coordinate appointments, update customers in real time, and keep service operations efficient.',
    solution: 'We delivered a centralized MERN platform with smart booking, service-stage tracking, and cleaner workflows for front-desk and technicians.',
    impact: ['3x faster appointment scheduling flow', 'Higher customer satisfaction through live service updates', 'Reduced operational overhead across daily service jobs'],
    image: '/case-study-automotive-care.png',
  },
  {
    id: '04',
    title: 'Student Career Launch Platform',
    category: 'Career Platform',
    client: 'Frelaunch',
    summary: 'An AI-powered digital bridge between student talent and hiring companies for internships and freelance opportunities.',
    challenge: 'Students lacked structured visibility into quality opportunities, and employers found it difficult to identify prepared early-career candidates.',
    solution: 'We developed a streamlined AI-powered platform with portfolio-led profiles, intelligent opportunity discovery, and cleaner application management for both sides.',
    impact: ['720+ active students onboarded', '112+ partner companies engaged', '85% placement success across listed opportunities'],
    image: '/project-student-career-platform.png',
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
            style={{ width: '100%', height: '420px', objectFit: 'cover', objectPosition: caseStudy.id === '04' ? 'center 22%' : 'center' }}
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
