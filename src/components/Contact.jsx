import { contact, contactSection, name } from '../data';

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="2.77 0 12 0 12 9.23" />
      <line x1="12" y1="0" x2="0" y2="12" />
    </svg>
  );
}

export function ContactSection() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-inner">
        <span className="section-badge section-badge-center" data-reveal>
          <span className="section-badge-dot" />
          Contacto
        </span>
        <h2 className="contact-title" data-split="chars" data-reveal>
          {contactSection.title}
        </h2>
        <p className="contact-description" data-reveal>
          {contactSection.description}
        </p>

        <div className="contact-actions" data-reveal>
          <a
            href={contact.emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary"
            data-cursor
          >
            <span className="btn-fill" />
            <span className="btn-text" data-text={contact.emailLabel}>
              <span className="btn-text-inner">{contact.emailLabel}</span>
            </span>
          </a>
          <a href={contact.phoneHref} className="btn btn-secondary btn-round-full" data-cursor>
            <span className="btn-fill" />
            <span className="btn-text" data-text={contact.phoneLabel}>
              <span className="btn-text-inner">{contact.phoneLabel}</span>
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-cta">
          <a
            href={contact.emailHref}
            target="_blank"
            rel="noopener noreferrer"
            className="footer-email"
            data-cursor
          >
            d.zarcosastre@gmail.com
            <span className="footer-email-arrow">
              <ArrowUpRight />
            </span>
          </a>
        </div>

        <div className="footer-bottom">
          <div className="footer-socials">
            <a
              href={contact.githubHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              data-cursor
            >
              GitHub <span>↗</span>
            </a>
            <a
              href={contact.linkedinHref}
              target="_blank"
              rel="noopener noreferrer"
              className="footer-link"
              data-cursor
            >
              LinkedIn <span>↗</span>
            </a>
            <a href={contact.phoneHref} className="footer-link" data-cursor>
              {contact.phoneLabel}
            </a>
          </div>

          <div className="footer-credits">
            <p>
              © {year} {name} · Madrid
            </p>
            <p className="footer-edition">Versión 2026</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
