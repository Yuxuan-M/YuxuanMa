import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUpRight } from 'lucide-react';

interface Project {
  title: string;
  category: string;
  image: string;
  tags: string[];
  links: {
    demo: string;
    repo: string;
  };
  featured?: boolean;
}

const projects: Project[] = [
  // Interactive Systems & Installations
  {
    title: 'Sonic Bloom',
    category: 'Interactive Systems & Installations',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Arduino', 'Sensors', 'Sound Design'],
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    title: 'Light React',
    category: 'Interactive Systems & Installations',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBsaWdodHxlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Projection Mapping', 'TouchDesigner'],
    links: { demo: '#', repo: '#' },
  },
  
  // UI/UX & Product Design
  {
    title: 'HealthMate App',
    category: 'UI/UX & Product Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzIwNDU1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Figma', 'User Research'],
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    title: 'Smart Home Hub',
    category: 'UI/UX & Product Design',
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWV8ZW58MXx8fHwxNzIwNDU1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['IoT', 'Interface Design'],
    links: { demo: '#', repo: '#' },
  },

  // Learning & Impact Design
  {
    title: 'EduKit Maker',
    category: 'Learning & Impact Design',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBraWRzfGVufDF8fHx8MTcyMDQ1NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Stem Education', 'Kit Design'],
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    title: 'Community Connect',
    category: 'Learning & Impact Design',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHl8ZW58MXx8fHwxNzIwNDU1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Social Impact', 'Web'],
    links: { demo: '#', repo: '#' },
  },

  // Playful Prototypes
  {
    title: 'Tactile Synth',
    category: 'Playful Prototypes',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZ3xlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Physical Computing', 'Music'],
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    title: 'Sensor Toy',
    category: 'Playful Prototypes',
    image: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzfGVufDF8fHx8MTcyMDQ1NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Fabrication', 'Play'],
    links: { demo: '#', repo: '#' },
  },

  // Moving Image & Media
  {
    title: 'Abstract Motion',
    category: 'Moving Image & Media',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vdGlvbnxlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['After Effects', 'Animation'],
    links: { demo: '#', repo: '#' },
  },
  {
    title: 'Docu Short',
    category: 'Moving Image & Media',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtfGVufDF8fHx8MTcyMDQ1NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Video Editing', 'Storytelling'],
    links: { demo: '#', repo: '#' },
  },
];

const categories = [
  'Interactive Systems & Installations',
  'UI/UX & Product Design',
  'Learning & Impact Design',
  'Playful Prototypes',
  'Moving Image & Media'
];

const groupedProjects = projects.reduce((acc, project) => {
  if (!acc[project.category]) {
    acc[project.category] = [];
  }
  acc[project.category].push(project);
  return acc;
}, {} as Record<string, Project[]>);

const ProjectCard = ({ project, index }: { project: Project; index: number }) => (
    <motion.div
        key={project.title}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: index * 0.1 }}
        className="group cursor-pointer"
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
);

export const Portfolio = () => {
  const [showAll, setShowAll] = useState(false);
  const featuredProjects = projects.filter(p => p.featured).slice(0, 4);

  return (
    <section id="work" className="bg-white py-24">
      <div className="container mx-auto px-6 md:px-12">
        
        {/* Recent Works Section (Visible by Default) */}
        {!showAll && (
            <div className="mb-16">
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

                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                    {featuredProjects.map((project, index) => (
                        <ProjectCard key={project.title} project={project} index={index} />
                    ))}
                </div>
            </div>
        )}

        {/* All Works Section (Conditionally Rendered or Toggled) */}
        <AnimatePresence>
            {showAll && (
                <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: 'auto' }}
                    exit={{ opacity: 0, height: 0 }}
                    className="overflow-hidden"
                >
                    <div className="mb-24 text-center pt-12">
                         <span className="text-xs font-medium tracking-widest text-neutral-400 uppercase">Archive</span>
                    </div>
                   
                    <div className="space-y-32">
                    {categories.map((category) => (
                        groupedProjects[category] && (
                            <div key={category}>
                                <div className="flex flex-col md:flex-row md:items-baseline gap-6 mb-12">
                                    <h3 className="text-xl font-light text-neutral-900 min-w-[300px]">{category}</h3>
                                    <div className="h-px bg-neutral-100 flex-grow hidden md:block" />
                                </div>
                                <div className="grid grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-12">
                                    {groupedProjects[category].map((project, idx) => (
                                        <ProjectCard key={project.title} project={project} index={idx} />
                                    ))}
                                </div>
                            </div>
                        )
                    ))}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>

        <div className="mt-16 text-center">
             <button 
                onClick={() => setShowAll(!showAll)}
                className="inline-block px-8 py-3 border border-neutral-200 text-sm font-medium text-neutral-600 hover:text-neutral-900 hover:border-neutral-900 transition-all uppercase tracking-widest bg-white"
             >
                {showAll ? 'Show Less' : 'View All Works'}
            </button>
        </div>
      </div>
    </section>
  );
};
