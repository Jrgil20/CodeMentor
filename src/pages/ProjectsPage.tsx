import React from 'react';
import { Helmet } from 'react-helmet-async';
import { ExternalLink, Github } from 'lucide-react';
import { projects } from '../data/projects';
import Section from '../components/common/Section';
import Button from '../components/common/Button';

const ProjectsPage: React.FC = () => {
  return (
    <>
      <Helmet>
        <title>Proyectos y Repositorios | CodeMentor</title>
        <meta name="description" content="Portafolio de repositorios abiertos, herramientas y laboratorios desarrollados en ingeniería de software." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Proyectos y Herramientas"
          subtitle="Repositorios de código abierto, herramientas académicas y proyectos de ingeniería"
          centered
          background="light"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {projects.map((project) => (
              <div
                key={project.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl overflow-hidden shadow-sm border transition-all hover:shadow-md flex flex-col justify-between ${
                  project.pinned
                    ? 'border-blue-500/80 ring-2 ring-blue-500/10'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div>
                  <div className="relative w-full h-44 overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {project.pinned && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2.5 py-0.5 rounded-full shadow-sm">
                        PINNED
                      </span>
                    )}
                    {project.tag && (
                      <span className="absolute bottom-3 left-3 bg-black/75 backdrop-blur-sm text-white text-[11px] font-mono px-2 py-0.5 rounded">
                        [{project.tag}]
                      </span>
                    )}
                  </div>
                  
                  <div className="p-6">
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2 font-mono">
                      {project.title}
                    </h3>
                    
                    <p className="text-xs text-gray-600 dark:text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {project.tags.map((tag, idx) => (
                        <span 
                          key={idx}
                          className="text-[11px] bg-blue-50 dark:bg-blue-950/40 text-blue-700 dark:text-blue-300 px-2 py-0.5 rounded border border-blue-200 dark:border-blue-800"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full text-xs font-semibold py-2 px-3 rounded-lg bg-gray-100 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <Github size={14} />
                    <span>Ver en GitHub</span>
                    <ExternalLink size={12} className="ml-1" />
                  </a>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 max-w-2xl mx-auto bg-blue-50/80 dark:bg-blue-950/30 rounded-2xl p-6 border border-blue-200 dark:border-blue-800 text-center">
            <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
              ¿Querés preparar tu propio proyecto o laboratorio?
            </h3>
            <p className="text-xs text-gray-700 dark:text-gray-300 mb-4">
              En las tutorías de la UCAB y mentorías particulares trabajamos sobre proyectos reales y resolución de problemas prácticos paso a paso.
            </p>
            <Button to="/ucab" variant="primary" size="sm">
              Ver tutorías para la UCAB
            </Button>
          </div>
        </Section>
      </div>
    </>
  );
};

export default ProjectsPage;