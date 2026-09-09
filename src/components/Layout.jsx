import {
  useCallback,
  useEffect,
  useState,
} from 'react';
import { useLocation, useNavigate, Outlet } from 'react-router-dom';
import Header, { FullscreenMenu } from '../components/Header';
import { Footer } from '../components/Contact';
import Chatbot from '../components/Chatbot';
import { useCursor } from '../hooks/useCursor.jsx';
import { TransitionContext } from '../context/TransitionContext';
import { navLinks, name } from '../data';

/* Etiquetas reutilizadas de la navegación actual (sin inventar nombres) */
const PAGE_LABELS = {
  '/': name,
  ...Object.fromEntries(navLinks.map((l) => [l.href, l.label])),
};

const ENTER_MS = 520;
const EXIT_MS = 640;

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return null;
}

export default function Layout({ isMenuOpen, setIsMenuOpen }) {
  const cursor = useCursor();
  const location = useLocation();
  const navigate = useNavigate();
  const [transition, setTransition] = useState({
    phase: 'idle',
    label: '',
    to: '',
  });

  const transitionTo = useCallback(
    (to) => {
      setIsMenuOpen(false);
      if (to === location.pathname) return;
      setTransition((state) => {
        if (state.phase !== 'idle') return state;
        return { phase: 'enter', label: PAGE_LABELS[to] || '', to };
      });
    },
    [location.pathname, setIsMenuOpen]
  );

  useEffect(() => {
    if (transition.phase === 'enter') {
      const t = setTimeout(() => {
        navigate(transition.to);
        setTransition((s) => ({ ...s, phase: 'exit' }));
      }, ENTER_MS);
      return () => clearTimeout(t);
    }
    if (transition.phase === 'exit') {
      const t = setTimeout(
        () => setTransition({ phase: 'idle', label: '', to: '' }),
        EXIT_MS
      );
      return () => clearTimeout(t);
    }
  }, [transition.phase, transition.to, navigate]);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [location.pathname, setIsMenuOpen]);

  return (
    <TransitionContext.Provider value={transitionTo}>
      {cursor}
      <ScrollToTop />

      {transition.phase !== 'idle' && (
        <div
          className={`page-transition pt-${transition.phase}`}
          aria-hidden="true"
        >
          <div className="pt-panel pt-panel-top" />
          <div className="pt-word">
            <span>{transition.label}</span>
          </div>
          <div className="pt-panel pt-panel-bottom" />
        </div>
      )}

      <div className="site started">
        <Header
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((v) => !v)}
        />
        <FullscreenMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(false)} />

        <main key={location.pathname}>
          <Outlet />
        </main>

        <Footer />
      </div>
      <Chatbot />
    </TransitionContext.Provider>
  );
}
