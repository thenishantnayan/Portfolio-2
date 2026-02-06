const Experience = () => {
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
      title: 'Content Head at GEEK-ROOM',
      company: 'Geek-Room',
      date: 'Oct 2025',
      points: [
        'Led content creation and messaging for the Bhashabandhu event',
        'Contributed promotional and event-related content for HelaCross Road, supporting audience engagement',
        'Collaborated with the team to align content with event objectives and execution'
      ],
      side: 'left'
    }
  ];

  return (
    <section id="experience" className="min-h-screen bg-dark flex items-center py-20">
      <div className="max-w-7xl mx-auto px-8 w-full">
        <h2 className="text-5xl font-bold text-center mb-20">
          <span className="text-white">Professional </span>
          <span className="text-primary">Experience</span>
        </h2>
        <div className="relative">
          <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-0.5 bg-gray-700"></div>
          {experiences.map((exp, index) => (
            <div key={index} className={`mb-16 flex ${exp.side === 'right' ? 'justify-end' : 'justify-start'} items-center relative`}>
              <div className={`w-5/12 ${exp.side === 'right' ? 'pl-12' : 'pr-12'}`}>
                <div className="bg-darker border border-primary/30 rounded-xl p-6">
                  <h3 className="text-xl font-bold text-primary mb-1">{exp.title}</h3>
                  <p className="text-primary/80 mb-2">{exp.company}</p>
                  <p className="text-gray-500 text-sm mb-4">{exp.date}</p>
                  <ul className="space-y-2 text-gray-400">
                    {exp.points.map((point, i) => (
                      <li key={i}>{point}</li>
                    ))}
                  </ul>
                </div>
              </div>
              <div className="absolute left-1/2 transform -translate-x-1/2 w-4 h-4 bg-primary rounded-full border-4 border-dark"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
