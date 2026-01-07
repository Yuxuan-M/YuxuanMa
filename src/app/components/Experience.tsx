import React from 'react';
import { motion } from 'motion/react';

const experiences = [
  {
    company: 'TechCorp',
    role: 'Senior Frontend Engineer',
    period: '2022 - Present',
    description: 'Leading the frontend team in rebuilding the core product dashboard using React and TypeScript.',
  },
  {
    company: 'Creative Studio',
    role: 'UI/UX Developer',
    period: '2019 - 2022',
    description: 'Collaborated with designers to implement pixel-perfect user interfaces for over 20 client projects.',
  },
  {
    company: 'Freelance',
    role: 'Web Developer',
    period: '2017 - 2019',
    description: 'Delivered custom web solutions for small businesses using WordPress and React.',
  }
];

export const Experience = () => {
  return (
    <section id="experience" className="py-32 bg-neutral-50">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 md:gap-24">
            
            {/* Title */}
            <div className="md:w-1/3">
                 <motion.h2 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-3xl font-light text-neutral-900 sticky top-24"
                 >
                    Experience
                 </motion.h2>
            </div>

            {/* List */}
            <div className="md:w-2/3">
                <div className="space-y-16">
                    {experiences.map((exp, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="group"
                        >
                            <div className="flex flex-col sm:flex-row sm:items-baseline justify-between mb-2">
                                <h3 className="text-xl font-medium text-neutral-900">{exp.role}</h3>
                                <span className="text-sm text-neutral-400 font-light mt-1 sm:mt-0">{exp.period}</span>
                            </div>
                            <h4 className="text-lg text-neutral-500 font-light mb-4">{exp.company}</h4>
                            <p className="text-neutral-600 leading-relaxed max-w-xl font-light">
                                {exp.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
      </div>
    </section>
  );
};
