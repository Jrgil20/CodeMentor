import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Cuál es tu nivel de experiencia en programación?",
    options: [
      { text: "Nunca he programado", value: 0 },
      { text: "He realizado tutoriales básicos", value: 1 },
      { text: "He desarrollado pequeños proyectos personales", value: 2 },
      { text: "He trabajado en proyectos profesionales", value: 3 }
    ]
  },
  {
    id: 2,
    question: "¿Qué lenguajes de programación conoces?",
    options: [
      { text: "Ninguno", value: 0 },
      { text: "HTML/CSS (básicos web)", value: 1 },
      { text: "JavaScript o Python básico", value: 2 },
      { text: "Varios lenguajes con buen nivel", value: 3 }
    ]
  },
  {
    id: 3,
    question: "¿Cuántas horas semanales puedes dedicar a estudiar?",
    options: [
      { text: "Menos de 5 horas", value: 1 },
      { text: "Entre 5 y 10 horas", value: 2 },
      { text: "Entre 10 y 20 horas", value: 3 },
      { text: "Más de 20 horas", value: 4 }
    ]
  },
  {
    id: 4,
    question: "¿Cuál es tu objetivo principal al aprender programación?",
    options: [
      { text: "Curiosidad personal", value: 1 },
      { text: "Complementar mi perfil profesional actual", value: 2 },
      { text: "Cambiar de carrera a desarrollo de software", value: 3 },
      { text: "Crear mi propio proyecto o startup tecnológico", value: 3 }
    ]
  },
  {
    id: 5,
    question: "¿Has intentado aprender programación anteriormente?",
    options: [
      { text: "No, es mi primer intento", value: 1 },
      { text: "Sí, pero abandoné al poco tiempo", value: 2 },
      { text: "Sí, he completado algunos cursos o tutoriales", value: 3 },
      { text: "Sí, tengo una base sólida", value: 4 }
    ]
  }
];