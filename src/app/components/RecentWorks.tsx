import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data';

interface RecentWorksProps {
  projects: Project[];
  onViewAll: () => void;
  onProjectClick: (project: Project) => void;
}

export const RecentWorks = ({ projects, onViewAll, onProjectClick }: RecentWorksProps) => {
  return (
    <div className="py-12 md:py-24 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-12 flex items-baseline gap-4"
        >
          <h2 className="text-3xl font-light text-neutral-900">Recent Works</h2>
          <span className="h-px bg-neutral-200 flex-grow" />
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12 mb-16">
          {projects.map((project, index) => (
            <motion.div
                key={project.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
                className="group cursor-pointer"
                onClick={() => onProjectClick(project)}
            >
                <div className="aspect-square overflow-hidden mb-4 relative bg-neutral-100">
                    <img 
                        src={project.image} 
                        alt={project.title} 
                        className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
                </div>
                
                <div className="flex justify-between items-start mb-2">
                    <h4 className="text-base font-medium text-neutral-900 leading-tight group-hover:text-neutral-500 transition-colors">{project.title}</h4>
                    <ArrowUpRight size={16} className="text-neutral-300 group-hover:text-neutral-900 transition-colors opacity-0 group-hover:opacity-100" />
                </div>
                <div className="flex flex-wrap gap-2">
                    {project.tags.map(tag => (
                        <span key={tag} className="text-[11px] font-medium text-neutral-600 bg-white border border-neutral-200 px-2 py-0.5 rounded-sm">
                            {tag}
                        </span>
                    ))}
                </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center">
            <button 
                onClick={onViewAll}
                className="inline-block px-8 py-3 border border-neutral-200 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-all uppercase tracking-widest bg-white"
            >
                View All Works
            </button>
        </div>
      </div>
    </div>
  );
};
