import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonials } from '../../data/testimonials';

const Testimonials: React.FC = () => {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  const testimonialVariants = {
    hidden: { opacity: 0, x: 50 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { 
        duration: 0.6,
        ease: 'easeOut'
      }
    },
    exit: { 
      opacity: 0, 
      x: -50,
      transition: { 
        duration: 0.4,
        ease: 'easeIn'
      }
    }
  };

  return (
    <div className="py-16 md:py-24 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto px-4 md:px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-white">
            Lo que dicen mis estudiantes
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Historias reales de personas que transformaron su carrera con mentorías personalizadas
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative bg-white dark:bg-gray-900 rounded-xl shadow-lg p-6 md:p-8">
            <Quote
              size={48}
              className="text-blue-100 dark:text-blue-900/30 absolute top-6 left-6"
            />
            
            <div className="relative">
              <motion.div
                key={activeIndex}
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={testimonialVariants}
                className="flex flex-col md:flex-row items-center md:items-start gap-6"
              >
                <div className="flex-shrink-0">
                  <img
                    src={testimonials[activeIndex].image}
                    alt={testimonials[activeIndex].name}
                    className="w-20 h-20 rounded-full object-cover border-2 border-blue-200 dark:border-blue-800"
                  />
                </div>
                
                <div>
                  <p className="text-gray-700 dark:text-gray-300 text-lg italic mb-6 z-10 relative">
                    "{testimonials[activeIndex].content}"
                  </p>
                  
                  <div>
                    <h4 className="font-semibold text-gray-900 dark:text-white text-lg">
                      {testimonials[activeIndex].name}
                    </h4>
                    <p className="text-gray-600 dark:text-gray-400">
                      {testimonials[activeIndex].role}, {testimonials[activeIndex].company}
                    </p>
                  </div>
                </div>
              </motion.div>
            </div>
            
            <div className="flex justify-between mt-8">
              <button
                onClick={prevTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Previous testimonial"
              >
                <ChevronLeft size={24} className="text-gray-700 dark:text-gray-300" />
              </button>
              
              <div className="flex space-x-2">
                {testimonials.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className={`w-2.5 h-2.5 rounded-full ${
                      index === activeIndex
                        ? 'bg-blue-600 dark:bg-blue-500'
                        : 'bg-gray-300 dark:bg-gray-700'
                    }`}
                    aria-label={`Go to testimonial ${index + 1}`}
                  />
                ))}
              </div>
              
              <button
                onClick={nextTestimonial}
                className="p-2 rounded-full bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
                aria-label="Next testimonial"
              >
                <ChevronRight size={24} className="text-gray-700 dark:text-gray-300" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;