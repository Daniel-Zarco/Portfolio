import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import { usePageTransition } from '../context/TransitionContext';

function ArrowUpRight() {
  return (
    <svg viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
      <polyline points="2.77 0 12 0 12 9.23" />
      <line x1="12" y1="0" x2="0" y2="12" />
    </svg>
  );
}

export function Arrow() {
  return <ArrowUpRight />;
}

function useNav() {
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

export default function Header({ isMenuOpen, onToggleMenu }) {
  const { go } = useNav();

  return (
    <header className={`nav-header${isMenuOpen ? ' nav-open' : ''}`}>
      <Link
        className="nav-logo"
        data-cursor
        to="/"
        aria-label="Volver al inicio"
        onClick={go('/')}
      >
        <img
          src="/dzs-logo.png"
          alt="DZS"
          className="nav-logo-img"
          width="658"
          height="264"
        />
      </Link>

      <nav className="nav-links" aria-label="Navegación principal">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link${isActive ? ' active' : ''}`}
              onClick={go(link.href)}
              data-cursor
            >
              <span className="nav-link-inner">
                <span className="nav-link-slip" data-text={link.label}>
                  {link.label}
                </span>
              </span>
            </Link>
          );
        })}
      </nav>

      <button
        className={`menu-toggle${isMenuOpen ? ' active' : ''}`}
        onClick={onToggleMenu}
        aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
        aria-expanded={isMenuOpen}
        data-cursor
      >
        <span className="menu-toggle-bars">
          <span />
          <span />
        </span>
        <span className="menu-toggle-text">{isMenuOpen ? 'Cerrar' : 'Menú'}</span>
      </button>
    </header>
  );
}

export function FullscreenMenu({ isOpen, onToggle }) {
  const location = useLocation();
  const { go } = useNav();

  return (
    <div className={`fullscreen-menu${isOpen ? ' active' : ''}`}>
      <div className="fullscreen-menu-backdrop" onClick={onToggle} />
      <nav className="fullscreen-menu-inner" aria-label="Menú móvil">
        <ul className="fullscreen-menu-list">
          {navLinks.map((link, i) => {
            const isActive = location.pathname === link.href;
            return (
              <li key={link.href} style={{ '--i': i }}>
                <Link
                  to={link.href}
                  className={`fullscreen-menu-link${isActive ? ' active' : ''}`}
                  onClick={(e) => {
                    onToggle();
                    go(link.href)(e);
                  }}
                  data-cursor
                >
                  <span className="menu-index">0{i + 1}</span>
                  <span className="menu-label">{link.label}</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
