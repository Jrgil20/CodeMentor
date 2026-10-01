import { Testimonial } from '../types';
import { CONTACT_CONFIG } from './tutoring';

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Anónimo',
    isAnonymous: true,
    subject: 'Estructura de Datos',
    role: 'Acompañamiento Semestral',
    period: 'Semestre Marzo-Julio 2026',
    verified: true,
    content: 'Realmente fue una ayuda fundamental para lograr pasar estructura, fue un apoyo que sin duda alguna sabía que me podía responder la duda que tuviera o de ver el problema desde otra perspectiva totalmente diferente.\n\nEl contar con esta guía hizo mucho mas amena la materia además de volverla muchísimo más fácil de entender, valió completamente la inversión, si se logró pasar estructuras a la primera y de una forma tan cómoda fue en buena parte por su ayuda.'
  }
];

export const TRANSPARENCY_POLICY = {
  title: "Política de Transparencia y Reseñas Reales",
  statement: "Las opiniones publicadas aquí son 100% reales y sin ningún tipo de filtro ni censura. La única condición para ser publicada es que el estudiante haya cursado efectivamente clases conmigo en la UCAB, lo cual es verificado contra el registro de clases impartidas.",
  formspreeEndpoint: CONTACT_CONFIG.formspreeEndpoint
};