import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import Section from '../components/common/Section';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos | CodeMentor</title>
        <meta name="description" content="Portafolio de proyectos desarrollados con mis estudiantes que demuestran la aplicación práctica de conceptos de programación y tecnologías modernas." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Proyectos"
          subtitle="Ejemplos de aplicaciones reales desarrolladas con mis estudiantes"
          centered
          background="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project) => (
              <div
                key={project.id}
                className="bg-white dark:bg-gray-800 rounded-xl overflow-hidden shadow-lg border border-gray-200 dark:border-gray-700 transition-all hover:shadow-xl"
              >
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, idx) => (
                      <span 
                        key={idx}
                        className="text-xs bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300 px-2.5 py-0.5 rounded-full"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex space-x-4">
                    <a
                      href={project.link}
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                    >
                      Demo
                      <ExternalLink size={16} className="ml-1" />
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
                    >
                      Código
                      <Github size={16} className="ml-1" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-3xl mx-auto bg-blue-50 dark:bg-blue-900/20 rounded-lg p-6 border border-blue-100 dark:border-blue-800">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-4">
              ¿Quieres desarrollar un proyecto similar?
            </h3>
            <p className="text-gray-700 dark:text-gray-300 mb-4">
              Estos proyectos fueron desarrollados como parte del programa de mentoría personalizada. 
              Si estás interesado en crear tu propio proyecto con mi guía, contacta conmigo para discutir tus ideas.
            </p>
            <div className="flex justify-center mt-4">
              <a 
                href="/contacto" 
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Hablar sobre mi proyecto
              </a>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default ProjectsPage;