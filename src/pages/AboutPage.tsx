import React from 'react';
import { Helmet } from 'react-helmet-async';
import { motion } from 'framer-motion';
import { Briefcase, GraduationCap, Award, Users, Code, Book } from 'lucide-react';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const AboutPage: React.FC = () => {
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
        <title>Sobre Mí | CodeMentor</title>
        <meta name="description" content="Conoce más sobre mi experiencia como desarrollador y profesor de programación, mi trayectoria en maratones de programación y mi enfoque educativo." />
      </Helmet>

      <div className="pt-20">
        {/* Hero Section */}
        <div className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-16 md:py-24">
          <div className="container mx-auto px-4 md:px-6">
            <div className="flex flex-col md:flex-row items-center max-w-5xl mx-auto">
              <div className="md:w-1/3 mb-8 md:mb-0 md:pr-8">
                <img 
                  src="https://images.pexels.com/photos/5490276/pexels-photo-5490276.jpeg?auto=compress&cs=tinysrgb&w=600" 
                  alt="Profesor de Programación" 
                  className="rounded-full w-48 h-48 md:w-64 md:h-64 object-cover border-4 border-white/20 shadow-xl mx-auto"
                />
              </div>
              <div className="md:w-2/3">
                <h1 className="text-4xl md:text-5xl font-bold mb-4">
                  Hola, soy <span className="text-blue-200">Tu Nombre</span>
                </h1>
                <p className="text-xl text-blue-100 mb-6">
                  Desarrollador de software con más de 8 años de experiencia y apasionado por enseñar programación
                </p>
                <div className="flex flex-wrap gap-4">
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Desarrollador Full Stack</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Profesor de Programación</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Competidor en Maratones</span>
                  <span className="bg-white/10 px-3 py-1 rounded-full text-sm">Mentor Tecnológico</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* My Story */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-6 text-center">
              Mi Historia
            </h2>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Mi viaje en la programación comenzó hace más de una década, cuando descubrí que podía crear soluciones a problemas reales a través del código. 
              Lo que empezó como curiosidad se convirtió en pasión cuando participé en mi primera maratón de programación durante la universidad.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              A lo largo de mi carrera profesional, he trabajado en startups y empresas de tecnología, desarrollando 
              aplicaciones utilizadas por miles de usuarios. Esta experiencia me ha permitido comprender los desafíos 
              reales que enfrentan los desarrolladores y las habilidades que son verdaderamente valoradas en la industria.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 mb-6">
              Mi camino como profesor comenzó informalmente, ayudando a compañeros de trabajo y amigos a mejorar sus habilidades. 
              Pronto descubrí que tenía una habilidad natural para explicar conceptos complejos de manera simple y accesible. 
              Ver el progreso de mis estudiantes y su transformación profesional se ha convertido en mi mayor satisfacción.
            </p>
            <div className="mt-8 flex justify-center">
              <Button to="/contacto" variant="primary" size="lg">
                Conectemos
              </Button>
            </div>
          </div>
        </Section>

        {/* Experience */}
        <Section background="light">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
            Mi Experiencia
          </h2>
          
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="space-y-8 max-w-3xl mx-auto"
          >
            <motion.div
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 dark:bg-blue-900/30">
                  <Briefcase className="w-6 h-6 text-blue-600 dark:text-blue-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Desarrollador Senior en TechCorp
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">2019 - Presente</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Desarrollo de aplicaciones web y móviles para clientes empresariales. Liderazgo 
                  de equipos de desarrollo y mentoría de desarrolladores junior.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-purple-100 dark:bg-purple-900/30">
                  <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Desarrollador Full Stack en StartupX
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">2016 - 2019</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Implementación de características clave para una plataforma SaaS enfocada en el sector educativo. 
                  Trabajo con React, Node.js y bases de datos NoSQL.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-green-100 dark:bg-green-900/30">
                  <Users className="w-6 h-6 text-green-600 dark:text-green-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Mentor en Bootcamp de Programación
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">2018 - Presente</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Enseñanza de desarrollo web y mentoría a grupos de estudiantes. Diseño de 
                  currículum práctico y evaluación de proyectos finales.
                </p>
              </div>
            </motion.div>
            
            <motion.div
              variants={itemVariants}
              className="flex gap-6"
            >
              <div className="mt-1">
                <div className="flex items-center justify-center w-12 h-12 rounded-full bg-yellow-100 dark:bg-yellow-900/30">
                  <Award className="w-6 h-6 text-yellow-600 dark:text-yellow-400" />
                </div>
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  Participante en Maratones de Programación
                </h3>
                <p className="text-gray-500 dark:text-gray-400 mb-2">2014 - Presente</p>
                <p className="text-gray-700 dark:text-gray-300">
                  Competidor en más de 50 maratones nacionales e internacionales. Semifinalista 
                  en el International Collegiate Programming Contest (ICPC).
                </p>
              </div>
            </motion.div>
          </motion.div>
        </Section>

        {/* Education & Certifications */}
        <Section background="white">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-12 text-center">
              Educación y Certificaciones
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <GraduationCap size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Educación Formal</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Maestría en Ciencias de la Computación</h4>
                    <p className="text-gray-500 dark:text-gray-400">Universidad Tecnológica Nacional, 2015-2017</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Especialización en Inteligencia Artificial y Algoritmos Avanzados</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Ingeniería en Sistemas</h4>
                    <p className="text-gray-500 dark:text-gray-400">Universidad de Buenos Aires, 2010-2014</p>
                    <p className="text-gray-700 dark:text-gray-300 text-sm">Graduado con honores. Tesis sobre optimización de algoritmos de búsqueda.</p>
                  </li>
                </ul>
              </div>
              
              <div className="bg-gray-50 dark:bg-gray-800 p-6 rounded-xl border border-gray-200 dark:border-gray-700">
                <div className="flex items-center mb-4">
                  <Award size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white">Certificaciones</h3>
                </div>
                <ul className="space-y-4">
                  <li>
                    <h4 className="font-semibold text-gray-900 dark:text-white">AWS Certified Solutions Architect</h4>
                    <p className="text-gray-500 dark:text-gray-400">Amazon Web Services, 2022</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Google Professional Cloud Developer</h4>
                    <p className="text-gray-500 dark:text-gray-400">Google Cloud, 2020</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-gray-900 dark:text-white">MongoDB Certified Developer</h4>
                    <p className="text-gray-500 dark:text-gray-400">MongoDB, 2019</p>
                  </li>
                  <li>
                    <h4 className="font-semibold text-gray-900 dark:text-white">Microsoft Certified: Azure Developer Associate</h4>
                    <p className="text-gray-500 dark:text-gray-400">Microsoft, 2018</p>
                  </li>
                </ul>
              </div>
            </div>
            
            <div className="mt-12 p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-800">
              <div className="flex items-center mb-4">
                <Book size={24} className="text-blue-600 dark:text-blue-400 mr-3" />
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">Aprendizaje Continuo</h3>
              </div>
              <p className="text-gray-700 dark:text-gray-300 mb-4">
                Creo firmemente en el aprendizaje continuo como filosofía de vida. Dedico al menos 5 horas semanales 
                a estudiar nuevas tecnologías, leer libros técnicos y participar en comunidades de desarrollo.
              </p>
              <p className="text-gray-700 dark:text-gray-300">
                Este compromiso con el crecimiento constante me permite mantenerme actualizado en un campo que 
                evoluciona rápidamente y transmitir conocimientos relevantes y actualizados a mis estudiantes.
              </p>
            </div>
          </div>
        </Section>

        {/* CTA Section */}
        <Section background="gradient">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              ¿Quieres trabajar juntos?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Estoy disponible para mentorías personalizadas, workshops y consultoría
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button 
                to="/contacto" 
                variant="outline" 
                size="lg"
                className="bg-white text-blue-600 border-white hover:bg-blue-50"
              >
                Contactar
              </Button>
              <Button 
                to="/calendario" 
                variant="ghost" 
                size="lg"
                className="text-white border border-white/30 hover:bg-white/10"
              >
                Agendar una llamada
              </Button>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default AboutPage;