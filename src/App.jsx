import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import Preloader from './components/Preloader';
import Layout from './components/Layout';
import Home from './pages/Home';
import SobreMi from './pages/SobreMi';
import Experiencia from './pages/Experiencia';
import Proyectos from './pages/Proyectos';
import Tecnologias from './pages/Tecnologias';
import Contacto from './pages/Contacto';
import './App.css';

export default function App() {
  const [started, setStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
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
              <Route path="/contacto" element={<Contacto />} />
            </Route>
          </Routes>
        </BrowserRouter>
      )}

      <Analytics />
    </>
  );
}
