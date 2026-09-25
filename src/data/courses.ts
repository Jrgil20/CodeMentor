import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    title: "Bases para Vibe Coders",
    description: "Aprendé a construir aplicaciones reales asistido por IA pero con criterio técnico: entendé qué genera el modelo, cómo depurar errores, versionar con Git y estructurar componentes sin programar a ciegas.",
    duration: "10 horas (5 sesiones de 2h)",
    level: "beginner",
    price: 50,
    hourlyRate: "$5 / hora",
    badge: "Tendencia",
    features: [
      "De la idea al prototipo funcional con IA",
      "Control de versiones y Git sin miedo",
      "Lectura y auditoría del código autogenerado",
      "Resolución de bugs y debugging sistemático",
      "Despliegue estático a producción con $0 costo"
    ],
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 2,
    title: "Bases para el Desarrollo de Software",
    description: "Cimientos de ingeniería esenciales: pensamiento algorítmico, lógica de programación, tipos de datos, estructuras fundamentales y principios de diseño limpio para no depender de trucos.",
    duration: "16 horas (8 sesiones de 2h)",
    level: "intermediate",
    price: 80,
    hourlyRate: "$5 / hora",
    badge: "Esencial",
    features: [
      "Lógica formal y estructuras de control",
      "Estructuras de datos elementales y su costo",
      "Modularización y funciones puras",
      "Buenas prácticas y Clean Code",
      "Ejercicios prácticos paso a paso"
    ],
    image: "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: 3,
    title: "Bases para el Uso de la IA",
    description: "Dominá las herramientas de inteligencia artificial aplicada al desarrollo: prompting de alta precisión, gestión de contexto, agentes autónomos, frameworks modernos y flujos de trabajo profesionales.",
    duration: "12 horas (6 sesiones de 2h)",
    level: "advanced",
    price: 60,
    hourlyRate: "$5 / hora",
    badge: "Productividad",
    features: [
      "Técnicas avanzadas de prompting técnico",
      "Modelos de lenguaje, tokens y ventanas de contexto",
      "Flujos de trabajo con agentes y CLI (Antigravity/Cursor)",
      "Automatización de tareas repetitivas de código",
      "Límites, alucinaciones y cómo mitigarlas"
    ],
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=600&q=80"
  }
];