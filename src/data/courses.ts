import { Course } from '../types';

export const courses: Course[] = [
  {
    id: 1,
    title: "Fundamentos de Programación",
    description: "Curso introductorio para personas sin experiencia previa. Aprende las bases de la lógica de programación, algoritmos y estructuras de datos fundamentales.",
    duration: "8 semanas",
    level: "beginner",
    price: 299,
    features: [
      "12 sesiones de 2 horas",
      "Proyectos prácticos semanales",
      "Mentoría personalizada",
      "Certificado de finalización"
    ],
    image: "https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 2,
    title: "Desarrollo Web Full Stack",
    description: "Domina el desarrollo web completo, desde el frontend con React hasta el backend con Node.js, incluyendo bases de datos y despliegue.",
    duration: "12 semanas",
    level: "intermediate",
    price: 499,
    features: [
      "24 sesiones de 2 horas",
      "5 proyectos completos para tu portafolio",
      "Sesiones de código en vivo",
      "Preparación para entrevistas técnicas"
    ],
    image: "https://images.pexels.com/photos/546819/pexels-photo-546819.jpeg?auto=compress&cs=tinysrgb&w=600"
  },
  {
    id: 3,
    title: "Algoritmos Avanzados y Preparación para Entrevistas",
    description: "Curso intensivo enfocado en algoritmos complejos, estructuras de datos avanzadas y resolución de problemas para entrevistas técnicas.",
    duration: "6 semanas",
    level: "advanced",
    price: 399,
    features: [
      "12 sesiones de 2 horas",
      "100+ ejercicios de programación",
      "Simulaciones de entrevistas",
      "Estrategias para resolución de problemas"
    ],
    image: "https://images.pexels.com/photos/1181290/pexels-photo-1181290.jpeg?auto=compress&cs=tinysrgb&w=600"
  }
];