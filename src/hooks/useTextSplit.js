import { useEffect } from 'react';

// Divide los textos en palabras/letras para las animaciones de text-reveal.
function splitIntoSpans(node, mode) {
  if (!node) return;
  const text = node.textContent;
  node.textContent = '';

  if (mode === 'lines') {
    const words = text.trim().split(/\s+/);
    const line = document.createElement('span');
    line.className = 'reveal-line';
    const inner = document.createElement('span');
    inner.className = 'reveal-line-inner';
    words.forEach((w, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.textContent = w;
      inner.appendChild(wordSpan);
      if (i < words.length - 1) inner.appendChild(document.createTextNode(' '));
    });
    line.appendChild(inner);
    node.appendChild(line);
  } else {
    const words = text.trim().split(/\s+/);
    words.forEach((w, i) => {
      const wordSpan = document.createElement('span');
      wordSpan.className = 'word';
      wordSpan.setAttribute('aria-hidden', 'false');
      [...w].forEach((ch) => {
        const chSpan = document.createElement('span');
        chSpan.className = 'char';
        chSpan.textContent = ch;
        wordSpan.appendChild(chSpan);
      });
      node.appendChild(wordSpan);
      if (i < words.length - 1) node.appendChild(document.createTextNode(' '));
    });
  }
}

// Aplica text-splitting a todos los elementos con [data-split].
export function useTextSplit() {
  useEffect(() => {
    document.querySelectorAll('[data-split]').forEach((el) => {
      if (el.dataset.splitDone) return;
      const mode = el.getAttribute('data-split');
      splitIntoSpans(el, mode);
      el.dataset.splitDone = 'true';
    });
  }, []);
}
