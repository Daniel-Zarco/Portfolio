import { useState, useCallback, useEffect } from 'react';
import { Analytics } from '@vercel/analytics/react';
import { useReveal } from './hooks/useReveal';
import { useCursor } from './hooks/useCursor.jsx';
import { useTextSplit } from './hooks/useTextSplit';
import Preloader from './components/Preloader';
import Header, { FullscreenMenu } from './components/Header';
import Hero from './components/Hero';
import { ProjectsSection } from './components/Projects';
import {
  AboutSection,
  ExperienceSection,
  SkillsSection,
  EducationSection,
} from './components/About';
import { ContactSection, Footer } from './components/Contact';
import './App.css';

export default function App() {
  const [started, setStarted] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useReveal();
  useTextSplit();
  const cursor = useCursor();

  const handlePreloaderDone = useCallback(() => {
    setStarted(true);
    document.documentElement.classList.add('site-ready');
  }, []);

  const handleNavClick = useCallback((e) => {
    const href = e.currentTarget.getAttribute('href') || e.currentTarget.dataset.href;
    if (!href || !href.startsWith('#')) return;
    const target = document.querySelector(href);
    if (!target) return;
    e.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    setIsMenuOpen(false);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMenuOpen]);

  return (
    <>
      {cursor}
      <Preloader onDone={handlePreloaderDone} />

      <div className={`site${started ? ' started' : ''}`}>
        <Header
          isMenuOpen={isMenuOpen}
          onToggleMenu={() => setIsMenuOpen((v) => !v)}
          onNavClick={handleNavClick}
        />
        <FullscreenMenu isOpen={isMenuOpen} onNavClick={handleNavClick} onToggle={() => setIsMenuOpen(false)} />

        <main>
          <Hero />
          <ProjectsSection />
          <AboutSection />
          <ExperienceSection />
          <SkillsSection />
          <EducationSection />
          <ContactSection />
        </main>

        <Footer />
      </div>

      <Analytics />
    </>
  );
}
