import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "Perspectiva Horaria UCAB",
    description: "Herramienta web interactiva y moderna para la planificación y consolidación de horarios universitarios en la Escuela de Ingeniería Informática (UCAB Caracas). Permite visualizar la oferta académica de múltiples períodos, organizar secciones mediante drag & drop o click/tap, detectar conflictos de horarios automáticamente, calcular la carga de horas semanales y copiar fácilmente los NRCs al portapapeles.",
    tags: ["Herramienta Web", "UCAB", "Planificación", "Productividad"],
    image: "https://images.unsplash.com/photo-1506784983877-45594efa4cbe?auto=format&fit=crop&w=600&q=80",
    link: "https://jrgil20.github.io/PerspectivaHoraria/",
    pinned: true,
    tag: "herramienta"
  },
  {
    id: 2,
    title: "Sistema de Bases de Datos UCAB (Proyecto Récord 20/20)",
    description: "Diseño e implementación integral de un sistema de bases de datos relacional robusto para la materia de Sistemas de Bases de Datos en la UCAB. Calificación final obtenida: 20 / 20. Incluye modelado E/R, normalización BCNF, consultas SQL complejas y lógica transaccional ACID.",
    tags: ["Bases de Datos", "SQL", "UCAB", "Calificación 20/20"],
    image: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/SBD_G9",
    pinned: true,
    tag: "proyecto"
  },
  {
    id: 3,
    title: "Calculadora y Gestor de Notas Universitarias (GAPTO10)",
    description: "Herramienta especializada para el seguimiento, gestión y cálculo ponderado de notas académicas universitarias.",
    tags: ["Herramienta", "Académico", "Productividad"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    link: "https://jrgil20.github.io/gapto10-cfpp/",
    githubLink: "https://github.com/Jrgil20/gapto10-cfpp",
    pinned: true,
    tag: "herramienta"
  },
  {
    id: 4,
    title: "Demo de Autenticación SSO en la Nube (TechCorp SSO)",
    description: "Proyecto de arquitectura en la nube para la demostración de integración Single Sign-On (SSO), gestión de identidades y seguridad en infraestructura cloud empresarial.",
    tags: ["Computación en la Nube", "SSO", "Seguridad", "Cloud Architecture"],
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/techcorp-sso-demo",
    tag: "proyecto"
  },
  {
    id: 5,
    title: "Keylogger Educativo para Linux (X11)",
    description: "Proyecto de investigación en ciberseguridad enfocado en la captura y análisis didáctico de eventos de entrada a bajo nivel en entornos de escritorio Linux X11 para la detección de vulnerabilidades.",
    tags: ["Ciberseguridad", "Linux X11", "C/C++", "Seguridad Informática"],
    image: "https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/KeyloggerEducativoParaLinuxX11",
    tag: "proyecto"
  },
  {
    id: 6,
    title: "Worker de Transcripción Automatizada de Clases",
    description: "Servicio worker en segundo plano para la ingesta, transcripción automatizada y procesamiento de audio/clases.",
    tags: ["Worker", "Audio", "Backend", "Automatización"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/class-transcription-worker",
    tag: "proyecto"
  },
  {
    id: 7,
    title: "Laboratorios de Inteligencia Artificial y Machine Learning",
    description: "Laboratorios prácticos de inteligencia artificial y aprendizaje automático: modelos predictivos, clasificación, regresión y procesamiento de datos.",
    tags: ["Machine Learning", "Python", "Data Science", "Laboratorios"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/IA-AprendizajeAutomatico_Labs",
    tag: "lab"
  },
  {
    id: 8,
    title: "Laboratorios Prácticos de Ciberseguridad",
    description: "Prácticas y laboratorios de ciberseguridad, análisis de vulnerabilidades, exploits didácticos y seguridad informática defensiva.",
    tags: ["Ciberseguridad", "Vulnerabilidades", "Networking"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/PracticasCiberSeguridad",
    tag: "lab"
  },
  {
    id: 9,
    title: "Guías y Ejercicios de Estructuras de Datos",
    description: "Material de apoyo y guías de código para asesorías y tutorías de estructuras de datos fundamentales y análisis de complejidad (Big O).",
    tags: ["Estructuras de Datos", "Algoritmos", "UCAB", "C/C++"],
    image: "https://images.unsplash.com/photo-1516116211227-bbc141e57c66?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/Asesorias_Estructuta-de-Datos",
    pinned: true,
    tag: "lab"
  },
  {
    id: 10,
    title: "Algoritmos y Métodos Numéricos",
    description: "Implementación rigurosa de algoritmos y métodos de análisis numérico para solución de ecuaciones, sistemas, interpolación e integración.",
    tags: ["Métodos Numéricos", "Algoritmos", "Matemática Aplicada"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/Numerical_methods",
    tag: "lab"
  }
];