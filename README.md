# Daniel Zarco Sastre — Portfolio

Desarrollador **Full-Stack** con foco en lógica de negocio y datos. Este portfolio multipágina muestra mis proyectos, experiencia, tecnologías, formación y certificaciones, con una estética limpia y editorial, animaciones cuidadas y un chatbot capaz de responder preguntas sobre mi perfil usando el propio contenido del sitio.

## Captura del portfolio

![Vista previa de la Home del portfolio](public/readme/portfolio-preview.png)

[Ver portfolio en vivo ↗](https://portfolio-dzs.vercel.app/)

## Sobre el portfolio

SPA multipágina construida con **React + Vite**, desplegada en **Vercel**. El contenido está centralizado en `src/data.js`, de modo que proyectos, experiencia, tecnologías o certificaciones se actualizan editando un único fichero.

| Ruta | Sección |
| --- | --- |
| `/` | Home — presentación y lista de proyectos |
| `/sobre-mi` | Bio, perfil y áreas de enfoque |
| `/experiencia` | Trayectoria profesional |
| `/proyectos` | Proyectos + sección de **Certificaciones** |
| `/tecnologias` | Stack por bloques + formación académica |

## Tecnologías utilizadas

![React](https://img.shields.io/badge/React-19-61DAFB?style=for-the-badge&logo=react&logoColor=141517)
![Vite](https://img.shields.io/badge/Vite-8-646CFF?style=for-the-badge&logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES2022-F7DF1E?style=for-the-badge&logo=javascript&logoColor=141517)
![CSS3](https://img.shields.io/badge/CSS-Custom%20Properties-1572B6?style=for-the-badge&logo=css3&logoColor=white)
![React Router](https://img.shields.io/badge/React_Router-7-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white)
![Vercel](https://img.shields.io/badge/Vercel-Deploy-000000?style=for-the-badge&logo=vercel&logoColor=white)
![ESLint](https://img.shields.io/badge/ESLint-9-4B32C3?style=for-the-badge&logo=eslint&logoColor=white)

- **React 19** + **Vite 8** (build tooling)
- **React Router 7** para el enrutado multipágina
- **CSS vanilla** con variables de diseño, animaciones e IntersectionObserver (sin frameworks UI)
- **@vercel/analytics** para métricas de la web
- **ESLint 9** para calidad de código
- Despliegue en **Vercel** con rewrites SPA (`vercel.json`)

## Funcionalidades principales

- **Portfolio multipágina** con navegación por transiciones animadas (overlay + clip-path)
- **Diseño responsive**: navbar fijo en escritorio y **menú móvil a pantalla completa** con bloqueo de scroll
- **Animaciones y micro-interacciones**: preloader con barra de progreso, textos que se dividen por caracteres, reveals al hacer scroll, hovers deslizantes en enlaces y botones
- **Cursor personalizado** en escritorio (dot + ring con blend por contraste)
- **Proyectos**: listado con descripción, stack, enlaces a repo/demo y estados (`En desarrollo`, `TFG`, …)
- **Certificaciones**: grid de credenciales verificables (Credly) en `/proyectos`
- **Chatbot con contexto del portfolio**: responde sobre perfil, experiencia, proyectos, tecnologías, formación, certificaciones o contacto a partir de `src/data.js`; preparado para conectar una API propia vía `VITE_CHAT_API_URL` con fallback local (sin claves en el frontend)

## Proyectos destacados

| # | Proyecto | Estado | Stack | Enlaces |
| --- | --- | --- | --- | --- |
| 01 | **MiCarro** | En desarrollo | Angular · Spring Boot · Java · PostgreSQL · REST API · JPA | [Ver proyecto ↗](https://micarro-j0jf.onrender.com/) · [GitHub ↗](https://github.com/Daniel-Zarco/MiCarro) |
| 02 | **TodoF1** | TFG | JavaScript · HTML · CSS · SQL | [GitHub ↗](https://github.com/Daniel-Zarco/todoF1-2025) |
| 03 | **FitCity AI** | En desarrollo | Angular · JavaScript · IA · Geolocalización · Git | — |
| 04 | **Proyecto UNED** | Colaboración técnica | Drupal · Base de datos · Gestión de contenidos | [UNED ↗](https://www.uned.es/universidad/inicio/) |

## Instalación y ejecución local

> Requiere **Node 20.19+** o **22.12+** (exigencia de Vite 8).

```bash
# 1. Clonar el repositorio
git clone https://github.com/Daniel-Zarco/Portfolio.git
cd Portfolio

# 2. Instalar dependencias
npm install

# 3. Entorno de desarrollo (HMR)
npm run dev

# 4. Build de producción + preview local
npm run build
npm run preview

# 5. Lint
npm run lint
```

Opcional: para conectar el chatbot a una API de IA propia, define `VITE_CHAT_API_URL` en un `.env.local` (sin ella, el chatbot usa respuestas locales basadas en el contenido del portfolio).

## Enlaces

- [Portfolio en vivo ↗](https://portfolio-dzs.vercel.app/)
- [GitHub ↗](https://github.com/Daniel-Zarco)
- [LinkedIn ↗](https://www.linkedin.com/in/daniel-zarco-sastre-76547b350/)
- ✉️ [d.zarcosastre@gmail.com](https://mail.google.com/mail/?view=cm&fs=1&to=d.zarcosastre@gmail.com)
