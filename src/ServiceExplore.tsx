import { motion } from 'framer-motion';
import { ArrowLeft, ArrowUpRight, CheckCircle2 } from 'lucide-react';
import { useNavigate, useParams } from 'react-router-dom';

type ServiceDetail = {
  id: string;
  title: string;
  subtitle: string;
  summary: string;
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
      'We design and build robust web platforms with clean architecture, fast UX, and analytics-ready foundations so your team can scale confidently.',
    outcomes: ['Higher conversion rates', 'Faster page performance', 'Reliable maintainable codebase'],
    deliverables: ['Frontend architecture', 'API integration layer', 'Performance and SEO optimization', 'Launch and monitoring setup'],
    businessValue: ['Increase lead-to-customer conversion', 'Reduce bounce and checkout drop-off', 'Lower long-term maintenance costs'],
    kpis: ['Conversion rate uplift', 'Core Web Vitals improvement', 'Revenue per visitor growth'],
    useCases: ['Marketing websites', 'Customer portals', 'Internal operation platforms'],
    approach: ['Business goal and funnel mapping', 'UX and architecture blueprint', 'Sprint delivery with measurable milestones', 'Post-launch optimization loop'],
    timeline: '4-10 weeks',
  },
  {
    id: 'mobile-app-development',
    title: 'Mobile App Development',
    subtitle: 'Cross-platform apps with native-level experience',
    summary:
      'We deliver mobile applications focused on usability, stability, and long-term maintainability with a release plan for both stores.',
    outcomes: ['Improved retention', 'Stable app performance', 'Faster release cycles'],
    deliverables: ['App architecture setup', 'Offline-first key flows', 'Push notifications', 'Store deployment package'],
    businessValue: ['Improve customer engagement frequency', 'Create direct retention channel', 'Enable new mobile-first revenue paths'],
    kpis: ['30-day retention', 'Crash-free sessions', 'Feature adoption rate'],
    useCases: ['Customer loyalty apps', 'Field workforce apps', 'Subscription and booking apps'],
    approach: ['Use-case prioritization by business impact', 'Cross-platform architecture setup', 'QA and store readiness pipeline', 'Release analytics and iteration'],
    timeline: '6-12 weeks',
  },
  {
    id: 'ai-automation-systems',
    title: 'AI & Automation Systems',
    subtitle: 'Practical AI automation for real operations',
    summary:
      'From workflow automation to document intelligence, we build systems that reduce repetitive work and increase team output.',
    outcomes: ['Lower manual workload', 'Faster process throughput', 'Better operational accuracy'],
    deliverables: ['Automation workflow map', 'AI-assisted processing module', 'Integration with existing tools', 'Reporting dashboards'],
    businessValue: ['Reduce operational overhead', 'Shorten processing turnaround time', 'Improve output consistency at scale'],
    kpis: ['Hours saved per week', 'Task automation coverage', 'Error-rate reduction'],
    useCases: ['Document processing', 'Internal assistant bots', 'Approval and workflow automation'],
    approach: ['Process audit and bottleneck mapping', 'Automation priority matrix', 'Pilot rollout with guardrails', 'Scale successful automations'],
    timeline: '4-9 weeks',
  },
  {
    id: 'cloud-backend-engineering',
    title: 'Cloud & Backend Engineering',
    subtitle: 'Scalable backend systems and cloud reliability',
    summary:
      'We architect backend services and cloud infrastructure for performance, observability, and secure scaling as usage grows.',
    outcomes: ['Better uptime', 'Lower latency', 'Clear system observability'],
    deliverables: ['Service architecture', 'Database optimization', 'Cloud deployment pipeline', 'Monitoring and alerts'],
    businessValue: ['Prevent downtime revenue loss', 'Support growth without system rework', 'Increase engineering delivery confidence'],
    kpis: ['Service uptime SLA', 'API latency percentiles', 'Deployment success rate'],
    useCases: ['High-traffic APIs', 'Multi-tenant platforms', 'Mission-critical internal systems'],
    approach: ['Current-state reliability assessment', 'Architecture modernization roadmap', 'CI/CD and observability setup', 'Resilience testing and hardening'],
    timeline: '5-12 weeks',
  },
  {
    id: 'ui-ux-design-systems',
    title: 'UI/UX Design Systems',
    subtitle: 'Consistent product experience at scale',
    summary:
      'We build design systems and product UX frameworks that align business goals, accessibility, and design consistency.',
    outcomes: ['Higher design consistency', 'Faster UI iteration', 'Better usability'],
    deliverables: ['UX flows and wireframes', 'Design tokens and components', 'Accessibility review', 'Handoff documentation'],
    businessValue: ['Faster product iteration velocity', 'Lower UI inconsistency debt', 'Better customer task completion'],
    kpis: ['Design-to-dev handoff time', 'UI defect reduction', 'Task success rate'],
    useCases: ['SaaS dashboards', 'Customer self-service journeys', 'Multi-product UI consistency'],
    approach: ['User journey analysis', 'Reusable system definition', 'Component library rollout', 'Governance and adoption playbook'],
    timeline: '3-8 weeks',
  },
  {
    id: 'data-security-foundations',
    title: 'Data & Security Foundations',
    subtitle: 'Secure data layers and compliant access models',
    summary:
      'We establish strong data models, security baselines, and governance patterns to keep systems compliant and decision-ready.',
    outcomes: ['Improved data quality', 'Reduced security risk', 'Better access control'],
    deliverables: ['Data model architecture', 'Role-based access policies', 'Security baseline setup', 'Audit-ready documentation'],
    businessValue: ['Reduce compliance and breach risk', 'Improve trust in reporting and decisions', 'Protect critical business workflows'],
    kpis: ['Security incident reduction', 'Audit readiness score', 'Data quality index'],
    useCases: ['Compliance-sensitive products', 'Role-based enterprise platforms', 'Data-heavy decision systems'],
    approach: ['Risk and data governance assessment', 'Policy and access design', 'Security controls implementation', 'Monitoring and audit preparation'],
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
