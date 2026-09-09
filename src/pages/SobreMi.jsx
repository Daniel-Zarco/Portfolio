import { usePage } from '../hooks/usePage';
import { about, education, experience } from '../data';

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
    text: 'Sigo ampliando mi perfil con formación en Inteligencia Artificial y Big Data.',
  },
];

const journey = [
  {
    period: education[2].date,
    title: education[2].title,
    detail: education[2].institution,
  },
  {
    period: education[1].date,
    title: education[1].title,
    detail: education[1].institution,
  },
  {
    period: experience[0].period,
    title: experience[0].role,
    detail: experience[0].company,
  },
  {
    period: education[0].date,
    title: education[0].title,
    detail: education[0].institution,
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

        <div className="sm-grid">
          <div className="sm-bio" data-reveal>
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>

          <aside className="sm-aside" data-reveal data-reveal-delay="120">
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
        </div>

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

        <section className="sm-section" aria-label="Mi recorrido">
          <h2 className="sm-section-title" data-reveal>
            Mi recorrido
          </h2>
          <div className="sm-journey" data-reveal>
            <ol className="sm-timeline">
              {journey.map((milestone, index) => (
                <li key={index} className="sm-timeline-item">
                  <span className="sm-timeline-dot" />
                  <span className="sm-timeline-period">{milestone.period}</span>
                  <h3>{milestone.title}</h3>
                  <p>{milestone.detail}</p>
                </li>
              ))}
            </ol>
            <p className="sm-journey-note">
              También he colaborado técnicamente en{' '}
              {experience[1].company.split(' ·')[0]} y realicé prácticas como{' '}
              {experience[2].role.toLowerCase()} en {experience[2].company.split(' ·')[0]}.
            </p>
          </div>
        </section>
      </div>
    </section>
  );
}
