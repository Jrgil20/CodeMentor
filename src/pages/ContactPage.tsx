import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Mail, MessageSquare, Phone, MapPin, Send, Calendar, Clock } from 'lucide-react';
import { useForm } from 'react-hook-form';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

type FormData = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const ContactPage: React.FC = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage('');
    try {
      const response = await fetch('https://formspree.io/f/xeojygpr', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json',
        },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        setErrorMessage('Hubo un problema al enviar. Por favor escribime por WhatsApp.');
      }
    } catch {
      setErrorMessage('Error de red. Podés contactarme directamente por WhatsApp.');
    } finally {
      setIsSubmitting(false);
    }
  };

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
        <title>Contacto | CodeMentor</title>
        <meta name="description" content="Contáctame para agendar clases personalizadas de programación, consultas sobre mentoría o información sobre cursos y recursos disponibles." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Contacto"
          subtitle="Estoy aquí para responder tus preguntas y ayudarte a comenzar tu camino en la programación"
          centered
          background="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 max-w-6xl mx-auto">
            <div className="md:col-span-2">
              <motion.div
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700"
              >
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Información de Contacto
                  </h3>
                  
                  <motion.div variants={itemVariants} className="flex items-start mb-6">
                    <Mail className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Email</h4>
                      <a href="mailto:info@codementor.com" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        info@codementor.com
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start mb-6">
                    <Phone className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Teléfono</h4>
                      <a href="tel:+5491155555555" className="text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors">
                        +54 9 11 5555-5555
                      </a>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start mb-6">
                    <MapPin className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Ubicación</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Buenos Aires, Argentina (Clases remotas disponibles)
                      </p>
                    </div>
                  </motion.div>
                  
                  <motion.div variants={itemVariants} className="flex items-start">
                    <Clock className="w-5 h-5 text-blue-600 dark:text-blue-400 mt-0.5 mr-3 flex-shrink-0" />
                    <div>
                      <h4 className="font-medium text-gray-900 dark:text-white mb-1">Horarios</h4>
                      <p className="text-gray-600 dark:text-gray-300">
                        Lunes a Viernes: 9:00 - 20:00<br />
                        Sábados: 10:00 - 15:00
                      </p>
                    </div>
                  </motion.div>
                </div>
                
                <div className="bg-gray-50 dark:bg-gray-700 p-6 border-t border-gray-200 dark:border-gray-600">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
                    Otras formas de contacto
                  </h3>
                  
                  <div className="space-y-4">
                    <motion.div variants={itemVariants}>
                      <Button 
                        to="/calendario" 
                        variant="outline" 
                        className="w-full justify-start"
                      >
                        <Calendar size={18} className="mr-2" />
                        Agendar una clase
                      </Button>
                    </motion.div>
                    
                    <motion.div variants={itemVariants}>
                      <Button 
                        href="https://wa.me/5491155555555" 
                        variant="outline" 
                        className="w-full justify-start"
                      >
                        <MessageSquare size={18} className="mr-2" />
                        Enviar WhatsApp
                      </Button>
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="md:col-span-3">
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-md overflow-hidden border border-gray-200 dark:border-gray-700">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-6">
                    Envíame un mensaje
                  </h3>
                  
                  {isSubmitted ? (
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5 }}
                      className="bg-green-50 dark:bg-green-900/20 p-6 rounded-lg border border-green-100 dark:border-green-800 mb-6"
                    >
                      <h4 className="font-semibold text-gray-900 dark:text-white mb-2 flex items-center">
                        <CheckCircle size={20} className="text-green-500 mr-2" />
                        Mensaje enviado con éxito
                      </h4>
                      <p className="text-gray-700 dark:text-gray-300">
                        Gracias por contactarme. Te responderé a la brevedad posible.
                      </p>
                      <Button 
                        onClick={() => setIsSubmitted(false)}
                        variant="outline"
                        className="mt-4"
                      >
                        Enviar otro mensaje
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                          <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Nombre completo
                          </label>
                          <input
                            id="name"
                            type="text"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                              errors.name ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="Tu nombre"
                            {...register('name', { required: 'El nombre es requerido' })}
                          />
                          {errors.name && (
                            <p className="mt-1 text-sm text-red-500">{errors.name.message}</p>
                          )}
                        </div>
                        
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                            Correo electrónico
                          </label>
                          <input
                            id="email"
                            type="email"
                            className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                              errors.email ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                            }`}
                            placeholder="tu@email.com"
                            {...register('email', { 
                              required: 'El email es requerido',
                              pattern: {
                                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                message: 'Email inválido'
                              }
                            })}
                          />
                          {errors.email && (
                            <p className="mt-1 text-sm text-red-500">{errors.email.message}</p>
                          )}
                        </div>
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Asunto
                        </label>
                        <input
                          id="subject"
                          type="text"
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.subject ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                          placeholder="¿Sobre qué quieres hablar?"
                          {...register('subject', { required: 'El asunto es requerido' })}
                        />
                        {errors.subject && (
                          <p className="mt-1 text-sm text-red-500">{errors.subject.message}</p>
                        )}
                      </div>
                      
                      <div>
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                          Mensaje
                        </label>
                        <textarea
                          id="message"
                          rows={5}
                          className={`w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:text-white ${
                            errors.message ? 'border-red-500 dark:border-red-500' : 'border-gray-300 dark:border-gray-600'
                          }`}
                          placeholder="Escribe tu mensaje aquí..."
                          {...register('message', { required: 'El mensaje es requerido' })}
                        ></textarea>
                        {errors.message && (
                          <p className="mt-1 text-sm text-red-500">{errors.message.message}</p>
                        )}
                      </div>
                      
                      <div>
                        {errorMessage && (
                          <p className="mb-3 text-xs text-red-500">{errorMessage}</p>
                        )}
                        <Button 
                          type="submit" 
                          variant="primary"
                          className="w-full md:w-auto"
                          disabled={isSubmitting}
                        >
                          <Send size={18} className="mr-2" />
                          {isSubmitting ? 'Enviando mensaje...' : 'Enviar mensaje'}
                        </Button>
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

export default ContactPage;