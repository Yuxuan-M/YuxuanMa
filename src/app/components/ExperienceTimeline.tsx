import React from 'react';
import { motion } from 'motion/react';
import { experienceData } from '../data';

export const ExperienceTimeline = () => {
  return (
    <section className="bg-white min-h-screen py-32">
      <div className="container mx-auto px-6 md:px-12">
         <div className="mb-24 max-w-3xl mx-auto text-center">
             <h1 className="text-5xl md:text-6xl font-light text-neutral-900 tracking-tight mb-6">Journey Log</h1>
             <p className="text-neutral-500 text-xl font-light">
               Moments, failures, and realizations that shaped my perspective. 
             </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
            {/* Center Line */}
            <div className="absolute left-4 md:left-1/2 md:-ml-[0.5px] top-0 bottom-0 w-[1px] bg-neutral-200" />

            <div className="space-y-24 pb-24">
            {experienceData.map((item, index) => (
                <motion.div 
                    key={item.id}
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    className={`relative flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''} items-center`}
                >
                    {/* Timeline Dot */}
                    <div className="absolute left-4 md:left-1/2 -ml-[5px] w-[11px] h-[11px] bg-white border-2 border-neutral-900 rounded-full z-10 top-0 md:top-8 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>

                    {/* Spacer for alternating layout */}
                    <div className="w-full md:w-1/2" />

                    {/* Content */}
                    <div className={`w-full md:w-1/2 pl-12 md:pl-0 ${index % 2 === 0 ? 'md:pr-16 md:text-right' : 'md:pl-16 md:text-left'}`}>
                        <div className={`flex flex-col gap-2 ${index % 2 === 0 ? 'md:items-end' : 'md:items-start'}`}>
                             <div className={`flex items-center gap-3 text-sm font-medium tracking-widest text-neutral-400 uppercase ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                                <span>{item.year}</span>
                                <span className="w-px h-3 bg-neutral-300"></span>
                                <span>{item.location}</span>
                             </div>
                             
                             <h3 className="text-2xl font-light text-neutral-900">{item.title}</h3>
                             
                             <p className="text-neutral-600 font-light leading-relaxed mt-2 max-w-md">
                                {item.story}
                             </p>
                             
                             {/* Insight Box - Designed to look good even if narrow */}
                             <div className={`mt-6 p-5 bg-neutral-50 border-neutral-900 max-w-sm ${index % 2 === 0 ? 'md:border-r-2 md:mr-0' : 'md:border-l-2 md:ml-0'} border-l-2 md:border-l-0 border-l-neutral-900 md:border-r-neutral-900 text-left`}>
                                <span className="text-xs font-bold text-neutral-900 uppercase block mb-2">The Insight</span>
                                <p className="text-sm text-neutral-500 italic leading-relaxed">
                                    "{item.insight}"
                                </p>
                             </div>
                        </div>
                    </div>
                </motion.div>
            ))}
            </div>
        </div>
      </div>
    </section>
  );
};
