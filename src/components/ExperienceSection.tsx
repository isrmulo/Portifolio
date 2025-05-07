import React from 'react';
import { experience, education } from '../data/experience';
import { Briefcase, GraduationCap } from 'lucide-react';

const ExperienceSection: React.FC = () => {
  return (
    <section id="experience" className="py-20 px-6 bg-gray-50 dark:bg-gray-800">
      <div className="container mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-gray-900 dark:text-white">
          Experiência e Educação
        </h2>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Work Experience */}
          <div>
            <div className="flex items-center mb-8">
              <Briefcase size={24} className="text-gray-900 dark:text-white mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Experiências de Trabalho</h3>
            </div>
            
            <div className="space-y-12">
              {experience.map((item) => (
                <div key={item.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-300 dark:before:bg-gray-700">
                  <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full left-[-6px] top-2"></div>
                  <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{item.role}</h4>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{item.company}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{item.period}</span>
                  </div>
                  <p className="text-gray-600 dark:text-gray-300">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
          
          {/* Education */}
          <div>
            <div className="flex items-center mb-8">
              <GraduationCap size={24} className="text-gray-900 dark:text-white mr-3" />
              <h3 className="text-2xl font-bold text-gray-900 dark:text-white">Educação</h3>
            </div>
            
            <div className="space-y-12">
              {education.map((item) => (
                <div key={item.id} className="relative pl-8 before:content-[''] before:absolute before:left-0 before:top-0 before:bottom-0 before:w-px before:bg-gray-300 dark:before:bg-gray-700">
                  <div className="absolute w-3 h-3 bg-gray-900 dark:bg-white rounded-full left-[-6px] top-2"></div>
                  <h4 className="text-xl font-bold mb-1 text-gray-900 dark:text-white">{item.degree}</h4>
                  <div className="flex items-center mb-2">
                    <span className="text-gray-800 dark:text-gray-200 font-medium">{item.institution}</span>
                    <span className="mx-2 text-gray-400">•</span>
                    <span className="text-gray-600 dark:text-gray-400">{item.period}</span>
                  </div>
                </div>
              ))}
            </div>
            
            {/* Certifications or additional qualifications could go here */}
            <div className="mt-12 p-6 bg-white dark:bg-gray-900 rounded-lg shadow-sm">
              <h4 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">Cursos & Programas</h4>
              <ul className="space-y-2">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Ada Tech – Trilha Back-end</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Geração Tech – IEL</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Curso de JavaScript e TypeScript (Luiz Otávio Miranda)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Curso de Python 3 (básico ao avançado)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Capacitação "Vai na Web" – Trilha Fullstack</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">PHP básico (Curso em video)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-gray-900 dark:bg-white rounded-full mt-2 mr-3"></div>
                  <span className="text-gray-700 dark:text-gray-300">Estudante de nível superior na Faculdade CDL – Fortaleza/CE</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;