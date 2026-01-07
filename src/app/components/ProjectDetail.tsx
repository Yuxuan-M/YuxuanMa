import React, { useEffect } from 'react';
import { motion } from 'motion/react';
import { X, ExternalLink, Github, Calendar, User, Tag } from 'lucide-react';
import { Project } from '../data';

interface ProjectDetailProps {
  project: Project;
  onClose: () => void;
}

export const ProjectDetail = ({ project, onClose }: ProjectDetailProps) => {
  // Prevent body scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, []);

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center">
      <div className="absolute inset-0 bg-white/90 backdrop-blur-md" onClick={onClose} />
      
      <motion.div 
        initial={{ opacity: 0, scale: 0.98, y: 40 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        exit={{ opacity: 0, scale: 0.98, y: 40 }}
        transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }} // Custom ease
        className="relative w-full h-full md:w-[95%] md:h-[95%] bg-white shadow-2xl border border-neutral-100 overflow-hidden flex flex-col md:rounded-lg"
      >
        {/* Header / Close Button */}
        <div className="absolute top-0 right-0 p-6 z-20 flex justify-end">
            <button 
                onClick={onClose}
                className="p-3 bg-white/80 rounded-full hover:bg-neutral-100 transition-colors border border-neutral-100 backdrop-blur-sm"
            >
                <X size={24} />
            </button>
        </div>

        <div className="flex flex-col md:flex-row h-full overflow-y-auto md:overflow-hidden">
            
            {/* Left: Image & Quick Info (Scrollable on mobile, Fixed/Scrollable on desktop) */}
            <div className="md:w-5/12 h-[50vh] md:h-full bg-neutral-100 relative md:flex-shrink-0">
                <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-60" />
                
                {/* Title Overlay on Image */}
                <div className="absolute bottom-0 left-0 p-8 md:p-12 text-white w-full">
                    <span className="inline-block px-3 py-1 mb-4 text-xs font-bold tracking-widest uppercase bg-white/20 backdrop-blur-md border border-white/30 rounded-full">
                        {project.category}
                    </span>
                    <h1 className="text-4xl md:text-5xl font-light leading-tight mb-2">{project.title}</h1>
                    <p className="text-white/80 text-lg font-light max-w-md">{project.description}</p>
                </div>
            </div>

            {/* Right: Detailed Content (Scrollable) */}
            <div className="md:w-7/12 h-full overflow-y-auto bg-white">
                <div className="p-8 md:p-16 max-w-3xl mx-auto">
                    
                    {/* Metadata Grid */}
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-6 mb-16 pb-8 border-b border-neutral-100">
                        <div>
                            <div className="flex items-center gap-2 text-neutral-400 mb-2 text-xs font-bold uppercase tracking-widest">
                                <User size={14} /> Role
                            </div>
                            <div className="text-neutral-900 font-medium">{project.role}</div>
                        </div>
                        <div>
                             <div className="flex items-center gap-2 text-neutral-400 mb-2 text-xs font-bold uppercase tracking-widest">
                                <Calendar size={14} /> Timeline
                            </div>
                            <div className="text-neutral-900 font-medium">{project.year} • {project.duration}</div>
                        </div>
                        <div className="col-span-2 md:col-span-1">
                             <div className="flex items-center gap-2 text-neutral-400 mb-2 text-xs font-bold uppercase tracking-widest">
                                <Tag size={14} /> Tech
                            </div>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map(tag => (
                                    <span key={tag} className="text-xs text-neutral-600 bg-neutral-100 px-2 py-1 rounded-sm">
                                        {tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Content Sections */}
                    <div className="space-y-16">
                        
                        {project.inspiration && (
                            <section>
                                <h3 className="text-lg font-medium text-neutral-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-neutral-900"></span> Inspiration
                                </h3>
                                <p className="text-neutral-600 leading-loose text-lg font-light">
                                    {project.inspiration}
                                </p>
                            </section>
                        )}

                        {project.research && (
                            <section>
                                <h3 className="text-lg font-medium text-neutral-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-neutral-900"></span> Research & Context
                                </h3>
                                <p className="text-neutral-600 leading-loose text-lg font-light">
                                    {project.research}
                                </p>
                            </section>
                        )}

                        {project.process && (
                            <section>
                                <h3 className="text-lg font-medium text-neutral-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-neutral-900"></span> Process
                                </h3>
                                <p className="text-neutral-600 leading-loose text-lg font-light">
                                    {project.process}
                                </p>
                            </section>
                        )}
                        
                         {project.iteration && (
                            <section>
                                <h3 className="text-lg font-medium text-neutral-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-neutral-900"></span> Iteration
                                </h3>
                                <p className="text-neutral-600 leading-loose text-lg font-light">
                                    {project.iteration}
                                </p>
                            </section>
                        )}

                         {project.feedback && (
                            <section>
                                <h3 className="text-lg font-medium text-neutral-900 mb-4 flex items-center gap-3">
                                    <span className="w-8 h-[1px] bg-neutral-900"></span> Feedback
                                </h3>
                                <p className="text-neutral-600 leading-loose text-lg font-light">
                                    {project.feedback}
                                </p>
                            </section>
                        )}

                        {project.reflection && (
                             <section className="bg-neutral-50 p-8 border-l-2 border-neutral-900">
                                <h3 className="text-sm font-bold text-neutral-900 uppercase tracking-widest mb-4">
                                    My Insight & Reflection
                                </h3>
                                <p className="text-neutral-600 leading-relaxed italic">
                                    "{project.reflection}"
                                </p>
                            </section>
                        )}

                        <div className="pt-8 flex gap-4">
                            <a href={project.links.demo} className="flex-1 flex items-center justify-center gap-2 px-6 py-4 bg-neutral-900 text-white hover:bg-neutral-800 transition-colors font-medium text-sm tracking-widest uppercase">
                                View Live <ExternalLink size={16} />
                            </a>
                            <a href={project.links.repo} className="flex items-center justify-center gap-2 px-6 py-4 border border-neutral-200 hover:border-neutral-900 transition-colors text-sm tracking-widest uppercase">
                                Source <Github size={16} />
                            </a>
                        </div>
                    </div>
                    
                    <div className="h-24"></div> {/* Spacer for bottom scroll */}
                </div>
            </div>
        </div>
      </motion.div>
    </div>
  );
};
