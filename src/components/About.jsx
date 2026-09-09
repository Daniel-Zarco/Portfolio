import { about, experience, skills, education, sectionsIntro } from '../data';
import { SectionHeading } from './Projects';

export function AboutSection() {
  return (
    <section id="sobre-mi" className="section">
      <div className="section-inner">
        <SectionHeading
          badge={sectionsIntro.about.badge}
          title={sectionsIntro.about.title}
        />

        <div className="about-grid">
          <div className="about-content" data-reveal>
            {about.paragraphs.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>

          <aside className="profile-card" data-reveal data-reveal-delay="120">
            <span className="section-badge">
              <span className="section-badge-dot" />
              {about.profile.badge}
            </span>
            <h3 className="profile-card-name">{about.profile.name}</h3>
            <p className="profile-card-role">{about.profile.role}</p>

            <dl className="profile-details">
              {about.profile.details.map((d) => (
                <div key={d.label} className="profile-detail">
                  <dt>{d.label}</dt>
                  <dd>{d.value}</dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </div>
    </section>
  );
}

export function ExperienceSection() {
  return (
    <section id="experiencia" className="section">
      <div className="section-inner">
        <SectionHeading
          badge={sectionsIntro.experience.badge}
          title={sectionsIntro.experience.title}
        />

        <div className="experience-list">
          {experience.map((job, i) => (
            <article className="experience-item" key={i} data-reveal>
              <div className="experience-head">
                <span className="experience-index">0{i + 1}</span>
                <div className="experience-role-wrap">
                  <h3 className="experience-role">{job.role}</h3>
                  <a
                    className="experience-company"
                    href={job.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    data-cursor
                  >
                    {job.company} <span className="experience-company-arrow">↗</span>
                  </a>
                  {job.period && <p className="experience-period">{job.period}</p>}
                </div>
              </div>
              <ul className="experience-points">
                {job.points.map((point, pIdx) => (
                  <li key={pIdx}>
                    <span className="experience-dot" />
                    {point}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

export function SkillsSection() {
  return (
    <section id="skills" className="section">
      <div className="section-inner">
        <SectionHeading
          badge={sectionsIntro.skills.badge}
          title={sectionsIntro.skills.title}
        />

        <div className="skills-grid">
          {Object.entries(skills).map(([category, items], i) => (
            <div
              key={category}
              className="skill-category"
              data-reveal
              data-reveal-delay={`${(i % 4) * 90}`}
            >
              <h4 className="skill-category-title">
                <span className="skill-category-index">0{i + 1}</span>
                {category}
              </h4>
              <ul className="skill-tags">
                {items.map((item) => (
                  <li key={item} className="skill-tag">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export function EducationSection() {
  return (
    <section id="formacion" className="section">
      <div className="section-inner">
        <SectionHeading
          badge={sectionsIntro.education.badge}
          title={sectionsIntro.education.title}
        />

        <div className="education-list">
          {education.map((item, i) => (
            <a
              key={i}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="education-item"
              data-reveal
              data-cursor
            >
              <span className="education-index">0{i + 1}</span>
              <span className="education-body">
                <h3 className="education-title">{item.title}</h3>
                <p className="education-meta">
                  {item.institution} · {item.date}
                </p>
              </span>
              <span className="education-arrow">↗</span>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
