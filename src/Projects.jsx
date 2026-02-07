import { useEffect, useRef, useState } from 'react';

const Projects = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const projects = [
    {
      title: 'Vizzle Landing Page',
      date: 'Sep 2024',
      description: 'Designed and developed a promotional landing page for a virtual try-on shopping platform, focused on showcasing key features, driving user engagement, and supporting marketing campaigns.',
      tech: ['Html', 'Css', 'Javascript','React','Tailwind'],
      image: '/images/vizzlelanding.jpeg',
      github: 'https://github.com/thenishantnayan/vizzle-landing',
      demo: 'https://www.vizzle.in/'
    },
    {
      title: 'Astrology Wep App',
      date: 'Feb 2026',
      description: 'Developed an astrology app that provides personalized horoscope insights with a clean, user-friendly interface and smooth navigation.',
      tech: ['Html', 'Css', 'Javascript'],
      image: '/images/astrology.png',
      github: 'https://github.com/thenishantnayan/astrology',
      demo: 'https://astrology-smoky-delta.vercel.app/'
    },
    {
      title: 'Weather App',
      date: 'Sep 2024',
      description: 'A simple weather app built using **HTML, CSS, and JavaScript** that fetches and displays real-time weather information for any city.',
      tech: ['Html', 'Css', 'Javascript'],
      image: '/images/weather.png',
      github: 'https://github.com/thenishantnayan/weather',
      demo: 'https://weather-henna-ten-43.vercel.app/'
    },
    {
      title: 'Blinkit-Clone',
      date: 'Sep 2024',
      description: 'Built a Blinkit clone with a responsive UI, replicating core features and user flow using modern frontend technologies.',
      tech: ['Html', 'Css', 'Javascript'],
      image: '/images/blinkit.png',
      github: 'https://github.com/thenishantnayan/blinkit',
      demo: 'https://blinkit-red.vercel.app/'
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = cardRefs.current.indexOf(entry.target);
            setVisibleCards((prev) => [...new Set([...prev, index])]);
          }
        });
      },
      { threshold: 0.1 }
    );

    cardRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="min-h-screen bg-navy flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-white">Featured </span>
          <span className="text-primary">Projects</span>
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white/5 backdrop-blur-md rounded-xl overflow-hidden border border-white/10 hover:border-primary active:border-primary hover:shadow-2xl hover:shadow-primary/40 active:shadow-2xl active:shadow-primary/40 transition-all duration-700 group hover:-translate-y-2 active:-translate-y-2 md:hover:-translate-y-3 hover:scale-[1.01] active:scale-[1.01] md:hover:scale-[1.02] active:bg-white/10 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <div className="relative overflow-hidden">
                <img src={project.image} alt={project.title} className="w-full h-48 sm:h-56 lg:h-64 object-contain bg-darker group-hover:scale-110 transition-transform duration-700" />
                <div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
              <div className="p-4 sm:p-6">
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-3 sm:mb-4 gap-2">
                  <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-white group-hover:text-primary group-active:text-primary transition-colors duration-300">{project.title}</h3>
                  <span className="text-blue-400 text-xs sm:text-sm bg-blue-950 px-3 py-1 rounded group-hover:bg-primary group-hover:text-white group-active:bg-primary group-active:text-white transition-all duration-300 self-start sm:self-auto whitespace-nowrap">{project.date}</span>
                </div>
                <p className="text-gray-400 mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base group-hover:text-gray-300 transition-colors duration-300">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={tech} className="text-primary text-xs sm:text-sm border border-primary/30 px-2 sm:px-3 py-1 rounded-full hover:bg-primary hover:text-white active:bg-primary active:text-white active:scale-105 transition-all duration-300 hover:scale-110" style={{transitionDelay: `${i * 0.05}s`}}>{tech}</span>
                  ))}
                </div>
                <div className="flex gap-3 sm:gap-4 text-sm sm:text-base">
                  <a href={project.github} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary active:text-primary active:scale-110 transition-all duration-300 flex items-center gap-1 sm:gap-2 hover:gap-3">
                    GitHub <span className="text-lg sm:text-xl">↗</span>
                  </a>
                  <a href={project.demo} target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-primary active:text-primary active:scale-110 transition-all duration-300 flex items-center gap-1 sm:gap-2 hover:gap-3">
                    Live Demo <span className="text-lg sm:text-xl">↗</span>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
