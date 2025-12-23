
import React from 'react';
import { FileText, Send, ShieldCheck } from 'lucide-react';

const Hero: React.FC = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 bg-slate-50 dark:bg-slate-900 overflow-hidden relative">
      {/* Decorative elements */}
      <div className="absolute top-40 left-10 w-64 h-64 bg-primary-400/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-primary-600/10 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center">
          <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full bg-primary-100 dark:bg-primary-900/30 text-primary-700 dark:text-primary-300 text-sm font-semibold mb-6 border border-primary-200 dark:border-primary-800">
            <ShieldCheck size={16} />
            <span>QA Specialist & Software Tester</span>
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 tracking-tight">
            Hi, I'm <span className="text-primary-600 dark:text-primary-400">Bhushan Kampelwar</span>
          </h1>
          <p className="text-xl md:text-2xl text-slate-600 dark:text-slate-300 mb-4 max-w-3xl mx-auto font-medium">
            Software Tester | Manual & Automation QA Engineer
          </p>
          <p className="text-lg text-slate-500 dark:text-slate-400 mb-10 max-w-2xl mx-auto italic">
            "Ensuring Quality, Reliability, and User Satisfaction"
          </p>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a 
              href="#contact"
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border border-transparent text-base font-semibold rounded-lg text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg hover:shadow-primary-500/25 active:scale-95"
            >
              <Send size={18} className="mr-2" />
              Contact Me
            </a>
            <button 
              className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-3.5 border-2 border-slate-200 dark:border-slate-700 text-base font-semibold rounded-lg text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition-all active:scale-95"
              onClick={() => window.open('#', '_blank')}
            >
              <FileText size={18} className="mr-2" />
              View Resume
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
