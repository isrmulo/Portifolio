import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-12 px-6 bg-gray-100 dark:bg-gray-800">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <a href="#" className="text-xl font-bold text-gray-900 dark:text-white">Portfolio</a>
          </div>
          
          <div className="flex flex-col items-center md:items-end">
            <p className="text-sm text-gray-600 dark:text-gray-400">
              &copy; {currentYear} Romulo odorico. All rights reserved.
            </p>
          </div>
        </div>
        
        <hr className="my-8 border-gray-200 dark:border-gray-700" />
        
        <div className="text-center text-sm text-gray-500 dark:text-gray-500">
          <p>
            Este portfólio foi criado com React e Tailwind CSS. Fonte fornecida pelo Google Fonts.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;