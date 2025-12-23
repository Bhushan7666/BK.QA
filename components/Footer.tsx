
import React from 'react';
import { SOCIAL_LINKS } from '../constants';
import { Heart } from 'lucide-react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-slate-900 py-12 border-t border-slate-100 dark:border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center">
          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400 mb-6">
            BK<span className="text-slate-900 dark:text-white">.QA</span>
          </div>
          
          <div className="text-slate-500 dark:text-slate-400 text-center mb-8 flex flex-col items-center">
            <p className="flex items-center">
              Designed with <Heart size={16} className="mx-1.5 text-red-500 fill-red-500" /> by Bhushan Kampelwar
            </p>
            <p className="mt-2">© {currentYear} Bhushan Kampelwar | Software Tester Portfolio</p>
          </div>
          
          <div className="flex space-x-6 text-sm font-medium text-slate-400">
            <a href="#home" className="hover:text-primary-500 transition-colors">Home</a>
            <a href="#about" className="hover:text-primary-500 transition-colors">About</a>
            <a href="#projects" className="hover:text-primary-500 transition-colors">Projects</a>
            <a href="#contact" className="hover:text-primary-500 transition-colors">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
