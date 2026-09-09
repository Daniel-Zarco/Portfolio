import { useEffect, useRef, useState } from 'react';

const words = [
  'Hola',
  'Hello',
  'Bonjour',
  'Ciao',
  'Olá',
  'Hallo',
  'Salve',
  '你好',
];

export default function Preloader({ onDone }) {
  const [done, setDone] = useState(false);
  const containerRef = useRef(null);

  useEffect(() => {
    let wordTimer;
    let doneTimer;

    // Alterna palabras
    const wordEls = containerRef.current.querySelectorAll('.pre-word');
    let idx = 0;
    const showNext = () => {
      wordEls.forEach((el) => el.classList.remove('active'));
      if (wordEls[idx]) wordEls[idx].classList.add('active');
      idx = (idx + 1) % wordEls.length;
      wordTimer = setTimeout(showNext, 320);
    };
    showNext();

    doneTimer = setTimeout(() => {
      setDone(true);
      setTimeout(() => onDone(), 900);
    }, 1500);

    return () => {
      clearTimeout(wordTimer);
      clearTimeout(doneTimer);
    };
  }, [onDone]);

  return (
    <div ref={containerRef} className={`preloader${done ? ' done' : ''}`} aria-hidden={!done}>
      <div className="preloader-inner">
        <div className="preloader-word">
          {words.map((w, i) => (
            <span key={w} className={`pre-word${i === 0 ? ' active' : ''}`}>
              {w}
            </span>
          ))}
        </div>
        <div className="preloader-progress">
          <div className="preloader-progress-bar" />
        </div>
      </div>
    </div>
  );
}
