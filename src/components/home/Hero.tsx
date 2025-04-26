import React from 'react';
import { motion } from 'framer-motion';
import { CheckCircle } from 'lucide-react';
import Button from '../common/Button';

const Hero: React.FC = () => {
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

  const highlights = [
    'Metodología probada con +100 estudiantes',
    'Enfoque práctico con proyectos reales',
    'Mentoría 1-a-1 personalizada',
    'Comunidad activa de estudiantes',
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
            <motion.h1 
              className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white mb-6"
              variants={itemVariants}
            >
              Aprende a programar con un <span className="text-blue-600 dark:text-blue-400">mentor experto</span>
            </motion.h1>
            
            <motion.p 
              className="text-lg md:text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-2xl"
              variants={itemVariants}
            >
              Transforma tu futuro con clases personalizadas enfocadas en proyectos reales. 
              Metodología práctica para dominar algoritmos, estructuras de datos y desarrollo web moderno.
            </motion.p>
            
            <motion.ul 
              className="mb-8 space-y-3"
              variants={containerVariants}
            >
              {highlights.map((item, index) => (
                <motion.li 
                  key={index}
                  className="flex items-center text-gray-700 dark:text-gray-300"
                  variants={itemVariants}
                >
                  <CheckCircle size={20} className="text-green-500 mr-2 flex-shrink-0" />
                  <span>{item}</span>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="flex flex-col sm:flex-row gap-4"
              variants={itemVariants}
            >
              <Button to="/contacto" size="lg" variant="primary">
                Agendar primera clase
              </Button>
              <Button to="/auto-evaluacion" size="lg" variant="outline">
                ¿Es para mí? Evaluación
              </Button>
            </motion.div>
          </motion.div>
          
          <motion.div 
            className="flex-1 md:pl-8"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <img 
              src="https://images.pexels.com/photos/3861958/pexels-photo-3861958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" 
              alt="Profesor de programación enseñando" 
              className="rounded-xl shadow-2xl w-full h-auto object-cover"
            />
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Hero;