import { useEffect, useRef, useState } from 'react';

const Skills = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const skills = {
    languages: ['C++ (DSA)', 'JavaScript', 'SQL','HTML5' ],
    frameworks: [ 'React.js', 'Tailwind CSS', 'Mongoose', 'JWT'],
    tools: ['Git', 'GitHub', 'REST APIs', 'Postman', 'VS Code', ]
  };

  const skillsArray = [
    { title: 'Languages', items: skills.languages },
    { title: 'Frameworks & Tech', items: skills.frameworks },
    { title: 'Tools & Platforms', items: skills.tools }
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
    <section id="skills" className="min-h-screen bg-navy flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-center mb-10 sm:mb-12 lg:mb-16">
          <span className="text-white">Technical </span>
          <span className="text-primary">Skills</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {skillsArray.map((skillGroup, index) => (
            <div 
              key={index}
              ref={(el) => (cardRefs.current[index] = el)}
              className={`bg-white/5 backdrop-blur-md rounded-2xl p-6 sm:p-8 border border-white/10 shadow-xl hover:border-primary/50 active:border-primary/50 hover:shadow-2xl hover:shadow-primary/20 active:shadow-2xl active:shadow-primary/20 hover:-translate-y-2 active:-translate-y-2 active:scale-105 transition-all duration-700 ${
                visibleCards.includes(index) ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}
            >
              <h3 className="text-xl sm:text-2xl font-bold text-white text-center mb-6 sm:mb-8 pb-4 border-b border-white/10">{skillGroup.title}</h3>
              <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
                {skillGroup.items.map((skill, i) => (
                  <span key={skill} className="px-3 sm:px-5 py-2 bg-white/10 backdrop-blur-sm border border-blue-900/50 text-blue-300 rounded-full text-xs sm:text-sm hover:scale-110 active:scale-110 hover:border-primary hover:text-primary active:border-primary active:text-primary transition-all duration-200 shadow-lg">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
