import { useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { usePage } from '../hooks/usePage';
import useMediaQuery from '../hooks/useMediaQuery';
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

const TODOF1_SHOTS = '/project-previews/todof1';
const shot = (desktop, mobile) => ({
  desktop: `${TODOF1_SHOTS}/${desktop}`,
  mobile: `${TODOF1_SHOTS}/${mobile}`,
});

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
          <source media="(max-width: 768px)" srcSet={mobileSrc} />
        )}
        <img
          src={failed ? PLACEHOLDER_DESKTOP : desktopSrc}
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

function ProjectGallery({ shots, index, direction, onNavigate, alt }) {
  const total = shots.length;
  const current = shots[index];
  const multiple = total > 1;

  return (
    <div className={`mc-gallery${multiple ? ' is-multiple' : ''}`}>
      <div className="mc-gallery-frame">
        {multiple && (
          <button
            type="button"
            className="mc-gallery-nav mc-gallery-nav--prev"
            onClick={() => onNavigate(-1)}
            aria-label="Captura anterior"
          >
            ‹
          </button>
        )}
        {multiple ? (
          <button
            type="button"
            className="mc-gallery-hit"
            onClick={() => onNavigate(1)}
            aria-label="Ver siguiente captura"
            title="Siguiente captura"
          >
            <picture
              key={`${index}-${direction}`}
              className={`mc-gallery-picture${direction < 0 ? ' is-prev' : ''}`}
            >
              <source media="(max-width: 768px)" srcSet={current.mobile} />
              <img
                src={current.desktop}
                alt={`${alt} (${index + 1} de ${total})`}
                loading="eager"
              />
            </picture>
          </button>
        ) : (
          <picture className="mc-gallery-picture">
            <source media="(max-width: 768px)" srcSet={current.mobile} />
            <img src={current.desktop} alt={alt} loading="eager" />
          </picture>
        )}
        {multiple && (
          <button
            type="button"
            className="mc-gallery-nav mc-gallery-nav--next"
            onClick={() => onNavigate(1)}
            aria-label="Captura siguiente"
          >
            ›
          </button>
        )}
        {multiple && (
          <span className="mc-gallery-count" aria-live="polite">
            {index + 1} / {total}
          </span>
        )}
      </div>
    </div>
  );
}

const facts = [
  { key: 'Tipo', value: 'Full-Stack · Proyecto personal' },
  { key: 'Estado', value: 'Desplegado' },
  { key: 'Arquitectura', value: 'PHP · API REST · Caché' },
];

const features = [
  {
    n: '01',
    title: 'Temporadas',
    text: 'Selector de temporada desde 1950, resumen del campeonato y persistencia del año activo en la URL y en la sesión.',
    shots: [shot('Temporadas1Pc.png', 'Temporadas1Mv.png')],
  },
  {
    n: '02',
    title: 'Pilotos',
    text: 'Clasificación de pilotos, búsqueda por nombre, filtro por escudería y ficha con temporadas, victorias, podios y equipos.',
    shots: [
      shot('Pilotos1Pc.png', 'Pilotos1Mv.jpg'),
      shot('Pilotos2Pc.png', 'Pilotos2Mv.png'),
    ],
  },
  {
    n: '03',
    title: 'Escuderías',
    text: 'Copa de constructores, ordenación y fichas con puntos, victorias, podios, posición media y pilotos de la temporada.',
    shots: [
      shot('Escuderias1Pc.png', 'Escuderias1Mv.png'),
      shot('Escuderias2Pc.png', 'Escuderias2Mv.png'),
    ],
  },
  {
    n: '04',
    title: 'Circuitos',
    text: 'Calendario de Grandes Premios, búsqueda, filtro por país, trazados SVG, horarios de sesiones y resultados de carrera.',
    shots: [
      shot('Circuitos1Pc.png', 'Circuitos1Mv.png'),
      shot('Circuitos2Pc.png', 'Circuitos2Mv.png'),
    ],
  },
  {
    n: '05',
    title: 'Temas personalizados',
    text: 'Personalización de la interfaz con temas inspirados en las escuderías de Fórmula 1, adaptando los colores y elementos visuales al equipo seleccionado.',
    shots: [shot('Temas1Pc.png', 'Temas1Mv.png')],
  },
  {
    n: '06',
    title: 'Estadísticas',
    text: 'Dashboard con resumen, evolución del campeonato y comparador de pilotos, con gráficos y respaldo en tablas.',
    shots: [
      shot('Estadisticas1Pc.png', 'Estadisticas1Mv.png'),
      shot('Estadisticas2Pc.png', 'Estadisticas2Mv.png'),
      shot('Estadisticas3Pc.png', 'Estadisticas3Mv.png'),
    ],
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
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [active, setActive] = useState(null);
  const [shotIndex, setShotIndex] = useState(0);
  const [shotDirection, setShotDirection] = useState(1);
  const panelRef = useRef(null);

  const openFeature = (feature) => {
    setShotIndex(0);
    setShotDirection(1);
    setActive(feature);
  };

  const navigateShot = (delta) => {
    if (!active || active.shots.length < 2) return;
    setShotDirection(delta);
    setShotIndex(
      (current) => (current + delta + active.shots.length) % active.shots.length,
    );
  };

  useEffect(() => {
    if (!active) return;

    const previousActive = document.activeElement;
    const scrollY = window.scrollY;
    const body = document.body;
    const previousBodyStyles = {
      overflow: body.style.overflow,
      position: body.style.position,
      top: body.style.top,
      left: body.style.left,
      right: body.style.right,
      width: body.style.width,
    };

    body.style.overflow = 'hidden';

    if (isMobile) {
      body.style.position = 'fixed';
      body.style.top = `-${scrollY}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
    }

    panelRef.current?.focus();

    const onKey = (event) => {
      if (event.key === 'Escape') {
        setActive(null);
        return;
      }
      if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') {
        if (active.shots.length < 2) return;
        event.preventDefault();
        const delta = event.key === 'ArrowRight' ? 1 : -1;
        setShotDirection(delta);
        setShotIndex(
          (current) => (current + delta + active.shots.length) % active.shots.length,
        );
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
      document.removeEventListener('keydown', onKey);

      Object.entries(previousBodyStyles).forEach(([property, value]) => {
        body.style[property] = value;
      });

      if (isMobile) {
        const root = document.documentElement;
        const previousScrollBehavior = root.style.scrollBehavior;

        root.style.scrollBehavior = 'auto';
        if (previousActive instanceof HTMLElement) previousActive.focus();
        window.scrollTo(0, scrollY);
        root.style.scrollBehavior = previousScrollBehavior;
      } else if (previousActive instanceof HTMLElement) {
        previousActive.focus();
      }
    };
  }, [active, isMobile]);

  if (!project) return null;

  const modal = active ? (
    <div
      className="mc-modal mc-modal--case-study"
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
        <div className="mc-modal-body">
          <span className="mc-modal-kicker">{active.n}</span>
          <h3 className="mc-modal-title">{active.title}</h3>
          <ProjectGallery
            key={active.n}
            shots={active.shots}
            index={shotIndex}
            direction={shotDirection}
            onNavigate={navigateShot}
            alt={`Captura de ${active.title} en TodoF1`}
          />
          <p className="mc-modal-text">{active.text}</p>
        </div>
      </div>
    </div>
  ) : null;

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
              desktop={`${TODOF1_SHOTS}/VistaPreviaPc.png`}
              mobile={`${TODOF1_SHOTS}/VistaPreviaMv.png`}
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
                TodoF1 comenzó como un Trabajo de Fin de Grado y ha evolucionado
                hasta convertirse en una plataforma web para explorar la
                historia de la Fórmula 1, organizando la información por
                temporadas.
              </p>
              <p>
                La aplicación conecta campeonatos, pilotos, escuderías y
                circuitos mediante una navegación contextual que permite
                consultar estadísticas, resultados y clasificaciones de cada
                temporada.
              </p>
              <p>
                Incorpora un panel de administración protegido y un sistema de
                caché persistente que reduce las consultas externas y permite
                mantener disponibles los datos previamente almacenados ante
                posibles fallos de la API.
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
                onClick={() => openFeature(f)}
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
      {isMobile && modal ? createPortal(modal, document.body) : modal}
    </div>
  );
}
