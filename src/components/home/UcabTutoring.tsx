import React from 'react';
import { motion } from 'framer-motion';
import { Check, BookOpen, AlertCircle, MessageCircle } from 'lucide-react';
import Button from '../common/Button';
import { UCAB_SUBJECTS, TUTORING_PLANS, TUTORING_LIMITS } from '../../data/tutoring';

const UcabTutoring: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5, ease: 'easeOut' },
    },
  };

  return (
    <section id="tutorias-ucab" className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800/60 border-y border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        
        {/* Banner de Cupos Limitados */}
        <div className="max-w-4xl mx-auto mb-10">
          <div className="bg-amber-50 dark:bg-amber-950/40 border border-amber-300 dark:border-amber-700/60 rounded-xl p-4 md:p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3 text-amber-900 dark:text-amber-200">
              <AlertCircle className="w-6 h-6 text-amber-600 dark:text-amber-400 flex-shrink-0" />
              <div>
                <p className="font-semibold text-sm md:text-base">
                  Cupos estrictamente limitados: solo {TUTORING_LIMITS.availableSpots} lugares disponibles este semestre
                </p>
                <p className="text-xs md:text-sm text-amber-800/80 dark:text-amber-300/80">
                  {TUTORING_LIMITS.notice}
                </p>
              </div>
            </div>
            <a
              href="https://wa.me/584120000000?text=Hola!%20Quisiera%20consultar%20disponibilidad%20de%20cupo%20para%20tutor%C3%ADas%20UCAB"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 whitespace-nowrap bg-emerald-600 hover:bg-emerald-700 text-white text-xs md:text-sm font-semibold px-4 py-2 rounded-lg transition-colors shadow-sm"
            >
              <MessageCircle size={16} />
              Consultar cupo por WhatsApp
            </a>
          </div>
        </div>

        {/* Encabezado */}
        <div className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-blue-100 text-blue-800 dark:bg-blue-900/40 dark:text-blue-300 mb-3">
            <BookOpen size={14} />
            Programa Especial UCAB
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Tutorías Universitarias UCAB
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Acompañamiento especializado con foco prioritario en <strong className="text-blue-600 dark:text-blue-400">Estructura de Datos</strong> y materias troncales de la carrera.
          </p>
        </div>

        {/* Materias */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-6xl mx-auto mb-16">
          {UCAB_SUBJECTS.map((subject) => (
            <div
              key={subject.id}
              className={`p-5 rounded-xl border transition-all ${
                subject.isMain
                  ? 'bg-blue-50/70 dark:bg-blue-950/30 border-blue-300 dark:border-blue-700 ring-2 ring-blue-500/20'
                  : 'bg-white dark:bg-gray-850 border-gray-200 dark:border-gray-700 hover:border-blue-300 dark:hover:border-blue-700'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-xs font-semibold px-2 py-0.5 rounded bg-blue-100 dark:bg-blue-900/50 text-blue-700 dark:text-blue-300">
                  {subject.isMain ? '★ Enfoque Principal' : 'Materia UCAB'}
                </span>
              </div>
              <h3 className="font-bold text-base text-gray-900 dark:text-white mb-2">
                {subject.name}
              </h3>
              <p className="text-xs text-gray-600 dark:text-gray-400 mb-3 leading-relaxed">
                {subject.description}
              </p>
              <div className="flex flex-wrap gap-1">
                {subject.topics.map((t, idx) => (
                  <span
                    key={idx}
                    className="text-[11px] px-2 py-0.5 rounded bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tarifas y Planes */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
            Planes y Tarifas Flexibles
          </h3>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Elegí la modalidad que mejor se adapte a tu ritmo de estudio: individual, intensivo o grupal.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-7xl mx-auto">
          {TUTORING_PLANS.map((plan, index) => (
            <motion.div
              key={plan.id}
              className={`flex flex-col justify-between rounded-xl bg-white dark:bg-gray-850 p-6 border shadow-sm transition-all hover:shadow-md relative ${
                plan.popular
                  ? 'border-blue-500 ring-2 ring-blue-500/20 shadow-blue-500/10'
                  : 'border-gray-200 dark:border-gray-700'
              }`}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-50px' }}
              variants={cardVariants}
              custom={index}
            >
              {plan.badge && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-blue-600 text-white text-[11px] font-bold px-2.5 py-0.5 rounded-full uppercase tracking-wider shadow-sm">
                  {plan.badge}
                </span>
              )}

              <div>
                <h4 className="text-lg font-bold text-gray-900 dark:text-white mb-1">
                  {plan.title}
                </h4>
                <p className="text-xs text-gray-500 dark:text-gray-400 mb-4 min-h-[32px]">
                  {plan.subtitle}
                </p>

                <div className="mb-4 pb-4 border-b border-gray-100 dark:border-gray-750">
                  <div className="flex items-baseline gap-1">
                    <span className="text-3xl font-extrabold text-gray-900 dark:text-white">
                      ${plan.price}
                    </span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      {plan.priceSuffix}
                    </span>
                  </div>
                  <span className="text-[11px] font-medium text-blue-600 dark:text-blue-400">
                    {plan.rateDetail}
                  </span>
                </div>

                <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                  {plan.description}
                </p>

                <ul className="space-y-2 mb-6">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start text-xs text-gray-600 dark:text-gray-300">
                      <Check size={14} className="text-emerald-500 mt-0.5 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <Button
                  to="/contacto"
                  variant={plan.popular ? 'primary' : 'outline'}
                  fullWidth
                  className="text-xs py-2"
                >
                  Reservar clase
                </Button>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default UcabTutoring;
