export default function Projects() {
  const projects = [
    {
      id: "01",
      title: "Fintech Dashboard Pro",
      client: "Global Finance Corp",
      category: "SaaS Platform",
      description: "A comprehensive financial command center offering real-time transaction tracking, predictive analytics, and enterprise-grade security protocols designed exclusively to outpace legacy bank systems.",
      image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=1600&q=80",
      roles: ["Frontend UI", "Backend Architecture", "Data Vis"]
    },
    {
      id: "02",
      title: "HealthCore AI",
      client: "MediTech Health",
      category: "Healthcare Informatics",
      description: "AI-driven diagnostic support system integrating seamlessly with existing hospital infrastructure for faster, more accurate patient care, significantly reducing operational friction in critical environments.",
      image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=1600&q=80",
      roles: ["Machine Learning", "System Integration", "UX Strategy"]
    },
    {
      id: "03",
      title: "Nexus Supply Chain",
      client: "Logistics International",
      category: "Enterprise Software",
      description: "Global logistics tracking platform combining IoT sensors with continuous machine learning to optimize complex delivery routes, guaranteeing unparalleled visibility from port to final destination.",
      image: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&w=1600&q=80",
      roles: ["Cloud Computing", "IoT Integrations", "Security"]
    },
    {
      id: "04",
      title: "Aura E-Commerce",
      client: "Aura Retail",
      category: "Retail Experience",
      description: "High-conversion headless commerce frontend focused on sub-second load times and immersive 3D product visualizations, driving dramatic increases in engagement and recurring brand loyalty.",
      image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=1600&q=80",
      roles: ["E-commerce", "3D Rendering", "Payment Gateways"]
    }
  ];

  return (
    <div style={{ background: '#fafafa', minHeight: '100vh', paddingBottom: '160px', color: '#0f172a' }}>
      
      {/* Page Header (Matches Homepage Styling) */}
      <div className="container" style={{ maxWidth: '1200px', paddingTop: '160px', paddingBottom: '80px' }}>
        
        <div style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', background: 'rgba(37,99,235,0.06)', border: '1px solid rgba(37,99,235,0.15)', borderRadius: '9999px', padding: '6px 18px', marginBottom: '24px' }}>
          <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: '#2563eb' }} />
          <span style={{ fontSize: '0.78rem', fontWeight: 800, color: '#2563eb', letterSpacing: '0.08em', textTransform: 'uppercase' }}>Our Works</span>
        </div>
        
        <h1 style={{ fontSize: 'clamp(3rem, 6vw, 4.5rem)', fontWeight: 800, color: '#0f172a', letterSpacing: '-0.04em', lineHeight: 1.1, maxWidth: '800px', margin: 0 }}>
          Digital Infrastructure <span style={{ color: '#F97316' }}>Redefined.</span>
        </h1>
        
        <p style={{ fontSize: '1.25rem', color: '#64748b', maxWidth: '650px', marginTop: '24px', lineHeight: 1.6, fontWeight: 400 }}>
          Explore our showcase of digital platforms, enterprise software, and high-performance applications designed to give businesses an unfair market advantage.
        </p>

      </div>

      {/* Projects List - Huge Case Study Layout (Static) */}
      <div className="container" style={{ maxWidth: '1200px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '160px' }}>
          
          {projects.map((project, idx) => (
            <div key={idx} style={{ display: 'flex', flexDirection: 'column' }}>
              
              {/* Top Row: Title & Roles */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '24px', marginBottom: '32px' }}>
                <h2 style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: 0, color: '#0f172a', lineHeight: 1 }}>
                  {project.title}
                </h2>
                
                <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                  {project.roles.map(role => (
                    <span key={role} style={{ 
                      padding: '8px 16px', 
                      background: '#ffffff',
                      border: '1px solid #e2e8f0', 
                      borderRadius: '9999px',
                      fontSize: '0.85rem',
                      fontWeight: 700,
                      color: '#475569',
                      letterSpacing: '0.02em',
                      boxShadow: '0 2px 4px rgba(0,0,0,0.02)'
                    }}>
                      {role}
                    </span>
                  ))}
                </div>
              </div>

              {/* Massive Center Image */}
              <div style={{ 
                width: '100%', 
                height: 'clamp(300px, 65vh, 700px)', 
                borderRadius: '40px', 
                overflow: 'hidden', 
                background: '#f1f5f9', 
                border: '1px solid rgba(0,0,0,0.05)',
                boxShadow: '0 20px 60px rgba(0,0,0,0.04)'
              }}>
                <img 
                  src={project.image} 
                  alt={project.title} 
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
              </div>

              {/* Bottom Row: Details Grid */}
              <div style={{ marginTop: '40px', display: 'flex', flexWrap: 'wrap', gap: '40px' }}>
                
                <div style={{ flex: '1 1 400px' }}>
                  <p style={{ fontSize: '1.15rem', color: '#475569', lineHeight: 1.7, margin: 0, fontWeight: 400 }}>
                    {project.description}
                  </p>
                </div>
                
                <div style={{ display: 'flex', flex: '1 1 300px', gap: '40px' }}>
                  <div style={{ flex: 1, borderLeft: '2px solid #e2e8f0', paddingLeft: '24px' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Client
                    </p>
                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.01em' }}>
                      {project.client}
                    </p>
                  </div>
                  
                  <div style={{ flex: 1, borderLeft: '2px solid #e2e8f0', paddingLeft: '24px' }}>
                    <p style={{ margin: '0 0 8px 0', fontSize: '0.85rem', color: '#94a3b8', fontWeight: 800, textTransform: 'uppercase', letterSpacing: '0.05em' }}>
                      Category
                    </p>
                    <p style={{ margin: 0, fontSize: '1.1rem', color: '#0f172a', fontWeight: 800, letterSpacing: '-0.01em' }}>
                      {project.category}
                    </p>
                  </div>
                </div>

              </div>

            </div>
          ))}

        </div>
      </div>

    </div>
  );
}
