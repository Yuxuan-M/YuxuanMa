import React from 'react';
import { motion } from 'motion/react';
import { ArrowDown } from 'lucide-react';

export const Hero = () => {
  return (
    <section id="about" className="min-h-screen flex flex-col justify-center relative pt-20 bg-white">
      <div className="container mx-auto px-6 md:px-12">
        <div className="flex flex-col md:flex-row gap-12 items-center md:items-start">
            {/* Text Content */}
            <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeOut" }}
                className="md:w-3/5"
            >
                <h1 className="text-4xl md:text-5xl font-light text-neutral-900 leading-tight mb-6 tracking-tight">
                    Hiiii, I am Yuxuan Ma (马雨萱)
                </h1>
                
                <p className="text-xl md:text-2xl text-neutral-500 font-light mb-8 leading-snug">
                    a first-year M.S. student in Integrated Design & Media (IDM) at NYU Tandon School of Engineering.
                </p>
                
                <div className="space-y-6 text-base md:text-lg text-neutral-600 leading-relaxed font-light max-w-2xl">
                    <p>
                    I came to HCI through a cross-disciplinary path. I studied Digital Media Art at the School of Animation & Digital Arts, Communication University of China, where I worked on interactive and narrative-driven experiences. Now, in an engineering-driven environment, I’m learning how to build systems that are not only designed, but also functional, testable, and reproducible.
                    </p>
                    <p>
                    I’m a hands-on maker—I love prototyping with electronics, sensors, 3D printing, and fabrication. I’m especially drawn to the space where materials meet interaction, and where digital experiences become physical.
                    </p>
                </div>
            </motion.div>

            {/* Photo Placeholder */}
            <motion.div 
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1, delay: 0.2, ease: "easeOut" }}
                className="md:w-2/5 w-full"
            >
                <div className="aspect-[3/4] md:aspect-[4/5] w-full bg-neutral-100 overflow-hidden relative">
                     {/* Replace src with your actual photo */}
                     <img 
                        src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhc2lhbiUyMHdvbWFuJTIwcG9ydHJhaXQlMjBwcm9mZXNzaW9uYWwlMjBtaW5pbWFsaXN0fGVufDF8fHx8MTc2NzcxODAzOHww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral" 
                        alt="Yuxuan Ma" 
                        className="w-full h-full object-cover filter grayscale hover:grayscale-0 transition-all duration-700"
                     />
                </div>
            </motion.div>
        </div>
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 1 }}
        className="absolute bottom-12 left-6 md:left-12"
      >
        <a href="#work" className="text-neutral-400 hover:text-neutral-900 transition-colors flex items-center gap-4 text-sm font-medium tracking-widest uppercase">
          <ArrowDown size={20} className="animate-bounce" />
          Recent Works
        </a>
      </motion.div>
    </section>
  );
};
