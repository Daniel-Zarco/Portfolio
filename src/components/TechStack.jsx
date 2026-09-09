import { SectionHeading } from './Projects';
import { sectionsIntro } from '../data';

const blocks = [
  {
    key: 'lang',
    title: 'Lenguajes y base web',
    tags: ['JavaScript', 'TypeScript', 'Java', 'PHP', 'Python', 'SQL', 'HTML', 'CSS'],
  },
  {
    key: 'frontend',
    title: 'Frontend',
    tags: ['Angular', 'Tailwind CSS', 'Bootstrap', 'jQuery', 'Blade', 'Alpine.js'],
  },
  {
    key: 'backend',
    title: 'Backend y datos',
    tags: ['Laravel', 'FastAPI', 'PostgreSQL', 'MySQL', 'SQL Server', 'MongoDB', 'Supabase'],
  },
  {
    key: 'tools',
    title: 'Herramientas',
    tags: ['Git', 'GitHub', 'Docker', 'LimeSurvey', 'Prometheus', 'Grafana'],
  },
  {
    key: 'ai',
    title: 'IA & Big Data',
    tags: ['Python', 'Pandas', 'PySpark', 'Spark', 'ETL', 'Power BI', 'Ollama', 'LLaVA'],
    lead: 'Formación y proyectos enfocados en procesamiento de datos, automatización e integración de IA en aplicaciones web.',
    wide: true,
  },
  {
    key: 'profile',
    title: 'Perfil',
    tags: ['Lógica de datos', 'Automatización', 'Validación en tiempo real', 'Interacción web'],
    compact: true,
  },
];

export default function TechStack() {
  return (
    <section className="section">
      <div className="section-inner">
        <div className="section-heading" data-reveal>
          <span className="section-badge">
            <span className="section-badge-dot" />
            {sectionsIntro.skills.badge}
          </span>
          <h2 className="section-title">{sectionsIntro.skills.title}</h2>
        </div>

        <div className="techstack">
          <div className="techstack-grid">
            {blocks.map((block, index) => (
              <article
                key={block.key}
                className={[
                  'tech-card',
                  `tech-card--${block.key}`,
                  block.wide ? 'tech-card--wide' : '',
                  block.compact ? 'tech-card--compact' : '',
                ]
                  .filter(Boolean)
                  .join(' ')}
                data-reveal
                data-reveal-delay={`${(index % 3) * 90}`}
              >
                <h3 className="tech-card-title">
                  <span className="tech-card-index">
                    {String(index + 1).padStart(2, '0')}
                  </span>
                  {block.title}
                </h3>
                {block.lead && <p className="tech-card-lead">{block.lead}</p>}
                <ul className="tech-card-tags">
                  {block.tags.map((tag) => (
                    <li key={tag} className="tech-chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
