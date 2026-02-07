import { useEffect, useRef, useState } from 'react';

const Experience = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const experiences = [
    {
      title: 'Freelance Web Developer',
      company: 'Vizzle',
      date: 'Jun 2025 – Jul 2025',
      points: [
        'Developed a responsive landing page for a virtual shopping try-on platform',
        'Built using React.js and Tailwind CSS for a clean and modern interface',
        'Focused on intuitive UI design and smooth user experience'
      ],
      side: 'right'
    },
    {
      title: 'Marketing Head at GEEK-ROOM',
      company: 'Geek-Room',
      date: 'Oct 2025',
      points: [
        'Led the complete marketing strategy and promotions for the Hela Crossroad event at KIET, increasing event visibility and participation',
        'Created and managed promotional content and campaigns across digital and on-ground platforms to drive audience engagement',
        'Collaborated with organizing teams to align marketing efforts with event objectives and ensure smooth execution'
      ],
      side: 'left'
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
    <section id="experience" className="min-h-screen bg-dark flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-12 sm:mb-16 lg:mb-20">
          <span className="text-white">Professional </span>
          <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              ref={(el) => (cardRefs.current[index] = el)}
              className={`mb-12 sm:mb-16 flex ${exp.side === 'right' ? 'md:justify-end' : 'md:justify-start'} items-center relative group transition-all duration-700 ${
                visibleCards.includes(index) ? 'opacity-100 translate-x-0' : `opacity-0 ${exp.side === 'right' ? 'translate-x-20' : '-translate-x-20'}`
              }`}
            >
              <div className={`w-full md:w-5/12 ${exp.side === 'right' ? 'md:pl-12' : 'md:pr-12'}`}>
                <div className="bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 hover:scale-105 active:scale-105 hover:border-primary active:border-primary hover:shadow-2xl hover:shadow-primary/30 active:shadow-2xl active:shadow-primary/30 transition-all duration-500 md:hover:rotate-1">
                  <h3 className="text-lg sm:text-xl font-bold text-primary mb-1 group-hover:text-white transition-colors duration-300">{exp.title}</h3>
                  <p className="text-primary/80 mb-2 group-hover:text-primary transition-colors duration-300 text-sm sm:text-base">{exp.company}</p>
                  <p className="text-gray-500 text-xs sm:text-sm mb-4">{exp.date}</p>
                  <ul className="space-y-2 text-gray-400 text-sm sm:text-base">
                    {exp.points.map((point, i) => (
                      <li key={i} className="hover:text-white hover:translate-x-2 transition-all duration-300">{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark group-hover:scale-150 group-hover:shadow-lg group-hover:shadow-primary transition-all duration-500 animate-pulse"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
