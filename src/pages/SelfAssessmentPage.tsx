import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, HelpCircle, BookOpen, Calendar, Sparkles, UserCheck } from 'lucide-react';
import { questions } from '../data/questions';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const SelfAssessmentPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [selectedKeys, setSelectedKeys] = useState<string[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (key?: string) => {
    if (!key) return;
    const newKeys = [...selectedKeys];
    newKeys[currentStep] = key;
    setSelectedKeys(newKeys);
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(currentStep + 1);
    } else {
      setShowResult(true);
    }
  };

  const handlePrevious = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const handleRestart = () => {
    setSelectedKeys([]);
    setCurrentStep(0);
    setShowResult(false);
  };

  // Diagnosis logic
  const isFirstTime = selectedKeys[0] === 'first_time';
  const isRepeating = selectedKeys[0] === 'repeating';
  const hasPracticeDiff = selectedKeys[1] === 'practice' || selectedKeys[1] === 'both';
  const prefersAutonomous = selectedKeys[3] === 'autonomous' || selectedKeys[4] === 'resources';

  // Recommend self-study for first-time learners who prefer autonomous learning and don't have urgent practice blocks
  const isSelfStudyRecommended = isFirstTime && !isRepeating && !hasPracticeDiff && prefersAutonomous;

  return (
    <>
      <Helmet>
        <title>Autoevaluación | CodeMentor</title>
        <meta
          name="description"
          content="Realiza nuestra autoevaluación guiada para descubrir la mejor ruta de estudio: autoaprendizaje en solitario con recursos o una clase de asesoría gratuita personalizada."
        />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Autoevaluación de Estudio"
          subtitle="Responde estas breves preguntas para recomendarte la mejor ruta: aprendizaje autónomo con recursos o una clase de asesoría gratuita de orientación."
          centered
          background="light"
        >
          {!showResult ? (
            <div className="max-w-2xl mx-auto">
              <div className="mb-8">
                <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5">
                  <div
                    className="bg-blue-600 h-2.5 rounded-full transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
                <div className="flex justify-between mt-2 text-sm text-gray-600 dark:text-gray-400">
                  <span>Pregunta {currentStep + 1} de {questions.length}</span>
                  <span>{Math.round(((currentStep + 1) / questions.length) * 100)}% completado</span>
                </div>
              </div>

              <motion.div
                key={currentStep}
                initial={{ opacity: 0, x: 20 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -20 }}
                transition={{ duration: 0.3 }}
              >
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md p-6 mb-6 border border-gray-200 dark:border-gray-700">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    {questions[currentStep].question}
                  </h3>

                  <div className="space-y-3">
                    {questions[currentStep].options.map((option, index) => {
                      const isSelected = selectedKeys[currentStep] === option.key;
                      return (
                        <div
                          key={index}
                          onClick={() => handleAnswerSelect(option.key)}
                          className={`p-4 rounded-lg cursor-pointer transition-all ${
                            isSelected
                              ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400 shadow-sm'
                              : 'bg-gray-50 dark:bg-gray-700/60 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                          }`}
                        >
                          <div className="flex items-center">
                            <div
                              className={`w-5 h-5 mr-3 rounded-full border flex items-center justify-center transition-colors ${
                                isSelected
                                  ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400'
                                  : 'border-gray-300 dark:border-gray-500'
                              }`}
                            >
                              {isSelected && <div className="w-2 h-2 rounded-full bg-white"></div>}
                            </div>
                            <span
                              className={`${
                                isSelected
                                  ? 'text-gray-900 dark:text-white font-medium'
                                  : 'text-gray-700 dark:text-gray-300'
                              }`}
                            >
                              {option.text}
                            </span>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </div>

                <div className="flex justify-between">
                  <button
                    onClick={handlePrevious}
                    disabled={currentStep === 0}
                    className={`px-4 py-2 rounded-md text-sm font-medium ${
                      currentStep === 0
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                        : 'bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
                    }`}
                  >
                    Anterior
                  </button>

                  <button
                    onClick={handleNext}
                    disabled={selectedKeys[currentStep] === undefined}
                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                      selectedKeys[currentStep] === undefined
                        ? 'bg-gray-100 dark:bg-gray-800 text-gray-400 dark:text-gray-600 cursor-not-allowed'
                        : 'bg-blue-600 text-white hover:bg-blue-700'
                    }`}
                  >
                    {currentStep === questions.length - 1 ? 'Ver resultado' : 'Siguiente'}
                    <ArrowRight size={16} className="ml-1" />
                  </button>
                </div>
              </motion.div>
            </div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="max-w-4xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 md:p-8 text-white">
                  <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-white/20 backdrop-blur-sm text-white mb-3">
                    <Sparkles size={14} className="mr-1.5" />
                    Diagnóstico Completado
                  </span>
                  <h3 className="text-2xl md:text-3xl font-bold mb-2">
                    Tu Plan de Estudio Personalizado
                  </h3>
                  <p className="text-blue-100 max-w-2xl text-sm md:text-base">
                    Analizamos tu situación actual. A continuación te presentamos las dos alternativas diseñadas para ti: aprender de forma autónoma con nuestros recursos o agendar una clase de asesoría gratuita.
                  </p>
                </div>

                <div className="p-6 md:p-8">
                  <div className="grid md:grid-cols-2 gap-6 mb-8">
                    {/* Tarjeta 1: Aprender en solitario */}
                    <div
                      className={`relative flex flex-col justify-between p-6 rounded-xl border transition-all ${
                        isSelfStudyRecommended
                          ? 'border-blue-500 dark:border-blue-400 bg-blue-50/40 dark:bg-blue-900/20 ring-2 ring-blue-500/20 shadow-md'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      {isSelfStudyRecommended && (
                        <div className="absolute -top-3 left-4 bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          Opción Recomendada
                        </div>
                      )}

                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-blue-100 dark:bg-blue-900/50 text-blue-600 dark:text-blue-400 flex items-center justify-center mr-3">
                            <BookOpen size={22} />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                              Aprender en Solitario
                            </h4>
                            <span className="text-xs text-blue-600 dark:text-blue-400 font-medium">
                              Ruta con Recursos Gratuitos
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Ideal si estás viendo la materia por primera vez y prefieres estudiar a tu propio ritmo explorando material organizado por temas.
                        </p>

                        <ul className="space-y-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                            <span>Acceso a guías teóricas y ejercicios resueltos.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                            <span>Videos y documentación seleccionada.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-green-500 mr-2 mt-0.5 shrink-0" />
                            <span>Estudia a tu propio ritmo sin horarios.</span>
                          </li>
                        </ul>
                      </div>

                      <Button
                        to="/recursos"
                        variant={isSelfStudyRecommended ? 'primary' : 'outline'}
                        className="w-full justify-center"
                      >
                        <BookOpen size={18} className="mr-2" />
                        Explorar Recursos Gratis
                      </Button>
                    </div>

                    {/* Tarjeta 2: Clase de Asesoría Gratuita */}
                    <div
                      className={`relative flex flex-col justify-between p-6 rounded-xl border transition-all ${
                        !isSelfStudyRecommended
                          ? 'border-purple-500 dark:border-purple-400 bg-purple-50/40 dark:bg-purple-900/20 ring-2 ring-purple-500/20 shadow-md'
                          : 'border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800/80 hover:border-gray-300 dark:hover:border-gray-600'
                      }`}
                    >
                      {!isSelfStudyRecommended && (
                        <div className="absolute -top-3 left-4 bg-purple-600 text-white text-xs font-bold px-3 py-1 rounded-full shadow-sm">
                          Opción Recomendada
                        </div>
                      )}

                      <div>
                        <div className="flex items-center mb-4">
                          <div className="w-10 h-10 rounded-lg bg-purple-100 dark:bg-purple-900/50 text-purple-600 dark:text-purple-400 flex items-center justify-center mr-3">
                            <UserCheck size={22} />
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900 dark:text-white">
                              Clase de Asesoría Gratuita
                            </h4>
                            <span className="text-xs text-purple-600 dark:text-purple-400 font-medium">
                              Guianza 1 a 1 y Diagnóstico
                            </span>
                          </div>
                        </div>

                        <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                          Recomendada especialmente si estás repitiendo la materia, tienes dudas prácticas/teóricas específicas o necesitas un plan guiado.
                        </p>

                        <ul className="space-y-2 mb-6 text-sm text-gray-700 dark:text-gray-300">
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0" />
                            <span>Sesión gratuita personalizada con un tutor.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0" />
                            <span>Revisión de trabas en código, lógica o teoría.</span>
                          </li>
                          <li className="flex items-start">
                            <CheckCircle size={16} className="text-purple-500 mr-2 mt-0.5 shrink-0" />
                            <span>Diseño de plan para continuar tu estudio autónomo.</span>
                          </li>
                        </ul>
                      </div>

                      <Button
                        to="/contacto"
                        variant={!isSelfStudyRecommended ? 'primary' : 'outline'}
                        className="w-full justify-center"
                      >
                        <Calendar size={18} className="mr-2" />
                        Solicitar Asesoría Gratuita
                      </Button>
                    </div>
                  </div>

                  <div className="flex justify-center pt-4 border-t border-gray-200 dark:border-gray-700">
                    <Button
                      onClick={handleRestart}
                      variant="outline"
                      size="sm"
                    >
                      <HelpCircle size={16} className="mr-2" />
                      Volver a realizar la evaluación
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </Section>
      </div>
    </>
  );
};

export default SelfAssessmentPage;