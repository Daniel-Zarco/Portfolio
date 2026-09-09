import { useState, useEffect, useRef } from 'react';
import { Analytics } from '@vercel/analytics/react';
import './App.css';

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const revealObserverRef = useRef(null);
  const scrollSpyObserverRef = useRef(null);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : 'unset';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const revealElements = document.querySelectorAll('.reveal, .stripe');
    revealObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            revealObserverRef.current.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    revealElements.forEach((el) => revealObserverRef.current.observe(el));

    return () => {
      if (revealObserverRef.current) revealObserverRef.current.disconnect();
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
    const sections = document.querySelectorAll('section[id]');

    const setActiveLink = (id) => {
      navLinks.forEach((link) => {
        link.classList.remove('active-link');
        if (link.getAttribute('href') === `#${id}`) {
          link.classList.add('active-link');
        }
      });
    };

    const handleNavClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      const target = document.querySelector(href);
      if (!target) return;
      e.preventDefault();
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    };

    scrollSpyObserverRef.current = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveLink(entry.target.id);
          }
        });
      },
      { threshold: 0.3, rootMargin: '-20% 0px -60% 0px' }
    );

    sections.forEach((section) => scrollSpyObserverRef.current.observe(section));
    navLinks.forEach((link) => link.addEventListener('click', handleNavClick));

    return () => {
      if (scrollSpyObserverRef.current) scrollSpyObserverRef.current.disconnect();
      navLinks.forEach((link) => link.removeEventListener('click', handleNavClick));
    };
  }, []);

  const projects = [
    {
      title: "TodoF1",
      description:
        "Aplicación web desarrollada como TFG centrada en datos históricos de Fórmula 1 desde 1950 hasta la actualidad, con visualización interactiva de estadísticas, resultados y enfoque en experiencia de usuario.",
      tech: ["JavaScript", "HTML", "CSS", "SQL", "Frontend"],
      status: "TFG",
      link: "https://github.com/Daniel-Zarco/todoF1-2025",
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
      link: "https://www.uned.es/universidad/inicio/",
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

  return (
    <div className="portfolio-root">
      <header className={`nav-header ${isScrolled ? 'scrolled' : ''}`}>
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
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          ) : (
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          )}
        </button>

        <nav className="nav-links">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#skills">Tecnologías</a>
          <a href="#contacto">Contacto</a>
        </nav>
      </header>

      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <a href="#sobre-mi">Sobre mí</a>
        <a href="#experiencia">Experiencia</a>
        <a href="#proyectos">Proyectos</a>
        <a href="#skills">Tecnologías</a>
        <a href="#contacto">Contacto</a>
      </div>

      <main>
        <section className="hero-section">
          <div className="hero-content">
            <div className="hero-top">
              <span className="hero-badge">
                <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <polyline points="2.77 0 12 0 12 9.23"></polyline>
                  <line x1="12" y1="0" x2="0" y2="12"></line>
                </svg>
                Desarrollador Web · Madrid
              </span>
              <p className="hero-location">Madrid · España</p>
            </div>

            <div className="hero-name-wrapper">
              <h1 className="hero-name">
                Daniel Zarco Sastre<span className="spacer">—</span>
              </h1>
            </div>

            <div className="hero-subtitle">
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <polyline points="2.77 0 12 0 12 9.23"></polyline>
                <line x1="12" y1="0" x2="0" y2="12"></line>
              </svg>
              <h4>Desarrollador Web Full-Stack con foco en lógica de negocio y datos</h4>
            </div>

            <div className="hero-description">
              <p>
                Desarrollo aplicaciones web donde la lógica de negocio, la automatización y el tratamiento de datos tienen un papel clave.
                Actualmente ampliando mi perfil con formación en Inteligencia Artificial y Big Data.
              </p>
            </div>

            <div className="hero-actions">
              <a href="#proyectos" className="btn btn-round btn-primary">Ver proyectos</a>
              <a href="https://github.com/Daniel-Zarco" className="btn btn-round btn-secondary" target="_blank" rel="noopener noreferrer">Ver GitHub</a>
              <a href="https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/" className="btn btn-round btn-secondary" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>

            <div className="hero-stack">
              <span>Angular</span>
              <span>PHP / Laravel</span>
              <span>JavaScript</span>
              <span>SQL</span>
              <span>IA & Big Data</span>
            </div>
          </div>
        </section>

        <section id="proyectos" className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="badge">Proyectos</span>
              <h3>Trabajos destacados</h3>
            </div>
            <p className="section-description">
              Una selección de proyectos que reflejan desarrollo web, gestión de datos y soluciones orientadas al usuario.
            </p>
          </div>

          <div className="projects-list">
            {projects.map((project, idx) => {
              const isLink = project.link && project.link !== "#";
              const linkProps = isLink ? { href: project.link, target: "_blank", rel: "noopener noreferrer" } : {};

              return (
                <div key={project.title} className={`project-item reveal reveal-delay-${idx}`}>
                  {isLink ? (
                    <a {...linkProps}>
                      <h4>{project.title}</h4>
                      <p className="project-desc">{project.description}</p>
                      <span className="project-status">{project.status}</span>
                    </a>
                  ) : (
                    <div className="project-item-inner">
                      <h4>{project.title}</h4>
                      <p className="project-desc">{project.description}</p>
                      <span className="project-status">{project.status}</span>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        <section id="sobre-mi" className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="badge">Sobre mí</span>
              <h3>Perfil técnico orientado a desarrollo web y tratamiento de información</h3>
            </div>
          </div>

          <div className="about-grid">
            <div className="about-content reveal">
              <p>
                Trabajo como desarrollador web en proyectos donde la interacción, la lógica condicional y el tratamiento de datos tienen un papel clave. He participado en desarrollos centrados en sistemas de encuestas, automatización de flujos de respuesta y validación en tiempo real.
              </p>
              <p>
                Además, sigo ampliando mi perfil con formación en Inteligencia Artificial y Big Data, combinando desarrollo frontend con lógica de negocio compleja.
              </p>
            </div>

            <div className="hero-stack-grid reveal reveal-delay-1">
              <div className="profile-card">
                <span className="badge">Perfil profesional</span>
                <h4 className="profile-card-name">Daniel Zarco Sastre</h4>
                <p className="profile-card-role">
                  Desarrollo aplicaciones web centradas en lógica de negocio, automatización y tratamiento de datos
                </p>

                <div className="profile-detail">
                  <p className="detail-label">Especialidad</p>
                  <p className="detail-value">
                    Angular · PHP (Laravel) · JavaScript · SQL · IA & Big Data
                  </p>
                </div>

                <div className="profile-detail">
                  <p className="detail-label">Enfoque</p>
                  <p className="detail-value">Interfaces útiles, automatización y tratamiento de información</p>
                </div>

                <div className="profile-detail">
                  <p className="detail-label">Actualmente</p>
                  <p className="detail-value">Trabajo en desarrollo web y sigo formándome en IA y Big Data</p>
                </div>

                <div className="profile-detail" style={{ border: 'none' }}>
                  <p className="detail-label">Ubicación</p>
                  <p className="detail-value">Madrid · España</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="experiencia" className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="badge">Experiencia</span>
              <h3>Trayectoria profesional</h3>
            </div>
          </div>

          <div className="experience-list">
            {experience.map((job, idx) => (
              <div key={idx} className="experience-item reveal">
                <div className="experience-header">
                  <div>
                    <h4 className="experience-role">{job.role}</h4>
                    <p className="experience-company">
                      <a href={job.url} target="_blank" rel="noopener noreferrer">{job.company}</a>
                    </p>
                  </div>
                </div>
                <ul className="experience-points">
                  {job.points.map((point, pIdx) => (
                    <li key={pIdx}>{point}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        <section id="skills" className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="badge">Tecnologías</span>
              <h3>Herramientas y conocimientos</h3>
            </div>
          </div>

          <div className="skills-grid">
            {Object.entries(skills).map(([category, items], idx) => (
              <div key={category} className={`skill-category reveal reveal-delay-${idx}`}>
                <h4>{category}</h4>
                <div className="skill-tags">
                  {items.map((item) => (
                    <span key={item} className="skill-tag">{item}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section">
          <div className="section-header">
            <div className="section-title">
              <span className="badge">Formación</span>
              <h3>Formación académica</h3>
            </div>
          </div>

          <div className="education-list">
            {education.map((item, idx) => (
              <a
                key={idx}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="education-item reveal"
              >
                <h4 className="education-title">{item.title}</h4>
                <p className="education-meta">{item.institution} · {item.date}</p>
              </a>
            ))}
          </div>
        </section>

        <section id="contacto" className="contact-section">
          <div className="contact-content">
            <h2>¿Listo para colaborar?</h2>
            <p className="section-description" style={{ margin: '0 auto 48px' }}>
              Puedes encontrarme en Madrid. Actualmente compagino mi trabajo con formación constante, y estoy abierto a nuevos desafíos tecnológicos.
            </p>

            <div className="contact-actions">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=d.zarcosastre@gmail.com" target="_blank" rel="noopener noreferrer" className="btn btn-round btn-primary">Enviar Email</a>
              <a href="tel:666453572" className="btn btn-round btn-secondary">666 453 572</a>
            </div>

            <div className="contact-links">
              <a href="https://github.com/Daniel-Zarco" className="contact-link" target="_blank" rel="noopener noreferrer">GitHub</a>
              <a href="https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/" className="contact-link" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            </div>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="footer-left">
          <span>©</span>
          <span>{new Date().getFullYear()} Daniel Zarco Sastre · Madrid</span>
        </div>
        <div className="footer-right">
          <a href="#sobre-mi">Sobre mí</a>
          <a href="#experiencia">Experiencia</a>
          <a href="#proyectos">Proyectos</a>
          <a href="#contacto">Contacto</a>
        </div>
      </footer>

      <Analytics />
    </div>
  );
}
