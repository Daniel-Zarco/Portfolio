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
    .replace(/[\u0300-\u036f]/g, '');

const join = (values) => values.filter(Boolean).join(' ');

const documents = [
  {
    keywords: ['sobre', 'quien', 'perfil', 'descripcion', 'hace'],
    text: join([about.paragraphs.join(' '), about.profile.role, ...about.profile.details.map((d) => `${d.label}: ${d.value}`)]),
  },
  {
    keywords: ['experiencia', 'trabajo', 'empresa', 'puesto', 'empleo'],
    text: experience
      .map((job) => `${job.role} en ${job.company}. ${job.points.join(' ')}`)
      .join(' '),
  },
  {
    keywords: ['proyecto', 'proyectos', 'portfolio', 'todo', 'fitcity', 'uned'],
    text: projects
      .map((project) => `${project.title}: ${project.description} Tecnologias: ${project.tech.join(', ')}. Estado: ${project.status}.`)
      .join(' '),
  },
  {
    keywords: ['tecnologia', 'tecnologias', 'stack', 'lenguaje', 'angular', 'javascript', 'sql', 'php', 'java', 'git', 'drupal'],
    text: join([
      hero.stack.join(', '),
      ...Object.entries(skills).map(([category, values]) => `${category}: ${values.join(', ')}`),
    ]),
  },
  {
    keywords: ['estudio', 'estudios', 'formacion', 'educacion', 'curso', 'daw', 'smr'],
    text: education.map((item) => `${item.title}, ${item.institution}, ${item.date}.`).join(' '),
  },
  {
    keywords: ['contacto', 'contactar', 'email', 'correo', 'telefono', 'github', 'linkedin'],
    text: `Email: d.zarcosastre@gmail.com. Telefono: ${contact.phoneLabel}. GitHub: ${contact.githubHref}. LinkedIn: ${contact.linkedinHref}.`,
  },
];

const directResponses = [
  {
    match: ['tecnologia', 'stack', 'sabe angular'],
    answer: `Daniel trabaja con ${Object.values(skills).flat().join(', ')}. En su stack destacado también aparecen ${hero.stack.join(', ')}.`,
  },
  {
    match: ['experiencia', 'trabajado'],
    answer: `Tiene experiencia como ${experience.map((job) => `${job.role} en ${job.company}`).join('; ')}.`,
  },
  {
    match: ['proyecto', 'proyectos'],
    answer: `Sus proyectos incluyen ${projects.map((project) => project.title).join(', ')}. ${projects.map((project) => `${project.title}: ${project.description}`).join(' ')}`,
  },
  {
    match: ['contacto', 'contactar', 'email', 'correo'],
    answer: `Puedes contactar con Daniel en d.zarcosastre@gmail.com o en el teléfono ${contact.phoneLabel}. También puedes encontrarlo en GitHub y LinkedIn.`,
  },
  {
    match: ['formacion', 'estudios', 'educacion'],
    answer: education.map((item) => `${item.title} (${item.institution}, ${item.date})`).join('. ') + '.',
  },
];

export function getLocalResponse(question) {
  const query = normalize(question);
  if (!query.trim()) return 'Escribe una pregunta sobre Daniel, su experiencia, proyectos, tecnologías o contacto.';

  const direct = directResponses.find((item) => item.match.some((term) => query.includes(term)));
  if (direct) return direct.answer;

  const tokens = query.split(/\s+/).filter((token) => token.length > 3);
  const best = documents
    .map((document) => ({
      document,
      score: tokens.reduce((score, token) => score + (document.text.toLowerCase().includes(token) ? 1 : 0), 0),
    }))
    .sort((a, b) => b.score - a.score)[0];

  if (best?.score) return best.document.text;
  return 'No encuentro ese dato en la información disponible del portfolio.';
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
