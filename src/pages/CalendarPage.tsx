import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, BookOpen, Users, AlertCircle, MessageCircle, Send } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { TUTORING_LIMITS, TUTORING_PLANS, UCAB_SUBJECTS, CONTACT_CONFIG, getWhatsappUrl } from '../data/tutoring';

const CalendarPage: React.FC = () => {
  const [selectedPlan, setSelectedPlan] = useState('two-hours');
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
        alert('Hubo un problema. Por favor escribinos por WhatsApp.');
      }
    } catch {
      alert('Error de conexión. Podés coordinar directamente por WhatsApp.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Helmet>
        <title>Agendar Tutoría | CodeMentor UCAB</title>
        <meta name="description" content="Agenda tu clase de programación o tutoría para la UCAB (Estructura de Datos, POO, Desarrollo). Cupos limitados." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Agendar una Tutoría o Clase"
          subtitle="Acompañamiento personalizado para estudiantes de la UCAB y formación práctica"
          centered
          background="light"
        >
          {/* Banner de Cupos */}
          <div className="max-w-4xl mx-auto mb-10">
            <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3 text-amber-900 dark:text-amber-200">
                <AlertCircle className="w-5 h-5 text-amber-600 dark:text-amber-400 flex-shrink-0" />
                <p className="text-sm font-semibold">
                  Disponibilidad actual: solo {TUTORING_LIMITS.availableSpots} cupos activos para asegurar calidad académica.
                </p>
              </div>
              <a
                href={getWhatsappUrl('Hola! Quisiera agendar una tutoría UCAB')}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold px-3.5 py-2 rounded-lg transition-colors"
              >
                <MessageCircle size={15} />
                Agendar por WhatsApp
              </a>
            </div>
          </div>

          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              
              {/* Información y Tarifas */}
              <div className="md:col-span-2 space-y-6">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6"
                >
                  <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-4">
                    Tarifas Transparentes
                  </h3>
                  
                  <div className="space-y-3">
                    {TUTORING_PLANS.map((plan) => (
                      <div
                        key={plan.id}
                        onClick={() => setSelectedPlan(plan.id)}
                        className={`p-3 rounded-lg border text-left cursor-pointer transition-all ${
                          selectedPlan === plan.id
                            ? 'border-blue-500 bg-blue-50/60 dark:bg-blue-950/40 ring-1 ring-blue-500'
                            : 'border-gray-200 dark:border-gray-700 hover:border-gray-300'
                        }`}
                      >
                        <div className="flex justify-between items-center mb-1">
                          <span className="font-semibold text-xs text-gray-900 dark:text-white">
                            {plan.title}
                          </span>
                          <span className="font-bold text-xs text-blue-600 dark:text-blue-400">
                            ${plan.price} {plan.priceSuffix}
                          </span>
                        </div>
                        <p className="text-[11px] text-gray-500 dark:text-gray-400">
                          {plan.rateDetail}
                        </p>
                      </div>
                    ))}
                  </div>

                  <div className="mt-6 pt-4 border-t border-gray-100 dark:border-gray-700 space-y-3 text-xs text-gray-600 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <Clock size={16} className="text-blue-500" />
                      <span>Horarios coordinados según tu disponibilidad</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Users size={16} className="text-blue-500" />
                      <span>Sesiones 1 a 1 por Google Meet / Discord</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <BookOpen size={16} className="text-blue-500" />
                      <span>Ejercicios tipo examen y soporte de dudas</span>
                    </div>
                  </div>
                </motion.div>
              </div>

              {/* Formulario de Solicitud de Reserva */}
              <div className="md:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6 md:p-8">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    Solicitar Horario de Clase
                  </h3>
                  <p className="text-xs text-gray-600 dark:text-gray-300 mb-6">
                    Completá tus datos y la materia que necesitás preparar. Te respondo con los horarios disponibles para esta semana.
                  </p>

                  {submitted ? (
                    <div className="bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-700 p-6 rounded-xl text-center">
                      <CheckCircle className="w-10 h-10 text-emerald-500 mx-auto mb-2" />
                      <h4 className="text-base font-bold text-emerald-900 dark:text-emerald-200 mb-1">
                        ¡Solicitud recibida!
                      </h4>
                      <p className="text-xs text-emerald-800 dark:text-emerald-300 mb-4">
                        Te voy a escribir al correo o WhatsApp para confirmar el día y enviarte el enlace de la sesión.
                      </p>
                      <Button onClick={() => setSubmitted(false)} variant="outline" size="sm">
                        Enviar otra solicitud
                      </Button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <input type="hidden" name="_subject" value="Nueva reserva de tutoría CodeMentor" />
                      <input type="hidden" name="modalidad_seleccionada" value={selectedPlan} />

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Tu nombre
                          </label>
                          <input
                            type="text"
                            name="name"
                            required
                            placeholder="Nombre y apellido"
                            className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Correo electrónico
                          </label>
                          <input
                            type="email"
                            name="email"
                            required
                            placeholder="tu@email.com"
                            className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                        </div>
                      </div>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div>
                          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Materia o Tema
                          </label>
                          <select
                            name="subject"
                            className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                          >
                            {UCAB_SUBJECTS.map((sub) => (
                              <option key={sub.id} value={sub.name}>
                                {sub.name} {sub.isMain ? '(Prioritaria)' : ''}
                              </option>
                            ))}
                            <option value="Curso Vibe Coding">Curso: Bases Vibe Coders</option>
                            <option value="Curso Desarrollo">Curso: Bases Desarrollo</option>
                            <option value="Curso IA">Curso: Bases Uso de la IA</option>
                            <option value="Otro tema">Otro tema particular</option>
                          </select>
                        </div>

                        <div>
                          <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                            Número de WhatsApp (opcional)
                          </label>
                          <input
                            type="tel"
                            name="whatsapp"
                            placeholder="+58 4XX..."
                            className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">
                          ¿Qué temas o dudas específicas necesitás preparar?
                        </label>
                        <textarea
                          name="message"
                          required
                          rows={3}
                          placeholder="Ej: Tengo parcial de Árboles AVL y Grafos la semana que viene..."
                          className="w-full text-xs px-3.5 py-2.5 border rounded-lg dark:bg-gray-700 dark:border-gray-600 dark:text-white focus:ring-2 focus:ring-blue-500 outline-none"
                        ></textarea>
                      </div>

                      <div className="pt-2 flex flex-col sm:flex-row gap-3 items-center justify-between">
                        <button
                          type="submit"
                          disabled={loading}
                          className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold text-xs px-5 py-2.5 rounded-lg transition-colors shadow-sm disabled:opacity-50"
                        >
                          <Send size={15} />
                          {loading ? 'Enviando solicitud...' : 'Enviar solicitud de reserva'}
                        </button>

                        <a
                          href={getWhatsappUrl('Hola! Quisiera agendar una clase directamente')}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold hover:underline inline-flex items-center gap-1"
                        >
                          <MessageCircle size={14} />
                          O escribime directamente por WhatsApp
                        </a>
                      </div>
                    </form>
                  )}
                </div>
              </div>

            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default CalendarPage;