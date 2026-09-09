import { Link } from 'react-router-dom';
import { hero } from '../data';

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="2.77 0 12 0 12 9.23" />
      <line x1="12" y1="0" x2="0" y2="12" />
    </svg>
  );
}

export default function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-inner">
        <div className="hero-top">
          <span className="hero-badge">
            <span className="hero-badge-arrow">
              <ArrowUpRight />
            </span>
            {hero.badge}
          </span>
          <p className="hero-location">{hero.location}</p>
        </div>

        <h1 className="hero-name no-select">
          <span className="hero-name-line">
            <span className="hero-name-inner" data-split="chars">
              Daniel Zarco
            </span>
          </span>
          <span className="hero-name-line">
            <span className="hero-name-inner" data-split="chars">
              Sastre
            </span>
          </span>
        </h1>

        <div className="hero-lower">
          <div className="hero-subtitle-wrap">
            <span className="hero-subtitle-arrow">
              <ArrowUpRight />
            </span>
            <h2 className="hero-subtitle">{hero.subtitle}</h2>
          </div>

          <div className="hero-aside">
            <p data-split="lines" className="hero-description">
              {hero.description}
            </p>

            <div className="hero-actions">
              {hero.actions.map((a) => {
                const isExternal = a.href.startsWith('http') || a.href.startsWith('mailto') || a.href.startsWith('tel');
                const BtnText = (
                  <>
                    <span className="btn-fill" />
                    <span className="btn-text" data-text={a.label}>
                      <span className="btn-text-inner">{a.label}</span>
                    </span>
                  </>
                );
                if (isExternal) {
                  return (
                    <a
                      key={a.label}
                      href={a.href}
                      className={a.primary ? 'btn btn-primary' : 'btn btn-secondary'}
                      target="_blank"
                      rel="noopener noreferrer"
                      data-cursor
                    >
                      {BtnText}
                    </a>
                  );
                }
                return (
                  <Link
                    key={a.label}
                    to={a.href}
                    className={a.primary ? 'btn btn-primary' : 'btn btn-secondary'}
                    data-cursor
                  >
                    {BtnText}
                  </Link>
                );
              })}
            </div>
          </div>
        </div>

        <ul className="hero-stack" data-reveal>
          {hero.stack.map((s) => (
            <li key={s} className="hero-stack-item">
              {s}
            </li>
          ))}
        </ul>
      </div>

      <div className="hero-scroll-hint no-select" aria-hidden="true">
        <span className="hero-scroll-line" />
        <span className="hero-scroll-text">Scroll</span>
      </div>
    </section>
  );
}
