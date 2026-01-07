import React from 'react';

export interface Project {
  id: string;
  title: string;
  category: string;
  image: string;
  tags: string[];
  // Metadata
  role: string;
  duration: string;
  year: string;
  
  // Content Sections
  description: string; // Short description
  inspiration?: string;
  research?: string;
  process?: string;
  iteration?: string;
  feedback?: string;
  reflection?: string; // Insight/感悟
  
  links: {
    demo: string;
    repo: string;
  };
  featured?: boolean;
}

export interface ExperienceItem {
  id: string;
  year: string;
  location: string;
  title: string;
  story: string; // What happened
  insight: string; // My realization/体悟
}

export const projects: Project[] = [
  // Interactive Systems & Installations
  {
    id: 'sonic-bloom',
    title: 'Sonic Bloom',
    category: 'Interactive Systems & Installations',
    image: 'https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxpbnRlcmFjdGl2ZSUyMGluc3RhbGxhdGlvbnxlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Arduino', 'Sensors', 'Sound Design'],
    role: 'Lead Designer & Developer',
    duration: '3 Months',
    year: '2023',
    description: 'An interactive sound installation that responds to human proximity with organic audio-visual patterns.',
    inspiration: 'Inspired by the way plants react to sunlight (phototropism), I wanted to create a digital organism that reacts to human presence (anthropotropism).',
    research: 'Studied various proximity sensors (Ultrasonic vs IR) and tested Max/MSP libraries for generative audio to ensure organic, non-repetitive soundscapes.',
    process: 'Started with paper prototyping the physical form. Built a single sensor unit to test interaction distance. Then scaled up to a 5-unit array communicating via serial data to a central computer.',
    iteration: 'Initially, the sound was too chaotic. I introduced a "calm down" decay function so the sound would gently fade when people left, rather than cutting off abruptly.',
    feedback: 'Users reported feeling "seen" by the installation. Some even tried to "pet" the sensors, suggesting the organic movement was convincing.',
    reflection: 'I learned that subtle feedback loops create more engaging interactions than direct 1-to-1 mapping. The "ghost in the machine" comes from the slight delays and imperfections.',
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    id: 'light-react',
    title: 'Light React',
    category: 'Interactive Systems & Installations',
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjeWJlcnB1bmslMjBsaWdodHxlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Projection Mapping', 'TouchDesigner'],
    role: 'Individual Creator',
    duration: '2 Weeks',
    year: '2023',
    description: 'Real-time projection mapping experiment reacting to ambient sound levels.',
    inspiration: 'Cyberpunk aesthetics and the idea of "living architecture" that breathes with the city.',
    process: 'Used TouchDesigner to analyze audio spectrum data and map it to geometric visuals projected on a styrofoam sculpture.',
    links: { demo: '#', repo: '#' },
  },
  
  // UI/UX & Product Design
  {
    id: 'healthmate',
    title: 'HealthMate App',
    category: 'UI/UX & Product Design',
    image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzIwNDU1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Figma', 'User Research'],
    role: 'UX Researcher & UI Designer',
    duration: '4 Months',
    year: '2022',
    description: 'A wellness tracking application designed for elderly users with simplified navigation.',
    inspiration: 'Watching my grandmother struggle with complex modern health apps inspired me to strip away the noise.',
    research: 'Conducted interviews with 15 users over the age of 70. Discovered that high contrast and large touch targets were more critical than "modern" flat design trends.',
    process: 'Low-fidelity wireframing -> Accessibility testing with color-blind simulators -> High-fidelity prototype in Figma.',
    iteration: 'Originally used a bottom navigation bar, but testing showed users accidentally hit it. Moved primary actions to large cards in the center of the screen.',
    reflection: 'Accessibility is not a constraint; it is a design opportunity. Designing for the extreme user often benefits the average user as well (e.g., tired eyes, bright sunlight).',
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    id: 'smart-home',
    title: 'Smart Home Hub',
    category: 'UI/UX & Product Design',
    image: 'https://images.unsplash.com/photo-1558002038-1091a1661116?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFydCUyMGhvbWV8ZW58MXx8fHwxNzIwNDU1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['IoT', 'Interface Design'],
    role: 'UI Designer',
    duration: '1 Month',
    year: '2022',
    description: 'Centralized control dashboard for connected home devices.',
    process: 'Created a component library in Figma to ensure consistency across different device controls (thermostat, lights, locks).',
    links: { demo: '#', repo: '#' },
  },

  // Learning & Impact Design
  {
    id: 'edukit',
    title: 'EduKit Maker',
    category: 'Learning & Impact Design',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxlZHVjYXRpb24lMjBraWRzfGVufDF8fHx8MTcyMDQ1NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Stem Education', 'Kit Design'],
    role: 'Product Designer',
    duration: '6 Months',
    year: '2021',
    description: 'A low-cost DIY electronics kit for K-12 STEM education in remote areas.',
    inspiration: 'The "Digital Divide" in rural education. I wanted to create something that didn\'t require expensive computers to learn logic.',
    research: 'Analyzed existing kits (MakeyMakey, LittleBits) and found them too expensive ($50+). Set a goal to make a kit under $5.',
    process: 'Sourced cheap components. Designed a cardboard-based chassis that kids could fold themselves.',
    feedback: 'Teachers loved that it was disposable/recyclable, meaning they didn\'t have to worry about kids breaking expensive equipment.',
    reflection: 'Frugal innovation forces you to understand the core principle of a technology. When you can\'t hide behind expensive hardware, the design must be solid.',
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    id: 'community-connect',
    title: 'Community Connect',
    category: 'Learning & Impact Design',
    image: 'https://images.unsplash.com/photo-1521737604893-d14cc237f11d?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjb21tdW5pdHl8ZW58MXx8fHwxNzIwNDU1NTExfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Social Impact', 'Web'],
    role: 'Frontend Developer',
    duration: '2 Months',
    year: '2021',
    description: 'A platform connecting local volunteers with community needs.',
    process: 'Built with React and Firebase. Focused on mobile-first design as most volunteers accessed the site via phone.',
    links: { demo: '#', repo: '#' },
  },

  // Playful Prototypes
  {
    id: 'tactile-synth',
    title: 'Tactile Synth',
    category: 'Playful Prototypes',
    image: 'https://images.unsplash.com/photo-1550745165-9bc0b252726f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxyZXRybyUyMGdhbWluZ3xlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Physical Computing', 'Music'],
    role: 'Maker',
    duration: '3 Weeks',
    year: '2020',
    description: 'A squishy, conductive fabric synthesizer.',
    inspiration: 'The rigidity of traditional keyboards. I wanted an instrument that felt organic.',
    process: 'Experimented with Velostat (pressure-sensitive conductive sheet) and conductive thread. Sewed a soft interface.',
    iteration: 'Calibration was tricky. I wrote a smoothing algorithm in Arduino to handle the noisy data from the fabric sensors.',
    reflection: 'Soft circuits challenge our notion of "hardware." Electronics can be cozy, wearable, and flexible.',
    links: { demo: '#', repo: '#' },
    featured: true
  },
  {
    id: 'sensor-toy',
    title: 'Sensor Toy',
    category: 'Playful Prototypes',
    image: 'https://images.unsplash.com/photo-1530982011887-3cc11cc85693?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx0b3lzfGVufDF8fHx8MTcyMDQ1NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Fabrication', 'Play'],
    role: 'Prototyper',
    duration: '1 Month',
    year: '2020',
    description: 'An interactive toy that teaches physics concepts through play.',
    process: '3D printed a gyroscope housing. Connected it to a Unity visualization via Bluetooth.',
    links: { demo: '#', repo: '#' },
  },

  // Moving Image & Media
  {
    id: 'abstract-motion',
    title: 'Abstract Motion',
    category: 'Moving Image & Media',
    image: 'https://images.unsplash.com/photo-1550684848-fac1c5b4e853?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhYnN0cmFjdCUyMG1vdGlvbnxlbnwxfHx8fDE3MjA0NTU1MTF8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['After Effects', 'Animation'],
    role: 'Motion Designer',
    duration: '1 Week',
    year: '2019',
    description: 'A study of kinetic typography and geometric motion.',
    process: 'Explored the "Wiggle" expression in After Effects to create controlled chaos.',
    links: { demo: '#', repo: '#' },
  },
  {
    id: 'docu-short',
    title: 'Docu Short',
    category: 'Moving Image & Media',
    image: 'https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxmaWxtfGVufDF8fHx8MTcyMDQ1NTUxMXww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral',
    tags: ['Video Editing', 'Storytelling'],
    role: 'Director & Editor',
    duration: '2 Months',
    year: '2019',
    description: 'A mini-documentary about local artisans.',
    process: 'Interviewed 3 subjects. Spent 40 hours in the editing room finding the narrative thread.',
    links: { demo: '#', repo: '#' },
  },
];

export const experienceData: ExperienceItem[] = [
  {
    id: 'exp1',
    year: '2024',
    location: 'New York, USA',
    title: 'Arriving at NYU',
    story: 'Moved to New York to start my M.S. at IDM. The city\'s chaotic energy immediately challenged my design sensibilities.',
    insight: 'I realized that good design isn\'t just about order; it\'s about finding harmony within chaos. This shifted my focus towards urban computing and civic tech.'
  },
  {
    id: 'exp2',
    year: '2023',
    location: 'Beijing, China',
    title: 'Graduation Exhibition',
    story: 'Spent 6 months building a massive interactive installation for my undergrad thesis. It broke down two days before the show.',
    insight: 'Resilience is a skill. I learned that "perfect" is the enemy of "done," and that the ability to troubleshoot under pressure is more valuable than raw technical skill.'
  },
  {
    id: 'exp3',
    year: '2023',
    location: 'Remote',
    title: 'First Freelance Fail',
    story: 'Took on a web project for a client with vague requirements. The scope crept until the project was unmanageable.',
    insight: 'Communication is 90% of the job. I learned to ask the hard questions early and that setting boundaries is a form of professional respect.'
  },
  {
    id: 'exp4',
    year: '2022',
    location: 'Shenzhen, China',
    title: 'Internship at Tech Giant',
    story: 'Worked as a UX intern. I was a small cog in a huge machine, tweaking button colors for weeks.',
    insight: 'I discovered I crave ownership and impact. While I learned rigorous process, I knew I needed to be closer to the "making" part of product development.'
  },
  {
    id: 'exp5',
    year: '2022',
    location: 'Workshop',
    title: 'Hackathon Weekend',
    story: 'Joined a team of strangers to build an accessibility tool in 48 hours. We didn\'t sleep, but we won "Best Impact".',
    insight: 'Collaboration fuels creativity. The best ideas came not from one genius, but from the friction and fusion of different perspectives.'
  },
  {
    id: 'exp6',
    year: '2021',
    location: 'University Lab',
    title: 'Discovering Physical Computing',
    story: 'Connected an LED to an Arduino for the first time and made it blink. It was magic.',
    insight: 'The screen is not the limit. This moment pivoted my entire career path from pure graphic design to HCI and tangible interfaces.'
  },
  {
    id: 'exp7',
    year: '2021',
    location: 'Rural China',
    title: 'Volunteer Teaching',
    story: 'Taught art and basic computer skills to children in a remote village for a summer.',
    insight: 'Technology is a privilege. I saw firsthand the digital divide, which sparked my ongoing interest in "Learning & Impact Design" and accessible tech.'
  },
  {
    id: 'exp8',
    year: '2020',
    location: 'Home',
    title: 'The COVID Shift',
    story: 'Everything went online. I had to learn how to design for connection in a time of isolation.',
    insight: 'Constraints drive innovation. I started exploring VR and digital communities, realizing that virtual spaces can have real emotional weight.'
  },
  {
    id: 'exp9',
    year: '2019',
    location: 'Beijing',
    title: 'First Code Line',
    story: 'Struggled through my first Processing (Java) class. I hated it until I made a circle follow my mouse.',
    insight: 'Code is a material. Just like clay or paint, it\'s a medium for expression, not just a utility tool. This changed my relationship with engineering.'
  },
  {
    id: 'exp10',
    year: '2018',
    location: 'Art Studio',
    title: 'Portfolio Prep',
    story: 'Spend endless nights drawing and painting to get into art school. Obsessed over technique.',
    insight: 'Technique is just the foundation. I realized that having something to say is more important than how beautifully you say it.'
  }
];
