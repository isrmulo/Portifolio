import React, { useState } from 'react';
import { skills } from '../data/skills';

const SkillsSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  
  const categories = [
    { id: 'frontend', label: 'Frontend' },
    { id: 'backend', label: 'Backend' },
    { id: 'design', label: 'Design' },
    { id: 'other', label: 'Other' }
  ];
  
  const filteredSkills = activeCategory 
    ? skills.filter(skill => skill.category === activeCategory) 
    : skills;

  return (
    <section id="skills" className="py-20 px-6 bg-white dark:bg-gray-900">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center text-gray-900 dark:text-white">
          Habilidades e experiência
        </h2>
        <p className="text-center text-gray-600 dark:text-gray-300 mb-12 max-w-2xl mx-auto">
          Cultivei expertise em diversas tecnologias e metodologias ao longo da minha jornada profissional.
        </p>
        
        <div className="flex flex-wrap justify-center gap-2 mb-12">
          <button
            className={`px-4 py-2 rounded-md text-sm transition-colors ${
              activeCategory === null 
                ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
            }`}
            onClick={() => setActiveCategory(null)}
          >
            All Skills
          </button>
          {categories.map(category => (
            <button
              key={category.id}
              className={`px-4 py-2 rounded-md text-sm transition-colors ${
                activeCategory === category.id 
                  ? 'bg-gray-900 text-white dark:bg-white dark:text-gray-900' 
                  : 'bg-gray-200 text-gray-800 dark:bg-gray-700 dark:text-gray-200 hover:bg-gray-300 dark:hover:bg-gray-600'
              }`}
              onClick={() => setActiveCategory(category.id)}
            >
              {category.label}
            </button>
          ))}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-6">
          {filteredSkills.map(skill => (
            <div key={skill.name} className="mb-4">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-800 dark:text-gray-200">{skill.name}</span>
                <span className="text-sm text-gray-600 dark:text-gray-400">{skill.level}%</span>
              </div>
              <div className="h-2 bg-gray-200 dark:bg-gray-700 rounded-full overflow-hidden">
                <div 
                  className="h-full bg-gray-900 dark:bg-white transition-all duration-1000 ease-out"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;