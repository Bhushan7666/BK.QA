
import React from 'react';
import { GraduationCap, Briefcase, Target } from 'lucide-react';

const About: React.FC = () => {
  return (
    <section id="about" className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">About Me</h2>
          <div className="h-1.5 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-6">
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              I am a passionate Software Tester and QA Engineer based in Chandrapur, Maharashtra. Currently pursuing my B.Tech in Computer Science at DBATU (2022–2026), I have already built a strong foundation in both Manual and Automation testing methodologies.
            </p>
            <p className="text-lg text-slate-600 dark:text-slate-300 leading-relaxed">
              With 6+ months of hands-on experience in the industry, I have developed a keen eye for detail and a systematic approach to finding bugs. My goal is to ensure that applications are not just functional but provide a seamless and reliable experience for the end-user.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-lg">
                  <GraduationCap size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Education</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">B.Tech CS (2022-26)</p>
                </div>
              </div>
              <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-xl border border-slate-100 dark:border-slate-700 flex items-start space-x-3">
                <div className="p-2 bg-primary-100 dark:bg-primary-900/40 text-primary-600 dark:text-primary-400 rounded-lg">
                  <Briefcase size={24} />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">Experience</h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400">6+ Months in QA</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="aspect-square bg-primary-100 dark:bg-primary-900/20 rounded-3xl overflow-hidden relative group">
              <img 
                src="https://picsum.photos/seed/bhushan/800/800" 
                alt="Bhushan Kampelwar" 
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 grayscale hover:grayscale-0"
              />
              <div className="absolute inset-0 bg-primary-600/10 group-hover:bg-transparent transition-colors"></div>
            </div>
            {/* Achievement Badge */}
            <div className="absolute -bottom-6 -left-6 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-xl border border-slate-100 dark:border-slate-700 animate-bounce-slow">
              <div className="flex items-center space-x-3">
                <div className="p-2 bg-green-100 dark:bg-green-900/40 text-green-600 rounded-full">
                  <Target size={24} />
                </div>
                <div>
                  <div className="text-2xl font-bold text-slate-900 dark:text-white">50+</div>
                  <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider font-semibold">Bugs Fixed</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
