import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePage } from '../hooks/usePage';
import { projects } from '../data';

const project = projects.find((p) => p.slug === 'micarro');

const facts = [
  { key: 'Tipo', value: 'Full-Stack' },
  { key: 'Estado', value: 'Desplegado' },
  { key: 'Arquitectura', value: 'SPA + REST API' },
];

const features = [
  {
    n: '01',
    title: 'Catálogo',
    text: 'Búsqueda, categorías, filtros y paginación.',
    desktop: '/project-previews/DCatalogo.png',
    mobile: '/project-previews/MCatalogo.png',
  },
  {
    n: '02',
    title: 'Planificador',
    text: 'Propuestas según presupuesto, productos y preferencias.',
    desktop: '/project-previews/DPlanificador.png',
    mobile: '/project-previews/MPlanificador.png',
  },
  {
    n: '03',
    title: 'Novedades',
    text: 'Nuevos productos y variaciones reales de precio.',
    desktop: '/project-previews/DNovedades.jpg',
    mobile: '/project-previews/MNovedades.png',
  },
  {
    n: '04',
    title: 'Carrito',
    text: 'Cantidades y total automático.',
    desktop: '/project-previews/DCarrito.png',
    mobile: '/project-previews/MCarrito.png',
  },
  {
    n: '05',
    title: 'Favoritos',
    text: 'Asociados al usuario autenticado.',
    desktop: '/project-previews/DFavoritos.png',
    mobile: '/project-previews/MFavoritos.png',
  },
  {
    n: '06',
    title: 'Planes guardados',
    text: 'Guardar y gestionar planes de compra.',
    desktop: '/project-previews/DPlanes.png',
    mobile: '/project-previews/MPlanes.png',
  },
];

const planFlow = [
  'Productos solicitados',
  'Selección de candidatos',
  'Scoring',
  'Estrategia',
  'Optimización del presupuesto',
  'Propuesta de compra',
];

const devFront = [
  'Angular 21',
  'TypeScript',
  'Standalone Components',
  'Signals / Computed',
  'OnPush',
  'HttpClient',
  'JWT Interceptor',
];

const devBackend = [
  'Java 21',
  'Spring Boot',
  'REST API',
  'Spring Security',
  'JWT / BCrypt',
  'DTOs + Validation',
  'Global Exception Handler',
];

const devData = [
  'PostgreSQL',
  'Spring Data JPA',
  'Hibernate',
  'Flyway',
  'Histórico de precios',
  'Snapshots',
];

const stack = [
  'Angular',
  'TypeScript',
  'Java 21',
  'Spring Boot',
  'PostgreSQL',
  'JPA',
  'REST API',
  'JWT',
  'Flyway',
  'Docker',
  'Render',
];

export default function MiCarroCaseStudy() {
  usePage();

  const [active, setActive] = useState(null);
  const panelRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const previousActive = document.activeElement;
    document.body.style.overflow = 'hidden';
    panelRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setActive(null);
        return;
      }
      if (event.key === 'Tab' && panelRef.current) {
        const focusables = panelRef.current.querySelectorAll(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
        );
        if (!focusables.length) return;
        const first = focusables[0];
        const last = focusables[focusables.length - 1];
        if (event.shiftKey && document.activeElement === first) {
          event.preventDefault();
          last.focus();
        } else if (!event.shiftKey && document.activeElement === last) {
          event.preventDefault();
          first.focus();
        }
      }
    };

    document.addEventListener('keydown', onKey);

    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', onKey);
      if (previousActive instanceof HTMLElement) previousActive.focus();
    };
  }, [active]);

  if (!project) return null;

  return (
    <div className="page mc">
      {/* ============ HERO ============ */}
      <section className="section mc-hero">
        <div className="section-inner">
          <span className="section-badge" data-reveal>
            <span className="section-badge-dot" />
            Proyecto
          </span>
          <h1 className="mc-title" data-reveal>
            MiCarro
          </h1>
          <p className="mc-status" data-reveal>
            {project.status}
          </p>
          <p className="mc-lead" data-reveal>
            Aplicación Full-Stack para la gestión y planificación de compras, con
            un motor de selección y optimización que genera propuestas sobre un
            catálogo real en función del presupuesto y las preferencias del
            usuario.
          </p>
          <div className="mc-hero-meta" data-reveal>
            <ul className="mc-tech">
              {['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'JPA'].map((t) => (
                <li key={t} className="tech-tag">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mc-cta">
              <a
                className="mc-cta-primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
              >
                Ver proyecto ↗
              </a>
              <a
                className="chip-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
              >
                GitHub <span className="chip-link-arrow">↗</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ============ PREVIEW ============ */}
      <section className="section mc-preview">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Vista previa
          </h2>
          <figure className="mc-preview-figure" data-reveal>
            <img
              src="/project-previews/micarro.png"
              alt="Captura de la aplicación MiCarro"
              loading="lazy"
            />
          </figure>
        </div>
      </section>

      {/* ============ EL PROYECTO ============ */}
      <section className="section mc-about">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            El proyecto
          </h2>
          <div className="mc-about-grid">
            <div className="mc-about-text" data-reveal>
              <p>
                Angular consume una API REST propia expuesta por Spring Boot.
              </p>
              <p>
                PostgreSQL almacena un catálogo real de más de 4.000 productos,
                sincronizado mediante un proveedor externo desacoplado.
              </p>
              <p>
                La aplicación permite gestionar la compra y generar propuestas
                adaptadas al presupuesto y a las preferencias del usuario.
              </p>
            </div>
            <div className="mc-facts" data-reveal data-reveal-delay="120">
              {facts.map((f) => (
                <div key={f.key} className="mc-fact">
                  <span>{f.key}</span>
                  <strong>{f.value}</strong>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ============ FUNCIONALIDADES ============ */}
      <section className="section mc-features">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Funcionalidades
          </h2>
          <div className="mc-features-grid">
            {features.map((f, i) => (
              <button
                key={f.n}
                type="button"
                className="mc-feature"
                onClick={() => setActive(f)}
                aria-haspopup="dialog"
                data-reveal
                data-reveal-delay={`${(i % 3) * 70}`}
              >
                <span className="mc-feature-n">{f.n}</span>
                <h3>{f.title}</h3>
                <p>{f.text}</p>
                <span className="mc-feature-cta">Ver funcionalidad ↗</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* ============ ARQUITECTURA ============ */}
      <section className="section mc-architecture">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Arquitectura
          </h2>
          <div className="mc-flow mc-flow--main" data-reveal>
            <span className="mc-node">Angular</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">REST API</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">Spring Boot</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">JPA</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">PostgreSQL</span>
          </div>
          <div className="mc-flow mc-flow--sub" data-reveal>
            <span className="mc-node mc-node--muted">Provider</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node mc-node--muted">Product Sync</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node mc-node--muted">PostgreSQL</span>
          </div>
          <div className="mc-architecture-notes" data-reveal>
            <span>Provider Pattern</span>
            <span>Strategy Pattern</span>
            <span>Controller → Service → Repository</span>
          </div>
        </div>
      </section>

      {/* ============ MOTOR ============ */}
      <section className="section mc-motor">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            De una lista de compra a una propuesta optimizada
          </h2>
          <ol className="mc-motor-flow" data-reveal>
            {planFlow.map((step, i) => (
              <li key={step} data-reveal data-reveal-delay={`${i * 60}`}>
                <span className="mc-motor-step">{step}</span>
              </li>
            ))}
          </ol>
          <p className="mc-motor-text" data-reveal>
            El motor busca candidatos por niveles de coincidencia con el término
            solicitado, puntúa cada producto según relevancia, precio (relativo al
            rango) y favoritos —combinados con los pesos de la estrategia
            elegida— y finalmente ajusta la selección para que el total no supere
            el presupuesto. El usuario revisa siempre la propuesta antes de
            añadirla al carrito.
          </p>
        </div>
      </section>

      {/* ============ DESARROLLO ============ */}
      <section className="section mc-dev">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Desarrollo
          </h2>
          <div className="mc-dev-grid">
            <div className="mc-dev-col" data-reveal>
              <h3>Frontend</h3>
              <ul>
                {devFront.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="mc-dev-col" data-reveal data-reveal-delay="90">
              <h3>Backend</h3>
              <ul>
                {devBackend.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
            <div className="mc-dev-col" data-reveal data-reveal-delay="180">
              <h3>Datos</h3>
              <ul>
                {devData.map((t) => (
                  <li key={t}>{t}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* ============ STACK ============ */}
      <section className="section mc-stack">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Stack
          </h2>
          <ul className="mc-stack-list" data-reveal>
            {stack.map((t) => (
              <li key={t} className="tech-tag">
                {t}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ============ CIERRE ============ */}
      <section className="section mc-close">
        <div className="section-inner">
          <div className="mc-close-inner" data-reveal>
            <h2 className="mc-h2">Prueba MiCarro</h2>
            <p className="mc-close-text">
              Explora el catálogo, planifica una compra con tu presupuesto y
              prueba el motor de propuestas.
            </p>
            <div className="mc-cta">
              <a
                className="mc-cta-primary"
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
              >
                Ver proyecto ↗
              </a>
              <a
                className="chip-link"
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                data-cursor
              >
                GitHub <span className="chip-link-arrow">↗</span>
              </a>
            </div>
            <Link to="/proyectos" className="pd-back" data-cursor>
              <span className="pd-back-arrow">←</span> Volver a proyectos
            </Link>
          </div>
        </div>
      </section>

      {/* ============ MODAL FUNCIONALIDAD ============ */}
      {active && (
        <div
          className="mc-modal"
          onClick={(event) => {
            if (event.target === event.currentTarget) setActive(null);
          }}
        >
          <div
            className="mc-modal-panel"
            role="dialog"
            aria-modal="true"
            aria-label={`${active.n} · ${active.title}`}
            ref={panelRef}
            tabIndex={-1}
          >
            <button
              type="button"
              className="mc-modal-close"
              onClick={() => setActive(null)}
              aria-label="Cerrar"
            >
              ×
            </button>
            <span className="mc-modal-kicker">{active.n}</span>
            <h3 className="mc-modal-title">{active.title}</h3>
            <picture>
              <source media="(min-width: 769px)" srcSet={active.desktop} />
              <img
                src={active.mobile}
                alt={`Captura de ${active.title} en MiCarro`}
              />
            </picture>
            <p className="mc-modal-text">{active.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}