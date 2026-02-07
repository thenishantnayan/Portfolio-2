import { useEffect, useRef, useState } from 'react';

const Education = () => {
  const [visibleCards, setVisibleCards] = useState([]);
  const cardRefs = useRef([]);

  const achievements = [
    {
      title: '300+ DSA Problems Solved',
      description: 'Solved on platforms like LeetCode, GeeksforGeeks etc.'
    },
    {
      title: 'SQL Basic Certification',
      description: 'Achieved certification in SQL fundamentals and database management from Hackerrank'
    },
    {
      title: 'AWS Certified Cloud Practitioner',
      description: 'Certified in AWS cloud fundamentals'
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
    <section id="education" className="min-h-screen bg-dark flex items-center py-12 sm:py-16 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 lg:gap-12">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-3">
              <span className="w-1 h-8 sm:h-10 bg-primary"></span>
              <span className="text-white">Education</span>
            </h2>
            <div 
              ref={(el) => (cardRefs.current[0] = el)}
              className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-6 sm:p-8 shadow-xl hover:scale-105 active:scale-105 hover:border-primary/50 active:border-primary/50 hover:shadow-2xl active:shadow-2xl transition-all duration-700 ${
                visibleCards.includes(0) ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-20'
              }`}
            >
              <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start mb-4 gap-2">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">Bachelor of Technology (B.Tech)</h3>
                  <p className="text-primary text-sm sm:text-base">KIET Group Of Institutions, Ghaziabad</p>
                </div>
                <span className="text-blue-400 bg-blue-950/50 backdrop-blur-sm px-3 sm:px-4 py-1 rounded text-xs sm:text-sm self-start">2023 – 2027</span>
              </div>
              <div className="text-3xl sm:text-4xl font-bold text-white mb-4">
                7.48 <span className="text-gray-500 text-base sm:text-lg">CGPA</span>
              </div>
              <p className="text-gray-400 text-sm sm:text-base">
                <span className="font-semibold">Coursework:</span> Database Management Systems, Operating Systems, Data Structures, Object-Oriented Programming in CPP
              </p>
            </div>
          </div>
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8 flex items-center gap-3 mt-8 lg:mt-0">
              <span className="w-1 h-8 sm:h-10 bg-primary"></span>
              <span className="text-white">Achievements</span>
            </h2>
            <div className="space-y-4 sm:space-y-6">
              {achievements.map((achievement, index) => (
                <div 
                  key={index} 
                  ref={(el) => (cardRefs.current[index + 1] = el)}
                  className={`bg-white/5 backdrop-blur-md border border-white/10 rounded-xl p-4 sm:p-6 shadow-lg hover:border-primary/50 active:border-primary/50 hover:shadow-xl active:shadow-xl hover:scale-105 active:scale-105 transition-all duration-700 ${
                    visibleCards.includes(index + 1) ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-20'
                  }`}
                >
                  <h3 className="text-lg sm:text-xl font-bold text-white mb-2">{achievement.title}</h3>
                  <p className="text-gray-400 text-sm sm:text-base">{achievement.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
