import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { BookOpen, PenTool as Tool, Search, Code, Shield, Cpu, Terminal, ExternalLink } from 'lucide-react';
import { resources } from '../data/resources';
import Section from '../components/common/Section';
import { ResourceTag } from '../types';

const ResourcesPage: React.FC = () => {
  const [selectedTag, setSelectedTag] = useState<'all' | ResourceTag>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const tagLabels: Record<ResourceTag, string> = {
    herramienta: 'Herramienta',
    lab: 'Laboratorio (Lab)',
    proyecto: 'Proyecto'
  };

  const tagColors: Record<ResourceTag, string> = {
    herramienta: 'bg-emerald-100 text-emerald-800 dark:bg-emerald-950/60 dark:text-emerald-300 border-emerald-300',
    lab: 'bg-blue-100 text-blue-800 dark:bg-blue-950/60 dark:text-blue-300 border-blue-300',
    proyecto: 'bg-purple-100 text-purple-800 dark:bg-purple-950/60 dark:text-purple-300 border-purple-300'
  };

  const filteredResources = resources.filter((resource) => {
    const matchesTag = selectedTag === 'all' || resource.tag === selectedTag;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.category.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesTag && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Recursos y Laboratorios | CodeMentor</title>
        <meta name="description" content="Repositorios de código abierto, laboratorios de IA, prácticas de ciberseguridad, métodos numéricos y guías de estructura de datos." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Recursos, Laboratorios y Proyectos"
          subtitle="Repositorios de código abierto, guías de estudio para la UCAB y herramientas académicas"
          centered
          background="light"
        >
          {/* Buscador */}
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search size={18} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3.5 py-2.5 text-xs sm:text-sm border border-gray-300 dark:border-gray-700 rounded-xl bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:ring-2 focus:ring-blue-500 dark:text-white"
                placeholder="Buscar por nombre, materia o tema..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          {/* Filtros por Tag */}
          <div className="flex justify-center mb-10">
            <div className="flex flex-wrap gap-2 justify-center">
              <button
                onClick={() => setSelectedTag('all')}
                className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                  selectedTag === 'all'
                    ? 'bg-blue-600 text-white shadow-sm'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                }`}
              >
                Todos los recursos
              </button>
              {(['herramienta', 'lab', 'proyecto'] as ResourceTag[]).map((tag) => (
                <button
                  key={tag}
                  onClick={() => setSelectedTag(tag)}
                  className={`px-4 py-1.5 text-xs font-semibold rounded-full transition-all ${
                    selectedTag === tag
                      ? 'bg-blue-600 text-white shadow-sm'
                      : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:bg-gray-100 dark:hover:bg-gray-700'
                  }`}
                >
                  [{tag}] {tagLabels[tag]}
                </button>
              ))}
            </div>
          </div>

          {/* Grilla de Recursos */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredResources.map((resource) => (
              <div
                key={resource.id}
                className={`bg-white dark:bg-gray-800 rounded-2xl shadow-sm border overflow-hidden hover:shadow-md transition-all flex flex-col justify-between ${
                  resource.pinned
                    ? 'border-blue-500/80 ring-2 ring-blue-500/10'
                    : 'border-gray-200 dark:border-gray-700'
                }`}
              >
                <div>
                  <div className="relative w-full h-44 overflow-hidden bg-gray-100 dark:bg-gray-900">
                    <img
                      src={resource.image}
                      alt={resource.title}
                      className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                    />
                    {resource.pinned && (
                      <span className="absolute top-3 right-3 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.5 rounded-full shadow-sm">
                        PINNED
                      </span>
                    )}
                    <span className="absolute bottom-3 left-3 bg-black/70 backdrop-blur-sm text-white text-[11px] font-semibold px-2.5 py-0.5 rounded-md">
                      {resource.category}
                    </span>
                  </div>

                  <div className="p-6">
                    <div className="flex items-center gap-2 mb-3">
                      <span className={`text-[11px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-md border ${tagColors[resource.tag]}`}>
                        [{resource.tag}]
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-gray-900 dark:text-white mb-2 font-mono">
                      {resource.title}
                    </h3>

                    <p className="text-xs text-gray-600 dark:text-gray-300 leading-relaxed mb-4">
                      {resource.description}
                    </p>
                  </div>
                </div>

                <div className="p-6 pt-0 border-t border-gray-100 dark:border-gray-700/60 mt-auto">
                  <a
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full text-xs font-semibold py-2 px-3 rounded-lg bg-gray-100 dark:bg-gray-700/80 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-900 dark:text-white transition-colors"
                  >
                    <span>Ver en GitHub</span>
                    <ExternalLink size={13} />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default ResourcesPage;