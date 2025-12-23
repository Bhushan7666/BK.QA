
import React from 'react';
import { EXPERIENCES } from '../constants';
import { Calendar, Building2, ChevronRight, Briefcase } from 'lucide-react';

const Experience: React.FC = () => {
  return (
    <section id="experience" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Professional Journey</h2>
          <div className="h-1.5 w-24 bg-primary-600 mx-auto rounded-full mb-6"></div>
          <p className="max-w-2xl mx-auto text-slate-600 dark:text-slate-400 italic">
            "Quality is not an act, it is a habit." - My career path in Software Quality Assurance.
          </p>
        </div>

        <div className="space-y-12">
          {EXPERIENCES.map((exp, index) => (
            <div 
              key={index} 
              className="relative group bg-slate-50 dark:bg-slate-800/40 rounded-[2.5rem] p-8 md:p-12 border border-slate-100 dark:border-slate-700/50 shadow-sm hover:shadow-2xl hover:border-primary-500/30 transition-all duration-500 flex flex-col lg:flex-row gap-8 lg:gap-16 items-start"
            >
              {/* Left Side: Meta Info */}
              <div className="lg:w-1/3 flex flex-col space-y-4 shrink-0">
                <div className="flex items-center space-x-3 text-primary-600 dark:text-primary-400 mb-2">
                  <div className="p-3 bg-primary-100 dark:bg-primary-900/30 rounded-2xl group-hover:rotate-6 transition-transform">
                    <Briefcase size={28} />
                  </div>
                  <span className="font-bold tracking-widest uppercase text-xs">Professional Experience</span>
                </div>
                
                <h3 className="text-2xl md:text-3xl font-extrabold text-slate-900 dark:text-white group-hover:text-primary-600 transition-colors">
                  {exp.role}
                </h3>
                
                <div className="space-y-3">
                  <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium">
                    <Building2 size={18} className="mr-2 text-primary-500" />
                    {exp.company}
                  </div>
                  <div className="flex items-center text-slate-500 dark:text-slate-400 font-medium">
                    <Calendar size={18} className="mr-2 text-primary-500" />
                    {exp.period}
                  </div>
                </div>

                {exp.skills && (
                  <div className="flex flex-wrap gap-2 pt-4">
                    {exp.skills.map((skill) => (
                      <span key={skill} className="px-3 py-1 bg-white dark:bg-slate-700 text-slate-600 dark:text-slate-300 text-[10px] font-bold uppercase rounded-lg border border-slate-100 dark:border-slate-600">
                        {skill}
                      </span>
                    ))}
                  </div>
                )}
              </div>

              {/* Right Side: Achievements */}
              <div className="flex-grow space-y-6">
                <div className="text-sm font-bold text-slate-400 dark:text-slate-500 uppercase tracking-widest flex items-center">
                  Key Responsibilities & Impact
                  <div className="ml-4 flex-grow h-[1px] bg-slate-200 dark:bg-slate-700"></div>
                </div>
                
                <ul className="grid grid-cols-1 gap-4">
                  {exp.description.map((item, i) => (
                    <li 
                      key={i} 
                      className="flex items-start space-x-4 p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-50 dark:border-slate-800 shadow-sm group/item hover:bg-primary-50 dark:hover:bg-primary-900/10 transition-colors"
                    >
                      <div className="mt-1 bg-primary-100 dark:bg-primary-900 text-primary-600 p-1 rounded-full shrink-0 group-hover/item:scale-110 transition-transform">
                        <ChevronRight size={14} />
                      </div>
                      <p className="text-slate-600 dark:text-slate-300 leading-relaxed text-sm md:text-base">
                        {item}
                      </p>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Decorative vertical line for larger screens */}
              <div className="hidden lg:block absolute left-1/3 top-1/2 -translate-y-1/2 w-px h-2/3 bg-gradient-to-b from-transparent via-slate-200 dark:via-slate-700 to-transparent"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
