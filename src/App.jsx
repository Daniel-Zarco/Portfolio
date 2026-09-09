import { useState, useEffect, useRef } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Preloader from './components/Preloader';
import Layout from './components/Layout';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Experiencia from './pages/Experiencia';
import Proyectos from './pages/Proyectos';
import Tecnologias from './pages/Tecnologias';
import './App.css';

export default function App() {
  const [started, setStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollYRef = useRef(null);

  useEffect(() => {
    const body = document.body;
    if (isMenuOpen) {
      scrollYRef.current = window.scrollY;
      body.style.position = 'fixed';
      body.style.top = `-${scrollYRef.current}px`;
      body.style.left = '0';
      body.style.right = '0';
      body.style.width = '100%';
      body.style.overflow = 'hidden';
    } else {
      body.style.position = '';
      body.style.top = '';
      body.style.left = '';
      body.style.right = '';
      body.style.width = '';
      body.style.overflow = '';
      if (scrollYRef.current !== null) {
        window.scrollTo(0, scrollYRef.current);
        scrollYRef.current = null;
      }
    }
  }, [isMenuOpen]);

  return (
    <>
      {!started && <Preloader onDone={() => setStarted(true)} />}

      {started && (
        <BrowserRouter>
          <Routes>
            <Route
              element={<Layout isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />}
            >
              <Route path="/" element={<Home />} />
              <Route path="/sobre-mi" element={<SobreMi />} />
              <Route path="/experiencia" element={<Experiencia />} />
              <Route path="/proyectos" element={<Proyectos />} />
              <Route path="/tecnologias" element={<Tecnologias />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}

      <Analytics />
    </>
  );
}
