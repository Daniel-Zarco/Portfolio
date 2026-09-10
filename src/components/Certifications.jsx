import { certifications, sectionsIntro } from '../data';
import { SectionHeading } from './Projects';

export function CertificationsSection() {
  if (!certifications.length) return null;

  return (
    <section id="certificaciones" className="section">
      <div className="section-inner">
        <SectionHeading
          badge={sectionsIntro.certifications.badge}
          title={sectionsIntro.certifications.title}
          description={sectionsIntro.certifications.description}
        />

        <ul className="certifications-grid">
          {certifications.map((cert) => {
            const isLink = cert.url && cert.url !== '#';
            const Tag = isLink ? 'a' : 'div';

            return (
              <li key={cert.title} className="cert-card" data-reveal>
                <Tag
                  className="cert-card-link"
                  {...(isLink
                    ? {
                        href: cert.url,
                        target: '_blank',
                        rel: 'noopener noreferrer',
                        'data-cursor': true,
                      }
                    : {})}
                >
                  <span className="cert-card-issuer">{cert.issuer}</span>
                  <h3 className="cert-card-title">{cert.title}</h3>
                  <div className="cert-card-footer">
                    {cert.date && <span className="cert-card-date">{cert.date}</span>}
                    {isLink && (
                      <span className="cert-card-cta">
                        Ver credencial <span className="chip-link-arrow">↗</span>
                      </span>
                    )}
                  </div>
                </Tag>
              </li>
            );
          })}
        </ul>
      </div>
    </section>
  );
}
