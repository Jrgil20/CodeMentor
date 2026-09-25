import React from 'react';
import { Check, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from '../common/Button';
import { courses } from '../../data/courses';

const FeaturedCourses: React.FC = () => {
  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: 'easeOut',
      },
    },
  };

  const levelLabel = {
    beginner: 'Inicial',
    intermediate: 'Intermedio',
    advanced: 'Avanzado',
  };

  const levelColor = {
    beginner: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-400',
    intermediate: 'bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-400',
    advanced: 'bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-400',
  };

  return (
    <div className="py-16 md:py-24 bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900/40 dark:text-indigo-300 mb-3">
            <Sparkles size={14} />
            Formación Continua
          </div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Cursos y Programas Formativos
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Fundamentos de ingeniería de software y desarrollo moderno asistido por IA, calculados con tarifa accesible ($5/h).
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {courses.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl flex flex-col justify-between"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-80px" }}
              variants={cardVariants}
              custom={index}
            >
              <div>
                <div className="relative w-full h-48 overflow-hidden">
                  <img 
                    src={course.image} 
                    alt={course.title}
                    className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  />
                  {course.badge && (
                    <span className="absolute top-3 right-3 bg-blue-600/90 backdrop-blur-sm text-white text-[11px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      {course.badge}
                    </span>
                  )}
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between mb-3">
                    <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${levelColor[course.level]}`}>
                      {levelLabel[course.level]}
                    </span>
                    <span className="text-xs text-blue-600 dark:text-blue-400 font-semibold">
                      {course.hourlyRate}
                    </span>
                  </div>
                  
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {course.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4 text-xs leading-relaxed">
                    {course.description}
                  </p>
                  
                  <div className="mb-6 pt-3 border-t border-gray-100 dark:border-gray-700">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs text-gray-500 dark:text-gray-400">Carga horaria:</span>
                      <span className="text-xs font-medium text-gray-900 dark:text-white">{course.duration}</span>
                    </div>
                    
                    <div className="space-y-1.5">
                      {course.features.map((feature, idx) => (
                        <div key={idx} className="flex items-start">
                          <Check size={14} className="text-green-500 mt-0.5 mr-2 flex-shrink-0" />
                          <span className="text-xs text-gray-600 dark:text-gray-300">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-6 pt-0">
                <div className="flex items-baseline justify-between mb-3">
                  <span className="text-xs text-gray-500 dark:text-gray-400">Inversión total</span>
                  <span className="text-2xl font-black text-gray-900 dark:text-white">${course.price}</span>
                </div>
                <Button to="/contacto" variant="primary" fullWidth className="text-sm">
                  Inscribirme al curso
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedCourses;