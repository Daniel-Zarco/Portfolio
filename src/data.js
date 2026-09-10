// =========================================================
// PORTFOLIO — Data (contenido original, intacto)
// =========================================================

export const name = 'Daniel Zarco Sastre';

export const contact = {
  emailLabel: 'Enviar Email',
  emailHref:
    'https://mail.google.com/mail/?view=cm&fs=1&to=d.zarcosastre@gmail.com',
  phoneLabel: '666 453 572',
  phoneHref: 'tel:666453572',
  githubLabel: 'GitHub',
  githubHref: 'https://github.com/Daniel-Zarco',
  linkedinLabel: 'LinkedIn',
  linkedinHref: 'https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/',
};

export const hero = {
  badge: 'Desarrollador Web',
  location: 'Madrid · España',
  subtitle: 'Desarrollador Web Full-Stack con foco en lógica de negocio y datos',
  description:
    'Desarrollo aplicaciones web donde la lógica de negocio, la automatización y el tratamiento de datos tienen un papel clave. He completado el Curso de Especialización en Inteligencia Artificial y Big Data y ya estoy titulado.',
  actions: [
    { label: 'Ver proyectos', href: '/proyectos', primary: true },
    { label: 'Ver GitHub', href: 'https://github.com/Daniel-Zarco', primary: false },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/', primary: false },
  ],
  stack: ['Angular', 'PHP / Laravel', 'JavaScript', 'SQL', 'IA & Big Data'],
};

export const projects = [
  {
    title: 'MiCarro',
    description:
      'Aplicación web full-stack para gestionar la compra de forma sencilla, con productos, favoritos y funcionalidades orientadas a organizar y facilitar la cesta de la compra. Arquitectura: Angular → HTTP/REST → Spring Boot → JPA → PostgreSQL.',
    tech: ['Angular', 'Spring Boot', 'Java', 'PostgreSQL', 'REST API', 'JPA'],
    status: 'En desarrollo',
    link: 'https://github.com/Daniel-Zarco/MiCarro',
    demo: null,
  },
  {
    title: 'TodoF1',
    description:
      'Aplicación web desarrollada como TFG centrada en datos históricos de Fórmula 1 desde 1950 hasta la actualidad, con visualización interactiva de estadísticas, resultados y enfoque en experiencia de usuario.',
    tech: ['JavaScript', 'HTML', 'CSS', 'SQL', 'Frontend'],
    status: 'TFG',
    link: 'https://github.com/Daniel-Zarco/todoF1-2025',
    demo: null,
  },
  {
    title: 'FitCity AI',
    description:
      'Aplicación geolocalizada orientada al fitness, con registro y análisis de ejercicios, rankings por gimnasio y tipo de ejercicio, e integración progresiva de funcionalidades basadas en Inteligencia Artificial para validar movimientos.',
    tech: ['Angular', 'JavaScript', 'IA', 'Geolocalización', 'Git'],
    status: 'En desarrollo',
    link: null,
    demo: null,
  },
  {
    title: 'Proyecto UNED',
    description:
      'Colaboración técnica orientada al mantenimiento y evolución de una base de datos de Patrimonio Cultural, trabajando con Drupal, gestión de contenidos y mejoras según requerimientos técnicos del cliente.',
    tech: ['Drupal', 'Base de datos', 'Gestión de contenidos', 'Datos'],
    status: 'Colaboración técnica',
    link: 'https://www.uned.es/universidad/inicio/',
    demo: null,
  },
];

export const about = {
  sectionTitle: 'Perfil técnico orientado a desarrollo web y tratamiento de información',
  paragraphs: [
    'Trabajo como desarrollador web en proyectos donde la interacción, la lógica condicional y el tratamiento de datos tienen un papel clave. He participado en desarrollos centrados en sistemas de encuestas, automatización de flujos de respuesta y validación en tiempo real.',
    'Además, he completado el Curso de Especialización en Inteligencia Artificial y Big Data y ya estoy titulado, combinando desarrollo frontend con lógica de negocio compleja.',
  ],
  profile: {
    badge: 'Perfil profesional',
    name: 'Daniel Zarco Sastre',
    role: 'Desarrollo aplicaciones web centradas en lógica de negocio, automatización y tratamiento de datos',
    details: [
      { label: 'Especialidad', value: 'Angular · PHP (Laravel) · JavaScript · SQL · IA & Big Data' },
      { label: 'Enfoque', value: 'Interfaces útiles, automatización y tratamiento de información' },
      { label: 'Actualmente', value: 'Trabajo en desarrollo web como Full Stack y ya estoy titulado en IA y Big Data' },
      { label: 'Ubicación', value: 'Madrid · España' },
    ],
  },
};

export const experience = [
  {
    role: 'Full Stack',
    company: 'Análisis e Investigación · Madrid',
    period: '2024 – Actualidad',
    url: 'https://www.analisiseinvestigacion.com/',
    points: [
      'Desarrollo de soluciones interactivas basadas en JavaScript para sistemas de encuestas.',
      'Implementación de lógica condicional compleja y automatización de flujos de respuesta.',
      'Manipulación del DOM para personalización dinámica de formularios.',
      'Validación y tratamiento de datos en tiempo real.',
      'Mejora de usabilidad y rendimiento en aplicaciones web.',
    ],
  },
  {
    role: 'Desarrollador (colaboración técnica)',
    company: 'Proyecto UNED · Comunidad de Madrid',
    url: 'https://www.uned.es/universidad/inicio/',
    points: [
      'Mantenimiento y evolución de la base de datos de Patrimonio Cultural.',
      'Desarrollo sobre CMS Drupal y gestión de contenidos.',
      'Implementación de mejoras según requerimientos técnicos del cliente.',
      'Participación en proyecto institucional orientado a la gestión y estructuración de datos.',
    ],
  },
  {
    role: 'Técnico en Sistemas (Prácticas)',
    company: 'Mediaset España · Madrid',
    url: 'https://www.mediaset.es/',
    points: ['Soporte técnico en entorno corporativo.', 'Configuración y mantenimiento de equipos.', 'Maquetación de puestos de trabajo.'],
  },
];

export const skills = {
  Lenguajes: ['JavaScript', 'Java', 'SQL', 'PHP', 'HTML', 'CSS'],
  Frontend: ['Angular', 'jQuery', 'Bootstrap'],
  Herramientas: ['Git', 'GitHub', 'Drupal', 'LimeSurvey'],
  Perfil: ['Lógica de datos', 'Automatización', 'Validación en tiempo real', 'Interacción web'],
};

export const education = [
  {
    title: 'Curso de Especialización en Inteligencia Artificial y Big Data',
    institution: 'IFP',
    date: '2025 – 2026',
    url: 'https://www.planetafp.es/',
  },
  {
    title: 'Desarrollo de Aplicaciones Web (DAW)',
    institution: 'I.E.S. Rosa Chacel',
    date: '2023 – 2025',
    url: 'https://site.educa.madrid.org/ies.rosachacel.madrid/',
  },
  {
    title: 'Sistemas Microinformáticos y Redes (SMR)',
    institution: 'I.E.S. Rosa Chacel',
    date: '2021 – 2023',
    url: 'https://site.educa.madrid.org/ies.rosachacel.madrid/',
  },
];

export const contactSection = {
  title: '¿Listo para colaborar?',
  description:
    'Puedes encontrarme en Madrid. Actualmente compagino mi trabajo con formación constante, y estoy abierto a nuevos desafíos tecnológicos.',
};

export const sectionsIntro = {
  projects: {
    badge: 'Proyectos',
    title: 'Trabajos destacados',
    description:
      'Una selección de proyectos que reflejan desarrollo web, gestión de datos y soluciones orientadas al usuario.',
  },
  about: {
    badge: 'Sobre mí',
    title: 'Perfil técnico orientado a desarrollo web y tratamiento de información',
  },
  experience: {
    badge: 'Experiencia',
    title: 'Trayectoria profesional',
  },
  skills: {
    badge: 'Tecnologías',
    title: 'Herramientas y conocimientos',
  },
  education: {
    badge: 'Formación',
    title: 'Formación académica',
  },
};

export const navLinks = [
  { label: 'Sobre mí', href: '/sobre-mi' },
  { label: 'Experiencia', href: '/experiencia' },
  { label: 'Proyectos', href: '/proyectos' },
  { label: 'Tecnologías', href: '/tecnologias' },
];
