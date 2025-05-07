import React, { useState } from 'react';
import { ExternalLink } from 'lucide-react';
import { projects } from '../data/projects';

const ProjectsSection: React.FC = () => {
  const [filter, setFilter] = useState<string | null>(null);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const categories = Array.from(new Set(projects.map(project => project.category)));
  
  const filteredProjects = filter 
    ? projects.filter(project => project.category === filter)
    : projects;

  return (
    <section id="projects" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Meus Trabalhos
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Uma seleção dos meus projetos recentes que mostram minhas habilidades e abordagem para design e desenvolvimento.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              filter === null 
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setFilter(null)}
          >
            All
          </button>
          {categories.map(category => (
            <button
              key={category}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                filter === category 
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map(project => (
            <div 
              key={project.id}
              className="bg-white dark:bg-gray-900 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow duration-300"
              onMouseEnter={() => setHoveredId(project.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="relative overflow-hidden" style={{ paddingBottom: '66.67%' }}>
                <img 
                  src={project.imageUrl} 
                  alt={project.title} 
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
                />
                
                {/* Overlay that appears on hover */}
                <div 
                  className={`absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center transition-opacity duration-300 ${
                    hoveredId === project.id ? 'opacity-100' : 'opacity-0'
                  }`}
                >
                  {project.url && (
                    <a 
                      href={project.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="p-3 bg-white rounded-full text-gray-900 hover:bg-gray-100 transition-colors"
                    >
                      <ExternalLink size={20} />
                    </a>
                  )}
                </div>
              </div>
              
              <div className="p-6">
                <span className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-full mb-3">
                  {project.category}
                </span>
                <h3 className="text-xl font-bold mb-2 text-gray-900 dark:text-white">{project.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 mb-4">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span 
                      key={tag} 
                      className="text-xs inline-block py-1 px-2 rounded border border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;