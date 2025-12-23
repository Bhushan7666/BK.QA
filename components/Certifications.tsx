
import React from 'react';
import { CERTIFICATIONS } from '../constants';
import { Award, ShieldCheck } from 'lucide-react';

const Certifications: React.FC = () => {
  return (
    <section className="section-padding bg-white dark:bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <div className="h-1.5 w-20 bg-primary-600 mx-auto rounded-full"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {CERTIFICATIONS.map((cert, index) => (
            <div 
              key={index} 
              className="p-6 bg-slate-50 dark:bg-slate-800/50 rounded-2xl border border-dashed border-slate-300 dark:border-slate-700 flex items-center space-x-4 hover:border-primary-500 transition-colors"
            >
              <div className="p-3 bg-primary-100 dark:bg-primary-900/30 text-primary-600 dark:text-primary-400 rounded-full flex-shrink-0">
                <Award size={28} />
              </div>
              <div>
                <h4 className="font-bold text-slate-900 dark:text-white leading-tight">{cert.title}</h4>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Certifications;
