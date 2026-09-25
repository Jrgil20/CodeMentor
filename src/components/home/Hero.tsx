import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle, AlertCircle } from 'lucide-react';
import Button from '../common/Button';
import { TUTORING_LIMITS } from '../../data/tutoring';

const Hero: React.FC = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
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

  const highlights = [
    'Enfoque prioritario en Estructura de Datos (UCAB)',
    'Tarifas desde $5/h con packs semanales y grupales ($2/h)',
    'Metodología orientada a parciales y proyectos reales',
    'Cursos modernos: Vibe Coding y desarrollo asistido por IA',
  ];

  return (
    <div className="pt-20 pb-16 md:pt-28 md:pb-24 bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-blue-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="flex flex-col md:flex-row items-center">
          <motion.div 
            className="flex-1 md:pr-8 mb-10 md:mb-0"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            {/* Badge de Cupos */}
            <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-xs font-semibold bg-amber-100 text-amber-900 dark:bg-amber-900/40 dark:text-amber-300 border border-amber-300 dark:border-amber-700 mb-6">
              <AlertCircle size={14} className="text-amber-600 dark:text-amber-400" />
              <span>Cupos limitados: solo {TUTORING_LIMITS.availableSpots} lugares disponibles para seguimiento 1 a 1</span>
            </motion.div>

            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6 leading-tight"
              variants={itemVariants}
            >
              Tutorías <span className="text-blue-600 dark:text-blue-400">UCAB</span> y Formación en Software con <span className="text-indigo-600 dark:text-indigo-400">IA</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl leading-relaxed"
              variants={itemVariants}
            >
              Mentoría personalizada para estudiantes de ingeniería: dominá <strong>Estructura de Datos</strong>, POO y Desarrollo de Software. Aprendé con criterio técnico y sin atajos vacíos.
            </motion.p>
            
            <motion.ul 
              className="mb-8 space-y-3"
              variants={containerVariants}
            >
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300 text-sm md:text-base"
                  variants={itemVariants}
                >
                  <CheckCircle size={18} className="text-green-500 mr-2.5 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button to="/ucab" size="lg" variant="primary">
                Ver tutorías UCAB
              </Button>
              <Button to="/contacto" size="lg" variant="outline">
                Consultar disponibilidad
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
                alt="Profesor de programación enseñando" 
                className="rounded-2xl shadow-2xl w-full h-auto object-cover border border-white/20 dark:border-gray-700"
              />
              <div className="absolute -bottom-5 -left-5 bg-white dark:bg-gray-800 p-4 rounded-xl shadow-lg border border-gray-100 dark:border-gray-700 hidden sm:block">
                <p className="text-xs font-semibold text-gray-500 dark:text-gray-400">Tarifa estudiante UCAB</p>
                <p className="text-2xl font-black text-blue-600 dark:text-blue-400">Desde $5/h</p>
                <p className="text-[11px] text-gray-500">en packs semanales</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;