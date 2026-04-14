import { motion } from 'framer-motion';

const sections = [
  {
    title: '1. Acceptance of Terms',
    points: [
      'These Terms of Service govern access to and use of NexTech websites, digital platforms, products, and related professional services.',
      'By using this website or engaging with our services, you agree to these terms and any related policies referenced within them.',
      'If you do not agree, you must discontinue use of the website and related services.',
    ],
  },
  {
    title: '2. Service Eligibility and Accountability',
    points: [
      'Services are intended for individuals and organizations with legal capacity to enter contracts.',
      'You agree to provide accurate information during inquiries, onboarding, and contractual activities.',
      'You are responsible for the lawful use of any service deliverables and for permissions related to your provided content and data.',
    ],
  },
  {
    title: '3. Commercial Terms and Billing',
    points: [
      'Project scope, pricing, milestones, payment schedules, acceptance criteria, and support terms are defined in project proposals, SOWs, and contracts.',
      'Invoices are payable based on agreed terms. Delayed payments may result in service suspension where permitted by contract.',
      'Unless otherwise stated, fees are exclusive of taxes, duties, or regulatory charges applicable in your jurisdiction.',
    ],
  },
  {
    title: '4. Delivery and Change Management',
    points: [
      'NexTech delivers services according to agreed scope and timeline assumptions documented in project artifacts.',
      'Requested changes outside baseline scope may require timeline updates, revised pricing, or change orders before implementation.',
      'Client-side delays, approval delays, unavailable dependencies, or external vendor constraints may impact delivery timelines.',
    ],
  },
  {
    title: '5. Intellectual Property',
    points: [
      'Each party retains ownership of its pre-existing intellectual property, tools, methods, and proprietary materials.',
      'Ownership and licensing of project deliverables are defined in the governing contract and transfer conditions, typically tied to completed payment obligations.',
      'NexTech may retain generalized know-how, reusable patterns, and non-client-specific frameworks developed during service delivery.',
    ],
  },
  {
    title: '6. Confidentiality',
    points: [
      'Both parties must protect confidential information disclosed during proposals, implementation, and support activities.',
      'Confidential information may only be used for service delivery and operational obligations unless disclosure is legally required.',
      'Reasonable safeguards, access restrictions, and handling controls must be applied to confidential business and technical data.',
    ],
  },
  {
    title: '7. Security and Responsible Use',
    points: [
      'Users may not attempt unauthorized access, service disruption, reverse engineering, malware delivery, data scraping abuse, or abusive automation.',
      'NexTech may restrict or terminate access for activities that threaten platform security, legal compliance, or operational integrity.',
      'Security controls and incident procedures are further described in the Security Structure documentation.',
    ],
  },
  {
    title: '8. Warranties and Disclaimers',
    points: [
      'Unless explicitly stated in contract terms, website content and informational materials are provided on an "as is" and "as available" basis.',
      'NexTech does not guarantee uninterrupted availability, error-free operation, or compatibility with every third-party system unless contractually specified.',
      'Any performance commitments or service levels are enforceable only when documented in signed service agreements or SLAs.',
    ],
  },
  {
    title: '9. Limitation of Liability',
    points: [
      'To the maximum extent permitted by law, NexTech is not liable for indirect, incidental, special, punitive, or consequential damages.',
      'Aggregate liability is limited as specified in applicable contracts and may be capped by fees paid for the relevant service period.',
      'No limitation applies where liability cannot be excluded under governing law (for example, fraud or willful misconduct where legally applicable).',
    ],
  },
  {
    title: '10. Indemnification',
    points: [
      'You agree to defend and indemnify NexTech against claims resulting from unlawful use of services, breach of these terms, or infringement caused by client-provided materials.',
      'NexTech will provide reasonable notice and cooperation in claim handling where indemnification obligations are triggered.',
    ],
  },
  {
    title: '11. Suspension and Termination',
    points: [
      'NexTech may suspend access for legal, security, operational, or payment-risk reasons when necessary to protect services and stakeholders.',
      'Either party may terminate based on contractual termination rights, cure periods, and notice requirements.',
      'Upon termination, outstanding obligations including fees, confidentiality, and IP clauses continue as defined by contract.',
    ],
  },
  {
    title: '12. Governing Law and Dispute Resolution',
    points: [
      'These terms are governed by applicable laws specified in the relevant contract or, absent a contract, by the jurisdiction of NexTech operations.',
      'Parties agree to attempt good-faith resolution before formal legal action.',
      'Venue and dispute process details are governed by executed agreements where available.',
    ],
  },
];

export default function TermsOfServicePage() {
  return (
    <div style={{ minHeight: '100vh', background: '#f8fafc', color: '#0f172a', paddingBottom: '90px' }}>
      <section style={{ background: '#ffffff', borderBottom: '1px solid #e2e8f0', padding: '112px 0 56px' }}>
        <div className="container" style={{ maxWidth: '1080px' }}>
          <motion.span initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} style={{ display: 'inline-block', border: '1px solid #fde68a', background: '#fffbeb', color: '#b45309', borderRadius: '999px', padding: '6px 14px', fontSize: '0.76rem', fontWeight: 800, letterSpacing: '0.06em', textTransform: 'uppercase' }}>
            Legal
          </motion.span>
          <motion.h1 initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.05 }} style={{ margin: '14px 0 0 0', fontSize: 'clamp(2rem, 4.2vw, 3.4rem)', lineHeight: 1.1, letterSpacing: '-0.03em', fontWeight: 900 }}>
            Terms of Service
          </motion.h1>
          <motion.p initial={{ opacity: 0, y: 18 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }} style={{ margin: '14px 0 0 0', color: '#64748b', lineHeight: 1.75, maxWidth: '860px' }}>
            Effective date: {new Date().toLocaleDateString()}. These terms define responsibilities, commercial expectations, and legal conditions for using NexTech website and services.
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
