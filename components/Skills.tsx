
import React from 'react';
import { SKILLS } from '../constants';
import { 
  Search, 
  Zap, 
  Wrench, 
  Code2, 
  Workflow, 
  CheckCircle2,
  Bug,
  Globe
} from 'lucide-react';

const categoryIcons: Record<string, React.ReactNode> = {
  'Manual': <Bug className="w-5 h-5" />,
  'Automation & API': <Zap className="w-5 h-5" />,
  'Tools': <Wrench className="w-5 h-5" />,
  'Language': <Code2 className="w-5 h-5" />,
  'Process': <Workflow className="w-5 h-5" />
};

const Skills: React.FC = () => {
  const categories = Array.from(new Set(SKILLS.map(s => s.category)));

  return (
    <section id="skills" className="section-padding bg-slate-50 dark:bg-slate-900/50 relative overflow-hidden">
      {/* Decorative background element */}
      <div className="absolute top-0 right-0 -translate-y-1/2 translate-x-1/2 w-96 h-96 bg-primary-500/5 rounded-full blur-3xl"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            Technical <span className="text-primary-600">Expertise</span>
          </h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400">
            A comprehensive suite of QA methodologies and tools mastered to deliver bug-free, high-performance software.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {categories.map((category) => (
            <div 
              key={category} 
              className="bg-white dark:bg-slate-800 p-7 rounded-3xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-xl hover:border-primary-500/50 dark:hover:border-primary-500/30 transition-all duration-300 group flex flex-col"
            >
              <div className="flex items-center space-x-3 mb-8">
                <div className="p-2.5 bg-primary-50 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-xl group-hover:scale-110 transition-transform duration-300">
                  {categoryIcons[category] || <Search className="w-5 h-5" />}
                </div>
                <h3 className="text-lg font-extrabold text-slate-800 dark:text-white uppercase tracking-widest">
                  {category}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2.5">
                {SKILLS.filter(s => s.category === category).map((skill) => (
                  <div 
                    key={skill.name} 
                    className="flex items-center space-x-2 px-3.5 py-2 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300 rounded-xl text-sm font-semibold border border-slate-100 dark:border-slate-700/50 hover:bg-primary-500 hover:text-white dark:hover:bg-primary-600 hover:border-primary-400 transition-all cursor-default shadow-sm hover:-translate-y-1"
                  >
                    <CheckCircle2 size={14} className="opacity-60" />
                    <span>{skill.name}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Bottom banner */}
        <div className="mt-16 p-8 bg-gradient-to-r from-primary-600 to-primary-800 rounded-3xl shadow-2xl shadow-primary-500/20 text-white flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <div className="p-3 bg-white/10 rounded-2xl backdrop-blur-md">
              <Zap size={32} className="text-primary-100" />
            </div>
            <div>
              <h4 className="text-xl font-bold">Continuous Learning</h4>
              <p className="text-primary-100/80 text-sm">Currently expanding skills in Playwright and Cloud Testing</p>
            </div>
          </div>
          <a 
            href="#projects" 
            className="px-6 py-3 bg-white text-primary-700 font-bold rounded-xl hover:bg-primary-50 transition-colors shadow-lg active:scale-95 text-sm uppercase tracking-wider"
          >
            See Skills In Action
          </a>
        </div>
      </div>
    </section>
  );
};

export default Skills;
