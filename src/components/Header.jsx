import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';

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

export default function Header({ isMenuOpen, onToggleMenu, setIsMenuOpen }) {
  const location = useLocation();

  return (
    <header className={`nav-header${isMenuOpen ? ' nav-open' : ''}`}>
      <Link
        className="nav-logo"
        data-cursor
        to="/"
        aria-label="Volver al inicio"
        onClick={() => setIsMenuOpen(false)}
      >
        <span className="nav-logo-mark">©</span>
        <span className="nav-logo-name">Daniel Zarco Sastre</span>
      </Link>

      <nav className="nav-links" aria-label="Navegación principal">
        {navLinks.map((link) => {
          const isActive = location.pathname === link.href;
          return (
            <Link
              key={link.href}
              to={link.href}
              className={`nav-link${isActive ? ' active' : ''}`}
              onClick={() => setIsMenuOpen(false)}
              data-cursor
            >
              <span className="nav-link-inner" data-text={link.label}>
                {link.label}
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
                  onClick={onToggle}
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
