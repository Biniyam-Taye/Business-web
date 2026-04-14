import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Scope and Commitment',
    points: [
      'This Privacy Policy explains how NexTech collects, uses, stores, and protects personal data when you use our website, submit forms, or engage with our services.',
      'We process personal data with transparency, proportionality, and purpose limitation. We only collect data needed for legitimate business and service operations.',
      'This policy applies to website visitors, prospects, clients, and authorized representatives who interact with NexTech through digital channels.',
    ],
  },
  {
    title: '2. Data We Collect',
    points: [
      'Contact and identity information, such as full name, business email, phone number, company name, and role.',
      'Project and communication details submitted through forms, consultation requests, support requests, RFP documents, and email correspondence.',
      'Technical and usage data such as browser type, device metadata, visit timestamps, pages viewed, approximate geolocation, referral source, and interaction events.',
      'Operational records needed to deliver contracted work, including meeting notes, approved requirements, and project communication history.',
    ],
  },
  {
    title: '3. How We Use Personal Data',
    points: [
      'To respond to inquiries, schedule consultations, and provide proposals or service-related communication.',
      'To deliver contracted services, manage timelines, provide support, maintain platform reliability, and monitor service quality.',
      'To improve user experience, security posture, website performance, and business operations through analytics and service monitoring.',
      'To meet legal, contractual, tax, and compliance obligations.',
    ],
  },
  {
    title: '4. Legal Basis for Processing',
    points: [
      'Contract performance: when processing is required to provide services requested by the client.',
      'Legitimate interests: where processing supports business operations, service quality, or security and does not override individual rights.',
      'Consent: where consent is required for optional communications or specific processing activities.',
      'Legal obligation: where processing is required by applicable law or legal process.',
    ],
  },
  {
    title: '5. Data Sharing and Third Parties',
    points: [
      'We do not sell personal data. We share data only with trusted service providers that support hosting, analytics, communication, operations, and security monitoring.',
      'Third-party providers are subject to confidentiality obligations and data processing terms appropriate to their role.',
      'We may disclose data when required by law, court order, lawful request by public authorities, or to protect rights, safety, and legal claims.',
    ],
  },
  {
    title: '6. Data Retention',
    points: [
      'We retain personal data only for as long as necessary to fulfill business purposes, contractual obligations, and legal requirements.',
      'Retention periods are based on service lifecycle, legal obligations, dispute handling windows, and security audit requirements.',
      'When retention is no longer necessary, data is securely deleted or irreversibly anonymized.',
    ],
  },
  {
    title: '7. Security Controls',
    points: [
      'NexTech applies layered administrative, technical, and organizational safeguards to reduce unauthorized access, alteration, loss, or disclosure.',
      'Safeguards include access control, encryption in transit, restricted environments, audit logging, change controls, and secure operational procedures.',
      'No system is absolutely risk-free; however, we continuously improve controls and incident readiness practices.',
    ],
  },
  {
    title: '8. International Data Handling',
    points: [
      'Where cross-border processing is required, we implement practical and contractual safeguards to maintain equivalent protection standards.',
      'We evaluate vendors and infrastructure providers for security and compliance suitability before processing activities are approved.',
    ],
  },
  {
    title: '9. Your Rights',
    points: [
      'Subject to applicable law, you may request access, correction, deletion, restriction, portability, or objection regarding your personal data.',
      'You may also withdraw previously given consent where processing relies on consent.',
      'To submit a request, contact us at hello@nextech.com. We may verify identity before actioning rights requests.',
    ],
  },
  {
    title: '10. Cookies and Tracking',
    points: [
      'Our site may use essential cookies and analytics technologies to provide site functionality and improve user experience.',
      'Where required by law, non-essential tracking is managed through appropriate consent mechanisms.',
      'Users can adjust browser preferences or consent settings to manage cookie behavior.',
    ],
  },
  {
    title: '11. Children\'s Data',
    points: [
      'Our services are intended for businesses and professional users and are not directed to children under legal digital age thresholds.',
      'If we learn that child data was submitted unintentionally, we will take prompt steps to remove it where legally permitted.',
    ],
  },
  {
    title: '12. Policy Updates',
    points: [
      'We may update this Privacy Policy to reflect legal, operational, product, or security changes.',
      'Updated versions become effective when published on this page. Material changes will be highlighted where appropriate.',
    ],
  },
];

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '90px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '112px 0 56px' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', border: '1px solid #bfdbfe', background: '#eff6ff', color: '#1d4ed8', borderRadius: '999px', padding: '6px 14px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Legal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4.2vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 900 }}>
            Privacy Policy
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '840px' }}>
            Effective date: {new Date().toLocaleDateString()}. This policy explains how NexTech handles personal data with a security-first and transparency-focused approach.
          </motion.p>
        </div>
      </section>

      <section style={{ padding: '42px 0 0' }}>
        <div className="container" style={{ maxWidth: '1080px', display: 'grid', gap: '14px' }}>
          {sections.map((section, idx) => (
            <motion.article
              key={section.title}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.03 }}
              style={{ background: '#ffffff', border: '1px solid #e2e8f0', borderRadius: '18px', padding: '22px 22px 20px', boxShadow: '0 10px 24px rgba(15,23,42,0.04)' }}
            >
              <h2 style={{ margin: 0, fontSize: '1.16rem', letterSpacing: '-0.02em' }}>{section.title}</h2>
              <ul style={{ margin: '12px 0 0 0', paddingLeft: '20px', color: '#334155', lineHeight: 1.72 }}>
                {section.points.map((point) => (
                  <li key={point} style={{ marginBottom: '8px' }}>{point}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </section>
    </div>
  );
}
