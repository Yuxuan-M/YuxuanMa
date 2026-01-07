import React from 'react';
import { motion } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';
import { Project } from '../data';

interface AllWorksProps {
  projects: Project[];
  onProjectClick: (project: Project) => void;
}

const categories = [
  'Interactive Systems & Installations',
  'UI/UX & Product Design',
  'Learning & Impact Design',
  'Playful Prototypes',
  'Moving Image & Media'
];

export const AllWorks = ({ projects, onProjectClick }: AllWorksProps) => {
  const groupedProjects = projects.reduce((acc, project) => {
    if (!acc[project.category]) {
      acc[project.category] = [];
    }
    acc[project.category].push(project);
    return acc;
  }, {} as Record<string, Project[]>);

  return (
    <section className="bg-white min-h-screen py-32 animate-fade-in">
      <div className="container mx-auto px-6 md:px-12">
        <div className="mb-20">
             <h1 className="text-5xl md:text-6xl font-light text-neutral-900 tracking-tight mb-6">Work Archive</h1>
             <p className="text-neutral-500 text-xl font-light max-w-2xl">
               A comprehensive collection of my explorations in design, technology, and human interaction.
             </p>
        </div>
       
        <div className="space-y-20"> 
        {/* Reduced space-y from 32 (8rem) to 20 (5rem) for tighter layout */}
        {categories.map((category) => (
            groupedProjects[category] && (
                <div key={category}>
                    <div className="flex flex-col md:flex-row md:items-baseline gap-6 mb-8"> 
                    {/* Reduced mb from 12 to 8 */}
                        <h3 className="text-lg font-medium text-neutral-900 min-w-[300px] tracking-wide">{category}</h3>
                        <div className="h-px bg-neutral-100 flex-grow hidden md:block" />
                    </div>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                        {groupedProjects[category].map((project, idx) => (
                             <motion.div
                                key={project.id}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.5, delay: idx * 0.1 }}
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
                </div>
            )
        ))}
        </div>

        <div className="mt-32 text-center">
            <span className="text-neutral-300 text-sm tracking-widest uppercase">End of Archive</span>
        </div>
      </div>
    </section>
  );
};
