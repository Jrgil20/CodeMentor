import React, { useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { Link } from 'react-router-dom';
import { Video, FileText, BookOpen, PenTool as Tool, Search } from 'lucide-react';
import { resources } from '../data/resources';
import Section from '../components/common/Section';

type ResourceType = 'all' | 'video' | 'article' | 'tutorial' | 'tool';
type ResourceCategory = 'all' | 'Algoritmos' | 'Desarrollo Web' | 'Estructuras de Datos' | 'JavaScript' | 'Python' | 'Productividad';

const ResourcesPage: React.FC = () => {
  const [selectedType, setSelectedType] = useState<ResourceType>('all');
  const [selectedCategory, setSelectedCategory] = useState<ResourceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const typeIcons = {
    video: <Video size={20} className="mr-2" />,
    article: <FileText size={20} className="mr-2" />,
    tutorial: <BookOpen size={20} className="mr-2" />,
    tool: <Tool size={20} className="mr-2" />,
  };

  const typeLabels = {
    video: 'Video',
    article: 'Artículo',
    tutorial: 'Tutorial',
    tool: 'Herramienta',
  };

  const categoryOptions: ResourceCategory[] = [
    'all',
    'Algoritmos',
    'Desarrollo Web',
    'Estructuras de Datos',
    'JavaScript',
    'Python',
    'Productividad',
  ];

  const typeOptions: ResourceType[] = ['all', 'video', 'article', 'tutorial', 'tool'];

  // Filter resources based on selected type, category, and search query
  const filteredResources = resources.filter((resource) => {
    const matchesType = selectedType === 'all' || resource.type === selectedType;
    const matchesCategory = selectedCategory === 'all' || resource.category === selectedCategory;
    const matchesSearch = 
      resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      resource.description.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesType && matchesCategory && matchesSearch;
  });

  return (
    <>
      <Helmet>
        <title>Recursos de Aprendizaje | CodeMentor</title>
        <meta name="description" content="Biblioteca de recursos para aprender programación, algoritmos y desarrollo web. Tutoriales, artículos, videos y herramientas recomendadas por categoría." />
      </Helmet>

      <div className="pt-20">
        <Section
          title="Recursos de Aprendizaje"
          subtitle="Biblioteca curada de recursos para complementar tu formación como programador/a"
          centered
          background="light"
        >
          <div className="mb-8">
            <div className="relative max-w-md mx-auto">
              <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                <Search size={20} className="text-gray-400" />
              </div>
              <input
                type="text"
                className="block w-full pl-10 pr-3 py-2 border border-gray-300 dark:border-gray-700 rounded-md leading-5 bg-white dark:bg-gray-800 placeholder-gray-500 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 dark:text-white"
                placeholder="Buscar recursos..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>

          <div className="mb-8">
            <div className="flex flex-col md:flex-row justify-center space-y-4 md:space-y-0 md:space-x-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filtrar por tipo
                </label>
                <div className="flex flex-wrap gap-2">
                  {typeOptions.map((type) => (
                    <button
                      key={type}
                      onClick={() => setSelectedType(type)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedType === type
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {type === 'all' ? 'Todos' : typeLabels[type]}
                    </button>
                  ))}
                </div>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-2">
                  Filtrar por categoría
                </label>
                <div className="flex flex-wrap gap-2">
                  {categoryOptions.map((category) => (
                    <button
                      key={category}
                      onClick={() => setSelectedCategory(category)}
                      className={`px-3 py-1 text-sm rounded-full ${
                        selectedCategory === category
                          ? 'bg-blue-600 text-white'
                          : 'bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200 hover:bg-gray-200 dark:hover:bg-gray-600'
                      }`}
                    >
                      {category === 'all' ? 'Todas' : category}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
            {filteredResources.length > 0 ? (
              filteredResources.map((resource) => (
                <div
                  key={resource.id}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md border border-gray-200 dark:border-gray-700 overflow-hidden hover:shadow-lg transition-shadow"
                >
                  <img
                    src={resource.image}
                    alt={resource.title}
                    className="w-full h-40 object-cover"
                  />
                  <div className="p-5">
                    <div className="flex items-center mb-2">
                      <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-900/30 text-blue-800 dark:text-blue-300">
                        {resource.category}
                      </span>
                      <span className="inline-flex items-center ml-2 px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-300">
                        {typeIcons[resource.type]}
                        {typeLabels[resource.type]}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 dark:text-white mb-2">
                      {resource.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-300 text-sm mb-4">
                      {resource.description}
                    </p>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                    >
                      Ver recurso
                    </a>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-10">
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  No se encontraron recursos con los filtros seleccionados.
                </p>
                <button
                  onClick={() => {
                    setSelectedCategory('all');
                    setSelectedType('all');
                    setSearchQuery('');
                  }}
                  className="text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300"
                >
                  Limpiar filtros
                </button>
              </div>
            )}
          </div>
        </Section>
      </div>
    </>
  );
};

export default ResourcesPage;