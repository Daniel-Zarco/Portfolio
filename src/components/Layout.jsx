import { useEffect } from 'react';
import { useLocation, Outlet } from 'react-router-dom';
import Header, { FullscreenMenu } from '../components/Header';
import { Footer } from '../components/Contact';
import { useCursor } from '../hooks/useCursor.jsx';

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

  return (
    <>
      {cursor}
      <ScrollToTop />
      <div className="site started">
        <Header
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((v) => !v)}
          setIsMenuOpen={setIsMenuOpen}
        />
        <FullscreenMenu isOpen={isMenuOpen} onToggle={() => setIsMenuOpen(false)} />

        <main key={location.pathname}>
          <Outlet />
        </main>

        <Footer />
      </div>
    </>
  );
}
