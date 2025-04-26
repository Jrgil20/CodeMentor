import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { ArrowRight, CheckCircle, HelpCircle } from 'lucide-react';
import { questions } from '../data/questions';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const SelfAssessmentPage: React.FC = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);

  const handleAnswerSelect = (value: number) => {
    const newAnswers = [...answers];
    newAnswers[currentStep] = value;
    setAnswers(newAnswers);
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
    setAnswers([]);
    setCurrentStep(0);
    setShowResult(false);
  };

  const calculateScore = () => {
    return answers.reduce((total, current) => total + current, 0);
  };

  const getRecommendation = () => {
    const score = calculateScore();
    const maxScore = questions.length * 4; // Assuming max value per question is 4
    const percentage = (score / maxScore) * 100;

    if (percentage < 30) {
      return {
        title: 'Programa de Fundamentos',
        description: 'Te recomendamos empezar con nuestro programa de fundamentos de programación, diseñado para principiantes absolutos o aquellos con conocimientos muy básicos.',
        course: 'Fundamentos de Programación',
        next: 'Agendar una sesión introductoria gratuita para discutir tus objetivos y crear un plan personalizado.'
      };
    } else if (percentage < 60) {
      return {
        title: 'Programa Intermedio',
        description: 'Ya tienes algunos conocimientos, pero te beneficiarías de nuestro programa intermedio para consolidar tu base y avanzar hacia conceptos más complejos.',
        course: 'Desarrollo Web Full Stack',
        next: 'Solicitar una evaluación técnica personalizada para identificar áreas específicas a trabajar.'
      };
    } else {
      return {
        title: 'Programa Avanzado',
        description: 'Tienes una base sólida. Te recomendamos nuestro programa avanzado, enfocado en algoritmos complejos, patrones de diseño y preparación para entrevistas técnicas.',
        course: 'Algoritmos Avanzados y Preparación para Entrevistas',
        next: 'Agendar una sesión para discutir objetivos específicos y crear un plan de estudio avanzado.'
      };
    }
  };

  return (
    <>
      <Helmet>
        <title>Autoevaluación | CodeMentor</title>
        <meta name="description" content="Realiza esta autoevaluación para determinar tu nivel actual en programación y recibir recomendaciones personalizadas para tu formación." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Autoevaluación"
          subtitle="Responde estas preguntas para ayudarnos a entender tu nivel y ofrecerte el programa más adecuado"
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
                    {questions[currentStep].options.map((option, index) => (
                      <div 
                        key={index}
                        onClick={() => handleAnswerSelect(option.value)}
                        className={`p-4 rounded-lg cursor-pointer transition-all ${
                          answers[currentStep] === option.value
                            ? 'bg-blue-50 dark:bg-blue-900/30 border-2 border-blue-500 dark:border-blue-400'
                            : 'bg-gray-50 dark:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:hover:bg-gray-600'
                        }`}
                      >
                        <div className="flex items-center">
                          <div className={`w-5 h-5 mr-3 rounded-full border flex items-center justify-center ${
                            answers[currentStep] === option.value
                              ? 'border-blue-500 bg-blue-500 dark:border-blue-400 dark:bg-blue-400'
                              : 'border-gray-300 dark:border-gray-500'
                          }`}>
                            {answers[currentStep] === option.value && (
                              <div className="w-2 h-2 rounded-full bg-white"></div>
                            )}
                          </div>
                          <span className={`${
                            answers[currentStep] === option.value
                              ? 'text-gray-900 dark:text-white font-medium'
                              : 'text-gray-700 dark:text-gray-300'
                          }`}>{option.text}</span>
                        </div>
                      </div>
                    ))}
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
                    disabled={answers[currentStep] === undefined}
                    className={`px-4 py-2 rounded-md text-sm font-medium flex items-center ${
                      answers[currentStep] === undefined
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
              className="max-w-3xl mx-auto"
            >
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6">
                  <h3 className="text-2xl font-bold text-white mb-2">
                    Tu Evaluación
                  </h3>
                  <p className="text-blue-100">
                    Basado en tus respuestas, hemos preparado las siguientes recomendaciones
                  </p>
                </div>
                
                <div className="p-6">
                  <div className="mb-6">
                    <h4 className="text-xl font-bold text-gray-900 dark:text-white mb-4 flex items-center">
                      <CheckCircle size={24} className="text-green-500 mr-2" />
                      {getRecommendation().title}
                    </h4>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {getRecommendation().description}
                    </p>
                    
                    <div className="bg-blue-50 dark:bg-blue-900/20 p-4 rounded-lg border border-blue-100 dark:border-blue-800 mb-6">
                      <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                        Curso recomendado:
                      </h5>
                      <p className="text-gray-700 dark:text-gray-300">
                        {getRecommendation().course}
                      </p>
                    </div>
                    
                    <h5 className="font-semibold text-gray-900 dark:text-white mb-2">
                      Próximos pasos:
                    </h5>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {getRecommendation().next}
                    </p>
                    
                    <div className="flex flex-col sm:flex-row sm:justify-between gap-4 mt-8">
                      <Button
                        onClick={handleRestart}
                        variant="outline"
                      >
                        <HelpCircle size={18} className="mr-2" />
                        Volver a realizar la evaluación
                      </Button>
                      
                      <Button
                        to="/contacto"
                        variant="primary"
                      >
                        Contactar para más información
                      </Button>
                    </div>
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