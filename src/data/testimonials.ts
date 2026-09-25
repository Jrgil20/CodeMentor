import { Testimonial } from '../types';
import { CONTACT_CONFIG } from './tutoring';

export const testimonials: Testimonial[] = [];

export const TRANSPARENCY_POLICY = {
  title: "Política de Transparencia y Reseñas Reales",
  statement: "Las opiniones publicadas aquí son 100% reales y sin ningún tipo de filtro ni censura. La única condición para ser publicada es que el estudiante haya cursado efectivamente clases conmigo en la UCAB, lo cual es verificado contra el registro de clases impartidas.",
  formspreeEndpoint: CONTACT_CONFIG.formspreeEndpoint
};