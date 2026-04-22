import { useState, useEffect } from 'react';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isMenuOpen]);

  const projects = [
    {
      title: "TodoF1",
      description:
        "Aplicación web desarrollada como TFG centrada en datos históricos de Fórmula 1 desde 1950 hasta la actualidad, con visualización interactiva de estadísticas, resultados y enfoque en experiencia de usuario.",
      tech: ["JavaScript", "HTML", "CSS", "SQL", "Frontend"],
      status: "TFG",
      link: "https://github.com/Daniel-Zarco/todoF1",
    },
    {
      title: "FitCity AI",
      description:
        "Aplicación geolocalizada orientada al fitness, con registro y análisis de ejercicios, rankings por gimnasio y tipo de ejercicio, e integración progresiva de funcionalidades basadas en Inteligencia Artificial para validar movimientos.",
      tech: ["Angular", "JavaScript", "IA", "Geolocalización", "Git"],
      status: "En desarrollo",
      link: "#",
    },
    {
      title: "Proyecto UNED",
      description:
        "Colaboración técnica orientada al mantenimiento y evolución de una base de datos de Patrimonio Cultural, trabajando con Drupal, gestión de contenidos y mejoras según requerimientos técnicos del cliente.",
      tech: ["Drupal", "Base de datos", "Gestión de contenidos", "Datos"],
      status: "Colaboración técnica",
      link: "#",
    },
  ];

  const skills = {
    Lenguajes: ["JavaScript", "Java", "SQL", "PHP", "HTML", "CSS"],
    Frontend: ["Angular", "jQuery", "Bootstrap"],
    Herramientas: ["Git", "GitHub", "Drupal", "LimeSurvey"],
    Perfil: ["Lógica de datos", "Automatización", "Validación en tiempo real", "Interacción web"],
  };

  const experience = [
    {
      role: "Desarrollador Web",
      company: "Análisis e Investigación · Madrid",
      url: "https://www.analisiseinvestigacion.com/",
      points: [
        "Desarrollo de soluciones interactivas basadas en JavaScript para sistemas de encuestas.",
        "Implementación de lógica condicional compleja y automatización de flujos de respuesta.",
        "Manipulación del DOM para personalización dinámica de formularios.",
        "Validación y tratamiento de datos en tiempo real.",
        "Mejora de usabilidad y rendimiento en aplicaciones web.",
      ],
    },
    {
      role: "Desarrollador (colaboración técnica)",
      company: "Proyecto UNED · Comunidad de Madrid",
      url: "https://www.uned.es/universidad/inicio/",
      points: [
        "Mantenimiento y evolución de la base de datos de Patrimonio Cultural.",
        "Desarrollo sobre CMS Drupal y gestión de contenidos.",
        "Implementación de mejoras según requerimientos técnicos del cliente.",
        "Participación en proyecto institucional orientado a la gestión y estructuración de datos.",
      ],
    },
    {
      role: "Técnico en Sistemas (Prácticas)",
      company: "Mediaset España · Madrid",
      url: "https://www.mediaset.es/",
      points: [
        "Soporte técnico en entorno corporativo.",
        "Configuración y mantenimiento de equipos.",
        "Maquetación de puestos de trabajo.",
      ],
    },
  ];

  const education = [
    {
      title: "Curso de Especialización en Inteligencia Artificial y Big Data",
      institution: "IFP",
      date: "2025 – Actualidad",
      url: "https://www.planetafp.es/"
    },
    {
      title: "Desarrollo de Aplicaciones Web (DAW)",
      institution: "I.E.S. Rosa Chacel",
      date: "2023 – 2025",
      url: "https://site.educa.madrid.org/ies.rosachacel.madrid/"
    },
    {
      title: "Sistemas Microinformáticos y Redes (SMR)",
      institution: "I.E.S. Rosa Chacel",
      date: "2021 – 2023",
      url: "https://site.educa.madrid.org/ies.rosachacel.madrid/"
    }
  ];

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <div className="portfolio-root" style={{ minHeight: '100vh', background: 'var(--bg)', color: 'var(--text)' }}>
      <header className="nav-header">
        <div className="nav-content">
          <div className="nav-logo">
            <span className="nav-logo-sub">Portfolio</span>
            <h1 className="nav-logo-name">Daniel Zarco Sastre</h1>
          </div>
          
          <button 
            className="menu-toggle" 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="18" y1="6" x2="6" y2="18"></line>
                <line x1="6" y1="6" x2="18" y2="18"></line>
              </svg>
            ) : (
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <line x1="3" y1="12" x2="21" y2="12"></line>
                <line x1="3" y1="6" x2="21" y2="6"></line>
                <line x1="3" y1="18" x2="21" y2="18"></line>
              </svg>
            )}
          </button>

          <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <a href="#sobre-mi" onClick={closeMenu}>Sobre mí</a>
            <a href="#experiencia" onClick={closeMenu}>Experiencia</a>
            <a href="#proyectos" onClick={closeMenu}>Proyectos</a>
            <a href="#skills" onClick={closeMenu}>Tecnologías</a>
            <a href="#contacto" onClick={closeMenu}>Contacto</a>
          </nav>
        </div>
      </header>

      <main style={{ paddingTop: '100px' }}>
        <section className="section-container hero-grid reveal-anim">
          <div>
            <span className="badge badge-cyan">Desarrollador Web</span>
            <h2 className="heading-xl mt-16">
              Desarrollo web con foco en <span style={{ color: 'var(--accent)' }}>JavaScript</span>, lógica de datos e <span style={{ color: 'var(--accent-secondary)' }}>interacción real</span>.
            </h2>
            <p className="text-lg">
              Desarrollador web especializado en JavaScript y lógica de datos, con experiencia en proyectos reales enfocados a la interacción y el tratamiento de información. Actualmente compagino mi trabajo con formación avanzada en IA y Big Data.
            </p>

            <div className="flex-wrap gap-16 mt-32">
              <a href="https://github.com/Daniel-Zarco" className="btn btn-primary" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=d.zarcosastre@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-secondary">Email</a>
            </div>
          </div>

          <div className="glass-card" style={{ padding: '32px' }}>
            <div style={{ marginBottom: '24px' }}>
              <p style={{ color: 'var(--accent)', fontSize: '12px', fontWeight: 'bold', textTransform: 'uppercase', marginBottom: '4px' }}>Perfil Profesional</p>
              <h3 style={{ fontSize: '28px', color: 'var(--text-h)', margin: 0, fontWeight: '600' }}>Daniel Zarco</h3>
            </div>

            <div style={{ display: 'grid', gap: '16px' }}>
              <div className="profile-detail">
                <p className="detail-label">Enfoque</p>
                <p className="detail-value">Interacción web, automatización y tratamiento de datos</p>
              </div>
              <div className="profile-detail">
                <p className="detail-label">Stack principal</p>
                <p className="detail-value">JavaScript · Angular · SQL · Java · Drupal</p>
              </div>
              <div className="profile-detail" style={{ border: 'none' }}>
                <p className="detail-label">Ubicación</p>
                <p className="detail-value">Madrid · España</p>
              </div>
            </div>
          </div>
        </section>

        <section id="sobre-mi" className="section-container reveal-anim" style={{ animationDelay: '0.1s' }}>
          <span className="badge badge-cyan">Sobre mí</span>
          <h3 className="heading-lg max-w-800 mt-16">
            Perfil técnico orientado a desarrollo web y tratamiento de información
          </h3>
          <p className="text-lg max-w-900">
            Trabajo como desarrollador web en proyectos donde la interacción, la lógica condicional y el tratamiento de datos tienen un papel clave. He participado en desarrollos centrados en sistemas de encuestas, automatización de flujos de respuesta y validación en tiempo real.
          </p>
          <p className="text-lg max-w-900 mt-16">
            Además, sigo ampliando mi perfil con formación en **Inteligencia Artificial y Big Data**, combinando desarrollo frontend con lógica de negocio compleja.
          </p>
        </section>

        <section id="experiencia" className="section-container reveal-anim" style={{ animationDelay: '0.2s' }}>
          <span className="badge badge-cyan">Experiencia</span>
          <h3 className="heading-lg mt-16">Trayectoria profesional</h3>

          <div className="experience-list">
            {experience.map((job, idx) => (
              <a
                key={idx}
                href={job.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card experience-item"
                style={{ padding: '32px', marginBottom: '24px', display: 'block', textDecoration: 'none', color: 'inherit' }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', flexWrap: 'wrap', gap: '12px' }}>
                  <div>
                    <h4 className="experience-role">{job.role}</h4>
                    <p className="experience-company">{job.company}</p>
                  </div>
                </div>
                <ul className="experience-points">
                  {job.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </a>
            ))}
          </div>
        </section>

        <section id="proyectos" className="section-container reveal-anim" style={{ animationDelay: '0.3s' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', flexWrap: 'wrap', gap: '20px', marginBottom: '40px' }}>
            <div>
              <span className="badge badge-cyan">Proyectos</span>
              <h3 className="heading-lg mt-16 mb-0">Trabajos destacados</h3>
            </div>
            <p className="text-lg max-w-500" style={{ fontSize: '16px', color: 'var(--text)' }}>
              Una selección de proyectos que reflejan desarrollo web, gestión de datos y soluciones orientadas al usuario.
            </p>
          </div>

          <div className="project-grid">
            {projects.map((project) => (
              <a 
                key={project.title} 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="glass-card" 
                style={{ 
                  padding: '24px', 
                  display: 'flex', 
                  flexDirection: 'column', 
                  height: '100%',
                  textDecoration: 'none',
                  color: 'inherit'
                }}
              >
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '16px' }}>
                  <h4 style={{ fontSize: '20px', margin: 0, color: 'var(--text-h)', fontWeight: '600' }}>{project.title}</h4>
                  <span className="project-status">{project.status}</span>
                </div>
                <p style={{ fontSize: '14px', lineHeight: '1.6', color: 'var(--text)', flexGrow: 1 }}>{project.description}</p>
                <div className="flex-wrap gap-8 mt-16">
                  {project.tech.map((item) => (
                    <span key={item} className="tech-tag">{item}</span>
                  ))}
                </div>
              </a>
            ))}
          </div>
        </section>

        <section id="skills" className="section-container reveal-anim" style={{ animationDelay: '0.4s' }}>
          <span className="badge badge-cyan">Tecnologías</span>
          <h3 className="heading-lg mt-16">Herramientas y conocimientos</h3>

          <div className="skill-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="glass-card" style={{ padding: '24px' }}>
                <h4 className="skill-category">{category}</h4>
                <div className="flex-wrap gap-8">
                  {items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-container reveal-anim" style={{ animationDelay: '0.5s' }}>
          <span className="badge badge-cyan">Formación</span>
          <h3 className="heading-lg mt-16">Formación académica</h3>

          <div className="education-grid">
            {education.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card education-item"
                style={{ padding: '24px', display: 'block', textDecoration: 'none' }}
              >
                <h4 className="education-title">{item.title}</h4>
                <p className="education-meta">{item.institution} · {item.date}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contacto" className="section-container reveal-anim" style={{ animationDelay: '0.6s' }}>
          <div className="glass-card contact-cta">
            <span className="badge badge-cyan">Contacto</span>
            <h3 className="heading-lg mt-16">¿Listo para colaborar?</h3>
            <p className="text-lg max-w-600" style={{ margin: '0 auto 32px' }}>
              Puedes encontrarme en Madrid. Actualmente compagino mi trabajo con formación constante, y estoy abierto a nuevos desafíos tecnológicos.
            </p>

            <div className="flex-wrap gap-16 justify-center">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=d.zarcosastre@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-primary">Enviar Email</a>
              <a href="tel:666453572" className="btn btn-secondary">666 453 572</a>
              <a href="https://github.com/Daniel-Zarco" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ padding: '40px', borderTop: '1px solid var(--border)', textAlign: 'center' }}>
        <p style={{ fontSize: '14px', color: 'var(--text)' }}>
          © {new Date().getFullYear()} Daniel Zarco Sastre · Madrid
        </p>
      </footer>
    </div>
  );
}