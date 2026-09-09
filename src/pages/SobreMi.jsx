import { usePage } from '../hooks/usePage';
import { about } from '../data';

const focusCards = [
  {
    title: 'Desarrollo',
    tone: 'dev',
    text: 'Trabajo en proyectos donde la interacción, la lógica condicional y el tratamiento de datos tienen un papel clave.',
  },
  {
    title: 'Datos + IA',
    tone: 'ai',
    text: 'Formación y proyectos enfocados en procesamiento de datos, automatización e integración de IA en aplicaciones web.',
  },
  {
    title: 'Aprendizaje',
    tone: 'learn',
    text: 'He completado el Curso de Especialización en IA y Big Data y ya estoy titulado; sigo aprendiendo en cada proyecto.',
  },
];

export default function SobreMi() {
  usePage();

  return (
    <section className="section sm">
      <div className="sm-inner">
        <header className="sm-hero" data-reveal>
          <span className="section-badge">
            <span className="section-badge-dot" />
            Sobre mí
          </span>
          <h1 className="sm-hero-title">
            Desarrollo web, datos e IA.
            <br />
            <span className="sm-hero-title-accent">
              Aprendiendo y construyendo.
            </span>
          </h1>
        </header>

        <section className="sm-bio" aria-label="Presentación" data-reveal>
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </section>

        <aside className="sm-aside" aria-label="Perfil" data-reveal data-reveal-delay="120">
          <div className="sm-profile">
            <h2>{about.profile.name}</h2>
            <p>{about.profile.role}</p>
          </div>
          <dl className="sm-details">
            {about.profile.details.map((detail) => (
              <div key={detail.label} className="sm-detail">
                <dt>{detail.label}</dt>
                <dd>{detail.value}</dd>
              </div>
            ))}
          </dl>
        </aside>

        <section className="sm-section" aria-label="Un poco más sobre mí">
          <h2 className="sm-section-title" data-reveal>
            Un poco más sobre mí
          </h2>
          <div className="sm-focus">
            {focusCards.map((card, index) => (
              <article
                key={card.title}
                className={`sm-card sm-card--${card.tone}`}
                data-reveal
                data-reveal-delay={`${index * 100}`}
              >
                <h3>{card.title}</h3>
                <p>{card.text}</p>
              </article>
            ))}
          </div>
        </section>
      </div>
    </section>
  );
}