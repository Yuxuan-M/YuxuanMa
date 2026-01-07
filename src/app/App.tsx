import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { RecentWorks } from './components/RecentWorks';
import { AllWorks } from './components/AllWorks';
import { ExperienceTimeline } from './components/ExperienceTimeline';
import { ProjectDetail } from './components/ProjectDetail';
import { Footer } from './components/Footer';
import { projects, Project } from './data';
import { AnimatePresence } from 'motion/react';

function App() {
  const [currentView, setCurrentView] = useState('home');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  // Scroll to top when view changes
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [currentView]);

  const renderView = () => {
    switch (currentView) {
      case 'home':
        return (
          <>
            <Hero />
            <RecentWorks 
                projects={projects.filter(p => p.featured)} 
                onViewAll={() => setCurrentView('work')}
                onProjectClick={(p) => setSelectedProject(p)}
            />
          </>
        );
      case 'work':
        return (
          <AllWorks 
            projects={projects}
            onProjectClick={(p) => setSelectedProject(p)}
          />
        );
      case 'experience':
        return <ExperienceTimeline />;
      default:
        return <Hero />;
    }
  };

  return (
    <div className="min-h-screen bg-white text-neutral-900 font-sans selection:bg-neutral-200">
      <Navbar currentView={currentView} onChangeView={setCurrentView} />
      
      <main className="pt-20">
        {renderView()}
      </main>

      <Footer />

      <AnimatePresence>
        {selectedProject && (
          <ProjectDetail 
            project={selectedProject} 
            onClose={() => setSelectedProject(null)} 
          />
        )}
      </AnimatePresence>
    </div>
  );
}

export default App;
