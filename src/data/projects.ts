import { Project } from '../types';

export const projects: Project[] = [
  {
    id: 1,
    title: "gapto10-cfpp",
    description: "Herramienta especializada para el seguimiento, gestión y cálculo ponderado de notas académicas universitarias.",
    tags: ["Herramienta", "Académico", "Productividad"],
    image: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/gapto10-cfpp",
    pinned: true,
    tag: "herramienta"
  },
  {
    id: 2,
    title: "class-transcription-worker",
    description: "Servicio worker en segundo plano para la ingesta, transcripción automatizada y procesamiento de audio/clases.",
    tags: ["Worker", "Audio", "Backend", "Automatización"],
    image: "https://images.unsplash.com/photo-1589254065878-42c9da997008?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/class-transcription-worker",
    tag: "proyecto"
  },
  {
    id: 3,
    title: "IA-AprendizajeAutomatico_Labs",
    description: "Laboratorios prácticos de inteligencia artificial y aprendizaje automático: modelos predictivos, clasificación, regresión y procesamiento de datos.",
    tags: ["Machine Learning", "Python", "Data Science", "Laboratorios"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/IA-AprendizajeAutomatico_Labs",
    tag: "lab"
  },
  {
    id: 4,
    title: "PracticasCiberSeguridad",
    description: "Prácticas y laboratorios de ciberseguridad, análisis de vulnerabilidades, exploits didácticos y seguridad informática defensiva.",
    tags: ["Ciberseguridad", "Vulnerabilidades", "Networking"],
    image: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/PracticasCiberSeguridad",
    tag: "lab"
  },
  {
    id: 5,
    title: "Asesorias_Estructuta-de-Datos",
    description: "Material de apoyo y guías de código para asesorías y tutorías de estructuras de datos fundamentales y análisis de complejidad (Big O).",
    tags: ["Estructuras de Datos", "Algoritmos", "UCAB", "C/C++"],
    image: "https://images.unsplash.com/photo-1516116211227-bbc141e57c66?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/Asesorias_Estructuta-de-Datos",
    pinned: true,
    tag: "lab"
  },
  {
    id: 6,
    title: "Numerical_methods",
    description: "Implementación rigurosa de algoritmos y métodos de análisis numérico para solución de ecuaciones, sistemas, interpolación e integración.",
    tags: ["Métodos Numéricos", "Algoritmos", "Matemática Aplicada"],
    image: "https://images.unsplash.com/photo-1635070041078-e363dbe005cb?auto=format&fit=crop&w=600&q=80",
    link: "https://github.com/Jrgil20/Numerical_methods",
    tag: "lab"
  }
];