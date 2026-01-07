import React from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavbarProps {
  currentView: string;
  onChangeView: (view: string) => void;
}

export const Navbar = ({ currentView, onChangeView }: NavbarProps) => {
  const [isOpen, setIsOpen] = React.useState(false);

  const navLinks = [
    { name: 'About', id: 'home' },
    { name: 'Work', id: 'work' },
    { name: 'Experience', id: 'experience' },
  ];

  const handleNav = (id: string) => {
    onChangeView(id);
    setIsOpen(false);
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-sm transition-all duration-300">
      <div className="container mx-auto px-6 md:px-12 flex justify-between items-center h-20">
        <button 
          onClick={() => handleNav('home')} 
          className="text-xl font-medium tracking-tight text-neutral-900 hover:opacity-70 transition-opacity"
        >
          Yuxuan M.
        </button>

        {/* Desktop Menu */}
        <div className="hidden md:flex space-x-12">
          {navLinks.map((link) => (
            <button
              key={link.id}
              onClick={() => handleNav(link.id)}
              className={`text-sm font-medium transition-colors ${
                currentView === link.id ? 'text-neutral-900' : 'text-neutral-400 hover:text-neutral-900'
              }`}
            >
              {link.name}
            </button>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-neutral-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-white border-b border-neutral-100 overflow-hidden"
          >
            <div className="flex flex-col px-6 py-8 space-y-6">
              {navLinks.map((link) => (
                <button
                  key={link.id}
                  onClick={() => handleNav(link.id)}
                  className={`text-2xl font-light text-left ${
                    currentView === link.id ? 'text-neutral-900' : 'text-neutral-400'
                  }`}
                >
                  {link.name}
                </button>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
