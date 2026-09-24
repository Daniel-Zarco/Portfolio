import { Link, useLocation } from 'react-router-dom';
import { projects, sectionsIntro } from '../data';
import { usePageTransition } from '../context/TransitionContext';

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="2.77 0 12 0 12 9.23" />
      <line x1="12" y1="0" x2="0" y2="12" />
    </svg>
  );
}

function SectionHeading({ badge, title, description }) {
  return (
    <div className="section-heading" data-reveal>
      <span className="section-badge">
        <span className="section-badge-dot" />
        {badge}
      </span>
      <h2 className="section-title">{title}</h2>
      {description && <p className="section-description">{description}</p>}
    </div>
  );
}

export { SectionHeading };

function useDetailNav() {
  const transitionTo = usePageTransition();
  const location = useLocation();

  const go = (to) => (e) => {
    if (!to.startsWith('/')) return;
    e.preventDefault();
    if (to === location.pathname) {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }
    transitionTo?.(to);
  };

  return { go };
}

export function ProjectsSection() {
  const { go } = useDetailNav();

  return (
    <section id="proyectos" className="section">
      <div className="section-inner">
        <SectionHeading
          badge={sectionsIntro.projects.badge}
          title={sectionsIntro.projects.title}
          description={sectionsIntro.projects.description}
        />

        <ul className="work-list">
          {projects.map((project, i) => {
            const isDetail = project.detail && project.detail.startsWith('/');
            const isLink = project.link && project.link !== '#' && !isDetail;
            const Tag = isDetail ? Link : isLink ? 'a' : 'div';

            return (
              <li key={project.title} className="work-item" data-reveal data-cursor>
                <Tag
                  className="work-item-link"
                  {...(isDetail
                    ? { to: project.detail, onClick: go(project.detail) }
                    : isLink
                    ? { href: project.link, target: '_blank', rel: 'noopener noreferrer' }
                    : {})}
                >
                  <span className="work-item-stripe" />
                  <span className="work-item-index">0{i + 1}</span>
                  <span className="work-item-title">
                    <span className="work-item-title-inner">{project.title}</span>
                  </span>
                  <span className="work-item-status">{project.status}</span>
                  <span className="work-item-arrow">
                    <ArrowUpRight />
                  </span>
                </Tag>

                <div className="work-item-meta">
                  <p className="work-item-desc">{project.description}</p>
                  <div className="work-item-tech-row">
                    <ul className="work-item-tech">
                      {project.tech.map((t) => (
                        <li key={t} className="tech-tag">
                          {t}
                        </li>
                      ))}
                    </ul>
                    <div className="work-item-links">
                      {project.github && (
                        <a
                          href={project.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip-link"
                          data-cursor
                        >
                          GitHub <span className="chip-link-arrow">↗</span>
                        </a>
                      )}
                      {project.link && project.link !== '#' && !project.github && (
                        <a
                          href={project.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip-link"
                          data-cursor
                        >
                          {project.linkLabel || 'GitHub'}{' '}
                          <span className="chip-link-arrow">↗</span>
                        </a>
                      )}
                      {project.demo && (
                        <a
                          href={project.demo}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="chip-link"
                          data-cursor
                        >
                          {project.demoLabel || 'Demo'}{' '}
                          <span className="chip-link-arrow">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
