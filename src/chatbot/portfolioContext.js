import {
  about,
  contact,
  education,
  experience,
  hero,
  name,
  projects,
  skills,
} from '../data';

export const portfolioContext = {
  name,
  presentation: {
    role: hero.subtitle,
    location: hero.location,
    description: hero.description,
    stack: hero.stack,
  },
  about,
  experience,
  projects,
  skills,
  education,
  contact: {
    email: 'd.zarcosastre@gmail.com',
    phone: contact.phoneLabel,
    github: contact.githubHref,
    linkedin: contact.linkedinHref,
  },
};

const normalize = (value) =>
  value
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/\s+/g, ' ')
    .trim();

const has = (question, terms) => terms.some((term) => question.includes(term));

const allSkills = [...Object.values(skills).flat(), ...hero.stack];
const flatSkills = [...new Set(allSkills.map((item) => normalize(item)))];

function projectDetail(question) {
  const map = [
    {
      keys: ['todof1', 'todo f1', 'el proyecto de formula', 'proyecto de f1', ' de f1'],
      answer: `TodoF1 es su TFG: una aplicación web sobre datos históricos de Fórmula 1 desde 1950 hasta hoy, con estadísticas y resultados interactivos. Tecnologías: JavaScript, HTML, CSS y SQL.`,
    },
    {
      keys: ['fitcity', 'fit city', 'fit'],
      answer: `FitCity AI es una aplicación geolocalizada de fitness con registro y análisis de ejercicios y rankings por gimnasio, y está integrando funciones de IA para validar movimientos. Se desarrolla con Angular, JavaScript e IA.`,
    },
    {
      keys: ['uned'],
      answer: `Proyecto UNED es una colaboración técnica para mantener y evolucionar la base de datos de Patrimonio Cultural con Drupal y gestión de contenidos.`,
    },
  ];
  const match = map.find((item) => item.keys.some((key) => question.includes(key)));
  return match ? match.answer : null;
}

function techAnswer(question) {
  const q = normalize(question);
  const skill = flatSkills.find((item) => q.includes(item));
  if (skill) {
    return `Sí. ${name} trabaja con ${skill === 'javascript' ? 'JavaScript' : skill}. Su stack principal es: ${hero.stack.join(', ')}.`;
  }
  if (has(q, ['tecnologias', 'tecnologia', 'stack', 'lenguajes', 'lenguaje', 'herramientas', 'que usa', 'que utiliza'])) {
    return `Sus tecnologías son: ${Object.entries(skills)
      .map(([category, items]) => `${category}: ${items.join(', ')}`)
      .join('. ')}. En su día a día también menciona ${hero.stack.join(', ')}.`;
  }
  return null;
}

function educationAnswer() {
  return `Formación: ${education
    .map((item) => `${item.title} en ${item.institution} (${item.date})`)
    .join(' · ')}.`;
}

function experienceAnswer() {
  return `Experiencia: ${experience
    .map((job) => `${job.role} en ${job.company}${job.period ? ` (${job.period})` : ''}`)
    .join('; ')}.`;
}

function projectsAnswer() {
  return `Proyectos destacados: ${projects.map((project) => project.title).join(', ')}. Pregúntame por uno para conocerlo mejor.`;
}

function contactAnswer() {
  return `Puedes contactar con ${name}: email d.zarcosastre@gmail.com, teléfono ${contact.phoneLabel}, o por ${contact.githubLabel} y ${contact.linkedinLabel}.`;
}

export function getLocalResponse(rawQuestion) {
  const q = normalize(rawQuestion);
  if (!q) {
    return 'Puedo ayudarte a conocer mejor a Daniel. Pregúntame por su perfil, experiencia, proyectos, tecnologías o contacto.';
  }

  // Saludo
  if (has(q, ['hola', 'buenas', 'hey', 'hello', 'hi ', 'saludos', 'buenos dias', 'buenas tardes'])) {
    return '¡Hola! Soy el asistente del portfolio de Daniel. ¿Qué quieres saber de él?';
  }

  // Agradecimiento
  if (has(q, ['gracias', 'thank', 'genial', 'perfecto'])) {
    return 'De nada. Si necesitas algo más sobre Daniel, aquí estoy.';
  }

  // Nombre de la persona
  if (has(q, ['como se llama', 'su nombre', 'mi nombre', 'tu nombre es', 'como te llamas', 'nombre de', 'quien es daniel'])) {
    return `${name} es el desarrollador detrás de este portfolio.`;
  }
  if (q.includes('nombre') && q.includes('cual')) {
    return `Su nombre es ${name}.`;
  }

  // Perfil / quién es
  if (has(q, ['quien es', 'quien eres', 'sobre el', 'perfil', 'presentate', 'describe', 'descripcion', 'que hace', 'sobre mi', 'acerca'])) {
    return `${hero.badge} en ${hero.location}. ${hero.subtitle}. Ya está titulado en IA y Big Data.`;
  }

  // Trabajo actual
  if (has(q, ['donde trabaja', 'trabaja actualmente', 'donde esta trabajando', 'donde estas trabajando', 'trabaja ahora', 'empresa actual', 'actualmente en que', 'se dedica', 'dedica actualmente', 'que hace actualmente'])) {
    return `Actualmente trabaja como ${experience[0].role} en ${experience[0].company}${experience[0].period ? ` (${experience[0].period})` : ''}.`;
  }

  // Detalle de un proyecto concreto
  const detail = projectDetail(q);
  if (detail) return detail;

  // Preguntas por un proyecto / stack en general
  if (has(q, ['proyectos', 'proyecto', 'portfolio', 'que ha hecho', 'que hizo', 'trabajos'])) {
    return projectsAnswer();
  }

  // Preguntas de experiencia
  if (has(q, ['experiencia', 'trabajado', 'empresa', 'empresas', 'empleo', 'puesto', 'curriculum', 'carrera laboral'])) {
    return experienceAnswer();
  }

  // Preguntas de tecnologías / "¿sabe X?"
  const tech = techAnswer(q);
  if (tech) return tech;

  if (has(q, ['sabe', 'sabes', 'domina', 'conoce'])) {
    return 'Esa tecnología no aparece reflejada en su portfolio. Sus tecnologías y herramientas están en la página /tecnologias.';
  }

  // Formación
  if (has(q, ['especializacion', 'especializado', 'especializacion en ia', 'titulado', 'terminado la formacion', 'acabado la formacion', 'finalizado la formacion', 'formacion en ia', 'formacion de ia', 'inteligencia artificial', 'big data', 'terminado la especializacion', 'acabado la especializacion'])) {
    return `Sí. ${name} ya ha terminado el Curso de Especialización en Inteligencia Artificial y Big Data (IFP) y está titulado.`;
  }

  if (has(q, ['formacion', 'formado', 'estudios', 'estudio', 'educacion', 'curso', 'cursos', 'daw', 'smr', 'instituto'])) {
    return educationAnswer();
  }

  // Contacto
  if (has(q, ['contacto', 'contactar', 'contactar con', 'email', 'correo', 'mail', 'telefono', 'llamar', 'github', 'linkedin', 'redes'])) {
    return contactAnswer();
  }

  return 'No he encontrado esa información. Puedes preguntarme por su perfil, experiencia, proyectos, tecnologías, formación o contacto.';
}

export async function getAssistantResponse(question) {
  const endpoint = import.meta.env.VITE_CHAT_API_URL;
  if (!endpoint) return getLocalResponse(question);

  try {
    const response = await fetch(endpoint, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, context: portfolioContext }),
    });
    if (!response.ok) throw new Error('Chat API request failed');
    const data = await response.json();
    return data.answer || getLocalResponse(question);
  } catch {
    return getLocalResponse(question);
  }
}
