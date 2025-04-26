import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Clock, Calendar as CalendarIcon, CheckCircle, BookOpen, Users } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const CalendarPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Agendar Clase | CodeMentor</title>
        <meta name="description" content="Agenda una clase de programación personalizada. Primera sesión de diagnóstico gratuita para determinar tu nivel y establecer objetivos." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Agendar una Clase"
          subtitle="Selecciona el horario que mejor se adapte a tu disponibilidad"
          centered
          background="light"
        >
          <div className="max-w-5xl mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8">
              <div className="md:col-span-2">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
                >
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                      Información de las Clases
                    </h3>
                    
                    <div className="space-y-6">
                      <div className="flex items-start">
                        <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Duración</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            Las sesiones tienen una duración de 2 horas
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <CalendarIcon className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Frecuencia</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            Se recomienda una frecuencia semanal para un progreso óptimo
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Materiales</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            Acceso a todos los materiales y ejercicios a través de nuestra plataforma
                          </p>
                        </div>
                      </div>
                      
                      <div className="flex items-start">
                        <Users className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                        <div>
                          <h4 className="font-medium text-gray-900 dark:text-white mb-1">Formato</h4>
                          <p className="text-gray-600 dark:text-gray-300">
                            Clases individuales por videollamada, con acceso a soporte entre sesiones
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div className="bg-blue-50 dark:bg-blue-900/20 p-6 border-t border-blue-100 dark:border-blue-800">
                    <div className="flex items-start">
                      <CheckCircle className="w-5 h-5 text-green-500 mt-0.5 mr-3 flex-shrink-0" />
                      <div>
                        <h4 className="font-medium text-gray-900 dark:text-white mb-1">Primera Sesión Gratuita</h4>
                        <p className="text-gray-700 dark:text-gray-300">
                          La primera sesión de diagnóstico (30 minutos) es completamente gratuita y sin compromiso.
                        </p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </div>
              
              <div className="md:col-span-3">
                <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700 p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Calendario de Disponibilidad
                  </h3>
                  
                  <p className="text-gray-700 dark:text-gray-300 mb-6">
                    A continuación podrás ver mi disponibilidad y seleccionar el día y hora que mejor se adapte a tu agenda. 
                    Una vez realizada la reserva, recibirás un correo de confirmación con los detalles de la sesión.
                  </p>
                  
                  <div className="bg-gray-100 dark:bg-gray-700 p-8 rounded-lg border border-gray-200 dark:border-gray-600 mb-6 flex items-center justify-center">
                    <p className="text-gray-800 dark:text-gray-200 italic">
                      Aquí iría integrado el calendario de reservas (Calendly, Acuity, etc.)
                    </p>
                  </div>
                  
                  <div className="mt-6">
                    <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
                      ¿Prefieres coordinar por otro medio? También puedes contactarme directamente:
                    </p>
                    
                    <div className="flex flex-col sm:flex-row gap-4">
                      <Button 
                        to="/contacto" 
                        variant="outline"
                      >
                        Contacto
                      </Button>
                      <Button 
                        href="mailto:info@codementor.com" 
                        variant="ghost"
                      >
                        info@codementor.com
                      </Button>
                    </div>
                  </div>
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