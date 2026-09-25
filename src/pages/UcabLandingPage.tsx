import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { 
  Check, 
  AlertCircle, 
  MessageCircle, 
  ShieldCheck, 
  Send, 
  CheckCircle2,
  ChevronRight,
  MessageSquare
} from 'lucide-react';
import { UCAB_SUBJECTS, TUTORING_PLANS, TUTORING_LIMITS, CONTACT_CONFIG, getWhatsappUrl } from '../data/tutoring';
import { testimonials } from '../data/testimonials';
import Button from '../components/common/Button';

const UcabLandingPage: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    const form = e.currentTarget;
    const formData = new FormData(form);

    try {
      const res = await fetch(CONTACT_CONFIG.formspreeEndpoint, {
        method: 'POST',
        body: formData,
        headers: { Accept: 'application/json' },
      });
      if (res.ok) {
        setSubmitted(true);
      } else {
        alert('Hubo un problema. Por favor escribime por WhatsApp.');
      }
    } catch {
      alert('Error de conexión. Podés escribir directamente por WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Tutorías UCAB | Estructura de Datos y Programación</title>
        <meta 
          name="description" 
          content="Tutorías personalizadas para estudiantes de la UCAB. Enfoque prioritario en Estructura de Datos, POO y materias de la carrera. Cupos limitados y tarifas accesibles." 
        />
      </Helmet>

      {/* Hero UCAB */}
      <section className="pt-28 pb-16 md:pt-36 md:pb-24 bg-gradient-to-b from-blue-50/80 via-white to-gray-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-4xl mx-auto text-center">
            
            {/* Badge de Cupos Estrictos */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-950/70 dark:text-amber-300 border border-amber-300 dark:border-amber-700 mb-6 shadow-sm">
              <AlertCircle size={15} className="text-amber-600 dark:text-amber-400" />
              <span>Solo {TUTORING_LIMITS.availableSpots} cupos activos disponibles este semestre</span>
            </div>

            <h1 className="text-3xl sm:text-5xl md:text-6xl font-black text-gray-900 dark:text-white mb-6 tracking-tight leading-tight">
              Tutorías UCAB: Aprobá <span className="text-blue-600 dark:text-blue-400">Estructura de Datos</span> con Criterio Técnico
            </h1>

            <p className="text-base sm:text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto leading-relaxed">
              Preparación intensiva para parciales, proyectos y laboratorios. Punteros, árboles AVL, grafos y diseño de software explicados directo al grano.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-10">
              <a
                href={getWhatsappUrl('Hola! Soy estudiante de la UCAB y quiero consultar por las tutorías de Estructura de Datos y Bases de Datos')}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-emerald-600 hover:bg-emerald-700 text-white font-semibold text-sm px-6 py-3.5 rounded-xl transition-all shadow-md hover:shadow-lg"
              >
                <MessageCircle size={18} />
                Consultar cupo por WhatsApp
              </a>
              <Button to="#tarifas" variant="outline" size="lg" className="w-full sm:w-auto">
                Ver planes y tarifas ($7.5 / $12 / $20)
              </Button>
            </div>

            {/* Micro métricas */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-8 border-t border-gray-200 dark:border-gray-800 text-left max-w-2xl mx-auto">
              <div>
                <p className="text-xs text-gray-500">Materia troncal</p>
                <p className="text-sm font-bold text-gray-900 dark:text-white">Estructura de Datos</p>
              </div>
              <div>
                <p className="text-xs text-gray-500">Tarifa base / pack</p>
                <p className="text-sm font-bold text-blue-600 dark:text-blue-400">Desde $5/h a $7.50/h</p>
              </div>
              <div className="col-span-2 sm:col-span-1">
                <p className="text-xs text-gray-500">Modalidad grupal</p>
                <p className="text-sm font-bold text-emerald-600 dark:text-emerald-400">$2/h por persona (mín 4)</p>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* Materias */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Materias que Acompañamos
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Todo el contenido se basa en las guías y exigencias reales de las cátedras de la UCAB.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {UCAB_SUBJECTS.map((subject) => (
              <div
                key={subject.id}
                className={`p-6 rounded-2xl border transition-all ${
                  subject.isMain
                    ? 'bg-blue-50/60 dark:bg-blue-950/40 border-blue-400 dark:border-blue-600 ring-2 ring-blue-500/20 shadow-sm'
                    : 'bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700'
                }`}
              >
                {subject.isMain && (
                  <span className="text-[11px] font-bold uppercase tracking-wider text-blue-600 dark:text-blue-400 block mb-2">
                    ★ Enfoque Prioritario
                  </span>
                )}
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                  {subject.name}
                </h3>
                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {subject.description}
                </p>
                <div className="space-y-1">
                  {subject.topics.map((t, idx) => (
                    <div key={idx} className="flex items-center text-xs text-gray-700 dark:text-gray-300">
                      <ChevronRight size={13} className="text-blue-500 mr-1 flex-shrink-0" />
                      <span>{t}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Planes y Tarifas */}
      <section id="tarifas" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Tarifas Pensadas para Ucabistas
            </h2>
            <p className="text-sm text-gray-600 dark:text-gray-400 max-w-xl mx-auto">
              Precios claros, sin sorpresas ni costos ocultos. Descuentos por horas y modalidad grupal.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
            {TUTORING_PLANS.map((plan) => (
              <div
                key={plan.id}
                className={`flex flex-col justify-between rounded-2xl bg-white dark:bg-gray-900 p-6 border shadow-sm relative transition-all ${
                  plan.popular
                    ? 'border-blue-500 ring-2 ring-blue-500/20'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                {plan.badge && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider">
                    {plan.badge}
                  </span>
                )}

                <div>
                  <h3 className="text-base font-bold text-gray-900 dark:text-white mb-1">
                    {plan.title}
                  </h3>
                  <p className="text-[11px] text-gray-500 dark:text-gray-400 mb-4 min-h-[30px]">
                    {plan.subtitle}
                  </p>

                  <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-800">
                    <div className="flex items-baseline gap-1">
                      <span className="text-3xl font-black text-gray-900 dark:text-white">
                        ${plan.price}
                      </span>
                      <span className="text-xs text-gray-500">{plan.priceSuffix}</span>
                    </div>
                    <p className="text-[11px] font-semibold text-blue-600 dark:text-blue-400 mt-1">
                      {plan.rateDetail}
                    </p>
                  </div>

                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                    {plan.description}
                  </p>

                  <ul className="space-y-2 mb-6">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                        <Check size={14} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <a
                  href={getWhatsappUrl(`Hola! Quiero reservar el plan de tutoría: ${plan.title}`)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-2.5 text-xs font-semibold rounded-xl text-center transition-colors block ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-sm'
                      : 'border border-gray-300 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white'
                  }`}
                >
                  Elegir este plan
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reseñas Transparentes */}
      <section className="py-16 md:py-20 bg-white dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-100 text-emerald-800 dark:bg-emerald-950/70 dark:text-emerald-300 mb-3">
              <ShieldCheck size={14} />
              Opiniones Reales
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white mb-3">
              Lo que Dicen Estudiantes de la UCAB
            </h2>
            <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Reseñas 100% transparentes y sin filtrar. Solo se comprueba que hayan cursado efectivamente para garantizar autenticidad.
            </p>
          </div>

          {testimonials.length === 0 ? (
            <div className="max-w-2xl mx-auto text-center p-8 bg-gray-50 dark:bg-gray-800 rounded-2xl border border-dashed border-gray-300 dark:border-gray-700">
              <MessageSquare className="mx-auto text-blue-500 mb-3" size={32} />
              <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2">
                Aún no hay reseñas publicadas
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 max-w-md mx-auto mb-5">
                Transparencia ante todo: cero reseñas ficticias. Si preparaste un parcial o viste clases conmigo, podés ser el primero en compartir tu experiencia honesta.
              </p>
              <a
                href={getWhatsappUrl("Hola Jesús, cursé contigo en la UCAB y me gustaría dejar una reseña para tu web.")}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:underline"
              >
                Enviar testimonio por WhatsApp →
              </a>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
              {testimonials.map((test) => (
                <div
                  key={test.id}
                  className="bg-gray-50 dark:bg-gray-800 p-6 rounded-2xl border border-gray-200 dark:border-gray-700 flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between gap-2 mb-3">
                      <span className="inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40 px-2 py-0.5 rounded-full border border-emerald-200 dark:border-emerald-800">
                        <CheckCircle2 size={12} />
                        Alumno Verificado
                      </span>
                      <span className="text-[11px] text-gray-400">{test.period}</span>
                    </div>
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 italic mb-4 leading-relaxed">
                      "{test.content}"
                    </p>
                  </div>

                  <div className="flex items-center justify-between border-t border-gray-200 dark:border-gray-700 pt-3">
                    <div>
                      <h4 className="text-xs font-bold text-gray-900 dark:text-white">
                        {test.isAnonymous ? 'Estudiante UCAB (Anónimo)' : test.name}
                      </h4>
                      <p className="text-[11px] text-blue-600 dark:text-blue-400">{test.subject}</p>
                    </div>
                    <div className="text-amber-400 text-xs">
                      {'★'.repeat(test.rating || 5)}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Formulario / Contacto */}
      <section className="py-16 md:py-20 bg-gray-50 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-800">
        <div className="container mx-auto px-4 md:px-6">
          <div className="max-w-2xl mx-auto bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-700 shadow-sm">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 text-center">
              Consultar Disponibilidad para la UCAB
            </h3>
            <p className="text-xs text-gray-600 dark:text-gray-400 text-center mb-6">
              Enviá tu consulta y coordinamos el horario para tu primera sesión o preparatoria.
            </p>

            {submitted ? (
              <div className="p-6 bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 rounded-xl text-center text-xs text-emerald-800 dark:text-emerald-200">
                ✓ ¡Mensaje recibido! Te contacto a la brevedad para coordinar la clase.
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <input type="hidden" name="_subject" value="Consulta desde Landing UCAB" />
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Nombre</label>
                    <input type="text" name="name" required placeholder="Tu nombre" className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Correo electrónico</label>
                    <input type="email" name="email" required placeholder="tu@email.com" className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">Materia</label>
                    <select name="subject" className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white">
                      {UCAB_SUBJECTS.map((sub) => (
                        <option key={sub.id} value={sub.name}>
                          {sub.name} {sub.isMain ? '(Prioritaria)' : ''}
                        </option>
                      ))}
                      <option value="Otra materia">Otra materia particular</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">WhatsApp (opcional)</label>
                    <input type="tel" name="whatsapp" placeholder="+58 4XX..." className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white" />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-medium text-gray-700 dark:text-gray-300 mb-1">¿Qué tema específico necesitás preparar?</label>
                  <textarea name="message" rows={3} required placeholder="Contame qué temas entran en tu próximo examen o asignación..." className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-800 dark:border-gray-700 dark:text-white"></textarea>
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-2">
                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors disabled:opacity-50"
                  >
                    <Send size={14} />
                    {loading ? 'Enviando...' : 'Enviar consulta'}
                  </button>

                  <a
                    href={getWhatsappUrl('Hola! Quisiera consultar directamente por las tutorías UCAB')}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                  >
                    <MessageCircle size={15} />
                    O escribime directamente por WhatsApp
                  </a>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default UcabLandingPage;
