import { Question } from '../types';

export const questions: Question[] = [
  {
    id: 1,
    question: "¿Es tu primera vez cursando la materia o la estás repitiendo?",
    options: [
      { text: "Es mi primera vez cursando la materia", value: 1, key: "first_time" },
      { text: "Ya la cursé antes / La estoy repitiendo", value: 2, key: "repeating" },
      { text: "Aún no la he cursado, quiero adelantar contenidos", value: 1, key: "first_time" }
    ]
  },
  {
    id: 2,
    question: "¿En qué área sientes que tienes mayor dificultad o desafío?",
    options: [
      { text: "Principalmente en la teoría y conceptos abstractos", value: 2, key: "theory" },
      { text: "Principalmente en la práctica, lógica de código y ejercicios", value: 3, key: "practice" },
      { text: "Tengo dificultades tanto en la teoría como en la práctica", value: 4, key: "both" },
      { text: "No tengo dificultades graves, me siento cómodo aprendiendo a mi ritmo", value: 1, key: "none" }
    ]
  },
  {
    id: 3,
    question: "¿Perteneces a la UCAB (Universidad Católica Andrés Bello) o a otra institución?",
    options: [
      { text: "Soy estudiante de la UCAB", value: 2, key: "ucab" },
      { text: "Soy estudiante de otra universidad o instituto", value: 2, key: "other_univ" },
      { text: "Aprendo de manera autodidacta / No estoy en universidad", value: 1, key: "self_taught" }
    ]
  },
  {
    id: 4,
    question: "¿Cómo prefieres llevar tu proceso de estudio actualmente?",
    options: [
      { text: "Estudio en solitario aprovechando guías, lecturas y videos explicativos", value: 1, key: "autonomous" },
      { text: "Prefiero un tutor que me oriente paso a paso y resuelva mis dudas directas", value: 3, key: "guided" },
      { text: "Una combinación de autoestudio con soporte puntual cuando me trabo", value: 2, key: "hybrid" }
    ]
  },
  {
    id: 5,
    question: "¿Qué tipo de apoyo inmediato buscas para tu situación actual?",
    options: [
      { text: "Recursos y guías de libre acceso para aprender a mi propio ritmo", value: 1, key: "resources" },
      { text: "Una clase de asesoría gratuita para organizar mi plan de estudio e independizarme", value: 3, key: "advisory" },
      { text: "Preparación intensiva para parciales, proyectos y entregas específicas", value: 4, key: "intensive" }
    ]
  }
];