import { Subject, TutoringPlan } from '../types';

export const UCAB_SUBJECTS: Subject[] = [
  {
    id: 'ed',
    name: 'Estructura de Datos',
    isMain: true,
    description: 'Enfoque principal: Listas enlazadas, árboles binarios, AVL, grafos, tablas hash y complejidad algorítmica (Big O).',
    topics: ['Memoria dinámica', 'Punteros y referencias', 'Árboles y Grafos', 'Optimización y Big O']
  },
  {
    id: 'poo',
    name: 'Programación Orientada a Objetos',
    isMain: false,
    description: 'Abstracción, encapsulamiento, herencia, polimorfismo, diseño de clases y patrones de diseño iniciales.',
    topics: ['Clases y Objetos', 'Herencia y Polimorfismo', 'Interfaces', 'Clean Code']
  },
  {
    id: 'is',
    name: 'Ingeniería de Software',
    isMain: false,
    description: 'Metodologías de desarrollo, ciclo de vida de software, diagramado UML, requerimientos y aseguramiento de calidad.',
    topics: ['Modelado UML', 'Patrones de Arquitectura', 'Testing', 'Gestión de Proyectos']
  },
  {
    id: 'ds',
    name: 'Desarrollo de Software',
    isMain: false,
    description: 'Práctica intensiva con tecnologías modernas, control de versiones (Git), trabajo colaborativo e integración de componentes.',
    topics: ['Git y GitHub', 'Desarrollo Full Stack', 'APIs REST', 'Bases de Datos']
  }
];

export const TUTORING_PLANS: TutoringPlan[] = [
  {
    id: 'single-hour',
    title: '1 Hora Individual',
    subtitle: 'Consultas puntuales o dudas de parciales',
    price: 7.5,
    priceSuffix: '/ hora',
    rateDetail: '$7.50 la hora',
    description: 'Ideal para desbloquear un ejercicio específico, revisar una asignación o resolver dudas antes de una entrega.',
    features: [
      'Sesión 1 a 1 de 60 minutos',
      'Revisión de código en vivo',
      'Resolución de ejercicios prácticos',
      'Grabación o notas de la sesión'
    ],
    popular: false
  },
  {
    id: 'two-hours',
    title: 'Sesión de 2 Horas',
    subtitle: 'Bloque estándar de estudio guiado',
    price: 12,
    priceSuffix: 'las 2 horas',
    rateDetail: '$6.00 / hora (ahorrás 20%)',
    description: 'Tiempo suficiente para profundizar conceptos teóricos y programar la solución paso a paso sin apuros.',
    features: [
      'Sesión completa de 120 minutos',
      'Explicación conceptual + implementación',
      'Ejercicios tipo parcial UCAB',
      'Material complementario en PDF/código'
    ],
    popular: true,
    badge: 'Más elegido'
  },
  {
    id: 'weekly-pack',
    title: 'Pack Semanal (4 Horas)',
    subtitle: '2 clases de 2h a la semana',
    price: 20,
    priceSuffix: '/ semana',
    rateDetail: '$5.00 / hora (tarifa mínima individual)',
    description: 'Máxima aceleración para alumnos que necesitan ponerse al día rápido o preparar un examen crucial.',
    features: [
      '4 horas semanales (2 clases de 2h)',
      'Seguimiento constante por WhatsApp',
      'Simulacros de parciales reales',
      'Prioridad en agenda semanal'
    ],
    popular: false,
    badge: 'Mejor precio hora'
  },
  {
    id: 'semester-plan',
    title: 'Acompañamiento Semestral',
    subtitle: 'Seguimiento durante todo el período académico',
    price: 40,
    priceSuffix: '/ mes (aprox.)',
    rateDetail: 'Tarifa preferencial $5/h con horas configurables',
    description: 'Garantizá aprobar la materia con constancia. Horas adaptables según el cronograma de parciales y proyectos.',
    features: [
      'Clase semanal fija de horas configurables',
      'Tutoría durante todo el semestre',
      'Soporte continuo para asignaciones y proyectos',
      'Garantía de cupo reservado'
    ],
    popular: false
  },
  {
    id: 'group-plan',
    title: 'Plan Grupal UCAB',
    subtitle: 'Para grupos de estudio (mínimo 4 personas)',
    price: 2,
    priceSuffix: '/ hora por persona',
    rateDetail: 'Mínimo 4 estudiantes ($8/h total del grupo)',
    description: 'Estudiá con tus compañeros de clase. Excelente para repasar laboratorios y proyectos en equipo al menor costo.',
    features: [
      'Mínimo 4 personas',
      'Tarifa ultra accesible: $2 por persona la hora',
      'Discusión y resolución grupal de guías',
      'Coordinación de horario grupal'
    ],
    popular: false,
    minPersons: 4,
    badge: 'Para grupos'
  }
];

export const TUTORING_LIMITS = {
  maxStudents: 6,
  availableSpots: 2,
  notice: 'Cupos estrictamente limitados para garantizar seguimiento personalizado real a cada estudiante.'
};

export const CONTACT_CONFIG = {
  formspreeEndpoint: 'https://formspree.io/f/xeojygpr',
  whatsappNumber: '+584120000000', // Modificable
  whatsappMessage: 'Hola! Me interesa agendar tutorías para la UCAB (Estructura de Datos / Programación).'
};
