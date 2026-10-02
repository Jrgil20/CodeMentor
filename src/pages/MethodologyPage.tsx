import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Code, Users, Calendar, BookOpen, PenTool, Target, CheckCircle, Filter, Clock, CalendarDays } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';
import { CURRENT_SEMESTER_SCHEDULE } from '../data/schedule';

const MethodologyPage: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  return (
    <>
      <Helmet>
        <title>Metodología de Enseñanza | CodeMentor</title>
        <meta name="description" content="Aprende sobre mi metodología de enseñanza basada en la práctica, proyectos reales y mentoría personalizada para desarrolladores de software." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                Metodología de Enseñanza
              </h1>
              <p className="text-xl text-blue-100 mb-8">
                Un enfoque práctico y personalizado para convertirte en desarrollador/a de software
              </p>
            </div>
          </div>
        </div>

        {/* Approach Philosophy */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Filosofía de Enseñanza
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Mi metodología se basa en la convicción de que la programación se aprende programando. 
              A diferencia de los cursos tradicionales que saturan con teoría, mi enfoque combina 
              conceptos fundamentales con aplicación inmediata en proyectos reales.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
              Creo que cada estudiante tiene su propio ritmo y estilo de aprendizaje. Por eso, 
              adapto mis clases a tus necesidades específicas, ya sea que busques cambiar de carrera, 
              mejorar en tu trabajo actual, o simplemente aprender una nueva habilidad.
            </p>
            <div className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-lg border border-blue-100 dark:border-blue-800">
              <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
                Lo que me diferencia:
              </h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Experiencia real en maratones de programación y desarrollo de software empresarial
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Enfoque en problemas prácticos que te preparan para entrevistas técnicas reales
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Seguimiento personalizado con feedback detallado sobre tu código
                  </span>
                </li>
                <li className="flex items-start">
                  <CheckCircle size={20} className="text-green-500 mt-1 mr-2 flex-shrink-0" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Conexión con una comunidad de estudiantes para aprendizaje colaborativo
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </Section>

        {/* Methodology Steps */}
        <Section background="light">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            El Proceso de Aprendizaje
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center mb-4">
                <Filter size={24} className="text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                1. Diagnóstico Inicial
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Comenzamos evaluando tu nivel actual, identificando fortalezas y áreas de mejora para crear un plan de aprendizaje personalizado.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center mb-4">
                <Target size={24} className="text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                2. Definición de Objetivos
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Establecemos metas claras y medibles, desde dominar un lenguaje específico hasta prepararte para entrevistas técnicas.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-full flex items-center justify-center mb-4">
                <BookOpen size={24} className="text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                3. Aprendizaje Fundamental
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Cubrimos los conceptos esenciales con explicaciones claras y visuales, asegurándonos de construir una base sólida.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mb-4">
                <PenTool size={24} className="text-red-600 dark:text-red-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                4. Práctica Guiada
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Resolvemos problemas juntos, aplicando los conceptos aprendidos y desarrollando tu intuición para el código.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-full flex items-center justify-center mb-4">
                <Code size={24} className="text-yellow-600 dark:text-yellow-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                5. Proyecto Práctico
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Desarrollamos un proyecto real que consolida tus conocimientos y sirve como muestra de tu portafolio profesional.
              </p>
            </motion.div>

            <motion.div
              variants={itemVariants}
              className="bg-white dark:bg-gray-800 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700"
            >
              <div className="w-12 h-12 bg-indigo-100 dark:bg-indigo-900/30 rounded-full flex items-center justify-center mb-4">
                <Users size={24} className="text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                6. Feedback y Mejora
              </h3>
              <p className="text-gray-600 dark:text-gray-300">
                Revisamos tu código regularmente, identificando patrones a mejorar y refinando tus habilidades técnicas.
              </p>
            </motion.div>
          </motion.div>
        </Section>

        {/* Class Format */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 text-center">
              Formato de las Clases
            </h2>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 mb-8">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Calendar size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
                  Sesiones Individuales
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Duración:</strong> 2 horas por sesión, con frecuencia semanal o bisemanal según tus necesidades.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Formato:</strong> Sesiones en vivo por videollamada con pantalla compartida para poder ver el código en tiempo real.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Estructura:</strong> 30 minutos de revisión de conceptos, 60 minutos de codificación práctica, 30 minutos de revisión y planificación.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span><strong>Herramientas:</strong> Entornos colaborativos de desarrollo, repositorios Git compartidos y herramientas de comunicación asíncrona.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">5</span>
                    <span><strong>Temario a demanda y diagnóstico continuo:</strong> Podés ir pidiéndome los temas específicos que necesites cubrir; durante cada sesión evaluamos dónde están tus fallas o bloqueos para concentrar el esfuerzo y la práctica exactamente allí.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
              <div className="p-6 md:p-8">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                  <Users size={24} className="text-blue-600 dark:text-blue-400 mr-2" />
                  Sesiones Grupales
                </h3>
                <ul className="space-y-3 text-gray-700 dark:text-gray-300">
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">1</span>
                    <span><strong>Desafíos semanales:</strong> Problemas de programación competitiva para resolver en grupo, simulando entornos de entrevistas técnicas.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">2</span>
                    <span><strong>Sesiones de código:</strong> Desarrollo colaborativo de proyectos donde cada estudiante aporta una parte del sistema.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">3</span>
                    <span><strong>Revisiones de código:</strong> Sesiones donde los estudiantes revisan el código de sus compañeros y ofrecen feedback constructivo.</span>
                  </li>
                  <li className="flex items-start">
                    <span className="bg-blue-600 text-white w-6 h-6 rounded-full flex items-center justify-center text-sm mr-3 mt-0.5 flex-shrink-0">4</span>
                    <span><strong>Comunidad:</strong> Acceso a un grupo privado donde compartir recursos, hacer preguntas y conectar con otros estudiantes.</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </Section>

        {/* Schedule / Disponibilidad Section */}
        <Section background="light">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-10">
              <div className="inline-flex items-center justify-center gap-2 px-3 py-1 rounded-full bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider mb-3">
                <CalendarDays size={16} />
                Semestre {CURRENT_SEMESTER_SCHEDULE.semester}
              </div>
              <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">
                Horarios Disponibles
              </h2>
              <p className="text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
                {CURRENT_SEMESTER_SCHEDULE.description} Total estimado de{' '}
                <span className="font-semibold text-blue-600 dark:text-blue-400">
                  {CURRENT_SEMESTER_SCHEDULE.totalWeeklyHours} horas semanales
                </span>{' '}
                dedicadas a clases y mentorías.
              </p>
            </div>

            {/* Desktop Table View */}
            <div className="hidden md:block bg-white dark:bg-gray-800 rounded-xl shadow-lg border border-gray-200 dark:border-gray-700 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="bg-gray-50 dark:bg-gray-700/50 border-b border-gray-200 dark:border-gray-700 text-xs font-semibold uppercase tracking-wider text-gray-600 dark:text-gray-300">
                    <th className="py-4 px-6">Día</th>
                    <th className="py-4 px-6">Jornada</th>
                    <th className="py-4 px-6">Franja Horaria</th>
                    <th className="py-4 px-6 text-center">Horas Estimadas</th>
                    <th className="py-4 px-6">Compromisos / Observaciones</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700 text-sm text-gray-800 dark:text-gray-200">
                  {CURRENT_SEMESTER_SCHEDULE.slots.map((slot) => (
                    <tr
                      key={slot.day}
                      className="hover:bg-blue-50/40 dark:hover:bg-gray-700/40 transition-colors"
                    >
                      <td className="py-4 px-6 font-bold text-gray-900 dark:text-white">
                        {slot.day}
                      </td>
                      <td className="py-4 px-6">
                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                          slot.period === 'mañana'
                            ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                            : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300'
                        }`}>
                          {slot.period}
                        </span>
                      </td>
                      <td className="py-4 px-6 font-medium text-gray-700 dark:text-gray-300">
                        <div className="flex items-center gap-2">
                          <Clock size={16} className="text-blue-500" />
                          <span>{slot.timeRange}</span>
                        </div>
                      </td>
                      <td className="py-4 px-6 text-center font-semibold text-blue-600 dark:text-blue-400">
                        {slot.hours} h
                      </td>
                      <td className="py-4 px-6">
                        {slot.commitmentNote ? (
                          <span className="inline-flex items-center text-xs text-gray-600 dark:text-gray-300 italic bg-gray-100 dark:bg-gray-700/60 px-2.5 py-1 rounded-md">
                            {slot.commitmentNote}
                          </span>
                        ) : (
                          <span className="text-gray-400">—</span>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            {/* Mobile Cards View */}
            <div className="md:hidden space-y-4">
              {CURRENT_SEMESTER_SCHEDULE.slots.map((slot) => (
                <div
                  key={slot.day}
                  className="bg-white dark:bg-gray-800 rounded-xl p-5 shadow-md border border-gray-200 dark:border-gray-700"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white">
                      {slot.day}
                    </h3>
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium capitalize ${
                      slot.period === 'mañana'
                        ? 'bg-amber-100 dark:bg-amber-950/60 text-amber-800 dark:text-amber-300'
                        : 'bg-indigo-100 dark:bg-indigo-950/60 text-indigo-800 dark:text-indigo-300'
                    }`}>
                      {slot.period}
                    </span>
                  </div>

                  <div className="space-y-2 text-sm text-gray-700 dark:text-gray-300 mb-3">
                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5">
                        <Clock size={15} className="text-blue-500" />
                        Horario:
                      </span>
                      <span className="font-semibold">{slot.timeRange}</span>
                    </div>

                    <div className="flex items-center justify-between">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Duración:</span>
                      <span className="font-bold text-blue-600 dark:text-blue-400">{slot.hours} horas</span>
                    </div>
                  </div>

                  {slot.commitmentNote && (
                    <div className="pt-2 border-t border-gray-100 dark:border-gray-700 text-xs text-gray-500 dark:text-gray-400 italic">
                      {slot.commitmentNote}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Note / Callout */}
            <div className="mt-8 text-center">
              <p className="text-xs text-gray-500 dark:text-gray-400">
                * Los horarios pueden coordinarse y ajustarse según la conveniencia mutua y las fechas de evaluaciones.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Listo para empezar tu camino?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              La primera sesión de diagnóstico es gratuita y sin compromiso
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                to="/auto-evaluacion" 
                variant="outline" 
                size="lg"
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                Evalúa tu nivel
              </Button>
              <Button 
                to="/contacto" 
                variant="ghost" 
                size="lg"
                className="text-white border border-white/30 hover:bg-white/10"
              >
                Contactar
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default MethodologyPage;