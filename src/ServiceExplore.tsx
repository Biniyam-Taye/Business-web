import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
  impactDescription: string;
  outcomes: string[];
  deliverables: string[];
  businessValue: string[];
  kpis: string[];
  useCases: string[];
  approach: string[];
  timeline: string;
};

const serviceDetails: ServiceDetail[] = [
  {
    id: 'custom-web-platforms',
    title: 'Custom Web Platforms',
    subtitle: 'High-conversion web products built for growth',
    summary:
      'We build revenue-focused web platforms that turn traffic into qualified leads and paying customers through stronger user flows, speed, and conversion UX.',
    impactDescription:
      'This service impacts top-line growth first. Better landing flow, clearer CTAs, and faster load times reduce drop-off and improve customer acquisition efficiency. It also lowers the cost of future campaign launches because your platform becomes easier to update and scale.',
    outcomes: ['More qualified inbound leads', 'Higher checkout/form completion', 'Stronger SEO and traffic quality'],
    deliverables: ['Conversion funnel architecture', 'Reusable frontend component system', 'CMS or content workflow integration', 'Analytics + A/B testing setup'],
    businessValue: ['Increase revenue per visit', 'Lower CAC through better conversion', 'Accelerate marketing experimentation'],
    kpis: ['Lead-to-customer conversion', 'Bounce rate by landing page', 'Average order value / pipeline value'],
    useCases: ['Lead generation sites', 'B2B product websites', 'Conversion-focused e-commerce frontends'],
    approach: ['Audit current funnel leakage', 'Redesign high-impact pages first', 'Release improvements in weekly increments', 'Measure and optimize by conversion data'],
    timeline: '4-10 weeks',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Cross-platform apps with native-level experience',
    summary:
      'We create mobile products that increase repeat usage, improve customer convenience, and make your service available in the moments users actually act.',
    impactDescription:
      'The core business impact is retention and frequency. A reliable app with timely notifications and smooth key actions drives repeat behavior, improves customer lifetime value, and creates a direct-owned engagement channel outside paid media.',
    outcomes: ['Higher active user frequency', 'Better retention after first use', 'More stable releases with fewer regressions'],
    deliverables: ['Mobile product architecture', 'Critical journey UX (onboarding, purchase, booking)', 'Push and lifecycle messaging hooks', 'Store launch + update pipeline'],
    businessValue: ['Increase LTV through repeat usage', 'Reduce churn with better mobile experience', 'Open app-first monetization options'],
    kpis: ['DAU/MAU ratio', 'Day-7 / Day-30 retention', 'App conversion to purchase/booking'],
    useCases: ['Customer self-service apps', 'Marketplace buyer/seller apps', 'Loyalty and subscription apps'],
    approach: ['Define highest-value mobile journeys', 'Ship MVP journeys early', 'Instrument user behavior analytics', 'Iterate on retention and monetization loops'],
    timeline: '6-12 weeks',
  },
  {
    id: 'ai-automation-systems',
    title: 'AI & Automation Systems',
    subtitle: 'Practical AI automation for real operations',
    summary:
      'We implement AI and automation where it removes repetitive manual work, speeds approvals, and improves consistency in high-volume operations.',
    impactDescription:
      'The business value here is cost and throughput. By automating task-heavy workflows, teams process more work with the same headcount, reduce error-related rework, and create predictable SLAs for customers and internal stakeholders.',
    outcomes: ['Less repetitive human effort', 'Faster cycle times across workflows', 'More predictable process quality'],
    deliverables: ['Automation candidate map by ROI', 'AI-assisted decision/workflow modules', 'Human-in-the-loop controls', 'Exception and quality monitoring'],
    businessValue: ['Lower cost per processed unit', 'Increase operational capacity', 'Improve SLA compliance'],
    kpis: ['Cycle-time reduction', 'Automation coverage percentage', 'Manual error and rework rate'],
    useCases: ['Invoice/contract processing', 'Ticket triage and routing', 'Back-office workflow orchestration'],
    approach: ['Prioritize by effort vs impact', 'Pilot with measurable baseline', 'Add governance and fallback paths', 'Scale only proven automations'],
    timeline: '4-9 weeks',
  },
  {
    id: 'cloud-backend-engineering',
    title: 'Cloud & Backend Engineering',
    subtitle: 'Scalable backend systems and cloud reliability',
    summary:
      'We redesign backend and cloud foundations so your platform can handle growth spikes, release safely, and stay reliable under real-world load.',
    impactDescription:
      'Its direct business impact is risk reduction and growth readiness. Reliable infrastructure protects revenue during peak demand, shortens incident recovery, and gives leadership confidence to scale marketing, onboarding, and transaction volume without service instability.',
    outcomes: ['More stable platform uptime', 'Faster and safer deployments', 'Reduced incident severity and duration'],
    deliverables: ['Scalable service topology', 'Database and cache tuning', 'CI/CD reliability gates', 'Observability and incident runbooks'],
    businessValue: ['Reduce outage-related revenue loss', 'Lower incident response costs', 'Enable growth without replatform panic'],
    kpis: ['Uptime and SLO attainment', 'P95 latency', 'MTTR and change failure rate'],
    useCases: ['High-transaction SaaS', 'Real-time product backends', 'Enterprise integration platforms'],
    approach: ['Identify reliability bottlenecks', 'Harden critical service paths', 'Implement deployment safeguards', 'Validate with load and failover testing'],
    timeline: '5-12 weeks',
  },
  {
    id: 'ui-ux-design-systems',
    title: 'UI/UX Design Systems',
    subtitle: 'Consistent product experience at scale',
    summary:
      'We create UX and design systems that make products easier to use, faster to build, and more consistent across teams and customer touchpoints.',
    impactDescription:
      'The business outcome is speed plus quality. Product teams ship new features faster with reusable UI patterns, while users face fewer friction points. That translates into higher feature adoption, less design debt, and lower cost per release.',
    outcomes: ['Clearer customer journeys', 'Fewer UI inconsistencies', 'Faster product release throughput'],
    deliverables: ['Journey maps and interaction specs', 'Tokenized design system', 'Component usage standards', 'Accessibility and usability validation'],
    businessValue: ['Shorten time-to-market for new features', 'Lower UI maintenance overhead', 'Improve user adoption and satisfaction'],
    kpis: ['Feature adoption rate', 'UX task completion rate', 'Design-related bug volume'],
    useCases: ['Complex admin dashboards', 'Multi-role enterprise products', 'Products with multiple teams shipping UI'],
    approach: ['Map high-friction user tasks', 'Standardize reusable patterns', 'Align design and engineering workflows', 'Govern rollout through usage rules'],
    timeline: '3-8 weeks',
  },
  {
    id: 'data-security-foundations',
    title: 'Data & Security Foundations',
    subtitle: 'Secure data layers and compliant access models',
    summary:
      'We establish secure, governed data foundations so leadership can trust reporting, teams can control access, and the business can scale with compliance confidence.',
    impactDescription:
      'The business impact is trust and risk control. Strong governance and security controls protect sensitive information, reduce compliance exposure, and improve reporting integrity so strategic decisions are based on reliable data.',
    outcomes: ['Higher confidence in data outputs', 'Stronger protection of sensitive assets', 'Clear permission and audit visibility'],
    deliverables: ['Governed data model blueprint', 'Role/permission matrix', 'Security control baseline', 'Audit evidence and policy docs'],
    businessValue: ['Reduce regulatory and breach exposure', 'Improve decision quality from trusted data', 'Protect brand reputation and customer trust'],
    kpis: ['Security incident frequency', 'Audit findings count', 'Data quality and completeness score'],
    useCases: ['Finance or health compliance environments', 'Enterprise role-based platforms', 'Executive reporting systems'],
    approach: ['Assess risk and compliance gaps', 'Design access and governance model', 'Implement controls and monitoring', 'Run audit-readiness validation'],
    timeline: '4-9 weeks',
  },
];

export default function ServiceExplorePage() {
  const navigate = useNavigate();
  const { serviceId } = useParams();
  const detail = serviceDetails.find((item) => item.id === serviceId);

  if (!detail) {
    return (
      <div style={{ minHeight: '100vh', padding: '130px 24px 40px', background: '#f8fafc' }}>
        <div className="container" style={{ maxWidth: '980px' }}>
          <div style={{ borderRadius: '18px', border: '1px solid #e2e8f0', background: '#fff', padding: '24px' }}>
            <h1 style={{ margin: 0, fontSize: '1.8rem', color: '#0f172a' }}>Service not found</h1>
            <p style={{ margin: '10px 0 0 0', color: '#64748b' }}>The requested service page does not exist.</p>
            <button
              type="button"
              onClick={() => navigate('/services')}
              style={{ marginTop: '16px', border: '1px solid #cbd5e1', background: '#fff', borderRadius: '10px', padding: '10px 14px', fontWeight: 700, cursor: 'pointer' }}
            >
              Back to Services
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', padding: '118px 0 70px' }}>
      <div className="container" style={{ maxWidth: '1100px' }}>
        <motion.div initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
          <button
            type="button"
            onClick={() => navigate('/services')}
            style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', border: '1px solid #cbd5e1', background: '#fff', color: '#0f172a', borderRadius: '10px', padding: '8px 12px', fontWeight: 700, cursor: 'pointer' }}
          >
            <ArrowLeft size={16} />
            Back to Services
          </button>
        </motion.div>

        <motion.section
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.08 }}
          style={{ marginTop: '14px', borderRadius: '24px', border: '1px solid #dbeafe', background: 'linear-gradient(145deg, #ffffff 0%, #f8fbff 100%)', padding: '26px', boxShadow: '0 18px 38px rgba(15,23,42,0.07)' }}
        >
          <p style={{ margin: 0, fontSize: '0.78rem', color: '#2563eb', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase' }}>Service deep dive</p>
          <h1 style={{ margin: '8px 0 0 0', fontSize: 'clamp(2rem, 4vw, 3rem)', color: '#020617', letterSpacing: '-0.03em' }}>{detail.title}</h1>
          <p style={{ margin: '10px 0 0 0', color: '#1e3a8a', fontWeight: 700 }}>{detail.subtitle}</p>
          <p style={{ margin: '14px 0 0 0', color: '#475569', lineHeight: 1.75, maxWidth: '860px' }}>{detail.summary}</p>
          <div style={{ marginTop: '14px', borderRadius: '14px', border: '1px solid #bfdbfe', background: '#eff6ff', padding: '12px 14px' }}>
            <p style={{ margin: 0, fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#1d4ed8' }}>
              Business impact
            </p>
            <p style={{ margin: '7px 0 0 0', color: '#1e3a8a', lineHeight: 1.7 }}>{detail.impactDescription}</p>
          </div>

          <div style={{ marginTop: '20px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Expected outcomes</h3>
              <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                {detail.outcomes.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#2563eb" style={{ marginTop: '1px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Core deliverables</h3>
              <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                {detail.deliverables.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#2563eb', marginTop: '7px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Business value</h3>
              <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                {detail.businessValue.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155' }}>
                    <CheckCircle2 size={16} color="#f5602a" style={{ marginTop: '1px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>KPIs to track</h3>
              <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                {detail.kpis.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#f5602a', marginTop: '7px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '14px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
            <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Common use cases</h3>
              <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                {detail.useCases.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155' }}>
                    <span style={{ width: '7px', height: '7px', borderRadius: '999px', background: '#2563eb', marginTop: '7px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#ffffff', padding: '16px' }}>
              <h3 style={{ margin: 0, fontSize: '1rem', color: '#0f172a' }}>Execution approach</h3>
              <div style={{ marginTop: '10px', display: 'grid', gap: '8px' }}>
                {detail.approach.map((item) => (
                  <div key={item} style={{ display: 'flex', alignItems: 'flex-start', gap: '8px', color: '#334155' }}>
                    <span style={{ width: '20px', height: '20px', borderRadius: '6px', background: '#eff6ff', border: '1px solid #bfdbfe', color: '#1d4ed8', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', fontSize: '0.72rem', fontWeight: 800, lineHeight: 1, flexShrink: 0 }}>
                      {detail.approach.indexOf(item) + 1}
                    </span>
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div style={{ marginTop: '14px', borderRadius: '14px', border: '1px solid #bfdbfe', background: '#eff6ff', padding: '12px 14px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '10px' }}>
            <span style={{ color: '#1d4ed8', fontWeight: 700 }}>Typical timeline: {detail.timeline}</span>
            <button type="button" style={{ border: 'none', background: '#0f172a', color: '#fff', borderRadius: '10px', padding: '10px 14px', fontWeight: 700, display: 'inline-flex', alignItems: 'center', gap: '8px', cursor: 'pointer' }}>
              Request Proposal <ArrowUpRight size={16} />
            </button>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
