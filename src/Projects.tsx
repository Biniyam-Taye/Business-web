import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PROJECTS_PER_PAGE = 2;

export default function Projects() {
  const navigate = useNavigate();
  const springEase: [number, number, number, number] = [0.16, 1, 0.3, 1];
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

  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = Math.ceil(projects.length / PROJECTS_PER_PAGE);
  const paginatedProjects = projects.slice(
    (currentPage - 1) * PROJECTS_PER_PAGE,
    currentPage * PROJECTS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div style={{ background: '#f8fafc', minHeight: '100vh', paddingBottom: '160px', color: '#0f172a' }}>

      {/* ── PREMIUM PAGE HEADER ── */}
      <div style={{
        position: 'relative',
        background: '#ffffff',
        paddingTop: '90px',
        paddingBottom: '110px',
        overflow: 'hidden',
        borderBottom: '1px solid rgba(15, 23, 42, 0.05)',
      }}>
        {/* Background Decorative Blurs */}
        <div style={{ position: 'absolute', top: '-10%', left: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(37,99,235,0.06) 0%, rgba(255,255,255,0) 70%)', zIndex: 0, filter: 'blur(50px)' }} />
        <div style={{ position: 'absolute', bottom: '-10%', right: '-5%', width: '40%', height: '60%', background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, rgba(255,255,255,0) 70%)', zIndex: 0, filter: 'blur(50px)' }} />

        <div style={{ maxWidth: '1240px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px', position: 'relative', zIndex: 1 }}>
          <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '60px', flexWrap: 'wrap' }}>

            {/* LEFT: Label + Title + Description */}
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, ease: springEase }}
              style={{ flex: '1 1 600px', display: 'flex', flexDirection: 'column' }}
            >
              <div style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                background: 'rgba(255, 255, 255, 0.8)', 
                backdropFilter: 'blur(10px)',
                border: '1px solid rgba(37, 99, 235, 0.15)', 
                borderRadius: '9999px', 
                padding: '6px 20px', 
                marginBottom: '32px',
                width: 'fit-content',
                boxShadow: '0 4px 12px rgba(37, 99, 235, 0.05)'
              }}>
                <motion.div 
                  animate={{ scale: [1, 1.2, 1], opacity: [0.6, 1, 0.6] }}
                  transition={{ repeat: Infinity, duration: 2.5 }}
                  style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#2563eb', boxShadow: '0 0 12px rgba(37,99,235,0.8)' }} 
                />
                <span style={{ fontSize: '0.75rem', fontWeight: 800, color: '#2563eb', letterSpacing: '0.15em', textTransform: 'uppercase' }}>Our Works</span>
              </div>

              <h1 style={{
                fontSize: 'clamp(2.75rem, 5vw, 4.5rem)',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                lineHeight: 1.05,
                margin: '0 0 24px 0',
                color: '#0f172a',
              }}>
                Work That <br style={{ display: 'none' }} className="md-block" /> 
                <span style={{ 
                  background: 'linear-gradient(135deg, #F97316 0%, #ea580c 50%, #c2410c 100%)', 
                  WebkitBackgroundClip: 'text', 
                  WebkitTextFillColor: 'transparent',
                  paddingRight: '10px' 
                }}>Speaks.</span>
              </h1>

              <p style={{
                fontSize: '1.15rem',
                color: '#475569',
                maxWidth: '560px',
                margin: 0,
                lineHeight: 1.7,
                fontWeight: 400,
              }}>
                Digital platforms, enterprise software, and high-performance systems engineered to give businesses an <strong style={{ color: '#0f172a', fontWeight: 700 }}>unfair advantage</strong>.
              </p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2, ease: springEase }}
                style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginTop: '36px' }}
              >
                {['Enterprise-Grade Security', 'Scalable Cloud Architecture', 'Conversion-Focused UX'].map((item) => (
                  <span key={item} style={{ 
                    padding: '10px 20px', 
                    borderRadius: '9999px', 
                    border: '1px solid rgba(15, 23, 42, 0.06)', 
                    background: '#f8fafc', 
                    color: '#334155', 
                    fontSize: '0.85rem', 
                    fontWeight: 600, 
                    boxShadow: '0 2px 8px rgba(15, 23, 42, 0.02)',
                    transition: 'all 0.3s ease',
                    cursor: 'default'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(37, 99, 235, 0.3)';
                    e.currentTarget.style.boxShadow = '0 6px 16px rgba(37, 99, 235, 0.08)';
                    e.currentTarget.style.transform = 'translateY(-2px)';
                    e.currentTarget.style.background = '#ffffff';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = 'rgba(15, 23, 42, 0.06)';
                    e.currentTarget.style.boxShadow = '0 2px 8px rgba(15, 23, 42, 0.02)';
                    e.currentTarget.style.transform = 'translateY(0)';
                    e.currentTarget.style.background = '#f8fafc';
                  }}
                  >
                    {item}
                  </span>
                ))}
              </motion.div>
            </motion.div>

            {/* RIGHT: Elevated Stat Grid */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92, x: 20 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 1.2, delay: 0.15, ease: springEase }}
              style={{ 
                flex: '1 1 420px', 
                display: 'grid', 
                gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', 
                gap: '24px',
                position: 'relative',
              }}
            >
              {[
                { value: '50+', label: 'Projects Shipped', color: '#2563eb', bg: 'rgba(37, 99, 235, 0.05)' },
                { value: '98%', label: 'Client Satisfaction', color: '#10b981', bg: 'rgba(16, 185, 129, 0.05)' },
                { value: '4',   label: 'Industries Served', color: '#8b5cf6', bg: 'rgba(139, 92, 246, 0.05)' },
                { value: '3x',  label: 'Avg. Speed Gain', color: '#f97316', bg: 'rgba(249, 115, 22, 0.05)' },
              ].map((stat, i) => (
                <motion.div 
                  key={i} 
                  whileHover={{ y: -8, scale: 1.02 }}
                  transition={{ type: 'spring', stiffness: 400, damping: 25 }}
                  style={{
                  background: '#ffffff',
                  padding: '36px 28px',
                  borderRadius: '24px',
                  boxShadow: '0 12px 40px rgba(15,23,42,0.06)',
                  border: '1px solid rgba(15, 23, 42, 0.04)',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'center',
                  cursor: 'default'
                }}>
                  {/* Subtle background glow for each card */}
                  <div style={{ position: 'absolute', top: 0, right: 0, width: '120px', height: '120px', background: stat.bg, filter: 'blur(35px)', borderRadius: '50%', transform: 'translate(30%, -30%)' }} />
                  
                  <div style={{ fontSize: '2.75rem', fontWeight: 800, letterSpacing: '-0.04em', color: '#0f172a', lineHeight: 1, position: 'relative', zIndex: 1 }}>
                    {stat.value}
                  </div>
                  <div style={{ 
                    fontSize: '0.8rem', 
                    color: '#64748b', 
                    marginTop: '12px', 
                    fontWeight: 700, 
                    letterSpacing: '0.05em', 
                    textTransform: 'uppercase',
                    position: 'relative',
                    zIndex: 1
                  }}>
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </motion.div>

          </div>
        </div>
      </div>

      {/* Projects List - New Side-by-Side Card Layout */}
      <div className="container" style={{ maxWidth: '1200px', margin: '0 auto', paddingLeft: '24px', paddingRight: '24px' }}>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '80px' }}>
          
          {paginatedProjects.map((project, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-60px' }}
              whileHover={{ scale: 1.01, y: -6, boxShadow: '0 30px 60px rgba(15,23,42,0.08)' }}
              transition={{ duration: 0.95, delay: idx * 0.12, ease: springEase, scale: { duration: 0.4 }, y: { duration: 0.4 } }}
              style={{ 
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
              <motion.div
                className="project-image-frame"
                initial={{ opacity: 0, scale: 0.94, x: idx % 2 !== 0 ? 28 : -28 }}
                whileInView={{ opacity: 1, scale: 1, x: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 1, delay: 0.18 + idx * 0.1, ease: springEase }}
                style={{ 
                flex: '1 1 400px',
                minWidth: '300px',
                height: '450px', 
                borderRadius: '16px', 
                overflow: 'hidden', 
                position: 'relative',
                boxShadow: '0 25px 50px rgba(0,0,0,0.08)',
                border: '8px solid #f8fafc'
              }}>
                <motion.img
                  className="project-image-hover"
                  src={project.image} 
                  alt={project.title} 
                  whileHover={{ scale: 1.05 }}
                  transition={{ duration: 0.6, ease: springEase }}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
                />
                <motion.div 
                  whileHover={{ scale: 1.05, backgroundColor: '#0f172a', color: '#ffffff' }}
                  transition={{ duration: 0.2 }}
                  style={{
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
                  boxShadow: '0 4px 6px rgba(0,0,0,0.05)',
                  cursor: 'default'
                }}>
                  {project.id}
                </motion.div>
              </motion.div>

              {/* Text Side */}
              <motion.div
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ duration: 0.9, delay: 0.22 + idx * 0.1, ease: springEase }}
                style={{ flex: '1 1 500px', display: 'flex', flexDirection: 'column' }}
              >
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '20px' }}>
                  {project.roles.map(role => (
                    <motion.span
                      key={role}
                      initial={{ opacity: 0, y: 10 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      whileHover={{ y: -3, scale: 1.05, backgroundColor: '#ffffff', borderColor: '#cbd5e1', boxShadow: '0 4px 12px rgba(15,23,42,0.06)', color: '#0f172a' }}
                      transition={{ duration: 0.45, ease: springEase, scale: { duration: 0.2 }, y: { duration: 0.2 } }}
                      style={{ 
                      padding: '8px 16px', 
                      background: '#f8fafc',
                      border: '1px solid #e2e8f0',
                      borderRadius: '999px',
                      fontSize: '0.78rem',
                      fontWeight: 700,
                      color: '#475569',
                      letterSpacing: '0.02em',
                      cursor: 'default',
                    }}>
                      {role}
                    </motion.span>
                  ))}
                </div>

                <h2 style={{ fontSize: 'clamp(2rem, 4vw, 2.75rem)', fontWeight: 800, letterSpacing: '-0.03em', margin: '0 0 16px 0', color: '#0f172a', lineHeight: 1.1 }}>
                  {project.title}
                </h2>
                
                <p style={{ fontSize: '1.05rem', color: '#475569', lineHeight: 1.6, margin: '0 0 32px 0' }}>
                  {project.description}
                </p>

                {/* Problem, Solution, Use Case */}
                <motion.div
                  className="project-detail-card-wrap"
                  initial={{ opacity: 0, y: 18 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.8, delay: 0.32 + idx * 0.08, ease: springEase }}
                  style={{ display: 'flex', flexDirection: 'column', gap: '20px', marginBottom: '40px', background: '#f8fafc', padding: '24px', borderRadius: '16px', border: '1px solid #f1f5f9' }}
                >
                  
                  <motion.div 
                    className="project-detail-row card-danger" 
                    whileHover={{ x: 6, backgroundColor: '#ffffff', scale: 1.01, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', gap: '16px', padding: '12px', borderRadius: '12px', margin: '-12px', cursor: 'default' }}
                  >
                    <div className="project-detail-icon" style={{ flexShrink: 0, width: '32px', height: '32px', background: '#fee2e2', color: '#ef4444', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z"></path><line x1="12" y1="9" x2="12" y2="13"></line><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>The Challenge</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{project.problem}</p>
                    </div>
                  </motion.div>

                  <div className="project-detail-divider" style={{ width: '100%', height: '1px', background: '#e2e8f0', margin: '8px 0' }} />

                  <motion.div 
                    className="project-detail-row card-success" 
                    whileHover={{ x: 6, backgroundColor: '#ffffff', scale: 1.01, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', gap: '16px', padding: '12px', borderRadius: '12px', margin: '-12px', cursor: 'default' }}
                  >
                    <div className="project-detail-icon" style={{ flexShrink: 0, width: '32px', height: '32px', background: '#dcfce7', color: '#22c55e', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Our Solution</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{project.solution}</p>
                    </div>
                  </motion.div>

                  <div className="project-detail-divider" style={{ width: '100%', height: '1px', background: '#e2e8f0', margin: '8px 0' }} />

                  <motion.div 
                    className="project-detail-row card-info" 
                    whileHover={{ x: 6, backgroundColor: '#ffffff', scale: 1.01, boxShadow: '0 8px 24px rgba(0,0,0,0.04)' }}
                    transition={{ duration: 0.2 }}
                    style={{ display: 'flex', gap: '16px', padding: '12px', borderRadius: '12px', margin: '-12px', cursor: 'default' }}
                  >
                    <div className="project-detail-icon" style={{ flexShrink: 0, width: '32px', height: '32px', background: '#dbeafe', color: '#3b82f6', borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
                    </div>
                    <div>
                      <h4 style={{ margin: '0 0 4px 0', fontSize: '0.9rem', fontWeight: 800, color: '#0f172a' }}>Target Use Case</h4>
                      <p style={{ margin: 0, fontSize: '0.95rem', color: '#64748b', lineHeight: 1.5 }}>{project.useCase}</p>
                    </div>
                  </motion.div>

                </motion.div>

                {/* Buttons Component */}
                <div style={{ display: 'flex', gap: '16px', marginTop: 'auto', flexWrap: 'wrap' }}>
                  <motion.button
                    className="btn-primary-hover project-btn-primary"
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2, boxShadow: '0 12px 24px rgba(15,23,42,0.25)' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.65, delay: 0.38 + idx * 0.08, ease: springEase, scale: { duration: 0.2 }, y: { duration: 0.2 } }}
                    style={{ 
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
                  </motion.button>
                  <motion.button
                    className="btn-secondary-hover project-btn-secondary"
                    onClick={() => navigate(`/projects/${project.id}`)}
                    initial={{ opacity: 0, y: 14 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.02, y: -2, boxShadow: '0 8px 20px rgba(15,23,42,0.08)', backgroundColor: '#f8fafc' }}
                    whileTap={{ scale: 0.98 }}
                    transition={{ duration: 0.72, delay: 0.45 + idx * 0.08, ease: springEase, scale: { duration: 0.2 }, y: { duration: 0.2 } }}
                    style={{ 
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
                  </motion.button>
                </div>

              </motion.div>
            </motion.div>
          ))}

        </div>
      </div>

      {/* ── PAGINATION ── */}
      {totalPages > 1 && (
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '8px',
          padding: '32px 24px 20px',
        }}>

          {/* Prev Button */}
          <motion.button
            className={`project-pagination-btn ${currentPage === 1 ? 'is-disabled' : ''}`}
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, ease: springEase }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: currentPage === 1 ? '1px solid #e2e8f0' : '1px solid #2563eb',
              background: currentPage === 1 ? '#f8fafc' : '#eff6ff',
              color: currentPage === 1 ? '#cbd5e1' : '#2563eb',
              cursor: currentPage === 1 ? 'not-allowed' : 'pointer',
              boxShadow: currentPage === 1 ? 'none' : '0 2px 8px rgba(37,99,235,0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6" />
            </svg>
          </motion.button>

          {/* Page Numbers */}
          {Array.from({ length: totalPages }, (_, i) => i + 1).map(page => {
            const isActive = page === currentPage;
            return (
              <motion.button
                className={`project-pagination-btn project-page-number ${isActive ? 'is-active' : ''}`}
                key={page}
                onClick={() => handlePageChange(page)}
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: page * 0.05, ease: springEase }}
                style={{
                  width: '44px',
                  height: '44px',
                  borderRadius: '12px',
                  border: isActive ? 'none' : '1px solid #e2e8f0',
                  background: isActive ? '#2563eb' : '#ffffff',
                  color: isActive ? '#ffffff' : '#475569',
                  fontWeight: isActive ? 800 : 600,
                  fontSize: '0.95rem',
                  cursor: 'pointer',
                  boxShadow: isActive
                    ? '0 4px 14px rgba(37,99,235,0.35)'
                    : '0 2px 8px rgba(0,0,0,0.04)',
                  transition: 'all 0.2s ease',
                  letterSpacing: '-0.01em',
                }}
              >
                {page}
              </motion.button>
            );
          })}

          {/* Next Button */}
          <motion.button
            className={`project-pagination-btn ${currentPage === totalPages ? 'is-disabled' : ''}`}
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.12, ease: springEase }}
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              width: '44px',
              height: '44px',
              borderRadius: '12px',
              border: currentPage === totalPages ? '1px solid #e2e8f0' : '1px solid #2563eb',
              background: currentPage === totalPages ? '#f8fafc' : '#eff6ff',
              color: currentPage === totalPages ? '#cbd5e1' : '#2563eb',
              cursor: currentPage === totalPages ? 'not-allowed' : 'pointer',
              boxShadow: currentPage === totalPages ? 'none' : '0 2px 8px rgba(37,99,235,0.15)',
              transition: 'all 0.2s ease',
            }}
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6" />
            </svg>
          </motion.button>

        </div>
      )}

      {/* Page info */}
      <div style={{ textAlign: 'center', paddingBottom: '32px' }}>
        <span style={{ fontSize: '0.85rem', color: '#94a3b8', fontWeight: 600 }}>
          Showing {((currentPage - 1) * PROJECTS_PER_PAGE) + 1}–{Math.min(currentPage * PROJECTS_PER_PAGE, projects.length)} of {projects.length} projects
        </span>
      </div>

    </div>
  );
}
