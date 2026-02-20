import React from 'react';
import { PROJECTS } from '../constants';

const Work: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-6">
      <h2 className="text-[#E63946] text-xs font-bold uppercase tracking-[4px] mb-12">Work</h2>
      
      <div className="columns-1 md:columns-2 lg:columns-3 gap-8">
        {PROJECTS.map((project, index) => (
          <div 
            key={project.id} 
            className="break-inside-avoid group relative overflow-hidden bg-white rounded-lg shadow-sm hover:shadow-2xl transition-all duration-500 cursor-pointer mb-8"
            style={{ animationDelay: `${index * 100}ms` }}
          >
            <div className="w-full overflow-hidden min-h-[200px] bg-gray-100 relative">
              <img 
                src={project.imageUrl} 
                alt={project.title}
                className="w-full h-auto block transition-transform duration-1000 group-hover:scale-105"
              />
            </div>

            <div className="absolute inset-0 bg-[#1A1A1A]/90 opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
              <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <p className="text-[#E63946] text-[10px] uppercase tracking-[3px] mb-2 font-bold">{project.category}</p>
                <h3 className="text-xl font-serif text-white tracking-wide">{project.title}</h3>
                <div className="w-8 h-[1px] bg-white/30 mt-4 group-hover:w-16 transition-all duration-700 delay-100"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
