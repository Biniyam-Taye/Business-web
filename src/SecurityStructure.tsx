import { motion } from 'framer-motion';

const pillars = [
  {
    title: '1. Governance and Accountability',
    items: [
      'Security roles and responsibilities are formally assigned across engineering, delivery, and operations.',
      'Security requirements are integrated into planning, architecture decisions, and release approvals.',
      'Periodic management reviews evaluate risk posture, control performance, and remediation progress.',
    ],
  },
  {
    title: '2. Access Control and Identity Security',
    items: [
      'Access is granted based on least privilege and role-based access principles.',
      'Production access follows approval workflows with access logging and periodic recertification.',
      'MFA, credential hygiene standards, and secure secret management are required across internal systems.',
    ],
  },
  {
    title: '3. Secure Engineering Lifecycle',
    items: [
      'Security-by-design principles are embedded in requirements, architecture reviews, coding, and testing.',
      'Code quality and vulnerability checks are part of delivery workflows before release approval.',
      'Dependencies, build artifacts, and deployment pipelines are monitored for integrity and risk indicators.',
    ],
  },
  {
    title: '4. Data Protection Controls',
    items: [
      'Sensitive data classification guides handling controls, storage boundaries, and retention requirements.',
      'Encryption is applied in transit and, where applicable, at rest according to operational risk and compliance needs.',
      'Data minimization is applied to reduce unnecessary collection and reduce potential exposure surface.',
    ],
  },
  {
    title: '5. Infrastructure and Platform Security',
    items: [
      'Cloud and environment hardening baselines are applied with configuration management and drift checks.',
      'Network segmentation, protected endpoints, and secure ingress patterns are used for critical components.',
      'Continuous monitoring and alerting support early detection of suspicious activity and service anomalies.',
    ],
  },
  {
    title: '6. Logging, Monitoring, and Detection',
    items: [
      'Security-relevant events are logged for auditability, incident analysis, and operational forensics.',
      'Alert triage procedures define escalation paths, response ownership, and communication expectations.',
      'Monitoring coverage is reviewed to improve visibility for high-risk services and privileged workflows.',
    ],
  },
  {
    title: '7. Incident Response and Recovery',
    items: [
      'Incident response playbooks define identification, containment, eradication, recovery, and post-incident review stages.',
      'Severity-based communication procedures include internal leadership, affected clients, and required legal notifications.',
      'Business continuity and backup recovery strategies are tested to support service resilience objectives.',
    ],
  },
  {
    title: '8. Vendor and Third-Party Risk',
    items: [
      'Third-party providers are assessed for security maturity, contractual controls, and operational reliability.',
      'High-impact vendors are reviewed periodically for changes in risk profile, incidents, and compliance status.',
      'Data-sharing scope with vendors is limited to minimum operational necessity.',
    ],
  },
  {
    title: '9. Compliance and Audit Readiness',
    items: [
      'Controls are documented to support contractual commitments, due diligence requests, and audit activities.',
      'Evidence management practices support traceability of policy, process, and technical control execution.',
      'Control gaps are tracked with owners, deadlines, and verification criteria until closure.',
    ],
  },
  {
    title: '10. Training and Security Culture',
    items: [
      'Teams receive continuous security awareness and secure development guidance relevant to their roles.',
      'Operational staff are trained on incident escalation, data handling, and secure communication practices.',
      'Security lessons learned are integrated into standards, runbooks, and future planning cycles.',
    ],
  },
];

const commitments = [
  ['Continuous Improvement', 'Security posture is reviewed and improved as threat landscapes, architecture, and client needs evolve.'],
  ['Client Collaboration', 'Security expectations are aligned early through requirements workshops, architecture reviews, and onboarding controls.'],
  ['Transparency', 'We communicate meaningful security updates, incidents, and remediation actions through structured channels.'],
];

export default function SecurityStructurePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '90px' }}>
      <section style={{ background: 'linear-gradient(180deg, #eff6ff 0%, #f8fafc 100%)', borderBottom: '1px solid #dbeafe', padding: '112px 0 56px' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', border: '1px solid #bfdbfe', background: '#dbeafe', color: '#1d4ed8', borderRadius: '999px', padding: '6px 14px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Security
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4.2vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 900, color: '#0f172a' }}>
            Security Structure
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ margin: '14px 0 0 0', color: '#475569', lineHeight: 1.75, maxWidth: '900px' }}>
            This page outlines the security model NexTech applies across engineering, operations, and delivery. The controls below represent practical safeguards designed for modern production systems and enterprise collaboration.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '40px 0 0' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ display: 'grid', gap: '14px' }}>
            {pillars.map((pillar, idx) => (
              <motion.article
                key={pillar.title}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.45, delay: idx * 0.03 }}
                style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '22px 22px 20px', boxShadow: '0 10px 24px rgba(15,23,42,0.04)' }}
              >
                <h2 style={{ margin: 0, fontSize: '1.16rem', letterSpacing: '-0.02em' }}>{pillar.title}</h2>
                <ul style={{ margin: '12px 0 0 0', paddingLeft: '20px', color: '#334155', lineHeight: 1.72 }}>
                  {pillar.items.map((item) => (
                    <li key={item} style={{ marginBottom: '8px' }}>{item}</li>
                  ))}
                </ul>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <section style={{ padding: '24px 0 0' }}>
        <div className="container" style={{ maxWidth: '1120px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '12px' }}>
            {commitments.map((commitment) => (
              <motion.div
                key={commitment[0]}
                initial={{ opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                style={{ borderRadius: '16px', border: '1px solid #dbeafe', background: '#eff6ff', padding: '16px 16px 14px' }}
              >
                <h3 style={{ margin: 0, color: '#1d4ed8', fontSize: '1rem', letterSpacing: '-0.01em' }}>{commitment[0]}</h3>
                <p style={{ margin: '8px 0 0 0', color: '#334155', lineHeight: 1.62 }}>{commitment[1]}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
