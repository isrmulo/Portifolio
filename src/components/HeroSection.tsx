import React, { useEffect, useState } from 'react';
import { ArrowDown, FileText } from 'lucide-react';

const HeroSection: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative px-6 py-20 bg-gray-50 dark:bg-gray-800">
      <div
        className={`container mx-auto flex flex-col items-center text-center transition-opacity duration-1000 ${
          isVisible ? 'opacity-100' : 'opacity-0'
        }`}
      >
        <h1 className="text-4xl md:text-5xl lg:text-7xl font-bold text-gray-900 dark:text-white mb-6">
          <span className="block">Olá, eu sou</span>
          <span className="block mt-2 bg-clip-text text-transparent bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-400">
            Romulo Odorico
          </span>
        </h1>
        <h2 className="text-xl md:text-2xl font-medium text-gray-600 dark:text-gray-300 max-w-2xl mb-8">
        Sou um desenvolvedor júnior apaixonado por tecnologia, com vivência em TI e foco no aprendizado contínuo. Busco minha primeira oportunidade como dev para crescer junto com o time e entregar soluções eficientes.
        </h2>
        <div className="flex flex-col sm:flex-row gap-4 mt-8">
          <a
            href="#projects"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-8 py-3 bg-gray-900 text-white dark:bg-white dark:text-gray-900 rounded-md hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
          >
            Meus trabalhos
          </a>
          <a
            href="/curriculo-romulo.pdf" 
            download="curriculo-romulo.pdf"
            className="px-8 py-3 bg-transparent border border-gray-900 dark:border-white text-gray-900 dark:text-white rounded-md hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors duration-300 flex items-center justify-center"
          >
            <FileText size={18} className="mr-2" />
            Download CV
          </a>
        </div>
      </div>
      <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
        <a
          href="#about"
          onClick={(e) => {
            e.preventDefault();
            document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' });
          }}
          aria-label="Scroll to About section"
        >
          <ArrowDown size={24} className="text-gray-400 dark:text-gray-500" />
        </a>
      </div>
    </section>
  );
};

export default HeroSection;