import React from 'react';
import { motion } from 'framer-motion';
import { Calendar, MessageSquare } from 'lucide-react';
import Button from '../common/Button';

const CTASection: React.FC = () => {
  return (
    <div className="py-16 md:py-24 bg-gradient-to-r from-blue-600 to-purple-600 text-white">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            ¿Listo para transformar tu carrera?
          </motion.h2>
          
          <motion.p 
            className="text-lg mb-8 text-blue-100"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            La primera sesión de 30 minutos es gratuita y sin compromiso. 
            Hablemos sobre tus objetivos y cómo puedo ayudarte a alcanzarlos.
          </motion.p>
          
          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Button 
              to="/calendario" 
              variant="outline" 
              size="lg"
              className="bg-white text-blue-600 border-white hover:bg-blue-50"
            >
              <Calendar size={18} className="mr-2" />
              Agendar consulta gratis
            </Button>
            <Button 
              to="/contacto" 
              variant="ghost" 
              size="lg"
              className="text-white border border-white/30 hover:bg-white/10"
            >
              <MessageSquare size={18} className="mr-2" />
              Contactar
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default CTASection;