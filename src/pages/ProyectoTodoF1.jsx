import { Link } from 'react-router-dom';
import { usePage } from '../hooks/usePage';
import { projects } from '../data';

const project = projects.find((p) => p.title === 'TodoF1');

const features = [
  'Explorar temporadas, pilotos y equipos desde 1970 hasta la actualidad.',
  'Consultar clasificaciones de cada temporada.',
  'Descubrir estadísticas y datos históricos de cada temporada.',
];

export default function ProyectoTodoF1() {
  usePage();

  if (!project) return null;

  return (
    <div className="page pd">
      <section className="section pd-hero">
        <div className="section-inner">
          <span className="section-badge" data-reveal>
            <span className="section-badge-dot" />
            Proyecto
          </span>
          <h1 className="pd-title" data-reveal>
            {project.title}
          </h1>
          <p className="pd-status" data-reveal>
            {project.status}
          </p>
          <p className="pd-lead" data-reveal>
            {project.description}
          </p>
          <div className="pd-hero-meta" data-reveal>
            <ul className="pd-tech">
              {project.tech.map((t) => (
                <li key={t} className="tech-tag">
                  {t}
                </li>
              ))}
            </ul>
            <a
              className="chip-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
            >
              GitHub <span className="chip-link-arrow">↗</span>
            </a>
          </div>
        </div>
      </section>

      <section className="section pd-preview">
        <div className="section-inner">
          <h2 className="pd-h2" data-reveal>
            Preview del proyecto
          </h2>
          <div className="pd-preview-frame" data-reveal>
            <span className="pd-preview-note">
              Espacio reservado para la captura de TodoF1
            </span>
          </div>
        </div>
      </section>

      <section className="section pd-about">
        <div className="section-inner">
          <h2 className="pd-h2" data-reveal>
            Sobre el proyecto
          </h2>
          <p className="pd-text" data-reveal>
            TodoF1 es una plataforma web dedicada a la Fórmula 1. Su objetivo es
            permitir explorar temporadas, pilotos y equipos desde 1970 hasta la
            actualidad, consultar clasificaciones y descubrir estadísticas y datos
            históricos de cada temporada.
          </p>
        </div>
      </section>

      <section className="section pd-features">
        <div className="section-inner">
          <h2 className="pd-h2" data-reveal>
            Funcionalidades
          </h2>
          <ul className="pd-features-list">
            {features.map((f, i) => (
              <li key={i} data-reveal data-reveal-delay={`${i * 80}`}>
                <span className="pd-feature-dot" />
                {f}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pd-stack">
        <div className="section-inner">
          <h2 className="pd-h2" data-reveal>
            Stack
          </h2>
          <ul className="pd-stack-grid">
            {project.tech.map((t, i) => (
              <li
                key={t}
                className="pd-stack-item"
                data-reveal
                data-reveal-delay={`${i * 60}`}
              >
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="section pd-links">
        <div className="section-inner">
          <div className="pd-links-row" data-reveal>
            <a
              className="chip-link"
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              data-cursor
            >
              GitHub <span className="chip-link-arrow">↗</span>
            </a>
            <Link to="/proyectos" className="pd-back" data-cursor>
              <span className="pd-back-arrow">←</span> Volver a proyectos
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}