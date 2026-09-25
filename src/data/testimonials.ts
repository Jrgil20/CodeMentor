import { Testimonial } from '../types';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Alejandro V.",
    subject: "Estructura de Datos (UCAB)",
    period: "Semestre 2024-15",
    verified: true,
    content: "Las clases son intensas y no te regala nada: te hace picar código y entender la memoria con punteros hasta que te sale. Gracias al pack intensivo antes del segundo parcial salvé la materia que la tenía casi perdida.",
    rating: 5
  },
  {
    id: 2,
    name: "Mariana G.",
    subject: "Programación Orientada a Objetos (UCAB)",
    period: "Semestre 2024-15",
    verified: true,
    content: "A veces va rápido si no le decís que frene, pero la paciencia que tiene para explicar polimorfismo y diseño con ejemplos reales es increíble. Además los ejercicios que prepara son exactamente iguales a los que pide el profesor.",
    rating: 4
  },
  {
    id: 3,
    name: "Gabriel R.",
    subject: "Estructura de Datos (UCAB)",
    period: "Semestre 2023-20",
    verified: true,
    content: "Vimos árboles AVL y grafos en 2 sesiones que me sirvieron más que un mes entero en la facultad. Es muy directo y te dice la verdad si estás mal preparado para el examen.",
    rating: 5
  },
  {
    id: 4,
    name: "Santiago P.",
    subject: "Ingeniería de Software / Desarrollo (UCAB)",
    period: "Semestre 2024-20",
    verified: true,
    content: "Hicimos las tutorías en grupo con 4 compañeros para preparar el proyecto semestral. Por $2 cada uno nos ahorró semanas de dolores de cabeza con Git y arquitectura.",
    rating: 5
  }
];

export const TRANSPARENCY_POLICY = {
  title: "Política de Transparencia y Reseñas Reales",
  statement: "Las opiniones publicadas aquí son 100% reales y sin ningún tipo de filtro ni censura. La única condición para ser publicada es que el estudiante haya cursado efectivamente clases conmigo en la UCAB, lo cual es verificado contra el registro de clases impartidas.",
  formspreeEndpoint: "https://formspree.io/f/xeojygpr"
};