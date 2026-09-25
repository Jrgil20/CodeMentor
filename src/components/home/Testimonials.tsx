import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote, CheckCircle2, ShieldCheck, Send, MessageSquare } from 'lucide-react';
import { testimonials, TRANSPARENCY_POLICY } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [showReviewForm, setShowReviewForm] = useState(false);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isAnonymous, setIsAnonymous] = useState(false);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const handleReviewSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(TRANSPARENCY_POLICY.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setFormSubmitted(true);
      }
    } catch {
      alert('Error de conexión. Podés enviarme tu reseña por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.5, ease: 'easeOut' }
    },
    exit: { 
      opacity: 0, 
      x: -30,
      transition: { duration: 0.3, ease: 'easeIn' }
    }
  };

  const active = testimonials.length > 0 ? testimonials[activeIndex] : null;

  return (
    <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/80 border-t border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Encabezado */}
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-900/40 dark:text-emerald-300 mb-3">
            <ShieldCheck size={14} />
            Transparencia Radical
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Opiniones Reales de Estudiantes UCAB
          </h2>
          <p className="text-sm md:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            {TRANSPARENCY_POLICY.statement}
          </p>
        </div>

        {/* Estado Vacío Sincero */}
        {testimonials.length === 0 ? (
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-sm p-8 border border-dashed border-gray-300 dark:border-gray-700 text-center mb-10">
            <div className="w-12 h-12 rounded-full bg-blue-50 dark:bg-blue-950/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mx-auto mb-4">
              <MessageSquare size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              Aún no hay reseñas publicadas
            </h3>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-6">
              Transparencia total: no publicamos testimonios inventados. Estamos recopilando las primeras opiniones directas y verificadas de estudiantes de la UCAB.
            </p>
            {!showReviewForm && (
              <button
                onClick={() => setShowReviewForm(true)}
                className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 px-5 py-2.5 rounded-xl shadow-sm transition-colors"
              >
                <MessageSquare size={16} />
                ¿Viste clases o preparadurías conmigo? Dejá tu reseña honesta
              </button>
            )}
          </div>
        ) : active ? (
          /* Carrusel de Testimonios */
          <div className="max-w-4xl mx-auto mb-10">
            <div className="relative bg-white dark:bg-gray-900 rounded-2xl shadow-lg p-6 md:p-10 border border-gray-200 dark:border-gray-700">
              <Quote
                size={48}
                className="text-blue-100 dark:text-blue-900/30 absolute top-6 left-6 -z-0"
              />
              
              <div className="relative z-10">
                <motion.div
                  key={activeIndex}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  variants={testimonialVariants}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <span className="inline-flex items-center gap-1 text-xs font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2.5 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                      <CheckCircle2 size={13} />
                      Alumno Verificado UCAB
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {active.period}
                    </span>
                  </div>

                  <p className="text-gray-800 dark:text-gray-200 text-base md:text-lg italic mb-6 leading-relaxed">
                    "{active.content}"
                  </p>
                  
                  <div className="flex items-center justify-between border-t border-gray-100 dark:border-gray-800 pt-4">
                    <div>
                      <h4 className="font-bold text-gray-900 dark:text-white text-base">
                        {active.isAnonymous ? 'Estudiante UCAB (Anónimo)' : active.name}
                      </h4>
                      <p className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                        Materia: {active.subject}
                      </p>
                    </div>
                    <div className="flex text-amber-400 text-sm">
                      {Array.from({ length: active.rating || 5 }).map((_, i) => (
                        <span key={i}>★</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              </div>
              
              {/* Controles */}
              <div className="flex justify-between items-center mt-8 pt-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Testimonio anterior"
                >
                  <ChevronLeft size={20} className="text-gray-700 dark:text-gray-300" />
                </button>
                
                <div className="flex space-x-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setActiveIndex(index)}
                      className={`w-2.5 h-2.5 rounded-full transition-all ${
                        index === activeIndex
                          ? 'bg-blue-600 dark:bg-blue-500 w-6'
                          : 'bg-gray-300 dark:bg-gray-700'
                      }`}
                      aria-label={`Ir al testimonio ${index + 1}`}
                    />
                  ))}
                </div>
                
                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                  aria-label="Siguiente testimonio"
                >
                  <ChevronRight size={20} className="text-gray-700 dark:text-gray-300" />
                </button>
              </div>
            </div>
          </div>
        ) : null}

        {/* Llamado a Ex-Alumnos si hay testimonios existentes */}
        {testimonials.length > 0 && !showReviewForm && (
          <div className="max-w-2xl mx-auto text-center">
            <button
              onClick={() => setShowReviewForm(true)}
              className="inline-flex items-center gap-2 text-xs md:text-sm font-semibold text-blue-600 dark:text-blue-400 hover:underline bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-700 px-4 py-2.5 rounded-xl shadow-sm"
            >
              <MessageSquare size={16} />
              ¿Viste clases o tutorías conmigo? Dejá tu reseña honesta acá
            </button>
          </div>
        )}

        {/* Formulario de Reseña */}
        {showReviewForm && (
          <div className="max-w-2xl mx-auto">
            <div className="bg-white dark:bg-gray-900 rounded-xl p-6 border border-gray-200 dark:border-gray-700 text-left shadow-md">
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                Dejá tu opinión sincera (se verificará que hayas cursado)
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-4">
                Tu comentario se publicará tal cual lo envíes. Solo comprobamos que hayas visto clases en la UCAB o de forma particular.
              </p>

              {formSubmitted ? (
                <div className="p-4 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 rounded-lg text-emerald-800 dark:text-emerald-300 text-xs">
                  ✓ ¡Gracias por tu reseña! Apenas verifiquemos tu período de clases se publicará directamente en la página.
                </div>
              ) : (
                <form onSubmit={handleReviewSubmit} className="space-y-3">
                  <input type="hidden" name="_subject" value="Nueva reseña de estudiante para CodeMentor" />
                  <div>
                    <div className="flex items-center justify-between mb-1">
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300">
                        {isAnonymous ? 'Tu nombre o contacto (privado, solo para verificar)' : 'Tu nombre o iniciales'}
                      </label>
                      <label className="inline-flex items-center gap-1.5 cursor-pointer text-xs text-blue-600 dark:text-blue-400 select-none">
                        <input
                          type="checkbox"
                          name="is_anonymous"
                          checked={isAnonymous}
                          onChange={(e) => setIsAnonymous(e.target.checked)}
                          className="w-3.5 h-3.5 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                        />
                        <span>Publicar anónima</span>
                      </label>
                    </div>
                    <input
                      type="text"
                      name="name"
                      required={!isAnonymous}
                      placeholder={isAnonymous ? 'Opcional: tu nombre/cédula para verificar (se publicará como Anónimo)' : 'Ej: Juan D.'}
                      className="w-full text-xs px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"
                    />
                    <input
                      type="hidden"
                      name="display_preference"
                      value={isAnonymous ? 'Anónimo (No publicar nombre real)' : 'Público'}
                    />
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Materia cursada</label>
                      <input type="text" name="subject" required placeholder="Ej: Estructura de Datos" className="w-full text-xs px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                    </div>
                    <div>
                      <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Período o semestre</label>
                      <input type="text" name="period" required placeholder="Ej: Semestre 2024-15" className="w-full text-xs px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Tu reseña (lo bueno y lo que se puede mejorar)</label>
                    <textarea name="message" required rows={3} placeholder="Contá tu experiencia real con las clases..." className="w-full text-xs px-3 py-2 border rounded-md dark:bg-gray-800 dark:border-gray-700 dark:text-white"></textarea>
                  </div>
                  <div className="flex gap-2">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="inline-flex items-center gap-1.5 bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold px-4 py-2 rounded-lg transition-colors disabled:opacity-50"
                    >
                      <Send size={14} />
                      {isSubmitting ? 'Enviando...' : 'Enviar reseña'}
                    </button>
                    <button
                      type="button"
                      onClick={() => setShowReviewForm(false)}
                      className="text-xs text-gray-500 hover:underline px-3 py-2"
                    >
                      Cancelar
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>
        )}

      </div>
    </div>
  );
};

export default Testimonials;