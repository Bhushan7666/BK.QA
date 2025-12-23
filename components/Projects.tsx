
import React from 'react';
import { PROJECTS } from '../constants';
import { FlaskConical, ExternalLink, Lightbulb } from 'lucide-react';

const Projects: React.FC = () => {
  return (
    <section id="projects" className="section-padding bg-slate-50 dark:bg-slate-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Recent Projects</h2>
          <div className="h-1.5 w-20 bg-primary-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-slate-600 dark:text-slate-400">Highlights of my testing and automation contributions.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project, index) => (
            <div 
              key={index} 
              className="bg-white dark:bg-slate-800 rounded-2xl overflow-hidden border border-slate-100 dark:border-slate-700 shadow-sm hover:shadow-xl transition-all flex flex-col group"
            >
              <div className="h-48 bg-slate-200 dark:bg-slate-700 relative overflow-hidden">
                <img 
                  src={`https://picsum.photos/seed/project${index}/800/450`} 
                  alt={project.title} 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 to-transparent"></div>
                <div className="absolute bottom-4 left-4">
                  <h3 className="text-white font-bold text-xl">{project.title}</h3>
                </div>
              </div>
              
              <div className="p-6 flex-grow flex flex-col">
                <p className="text-slate-600 dark:text-slate-400 mb-6 text-sm leading-relaxed line-clamp-3">
                  {project.description}
                </p>
                
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tools.map((tool) => (
                    <span 
                      key={tool} 
                      className="px-2.5 py-1 bg-slate-100 dark:bg-slate-700/50 text-slate-700 dark:text-slate-300 rounded text-[10px] font-bold uppercase tracking-wider border border-slate-200 dark:border-slate-600"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
                
                <div className="mt-auto p-4 bg-primary-50 dark:bg-primary-900/20 rounded-xl border border-primary-100 dark:border-primary-800">
                  <div className="flex items-start space-x-2">
                    <Lightbulb size={16} className="text-primary-600 dark:text-primary-400 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-xs font-bold text-primary-800 dark:text-primary-300 uppercase mb-1">Outcome</p>
                      <p className="text-sm text-primary-700 dark:text-primary-400 leading-snug">{project.outcome}</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
