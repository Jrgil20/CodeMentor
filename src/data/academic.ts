export interface HighlightedGrade {
  id: string;
  code: string;
  name: string;
  grade: number;
  maxGrade: number;
  period: string;
  category: 'algoritmos' | 'logica' | 'math' | 'software' | 'diploma';
  badge?: string;
  description: string;
}

export interface EducationProgram {
  title: string;
  school: string;
  institution: string;
  campus: string;
  status: string;
  grade?: string;
  description: string;
  highlight?: boolean;
}

export const STUDENT_INFO = {
  name: 'Jesús R. Gil Farías',
  degree: 'Ingeniería Informática',
  curriculumPlan: 'PN8',
  university: 'Universidad Católica Andrés Bello',
  campus: 'UCAB Montalbán',
  location: 'Caracas, Venezuela',
  email: 'jrgil.20@est.ucab.edu.ve',
  githubUser: 'Jrgil20',
};

export const HIGHLIGHTED_GRADES: HighlightedGrade[] = [
  {
    id: 'algo-1',
    code: 'INFO 00037',
    name: 'Algoritmos y Programación I',
    grade: 20,
    maxGrade: 20,
    period: 'Semestre Abr/Ago 2021-2022',
    category: 'algoritmos',
    badge: 'Nota Máxima 20/20',
    description: 'Calificación perfecta en pensamiento algorítmico, modularización, estructuras de datos elementales y lógica de programación.'
  },
  {
    id: 'logica',
    code: 'INFO 00038',
    name: 'Lógica Computacional',
    grade: 18,
    maxGrade: 20,
    period: 'Semestre Abr/Ago 2021-2022',
    category: 'logica',
    badge: 'Sobresaliente 18/20',
    description: 'Dominio de lógica proposicional, de predicados, métodos de demostración formal y cimientos teóricos de la computación.'
  },
  {
    id: 'calculo-1',
    code: 'FING 00001',
    name: 'Cálculo I',
    grade: 18,
    maxGrade: 20,
    period: 'Semestre Sep/Ene 2022-2023',
    category: 'math',
    badge: 'Sobresaliente 18/20',
    description: 'Análisis matemático riguroso, límites, derivadas, optimización y aplicaciones fundamentales en ingeniería.'
  },
  {
    id: 'dev-soft',
    code: 'INFO 02025',
    name: 'Desarrollo de Software',
    grade: 17,
    maxGrade: 20,
    period: 'Semestre Mar/Jul 25-26',
    category: 'software',
    badge: 'Excelente 17/20',
    description: 'Construcción e integración de sistemas de software profesionales, trabajo colaborativo y buenas prácticas de ingeniería.'
  },
  {
    id: 'diploma-web3',
    code: 'DIPL H7001',
    name: 'Desarrollo Blockchain y Web3',
    grade: 17,
    maxGrade: 20,
    period: 'Periodo Extensión 202507',
    category: 'diploma',
    badge: 'Diplomado UCAB 17/20',
    description: 'Diplomado en desarrollo de contratos inteligentes, arquitectura descentralizada y ecosistemas Web3 en el CIAP UCAB.'
  }
];

export const EDUCATION_PROGRAMS: EducationProgram[] = [
  {
    title: 'Ingeniería Informática (Plan PN8)',
    school: 'Escuela de Ingeniería Informática',
    institution: 'Universidad Católica Andrés Bello',
    campus: 'UCAB Montalbán',
    status: 'En curso (Semestres Avanzados)',
    description: 'Formación académica integral en arquitectura de software, bases de datos, redes, sistemas operativos y resolución algorítmica.',
    highlight: true
  },
  {
    title: 'Diplomado en Desarrollo Blockchain y Web3',
    school: 'Escuela Blockchain, Trading & Cripto (CIAP)',
    institution: 'Universidad Católica Andrés Bello',
    campus: 'UCAB Ccs - Centro Javier',
    status: 'Culminado con Excelencia (Nota: 17/20)',
    description: 'Especialización en desarrollo de Smart Contracts, criptografía aplicada y arquitectura de aplicaciones dApps.',
    highlight: true
  },
  {
    title: 'Curso de Extensión: Bases para Emprender',
    school: 'Facultad de Ciencias Económicas y Sociales',
    institution: 'Universidad Católica Andrés Bello (CIAP)',
    campus: 'UCAB Ccs - Centro Javier',
    status: 'Aprobado',
    description: 'Fundamentos de validación de modelo de negocio, estructuración de startups y gestión emprendedora.'
  },
  {
    title: 'Curso de Extensión: Protocolo Académico, Social e Imagen',
    school: 'Escuela de Recursos Humanos',
    institution: 'Universidad Católica Andrés Bello (CIAP)',
    campus: 'UCAB Ccs - Centro Javier',
    status: 'Aprobado',
    description: 'Normativa institucional, etiqueta ejecutiva, comunicación corporativa e imagen del funcionario de protocolo.'
  }
];
