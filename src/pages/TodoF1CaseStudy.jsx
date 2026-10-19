import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { usePage } from '../hooks/usePage';
import { projects } from '../data';

const project = projects.find((p) => p.slug === 'todof1');

const makePlaceholder = (width, height) =>
  `data:image/svg+xml;charset=utf-8,${encodeURIComponent(`
<svg xmlns="http://www.w3.org/2000/svg" width="${width}" height="${height}" viewBox="0 0 ${width} ${height}">
  <defs>
    <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
      <path d="M80 0H0V80" fill="none" stroke="#E3ECF4" stroke-width="1" />
    </pattern>
  </defs>
  <rect width="${width}" height="${height}" fill="#F7FAFC" />
  <rect width="${width}" height="${height}" fill="url(#grid)" />
  <rect x="${width * 0.07}" y="${height * 0.11}" width="${width * 0.86}" height="${height * 0.78}" rx="24" fill="none" stroke="#D9E5EF" stroke-width="2" stroke-dasharray="10 12" />
</svg>
`)}`;

const PLACEHOLDER_DESKTOP = makePlaceholder(1600, 900);
const PLACEHOLDER_MOBILE = makePlaceholder(800, 1000);

function ProjectPicture({
  desktop,
  mobile,
  alt,
  label = 'Vista previa',
  title = 'Captura pendiente',
  meta = 'Desktop y móvil',
  compact = false,
}) {
  const [failed, setFailed] = useState(false);
  const desktopSrc = desktop || mobile || PLACEHOLDER_DESKTOP;
  const mobileSrc = mobile || desktop || PLACEHOLDER_MOBILE;
  const showPlaceholder = !desktop && !mobile ? true : failed;

  return (
    <figure
      className={`mc-shot${showPlaceholder ? ' is-placeholder' : ''}${
        compact ? ' mc-shot--compact' : ''
      }`}
    >
      <picture>
        {!failed && (
          <source media="(min-width: 769px)" srcSet={desktopSrc} />
        )}
        <img
          src={failed ? PLACEHOLDER_MOBILE : mobileSrc}
          alt={showPlaceholder ? '' : alt}
          loading="lazy"
          onError={() => setFailed(true)}
        />
      </picture>
      {showPlaceholder && (
        <figcaption className="mc-shot-label">
          <span className="mc-shot-kicker">{label}</span>
          <strong>{title}</strong>
          <span className="mc-shot-meta">{meta}</span>
        </figcaption>
      )}
    </figure>
  );
}

const facts = [
  { key: 'Tipo', value: 'TFG · Full-Stack' },
  { key: 'Estado', value: 'Desplegado' },
  { key: 'Arquitectura', value: 'PHP + proxy de datos' },
];

const features = [
  {
    n: '01',
    title: 'Temporadas',
    text: 'Selector de temporada desde 1950, resumen del campeonato y persistencia del año activo en la URL y en la sesión.',
    desktop: null,
    mobile: null,
  },
  {
    n: '02',
    title: 'Pilotos',
    text: 'Clasificación de pilotos, búsqueda por nombre, filtro por escudería y ficha con temporadas, victorias, podios y equipos.',
    desktop: null,
    mobile: null,
  },
  {
    n: '03',
    title: 'Escuderías',
    text: 'Copa de constructores, ordenación y fichas con puntos, victorias, podios, posición media y pilotos de la temporada.',
    desktop: null,
    mobile: null,
  },
  {
    n: '04',
    title: 'Circuitos',
    text: 'Calendario de Grandes Premios, búsqueda, filtro por país, trazados SVG, horarios de sesiones y resultados de carrera.',
    desktop: null,
    mobile: null,
  },
  {
    n: '05',
    title: 'Clasificaciones',
    text: 'Tablas completas de pilotos y constructores con acceso directo a cada ficha desde la propia clasificación.',
    desktop: null,
    mobile: null,
  },
  {
    n: '06',
    title: 'Estadísticas',
    text: 'Dashboard con resumen, evolución del campeonato y comparador de pilotos, con gráficos y respaldo en tablas.',
    desktop: null,
    mobile: null,
  },
];

const dataFlow = [
  {
    title: 'Temporada activa',
    text: 'El año viaja en la URL, se guarda en sessionStorage y cada página vuelve a consultar los datos de esa temporada.',
  },
  {
    title: 'Consultas',
    text: 'Las páginas piden clasificaciones, calendarios y resultados a Jolpica, paginando los endpoints que limitan a 100 registros.',
  },
  {
    title: 'Relaciones',
    text: 'Las estadísticas de carrera relacionan piloto, escudería y Gran Premio mediante claves foráneas en MariaDB.',
  },
  {
    title: 'Procesamiento',
    text: 'Victorias, podios, mejor resultado y equipos se agregan a partir de los resultados; la evolución usa la clasificación oficial de cada ronda.',
  },
];

const devFront = [
  'HTML5',
  'CSS3 · design system',
  'JavaScript modular (IIFE)',
  'Fetch API + paginación',
  'Chart.js',
  'sessionStorage / localStorage',
];

const devBackend = [
  'PHP 8.2',
  'Laravel 12',
  'Artisan f1:importar',
  'F1ApiService',
  'Proxy /api/f1.php',
  'Endpoints PHP de sesión y datos',
];

const devData = [
  'MariaDB',
  'Migraciones Laravel',
  'Eloquent ORM',
  'Claves foráneas',
  'IDs externos de Jolpica',
  'Importación por temporada',
];

const stack = [
  'PHP 8.2',
  'Laravel 12',
  'JavaScript',
  'HTML5',
  'CSS3',
  'MariaDB',
  'Eloquent',
  'Chart.js',
  'Jolpica API',
  'GitHub Actions',
  'alwaysdata',
];

export default function TodoF1CaseStudy() {
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
            TodoF1
          </h1>
          <p className="mc-status" data-reveal>
            {project.status}
          </p>
          <p className="mc-lead" data-reveal>
            Plataforma web para consultar la Fórmula 1 temporada a temporada.
            Combina páginas PHP con JavaScript propio, un proxy de datos con
            caché persistente y una base MariaDB alimentada mediante un
            importador de Laravel.
          </p>
          <div className="mc-hero-meta" data-reveal>
            <ul className="mc-tech">
              {project.tech.map((t) => (
                <li key={t} className="tech-tag">
                  {t}
                </li>
              ))}
            </ul>
            <div className="mc-cta">
              <a
                className="mc-cta-primary"
                href={project.demo}
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

      {/* ============ VISTA PREVIA ============ */}
      <section className="section mc-preview">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Vista previa
          </h2>
          <div data-reveal>
            <ProjectPicture
              alt="Captura de la aplicación TodoF1"
              label="Vista previa"
              title="Captura pendiente"
              meta="Desktop 16:9 · Móvil 4:5"
            />
          </div>
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
                TodoF1 nace como TFG con un objetivo: reunir en una sola
                plataforma la información histórica de la Fórmula 1 y hacerla
                navegable por temporada.
              </p>
              <p>
                La aplicación permite pasar de una visión global del campeonato
                a la ficha de un piloto, una escudería o un circuito, sin perder
                el contexto del año seleccionado.
              </p>
              <p>
                Incluye un panel de administración protegido con estadísticas
                agregadas de los registros, además de una capa de respaldo para
                que los datos sigan disponibles si la API externa no responde.
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
            <span className="mc-node">Navegador</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">PHP + JavaScript</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">/api/f1.php</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node">Jolpica</span>
          </div>
          <div className="mc-flow mc-flow--sub" data-reveal>
            <span className="mc-node mc-node--muted">Artisan f1:importar</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node mc-node--muted">F1ApiService</span>
            <span className="mc-arrow">→</span>
            <span className="mc-node mc-node--muted">MariaDB</span>
          </div>
          <div className="mc-architecture-notes" data-reveal>
            <span>Proxy con caché persistente</span>
            <span>Importación por temporada</span>
            <span>Eloquent + claves foráneas</span>
          </div>
          <p className="mc-motor-text" data-reveal>
            La interfaz son páginas PHP con JavaScript propio. Laravel aporta el
            esqueleto del proyecto, el comando de importación y el modelo de
            datos; el proxy /api/f1.php centraliza las consultas a Jolpica. Cada
            petición se valida contra una lista blanca de rutas y se guarda en
            caché; si el proveedor falla, se sirve la última copia válida en
            lugar de dejar la vista sin datos. MariaDB conserva los datos
            históricos importados y las tablas de usuarios y registros.
          </p>
        </div>
      </section>

      {/* ============ DATOS Y LÓGICA ============ */}
      <section className="section mc-motor">
        <div className="section-inner">
          <h2 className="mc-h2" data-reveal>
            Datos y lógica
          </h2>
          <ol className="mc-motor-flow" data-reveal>
            {dataFlow.map((step, i) => (
              <li key={step.title} data-reveal data-reveal-delay={`${i * 60}`}>
                <span className="mc-motor-step">{step.title}</span>
                <p className="mc-motor-desc">{step.text}</p>
              </li>
            ))}
          </ol>
          <p className="mc-motor-text" data-reveal>
            La organización es multitemporada: el año seleccionado se propaga en
            la URL y en sessionStorage, y cada vista vuelve a consultar los
            endpoints correspondientes. En la base de datos, cada registro de
            z_stats_carrera relaciona un piloto, una escudería y un Gran Premio;
            los identificadores externos de Jolpica son únicos y la pareja
            temporada-ronda identifica cada prueba. Las estadísticas de piloto y
            escudería se calculan agregando resultados paginados, mientras que la
            evolución del campeonato utiliza las clasificaciones oficiales
            publicadas tras cada ronda, sin recalcular puntos históricos.
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
              <h3>Base de datos</h3>
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
            Stack tecnológico
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
            <h2 className="mc-h2">Explora TodoF1</h2>
            <p className="mc-close-text">
              Elige una temporada y recorre el campeonato desde sus
              clasificaciones hasta la ficha de cada piloto, escudería y
              circuito.
            </p>
            <div className="mc-cta">
              <a
                className="mc-cta-primary"
                href={project.demo}
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
            <ProjectPicture
              key={active.n}
              desktop={active.desktop}
              mobile={active.mobile}
              alt={`Captura de ${active.title} en TodoF1`}
              label="Funcionalidad"
              title="Captura pendiente"
              meta="Desktop y móvil"
              compact
            />
            <p className="mc-modal-text">{active.text}</p>
          </div>
        </div>
      )}
    </div>
  );
}
