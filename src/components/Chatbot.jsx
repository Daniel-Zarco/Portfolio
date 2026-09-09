import { useEffect, useRef, useState } from 'react';
import { getAssistantResponse } from '../chatbot/portfolioContext';
import './Chatbot.css';

const initialMessage = {
  id: 0,
  role: 'assistant',
  text: 'Hola. Puedo responder preguntas sobre Daniel, su experiencia, proyectos, tecnologías, formación y contacto.',
};

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [question, setQuestion] = useState('');
  const [messages, setMessages] = useState([initialMessage]);
  const [isLoading, setIsLoading] = useState(false);
  const inputRef = useRef(null);
  const messagesRef = useRef(null);

  useEffect(() => {
    if (isOpen) inputRef.current?.focus();
  }, [isOpen]);

  useEffect(() => {
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, isLoading]);

  const ask = async () => {
    const value = question.trim();
    if (!value || isLoading) return;

    setQuestion('');
    setMessages((current) => [
      ...current,
      { id: Date.now(), role: 'user', text: value },
    ]);
    setIsLoading(true);
    const answer = await getAssistantResponse(value);
    setMessages((current) => [
      ...current,
      { id: Date.now() + 1, role: 'assistant', text: answer },
    ]);
    setIsLoading(false);
  };

  const handleKeyDown = (event) => {
    if (event.key === 'Enter' && !event.shiftKey) {
      event.preventDefault();
      ask();
    }
  };

  return (
    <div className="chatbot" data-chatbot>
      {isOpen && (
        <section className="chatbot-window" aria-label="Chat sobre el portfolio">
          <header className="chatbot-header">
            <div>
              <strong>Asistente</strong>
              <span>Información del portfolio</span>
            </div>
            <button
              type="button"
              className="chatbot-close"
              onClick={() => setIsOpen(false)}
              aria-label="Cerrar chat"
            >
              ×
            </button>
          </header>

          <div className="chatbot-messages" ref={messagesRef} aria-live="polite">
            {messages.map((message) => (
              <p key={message.id} className={`chatbot-message ${message.role}`}>
                {message.text}
              </p>
            ))}
            {isLoading && <p className="chatbot-message assistant chatbot-typing">Escribiendo…</p>}
          </div>

          <div className="chatbot-input-wrap">
            <textarea
              ref={inputRef}
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              onKeyDown={handleKeyDown}
              placeholder="Pregúntame algo…"
              rows="1"
              aria-label="Pregunta al asistente"
            />
            <button type="button" onClick={ask} disabled={!question.trim() || isLoading} aria-label="Enviar pregunta">
              ↗
            </button>
          </div>
        </section>
      )}

      <button
        type="button"
        className={`chatbot-toggle${isOpen ? ' is-open' : ''}`}
        onClick={() => setIsOpen((open) => !open)}
        aria-expanded={isOpen}
        aria-label={isOpen ? 'Cerrar asistente' : 'Abrir asistente'}
      >
        <span className="chatbot-toggle-dot" />
        <span>Chat</span>
      </button>
    </div>
  );
}
