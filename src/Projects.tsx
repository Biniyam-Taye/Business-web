export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Fintech Dashboard Pro",
      client: "Global Finance Corp",
      category: "SaaS Platform",
      description: "A comprehensive financial command center offering real-time transaction tracking, predictive analytics, and enterprise-grade security protocols designed exclusively to outpace legacy bank systems.",
      problem: "Legacy banking systems provided a fragmented view of financial operations, resulting in slow decision-making and delayed reconciliation processes across multiple outdated platforms.",
      solution: "Engineered a unified real-time tracking interface combined with predictive analytics, consolidating complex data pipelines into a single high-performance dashboard.",
      useCase: "Enterprise financial teams, CFOs, and risk analysts requiring state-of-the-art insights.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      roles: ["Frontend UI", "Backend Architecture", "Data Vis"]
    },
    {
      id: "02",
      title: "HealthCore AI",
      client: "MediTech Health",
      category: "Healthcare Informatics",
      description: "AI-driven diagnostic support system integrating seamlessly with existing hospital infrastructure for faster, more accurate patient care, significantly reducing operational friction in critical environments.",
      problem: "Hospitals struggled with fragmented patient records and delayed diagnostic processing, creating high-friction environments for medical professionals on night shifts.",
      solution: "Deployed a neural-network driven diagnostic assistant that analyzes scans and vitals in real-time, syncing instantly with centralized electronic health records.",
      useCase: "Surgeons, frontline nurses, and hospital administrators prioritizing rapid patient care.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80",
      roles: ["Machine Learning", "System Integration", "UX Strategy"]
    },
    {
      id: "03",
      title: "Nexus Supply Chain",
      client: "Logistics International",
      category: "Enterprise Software",
      description: "Global logistics tracking platform combining IoT sensors with continuous machine learning to optimize complex delivery routes, guaranteeing unparalleled visibility from port to final destination.",
      problem: "Global supply chains faced massive blind spots during oceanic transit, leading to unpredictable delivery windows and significant financial losses from spoilage.",
      solution: "Integrated hundreds of thousands of low-energy IoT sensors into shipping containers, paired with cloud-native predictive routing algorithms to guarantee precision.",
      useCase: "Global shipping conglomerates and large-scale manufacturing distributors.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=800&q=80",
      roles: ["Cloud Computing", "IoT Integrations", "Security"]
    },
    {
      id: "04",
      title: "Aura E-Commerce",
      client: "Aura Retail",
      category: "Retail Experience",
      description: "High-conversion headless commerce frontend focused on sub-second load times and immersive 3D product visualizations, driving dramatic increases in engagement and recurring brand loyalty.",
      problem: "Traditional monolithic platforms caused severe cart abandonment due to sluggish load times and a generic, uninspiring product browsing experience.",
      solution: "Rebuilt the entire consumer journey using a headless architecture, featuring lightning-fast Next.js rendering and WebGL for interactive 3D product displays.",
      useCase: "Direct-to-consumer premium brands looking for elite digital storefronts.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      roles: ["E-commerce", "3D Rendering", "Payment Gateways"]
    }
  ];

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '160px', color: '#0f172a' }}>

      {/* ── HERO SECTION (Light Mode) ── */}
      <div style={{
        background: 'linear-gradient(160deg, #ffffff 0%, #f0f4ff 60%, #fff7f0 100%)',
        position: 'relative',
        overflow: 'hidden',
        paddingTop: '140px',
        paddingBottom: '0',
        borderBottom: '1px solid #e2e8f0',
      }}>
        {/* Ambient soft glows */}
        <div style={{ position: 'absolute', top: '-15%', left: '-8%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '600px', height: '600px', background: 'radial-gradient(circle, rgba(249,115,22,0.06) 0%, transparent 65%)', pointerEvents: 'none' }} />
        <div style={{ position: 'absolute', top: '30%', right: '15%', width: '400px', height: '400px', background: 'radial-gradient(circle, rgba(168,85,247,0.05) 0%, transparent 65%)', pointerEvents: 'none' }} />

        <div style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px', position: 'relative', zIndex: 1 }}>

          {/* Top label */}
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '48px' }}>
            <div style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '9999px', padding: '8px 22px' }}>
              <div style={{ width: '7px', height: '7px', borderRadius: '50%', background: '#F97316', boxShadow: '0 0 6px rgba(249,115,22,0.5)' }} />
              <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#2563eb', letterSpacing: '0.12em', textTransform: 'uppercase' }}>Case Studies & Projects</span>
            </div>
          </div>

          {/* Big headline */}
          <h1 style={{
            fontSize: 'clamp(3.5rem, 8vw, 6.5rem)',
            fontWeight: 800,
            letterSpacing: '-0.04em',
            lineHeight: 1.0,
            textAlign: 'center',
            margin: '0 0 32px 0',
            color: '#0f172a',
          }}>
            Work That <br />
            <span style={{
              background: 'linear-gradient(135deg, #2563eb 0%, #7c3aed 50%, #F97316 100%)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>Speaks Louder.</span>
          </h1>

          <p style={{
            textAlign: 'center',
            fontSize: 'clamp(1rem, 2vw, 1.2rem)',
            color: '#64748b',
            maxWidth: '600px',
            margin: '0 auto 64px auto',
            lineHeight: 1.7,
            fontWeight: 400,
          }}>
            Explore digital platforms, enterprise software, and high-performance systems engineered to give brands an unfair market advantage.
          </p>

          {/* Stat strip */}
          <div style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '0',
            borderTop: '1px solid #e2e8f0',
            marginBottom: '0',
            flexWrap: 'wrap',
            background: 'rgba(255,255,255,0.7)',
            backdropFilter: 'blur(8px)',
            borderRadius: '24px 24px 0 0',
          }}>
            {[
              { value: '50+', label: 'Projects Shipped', color: '#2563eb' },
              { value: '98%', label: 'Client Satisfaction', color: '#7c3aed' },
              { value: '4',   label: 'Industries Served', color: '#F97316' },
              { value: '3x',  label: 'Avg. Speed Gain',   color: '#059669' },
            ].map((stat, i) => (
              <div key={i} style={{
                flex: '1 1 180px',
                padding: '32px 24px',
                textAlign: 'center',
                borderRight: i < 3 ? '1px solid #f1f5f9' : 'none',
              }}>
                <div style={{ fontSize: 'clamp(2rem, 4vw, 2.8rem)', fontWeight: 800, letterSpacing: '-0.04em', color: stat.color, lineHeight: 1 }}>{stat.value}</div>
                <div style={{ fontSize: '0.82rem', color: '#94a3b8', marginTop: '8px', fontWeight: 600, letterSpacing: '0.04em', textTransform: 'uppercase' }}>{stat.label}</div>
              </div>
            ))}
          </div>

        </div>
      </div>

      {/* Projects List - New Side-by-Side Card Layout */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          {projects.map((project, idx) => (
            <div key={idx} style={{ 
              display: 'flex', 
              flexDirection: idx % 2 !== 0 ? 'row-reverse' : 'row',
              flexWrap: 'wrap',
              gap: '48px',
              background: '#ffffff',
              borderRadius: '24px',
              padding: '40px',
              border: '1px solid #f1f5f9',
              boxShadow: '0 20px 40px rgba(0,0,0,0.04)',
              alignItems: 'center'
            }}>
              
              {/* Image Side */}
              <div style={{ 
                flex: '1 1 400px',
                minWidth: '300px',
                height: '450px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.08)',
                border: '8px solid #f8fafc'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '16px',
                  right: '16px',
                  background: 'rgba(255,255,255,0.95)',
                  backdropFilter: 'blur(4px)',
                  padding: '6px 12px',
                  borderRadius: '999px',
                  fontSize: '0.75rem',
                  fontWeight: 800,
                  color: '#0f172a',
                  letterSpacing: '0.05em',
                  textTransform: 'uppercase',
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)'
                }}>
                  {project.id}
                </div>
              </div>

              {/* Text Side */}
              <div style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column' }}>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.roles.map(role => (
                    <span key={role} style={{ 
                      padding: '6px 14px', 
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '999px',
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: '#475569',
                      letterSpacing: '0.02em',
                    }}>
                      {role}
                    </span>
                  ))}
                </div>

                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px 0', color: '#0f172a', lineHeight: 1.1 }}>
                  {project.title}
                </h2>
                
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, margin: '0 0 32px 0' }}>
                  {project.description}
                </p>

                {/* Problem, Solution, Use Case */}
                <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px', background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}>
                  
                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flexShrink: 0, width: '32px', height: '32px', background: '#fee2e2', color: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>The Challenge</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{project.problem}</p>
                    </div>
                  </div>

                  <div style={{ width: '100%', height: '1px', background: '#e2e8f0' }} />

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flexShrink: 0, width: '32px', height: '32px', background: '#dcfce7', color: '#22c55e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Our Solution</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{project.solution}</p>
                    </div>
                  </div>

                  <div style={{ width: '100%', height: '1px', background: '#e2e8f0' }} />

                  <div style={{ display: 'flex', gap: '16px' }}>
                    <div style={{ flexShrink: 0, width: '32px', height: '32px', background: '#dbeafe', color: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Target Use Case</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{project.useCase}</p>
                    </div>
                  </div>

                </div>

                {/* Buttons Component */}
                <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', flexWrap: 'wrap' }}>
                  <button style={{ 
                    padding: '14px 28px', 
                    background: '#0f172a', 
                    color: '#ffffff', 
                    border: 'none', 
                    borderRadius: '12px', 
                    fontWeight: 700, 
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    boxShadow: '0 4px 14px rgba(15,23,42,0.2)',
                    transition: 'all 0.2s ease',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                  }}>
                    View Live Space
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                  </button>
                  <button style={{ 
                    padding: '14px 28px', 
                    background: '#ffffff', 
                    color: '#0f172a', 
                    border: '1px solid #cbd5e1', 
                    borderRadius: '12px', 
                    fontWeight: 700, 
                    fontSize: '0.95rem',
                    cursor: 'pointer',
                    transition: 'all 0.2s ease'
                  }}>
                    Read Case Study
                  </button>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
