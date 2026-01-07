import React from 'react';

export const Footer = () => {
  return (
    <footer id="contact" className="bg-white text-neutral-900 py-24 border-t border-neutral-100">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl">
            <h2 className="text-4xl md:text-5xl font-light mb-8 tracking-tight">Let's connect.</h2>
            <p className="text-xl font-light text-neutral-500 mb-12 max-w-xl">
                Always open to discussing new projects, opportunities, or just sharing ideas.
            </p>
            <a 
            href="mailto:hello@example.com" 
            className="text-2xl md:text-3xl font-medium text-neutral-900 hover:text-neutral-500 transition-colors border-b border-neutral-300 pb-1"
            >
            hello@example.com
            </a>
        </div>
        
        <div className="mt-32 flex flex-col md:flex-row justify-between items-end text-sm text-neutral-400 font-light">
          <p>© {new Date().getFullYear()} Yuxuan Ma.</p>
          <div className="flex space-x-8 mt-6 md:mt-0">
            <a href="#" className="hover:text-neutral-900 transition-colors">Twitter</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">LinkedIn</a>
            <a href="#" className="hover:text-neutral-900 transition-colors">GitHub</a>
          </div>
        </div>
      </div>
    </footer>
  );
};
