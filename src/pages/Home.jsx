import { usePage } from '../hooks/usePage';
import { Link, useLocation } from 'react-router-dom';
import { navLinks } from '../data';
import { usePageTransition } from '../context/TransitionContext';

export default function Home() {
  usePage();
  const transitionTo = usePageTransition();
  const location = useLocation();

  return (
    <div className="page home-landing">
      <nav className="home-navigation" aria-label="Secciones del portfolio">
        <ul className="home-navigation-list">
          {navLinks.map((link, index) => (
            <li key={link.href} className="home-navigation-item">
              <Link
                to={link.href}
                className="home-navigation-link"
                data-cursor
                onClick={(event) => {
                  event.preventDefault();
                  if (link.href === location.pathname) return;
                  transitionTo?.(link.href);
                }}
              >
                <span className="home-navigation-index">0{index + 1}</span>
                <span className="home-navigation-label">{link.label}</span>
                <span className="home-navigation-arrow">↗</span>
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
